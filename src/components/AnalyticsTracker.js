import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Card,
  CardHeader,
  CardBody,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faX } from '@fortawesome/free-solid-svg-icons';

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const initAnalytics = () => {
      let analytics = localStorage.getItem('portfolioAnalytics');
      if (!analytics) {
        analytics = {
          pathVisits: {},
          elementClicks: {},
          totalTimeSpent: 0
        };
      } else {
        try {
          analytics = JSON.parse(analytics);
          if (!analytics.pathVisits) analytics.pathVisits = {};
          if (!analytics.elementClicks) analytics.elementClicks = {};
          if (typeof analytics.totalTimeSpent !== 'number') analytics.totalTimeSpent = 0;
          
          Object.keys(analytics.pathVisits).forEach(path => {
            if (!analytics.pathVisits[path].visitors) {
              analytics.pathVisits[path].visitors = [];
            }
          });
        } catch (error) {
          analytics = {
            pathVisits: {},
            elementClicks: {},
            totalTimeSpent: 0
          };
        }
      }
      return analytics;
    };

    const getVisitorLocation = async () => {
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return {
          city: 'Development',
          region: 'Local',
          country: 'Testing',
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
      }

      try {
        const response = await fetch('https://ipapi.co/json/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();

        if (!data.error) {
          return {
            city: data.city || 'Unknown City',
            region: data.region || 'Unknown Region',
            country: data.country_name || 'Unknown Country',
            timezone: data.timezone || 'Unknown Timezone'
          };
        } else {
          return {
            city: 'Unknown',
            region: 'Unknown',
            country: 'Unknown',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
          };
        }
      } catch (error) {
        return {
          city: 'Error',
          region: 'Error',
          country: 'Error',
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
      }
    };

    const trackPageVisit = async () => {
      try {
        const analytics = initAnalytics();
        const path = location.pathname;
        const visitorLocation = await getVisitorLocation();
        
        if (!analytics.pathVisits) {
          analytics.pathVisits = {};
        }
        
        if (!analytics.pathVisits[path]) {
          analytics.pathVisits[path] = {
            count: 0,
            lastVisit: null,
            visitors: []
          };
        }
        
        analytics.pathVisits[path].count += 1;
        analytics.pathVisits[path].lastVisit = new Date().toISOString();
        
        analytics.pathVisits[path].visitors.push({
          timestamp: new Date().toISOString(),
          location: visitorLocation
        });
        
        localStorage.setItem('portfolioAnalytics', JSON.stringify(analytics));
      } catch (error) { }
    };

    const isMobileDevice = () => {
      return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    const trackInteraction = (e) => {
      if (e.type === 'touchstart' && isMobileDevice()) {
        window._lastTouchPosition = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
        return;
      }

      if (e.type === 'touchend' && isMobileDevice()) {
        if (window._lastTouchPosition) {
          const touch = e.changedTouches[0];
          const moveX = Math.abs(touch.clientX - window._lastTouchPosition.x);
          const moveY = Math.abs(touch.clientY - window._lastTouchPosition.y);
          
          if (moveX > 10 || moveY > 10) {
            return;
          }
        }
      }

      try {
        const analytics = initAnalytics();
        const path = location.pathname;
        const element = e.target;
        
        const elementType = element.tagName.toLowerCase();
        const elementId = element.id;
        const elementText = element.textContent?.trim();
        const dataAction = element.getAttribute('data-action');
        
        const clickInfo = {
          path: path,
          type: elementType,
          identifier: dataAction || elementText || elementId || 'unknown',
          timestamp: new Date().toISOString(),
          deviceType: isMobileDevice() ? 'mobile' : 'desktop'
        };
        
        const clickKey = `${path}::${dataAction || elementText || elementType}`;
        
        if (!analytics.elementClicks) {
          analytics.elementClicks = {};
        }
        
        if (!analytics.elementClicks[clickKey]) {
          analytics.elementClicks[clickKey] = {
            count: 0,
            details: clickInfo
          };
        }
        
        analytics.elementClicks[clickKey].count += 1;
        analytics.elementClicks[clickKey].lastClick = new Date().toISOString();
        
        localStorage.setItem('portfolioAnalytics', JSON.stringify(analytics));
      } catch (error) { }
    };

    let startTime = new Date();
    const trackTimeSpent = () => {
      try {
        const analytics = initAnalytics();
        const endTime = new Date();
        const timeSpent = (endTime - startTime) / 1000;
        
        analytics.totalTimeSpent += timeSpent;
        localStorage.setItem('portfolioAnalytics', JSON.stringify(analytics));
      } catch (error) { }
    };

    document.addEventListener('click', trackInteraction, true);
    document.addEventListener('touchstart', trackInteraction, true);
    document.addEventListener('touchend', trackInteraction, true);
    window.addEventListener('beforeunload', trackTimeSpent);
    trackPageVisit();

    return () => {
      document.removeEventListener('click', trackInteraction, true);
      document.removeEventListener('touchstart', trackInteraction, true);
      document.removeEventListener('touchend', trackInteraction, true);
      window.removeEventListener('beforeunload', trackTimeSpent);
    };
  }, [location.pathname]);

  return null;
};

const AnalyticsDashboard = () => {
  const [analytics, setAnalytics] = React.useState(null);
  const bgColor = useColorModeValue('white', 'gray.800');
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = () => {
      const data = JSON.parse(localStorage.getItem('portfolioAnalytics')) || {
        pathVisits: {},
        elementClicks: {},
        totalTimeSpent: 0
      };
      setAnalytics(data);
    };

    loadData();
    const interval = setInterval(loadData, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all analytics data? This cannot be undone.')) {
      localStorage.removeItem('portfolioAnalytics');
      setAnalytics({
        pathVisits: {},
        elementClicks: {},
        totalTimeSpent: 0
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('analyticsAuth');
    navigate('/admin/login');
  };

  if (!analytics) return null;

  return (
    <Container maxW="container.xl" py={8}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={6}>
        <Heading>Portfolio Analytics</Heading>
        <Button
          colorScheme="red"
          size="sm"
          onClick={handleReset}
          leftIcon={<FontAwesomeIcon icon={faX}/>}
        >
          Reset Analytics
        </Button>
        <Button
            colorScheme="gray"
            size="sm"
            onClick={handleLogout}
            leftIcon={<FontAwesomeIcon icon={faLock} />}
          >
            Logout
          </Button>
      </Box>
      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <Card bg={bgColor}>
          <CardHeader>
            <Heading size="md">Page Visits</Heading>
          </CardHeader>
          <CardBody>
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>Path</Th>
                  <Th isNumeric>Visits</Th>
                  <Th>Last Visit</Th>
                  <Th>Recent Visitors</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Object.entries(analytics.pathVisits)
                  .sort(([, a], [, b]) => b.count - a.count)
                  .map(([path, data]) => (
                    <Tr key={path}>
                      <Td>{path || '/'}</Td>
                      <Td isNumeric>{data.count}</Td>
                      <Td>{new Date(data.lastVisit).toLocaleString()}</Td>
                      <Td>
                        {data.visitors && data.visitors.length > 0 ? (
                          <Text fontSize="sm">
                            {data.visitors.slice(-1)[0].location?.city || 'Unknown'}, 
                            {data.visitors.slice(-1)[0].location?.country || 'Unknown'}
                          </Text>
                        ) : (
                          <Text fontSize="sm" color="gray.500">
                            Location pending...
                          </Text>
                        )}
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        <Card bg={bgColor}>
          <CardHeader>
            <Heading size="md">Element Interactions</Heading>
          </CardHeader>
          <CardBody>
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>Element</Th>
                  <Th>Path</Th>
                  <Th isNumeric>Clicks</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Object.entries(analytics.elementClicks)
                  .sort(([, a], [, b]) => b.count - a.count)
                  .map(([key, data]) => (
                    <Tr key={key}>
                      <Td>
                        <Text fontSize="sm" isTruncated maxW="200px">
                          {data.details.identifier}
                          {data.details.deviceType && (
                            <Text as="span" color="gray.500" ml={2}>
                              ({data.details.deviceType})
                            </Text>
                          )}
                        </Text>
                      </Td>
                      <Td>
                        <Text fontSize="sm" isTruncated maxW="150px">
                          {data.details.path}
                        </Text>
                      </Td>
                      <Td isNumeric>{data.count}</Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Container>
  );
};

export { AnalyticsTracker, AnalyticsDashboard };