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
  faMobilePhone,
  faLocationPin,
  faMapLocation,
  faBoxesStacked,
  faTools,
  faTimes,
  faCheck,
  faPuzzlePiece,
  faUnlink,
  faBan,
  faMoneyBillWave,
  faRoute,
  faMap,
  faCode,
  faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";
import DividerSection from "../components/DividerSection";
import banner from "../assets/40minutes/banner.png";
import ResponsiveMenu from "../components/ResponsiveMenu";
import Footer from "../components/Footer";
import CaseStudyLayout from "../style/CaseStudyLayout";
import OverlayImage from "../components/OverlayImage";
import Badges from "../components/Badges";
import { FaArrowUp } from "react-icons/fa";
import onfleetImage from "../assets/capsule/onfleet.png";
import paycomImage from "../assets/capsule/paycom.png";
import capsuleImage from "../assets/capsule/capsule.png";
import userFlowOnfleet from "../assets/capsule/userflow_onfleet.png"
import introPicture from "../assets/capsule/intropictures.png"
import capsuleUserFlow from "../assets/capsule/capsuleuserflow.png"
import capsuleAfterDelivery from "../assets/capsule/afterdeliveryscreens.png"

const CapsuleArticle = () => {
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
          bg={`linear-gradient(rgba(73,80,87,0.5), rgba(73,80,87,0.8)), url(https://placehold.co/600x400)`}
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
              How a Simple User Confirmation Could Transform Delivery Success
              Rates
            </Text>

            <Text
              as="h1"
              textStyle={"h2"}
              lineHeight="1.2"
              mb={8}
              fontWeight="bold"
            >
              Improving Capsule's Delivery Efficiency: A UX Critique of
              Third-Party Dependencies and Missed Opportunities
            </Text>
          </Container>
        </Box>
        {/* Key metrics panel with white background */}
        <Container maxW="container.lg" mt={-8} centerContent pb={8}>
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
                  Research Type
                </Text>
                <Text textStyle="pbold">
                  Operational Analysis & Field Experience
                </Text>
              </Box>

              <Box>
                <Text
                  textStyle={"pbold"}
                  color="semantic.accent"
                  mb={2}
                  textTransform={"capitalize"}
                >
                  Core Issue
                </Text>
                <Text color="gray.600">
                  Customer forgetting scheduled deliveries due to the lack of
                  pre-delivery confirmation system.
                </Text>
              </Box>

              <Box>
                <Text
                  textStyle={"pbold"}
                  color="semantic.accent"
                  mb={4}
                  textTransform={"capitalize"}
                >
                  Potential Impact
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  <Box>
                    <Text textStyle={"h3bold"} color="semantic.accent">
                      72+
                    </Text>
                    <Text textStyle={"caption"} color="gray.600">
                      minutes saved per shift
                    </Text>
                  </Box>
                  <Box>
                    <Text textStyle={"h3bold"} color="semantic.accent">
                      12+
                    </Text>
                    <Text textStyle={"caption"} color="gray.600">
                      increased deliveries per shift
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>

      <Box position="relative" px={12}>
        <CaseStudyLayout sections={sectionsProject}>
          <VStack align={"stretch"} spacing={10}>
            {/* Text start here */}
            <Box color="gray.600" spacing={10}>
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                Introduction
              </Heading>
              <Text textStyle="p" mb={4}>
                Capsule has transformed the pharmacy experience with its
                digital-first approach and convenient home delivery. As a
                direct-to-consumer pharmacy, delivery isn't just a feature—it's
                fundamental to their business model and brand promise. Yet
                curiously, Capsule relies entirely on third-party applications
                to execute this core function.
              </Text>
              <Text textStyle="p">
                This case study examines the operational gaps created by
                Capsule's dependence on external delivery platforms,
                particularly Onfleet, and proposes a critical UX intervention
                that could significantly improve delivery success rates.
              </Text>
              <Box
                borderLeftWidth="2px"
                borderColor="semantic.background.tertiary"
                p={4}
                my={4}
              >
                <Text color="gray.600" fontStyle="italic">
                  “My perspective on this issue comes from a unique vantage
                  point: I worked as a Capsule courier for the past few months,
                  experiencing their operational challenges firsthand while
                  delivering medications across Brooklyn neighborhoods.”
                </Text>
              </Box>
              <Image
                                        src={introPicture}
                                        alt="Pictures of Capsule Hub Williamsburg"
                                        w="100%"
  maxW={{ base: "100%", md: "800px" }}
  h="auto"
                                      />
                                      <Text as="p" textStyle="caption" textAlign="center" >
                      Capsule's Williamsburg Hub
                    </Text>
            </Box>

            <Box color="gray.600" spacing={10}>
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                How Capsule Operates: A Fragmented Delivery Ecosystem
              </Heading>
              <Text textStyle="p">
                Despite being a technology-forward pharmacy, Capsule's delivery
                operations rely on a patchwork of third-party services:
              </Text>
           

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap={4}
              my={4}
            >
              {/* Capsule: Prescription Management */}
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
                      <Image
                        src={capsuleImage}
                        alt="Capsule Logo"
                        maxW="100px"
                      />
                    </Box>
                    <Text
                      textStyle={"captionbold"}
                      color="semantic.text.primary"
                      textTransform="uppercase"
                    >
                      Prescription Management
                    </Text>
                  </VStack>
                  <Divider variant="dividerSection" />

                  <UnorderedList spacing={3}>
                    <ListItem>
                      <Text textStyle="caption">
                        Proprietary app for prescription ordering
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text textStyle="caption">
                        Customer profiles and medication management
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text textStyle="caption">
                        No integrated delivery confirmation system
                      </Text>
                    </ListItem>
                  </UnorderedList>
                </VStack>
              </GridItem>

              {/* Onfleet: Delivery Management */}
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
                      <Image
                        src={onfleetImage}
                        alt="Onfleet Logo"
                        maxW="100px"
                      />
                    </Box>
                    <Text
                      textStyle={"captionbold"}
                      color="semantic.text.primary"
                      textTransform="uppercase"
                    >
                      Delivery Management
                    </Text>
                  </VStack>
                  <Divider variant="dividerSection" />

                  <UnorderedList spacing={3}>
                    <ListItem>
                      <Text textStyle="caption">
                        Third-party routing and delivery software
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text textStyle="caption">
                        Task assignment and delivery confirmation
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text textStyle="caption">
                        No access to pharmacy system data
                      </Text>
                    </ListItem>
                  </UnorderedList>
                </VStack>
              </GridItem>

              {/* Paycom: Courier Management */}
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
                      <Image src={paycomImage} alt="Paycom Logo" maxW="100px" />
                    </Box>
                    <Text
                      textStyle={"captionbold"}
                      color="semantic.text.primary"
                      textTransform="uppercase"
                    >
                      Courier Management
                    </Text>
                  </VStack>
                  <Divider variant="dividerSection" />

                  <UnorderedList spacing={3}>
                    <ListItem>
                      <Text textStyle="caption">
                        Separate system for courier scheduling and time tracking
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text textStyle="caption">
                        No integration with delivery platforms
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text textStyle="caption">
                        Disconnected from customer communication
                      </Text>
                    </ListItem>
                  </UnorderedList>
                </VStack>
              </GridItem>
            </Grid>

            <Text textStyle={"p"} mb={4}>
              This fragmentation creates a critical disconnect between Capsule's
              customer-facing prescription service and its physical delivery
              operations—an unusual choice for a company whose primary value
              proposition is convenient medication delivery.
            </Text>

            <Image
                                        src={userFlowOnfleet}
                                        alt="User Flow OnFleet"
                                        w="100%"
  maxW={{ base: "100%", md: "800px" }}
  h="auto"
                                      />
                                      <Text as="p" textStyle="caption" textAlign="center" >
                      Courier User Flow to Complete a Task
                    </Text>
 </Box>
            <Box color="gray.600" spacing={10}>
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                Operational Assessment: What's Working vs. What's Not
              </Heading>

              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={4}
              >
                {/* WHAT'S WORKING */}
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
                      <Box color="green.500">
                        <FontAwesomeIcon icon={faCheck} size="xl" />
                      </Box>
                      <Text
                        textStyle={"captionbold"}
                        color="semantic.text.primary"
                        textTransform="uppercase"
                      >
                        What's Working
                      </Text>
                    </VStack>
                    <Divider variant="dividerSection" />

                    <UnorderedList spacing={3}>
                      <ListItem>
                        <Text textStyle="caption">
                          Quick and easy prescription scheduling
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text textStyle="caption">
                          Reliable prescription filling
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text textStyle="caption">
                          Timely dispatch via Onfleet
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text textStyle="caption">
                          Professional courier service
                        </Text>
                      </ListItem>
                    </UnorderedList>
                  </VStack>
                </GridItem>

                {/* WHAT'S NOT WORKING */}
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
                      <Box color="red.500">
                        <FontAwesomeIcon icon={faTimes} size="xl" />
                      </Box>
                      <Text
                        textStyle={"captionbold"}
                        color="semantic.text.primary"
                        textTransform="uppercase"
                      >
                        What's Not Working
                      </Text>
                    </VStack>
                    <Divider variant="dividerSection" />

                    <UnorderedList spacing={3}>
                      <ListItem>
                        <Text textStyle="caption">
                          High rate of failed deliveries (1–2 per shift per
                          driver)
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text textStyle="caption">
                          Customers often unaware or forget scheduled deliveries
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text textStyle="caption">
                          No pre-delivery customer confirmation mechanism
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text textStyle="caption">
                          Inefficient routing for bikers
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text textStyle="caption">
                          Skipping orders is not available in onfleet to come
                          back later when cusomters ask to wait
                        </Text>
                      </ListItem>
                    </UnorderedList>
                  </VStack>
                </GridItem>
              </Grid>
              <Box
                borderLeftWidth="2px"
                borderColor="semantic.background.tertiary"
                p={4}
                my={4}
              >
                <Text color="gray.600" fontStyle="italic">
                  During my time as a courier, approximately 9 out of 10
                  deliveries failed due to customers not being home when they
                  scheduled their delivery.
                </Text>
              </Box>
            </Box>

            <Box color="gray.600" spacing={10}>
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                Experiencing the Customer Journey Firsthand
              </Heading>
              <Text textStyle="p" mb={4}>
                To understand the customer experience, I ordered medications through Capsule and find the root of the problem. The disconnect between the prescription and delivery experiences became immediately apparent:
              </Text>
               <Image
                                        src={capsuleUserFlow}
                                        alt="User Flow OnFleet"
                                        w="100%"
  maxW={{ base: "100%", md: "800px" }}
  h="auto"
                                      />
                                      <Text as="p" textStyle="caption" textAlign="center" >
                      Customer User Flow
                    </Text>
              <Text textStyle="p" mt={4}>
                The critical gap: While I could easily schedule a delivery for later in the week, Capsule never confirmed if I would actually be home during the selected time window until the courier was already on the way. These were the messages I received a few minutes before courier's arrival
              </Text>
              <Image
                                        src={capsuleAfterDelivery}
                                        alt="User Flow Capsule"
                                        w="100%"
  maxW={{ base: "100%", md: "800px" }}
  h="auto"
                                      />
                                      <Text as="p" textStyle="caption" textAlign="center" >
                      Text Messages Received by Capsule
                    </Text>
            </Box>

            <Box color="gray.600" spacing={10}>
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                The Fundamental Critique: Outsourcing the Core Experience
              </Heading>
              <Text textStyle="p" mb={4}>
                For a digital pharmacy whose primary value proposition is convenience through delivery, Capsule's choice to rely on third-party delivery software represents a significant strategic limitation:
              </Text>
              <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
  {/* MISSED INTEGRATION */}
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
        <Box color="blue.500">
          <FontAwesomeIcon icon={faPuzzlePiece} size="xl" />
        </Box>
        <Text
          textStyle={"captionbold"}
          color="semantic.text.primary"
          textTransform="uppercase"
        >
          Missed Integration
        </Text>
      </VStack>
      <Divider variant="dividerSection" />

      <UnorderedList spacing={3}>
        <ListItem>
          <Text textStyle="caption">
            No data flow between prescription and delivery systems
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Medication priority information doesn't reach couriers
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Customer preferences not shared across platforms
          </Text>
        </ListItem>
      </UnorderedList>
    </VStack>
  </GridItem>

  {/* DISCONNECTED EXPERIENCE */}
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
        <Box color="orange.500">
          <FontAwesomeIcon icon={faUnlink} size="xl" />
        </Box>
        <Text
          textStyle={"captionbold"}
          color="semantic.text.primary"
          textTransform="uppercase"
        >
          Disconnected Experience
        </Text>
      </VStack>
      <Divider variant="dividerSection" />

      <UnorderedList spacing={3}>
        <ListItem>
          <Text textStyle="caption">
            Pharmacy system has no visibility into delivery status
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Customers interact with two separate systems
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            No unified customer communication channel
          </Text>
        </ListItem>
      </UnorderedList>
    </VStack>
  </GridItem>

  {/* LIMITED INNOVATION */}
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
        <Box color="red.500">
          <FontAwesomeIcon icon={faBan} size="xl" />
        </Box>
        <Text
          textStyle={"captionbold"}
          color="semantic.text.primary"
          textTransform="uppercase"
        >
          Limited Innovation
        </Text>
      </VStack>
      <Divider variant="dividerSection" />

      <UnorderedList spacing={3}>
        <ListItem>
          <Text textStyle="caption">
            Cannot customize delivery features for medication-specific needs
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Reliant on Onfleet's development roadmap
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Unable to build competitive advantage through delivery
          </Text>
        </ListItem>
      </UnorderedList>
    </VStack>
  </GridItem>
</Grid>
              <Box
                borderLeftWidth="2px"
                borderColor="semantic.background.tertiary"
                p={4}
                my={4}
              >
                <Text color="gray.600" fontStyle="italic">
                  “When delivery is your primary service differentiator, outsourcing the entire delivery experience to third-party software creates fundamental limitations to quality and innovation.”
                </Text>
              </Box>
            </Box>

            <Box color="gray.600" spacing={10}>
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                The Primary Issue: Failed Deliveries and Forgotten Appointments
              </Heading>
              <Text textStyle="p"mb={4}>
                After hundreds of deliveries across Brooklyn neighborhoods, a clear pattern emerged: The most common reason for failed deliveries was simply that customers forgot they had scheduled a medication delivery.
              </Text>
              <Image src="https://placehold.co/600x400" alt='mockups' mb={4}/>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
  {/* TIME IMPACT */}
  <GridItem>
    <VStack
      align="stretch"
      bg="semantic.background.secondary"
      p={4}
      spacing={4}
      rounded="lg"
    >
      <VStack>
        <Box color="blue.600">
          <FontAwesomeIcon icon={faClock} size="xl" />
        </Box>
        <Text
          textStyle={"captionbold"}
          color="semantic.text.primary"
          textTransform="uppercase"
        >
          Time Impact
        </Text>
      </VStack>
      <Divider variant="dividerSection" />

      <UnorderedList spacing={3}>
        <ListItem>
          <Text textStyle="caption">
            5–10 minutes wasted per failed delivery attempt
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Another 10–15 minutes for return to hub
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            ~25 minutes of courier capacity wasted per failed delivery
          </Text>
        </ListItem>
      </UnorderedList>
    </VStack>
  </GridItem>

  {/* OPERATIONAL COST */}
  <GridItem>
    <VStack
      align="stretch"
      bg="semantic.background.secondary"
      p={4}
      spacing={4}
      rounded="lg"
    >
      <VStack>
        <Box color="green.600">
          <FontAwesomeIcon icon={faMoneyBillWave} size="xl" />
        </Box>
        <Text
          textStyle={"captionbold"}
          color="semantic.text.primary"
          textTransform="uppercase"
        >
          Operational Cost
        </Text>
      </VStack>
      <Divider variant="dividerSection" />

      <UnorderedList spacing={3}>
        <ListItem>
          <Text textStyle="caption">
            Return trip to hub for failed deliveries
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Rescheduling administrative costs
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Customer satisfaction impact and potential lost business
          </Text>
        </ListItem>
      </UnorderedList>
    </VStack>
  </GridItem>
</Grid>
<Text textStyle="p" my={4}>
                This represents a significant operational inefficiency that could be addressed with a simple UX intervention: a delivery confirmation mechanism.
              </Text>
            </Box>
            <Box color="gray.600" spacing={10}>
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                The UX Opportunity: Delivery Confirmation
              </Heading>
              <Text textStyle="p" mb={4}>
                The solution to this problem doesn't require rebuilding Capsule's entire delivery system, but rather introducing a critical touchpoint between the prescription and delivery experiences:
              </Text>
              <Image src="https://placehold.co/600x400" alt='mockups' mb={4}/>
              <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
  {/* ADVANCE NOTICE */}
  <GridItem>
    <VStack
      align="stretch"
      bg="semantic.background.secondary"
      p={4}
      spacing={4}
      rounded="lg"
    >
      <VStack>
        <Box color="blue.600">
          <FontAwesomeIcon icon={faClock} size="xl" />
        </Box>
        <Text
          textStyle="captionbold"
          color="semantic.text.primary"
          textTransform="uppercase"
        >
          Advance Notice
        </Text>
      </VStack>
      <Divider variant="dividerSection" />

      <UnorderedList spacing={3}>
        <ListItem>
          <Text textStyle="caption">
            Send confirmation notification 2–3 hours before delivery
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Allow sufficient time for customer response
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Provide actionable response options
          </Text>
        </ListItem>
      </UnorderedList>
    </VStack>
  </GridItem>

  {/* ROUTE OPTIMIZATION */}
  <GridItem>
    <VStack
      align="stretch"
      bg="semantic.background.secondary"
      p={4}
      spacing={4}
      rounded="lg"
    >
      <VStack>
        <Box color="purple.600">
          <FontAwesomeIcon icon={faRoute} size="xl" />
        </Box>
        <Text
          textStyle="captionbold"
          color="semantic.text.primary"
          textTransform="uppercase"
        >
          Route Optimization
        </Text>
      </VStack>
      <Divider variant="dividerSection" />

      <UnorderedList spacing={3}>
        <ListItem>
          <Text textStyle="caption">
            Allow for route replanning if customer won't be available
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Skip unavailable customers and return later if needed
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Reduce wasted courier time
          </Text>
        </ListItem>
      </UnorderedList>
    </VStack>
  </GridItem>

  {/* CUSTOMER EXPERIENCE */}
  <GridItem>
    <VStack
      align="stretch"
      bg="semantic.background.secondary"
      p={4}
      spacing={4}
      rounded="lg"
    >
      <VStack>
        <Box color="green.600">
          <FontAwesomeIcon icon={faSmile} size="xl" />
        </Box>
        <Text
          textStyle="captionbold"
          color="semantic.text.primary"
          textTransform="uppercase"
        >
          Customer Experience
        </Text>
      </VStack>
      <Divider variant="dividerSection" />

      <UnorderedList spacing={3}>
        <ListItem>
          <Text textStyle="caption">
            Provides reminder of upcoming delivery
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Gives customers agency to confirm or reschedule
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Creates accountability for being available
          </Text>
        </ListItem>
      </UnorderedList>
    </VStack>
  </GridItem>
</Grid>

              <Box
                borderLeftWidth="2px"
                borderColor="semantic.background.tertiary"
                p={4}
                my={4}
              >
                <Text color="gray.600" fontStyle="italic">
                  This seemingly small intervention addresses the largest operational inefficiency in Capsule's delivery process while enhancing customer experience.
                </Text>
              </Box>
            </Box>

            <Box color="gray.600" spacing={10}>
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                 Implementation Considerations
              </Heading>
              <Text textStyle="p"mb={4}>
                While this solution is conceptually simple, implementing it within Capsule's fragmented technology ecosystem would require specific integrations:
              </Text>
              <Image src="https://placehold.co/600x400" alt='mockups' mb={4}/>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
  {/* TECHNICAL REQUIREMENTS */}
  <GridItem>
    <VStack
      align="stretch"
      bg="semantic.background.secondary"
      p={4}
      spacing={4}
      rounded="lg"
    >
      <VStack>
        <Box color="blue.700">
          <FontAwesomeIcon icon={faCode} size="xl" />
        </Box>
        <Text
          textStyle="captionbold"
          color="semantic.text.primary"
          textTransform="uppercase"
        >
          Technical Requirements
        </Text>
      </VStack>
      <Divider variant="dividerSection" />

      <UnorderedList spacing={3}>
        <ListItem>
          <Text textStyle="caption">
            API integration between Capsule app and Onfleet
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Customer response handling system
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Route re-optimization capability
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Notification scheduling system
          </Text>
        </ListItem>
      </UnorderedList>
    </VStack>
  </GridItem>

  {/* PHASED APPROACH */}
  <GridItem>
    <VStack
      align="stretch"
      bg="semantic.background.secondary"
      p={4}
      spacing={4}
      rounded="lg"
    >
      <VStack>
        <Box color="purple.700">
          <FontAwesomeIcon icon={faMap} size="xl" />
        </Box>
        <Text
          textStyle="captionbold"
          color="semantic.text.primary"
          textTransform="uppercase"
        >
          Phased Approach
        </Text>
      </VStack>
      <Divider variant="dividerSection" />

      <UnorderedList spacing={3}>
        <ListItem>
          <Text textStyle="caption">
            Phase 1: Implement basic confirmation notification
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Phase 2: Add rescheduling functionality
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Phase 3: Integrate with courier routing in real time
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">
            Phase 4: Develop proprietary delivery platform
          </Text>
        </ListItem>
      </UnorderedList>
    </VStack>
  </GridItem>
</Grid>
              <Text textStyle="p"mb={4}>
                This integration could serve as a first step toward a more comprehensive proprietary delivery solution that would allow Capsule to fully own this critical aspect of their customer experience.
              </Text>

            </Box>
            <Box color="gray.600" spacing={10}>
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                Business Case & Conclusion
              </Heading>
              <Text textStyle="p"mb={4}>
                The business case for implementing a delivery confirmation system is compelling:
              </Text>
              <Text textStyle="p"mb={4}>
                Ultimately, this case demonstrates how a relatively simple UX intervention at a critical touchpoint can address significant operational inefficiencies. For Capsule to fully deliver on its brand promise, it should consider this an initial step toward developing a proprietary delivery platform that integrates seamlessly with its prescription management system.
              </Text>
              <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
  {/* REDUCED FAILURES */}
  <VStack
    align="stretch"
    bg="semantic.background.secondary"
    p={4}
    spacing={4}
    rounded="lg"
  >
    <VStack>
      <Box color="green.600">
        <FontAwesomeIcon icon={faChartLine} size="xl" />
      </Box>
      <Text
        textStyle="captionbold"
        color="semantic.text.primary"
        textTransform="uppercase"
      >
        Reduced Failures
      </Text>
    </VStack>
    <Divider variant="dividerSection" />
    <UnorderedList spacing={3}>
      <ListItem>
        <Text textStyle="caption">
          Potential 50-70% reduction in failed deliveries
        </Text>
      </ListItem>
      <ListItem>
        <Text textStyle="caption">Fewer return trips to hub</Text>
      </ListItem>
      <ListItem>
        <Text textStyle="caption">
          Lower rescheduling administrative costs
        </Text>
      </ListItem>
    </UnorderedList>
  </VStack>

  {/* IMPROVED EFFICIENCY */}
  <VStack
    align="stretch"
    bg="semantic.background.secondary"
    p={4}
    spacing={4}
    rounded="lg"
  >
    <VStack>
      <Box color="blue.600">
        <FontAwesomeIcon icon={faGaugeHigh} size="xl" />
      </Box>
      <Text
        textStyle="captionbold"
        color="semantic.text.primary"
        textTransform="uppercase"
      >
        Improved Efficiency
      </Text>
    </VStack>
    <Divider variant="dividerSection" />
    <UnorderedList spacing={3}>
      <ListItem>
        <Text textStyle="caption">
          25 minutes saved per prevented failed delivery
        </Text>
      </ListItem>
      <ListItem>
        <Text textStyle="caption">
          More deliveries per courier per shift
        </Text>
      </ListItem>
      <ListItem>
        <Text textStyle="caption">Better route optimization</Text>
      </ListItem>
    </UnorderedList>
  </VStack>

  {/* COMPETITIVE ADVANTAGE */}
  <VStack
    align="stretch"
    bg="semantic.background.secondary"
    p={4}
    spacing={4}
    rounded="lg"
  >
    <VStack>
      <Box color="purple.600">
        <FontAwesomeIcon icon={faShieldAlt} size="xl" />
      </Box>
      <Text
        textStyle="captionbold"
        color="semantic.text.primary"
        textTransform="uppercase"
      >
        Competitive Advantage
      </Text>
    </VStack>
    <Divider variant="dividerSection" />
    <UnorderedList spacing={3}>
      <ListItem>
        <Text textStyle="caption">
          More reliable delivery experience than competitors
        </Text>
      </ListItem>
      <ListItem>
        <Text textStyle="caption">
          First step toward fully owning the delivery experience
        </Text>
      </ListItem>
      <ListItem>
        <Text textStyle="caption">
          Enhanced customer satisfaction and loyalty
        </Text>
      </ListItem>
    </UnorderedList>
  </VStack>
</Grid>
              <Text textStyle="p"mb={4}>
                While third-party solutions like Onfleet provide immediate functionality, Capsule's long-term competitive advantage will come from treating delivery not as an outsourced function, but as an integral part of the end-to-end pharmacy experience they own and continuously improve.
              </Text>
              </Box>


          </VStack>
        </CaseStudyLayout>
      </Box>

      <Divider variant="section" />

      <Footer />
    </>
  );
};

export default CapsuleArticle;
