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
} from "@fortawesome/free-solid-svg-icons";
import DividerSection from "../components/DividerSection";
import banner from "../assets/archives/banner.png";
import ResponsiveMenu from "../components/ResponsiveMenu";
import Footer from "../components/Footer";
import CaseStudyLayout from "../style/CaseStudyLayout";
import OverlayImage from "../components/OverlayImage";

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
              How a Streamlined Donation Flow Increased Contributions by 25%
              Through Strategic Usability Testing and UX Design
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
                <Text textStyle="pbold">Archives of American Art</Text>
                <Box fontSize="sm" color="gray.600" mt={1}>
                  (AAA)
                </Box>
              </Box>

              <Box>
                <Text textStyle={"pbold"} color="semantic.accent" mb={2}>
                  Description
                </Text>
                <Text color="gray.600">
                  The AAA needed to increase online donations by improving their
                  digital giving experience, addressing user frustration points,
                  and creating a more intuitive donation process based on user
                  feedback.
                </Text>
              </Box>

              <Box>
                <Text textStyle={"pbold"} color="semantic.accent" mb={4}>
                  Key Results
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  <Box>
                    <Text textStyle={"h3bold"} color="semantic.accent">
                      25%
                    </Text>
                    <Text textStyle={"caption"} color="gray.600">
                      increased in total donations
                    </Text>
                  </Box>
                  <Box>
                    <Text textStyle={"h3bold"} color="semantic.accent">
                      40%
                    </Text>
                    <Text textStyle={"caption"} color="gray.600">
                      reduction in process time
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
                    Digital donation pathways were causing significant user
                    abandonment due to poor usability and unclear information
                    architecture.
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
                        Low usability score with initial SUS score of only 48,
                        indicating poor usability
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Hidden donation options with 45% of users couldn't
                        locate donation buttons
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Time-consuming process with average donation attempt
                        took 8.5 minutes
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Excessive form errors with 70% of users encountered
                        errors during checkout
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Poor visual hierarchy where critical information lacked
                        emphasis and clarity
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
                    A comprehensive redesign focusing on key usability
                    improvements:
                  </Text>
                  <List spacing={2} mt={4} color="semantic.accent">
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Optimized call-to-action buttons with consistent
                        placement and accent colors
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Redesigned hero section with clear value proposition and
                        emotional connection
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Enhanced visual hierarchy using UI cards and emphasized
                        key information
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Streamlined navigation with logical content flow and
                        simplified form layout
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
                    Based on a mixed-method research approach combining
                    quantitative metrics and qualitative usability testing, our
                    redesigned donation experience delivered significant
                    improvements to both user experience and organizational
                    outcomes.
                  </Text>

                  <List spacing={2} mt={4} color="semantic.accent">
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        35% increase in donation completion rate
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        40% reduction in process time
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        25% increase in total donations
                      </Text>
                    </ListItem>

                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        94% task success rate in final testing
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        34-point improvement in SUS score (48 → 82)
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
                  UX Design Lead
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
                    Usability Testing
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
                    Visual Design
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
                    User-Centered Design Sprint
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
                    8 weeks
                  </Text>

                  <Text textStyle={"caption"} color="gray.600">
                    Team Size
                  </Text>
                  <Text
                    textStyle={"pbold"}
                    textTransform={"capitalize"}
                    color={"semantic.text.primary"}
                  >
                    4
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
          Explore how user-centered redesign transformed the donation experience
          through iterative testing and evidence-based improvements
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
                  <Text textStyle="p">
                    The Archives of American Art (AAA), the nation's largest
                    visual arts archive, faced significant challenges with their
                    online donation process. Users were abandoning donations due
                    to poor usability, hidden donation options, and a
                    time-consuming checkout flow that frustrated potential
                    donors.
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
                  Relevance
                </Text>
                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                    With nonprofit organizations increasingly relying on digital
                    channels for fundraising, a frustrating donation experience
                    directly impacts financial sustainability. For cultural
                    institutions like the AAA, every abandoned donation
                    represents lost support for preservation and accessibility
                    of America's artistic heritage. This project demonstrates
                    how strategic UX improvements can transform donor engagement
                    through evidence-based design decisions.
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
                  My Impact
                </Text>
                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                    As UX Design Lead, I spearheaded a comprehensive
                    user-centered design sprint that transformed the donation
                    experience. Through systematic usability testing and
                    iterative design with a team of four, we identified critical
                    friction points and implemented targeted solutions -
                    including optimized CTAs, redesigned hero sections, enhanced
                    visual hierarchy, and streamlined navigation. These
                    improvements made it significantly more intuitive for users
                    to support the preservation of America's art heritage.
                  </Text>
                </Box>
              </Box>
              <HStack
                justifyContent="center"
                width="100%"
                alignItems="center"
                spacing={12}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  pb={4}
                >
                  <Image
                    src={heroMockup}
                    alt="mockup Archives of American Art"
                    height={"auto"}
                    maxHeight={"600px"}
                  />

                  <Text as="p" textStyle="caption" textAlign="center" mt={2}>
                    Archives of American Art new donation page
                  </Text>
                </Box>
              </HStack>
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
                columns={{ base: 1, md: 3 }}
                spacing={6}
                textAlign="center"
                textTransform="capitalize"
              >
                <Box>
                  <Text textStyle={"h3bold"} color="semantic.accent">
                    94%
                  </Text>
                  <Text textStyle={"caption"} color="gray.600">
                    Task success rate in final testing
                  </Text>
                </Box>
                <Box>
                  <Text textStyle={"h3bold"} color="semantic.accent">
                    40%
                  </Text>
                  <Text textStyle={"caption"} color="gray.600">
                    Reduction in process time
                  </Text>
                </Box>
                <Box>
                  <Text textStyle={"h3bold"} color="semantic.accent">
                    25%
                  </Text>
                  <Text textStyle={"caption"} color="gray.600">
                    Increase in donations
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>
            <Box pb={4}>
              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                Project goals
              </Text>
              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color="gray.600">
                  The initial release focuses on core ordering functionality to
                  provide immediate value and reduce third-party platform
                  dependency. Starting with essential features allows quick
                  market entry while gathering user feedback for future
                  iterations.
                </Text>
              </Box>
            

            
              <SimpleGrid
                columns={{ base: 1, md: 4 }}
                spacing={6}
                textAlign="center"
                textTransform="capitalize"
                my={4}
                
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
                    icon={faChartLine}
                    color="#107c7c"
                    size="2xl"
                  />
                  <Text
                    textStyle={"captionbold"}
                    color="semantic.text.primary"
                    textTransform="uppercase"
                    py={4}
                  >
                    Increase Conversions
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
                  <FontAwesomeIcon icon={faRocket} color="#107c7c" size="2xl" />
                  <Text
                    textStyle={"captionbold"}
                    color="semantic.text.primary"
                    textTransform="uppercase"
                    py={4}
                  >
                    Streamline Process
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
                    icon={faLayerGroup}
                    color="#107c7c"
                    size="2xl"
                  />
                  <Text
                    textStyle={"captionbold"}
                    color="semantic.text.primary"
                    textTransform="uppercase"
                    py={4}
                  >
                    Improve Hierarchy
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
                    icon={faHandHoldingUsd}
                    color="#107c7c"
                    size="2xl"
                  />
                  <Text
                    textStyle={"captionbold"}
                    color="semantic.text.primary"
                    textTransform="uppercase"
                    py={4}
                  >
                    Boost Donations
                  </Text>
                </Box>
              </SimpleGrid>
              <Text as="p" textStyle="caption" textAlign="center" mt={2}>
                Project Goals
              </Text>
            </Box>

            {/* Process */}

            <Box pb={4}>
              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                Process
              </Text>
              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color="gray.600">
                  Our approach followed a user-centered design methodology over
                  an 8-week sprint. We began with secondary research to
                  understand donor behaviors and motivations, followed by
                  usability testing to identify critical pain points in the
                  existing donation flow. Through synthesis of our findings, we
                  developed targeted recommendations focusing on improving
                  visual hierarchy, streamlining navigation, and optimizing
                  call-to-action elements. We validated these solutions through
                  iterative usability testing before implementation, concluding
                  with reflection on key outcomes and lessons learned.
                </Text>
              </Box>
              <Box pt={4} textAlign="center">
                <Box
                  rounded="lg"
                  width="full"
                  bg="semantic.background.secondary"
                  p={{ base: 8, md: 12 }}
                >
                  <OverlayImage src={processImage} />
                  <Text textStyle={"caption"} color="gray.600">
                    Usability study process
                  </Text>
                </Box>
              </Box>
            </Box>
          </VStack>

          <DividerSection icon={faMagnifyingGlass} />

          <VStack align="stretch" spacing={10} py={12} id="research">
            {/* phase 1 Section */}
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 1: research
              </Heading>
              <Text as="p" textStyle="p" pb={4}>
                To understand donor behaviors and preferences, our research
                focused on identifying key characteristics of potential donors
                and creating effective testing criteria.
              </Text>
              <Box pb={4}>
                <Text
                  textStyle="pbold"
                  textTransform="uppercase"
                  color="gray.600"
                  pb={3}
                  as="h3"
                >
                  secondary research
                </Text>

                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                    Our research began with an extensive analysis of donor
                    behavior and digital giving trends. We examined reports from
                    leading nonprofit organizations, analyzed charitable giving
                    databases, and reviewed academic studies on donation
                    patterns. This comprehensive approach helped us understand
                    both donor demographics and digital behavior patterns in the
                    cultural sector.
                  </Text>
                </Box>
              

              <Box w="100%" color={"gray.600"} py={8}>
                <VStack align="stretch" spacing={8}>
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={4}
                    overflowX="auto"
                  >
                    {/* Accessibility */}
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
                            <FontAwesomeIcon icon={faChartBar} size="xl" />
                          </Box>
                          <Text
                            textStyle="captionbold"
                            color="semantic.text.primary"
                            textTransform="uppercase"
                            textAlign="center"
                          >
                            NCCS{" "}
                            <Tooltip
                              label="National Center for Charitable Statistics"
                              fontSize="xs"
                              hasArrow
                            >
                              <Box
                                as="span"
                                cursor="help"
                                color="gray.600"
                                textTransform={"lowercase"}
                              >
                                (i)
                              </Box>
                            </Tooltip>
                          </Text>
                        </VStack>
                        <Divider variant={"dividerSection"} />

                        <UnorderedList spacing={3}>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              67% of arts and culture donors are aged 35-65
                            </Text>
                          </ListItem>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              Average online donation amount: $125
                            </Text>
                          </ListItem>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              72% of donations occur during business hours
                            </Text>
                          </ListItem>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              35% of donors abandon forms during completion
                            </Text>
                          </ListItem>
                        </UnorderedList>
                      </VStack>
                    </GridItem>

                    {/* Key Learnings */}
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
                            <FontAwesomeIcon icon={faUsers} size="xl" />
                          </Box>
                          <Text
                            textStyle={"captionbold"}
                            color="semantic.text.primary"
                            textTransform="uppercase"
                          >
                            Donor Demographics
                          </Text>
                        </VStack>
                        <Divider variant={"dividerSection"} />

                        <UnorderedList spacing={3}>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              65% have a bachelor's degree or higher
                            </Text>
                          </ListItem>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              82% donate to multiple organizations yearly
                            </Text>
                          </ListItem>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              45% prefer online donation methods
                            </Text>
                          </ListItem>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              28% are repeat donors to cultural institutions
                            </Text>
                          </ListItem>
                        </UnorderedList>
                      </VStack>
                    </GridItem>

                    {/* Next Steps */}
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
                            <FontAwesomeIcon icon={faMousePointer} size="xl" />
                          </Box>
                          <Text
                            textStyle={"captionbold"}
                            color="semantic.text.primary"
                            textTransform="uppercase"
                          >
                            Digital Behavior
                          </Text>
                        </VStack>
                        <Divider variant={"dividerSection"} />
                        <UnorderedList spacing={3}>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              51% access donation forms via mobile devices
                            </Text>
                          </ListItem>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              Average form completion time: 7.5 minutes
                            </Text>
                          </ListItem>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              40% increase in online giving during 2020-2021
                            </Text>
                          </ListItem>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              25% higher donation completion on simplified forms
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
                  donor and screening
                </Text>

                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                    Based on this research, we identified our target donor and
                    established our screening criteria.
                  </Text>
                </Box>
              </Box>

              <Box pb={4} w="100%" color={"gray.600"}>
                <VStack align="stretch" spacing={8}>
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    gap={4}
                    overflowX="auto"
                  >
                    {/* Problem */}
                    <GridItem>
                      <VStack
                        align="stretch"
                        bg="semantic.background.secondary"
                        p={4}
                        h="100%"
                        spacing={4}
                        rounded="lg"
                      >
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          width="100%"
                        >
                          <Image
                            src={profileImage}
                            alt="calendar Illustration"
                            maxW="100px"
                          />
                        </Box>
                        <Box textAlign="center">
                          <Heading
                            textStyle="pbold"
                            textTransform={"capitalize"}
                            color="semantic.accent"
                            pb={2}
                          >
                            Donor profile
                          </Heading>
                          <UnorderedList
                            textStyle={"caption"}
                            color="gray.600"
                            textAlign={"left"}
                          >
                            <ListItem>Age: 35-65 years old</ListItem>
                            <ListItem>Education: College degree+</ListItem>
                            <ListItem>Income: $75,000+</ListItem>
                            <ListItem>Tech-savvy professionals</ListItem>
                            <ListItem>
                              Regular charitable giving habits
                            </ListItem>
                            <ListItem>Interest in arts and culture</ListItem>
                          </UnorderedList>
                        </Box>
                      </VStack>
                    </GridItem>

                    <GridItem>
                      <VStack
                        align="stretch"
                        bg="semantic.background.secondary"
                        p={4}
                        h="100%"
                        spacing={4}
                        rounded="lg"
                      >
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          width="100%"
                        >
                          <Image
                            src={recruitImage}
                            alt="calendar Illustration"
                            maxW="100px"
                          />
                        </Box>
                        <Box textAlign="center">
                          <Heading
                            textStyle="pbold"
                            textTransform={"capitalize"}
                            color="semantic.accent"
                            pb={2}
                          >
                            Recruitment
                          </Heading>
                          <UnorderedList
                            textStyle={"caption"}
                            color="gray.600"
                            textAlign={"left"}
                          >
                            <ListItem>
                              Must have donated online in past 12 months
                            </ListItem>
                            <ListItem>
                              Regular interaction with cultural institutions
                            </ListItem>
                            <ListItem>
                              Comfortable with digital transactions
                            </ListItem>
                            <ListItem>
                              Mix of first-time and repeat donors
                            </ListItem>
                          </UnorderedList>
                        </Box>
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
                  Screening Process Development
                </Text>

                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                    Developed a comprehensive screening questionnaire to
                    identify participants who matched our target donor profile.
                    The questionnaire was structured in sections to ensure
                    thorough participant screening.{" "}
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScYzFCW2I8QsShj7lbau4GReLowXljwmnw0weZAC1z3W_x8xA/viewform?usp=header"
                      target="_blank"
                      rel="noreferrer"
                    >
                      (
                      <Text as="span" decoration={"underline"} pb={4}>
                        View Screening Form
                      </Text>
                      )
                    </a>
                  </Text>
                </Box>
              

              <Box
                rounded="lg"
                width="full"
                bg="semantic.background.secondary"
                p={{ base: 8, md: 12 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                my={4}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                >
                  <OverlayImage
                    src={userTestingLogo}
                    alt="interview Illustration"
                    maxW="100px"
                  />
                </Box>
                <Box textAlign="center">
                  <Heading
                    textStyle="pbold"
                    textTransform={"capitalize"}
                    color="semantic.accent"
                    pb={2}
                  >
                    Recruitment platform
                  </Heading>

                  <Text textStyle={"caption"} color="gray.600">
                    We leveraged UserTesting.com's professional testing panel to
                    recruit qualified participants who matched our target donor
                    profile. The platform provided robust screening capabilities
                    and automated scheduling tools.
                  </Text>
                </Box>
              </Box>
              </Box>
            
          </VStack>
          <DividerSection icon={faVial} />

          <VStack align="stretch" spacing={10} py={12} id="usability">
            {/* phase 2 Section */}
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 2: usability testing
              </Heading>
              <Text as="p" textStyle="p" pb={4}>
                Conducted remote moderated usability testing sessions to
                evaluate the donation flow and identify opportunities for
                improvement. Each session was recorded for detailed analysis.
              </Text>
            

            <Box
              rounded="lg"
              width="full"
              bg="semantic.background.secondary"
              p={{ base: 8, md: 12 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
              >
                <Image
                  src={userTestingImage}
                  alt="user testing Illustration"
                  maxW="100px"
                />
              </Box>
              <Box textAlign="center">
                <Heading
                  textStyle="pbold"
                  textTransform={"capitalize"}
                  color="semantic.accent"
                  pb={2}
                >
                  Remote sessions
                </Heading>

                <Text textStyle={"caption"} color="gray.600">
                  The study included 8 qualified donors matching our target user
                  profile. We conducted 30-minute remote moderated sessions via
                  UserTesting.com, examining the end-to-end donation flow from
                  homepage to confirmation. Our data collection methods
                  consisted of session recordings, think-aloud feedback, and
                  task completion metrics.
                </Text>
              </Box>
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
                Tasks scenarios
              </Text>

              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color='gray.600'>
                  Participants were asked to complete three core tasks that
                  represent key user journeys in the donation process:
                </Text>
              </Box>
            

            <Box w="100%" color={"gray.600"} pt ={4} >
              <VStack align="stretch" spacing={8}>
                <Grid
                  templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                  gap={4}
                  overflowX="auto"
                >
                  {/* Task 1: Homepage Donation */}
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
                          <FontAwesomeIcon icon={faCompass} size="xl" />
                        </Box>
                        <Text
                          textStyle="captionbold"
                          color="semantic.text.primary"
                          textTransform="uppercase"
                          textAlign="center"
                        >
                          Task 1: Homepage Donation
                        </Text>
                      </VStack>
                      <Divider variant={"dividerSection"} />

                      <UnorderedList spacing={3}>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            "Starting from the homepage, find and begin the
                            donation process."
                          </Text>
                        </ListItem>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            Locate donation button
                          </Text>
                        </ListItem>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            Navigate to donation form
                          </Text>
                        </ListItem>
                      </UnorderedList>
                    </VStack>
                  </GridItem>

                  {/* Task 2: Donation Amount */}
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
                          <FontAwesomeIcon icon={faHandHoldingUsd} size="xl" />
                        </Box>
                        <Text
                          textStyle={"captionbold"}
                          color="semantic.text.primary"
                          textTransform="uppercase"
                        >
                          Task 2: Donation Amount
                        </Text>
                      </VStack>
                      <Divider variant={"dividerSection"} />

                      <UnorderedList spacing={3}>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            "Select a donation amount and any additional
                            options."
                          </Text>
                        </ListItem>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            Choose donation amount
                          </Text>
                        </ListItem>
                        <ListItem gap={2}>
                          <Text textStyle="caption">Review giving options</Text>
                        </ListItem>
                      </UnorderedList>
                    </VStack>
                  </GridItem>

                  {/* Task 3: Complete Checkout */}
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
                          <FontAwesomeIcon icon={faCreditCard} size="xl" />
                        </Box>
                        <Text
                          textStyle={"captionbold"}
                          color="semantic.text.primary"
                          textTransform="uppercase"
                        >
                          Task 3: Complete Checkout
                        </Text>
                      </VStack>
                      <Divider variant={"dividerSection"} />
                      <UnorderedList spacing={3}>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            "Complete the donation process including payment
                            information."
                          </Text>
                        </ListItem>
                        <ListItem gap={2}>
                          <Text textStyle="caption">Fill payment details</Text>
                        </ListItem>
                        <ListItem gap={2}>
                          <Text textStyle="caption">Review and confirm</Text>
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
                Initial usability results
              </Text>

              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color='gray.600'>
                  Each task was evaluated based on completion rate, time on
                  task, and error rate. Participants were encouraged to think
                  aloud, providing qualitative feedback throughout the process.
                </Text>
              </Box>
              <UsabilityMetrics />
            </Box>
            
          </VStack>

          <DividerSection icon={faPuzzlePiece} />

          <VStack align="stretch" spacing={10} py={12} id="synthesis">
            {/* phase 3 Section */}
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 3: synthesis
              </Heading>
              <Text as="p" textStyle="p" pb={4}>
                Using FigJam's digital whiteboard, our team collaboratively
                analyzed the usability test findings. We created virtual sticky
                notes for each observation from the testing sessions.
              </Text>
            </Box>
            <Box pb={4}>
              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                Affinity Diagram
              </Text>

              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color='gray.600'>
                  Through remote brainstorming sessions, we grouped these notes
                  into related clusters, identifying emerging patterns and pain
                  points. This affinity mapping exercise helped us transform
                  individual user insights into actionable themes that would
                  guide our design decisions.
                </Text>
              </Box>
            

            
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={6}
                my={4}
              >
                <GridItem
                  p={6}
                  borderRadius="lg"
                  shadow={"md"}
                  border="1px"
                  borderColor="semantic.divider"
                >
                  <Box pb={4}>
                    <Text
                      textStyle={"captionbold"}
                      color="semantic.accent"
                      textTransform="uppercase"
                      textAlign={"center"}
                    >
                      Call-to-Action Visibility
                    </Text>
                    <OverlayImage src={ctaImage} alt="call-to-action Theme" />
                  </Box>
                </GridItem>

                <GridItem
                  p={6}
                  borderRadius="lg"
                  shadow={"md"}
                  border="1px"
                  borderColor="semantic.divider"
                >
                  <Box pb={4}>
                    <Text
                      textStyle={"captionbold"}
                      color="semantic.accent"
                      textTransform="uppercase"
                      textAlign={"center"}
                    >
                      Hero Section Issues
                    </Text>
                    <OverlayImage src={heroImage} alt="hero section Theme" />
                  </Box>
                </GridItem>

                <GridItem
                  p={6}
                  borderRadius="lg"
                  shadow={"md"}
                  border="1px"
                  borderColor="semantic.divider"
                >
                  <Box pb={4}>
                    <Text
                      textStyle={"captionbold"}
                      color="semantic.accent"
                      textTransform="uppercase"
                      textAlign={"center"}
                    >
                      Visual Hierarchy Problems
                    </Text>

                    <OverlayImage src={visualImage} alt="visual Theme" />
                  </Box>
                </GridItem>

                <GridItem
                  p={6}
                  borderRadius="lg"
                  shadow={"md"}
                  border="1px"
                  borderColor="semantic.divider"
                >
                  <Box pb={4}>
                    <Text
                      textStyle={"captionbold"}
                      color="semantic.accent"
                      textTransform="uppercase"
                      textAlign={"center"}
                    >
                      Layout Navigation
                    </Text>
                    <OverlayImage src={layoutImage} alt="layout Theme" />
                  </Box>
                </GridItem>
              </Grid>
            </Box>

            <Box pb={4}>
              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                Key Findings analysis
              </Text>

              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color='gray.600'>
                  Following the comprehensive affinity diagram exercise, this
                  key findings analysis distills the synthesized user experience
                  data into strategic, actionable insights. By clustering and
                  analyzing qualitative data, we transformed raw observations
                  into structured, meaningful patterns that reveal critical
                  design considerations for optimizing donation experience.
                </Text>
              </Box>
            

            <Box w="100%" color={"gray.600"} py={4}>
              <VStack align="stretch" spacing={8}>
                <Grid
                  templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                  gap={4}
                  overflowX="auto"
                >
                  {/* Call-to-Action Placement */}
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
                          <FontAwesomeIcon icon={faLocationDot} size="xl" />
                        </Box>
                        <Text
                          textStyle="captionbold"
                          color="semantic.text.primary"
                          textTransform="uppercase"
                          textAlign="center"
                        >
                          Call-to-Action Placement
                        </Text>
                      </VStack>
                      <Divider variant={"dividerSection"} />

                      <UnorderedList spacing={3}>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            Donation button needs prominent placement above the
                            fold
                          </Text>
                        </ListItem>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            Users expect consistent button location across pages
                          </Text>
                        </ListItem>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            Clear visual distinction needed for primary actions
                          </Text>
                        </ListItem>
                      </UnorderedList>
                    </VStack>
                  </GridItem>

                  {/* Hero Section Impact */}
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
                          <FontAwesomeIcon
                            icon={faWandMagicSparkles}
                            size="xl"
                          />
                        </Box>
                        <Text
                          textStyle={"captionbold"}
                          color="semantic.text.primary"
                          textTransform="uppercase"
                        >
                          Hero Section Impact
                        </Text>
                      </VStack>
                      <Divider variant={"dividerSection"} />

                      <UnorderedList spacing={3}>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            Value proposition must be immediately clear
                          </Text>
                        </ListItem>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            Content needs stronger emotional connection
                          </Text>
                        </ListItem>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            Visual hierarchy should guide to donation action
                          </Text>
                        </ListItem>
                      </UnorderedList>
                    </VStack>
                  </GridItem>

                  {/* Content Hierarchy */}
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
                          <FontAwesomeIcon icon={faLayerGroup} size="xl" />
                        </Box>
                        <Text
                          textStyle={"captionbold"}
                          color="semantic.text.primary"
                          textTransform="uppercase"
                        >
                          Content Hierarchy
                        </Text>
                      </VStack>
                      <Divider variant={"dividerSection"} />
                      <UnorderedList spacing={3}>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            Important information needs clear visual emphasis
                          </Text>
                        </ListItem>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            Donation options require better differentiation
                          </Text>
                        </ListItem>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            Progress indicators essential for user orientation
                          </Text>
                        </ListItem>
                      </UnorderedList>
                    </VStack>
                  </GridItem>

                  {/* Layout Structure */}
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
                          <FontAwesomeIcon icon={faColumns} size="xl" />
                        </Box>
                        <Text
                          textStyle={"captionbold"}
                          color="semantic.text.primary"
                          textTransform="uppercase"
                        >
                          Layout Structure
                        </Text>
                      </VStack>
                      <Divider variant={"dividerSection"} />
                      <UnorderedList spacing={3}>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            Streamlined navigation path to donation form
                          </Text>
                        </ListItem>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            Logical grouping of related information
                          </Text>
                        </ListItem>
                        <ListItem gap={2}>
                          <Text textStyle="caption">
                            Simplified form layout with clear sections
                          </Text>
                        </ListItem>
                      </UnorderedList>
                    </VStack>
                  </GridItem>
                </Grid>
              </VStack>
            </Box>
            </Box>
          </VStack>

          <DividerSection icon={faBullseye} />

          <VStack align="stretch" spacing={10} py={12} id="recommendations">
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 4: Recommendations
              </Heading>
              <Text as="p" textStyle="p" pb={4}>
                This project provided valuable insights about user-centered
                design and the importance of iterative development in creating
                impactful solutions.
              </Text>
              <DesignRecommendations recommendations={designRecommendations} />
            </Box>
          </VStack>
          <DividerSection icon={faVial} />

          <VStack align="stretch" spacing={10} py={12} id="second">
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 5: Usabiliy testing results
              </Heading>
              <Text as="p" textStyle="p" pb={4}>
                Comparison of initial and final usability testing results
                showing significant improvements across key metrics with the
                recommendations suggested.
              </Text>
              <UsabilityResults />
            </Box>
          </VStack>

          <DividerSection icon={faLightbulb} />

          <VStack align="stretch" spacing={10} py={12} id="takeaway">
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 6: Reflection & Takeaways
              </Heading>
              <Text as="p" textStyle="p" pb={4}>
                Comparison of initial and final usability testing results
                showing significant improvements across key metrics with the
                recommendations suggested. The project required careful consideration of both the Archives' historical context and the expectations of contemporary donors. Working closely with the Archives' team and stakeholders provided valuable insights into how digital solutions can enhance cultural preservation while maintaining accessibility and ease of use.
              </Text>
           
            <Box pb={4}>
              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                Lessons Learned
              </Text>

              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p">
                  {" "}
                  
                </Text>

                <VStack align="stretch">
                <UnorderedList textStyle={"p"} pb={4}>
<ListItem>
<Text>
<strong>Data-Driven Design - </strong> Discovered how quantitative usability metrics combined with qualitative donor feedback can guide design decisions that respect both the Archives' mission and user needs.
</Text>
</ListItem>
<ListItem>
<Text>
<strong>Stakeholder Collaboration - </strong> Enhanced skills in communicating design rationale to cultural institution stakeholders and working closely with developers to implement accessibility features that serve a diverse donor base.
</Text>
</ListItem>
<ListItem>
<Text>
<strong>Technical Integration - </strong> Gained valuable experience in implementing UI card patterns and optimization techniques while maintaining consistency with the Smithsonian's design system standards.
</Text>
</ListItem>
<ListItem>
<Text>
<strong>User-Centric Approach - </strong> Strengthened understanding of cultural institution donor behaviors and how to optimize interfaces to encourage support for art historical preservation.
</Text>
</ListItem>
</UnorderedList>
                </VStack>
              </Box>
            </Box>
            </Box>
            <Box pb={12}  display={'flex'}  flexDirection="column"  justifyContent={'center'}>
                  <Image
                    src={finalPresentationImage}
                    alt="screenshot of a final presentation"
                    

                  />
                  <figcaption>
                    <Text as="p" textStyle="caption" textAlign="center" color="gray.600" pt={4}>
                      Final presentation with stakeholders
                    </Text>
                  </figcaption>
                </Box>
          </VStack>
        </CaseStudyLayout>
      </Box>

      <Divider variant="section" />

      <Footer />
    </>
  );
};

export default SteakHousePage;
