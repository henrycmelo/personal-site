import React from "react";
import {
  Box,
  VStack,
  Text,
  Image,
  Grid,
  GridItem,
  Divider,
  HStack,
  ListItem,
  UnorderedList,
  Flex,
  SimpleGrid,
  Heading,
  Container,
  Card,
  CardBody,
  List,
  Tag,
  Tooltip,
  Highlight,
  Badge,
} from "@chakra-ui/react";

import recruitImage from "../assets/archives/recruit.svg";
import processImage from "../assets/archives/process.png";

import profileImage from "../assets/archives/profile.svg";
import userTestingLogo from "../assets/archives/usertesting.svg";
import userTestingImage from "../assets/archives/testing.svg";
import UsabilityMetrics from "../components/UsabilityMetrics";
import ctaImage from "../assets/archives/ctasticky.png";
import heroImage from "../assets/archives/herosticky.png";
import visualImage from "../assets/archives/visualsticky.png";
import layoutImage from "../assets/archives/layoutsticky.png";
import DesignRecommendations from "../components/DesignRecommendations";
import designRecommendations from "../assets/archives/data/designRecommendations";
import UsabilityResults from "../components/UsabilityResults";
import finalPresentationImage from "../assets/archives/finalpresentation.png";
import heroMockup from "../assets/archives/buttonsafter.png";
import { useAlertContext } from "../context/alertContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faLightbulb,
  faExclamationTriangle,
  faCheckCircle,
  faStar,
  faHandPointDown,
  faChartLine,
  faPuzzlePiece,
  faMagnifyingGlass,
  faVial,
  faBullseye,
  faHandHoldingUsd,
  faLayerGroup,
  faRocket,
  faChartBar,
  faUsers,
  faMousePointer,
  faCompass,
  faCreditCard,
  faLocationDot,
  faWandMagicSparkles,
  faColumns,
  faClock,
  faHeart,
  faExpandArrowsAlt,
  faShieldAlt,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import DividerSection from "../components/DividerSection";
import banner from "../assets/archives/banner.png";
import ResponsiveMenu from "../components/ResponsiveMenu";
import Footer from "../components/Footer";
import CaseStudyLayout from "../style/CaseStudyLayout";
import OverlayImage from "../components/OverlayImage";
import Badges from "../components/Badges";

const SteakHousePage = () => {
  const { sections, handleClick } = useAlertContext();

  const sectionsProject = [
    { id: "theproject", label: "The Project Brief", icon: faFileAlt },
    {
      id: "research",
      label: "research",
      icon: faMagnifyingGlass,
    },
    { id: "usability", label: "usability testing", icon: faVial },
    { id: "synthesis", label: "synthesis", icon: faPuzzlePiece },
    { id: "recommendations", label: "recommendations", icon: faBullseye },
    { id: "second", label: "Usability testing final round", icon: faVial },
    { id: "takeaway", label: "Reflection & Takeaways", icon: faLightbulb },
  ];

  return (
    <>
      <ResponsiveMenu isOtherPage sections={sections} />
      <Box position="relative" overflow="hidden" pt={32} px={12}>
        {/* Hero section with dark background and centered headline */}
        <Box
          bg={`linear-gradient(rgba(73,80,87,0.5), rgba(73,80,87,0.8)), url(${banner})`}
          bgSize={"cover"}
          color="semantic.background.primary"
          bgPosition="center"
          bgRepeat="no-repeat"
          py={20}
          px={4}
        >
          <Container
            maxW="container.xl"
            textAlign="center"
            textShadow="0 2px 4px rgba(0,0,0,0.8)"
          >
            <Text as="span" textStyle={"pbold"}>
              A UX Design Case Study
            </Text>

            <Text
              as="h1"
              textStyle={"h2"}
              lineHeight="1.2"
              mb={8}
              fontWeight="bold"
            >
              Designing for Busy People: How User-First UX Strategy Generated 1,040+ Active Users and $258K+ Revenue
            </Text>
          </Container>
        </Box>
        {/* Key metrics panel with white background */}
        <Container maxW="container.lg" mt={-8} centerContent>
          <Box
            bg="semantic.background.secondary"
            rounded="lg"
            width="full"
            shadow="xl"
            overflow="hidden"
          >
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={8}
              p={{ base: 8, md: 12 }}
            >
              <Box>
                <Text textStyle={"pbold"} color="semantic.accent" mb={2}>
                  Organization
                </Text>
                <Text textStyle="pbold">40minutes Training</Text>
                
              </Box>

              <Box>
                <Text textStyle={"pbold"} color="semantic.accent" mb={2}>
                  Description
                </Text>
                <Text color="gray.600">
                40Minutes was a fitness marketplace app I founded that connected certified trainers with busy professionals for standardized 40-minute workouts at the clients’ preferred locations.
                </Text>
              </Box>

              <Box>
                <Text textStyle={"pbold"} color="semantic.accent" mb={4}>
                  Key Results
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  <Box>
                    <Text textStyle={"h3bold"} color="semantic.accent">
                       $258k
                    </Text>
                    <Text textStyle={"caption"} color="gray.600">
                       average in annual revenue
                    </Text>
                  </Box>
                  <Box>
                    <Text textStyle={"h3bold"} color="semantic.accent">
                    1,040+
                    </Text>
                    <Text textStyle={"caption"} color="gray.600">
                    average total users
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </SimpleGrid>
          </Box>
        </Container>

        <Container maxW="1200px" py={10}>
          <Flex direction={{ base: "column", lg: "row" }} gap={8}>
            {/* Left Side - Problem, Solution, Results */}
            <Box flex="3" minW={{ base: "100%", lg: "60%" }}>
              <VStack align="stretch" spacing={10}>
                {/* Problem Section */}
                <Box color="gray.600">
                  <Heading
                    textStyle="pbold"
                    textTransform={"capitalize"}
                    color="semantic.text.primary"
                    pb={4}
                  >
                    Problem
                  </Heading>
                  <Text textStyle="p">
                  Before the app, 40minutes operated as a successful service but was drowning in manual processes that severely limited growth and efficiency:
                  </Text>
                  <List spacing={2} mt={4} color="semantic.accent">
                    <ListItem
                      display="flex"
                      alignItems="center"
                      color="semantic.accent"
                    >
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                      <strong>Tedious Booking Process:</strong> Each client request initiated a time-consuming workflow—receiving WhatsApp messages, checking spreadsheets, confirming trainer availability, updating records, and sending confirmations. This process took between 30 minutes to 4 hours per booking.
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                      <strong>Error-Prone Management: </strong> Manual tracking across multiple spreadsheets led to double-bookings, missed cancellations, package counting errors, and payment calculation mistakes.
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                      <strong>Scaling Limitations:</strong> Growth was constrained by administrative capacity, with each new client adding significant operational overhead and no way to efficiently manage increasing demand.
                      </Text>
                    </ListItem>
                    
                  </List>
                </Box>

                {/* Solution Section */}
                <Box color="gray.600">
                  <Heading
                    textStyle="pbold"
                    textTransform={"capitalize"}
                    color="semantic.text.primary"
                    pb={4}
                  >
                    Solution
                  </Heading>

                  <Text textStyle="p">
                  I designed a comprehensive digital experience that automated the most time-consuming aspects of our operations:
                  </Text>
                  <List spacing={2} mt={4} color="semantic.accent">
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                      <strong>Streamlined Booking System:</strong> Created an intuitive interface allowing clients to book sessions in under a minute, with automated trainer matching and instant confirmations.
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                     <strong> Centralized Management Platform: </strong>Developed a unified system to replace multiple spreadsheets, with automatic tracking of client packages, trainer schedules, and payment calculations.
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                      <strong>Dual-User Experience: </strong> Crafted distinct but connected interfaces for clients and trainers, addressing the specific needs of each user group while maintaining operational consistency.
                      </Text>
                    </ListItem>
                    
                  </List>
                </Box>

                {/* Results Section */}
                <Box color="gray.600">
                  <Heading
                    textStyle="pbold"
                    textTransform={"capitalize"}
                    color="semantic.text.primary"
                    pb={4}
                  >
                    Results
                  </Heading>

                  <Text fontSize="lg" mb={4}>
                  The transformation from manual to digital operations delivered significant measurable outcomes:
                  </Text>

                  <List spacing={2} mt={4} color="semantic.accent">
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                      <strong>Operational Efficiency:</strong> Reduced booking time from 30+ minutes to under 1 minute
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                      <strong>Business Growth:</strong> Delivered 37,440+ sessions to 1,040+ active monthly users
                      </Text>
                      
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                      <strong>Revenue Generation:</strong> Achieved annual revenue of COP 998,400,000 (~USD 258,000)
                      </Text>
                    </ListItem>

                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                      <strong>Client Satisfaction:</strong> Attained 90% word-of-mouth referral rate
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                      <strong>Scalability:</strong> Increased capacity by 400% without additional administrative staff
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                      <strong>Error Reduction:</strong> Decreased booking and tracking errors by 94%
                      </Text>
                    </ListItem>
                  </List>
                </Box>
              </VStack>
            </Box>

            {/* Right Side - My Role & Approach Card */}
            <Card
              flex="1"
              minW={{ base: "100%", lg: "300px" }}
              maxW={{ base: "100%", lg: "340px" }}
              bg="semantic.background.secondary"
              shadow="xl"
              borderRadius="lg"
              h="fit-content"
            >
              {/* My Role Section */}

              <CardBody>
                <Text textStyle={"pbold"} color="semantic.accent" pb={2}>
                  My Role
                </Text>
                <Text textStyle={"caption"} color="gray.600">
                  Position
                </Text>
                <Text
                  textStyle={"pbold"}
                  textTransform={"capitalize"}
                  color={"semantic.text.primary"}
                  mb={4}
                >
                  Lead Product Designer & Founder
                </Text>

                <Text textStyle={"caption"} color="gray.600" mb={2}>
                  Responsibilities
                </Text>

                <Flex flexWrap="wrap" gap={2} mb={6}>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    User Research
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    Visual Design
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    Wireframing
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    Information Architecture
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    Prototyping
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    Usability Testing
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    User Flows
                  </Tag>
                </Flex>

                <Divider variant="regular" />

                {/* Approach Section */}
                <Box pt={2} borderColor="gray.200">
                  <Text textStyle={"pbold"} color="semantic.accent" py={2}>
                    Approach
                  </Text>

                  <Text textStyle={"caption"} color="gray.600">
                    Methodology
                  </Text>
                  <Text
                    textStyle={"pbold"}
                    mb={4}
                    textTransform={"capitalize"}
                    color={"semantic.text.primary"}
                  >
                    User-Centered Design 
                  </Text>

                  <Text textStyle={"caption"} color="gray.600">
                    Timeline
                  </Text>
                  <Text
                    textStyle={"pbold"}
                    mb={4}
                    textTransform={"capitalize"}
                    color={"semantic.text.primary"}
                  >
                    6 Months
                  </Text>

                  <Text textStyle={"caption"} color="gray.600">
                    Product Team Size
                  </Text>
                  <Text
                    textStyle={"pbold"}
                    textTransform={"capitalize"}
                    color={"semantic.text.primary"}
                  >
                    3 <Text as='span' textStyle={"caption"} >(1 product designer, 1 frontend developer, 1 backend developer)</Text>
                  </Text>
                </Box>
              </CardBody>
            </Card>
          </Flex>
        </Container>
      </Box>
      <Divider variant="dividerSection" />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        w={"100%"}
        p={24}
        textAlign="center"
      >
        <Text textStyle="h3" color="semantic.text.primary">
          Read the full case study below
        </Text>
        <Text textStyle="p" color="gray.600">
        Discover how deep analysis of manual processes inspired a booking system redesign that slashed wait times from hours to seconds, driving exponential business growth through intuitive, user-centered design.
        </Text>
        <Text textStyle="caption" color="gray.500" pb={4}>
          6 mins read
        </Text>
        <Box
          onClick={() => handleClick("theproject")}
          cursor="pointer"
          color="semantic.accent"
        >
          <FontAwesomeIcon icon={faHandPointDown} size="2x" />
        </Box>
      </Box>
      <Divider variant="dividerSection" />
      <Box position="relative" pt={16} px={12}>
        <CaseStudyLayout sections={sectionsProject}>
          <VStack align="stretch" spacing={10} pb={12} id="theproject">
            {/* Overview Section */}
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                Overview
              </Heading>
              <Box pb={4}>
                <Text
                  textStyle="pbold"
                  textTransform="uppercase"
                  color="gray.600"
                  pb={3}
                  as="h3"
                >
                  Background
                </Text>
                <Box
  pl={5}
  py={4}
  borderLeftWidth="2px"
  borderLeftColor="semantic.background.tertiary"
>
<Text textStyle="p" mb={4}>
    <Highlight
      query="40minutes"
      styles={{ px: '1', py: '0.5', bg: 'semantic.accent', color:'semantic.background.primary', rounded: 'md' }}
    >
      The concept for 40minutes was born from a simple conversation with a friend who wanted to stay fit but lacked both the time to visit a gym and the motivation to exercise in traditional fitness environments. This sparked extensive market research during my final year of engineering school, revealing a significant gap: busy professionals needed efficient, flexible fitness solutions that could adapt to their demanding schedules.
    </Highlight>
  </Text>
  <Text textStyle="p">
    
      Collaborating with personal trainers and physical therapists, I developed the 40minutes concept—a streamlined workout experience that packed maximum results into just 40 minutes with minimal rest periods, keeping exercises dynamic and engaging. This standardized format was designed to work across multiple disciplines including pilates, yoga, kickboxing, functional training, and TRX, creating a consistent yet versatile experience that could be delivered wherever clients needed it most.
    
  </Text>
</Box>

              </Box>
              <Box pb={4}>
                <Text
                  textStyle="pbold"
                  textTransform="uppercase"
                  color="gray.600"
                  pb={3}
                  as="h3"
                >
                  the challenge
                </Text>
                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                  Before the app, 40minutes was already operating as a successful service, but the entirely manual process created significant operational challenges:
                  </Text>
                </Box>
                
                <Box w="100%" color={"gray.600"} py={4}>
                                <VStack align="stretch" spacing={8}>
                                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4} mb={8}>
        {/* Time-consuming booking process */}
        <GridItem>
          <VStack
            align="stretch"
            bg="semantic.background.secondary"
            p={4}
            h="100%"
            spacing={4}
            rounded="lg"
          >
            <VStack>
              <Box color="semantic.accent">
                <FontAwesomeIcon icon={faClock} size="xl" />
              </Box>
              <Text
                textStyle={"captionbold"}
                color="semantic.text.primary"
                textTransform="uppercase"
              >
                Time-consuming Process
              </Text>
              <Badges >
                30 min - 4 hrs
              </Badges>
            </VStack>
            <Divider variant={"dividerSection"} />

            <UnorderedList spacing={3}>
              <ListItem>
                <Text textStyle="caption">
                  Receiving WhatsApp requests from clients
                </Text>
              </ListItem>
              <ListItem>
                <Text textStyle="caption">
                  Manually checking spreadsheets for trainer availability
                </Text>
              </ListItem>
              <ListItem>
                <Text textStyle="caption">
                  Confirming with trainers via separate messages
                </Text>
              </ListItem>
              <ListItem>
                <Text textStyle="caption">
                  Updating spreadsheets with new bookings
                </Text>
              </ListItem>
              <ListItem>
                <Text textStyle="caption">
                  Messaging clients with confirmation
                </Text>
              </ListItem>
            </UnorderedList>
          </VStack>
        </GridItem>

        {/* Error-prone tracking systems */}
        <GridItem>
          <VStack
            align="stretch"
            bg="semantic.background.secondary"
            p={4}
            h="100%"
            spacing={4}
            rounded="lg"
          >
            <VStack>
              <Box color="semantic.accent">
                <FontAwesomeIcon icon={faExclamationTriangle} size="xl" />
              </Box>
              <Text
                textStyle={"captionbold"}
                color="semantic.text.primary"
                textTransform="uppercase"
              >
                Error-prone Tracking
              </Text>
              <Badges >
                Frequent Errors
              </Badges>
            </VStack>
            <Divider variant={"dividerSection"} />

            <UnorderedList spacing={3}>
              <ListItem>
                <Text textStyle="caption">
                  Occasional double-bookings of trainers
                </Text>
              </ListItem>
              <ListItem>
                <Text textStyle="caption">
                  Missed cancellations in the system
                </Text>
              </ListItem>
              <ListItem>
                <Text textStyle="caption">
                  Inaccurate client package tracking
                </Text>
              </ListItem>
              <ListItem>
                <Text textStyle="caption">
                  Payment calculation errors for trainers
                </Text>
              </ListItem>
            </UnorderedList>
          </VStack>
        </GridItem>

        {/* Scaling limitations */}
        <GridItem>
          <VStack
            align="stretch"
            bg="semantic.background.secondary"
            p={4}
            h="100%"
            spacing={4}
            rounded="lg"
          >
            <VStack>
              <Box color="semantic.accent">
                <FontAwesomeIcon icon={faChartLine} size="xl" />
              </Box>
              <Text
                textStyle={"captionbold"}
                color="semantic.text.primary"
                textTransform="uppercase"
              >
                Scaling Limitations
              </Text>
              <Badges >
                Growth Bottleneck
              </Badges>
            </VStack>
            <Divider variant={"dividerSection"} />

            <UnorderedList spacing={3}>
              <ListItem>
                <Text textStyle="caption">
                  Admin capacity to handle bookings
                </Text>
              </ListItem>
              <ListItem>
                <Text textStyle="caption">
                  Real-time availability management
                </Text>
              </ListItem>
              <ListItem>
                <Text textStyle="caption">
                  Manual coordination of last-minute changes
                </Text>
              </ListItem>
            </UnorderedList>
          </VStack>
        </GridItem>
      </Grid>
                                </VStack>
                              </Box>
              </Box>
              <Box pb={4}>
                <Text
                  textStyle="pbold"
                  textTransform="uppercase"
                  color="gray.600"
                  pb={3}
                  as="h3"
                >
                  design challenge
                </Text>
                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                  Transform this tedious manual operation into a seamless digital experience that would:
                  </Text>
                </Box>
                <Box py={4}>
                <SimpleGrid
        columns={{ base: 1, md: 5 }}
        spacing={6}
        textAlign="center"
        textTransform="capitalize"
      >
        <Box
          bg="semantic.background.secondary"
          p={4}
          borderRadius="lg"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <FontAwesomeIcon
            icon={faBolt}
            color="#107c7c"
            size="2xl"
          />
          <Text
            textStyle={"captionbold"}
            color="semantic.text.primary"
            textTransform="uppercase"
            py={4}
          >
            Reduce Booking Time
          </Text>
          <Text textStyle={'caption'} color="gray.600">
            30+ → 1 minute
          </Text>
        </Box>

        <Box
          bg="semantic.background.secondary"
          p={4}
          borderRadius="lg"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <FontAwesomeIcon 
            icon={faShieldAlt} 
            color="#107c7c" 
            size="2xl" 
          />
          <Text
            textStyle={"captionbold"}
            color="semantic.text.primary"
            textTransform="uppercase"
            py={4}
          >
            Eliminate Errors
          </Text>
          <Text textStyle={'caption'} color="gray.600">
            In workflow
          </Text>
        </Box>

        <Box
          bg="semantic.background.secondary"
          p={4}
          borderRadius="lg"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <FontAwesomeIcon
            icon={faUsers}
            color="#107c7c"
            size="2xl"
          />
          <Text
            textStyle={"captionbold"}
            color="semantic.text.primary"
            textTransform="uppercase"
            py={4}
          >
            Support Dual Users
          </Text>
          <Text fontSize="sm" color="semantic.text.secondary">
            Clients/trainers 
          </Text>
        </Box>

        <Box
          bg="semantic.background.secondary"
          p={4}
          borderRadius="lg"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <FontAwesomeIcon
            icon={faExpandArrowsAlt}
            color="#107c7c"
            size="2xl"
          />
          <Text
            textStyle={"captionbold"}
            color="semantic.text.primary"
            textTransform="uppercase"
            py={4}
          >
            Scale Operations
          </Text>
          <Text fontSize="sm" color="semantic.text.secondary">
          low-overhead
          </Text>
        </Box>
        
        <Box
          bg="semantic.background.secondary"
          p={4}
          borderRadius="lg"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <FontAwesomeIcon
            icon={faHeart}
            color="#107c7c"
            size="2xl"
          />
          <Text
            textStyle={"captionbold"}
            color="semantic.text.primary"
            textTransform="uppercase"
            py={4}
          >
            Maintain Touch
          </Text>
          <Text fontSize="sm" color="semantic.text.secondary">
          Customer care
          </Text>
        </Box>
      </SimpleGrid>
              <Text as="p" textStyle="caption" textAlign="center" mt={2}>
                Project Goals
              </Text>
            </Box>
              </Box>
              
            </Box>
            <Box
              rounded="lg"
              width="full"
              bg="semantic.background.secondary"
              p={{ base: 8, md: 12 }}
            >
              <Box textAlign="center">
                <Heading
                  textStyle="pbold"
                  textTransform={"capitalize"}
                  color="semantic.text.primary"
                >
                  Quick Stats
                </Heading>
                <Text textStyle={"caption"} color="gray.600">
                  Key metrics from our usability testing rounds
                </Text>
              </Box>
              <SimpleGrid
                columns={{ base: 1, md: 4 }}
                spacing={6}
                textAlign="center"
                textTransform="capitalize"
              >
                <Box>
                  <Text textStyle={"h3bold"} color="semantic.accent">
                    37,440+
                  </Text>
                  <Text textStyle={"caption"} color="gray.600">
                    Minimum sessions delivered annually
                  </Text>
                </Box>
                <Box>
                  <Text textStyle={"h3bold"} color="semantic.accent">
                    1,040+
                  </Text>
                  <Text textStyle={"caption"} color="gray.600">
                  average total users
                  </Text>
                </Box>
                <Box>
                  <Text textStyle={"h3bold"} color="semantic.accent">
                    $258K 
                  </Text>
                  <Text textStyle={"caption"} color="gray.600">
                  annual revenue generated
                  </Text>
                </Box>
                <Box>
                  <Text textStyle={"h3bold"} color="semantic.accent">
                    97% 
                  </Text>
                  <Text textStyle={"caption"} color="gray.600">
                  reduction in booking time (from hours to seconds)
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>
          

            


            
          </VStack>

          <DividerSection icon={faMagnifyingGlass} />

        </CaseStudyLayout>
      </Box>

      <Divider variant="section" />

      <Footer />
    </>
  );
};

export default SteakHousePage;
