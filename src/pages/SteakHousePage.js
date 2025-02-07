import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Image,
  Grid,
  GridItem,
  Divider,
  HStack,
  Button,
  ListItem,
  UnorderedList,
  Flex,
  Spinner,
  AspectRatio,
  List
  
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import competitors from '../assets/steakhouse/data/competitors';
import VerticalProgressBar from "../components/VerticalProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faCalendarCheck,
  faChartLine,
  faCheck,
  faCheckCircle,
  faDatabase,
  faFileAlt,
  faLightbulb,
  faListCheck,
  faPencilRuler,
  faPeopleGroup,
  faPuzzlePiece,
  faRocket,
  faUserGroup,
  faZap,
  faThumbsUp,
  faPhone,
  faMobile,
  faSackDollar,
  faClock
} from "@fortawesome/free-solid-svg-icons";

import problemImage from "../assets/steakhouse/Question.svg";
import goalImage from "../assets/steakhouse/Checklist.svg";
import interview from "../assets/steakhouse/interview.svg"
import questionImage from "../assets/ciana_research/question.svg";
import processImage from "../assets/steakhouse/process.png";
import gantChart from "../assets/ciana_research/ganttChart.png";
import DividerSection from "../components/DividerSection";
import objectivesImage from "../assets/ciana_research/objectives.svg";
import researchQuestionsImage from "../assets/ciana_research/researchquestions.svg";
import targetAudienceImage from "../assets/ciana_research/targetaudience.svg";
import methodologyImage from "../assets/ciana_research/methodology.svg";
import toolsImage from "../assets/ciana_research/tools.svg";
import recruitingImage from "../assets/ciana_research/recruiting.svg";
import market from "../assets/steakhouse/market.svg"
import interviewImage from "../assets/ciana_research/interview.svg";
import documentationImage from "../assets/ciana_research/documentation.svg";
import sayImage from "../assets/ciana_research/say.png";
import thinkImage from "../assets/ciana_research/think.png";
import feelImage from "../assets/ciana_research/feel.png";
import doesImage from "../assets/ciana_research/does.png";
import OverlayImage from "../components/OverlayImage";
import clarityImage from "../assets/ciana_research/positive_clarity.png";
import practicalImage from "../assets/ciana_research/positive_practical.png";
import childImage from "../assets/ciana_research/motivation_child.png";
import proactiveImage from "../assets/ciana_research/motivation_proactive.png";
import reinforcingImage from "../assets/ciana_research/motivation_reinforcing.png";
import schedulingImage from "../assets/ciana_research/frustration_scheduling.png";
import technicalImage from "../assets/ciana_research/frustration_scheduling.png";
import workshopImage from "../assets/ciana_research/frustration_workshop.png";
import recommendationScheduleImage from "../assets/ciana_research/recommendation_schedule.svg";
import recommendationContentImage from "../assets/ciana_research/recommendation_content.svg";
import recommendationTechnicalImage from "../assets/ciana_research/recommendation_technical.svg";
import recommendationKidsImage from "../assets/ciana_research/recomendation_kids.svg";
import cecLogo from "../assets/ciana_research/cecLogo.png";
import banner from "../assets/steakhouse/steakhousebanner.png";
import ResponsiveMenu from "../components/ResponsiveMenu";
import MuteButton from "../components/MuteButton";
import mockupBrief from "../assets/steakhouse/steakhousemockup.png"
import CompetitiveAnalysis from "../components/CompetitiveAnalysis";

const SteakHousePage = () => {
  const { sections } = useAlertContext();
  const [isLoading, setIsLoading] = useState(true);

  const reloadPrototype = () => {
    const iframe = document.getElementById("figma-iframe");
    if (iframe) {
      setIsLoading(true); // Show spinner while reloading
      iframe.src = iframe.src; // Reloads the iframe
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false); // Hide spinner once iframe is loaded
  };

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

          <Box w={{ base: "100%", md: "100%" }} overflow="hidden" h="300px">
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

        <Box overflowY="auto" height={"100%"} data-scroll-container="true">
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
                            id="figma-iframe"
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
                    <Box boxSize={"400px"}>
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
                    <Box boxSize={"400px"}>
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
                  templateColumns={{ base: "1fr", md: "1fr 1fr" }}
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
                    <Box display={"flex"} justifyContent={"center"}>
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
                    <HStack>
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
                    <Flex gap={6} flexDirection={{base:'column', lg:'row'}}>
                      <Image
                        src={interview}
                        alt="interview Illustration"
                        w={"300px"}
                      />
                      <UnorderedList
                        listStyleType={"none"}
                        textStyle={"p"}
                        pb={4}
                      >
                        <Text
                          as="p"
                          textStyle={"pbold"}
                          textTransform={"capitalize"}
                          pb={4}
                        >
                          Key findings
                        </Text>
                        <ListItem>
                          <FontAwesomeIcon icon={faMobile} size="sm" />{" "}
                          <Text as="i" textStyle={"pbold"}>
                            80% of users abandon orders due to complex
                            modification systems
                          </Text>
                          <UnorderedList textStyle={"p"} pb={4}>
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
                          <UnorderedList textStyle={"p"} pb={4}>
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
                          <UnorderedList textStyle={"p"} pb={4}>
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
                    </Flex>
                    <VStack alignItems="start">
                      <Text
                        as="p"
                        textStyle={"pbold"}
                        color="semantic.text.primary"
                        textTransform={"uppercase"}
                      >
                        competitive analysis
                      </Text>
                      <Text as="p" textStyle="p" pb={4}>
                      To understand the current market landscape, I analyzed both direct competitors (premium restaurant apps) and indirect competitors (food delivery platforms). The analysis focused on user experience, feature sets, and business models to identify opportunities for differentiation.
                      </Text>
                      <CompetitiveAnalysis competitors={competitors} />
                      <Text
                        as="p"
                        textStyle={"pbold"}
                        textTransform={"capitalize"}
                      >
                        market opportunity
                      </Text>
                      <Flex gap={6} alignItems="center" >
                      <Image src={market} alt="market illustration" w={"100px"} />
                      <Box textStyle={"p"} pb={4} display="flex" alignItems="center">
                      <Text as="p" textStyle="p" pb={4}>
                        Based on this analysis, there's a clear opportunity to
                        combine premium restaurant quality with the technical
                        convenience of delivery platforms, while eliminating
                        high fees and maintaining food quality.
                      </Text>
                      </Box>
                    </Flex>
                      
                    </VStack>
                    
                  </VStack>

                  <VStack alignItems="start">
                  <Text
                        as="p"
                        textStyle={"pbold"}
                        color="semantic.text.primary"
                        textTransform={"uppercase"}
                      >
                        personas
                      </Text>

                  </VStack>
                </VStack>
              </Box>
            </Box>
          </section>

          {/* SECOND SECTION PLANNING CLOSE*/}
          <Divider variant="section" />

          {/* THIRD SECTION DATA COLLECTION OPEN*/}
          <section>
            <Box id="datacollection">
              <Box px={12}>
                <DividerSection>Phase 2 </DividerSection>
                <VStack alignItems="start" pt={12} color="gray.600">
                  <Text textStyle="h2" color="semantic.text.primary">
                    Data Collection
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    This section outlines the approach used to gather
                    qualitative data from workshop participants, focusing on the
                    methods of participant recruitment, the interview process,
                    and the documentation of responses. The goal was to ensure a
                    comprehensive collection of feedback that could be analyzed
                    to improve future workshops.
                  </Text>
                  {/* Highlight */}
                  <Box
                    backgroundColor={"semantic.background.secondary"}
                    w={"100%"}
                    p={12}
                  >
                    <VStack alignItems="center">
                      <Text
                        as="i"
                        textStyle="h3"
                        color={"semantic.text.primary"}
                      >
                        “I think I learned how my son should be using a tablet.”
                      </Text>
                      <Text as="p" textStyle="p">
                        - Workshop atendee
                      </Text>
                    </VStack>
                  </Box>

                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={6}
                    textAlign={"center"}
                    pt={4}
                  >
                    <GridItem>
                      <Box pb={4}>
                        <Text
                          textStyle="pbold"
                          textAlign={"center"}
                          color="semantic.text.primary"
                          textTransform={"uppercase"}
                        >
                          Recruiting
                        </Text>
                        <Box boxSize={"1fr"}>
                          <Image src={recruitingImage} />
                        </Box>
                        <Text textStyle="p" textAlign={"left"}>
                          Participants were recruited through phone calls and
                          emails, which allowed for personalized outreach and
                          provided an opportunity to address any questions about
                          the study. Recruitment was aimed at parents who
                          attended the digital safety workshops, with an
                          emphasis on flexibility to accommodate their
                          schedules.
                        </Text>
                      </Box>
                    </GridItem>

                    <GridItem>
                      <Box pb={4}>
                        <Text
                          textStyle="pbold"
                          textAlign={"center"}
                          color="semantic.text.primary"
                          textTransform={"uppercase"}
                        >
                          Interviews
                        </Text>
                        <Box boxSize={"1fr"}>
                          <Image src={interviewImage} />
                        </Box>
                        <Text textStyle="p" textAlign={"left"}>
                          Structured post-workshop interviews were conducted
                          with open-ended questions to gather feedback on
                          participants' experiences, motivations, and
                          suggestions. Some participants were initially
                          hesitant, fearing they might be quizzed, but were
                          reassured that the goal was to collect feedback, not
                          assess their knowledge. The interviews were recorded
                          (with consent) and transcribed for accurate analysis
                          to ensure detailed documentation for synthesis.
                        </Text>
                      </Box>
                    </GridItem>

                    <GridItem>
                      <Box pb={4}>
                        <Text
                          textStyle="pbold"
                          textAlign={"center"}
                          color="semantic.text.primary"
                          textTransform={"uppercase"}
                        >
                          Documentation
                        </Text>
                        <Box boxSize={"1fr"}>
                          <Image src={documentationImage} />
                        </Box>
                        <Text textStyle="p" textAlign={"left"}>
                          The interviews were recorded (with participant
                          consent) and later transcribed for accurate analysis.
                          This documentation ensured that every piece of
                          feedback was captured in detail and could be
                          referenced during the synthesis and analysis phases.
                        </Text>
                      </Box>
                    </GridItem>
                  </Grid>
                </VStack>
              </Box>
            </Box>
          </section>

          {/* THIRD SECTION DATA COLLECTION CLOSE*/}
          <Divider variant="section" />

          {/* FOURTH SECTION ANALYSIS OPEN*/}
          <section>
            <Box id="analysis">
              <Box px={12}>
                <DividerSection>Phase 3 </DividerSection>
                <VStack alignItems="start" pt={12} color="gray.600">
                  <Text textStyle="h2" color="semantic.text.primary">
                    Analysis
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    The analysis phase utilized three complementary methods to
                    synthesize the qualitative interview data. Empathy mapping
                    visualized participant behaviors, quotes, thoughts, and
                    feelings, while affinity diagramming grouped related
                    insights to reveal patterns. These methods led to the
                    identification of key themes around motivations, positive
                    experiences, and improvement areas.
                  </Text>

                  {/* Content Empathy map and affinity diagram */}

                  <VStack alignItems="start">
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                    >
                      Empathy Map
                    </Text>
                    <Text as="p" textStyle={"p"}>
                      The empathy map visualized participant experiences across
                      four dimensions: what parents said{" "}
                      <Text as="i">
                        {" "}
                        ("I wanted to learn more about parental controls")
                      </Text>
                      , thought (the workshop should be longer), did (attended
                      workshops to improve her knowledge), and felt (frustated
                      because there were a few things hard to understand). This
                      mapping revealed the complex interplay between parents'
                      explicit statements and their underlying needs around
                      digital safety.
                    </Text>
                    <Grid
                      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    >
                      <GridItem>
                        <Box pb={4}>
                          <Text
                            textStyle="pbold"
                            textAlign={"center"}
                            textTransform={"capitalize"}
                          >
                            Say
                          </Text>
                          <OverlayImage src={sayImage} alt="empathy map say" />
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box pb={4}>
                          <Text
                            textStyle="pbold"
                            textAlign={"center"}
                            textTransform={"capitalize"}
                          >
                            Think
                          </Text>
                          <OverlayImage
                            src={thinkImage}
                            alt="empathy map think"
                          />
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box pb={4}>
                          <Text
                            textStyle="pbold"
                            textAlign={"center"}
                            textTransform={"capitalize"}
                          >
                            Feel
                          </Text>

                          <OverlayImage
                            src={feelImage}
                            alt="empathy map feel"
                          />
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box pb={4}>
                          <Text
                            textStyle="pbold"
                            textAlign={"center"}
                            textTransform={"capitalize"}
                          >
                            Does
                          </Text>
                          <OverlayImage
                            isGrayImage
                            src={doesImage}
                            alt="empathy map does"
                          />
                        </Box>
                      </GridItem>
                    </Grid>
                  </VStack>

                  <VStack alignItems="start">
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      textTransform={"uppercase"}
                      color="semantic.text.primary"
                    >
                      Affinity Diagram & Theme Identification
                    </Text>
                    <Text as="p" textStyle={"p"}>
                      Through our affinity diagramming process, I organized the
                      sticky notes from the empathy map into three main
                      categories: Positive Feedback, Motivations/Goals, and
                      Frustrations. Within each category, key themes emerged.
                      Below are the themes identified with supporting
                      participant quotes.
                    </Text>

                    <Grid
                      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                      gap={6}
                      pt={6}
                    >
                      <GridItem>
                        <Box pb={4}>
                          <Text
                            textStyle="pbold"
                            textAlign="center"
                            textTransform={"capitalize"}
                          >
                            Clarity & impact
                          </Text>
                          <OverlayImage
                            src={clarityImage}
                            alt="clarity Theme"
                          />
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box pb={4}>
                          <Text
                            textStyle="pbold"
                            textAlign="center"
                            textTransform={"capitalize"}
                          >
                            practical insights & learning outcomes
                          </Text>
                          <OverlayImage
                            src={practicalImage}
                            alt="practical Theme"
                          />
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box pb={4}>
                          <Text
                            textStyle="pbold"
                            textAlign="center"
                            textTransform={"capitalize"}
                          >
                            commitment to child development & safety
                          </Text>
                          <OverlayImage src={childImage} alt="child Theme" />
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box pb={4}>
                          <Text
                            textStyle="pbold"
                            textAlign="center"
                            textTransform={"capitalize"}
                          >
                            proactive digital parenting
                          </Text>
                          <OverlayImage
                            src={proactiveImage}
                            alt="proactive Theme"
                          />
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box pb={4}>
                          <Text
                            textStyle="pbold"
                            textAlign="center"
                            textTransform={"capitalize"}
                          >
                            reinforcing digital safety for kids
                          </Text>
                          <OverlayImage
                            src={reinforcingImage}
                            alt="reinforcing Theme"
                          />
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box pb={4}>
                          <Text
                            textStyle="pbold"
                            textAlign="center"
                            textTransform={"capitalize"}
                          >
                            scheduling & accessibility
                          </Text>
                          <OverlayImage
                            src={schedulingImage}
                            alt="scheduling Theme"
                          />
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box pb={4}>
                          <Text
                            textStyle="pbold"
                            textAlign="center"
                            textTransform={"capitalize"}
                          >
                            technical difficulties & setup
                          </Text>
                          <OverlayImage
                            src={technicalImage}
                            alt="scheduling Theme"
                          />
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box pb={4}>
                          <Text
                            textStyle="pbold"
                            textAlign="center"
                            textTransform={"capitalize"}
                          >
                            workshop delivery & content
                          </Text>
                          <OverlayImage
                            src={workshopImage}
                            alt="scheduling Theme"
                          />
                        </Box>
                      </GridItem>
                    </Grid>
                  </VStack>
                </VStack>
              </Box>
            </Box>
          </section>

          {/* FOURTH SECTION ANALYSIS CLOSE*/}
          <Divider variant="section" />

          {/* FIFTH SECTION SYNTHESIS OPEN*/}
          <section>
            <Box id="synthesis">
              <Box px={12}>
                <DividerSection>Phase 4 </DividerSection>
                <VStack alignItems="start" pt={12} pb={12} color="gray.600">
                  <Text textStyle="h2" color="semantic.text.primary">
                    Synthesis
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    Through my analysis, clear patterns emerged leading to
                    actionable recommendations for improving the digital safety
                    workshops. Below are the fourt key recommendations based on
                    participant feedback and identified themes, followed by our
                    conclusion about the workshop's effectiveness and future
                    direction.
                  </Text>

                  <VStack alignItems="start">
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                    >
                      Recommendations
                    </Text>

                    <Grid
                      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                      gap={6}
                      pt={12}
                      px={12}
                    >
                      <GridItem>
                        <Box pb={4}>
                          <Text
                            textStyle="pbold"
                            textAlign={"center"}
                            textTransform={"capitalize"}
                          >
                            Flexible scheduling
                          </Text>
                          <Box boxSize={"200px"} margin="0 auto">
                            <Image
                              src={recommendationScheduleImage}
                              alt="calendar Illustration"
                            />
                          </Box>
                          <Text textStyle="p">
                            Offer workshops at various times to accommodate
                            different schedules. Consider recording sessions for
                            on-demand access.
                          </Text>
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box pb={4}>
                          <Text
                            textStyle="pbold"
                            textAlign={"center"}
                            textTransform={"capitalize"}
                          >
                            Enhanced technical support
                          </Text>
                          <Box boxSize={"200px"} margin="0 auto">
                            <Image
                              src={recommendationTechnicalImage}
                              alt="laptop Illustration"
                            />
                          </Box>
                          <Text textStyle="p">
                            Provide follow-up materials and technical assistance
                            to help participants apply what they have learned.
                            Ensure all promised materials are sent right away.
                          </Text>
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box pb={4}>
                          <Text
                            textStyle="pbold"
                            textAlign={"center"}
                            textTransform={"capitalize"}
                          >
                            Improved content delivery
                          </Text>
                          <Box boxSize={"200px"} margin="0 auto">
                            <Image
                              src={recommendationContentImage}
                              alt="laptop Illustration"
                            />
                          </Box>
                          <Text textStyle="p">
                            Incorporate more visual aids and interactive
                            elements to engage participants and clarify complex
                            topics. Consider live demonstrations for technical
                            setups such as parental controls on their
                            phone/tablet/laptop.
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem>
                        <Box pb={4}>
                          <Text
                            textStyle="pbold"
                            textAlign={"center"}
                            textTransform={"capitalize"}
                          >
                            Target workshop for children
                          </Text>
                          <Box boxSize={"200px"} margin="0 auto">
                            <Image
                              src={recommendationKidsImage}
                              alt="laptop Illustration"
                            />
                          </Box>
                          <Text textStyle="p">
                            Develop sessions specifically for children to
                            reinforce the concepts taught to parents, ensuring
                            the education about digital safety is for both
                            children and their parents.
                          </Text>
                        </Box>
                      </GridItem>
                    </Grid>
                  </VStack>

                  <VStack alignItems="start">
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      textTransform={"uppercase"}
                      color="semantic.text.primary"
                    >
                      Conclusion
                    </Text>
                    <Text as="p" textStyle={"p"}>
                      The qualitative analysis of participant feedback
                      highlights both the strengths and areas for improvements
                      in our digital safety workshops. By addressing the
                      identified frustrations and implementing the proposed
                      recommendations, we can improve the overall effectiveness
                      and satisfaction of our workshops, ultimately providing
                      better support for parents and their children in
                      navigating digital safety.
                    </Text>
                  </VStack>
                </VStack>
              </Box>
            </Box>
          </section>

          {/* FIFTH SECTION SYNTHESIS CLOSE*/}
          <Divider variant="section" />
          {/* SIXTH SECTION REFLECTIONS OPEN*/}
          <section>
            <Box id="reflection">
              <Box px={12}>
                <DividerSection>Phase 4 </DividerSection>
                <VStack alignItems="start" pt={12} color="gray.600">
                  <Text textStyle="h2" color="semantic.text.primary">
                    Takeaways
                  </Text>
                  <Text as="p" textStyle={"p"}>
                    I feel fortunate to have had the opportunity to work on
                    digital safety workshops that directly impact parents in the
                    Corona, Queens community. Through this experience, I learned
                    several valuable lessons:
                  </Text>

                  <UnorderedList textStyle={"p"} pb={4}>
                    <ListItem>
                      <Text as="p" textStyle={"p"}>
                        <Text as="span" textStyle="pbold">
                          Qualitative insights reveal deeper understanding -{" "}
                        </Text>
                        Our shift from quantitative surveys to qualitative
                        interviews proved crucial in uncovering the real needs
                        and challenges of parents. This taught me that sometimes
                        the most valuable insights come from listening to
                        personal stories rather than just collecting metrics.
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text as="p" textStyle={"p"}>
                        <Text as="span" textStyle="pbold">
                          Flexibility in research methods is key -{" "}
                        </Text>
                        Learning to adapt and choose the right research method
                        for the context was essential. Post-workshop interviews
                        provided richer insights into parent experiences than
                        surveys would have, showing me how different research
                        approaches can lead to different types of understanding.
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text as="p" textStyle={"p"}>
                        <Text as="span" textStyle="pbold">
                          Community needs drive research direction -{" "}
                        </Text>
                        The research revealed how community context shapes
                        program effectiveness. Understanding parents' scheduling
                        constraints, technical challenges, and cultural
                        perspectives helped develop more relevant and accessible
                        workshop recommendations.
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text as="p" textStyle={"p"}>
                        <Text as="span" textStyle="pbold">
                          Research synthesis tools enhance understanding -{" "}
                        </Text>
                        Using empathy maps and affinity diagrams taught me how
                        to transform individual feedback into actionable
                        insights. These tools helped bridge the gap between raw
                        data and meaningful recommendations.
                      </Text>
                    </ListItem>
                  </UnorderedList>
                </VStack>
              </Box>
            </Box>
          </section>

          {/* FIFTH SECTION REFLECTIONS CLOSE*/}
        </Box>
      </Grid>
    </>
  );
};

export default SteakHousePage;
