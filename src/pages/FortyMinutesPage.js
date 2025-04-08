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
  Highlight,
  Icon,
} from "@chakra-ui/react";
import mockupBrief from "../assets/40minutes/initial.png";
import groupImage from "../assets/40minutes/group.jpg";
import mockupImage from "../assets/40minutes/home.png";
import mockupClientTrainerImage from "../assets/40minutes/login.png";
import mockupLogin from "../assets/40minutes/login2.png";
import mockupSchedule from "../assets/40minutes/step1.png";
import mockupPickTrainer from "../assets/40minutes/step2.png";
import mockupConfirmation from "../assets/40minutes/step3.png";
import speedImage from "../assets/40minutes/speed.svg";
import clarityImage from "../assets/40minutes/clarity.svg";
import simpleImage from "../assets/40minutes/simple.svg";
import processImage from "../assets/40minutes/booking.png";
import classImage from "../assets/40minutes/classtracking.png";
import cancelImage from "../assets/40minutes/cancellations.png";
import DigitalWireframes from "../components/DigitalWireframes";
import digitalWireframes from "../assets/40minutes/data/digitalWireframes";
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
  faMagnifyingGlass,
  faUsers,
  faCompass,
  faClock,
  faHeart,
  faExpandArrowsAlt,
  faShieldAlt,
  faBolt,
  faSmile,
  faComments,
  faBug,
  faStopwatch,
  faClipboardList,
  faUserCog,
  faBoxOpen,
  faCalendarPlus,
  faCalendarAlt,
  faBuilding,
  faRedo,
  faPencilRuler,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import DividerSection from "../components/DividerSection";
import banner from "../assets/40minutes/banner.png";
import ResponsiveMenu from "../components/ResponsiveMenu";
import Footer from "../components/Footer";
import CaseStudyLayout from "../style/CaseStudyLayout";
import OverlayImage from "../components/OverlayImage";
import Badges from "../components/Badges";
import { FaArrowUp } from "react-icons/fa";

const FortyMinutesPage = () => {
  const { sections, handleClick } = useAlertContext();

  const sectionsProject = [
    { id: "theproject", label: "The Project Brief", icon: faFileAlt },
    {
      id: "research",
      label: "research",
      icon: faMagnifyingGlass,
    },
    { id: "strategy", label: "Design Principles & Strategy", icon: faCompass },
    { id: "ux", label: "UX Design process", icon: faSitemap },
    { id: "solutions", label: "Key Design Solutions", icon: faPencilRuler },
    { id: "results", label: "Results & Impact", icon: faChartLine },
    { id: "iterations", label: "Iterations & Improvements", icon: faRedo },
    { id: "lessons", label: "Lessons Learned", icon: faLightbulb },
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
              Designing for Busy People: How User-First UX Strategy Generated
              1,040+ Active Users and $258K+ Revenue
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
                  40Minutes was a fitness marketplace app I founded that
                  connected certified trainers with busy professionals for
                  standardized 40-minute workouts at the clients’ preferred
                  locations.
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
                    Before the app, 40minutes operated as a successful service
                    but was drowning in manual processes that severely limited
                    growth and efficiency:
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
                        <strong>Tedious Booking Process:</strong> Each client
                        request initiated a time-consuming workflow—receiving
                        WhatsApp messages, checking spreadsheets, confirming
                        trainer availability, updating records, and sending
                        confirmations. This process took between 30 minutes to 4
                        hours per booking.
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        <strong>Error-Prone Management: </strong> Manual
                        tracking across multiple spreadsheets led to
                        double-bookings, missed cancellations, package counting
                        errors, and payment calculation mistakes.
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        <strong>Scaling Limitations:</strong> Growth was
                        constrained by administrative capacity, with each new
                        client adding significant operational overhead and no
                        way to efficiently manage increasing demand.
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
                    I designed a comprehensive digital experience that automated
                    the most time-consuming aspects of our operations:
                  </Text>
                  <List spacing={2} mt={4} color="semantic.accent">
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        <strong>Streamlined Booking System:</strong> Created an
                        intuitive interface allowing clients to book sessions in
                        under a minute, with automated trainer matching and
                        instant confirmations.
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        <strong> Centralized Management Platform: </strong>
                        Developed a unified system to replace multiple
                        spreadsheets, with automatic tracking of client
                        packages, trainer schedules, and payment calculations.
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        <strong>Dual-User Experience: </strong> Crafted distinct
                        but connected interfaces for clients and trainers,
                        addressing the specific needs of each user group while
                        maintaining operational consistency.
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
                    The transformation from manual to digital operations
                    delivered significant measurable outcomes:
                  </Text>

                  <List spacing={2} mt={4} color="semantic.accent">
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        <strong>Operational Efficiency:</strong> Reduced booking
                        time from 30+ minutes to under 1 minute
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        <strong>Business Growth:</strong> Delivered 37,440+
                        sessions to 1,040+ active monthly users
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        <strong>Revenue Generation:</strong> Achieved annual
                        revenue of COP 998,400,000 (~USD 258,000)
                      </Text>
                    </ListItem>

                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        <strong>Client Satisfaction:</strong> Attained 90%
                        word-of-mouth referral rate
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        <strong>Scalability:</strong> Increased capacity by 400%
                        without additional administrative staff
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        <strong>Error Reduction:</strong> Decreased booking and
                        tracking errors by 94%
                      </Text>
                    </ListItem>
                  </List>
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
                      src={mockupBrief}
                      alt="Modifications Screen"
                      height={"auto"}
                      maxHeight={"600px"}
                    />
                    <Text as="p" textStyle="caption" textAlign="center" mt={2}>
                      Splash screen
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    pb={4}
                  >
                    <Image
                      src={mockupImage}
                      alt="Location selection screen"
                      height={"auto"}
                      maxHeight={"600px"}
                    />
                    <Text as="p" textStyle="caption" textAlign="center" mt={2}>
                      Session management screen
                    </Text>
                  </Box>
                </HStack>
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
                    3{" "}
                    <Text as="span" textStyle={"caption"}>
                      (1 product designer, 1 frontend developer, 1 backend
                      developer)
                    </Text>
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
          Discover how deep analysis of manual processes inspired a booking
          system redesign that slashed wait times from hours to seconds, driving
          exponential business growth through intuitive, user-centered design.
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
                      styles={{
                        px: "1",
                        py: "0.5",
                        bg: "semantic.accent",
                        color: "semantic.background.primary",
                        rounded: "md",
                      }}
                    >
                      The concept for 40minutes was born from a simple
                      conversation with a friend who wanted to stay fit but
                      lacked both the time to visit a gym and the motivation to
                      exercise in traditional fitness environments. This sparked
                      extensive market research during my final year of
                      engineering school, revealing a significant gap: busy
                      professionals needed efficient, flexible fitness solutions
                      that could adapt to their demanding schedules.
                    </Highlight>
                  </Text>
                  <Text textStyle="p">
                    Collaborating with personal trainers and physical
                    therapists, I developed the 40minutes concept—a streamlined
                    workout experience that packed maximum results into just 40
                    minutes with minimal rest periods, keeping exercises dynamic
                    and engaging. This standardized format was designed to work
                    across multiple disciplines including pilates, yoga,
                    kickboxing, functional training, and TRX, creating a
                    consistent yet versatile experience that could be delivered
                    wherever clients needed it most.
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
                    Before the app, 40minutes was already operating as a
                    successful service, but the entirely manual process created
                    significant operational challenges:
                  </Text>
                </Box>

                <Box w="100%" color={"gray.600"} py={4}>
                  <VStack align="stretch" spacing={8}>
                    <Grid
                      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                      gap={4}
                      mb={8}
                    >
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
                            <Badges>30 min - 4 hrs</Badges>
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
                                Manually checking spreadsheets for trainer
                                availability
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
                              <FontAwesomeIcon
                                icon={faExclamationTriangle}
                                size="xl"
                              />
                            </Box>
                            <Text
                              textStyle={"captionbold"}
                              color="semantic.text.primary"
                              textTransform="uppercase"
                            >
                              Error-prone Tracking
                            </Text>
                            <Badges>Frequent Errors</Badges>
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
                            <Badges>Growth Bottleneck</Badges>
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
                    Transform this tedious manual operation into a seamless
                    digital experience that would:
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
                      <Text textStyle={"caption"} color="gray.600">
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
                      <Text textStyle={"caption"} color="gray.600">
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
                  Key metrics from 7 years of operation
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
          <VStack align="stretch" spacing={10} py={12} id="research">
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 1: User research & Process Analysis
              </Heading>
            </Box>
            <Box pb={4}>
              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                user interviews
              </Text>
              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p">
                  I leveraged our existing operations to gather insights
                  through:
                </Text>
              </Box>

              <Box w="100%" color={"gray.600"} py={8}>
                <VStack align="stretch" spacing={8}>
                  <Grid
                    templateColumns={{ base: "1fr", xl: "repeat(4, 1fr)" }}
                    gap={4}
                    overflowX="auto"
                  >
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
                            <FontAwesomeIcon icon={faClipboardList} size="xl" />
                          </Box>
                          <Text
                            textStyle={"captionbold"}
                            color="semantic.text.primary"
                            textTransform="uppercase"
                          >
                            Documentation
                          </Text>
                        </VStack>

                        <Divider variant={"dividerSection"} />

                        <Box>
                          <Text textStyle="caption">
                            Mapping every step in our manual workflow
                          </Text>
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
                        <VStack>
                          <Box color="semantic.accent">
                            <FontAwesomeIcon icon={faStopwatch} size="xl" />
                          </Box>
                          <Text
                            textStyle="captionbold"
                            color="semantic.text.primary"
                            textTransform="uppercase"
                          >
                            Time Tracking
                          </Text>
                        </VStack>

                        <Divider variant={"dividerSection"} />

                        <Box>
                          <Text textStyle="caption">
                            Measuring how long each manual task took
                          </Text>
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
                        <VStack>
                          <Box color="semantic.accent">
                            <FontAwesomeIcon icon={faBug} size="xl" />
                          </Box>
                          <Text
                            textStyle="captionbold"
                            color="semantic.text.primary"
                            textTransform="uppercase"
                          >
                            Error Analysis
                          </Text>
                        </VStack>

                        <Divider variant={"dividerSection"} />

                        <Box>
                          <Text textStyle="caption">
                            Identifying where and why mistakes happened
                          </Text>
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
                        <VStack>
                          <Box color="semantic.accent">
                            <FontAwesomeIcon icon={faComments} size="xl" />
                          </Box>
                          <Text
                            textStyle="captionbold"
                            color="semantic.text.primary"
                            textTransform="uppercase"
                          >
                            Interviews
                          </Text>
                        </VStack>

                        <Divider variant={"dividerSection"} />

                        <Box>
                          <Text textStyle="caption">
                            Interviews with clients and trainers
                          </Text>
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
                        <VStack>
                          <Box color="semantic.accent">
                            <FontAwesomeIcon icon={faChartLine} size="xl" />
                          </Box>
                          <Text
                            textStyle="captionbold"
                            color="semantic.text.primary"
                            textTransform="uppercase"
                          >
                            Behavioral Analysis
                          </Text>
                        </VStack>

                        <Divider variant={"dividerSection"} />

                        <Box>
                          <Text textStyle="caption">
                            WhatsApp communication pattern review
                          </Text>
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
                        <VStack>
                          <Box color="semantic.accent">
                            <FontAwesomeIcon
                              icon={faExclamationTriangle}
                              size="xl"
                            />
                          </Box>
                          <Text
                            textStyle="captionbold"
                            color="semantic.text.primary"
                            textTransform="uppercase"
                          >
                            Friction Points
                          </Text>
                        </VStack>

                        <Divider variant={"dividerSection"} />

                        <Box>
                          <Text textStyle="caption">
                            Identifying friction in manual booking process
                          </Text>
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
                        <VStack>
                          <Box color="semantic.accent">
                            <FontAwesomeIcon icon={faSmile} size="xl" />
                          </Box>
                          <Text
                            textStyle="captionbold"
                            color="semantic.text.primary"
                            textTransform="uppercase"
                          >
                            Satisfaction Surveys
                          </Text>
                        </VStack>

                        <Divider variant={"dividerSection"} />

                        <Box>
                          <Text textStyle="caption">
                            Gathered post-session feedback from clients
                          </Text>
                        </Box>
                      </VStack>
                    </GridItem>
                  </Grid>
                </VStack>
              </Box>
              <Box pb={4}>
                <Text
                  textStyle="pbold"
                  textTransform="uppercase"
                  color="gray.600"
                  pb={3}
                  as="h3"
                >
                  Key insights
                </Text>
                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p" color="gray.600">
                    This analysis revealed critical operational and user needs:
                  </Text>
                  <UnorderedList textStyle={"p"} pt={4} color="gray.600">
                    <ListItem>
                      <Text>
                        <strong>The Booking Bottleneck:</strong> Manual
                        availability checks and spreadsheet updates consumed 70%
                        of admin time.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text>
                        <strong>Communication Inefficiency:</strong> WhatsApp
                        threads became unwieldy as client numbers grew.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text>
                        <strong>Clients Prioritized Speed Over Options:</strong>{" "}
                        They wanted quick decisions with minimal cognitive load.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text>
                        <strong>Time Windows Were Critical:</strong> Usage
                        clustered in morning (4am–10am) and evening (4pm–11pm)
                        slots.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text>
                        <strong>Trust Was Built Through Consistency:</strong>{" "}
                        Clients valued knowing what to expect.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text>
                        <strong>Location Flexibility Was Essential:</strong>{" "}
                        Users needed trainers to come to them, not vice versa.
                      </Text>
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </Box>
          </VStack>

          <DividerSection icon={faCompass} />
          <VStack align="stretch" spacing={10} py={12} id="strategy">
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 2: Design Principles & Strategy
              </Heading>
              <Text as="p" textStyle="p" pb={4}>
                Based on my analysis of our manual operations and user research,
                I established three core design principles to guide the app
                development:
              </Text>
              <Box pb={4} w="100%" color={"gray.600"}>
                <VStack align="stretch" spacing={8}>
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={4}
                    overflowX="auto"
                  >
                    {/* Simplicity */}
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
                          height="120px"
                        >
                          <OverlayImage
                            src={simpleImage}
                            alt="Simplicity Illustration"
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
                            Simplicity
                          </Heading>
                          <UnorderedList
                            textStyle={"caption"}
                            color="gray.600"
                            textAlign={"left"}
                          >
                            <ListItem>
                              Minimize steps to complete actions
                            </ListItem>
                            <ListItem>
                              Reduce cognitive load through smart defaults
                            </ListItem>
                            <ListItem>
                              Present only essential information at each stage
                            </ListItem>
                            <ListItem>
                              Eliminate the complexity of our manual spreadsheet
                              system
                            </ListItem>
                          </UnorderedList>
                        </Box>
                      </VStack>
                    </GridItem>

                    {/* Clarity */}
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
                          height="120px"
                        >
                          <OverlayImage
                            src={clarityImage}
                            alt="Clarity Illustration"
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
                            Clarity
                          </Heading>
                          <UnorderedList
                            textStyle={"caption"}
                            color="gray.600"
                            textAlign={"left"}
                          >
                            <ListItem>
                              Make system status visible at all times
                            </ListItem>
                            <ListItem>
                              Provide immediate feedback for user actions
                            </ListItem>
                            <ListItem>
                              Ensure transparent communication about sessions
                            </ListItem>
                            <ListItem>
                              Create clear views of information previously
                              buried in spreadsheets
                            </ListItem>
                          </UnorderedList>
                        </Box>
                      </VStack>
                    </GridItem>

                    {/* Speed */}
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
                          height="120px"
                        >
                          <OverlayImage
                            src={speedImage}
                            alt="Speed Illustration"
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
                            Speed
                          </Heading>
                          <UnorderedList
                            textStyle={"caption"}
                            color="gray.600"
                            textAlign={"left"}
                          >
                            <ListItem>
                              Optimize for quick task completion
                            </ListItem>
                            <ListItem>
                              Reduce wait times from hours to seconds
                            </ListItem>
                            <ListItem>
                              Enable one-tap rebooking for recurring patterns
                            </ListItem>
                            <ListItem>
                              Automate the most time-consuming manual tasks
                            </ListItem>
                          </UnorderedList>
                        </Box>
                      </VStack>
                    </GridItem>
                  </Grid>
                </VStack>
              </Box>
            </Box>
          </VStack>

          <DividerSection icon={faSitemap} />
          <VStack align="stretch" spacing={10} py={12} id="ux">
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 3: UX Design process
              </Heading>
              <Text as="p" textStyle="p" pb={4}>
                I began by thoroughly mapping our existing manual operations to
                identify key automation opportunities.
              </Text>
              <Box pb={4}>
                <Text
                  textStyle="pbold"
                  textTransform="uppercase"
                  color="gray.600"
                  pb={3}
                  as="h3"
                >
                  manual operations workflow
                </Text>
                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p" color="gray.600">
                    This analysis revealed critical operational and user needs:
                  </Text>
                </Box>
                <Box pt={4} textAlign="center">
                  <Box
                    rounded="lg"
                    width="full"
                    bg="semantic.background.secondary"
                    p={{ base: 8, md: 12 }}
                  >
                    <Text
                      textStyle="captionbold"
                      color="semantic.text.primary"
                      textTransform="uppercase"
                      textAlign="center"
                    >
                      Booking (30 min - 4 hours)
                    </Text>
                    <Image src={processImage} />
                    <Text
                      textStyle="captionbold"
                      color="semantic.text.primary"
                      textTransform="uppercase"
                      textAlign="center"
                    >
                      Class Tracking (15-20 min per class)
                    </Text>
                    <Image src={classImage} />
                    <Text
                      textStyle="captionbold"
                      color="semantic.text.primary"
                      textTransform="uppercase"
                      textAlign="center"
                    >
                      Cancellations (20 min-4 hours+)
                    </Text>
                    <Image src={cancelImage} />
                  </Box>
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
                Redesigned Digital Flows
              </Text>
              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color="gray.600">
                  I transformed these manual processes into streamlined digital
                  experiences:
                </Text>
                <UnorderedList textStyle={"p"} pt={4} color="gray.600">
                  <ListItem>
                    <Text>
                      <strong>Booking Flow (less than 1 minute):</strong>
                      Client selects time slot in app, system automatically
                      displays available trainers, client confirms booking, both
                      parties receive instant confirmation, and all records
                      update automatically.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      <strong>Class Tracking (Automatic):</strong>
                      Trainer checks in/out through the app, system
                      automatically updates the client's package, system updates
                      the trainer's payment record, and client receives
                      automatic confirmation.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      <strong>Cancellation Flow (less than 30 seconds):</strong>
                      Client cancels through the app, system applies
                      cancellation policy, trainer receives notification, and
                      all records update automatically.
                    </Text>
                  </ListItem>
                </UnorderedList>
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
                Information Architecture
              </Text>
              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color="gray.600">
                  I designed the app structure to replace our complex
                  spreadsheet system:
                </Text>
              </Box>
              <Box w="100%" color={"gray.600"} py={8}>
                <VStack align="stretch" spacing={8}>
                  <Grid
                    templateColumns={{ base: "1fr", xl: "repeat(4, 1fr)" }}
                    gap={4}
                    overflowX="auto"
                  >
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
                            <FontAwesomeIcon icon={faCalendarPlus} size="xl" />
                          </Box>
                          <Text
                            textStyle={"captionbold"}
                            color="semantic.text.primary"
                            textTransform="uppercase"
                          >
                            Book a Session
                          </Text>
                        </VStack>

                        <Divider variant={"dividerSection"} />

                        <Box>
                          <Text textStyle="caption">
                            Primary action path with minimal obstacles
                          </Text>
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
                        <VStack>
                          <Box color="semantic.accent">
                            <FontAwesomeIcon icon={faClock} size="xl" />
                          </Box>
                          <Text
                            textStyle="captionbold"
                            color="semantic.text.primary"
                            textTransform="uppercase"
                          >
                            Manage Schedule
                          </Text>
                        </VStack>

                        <Divider variant={"dividerSection"} />

                        <Box>
                          <Text textStyle="caption">
                            Clear view of upcoming and past sessions
                          </Text>
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
                        <VStack>
                          <Box color="semantic.accent">
                            <FontAwesomeIcon icon={faBoxOpen} size="xl" />
                          </Box>
                          <Text
                            textStyle="captionbold"
                            color="semantic.text.primary"
                            textTransform="uppercase"
                          >
                            Track Packages
                          </Text>
                        </VStack>

                        <Divider variant={"dividerSection"} />

                        <Box>
                          <Text textStyle="caption">
                            Transparent view of remaining sessions
                          </Text>
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
                        <VStack>
                          <Box color="semantic.accent">
                            <FontAwesomeIcon icon={faUserCog} size="xl" />
                          </Box>
                          <Text
                            textStyle="captionbold"
                            color="semantic.text.primary"
                            textTransform="uppercase"
                          >
                            Trainer Management
                          </Text>
                        </VStack>

                        <Divider variant={"dividerSection"} />

                        <Box>
                          <Text textStyle="caption">
                            Automated assignment and tracking
                          </Text>
                        </Box>
                      </VStack>
                    </GridItem>
                  </Grid>
                </VStack>
              </Box>
            </Box>
          </VStack>

          <DividerSection icon={faPencilRuler} />
          <VStack align="stretch" spacing={10} py={12} id="solutions">
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 4: Key Design Solutions
              </Heading>

              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                digital wireframes
              </Text>

              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color="gray.600">
                  I created digital wireframes to visualize the redesigned
                  booking process focusing on functionality:
                </Text>
              </Box>
              <DigitalWireframes digital={digitalWireframes} />
            </Box>
            <Box pb={4}>
              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                From Concept to Reality
              </Text>

              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p">
                  We translated core user needs into tangible interfaces that
                  streamline the training experience for both clients and
                  trainers. These key screens highlight how thoughtful design
                  choices transformed complex workflows into a clear, intuitive
                  journey.
                </Text>
              </Box>
              <Text
                textStyle={"captionbold"}
                color="semantic.text.primary"
                textTransform="uppercase"
                my={6}
              >
                Key Screens
              </Text>

              <Grid
                templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                gap={6}
              >
                <GridItem>
                  <Image
                    src={mockupBrief}
                    alt="Splash screen"
                    height={"auto"}
                    maxHeight={"600px"}
                  />
                  <Text textStyle="pbold" mt={2}>
                    Splash Screen
                  </Text>
                  <Text textStyle="caption">
                    App loading and brand experience
                  </Text>
                </GridItem>

                <GridItem>
                  <Image
                    src={mockupClientTrainerImage}
                    alt="User type selection screen"
                    height={"auto"}
                    maxHeight={"600px"}
                  />
                  <Text textStyle="pbold" mt={2}>
                    User Type Selection
                  </Text>
                  <Text textStyle="caption">
                    Choose to sign in as client or trainer
                  </Text>
                </GridItem>

                <GridItem>
                  <Image
                    src={mockupLogin}
                    alt="Login screen"
                    height={"auto"}
                    maxHeight={"600px"}
                  />
                  <Text textStyle="pbold" mt={2}>
                    Login
                  </Text>
                  <Text textStyle="caption">Simple and secure access</Text>
                </GridItem>

                <GridItem>
                  <Image
                    src={mockupImage}
                    alt="Home screen"
                    height={"auto"}
                    maxHeight={"600px"}
                  />
                  <Text textStyle="pbold" mt={2}>
                    Home Dashboard
                  </Text>
                  <Text textStyle="caption">
                    Overview with session management
                  </Text>
                </GridItem>

                <GridItem>
                  <Image
                    src={mockupSchedule}
                    alt="Schedule a class"
                    height={"auto"}
                    maxHeight={"600px"}
                  />
                  <Text textStyle="pbold" mt={2}>
                    Schedule a Class
                  </Text>
                  <Text textStyle="caption">
                    Interactive calendar interface
                  </Text>
                </GridItem>

                <GridItem>
                  <Image
                    src={mockupPickTrainer}
                    alt="Select a trainer"
                    height={"auto"}
                    maxHeight={"600px"}
                  />
                  <Text textStyle="pbold" mt={2}>
                    Select a Trainer
                  </Text>
                  <Text textStyle="caption">
                    Browse and choose available trainers
                  </Text>
                </GridItem>

                <GridItem>
                  <Image
                    src={mockupConfirmation}
                    alt="Booking confirmation screen"
                    height={"auto"}
                    maxHeight={"600px"}
                  />
                  <Text textStyle="pbold" mt={2}>
                    Confirmation
                  </Text>
                  <Text textStyle="caption">
                    Session successfully scheduled
                  </Text>
                </GridItem>
              </Grid>
            </Box>
          </VStack>

          <DividerSection icon={faChartLine} />
          <VStack align="stretch" spacing={10} py={12} id="results">
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 5: Results & Impact
              </Heading>

              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                Usability Improvements
              </Text>
              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p">
                  After multiple rounds of prototyping, user testing, and
                  iterative design, we saw measurable improvements in key user
                  experience metrics. These outcomes reflect the impact of
                  simplifying flows and aligning features with real user needs.
                </Text>
                <UnorderedList textStyle={"p"} py={4} color="gray.600">
                  <ListItem>
                    <strong>Booking time:</strong> Reduced from over 30 minutes
                    to under 1 minute after replacing the manual WhatsApp
                    scheduling flow with a guided in-app booking system.
                  </ListItem>
                  <ListItem>
                    <strong>Task completion rate:</strong> Increased to 94%
                    following usability testing iterations and refinements to
                    core flows like session scheduling and trainer selection.
                  </ListItem>
                  <ListItem>
                    <strong>Client retention:</strong> Improved by 32% over a
                    3-month period post-launch, attributed to smoother booking
                    experiences and improved visibility into upcoming sessions.
                  </ListItem>
                </UnorderedList>
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
                            Business outcomes
                          </Text>
                          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
  <Box 
    bg="semantic.background.secondary" 
    p={6} 
    color={'gray.600'}
    rounded="lg"
  >
    <HStack mb={2} color='semantic.accent'>
      <Icon as={FaArrowUp} boxSize={4} />
      <Text textStyle={'pbold'}>
        37,440+
      </Text>
    </HStack>
    <Text textStyle={"captionbold"} color="semantic.text.primary" textTransform="uppercase" mb={2}>
      Delivered Sessions
    </Text>
    <Text textStyle={'caption'}>
      Total number of sessions successfully completed through the platform.
    </Text>
  </Box>

  <Box 
    bg="semantic.background.secondary" 
    p={6} 
    color={'gray.600'}
    rounded="lg"
  >
    <HStack mb={2} color='semantic.accent'>
      <Icon as={FaArrowUp} boxSize={4} />
      <Text textStyle={'pbold'}>
        1,040+
      </Text>
    </HStack>
    <Text textStyle={"captionbold"} color="semantic.text.primary" textTransform="uppercase" mb={2}>
      Active Monthly Users
    </Text>
    <Text textStyle={'caption'}>
      Users consistently engaging with the platform each month.
    </Text>
  </Box>

  <Box 
    bg="semantic.background.secondary" 
    p={6} 
    color={'gray.600'}
    rounded="lg"
  >
    <HStack mb={2} color='semantic.accent'>
      <Icon as={FaArrowUp} boxSize={4} />
      <Text textStyle={'pbold'}>
        COP 83,200,000
      </Text>
    </HStack>
    <Text textStyle={"captionbold"} color="semantic.text.primary" textTransform="uppercase" mb={2}>
      Monthly Revenue
    </Text>
    <Text textStyle={'caption'}>
      Equivalent to ~USD 21,500, reflecting high platform engagement and conversion.
    </Text>
  </Box>

  <Box 
    bg="semantic.background.secondary" 
    p={6} 
    color={'gray.600'}
    rounded="lg"
  >
    <HStack mb={2} color='semantic.accent'>
      <Icon as={FaArrowUp} boxSize={4} />
      <Text textStyle={'pbold'}>
        COP 998,400,000
      </Text>
    </HStack>
    <Text textStyle={"captionbold"} color="semantic.text.primary" textTransform="uppercase" mb={2}>
      Annual Revenue
    </Text>
    <Text textStyle={'caption'}>
      Equivalent to ~USD 258,000, showing strong growth over the year.
    </Text>
  </Box>

  <Box 
    bg="semantic.background.secondary" 
    p={6} 
    color={'gray.600'}
    rounded="lg"
  >
    <HStack mb={2} color='semantic.accent'>
      <Icon as={FaArrowUp} boxSize={4} />
      <Text textStyle={'pbold'}>
        90%
      </Text>
    </HStack>
    <Text textStyle={"captionbold"} color="semantic.text.primary" textTransform="uppercase" mb={2}>
      Referral Rate
    </Text>
    <Text textStyle={'caption'}>
      A high percentage of new clients are referred by existing users.
    </Text>
  </Box>

  <Box 
    bg="semantic.background.secondary" 
    p={6} 
    color={'gray.600'}
    rounded="lg"
  >
    <HStack mb={2} color='semantic.accent'>
      <Icon as={FaArrowUp} boxSize={4} />
      <Text textStyle={'pbold'}>
        400%
      </Text>
    </HStack>
    <Text textStyle={"captionbold"} color="semantic.text.primary" textTransform="uppercase" mb={2}>
      Operational Capacity
    </Text>
    <Text textStyle={'caption'}>
      Platform scalability enabled a fourfold increase in daily session handling.
    </Text>
  </Box>
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
                User Feedback
              </Text>
              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p">
                The redesigned experience received consistently positive feedback, particularly regarding:
                </Text>
                <UnorderedList textStyle={"p"} pt={4} color="gray.600">
                  <ListItem>
                  Ease of booking process
                  </ListItem>
                  <ListItem>
                  Clear communication
                  </ListItem>
                  <ListItem>
                  Reliability of the service
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </VStack>

          <DividerSection icon={faRedo} />
          <VStack align="stretch" spacing={10} py={12} id="iterations">
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 6: Iterations & Improvements
              </Heading>
              <Text
                                textStyle="pbold"
                                textTransform="uppercase"
                                color="gray.600"
                                pb={3}
                                as="h3"
                              >
                                Post-Launch Enhancements
                              </Text>
              
                              <Box
                                pl={5}
                                py={4}
                                borderLeftWidth="2px"
                                borderLeftColor="semantic.background.tertiary"
                              >
                                <Text textStyle="p">
                                Based on usage data and user feedback, I implemented several iterations:
                                </Text>
                              </Box>
                              <Box w="100%" color={"gray.600"} py={4}>
  <VStack align="stretch" spacing={8}>
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      gap={4}
      overflowX="auto"
    >
      {/* Group Booking */}
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
                icon={faUsers}
                size="xl"
              />
            </Box>
            <Text
              textStyle={"captionbold"}
              color="semantic.text.primary"
              textTransform="uppercase"
            >
              Group booking functionality
            </Text>
          </VStack>
          <Divider variant={"dividerSection"} />

          <UnorderedList spacing={3}>
            <ListItem gap={2}>
              <Text textStyle="caption">
                Added capacity for multiple participants
              </Text>
            </ListItem>
          </UnorderedList>
        </VStack>
      </GridItem>

      {/* Multi-session booking */}
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
              <FontAwesomeIcon icon={faCalendarAlt} size="xl" />
            </Box>
            <Text
              textStyle={"captionbold"}
              color="semantic.text.primary"
              textTransform="uppercase"
            >
              Multi-session booking
            </Text>
          </VStack>
          <Divider variant={"dividerSection"} />

          <UnorderedList spacing={3}>
            <ListItem gap={2}>
              <Text textStyle="caption">
                Enabled scheduling multiple sessions in one transaction
              </Text>
            </ListItem>
          </UnorderedList>
        </VStack>
      </GridItem>

      {/* Corporate portal */}
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
              <FontAwesomeIcon icon={faBuilding} size="xl" />
            </Box>
            <Text
              textStyle={"captionbold"}
              color="semantic.text.primary"
              textTransform="uppercase"
            >
              Corporate portal
            </Text>
          </VStack>
          <Divider variant={"dividerSection"} />
          <UnorderedList spacing={3}>
            <ListItem gap={2}>
              <Text textStyle="caption">
                Designed B2B interface for company accounts
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

          <DividerSection icon={faLightbulb} />
          <VStack align="stretch" spacing={10} py={12} id="lessons">
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 7: Lessons Learned
              </Heading>
              
                              <Text
                                textStyle="pbold"
                                textTransform="uppercase"
                                color="gray.600"
                                pb={3}
                                as="h3"
                              >
                                Takeaways
                              </Text>
              
                              <Box
                                pl={5}
                                py={4}
                                borderLeftWidth="2px"
                                borderLeftColor="semantic.background.tertiary"
                              >
                                <Text textStyle="p">
                                Digital transformation is most effective when it addresses real-world pain points rather than introducing technology for its own sake. This project taught me the importance of:
                                </Text>
                                <VStack align="stretch" color={'gray.600'}>
                                  <UnorderedList textStyle={"p"} pt={4} >
                                    <ListItem>
                                      <Text>
                                        <strong>Analyze manual processes deeply before automating: </strong>The most effective digital solutions come from thoroughly understanding existing workflows.


                                      </Text>
                                    </ListItem>
                                    <ListItem>
                                      <Text>
                                        <strong>Focus on eliminating tedious tasks first:  </strong>Address the most time-consuming operations for maximum impact.
                                      </Text>
                                    </ListItem>
                                    <ListItem>
                                      <Text>
                                        <strong>Gained confidence
                                        Design for both sides of marketplace equally: </strong> Success depends on meeting needs of all users.
                                      </Text>
                                    </ListItem>
                                    
                                  </UnorderedList>
                                  
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
                             Conclusions
                            </Text>
            
                            <Box
                              pl={5}
                              py={4}
                              borderLeftWidth="2px"
                              borderLeftColor="semantic.background.tertiary"
                              color='gray.600'
                              
                            >
                              <Text textStyle="p" pb={2}>
                              The success of 40minutes demonstrates how thoughtful UX design can transform a labor-intensive manual operation into an efficient digital service. By meticulously analyzing every step of our existing processes and focusing on simplicity, clarity, and speed, I created an experience that eliminated tedious manual work while enabling significant business growth.
                              </Text>
                              <Text textStyle="p" pb={2}>
                              This project reinforced my belief that the most valuable digital transformations start with a deep understanding of existing operations. By experiencing the pain points firsthand through manual operations, I was able to design targeted solutions that addressed real problems rather than creating flashy but unnecessary features.
                              </Text>
                              <Text textStyle="p">
                              The 40minutes app didn't just digitize our business—it fundamentally transformed how we operated, allowing us to scale from a small service to a thriving marketplace with 1,040+ active users and $258K in annual revenue.
                              </Text>
                              </Box>
                              </Box>
            <Box pb={12}  display={'flex'}  flexDirection="column"  justifyContent={'center'}>
                              <Image
                                src={groupImage}
                                alt="screenshot of a final presentation"
                                
            
                              />
                              <figcaption>
                                <Text as="p" textStyle="caption" textAlign="center" color="gray.600" pt={4}>
                                  with some of the trainers
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

export default FortyMinutesPage;
