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
  AspectRatio,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import competitors from "../assets/steakhouse/data/competitors";
import VerticalProgressBar from "../components/VerticalProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faCheck,
  faFileAlt,
  faLightbulb,
  faPencilRuler,
  faPeopleGroup,
  faRocket,
  faZap,
  faThumbsUp,
  faMobile,
  faSackDollar,
  faClock,
  faForward,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";

import problemImage from "../assets/steakhouse/Question.svg";
import evolutiionImage from "../assets/steakhouse/evolution.svg";
import goalImage from "../assets/steakhouse/Checklist.svg";
import interview from "../assets/steakhouse/interview.svg";
import testingImage from "../assets/steakhouse/testing.svg";
import processImage from "../assets/steakhouse/process.png";
import DividerSection from "../components/DividerSection";
import keyImage from "../assets/steakhouse/key.svg";
import market from "../assets/steakhouse/market.svg";
import decisionImage from "../assets/steakhouse/Decision.svg";
import banner from "../assets/steakhouse/steakhousebanner.png";
import ResponsiveMenu from "../components/ResponsiveMenu";
import mockupBrief from "../assets/steakhouse/steakhousemockup.png";
import CompetitiveAnalysis from "../components/CompetitiveAnalysis";
import PersonasSection from "../components/PersonasSection";
import personas from "../assets/steakhouse/data/personas";
import JourneyMap from "../components/JourneyMap";
import PaperWireframes from "../components/PaperWireFrames";
import DigitalWireframes from "../components/DigitalWireframes";
import digitalWireframes from "../assets/steakhouse/data/digitalWireframes";
import LofiPrototype from "../components/LofiPrototype";
import UsabilityStudy from "../components/UsabilityStudy";
import usabilityData from "../assets/steakhouse/data/usabilityData";
import DesignRefinement from "../components/DesignRefinement";
import impactImage from "../assets/steakhouse/impact.svg";
import Footer from "../components/Footer"

const SteakHousePage = () => {
  const { sections } = useAlertContext();
  

  const sectionsProject = [
    { id: "theproject", label: "The Project Brief", icon: faFileAlt },
    {
      id: "understanding",
      label: "understanding the user",
      icon: faPeopleGroup,
    },
    { id: "starting", label: "starting the design", icon: faPencilRuler },
    { id: "refining", label: "refining the design", icon: faBrush },
    { id: "going", label: "going forward", icon: faRocket },
  ];

  return (
    <>
      <ResponsiveMenu isOtherPage sections={sections} />

      <Box py={24} px={12}>
        <VStack color="semantic.text.primary" alignItems="start" pb={6}>
          <Text as="h1" textStyle={"h1"} textTransform="capitalize">
            From User research to seamless ordering
          </Text>
          <Text as="h2" textStyle={"h2"} textTransform="capitalize">
            A Mobile UX Case Study
          </Text>
          <Text as="i" textStyle={"p"} color="gray.600">
            How might we elevate the steakhouse experience through digital
            innovation while driving business growth?
          </Text>
          <Text as="h3" textStyle={"caption"} color="gray.600">
            <Text
              as="span"
              textStyle="captionbold"
              color="semantic.text.primary"
              textTransform={"uppercase"}
            >
              client -{" "}
            </Text>{" "}
            Metropolitan Grill
          </Text>

          <Box w={{ base: "100%", md: "100%" }} overflow="hidden" maxH={'300px'}>
            <Image
              src={banner}
              alt="banner"
              objectFit="contain"
              objectPosition="center"
              
            />
          </Box>
          <Grid
            w={"100%"}
            templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
            gap={{ base: 2, md: 24 }}
            color="gray.600"
          >
            <GridItem w="100%">
              <VStack alignItems="start">
                <Text as="p" textStyle="pbold" color="semantic.text.primary">
                  Role
                </Text>
                <Divider variant="thick" />
                <Text as="p" textStyle={"p"}>
                  Product Designer
                </Text>
              </VStack>
            </GridItem>
            <GridItem w="100%">
              <VStack alignItems="start">
                <Text as="p" textStyle="pbold" color="semantic.text.primary">
                  Duration
                </Text>
                <Divider variant="thick" />
                <Text as="p" textStyle={"p"}>
                  12 Weeks
                </Text>
              </VStack>
            </GridItem>
            <GridItem w="100%">
              <VStack alignItems="start">
                <Text as="p" textStyle="pbold" color="semantic.text.primary">
                  Tools
                </Text>
                <Divider variant="thick" />
                <Text as="p" textStyle={"p"}>
                  Figma • Zoom • Otter • UserTesting.com • Miro • Google Suite
                </Text>
              </VStack>
            </GridItem>

            <GridItem w="100%">
              <VStack alignItems="start">
                <Text as="p" textStyle="pbold" color="semantic.text.primary">
                  Skills
                </Text>
                <Divider variant="thick" />
                <Text as="p" textStyle={"p"}>
                  User Research • Wireframing • Prototyping • User Testing •
                  Visual Design • Surveys
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </VStack>
      </Box>

      <Divider variant="section" />

      <Grid
        templateColumns={{ base: "1fr", md: "320px 3px 1fr" }}
        height="100vh"
        alignItems="start"
        w={"100%"}
        overflow={"hidden"}
      >
        <Box
          display={{ base: "none", md: "block" }}
          visibility={{ base: "hidden", md: "visible" }}
          position={"sticky"}
          top="4"
          height="fit-content"
          pt={12}
        >
          <VerticalProgressBar sections={sectionsProject} />
        </Box>
        <Divider orientation="vertical" variant="thick" />

        <Box overflowY="auto" height={"100%"} data-scroll-container="true" >
          {/* ALL CONTENT HERE */}

          {/* FIRST SECTION OVERVIEW*/}
          <section>
            <Box id="theproject">
              <Box px={12}>
                <VStack alignItems="start" pt={12}>
                  <Text textStyle="h2">Overview</Text>

                  <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={6}
                    color="gray.600"
                    pb={12}
                  >
                    {/* Text Columns */}
                    <GridItem>
                      <Box pb={4}>
                        <Text
                          textStyle="pbold"
                          textTransform={"uppercase"}
                          color="semantic.text.primary"
                        >
                          Background
                        </Text>
                        <Text textStyle="p">
                          McKinsey reports 62% of fine-dining establishments
                          lost market share to digital competitors, while 92% of
                          millennials prefer restaurants with digital ordering.
                          This project bridges the gap between traditional
                          steakhouse service and modern dining preferences
                          through innovative mobile ordering.
                        </Text>
                      </Box>

                      <Box pb={4}>
                        <Text
                          textStyle="pbold"
                          textTransform={"uppercase"}
                          color="semantic.text.primary"
                        >
                          Relevance
                        </Text>
                        <Text textStyle="p">
                          With delivery platforms charging 30% per order on
                          $150+ steakhouse transactions, restaurants lose $45+
                          per sale. This project creates a proprietary system
                          that eliminates costly third-party dependencies while
                          maintaining premium standards.
                        </Text>
                      </Box>

                      <Box pb={4}>
                        <Text
                          textStyle="pbold"
                          textTransform={"uppercase"}
                          color="semantic.text.primary"
                        >
                          My impact
                        </Text>
                        <Text textStyle="p">
                          I led user research, created wireframes, and conducted
                          iterative testing to design an intuitive ordering
                          system. The solution projects to save restaurants 30%
                          in platform fees through direct-to-consumer ordering.
                        </Text>
                      </Box>
                    </GridItem>

                    {/* image Column */}
                    <GridItem display="flex" justifyContent="center">
                      <Box pb={4}>
                        <Text textStyle="pbold">
                          Interact with the prototype and complete an order!
                        </Text>

                        <AspectRatio ratio={9 / 16} maxH={"650px"}>
                          <iframe
                            title="figma-prototype"
                            style={{
                              border: "1px solid rgba(0, 0, 0, 0.1)",
                            }}
                            src="https://embed.figma.com/proto/jTg5y0K73FjmiGZxtmegGA/My-project-(steakhouse)?page-id=1184%3A9871&node-id=1184-9872&viewport=502%2C578%2C0.5&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1184%3A9872&show-proto-sidebar=0&embed-host=share&hide-ui=1"
                            allowFullScreen
                          ></iframe>
                        </AspectRatio>
                      </Box>
                    </GridItem>
                  </Grid>
                </VStack>
              </Box>

              {/* Quick stats */}

              <Box
                backgroundColor={"semantic.background.secondary"}
                w={"100%"}
                p={12}
              >
                <VStack alignItems="center">
                  <Text textStyle="h2">Quick Stats</Text>

                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={6}
                    textAlign={"center"}
                    color="gray.600"
                  >
                    <GridItem>
                      <Box pb={4}>
                        <HStack
                          align={"center"}
                          justifyContent={"center"}
                          color="semantic.text.primary"
                        >
                          <FontAwesomeIcon icon={faCheck} size="xl" />
                          <Text as="p" textStyle="h3">
                            95%
                          </Text>
                        </HStack>

                        <Text textStyle="p" textTransform="capitalize">
                          Task success rate
                        </Text>
                      </Box>
                    </GridItem>

                    {/* Text Column 2 */}
                    <GridItem>
                      <Box pb={4}>
                        <HStack
                          align={"center"}
                          justifyContent={"center"}
                          color="semantic.text.primary"
                        >
                          <FontAwesomeIcon icon={faThumbsUp} size="xl" />
                          <Text as="p" textStyle="h3">
                            87%
                          </Text>
                        </HStack>
                        <Text textStyle="p" textTransform="capitalize">
                          User satisfaction
                        </Text>
                      </Box>
                    </GridItem>

                    {/* Text Column 4 */}
                    <GridItem>
                      <Box pb={4}>
                        <HStack
                          align={"center"}
                          justifyContent={"center"}
                          color="semantic.text.primary"
                        >
                          <FontAwesomeIcon icon={faZap} size="xl" />
                          <Text as="p" textStyle="h3">
                            92%
                          </Text>
                        </HStack>
                        <Text textStyle="p" textTransform="capitalize">
                          First-time completion
                        </Text>
                      </Box>
                    </GridItem>
                  </Grid>
                </VStack>
              </Box>

              {/* Problem & Goal */}
            
              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap={6}
                pt={12}
                px={12}
                color={"gray.600"}
                
              >
                {/* Text Column 1 */}
                <GridItem>
                  <Box pb={4}>
                    <Text
                      textStyle="pbold"
                      textAlign={"center"}
                      textTransform={"uppercase"}
                      color="semantic.text.primary"
                    >
                      Problem
                    </Text>
                    <Box maxW='300px' mx="auto" >
                      <Image src={problemImage} alt="problem Illustration" />
                    </Box>
                    <Text textStyle="p">
                      Fine-dining restaurants lose 30% of revenue to delivery
                      platforms while lacking the digital infrastructure to
                      offer direct ordering. This creates a significant barrier
                      for steakhouses trying to meet the growing demand for
                      convenient dining options without compromising their
                      premium brand experience.
                    </Text>
                  </Box>
                </GridItem>

                {/* Text Column 2 */}
                <GridItem>
                  <Box pb={4}>
                    <Text
                      textStyle="pbold"
                      textAlign={"center"}
                      textTransform={"uppercase"}
                      color="semantic.text.primary"
                    >
                      Goal
                    </Text>
                    <Box maxW='300px' mx="auto" >
                      <Image src={goalImage} />
                    </Box>
                    <Text textStyle="p">
                      Design an intuitive mobile ordering system that allows
                      steakhouses to maintain direct relationships with
                      customers, preserve their premium dining experience, and
                      eliminate dependency on costly third-party platforms.
                    </Text>
                  </Box>
                </GridItem>
              </Grid>

              {/* QUESTION & SOLUTION OPEN */}

              <Box
                backgroundColor={"semantic.background.secondary"}
                w={"100%"}
                p={12}
              >
                <VStack alignItems="center">
                  <Text
                    textStyle="pbold"
                    textAlign={"center"}
                    color="semantic.text.primary"
                    textTransform={"uppercase"}
                  >
                    Process
                  </Text>
                  <Box>
                    <Image src={processImage} />
                    <figcaption>
                      <Text as="p" textStyle="caption" textAlign="center">
                        Figure 1: UX Design process approach
                      </Text>
                    </figcaption>
                  </Box>
                </VStack>
              </Box>

              {/* QUESTION & SOLUTION CLOSE */}

              {/* IMPACT OPEN */}

              <Box w={"100%"} p={12} color="gray.600">
                <Text
                  as="h2"
                  textStyle={"pbold"}
                  pb={4}
                  color="semantic.text.primary"
                  textTransform={"uppercase"}
                >
                  {" "}
                  Minimum Viable Product (MVP)
                </Text>
                <Text as="p" textStyle={"p"} pb={4}>
                  {" "}
                  The initial release focuses on core ordering functionality to
                  provide immediate value and reduce third-party platform
                  dependency. Starting with essential features allows quick
                  market entry while gathering user feedback for future
                  iterations.
                </Text>
                <Text
                  as="p"
                  textStyle={"pbold"}
                  color="semantic.text.primary"
                  textTransform={"uppercase"}
                  pb={4}
                >
                  project goals
                </Text>
                <Grid
                  templateColumns={{
                    base: "1fr",
                    lg: "1fr 1fr",
                    "2xl": "0.5fr 1fr",
                  }}
                  gap={6}
                  color="gray.600"
                  pb={12}
                >
                  <GridItem>
                    <Box pb={4}>
                      <Text
                        as="p"
                        textStyle={"pbold"}
                        textTransform={"capitalize"}
                      >
                        Restaurant Localization
                      </Text>
                      <UnorderedList textStyle={"p"}>
                        <ListItem>
                          Find nearest locations and view custom menus
                        </ListItem>
                        <ListItem>
                          Display location-specific pricing and availability
                        </ListItem>
                      </UnorderedList>
                    </Box>

                    <Box>
                      <Text
                        as="p"
                        textStyle={"pbold"}
                        textTransform={"capitalize"}
                      >
                        Order Modification System
                      </Text>
                      <UnorderedList textStyle={"p"}>
                        <ListItem>
                          Customize meal preferences and special requests
                        </ListItem>
                        <ListItem>
                          Edit orders before final confirmation
                        </ListItem>
                      </UnorderedList>
                    </Box>

                    <Box>
                      <Text
                        as="p"
                        textStyle={"pbold"}
                        textTransform={"capitalize"}
                      >
                        Order Tracking
                      </Text>
                      <UnorderedList textStyle={"p"}>
                        <ListItem>Real-time status updates</ListItem>
                        <ListItem>Estimated preparation times</ListItem>
                        <ListItem>
                          Push notifications for order changes
                        </ListItem>
                      </UnorderedList>
                    </Box>

                    <Box>
                      <Text
                        as="p"
                        textStyle={"pbold"}
                        textTransform={"capitalize"}
                      >
                        Streamlined Checkout
                      </Text>
                      <UnorderedList textStyle={"p"}>
                        <ListItem>
                          Save multiple payment methods & address
                        </ListItem>
                        <ListItem>Quick reorder from order history</ListItem>
                      </UnorderedList>
                    </Box>
                  </GridItem>

                  <GridItem>
                    <Box display={"flex"} justifyContent="center">
                      <Image
                        src={mockupBrief}
                        alt="mockup"
                        height={"auto"}
                        maxHeight={"500px"}
                        objectFit={"contain"}
                      />
                    </Box>
                  </GridItem>
                </Grid>
              </Box>

              {/* {'IMPACT CLOSE'} */}

              {/* Process */}

              {/* PROCESS IMAGE CLOSE */}
            </Box>
          </section>

          {/* FIRST SECTION CLOSE */}
          <Divider variant="section" />

          {/* SECOND SECTION PLANNING OPEN*/}
          <section>
            <Box id="understanding">
              <Box px={12}>
                <DividerSection>Phase 1 </DividerSection>
                <VStack alignItems="start" pt={12} color="gray.600">
                  <Text
                    textStyle="h2"
                    color="semantic.text.primary"
                    textTransform={"capitalize"}
                  >
                    understanding the user
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    My research phase focused on understanding user behaviors,
                    pain points, and expectations in the premium dining space.
                    This phase included conducting interviews, competitive
                    analysis, creating user personas, and journey mapping.
                  </Text>

                  {/* Items */}
                  <VStack alignItems="start">
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                    >
                      user interviews
                    </Text>
                    <Text as="p" textStyle="p" pb={4}>
                      Conducted in-depth interviews with 5 target users who
                      frequently order from high-end restaurants, supplemented
                      with a survey of 50 potential users. The research focused
                      on understanding ordering habits, platform preferences,
                      and pain points.
                    </Text>
                    <HStack pb={12}>
                      <a
                        href="https://docs.google.com/document/d/1_bSvOb4faRBJYChBRK_NEP-MLRGCa-rKMXR8q6mRnuk/edit?tab=t.0#heading=h.8cpmn7co03qe"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text
                          as="p"
                          textStyle={"p"}
                          decoration={"underline"}
                          textTransform={"capitalize"}
                        >
                          View Interview script
                        </Text>
                      </a>
                      <Text>•</Text>
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd8DqP5SgzPKancNsTKjiiPY6tROzt2gcNHvwdfWJTbPA-1bA/viewform"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text
                          as="p"
                          textStyle={"p"}
                          decoration={"underline"}
                          textTransform={"capitalize"}
                        >
                          View survey questions
                        </Text>
                      </a>
                    </HStack>
                  </VStack>
                </VStack>
              </Box>

              {/* Key Findings */}

              <Box
                backgroundColor={"semantic.background.secondary"}
                w={"100%"}
                p={12}
              >
                <VStack alignItems={"center"}>
                  <Text
                    textStyle="h2"
                    textAlign={"center"}
                    color="semantic.text.primary"
                    textTransform={"capitalize"}
                  >
                    key findings
                  </Text>
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    color="gray.600"
                    alignItems="center" // Ensures vertical alignment
                  >
                    <GridItem>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Image
                          src={interview}
                          alt="interview Illustration"
                          maxW="500px"
                        />
                      </Box>
                    </GridItem>
                    <GridItem>
                      <UnorderedList listStyleType={"none"} textStyle={"p"}>
                        <ListItem>
                          <FontAwesomeIcon icon={faMobile} size="sm" />{" "}
                          <Text as="i" textStyle={"pbold"}>
                            80% of users abandon orders due to complex
                            modification systems
                          </Text>
                          <UnorderedList textStyle={"p"} pb={4} pl={4}>
                            <ListItem>
                              {" "}
                              Users struggle with current platforms' limited
                              customization options
                            </ListItem>
                            <ListItem>
                              Special requests are often mishandled or
                              overlooked
                            </ListItem>
                            <ListItem>
                              Lack of clear confirmation for modifications
                            </ListItem>
                          </UnorderedList>
                        </ListItem>

                        <ListItem>
                          <FontAwesomeIcon icon={faSackDollar} size="sm" />{" "}
                          <Text as="i" textStyle={"pbold"}>
                            73% of users prefer ordering directly from
                            restaurants{" "}
                          </Text>
                          <UnorderedList textStyle={"p"} pb={4} pl={4}>
                            <ListItem>
                              {" "}
                              High delivery platform fees are a major concern
                            </ListItem>
                            <ListItem>
                              Users want to support restaurants directly
                            </ListItem>
                            <ListItem>
                              Quality assurance is higher with direct ordering
                            </ListItem>
                          </UnorderedList>
                        </ListItem>

                        <ListItem>
                          <FontAwesomeIcon icon={faClock} size="sm" />{" "}
                          <Text as="i" textStyle={"pbold"}>
                            65% value real-time order tracking{" "}
                          </Text>
                          <UnorderedList textStyle={"p"} pb={4} pl={4}>
                            <ListItem>
                              {" "}
                              Current platforms provide limited status updates
                            </ListItem>
                            <ListItem>
                              Users want accurate preparation time estimates
                            </ListItem>
                            <ListItem>
                              Clear communication about delays is essential
                            </ListItem>
                          </UnorderedList>
                        </ListItem>
                      </UnorderedList>
                    </GridItem>
                  </Grid>
                </VStack>
              </Box>

              {/* Key Findings  Close*/}
              <Box px={12}>
                <VStack alignItems="start" pt={12} color={'gray.600'}>
                  <Text
                    as="p"
                    textStyle={"pbold"}
                    color="semantic.text.primary"
                    textTransform={"uppercase"}
                  >
                    competitive analysis
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    To understand the current market landscape, I analyzed both
                    direct competitors (premium restaurant apps) and indirect
                    competitors (food delivery platforms). The analysis focused
                    on user experience, feature sets, and business models to
                    identify opportunities for differentiation.
                  </Text>
                  <CompetitiveAnalysis competitors={competitors} />
                  <Text as="p" textStyle={"pbold"} textTransform={"capitalize"}>
                    market opportunity
                  </Text>
                  <Flex gap={6} alignItems="center">
                    <Image src={market} alt="market illustration" w={"100px"} />
                    <Box textStyle={"p"} display="flex" alignItems="center">
                      <Text as="p" textStyle="p">
                        Based on this analysis, there's a clear opportunity to
                        combine premium restaurant quality with the technical
                        convenience of delivery platforms, while eliminating
                        high fees and maintaining food quality.
                      </Text>
                    </Box>
                  </Flex>

                  <VStack alignItems="start" pt={4}>
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                    >
                      user personas
                    </Text>

                    <Text as="p" textStyle="p" pb={4}>
                      Based on user interviews and survey data, I developed two
                      distinct personas representing our core user groups. These
                      personas helped guide design decisions and feature
                      prioritization throughout the project.
                    </Text>
                    <PersonasSection personas={personas} />
                  </VStack>
                </VStack>
              </Box>
              <Box px={12}>
                <VStack alignItems="start" pt={12}>
                  <Text
                    as="p"
                    textStyle={"pbold"}
                    color="semantic.text.primary"
                    textTransform={"uppercase"}
                  >
                    Journey Map
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    Mapping the current ordering experience to identify pain
                    points and opportunities for improvement.
                  </Text>
                  <JourneyMap />
                </VStack>
              </Box>
            </Box>
          </section>

          {/* SECOND SECTION PLANNING CLOSE*/}
          <Divider variant="section" />

          {/* THIRD SECTION DATA COLLECTION OPEN*/}
          <section>
            <Box id="starting">
              <Box px={12}>
                <DividerSection>Phase 2 </DividerSection>
                <VStack alignItems="start" pt={12} color="gray.600">
                  <Text
                    textStyle="h2"
                    color="semantic.text.primary"
                    textTransform={"capitalize"}
                  >
                    starting the design
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    After conducting user research and identifying key
                    opportunities, I began the design process with paper
                    wireframes. This phase focused on rapidly exploring
                    different concepts and layouts before moving into digital
                    wireframes and prototypes. The design process included:
                  </Text>

                  {/* paper */}
                  <VStack alignItems="start">
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                    >
                      paper wireframes
                    </Text>
                    <Text as="p" textStyle="p" pb={4}>
                      Using the Crazy 8 method, I explored different approaches
                      to the main ordering interface. After sketching five
                      variations, I refined the most promising concept that best
                      addressed user needs and business goals.
                    </Text>
                    <PaperWireframes />
                    <Box
                      backgroundColor={"semantic.background.secondary"}
                      w={"100%"}
                      p={12}
                      boxShadow={"md"}
                    >
                      <VStack>
                        <Box display="flex" justifyContent={"center"}>
                          <Image
                            src={decisionImage}
                            alt="market illustration"
                            w={"100px"}
                          />
                        </Box>

                        <Text
                          as="p"
                          textStyle={"pbold"}
                          textTransform={"capitalize"}
                        >
                          Design decisions
                        </Text>
                        <Text as="p" textStyle="p">
                          After exploring multiple layouts, I selected and
                          refined the most effective design that prioritized
                          easy location selection and clear menu navigation.
                          This approach best addressed our users' need for quick
                          and efficient ordering.
                        </Text>
                      </VStack>
                    </Box>
                  </VStack>

                  <VStack alignItems="start" pt={4}>
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                    >
                      Digital wireframes
                    </Text>
                    <Text as="p" textStyle="p" pb={4}>
                      Taking the refined paper concepts into Figma, I created
                      detailed digital wireframes to establish clear user flows
                      and interface hierarchy. These wireframes focused on
                      implementing key features identified during user research
                      while maintaining simplicity and usability.
                    </Text>
                    <DigitalWireframes digital={digitalWireframes} />
                    <Box
                      backgroundColor={"semantic.background.secondary"}
                      w={"100%"}
                      p={12}
                      boxShadow={"md"}
                    >
                      <VStack>
                        <Box display="flex" justifyContent={"center"}>
                          <Image
                            src={evolutiionImage}
                            alt="evolution iamage"
                            w={"100px"}
                          />
                        </Box>

                        <Text
                          as="p"
                          textStyle={"pbold"}
                          textTransform={"capitalize"}
                        >
                          Design evolution
                        </Text>
                        <Text as="p" textStyle="p">
                          The digital wireframes expanded upon the paper
                          concepts, adding detailed interactions and refined
                          user flows. Key improvements included enhanced
                          location filtering, streamlined customization options,
                          and clearer order tracking visualization.
                        </Text>
                      </VStack>
                    </Box>
                  </VStack>

                  <VStack alignItems="start" pt={4}>
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                    >
                      Low-fidelity prototype
                    </Text>
                    <Text as="p" textStyle="p" pb={4}>
                      I created a clickable prototype in Figma to test the core
                      user flows and gather feedback on the basic interface
                      structure. This helped validate our design direction
                      before moving into high-fidelity designs.
                    </Text>
                    <LofiPrototype />
                    <Box
                      backgroundColor={"semantic.background.secondary"}
                      w={"100%"}
                      p={12}
                      boxShadow={"md"}
                    >
                      <VStack>
                        <Box display="flex" justifyContent={"center"}>
                          <Image
                            src={testingImage}
                            alt="evolution iamage"
                            w={"100px"}
                          />
                        </Box>

                        <Text
                          as="p"
                          textStyle={"pbold"}
                          textTransform={"capitalize"}
                        >
                          Prototype Testing
                        </Text>
                        <Text as="p" textStyle="p">
                          This low-fidelity prototype connected key screens to
                          create a clickable experience, allowing us to test the
                          core functionalities of location selection, menu
                          customization, and checkout process. User feedback
                          from these tests informed our next design iterations.
                        </Text>
                      </VStack>
                    </Box>
                  </VStack>

                  <VStack alignItems="start" py={4}>
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                    >
                      Usability study
                    </Text>
                    <Text as="p" textStyle="p" pb={4}>
                      Conducted two rounds of usability studies with 6
                      participants per round. The findings helped identify key
                      areas for improvement in the ordering experience.
                    </Text>
                    <UsabilityStudy usabilityData={usabilityData} />
                    <Box
                      backgroundColor={"semantic.background.secondary"}
                      w={"100%"}
                      p={12}
                      boxShadow={"md"}
                    >
                      <VStack>
                        <Box display="flex" justifyContent={"center"}>
                          <Image
                            src={keyImage}
                            alt="evolution iamage"
                            w={"100px"}
                          />
                        </Box>

                        <Text
                          as="p"
                          textStyle={"pbold"}
                          textTransform={"capitalize"}
                        >
                          Key Improvements
                        </Text>
                        <Text as="p" textStyle="p">
                          After implementing changes based on Round 1 feedback,
                          Round 2 testing showed significant improvements in
                          user navigation and task completion. The refined
                          interface led to better understanding of customization
                          options and a more confident checkout process.
                        </Text>
                      </VStack>
                    </Box>
                  </VStack>
                </VStack>
              </Box>
            </Box>
          </section>

          {/* THIRD SECTION DATA COLLECTION CLOSE*/}
          <Divider variant="section" />

          {/* FOURTH SECTION ANALYSIS OPEN*/}
          <section>
            <Box id="refining">
              <Box px={12}>
                <DividerSection>Phase 3 </DividerSection>
                <VStack alignItems="start" pt={12} color="gray.600" pb={12}>
                  <Text
                    textStyle="h2"
                    color="semantic.text.primary"
                    textTransform={"capitalize"}
                  >
                    refining the design
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    Through two rounds of usability testing and iteration, the
                    design evolved from a basic ordering system to an intuitive
                    dining experience that puts users' needs first.
                  </Text>

                  {/* Content Empathy map and affinity diagram */}

                  <VStack alignItems="stretch" py={4} >
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                      pb={4}
                    >
                      mockups
                    </Text>
                    <DesignRefinement />
                    <Box
                      backgroundColor={"semantic.background.secondary"}
                      w={"100%"}
                      p={12}
                      boxShadow={"md"}
                      
                    >
                      <VStack>
                        <Box display="flex" justifyContent={"center"}>
                          <Image
                            src={impactImage}
                            alt="evolution iamage"
                            w={"100px"}
                          />
                        </Box>

                        <Text
                          as="p"
                          textStyle={"pbold"}
                          textTransform={"capitalize"}
                        >
                          Design Impact
                        </Text>
                        <Text as="p" textStyle="p">
                          Through iterative design and user testing, I created
                          an intuitive ordering system that significantly
                          improved the user experience. The final design
                          successfully addresses key user pain points while
                          maintaining the premium feel of the steakhouse brand.
                        </Text>
                      </VStack>
                    </Box>
                  </VStack>
                </VStack>
              </Box>
            </Box>
          </section>

          {/* FOURTH SECTION ANALYSIS CLOSE*/}
          <Divider variant="section" />

          {/* FIFTH SECTION SYNTHESIS OPEN*/}
          <section>
            <Box id="going">
              <Box px={12}>
                <DividerSection>Phase 4 </DividerSection>
                <VStack alignItems="start" pt={12} pb={12} color="gray.600">
                  <Text
                    textStyle="h2"
                    color="semantic.text.primary"
                    textTransform="capitalize"
                  >
                    going forward
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    This project provided valuable insights about user-centered
                    design and the importance of iterative development in
                    creating impactful solutions.
                  </Text>

                  <VStack alignItems="start">
                    <Grid
                      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                      gap={8}
                      color="gray.600"
                    >
                      {/* Accessibility */}
                      <GridItem>
                        <Box
                          bg="semantic.background.secondary"
                          p={6}
                          height="100%"
                        >
                          <Box mb={4}>
                            <FontAwesomeIcon
                              icon={faUniversalAccess}
                              size="xl"
                            />
                          </Box>
                          <Text textStyle="pbold" mb={3}>
                            Accessibility Considerations
                          </Text>
                          <UnorderedList spacing={3}>
                            <ListItem gap={2}>
                              <Text textStyle="caption">
                                WCAG 2.1 compliant design system
                              </Text>
                            </ListItem>
                            <ListItem gap={2}>
                              <Text textStyle="caption">
                                Screen reader optimization
                              </Text>
                            </ListItem>
                            <ListItem gap={2}>
                              <Text textStyle="caption">
                                Keyboard navigation support
                              </Text>
                            </ListItem>
                          </UnorderedList>
                        </Box>
                      </GridItem>

                      {/* Key Learnings */}
                      <GridItem>
                        <Box
                          bg="semantic.background.secondary"
                          p={6}
                          height="100%"
                        >
                          <Box mb={4}>
                            <FontAwesomeIcon icon={faLightbulb} size="xl" />
                          </Box>
                          <Text textStyle="pbold" mb={3}>
                            Key Learnings
                          </Text>
                          <UnorderedList spacing={3}>
                            <ListItem gap={2}>
                              <Text textStyle="caption">
                                Balancing business requirements with user needs
                                creates the most effective solutions
                              </Text>
                            </ListItem>
                            <ListItem gap={2}>
                              <Text textStyle="caption">
                                Early user testing saves development time and
                                improves final outcomes
                              </Text>
                            </ListItem>
                            <ListItem gap={2}>
                              <Text textStyle="caption">
                                Designing for accessibility from the start
                                benefits all users
                              </Text>
                            </ListItem>
                          </UnorderedList>
                        </Box>
                      </GridItem>

                      {/* Next Steps */}
                      <GridItem>
                        <Box
                          bg="semantic.background.secondary"
                          p={6}
                          height="100%"
                        >
                          <Box mb={4}>
                            <FontAwesomeIcon icon={faForward} size="xl" />
                          </Box>
                          <Text textStyle="pbold" mb={3}>
                            Next Steps
                          </Text>
                          <UnorderedList spacing={3}>
                            <ListItem gap={2}>
                              <Text textStyle="caption">
                                Develop personalized recommendation system
                              </Text>
                            </ListItem>
                            <ListItem gap={2}>
                              <Text textStyle="caption">
                                Implement loyalty program features
                              </Text>
                            </ListItem>
                            <ListItem gap={2}>
                              <Text textStyle="caption">
                                Add multi-language support
                              </Text>
                            </ListItem>
                          </UnorderedList>
                        </Box>
                      </GridItem>
                    </Grid>
                  </VStack>

                  <VStack alignItems="start" py={12}>
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      textTransform={"uppercase"}
                      color="semantic.text.primary"
                    >
                      Takeaways
                    </Text>
                    <Text as="p" textStyle={"p"}>
                    This project transformed my approach to UX design in
                    several key ways:
                    </Text>
                    <VStack align="stretch" >
                       
                        <UnorderedList textStyle={"p"} pb={4}>
                          <ListItem  >
                            <Text >
                              <strong>Research Impact:</strong> Learned how
                              early user insights can significantly reduce
                              development time and improve final outcomes.
                            </Text>
                          </ListItem>
                          <ListItem  >
                            <Text >
                              <strong>Business Thinking:</strong> Developed
                              ability to balance user needs with business
                              requirements while maintaining design integrity.
                            </Text>
                          </ListItem>
                          <ListItem  >
                            <Text >
                              <strong>Leadership Growth:</strong> Gained
                              confidence in presenting design decisions and
                              leading stakeholder discussions.
                            </Text>
                          </ListItem>
                          <ListItem  >
                            <Text >
                              <strong>Technical Understanding:</strong> Deepened
                              knowledge of accessibility standards and
                              responsive design principles.
                            </Text>
                          </ListItem>
                        </UnorderedList>
                        <Text textStyle={'p'}>
                          These insights have fundamentally shaped my design
                          philosophy, emphasizing the importance of
                          user-centered design, iterative development, and
                          inclusive thinking in creating impactful digital
                          experiences.
                        </Text>
                      </VStack>
                    
                  </VStack>
                </VStack>
              </Box>
            </Box>
          </section>

          {/* FIFTH SECTION SYNTHESIS CLOSE*/}
          <Divider variant="section" />
          <Footer />
        

          {/* FIFTH SECTION REFLECTIONS CLOSE*/}
        </Box>
      </Grid>
      
    
    </>
  );
};

export default SteakHousePage;
