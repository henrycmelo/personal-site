import React, { useEffect } from 'react';
import {
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

import { useLocation } from 'react-router-dom';

const AnalyticsTracker = () => {
    const location = useLocation();
  
    useEffect(() => {
      // Initialize analytics data structure
      const initAnalytics = () => {
        let analytics = localStorage.getItem('portfolioAnalytics');
        if (!analytics) {
          // Create new analytics object with all required properties
          analytics = {
            pathVisits: {},
            elementClicks: {},
            totalTimeSpent: 0
          };
        } else {
          try {
            analytics = JSON.parse(analytics);
            // Ensure all required properties exist
            if (!analytics.pathVisits) analytics.pathVisits = {};
            if (!analytics.elementClicks) analytics.elementClicks = {};
            if (typeof analytics.totalTimeSpent !== 'number') analytics.totalTimeSpent = 0;
            
            // Ensure visitors array exists for all paths
            Object.keys(analytics.pathVisits).forEach(path => {
              if (!analytics.pathVisits[path].visitors) {
                analytics.pathVisits[path].visitors = [];
              }
            });
          } catch (error) {
            console.error('Error parsing analytics:', error);
            // Reset analytics if parsing fails
            analytics = {
              pathVisits: {},
              elementClicks: {},
              totalTimeSpent: 0
            };
          }
        }
        return analytics;
      };
  
      // Function to get visitor's location
      const getVisitorLocation = async () => {
        // Development environment check
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          console.log('Development environment detected - using mock location');
          return {
            city: 'Development',
            region: 'Local',
            country: 'Testing',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
          };
        }
  
        try {
          // Use HTTPS for the API request since Netlify uses HTTPS
          const response = await fetch('https://ipapi.co/json/');
          const data = await response.json();
          console.log('Location data received:', data);
  
          if (!data.error) {
            return {
              city: data.city,
              region: data.region,
              country: data.country_name,
              timezone: data.timezone
            };
          } else {
            console.error('IP API returned error:', data.message);
            return null;
          }
        } catch (error) {
          console.error('Error fetching location:', error);
          return null;
        }
      };
  
      // Function to track page visits
      const trackPageVisit = async () => {
        const analytics = initAnalytics();
        const path = location.pathname;
        
        // Get visitor location when they visit
        const visitorLocation = await getVisitorLocation();
        console.log('Visitor location:', visitorLocation); // Debug log
        
        // Make sure pathVisits exists
        if (!analytics.pathVisits) {
          analytics.pathVisits = {};
        }
        
        // Initialize path data with all required properties
        if (!analytics.pathVisits[path]) {
          analytics.pathVisits[path] = {
            count: 0,
            lastVisit: null,
            visitors: [] // Initialize empty visitors array
          };
        }
        
        // Make sure visitors array exists (for backward compatibility)
        if (!analytics.pathVisits[path].visitors) {
          analytics.pathVisits[path].visitors = [];
        }
        
        // Update visit information
        analytics.pathVisits[path].count += 1;
        analytics.pathVisits[path].lastVisit = new Date().toISOString();
        
        // Add visitor location if available
        if (visitorLocation) {
          analytics.pathVisits[path].visitors.push({
            timestamp: new Date().toISOString(),
            location: visitorLocation
          });
        }
        
        localStorage.setItem('portfolioAnalytics', JSON.stringify(analytics));
      };
  
      // Function to track clicks
      const trackClick = (e) => {
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
          timestamp: new Date().toISOString()
        };
        
        const clickKey = `${path}::${dataAction || elementText || elementType}`;
        
        if (!analytics.elementClicks[clickKey]) {
          analytics.elementClicks[clickKey] = {
            count: 0,
            details: clickInfo
          };
        }
        
        analytics.elementClicks[clickKey].count += 1;
        analytics.elementClicks[clickKey].lastClick = new Date().toISOString();
        
        localStorage.setItem('portfolioAnalytics', JSON.stringify(analytics));
      };
  
      // Track time spent
      let startTime = new Date();
      const trackTimeSpent = () => {
        const analytics = initAnalytics();
        const endTime = new Date();
        const timeSpent = (endTime - startTime) / 1000;
        
        analytics.totalTimeSpent += timeSpent;
        localStorage.setItem('portfolioAnalytics', JSON.stringify(analytics));
      };
  
      // Set up event listeners and track initial visit
      document.addEventListener('click', trackClick);
      window.addEventListener('beforeunload', trackTimeSpent);
      trackPageVisit(); // This makes the API call via getVisitorLocation
  
      return () => {
        document.removeEventListener('click', trackClick);
        window.removeEventListener('beforeunload', trackTimeSpent);
      };
    }, [location.pathname]); // Re-run when path changes
  
    return null;
  };

const AnalyticsDashboard = () => {
  const [analytics, setAnalytics] = React.useState(null);
  const bgColor = useColorModeValue('white', 'gray.800');

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
    const interval = setInterval(loadData, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  if (!analytics) return null;

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>Portfolio Analytics</Heading>
      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {/* Page Visits */}
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

        {/* Click Analytics */}
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