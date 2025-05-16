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
              Own the Last Mile
            </Text>

            <Text
              as="h1"
              textStyle={"h2"}
              lineHeight="1.2"
              mb={8}
              fontWeight="bold"
            >
              Why Capsule's Core Business Deserves Proprietary Technology
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
                  Field Research
                </Text>
                <Text textStyle="pbold">Capsule Pharmacy</Text>
                <Text textStyle={"caption"} color="gray.600">
                  Courier Division
                </Text>
              </Box>

              <Box>
                <Text
                  textStyle={"pbold"}
                  color="semantic.accent"
                  mb={2}
                  textTransform={"capitalize"}
                >
                  Discovery scope
                </Text>
                <Text color="gray.600">
                  5 months as medication courier across Brooklyn neigborhoods
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
                      12
                    </Text>
                    <Text textStyle={"caption"} color="gray.600">
                      minutes saved per courier shift
                    </Text>
                  </Box>
                  <Box>
                    <Text textStyle={"h3bold"} color="semantic.accent">
                      14%+
                    </Text>
                    <Text textStyle={"caption"} color="gray.600">
                      increased delivery capacity
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
                Context
              </Heading>
              <Text textStyle="p">
                Capsule Pharmacy operates a growing medication delivery service
                across New York City, using a hub-based system with couriers on
                bikes and in cars. As a leading digital pharmacy, they've built
                excellent customer-facing technology for prescription
                management, but rely on third-party software for their delivery
                operations:
              </Text>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                gap={4}
                my={4}
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
                        <Image
                          src={onfleetImage}
                          alt="Simplicity Illustration"
                          maxW="100px"
                        />
                      </Box>
                    </VStack>
                    <Divider variant={"dividerSection"} />

                    <Text textStyle="caption">
                      Primary courier app for routing, delivery confirmation,
                      gps and chat with dipatchers
                    </Text>
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
                        <Image
                          src={paycomImage}
                          alt="Simplicity Illustration"
                          maxW="100px"
                        />
                      </Box>
                    </VStack>
                    <Divider variant={"dividerSection"} />

                    <Text textStyle="caption">
                      Separate system for courier time tracking, payroll and
                      management
                    </Text>
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
                        <Image
                          src={capsuleImage}
                          alt="Simplicity Illustration"
                          maxW="100px"
                        />
                      </Box>
                    </VStack>
                    <Divider variant={"dividerSection"} />

                    <Text textStyle="caption">
                      Calls between couriers and dispatch when issues arise
                    </Text>
                  </VStack>
                </GridItem>
              </Grid>
              <Text textStyle={"p"}>
                This fragmented system creates friction that impacts couriers,
                customers, and operational efficiency.
              </Text>
            </Box>

            <Box color="gray.600" spacing={10}>
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                My approach: Becoming a Courier
              </Heading>
              <Text textStyle="p">
                As a product designer passionate about logistics systems, I took
                an unconventional approach to research: I became a medication
                courier for Capsule Pharmacy. Working evenings delivering
                medications across Brooklyn neighborhoods revealed critical
                inefficiencies in their delivery operations that a purpose-built
                application could solve.
              </Text>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                gap={4}
                my={4}
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
                        <FontAwesomeIcon icon={faMapLocation} size="xl" />
                      </Box>
                      <Text
                        textStyle={"captionbold"}
                        color="semantic.text.primary"
                        textTransform="uppercase"
                      >
                        Delivery area
                      </Text>
                     
                    </VStack>
                    <Divider variant={"dividerSection"} />

                    
                   
                        <Text textStyle="caption">
                          Williamsburg, Bushwick, Bed-Stuy, Crown Heights, Clinton Hill, Greenpoint, Astoria, Long Isand City, Sunny Side.
                        </Text>
                      
                    
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
                        <FontAwesomeIcon icon={faBoxesStacked} size="xl" />
                      </Box>
                      <Text
                        textStyle={"captionbold"}
                        color="semantic.text.primary"
                        textTransform="uppercase"
                      >
                        Workload
                      </Text>
                     
                    </VStack>
                    <Divider variant={"dividerSection"} />

                    
                   
                        <Text textStyle="caption">
                          25-50 deliveries per shift in two windows: 6-8pm and 8-10pm.
                        </Text>
                      
                    
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
                        <FontAwesomeIcon icon={faTools} size="xl" />
                      </Box>
                      <Text
                        textStyle={"captionbold"}
                        color="semantic.text.primary"
                        textTransform="uppercase"
                      >
                        Tools used
                      </Text>
                     
                    </VStack>
                    <Divider variant={"dividerSection"} />

                    
                   
                        <Text textStyle="caption">
                          Onfleet app for tasks and paycom for time tracking. 
                        </Text>
                      
                    
                  </VStack>
                </GridItem>

               
              </Grid>
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
