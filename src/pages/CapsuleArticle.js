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
            </Box>

            <Grid
  templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
  gap={4}
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
                                    >Prescription Management</Text>
      </VStack>
      <Divider variant="dividerSection" />

      <UnorderedList spacing={3}>
        <ListItem>
          <Text textStyle="caption">Proprietary app for prescription ordering</Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">Customer profiles and medication management</Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">No integrated delivery confirmation system</Text>
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
                                    >Delivery Management</Text>
      </VStack>
      <Divider variant="dividerSection" />

      <UnorderedList spacing={3}>
        <ListItem>
          <Text textStyle="caption">Third-party routing and delivery software</Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">Task assignment and delivery confirmation</Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">No access to pharmacy system data</Text>
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
          <Image
            src={paycomImage}
            alt="Paycom Logo"
            maxW="100px"
          />
        </Box>
        <Text
                                      textStyle={"captionbold"}
                                      color="semantic.text.primary"
                                      textTransform="uppercase"
                                    >Courier Management</Text>
      </VStack>
      <Divider variant="dividerSection" />

      <UnorderedList spacing={3}>
        <ListItem>
          <Text textStyle="caption">Separate system for courier scheduling and time tracking</Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">No integration with delivery platforms</Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">Disconnected from customer communication</Text>
        </ListItem>
      </UnorderedList>
    </VStack>
  </GridItem>
</Grid>

            <Text textStyle={"p"}>
              This fragmentation creates a critical disconnect between Capsule's customer-facing prescription service and its physical delivery operations—an unusual choice for a company whose primary value proposition is convenient medication delivery.
            </Text>

            <Box color="gray.600" spacing={10}>
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                Operational Assessment: What's Working vs. What's Not
              </Heading>
              
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
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
          <Text textStyle="caption">Quick and easy prescription scheduling</Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">Reliable prescription filling</Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">Timely dispatch via Onfleet</Text>
        </ListItem>
        <ListItem>
          <Text textStyle="caption">Professional courier service</Text>
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
            High rate of failed deliveries (1–2 per shift per driver)
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
            Skipping orders is not available in onfleet to come back later when cusomters ask to wait
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
                  During my time as a courier, approximately 9 out of 10 deliveries failed due to customers not being home when they scheduled their delivery.
                </Text>
              </Box>
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
