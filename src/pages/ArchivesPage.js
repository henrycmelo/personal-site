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
  List,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import competitors from "../assets/steakhouse/data/competitors";
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
  faClock,
  faForward,
  faUniversalAccess,
  faClockRotateLeft,
  faVial,
  faMagnifyingGlass,
  faBullseye,
  faChartBar,
  faUsers,
  faMousePointer,
} from "@fortawesome/free-solid-svg-icons";

import problemImage from "../assets/steakhouse/Question.svg";
import evolutiionImage from "../assets/steakhouse/evolution.svg";
import goalImage from "../assets/steakhouse/Checklist.svg";
import interview from "../assets/steakhouse/interview.svg";
import testingImage from "../assets/steakhouse/testing.svg";
import questionImage from "../assets/ciana_research/question.svg";
import processImage from "../assets/steakhouse/process.png";
import gantChart from "../assets/ciana_research/ganttChart.png";
import DividerSection from "../components/DividerSection";
import objectivesImage from "../assets/ciana_research/objectives.svg";
import researchQuestionsImage from "../assets/ciana_research/researchquestions.svg";
import keyImage from "../assets/steakhouse/key.svg";
import targetAudienceImage from "../assets/ciana_research/targetaudience.svg";
import methodologyImage from "../assets/ciana_research/methodology.svg";
import toolsImage from "../assets/ciana_research/tools.svg";
import recruitingImage from "../assets/ciana_research/recruiting.svg";
import market from "../assets/steakhouse/market.svg";
import interviewImage from "../assets/ciana_research/interview.svg";
import documentationImage from "../assets/ciana_research/documentation.svg";
import sayImage from "../assets/ciana_research/say.png";
import decisionImage from "../assets/steakhouse/Decision.svg";
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
import mockupBrief from "../assets/steakhouse/steakhousemockup.png";
import CompetitiveAnalysis from "../components/CompetitiveAnalysis";
import UserPersona from "../components/PersonasSection";
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
import Footer from "../components/Footer";
import profileImage from "../assets/archives/profile.svg";

const ArchivesPage = () => {
  const { sections } = useAlertContext();

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
  ];

  return (
    <>
      <ResponsiveMenu isOtherPage sections={sections} />

      <Box py={24} px={12}>
        <VStack color="semantic.text.primary" alignItems="start" pb={6}>
          <Text as="h1" textStyle={"h1"} textTransform="capitalize">
            redefining donor usability
          </Text>
          <Text as="h2" textStyle={"h2"} textTransform="capitalize">
            Usability Study & User Flow Optimization
          </Text>
          <Text as="i" textStyle={"p"} color="gray.600">
            How might we optimize the donation flow process to increase
            completion rates while providing a seamless user experience?
          </Text>
          <Text as="h3" textStyle={"caption"} color="gray.600">
            <Text
              as="span"
              textStyle="captionbold"
              color="semantic.text.primary"
              textTransform={"uppercase"}
            >
              organization -{" "}
            </Text>{" "}
            Smithsonian Archives of American Art
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
                  UX Researcher & Designer (Team of 4)
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
                  8-Weeks Design Sprint
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
                  Figma • FigJam • Zoom • UserTesting.com • Google Suite
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
                  User Research • Usability Testing • Information Architecture •
                  A/B Testing • Visual Design
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
                          The Smithsonian Archives of American Art, the nation's
                          largest visual arts archive, faced challenges with
                          their online donation process. Users were abandoning
                          donations due to complex flows and unclear information
                          architecture.
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
                          With nonprofit organizations losing potential support
                          due to poor digital experiences, creating an intuitive
                          donation process is crucial for sustaining cultural
                          institutions. This project demonstrates how improved
                          usability directly impacts donor engagement.
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
                          I led usability research and design optimization that
                          transformed the donation experience. Through
                          collaborative testing and iterative design, we
                          identified key friction points and implemented
                          solutions that improved the donation completion rate
                          by 35%, making it more intuitive for users to support
                          America's art heritage.
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
                          <FontAwesomeIcon icon={faChartLine} size="xl" />
                          <Text as="p" textStyle="h3">
                            35%
                          </Text>
                        </HStack>

                        <Text textStyle="p" textTransform="capitalize">
                          Increase in Donation Completion Rate
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
                          <FontAwesomeIcon icon={faClockRotateLeft} size="xl" />
                          <Text as="p" textStyle="h3">
                            40%
                          </Text>
                        </HStack>
                        <Text textStyle="p" textTransform="capitalize">
                          Decrease in Time to Complete Donation
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
                          <FontAwesomeIcon icon={faCheckCircle} size="xl" />
                          <Text as="p" textStyle="h3">
                            94%
                          </Text>
                        </HStack>
                        <Text textStyle="p" textTransform="capitalize">
                          Task Success Rate in Final Testing
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
                    <Box boxSize={"400px"} mx="auto">
                      <Image src={problemImage} alt="problem Illustration" />
                    </Box>
                    <Text textStyle="p">
                      Users were abandoning the donation process due to complex
                      navigation and unclear information architecture. Complex
                      form fields, unclear next steps, and lack of feedback
                      caused frustration, leading to lost donation opportunities
                      for the Archives.
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
                    <Box boxSize={"400px"} mx="auto">
                      <Image src={goalImage} />
                    </Box>
                    <Text textStyle="p">
                      Design an intuitive donation flow that simplifies the
                      giving process while building trust and confidence. Create
                      clear pathways and feedback mechanisms to help users
                      complete their donations successfully.
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
                        Call-to-Action Optimization
                      </Text>
                      <UnorderedList textStyle={"p"}>
                        <ListItem>
                          Redesign donation buttons for better visibility
                        </ListItem>
                        <ListItem>Implement clear action hierarchy</ListItem>
                      </UnorderedList>
                    </Box>

                    <Box pb={4}>
                      <Text
                        as="p"
                        textStyle={"pbold"}
                        textTransform={"capitalize"}
                      >
                        Hero Section Enhancement
                      </Text>
                      <UnorderedList textStyle={"p"}>
                        <ListItem>Design engaging hero banner layout</ListItem>
                        <ListItem>Clear value proposition messaging</ListItem>
                      </UnorderedList>
                    </Box>

                    <Box pb={4}>
                      <Text
                        as="p"
                        textStyle={"pbold"}
                        textTransform={"capitalize"}
                      >
                        Visual Hierarchy
                      </Text>
                      <UnorderedList textStyle={"p"}>
                        <ListItem>Establish clear content priority</ListItem>
                        <ListItem>
                          Improve scannable information structure
                        </ListItem>
                      </UnorderedList>
                    </Box>

                    <Box pb={4}>
                      <Text
                        as="p"
                        textStyle={"pbold"}
                        textTransform={"capitalize"}
                      >
                        Layout Refinement
                      </Text>
                      <UnorderedList textStyle={"p"}>
                        <ListItem>Restructure page organization</ListItem>
                        <ListItem>Optimize content flow</ListItem>
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
            <Box id="research">
              <Box px={12}>
                <DividerSection>Phase 1 </DividerSection>
                <VStack alignItems="start" pt={12} color="gray.600">
                  <Text
                    textStyle="h2"
                    color="semantic.text.primary"
                    textTransform={"capitalize"}
                  >
                    research
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    To understand donor behaviors and preferences, our research
                    focused on identifying key characteristics of potential
                    donors and creating effective testing criteria.
                  </Text>

                  {/* Items */}
                  <VStack alignItems="start">
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                    >
                      secondary research
                    </Text>
                    <Text as="p" textStyle="p" pb={4}>
                      Our research began with an extensive analysis of donor
                      behavior and digital giving trends. We examined reports
                      from leading nonprofit organizations, analyzed charitable
                      giving databases, and reviewed academic studies on
                      donation patterns. This comprehensive approach helped us
                      understand both donor demographics and digital behavior
                      patterns in the cultural sector.
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
                              <FontAwesomeIcon icon={faChartBar} size="xl" />
                            </Box>
                            <Text textStyle="pbold" mb={3}>
                              National Center for Charitable Statistics
                            </Text>
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
                          </Box>
                        </GridItem>

                        {/* Donor Demographics */}
                        <GridItem>
                          <Box
                            bg="semantic.background.secondary"
                            p={6}
                            height="100%"
                          >
                            <Box mb={4}>
                              <FontAwesomeIcon icon={faUsers} size="xl" />
                            </Box>
                            <Text textStyle="pbold" mb={3}>
                              Donor Demographics
                            </Text>
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
                          </Box>
                        </GridItem>

                        {/* Digital Behavior*/}
                        <GridItem>
                          <Box
                            bg="semantic.background.secondary"
                            p={6}
                            height="100%"
                          >
                            <Box mb={4}>
                              <FontAwesomeIcon
                                icon={faMousePointer}
                                size="xl"
                              />
                            </Box>
                            <Text textStyle="pbold" mb={3}>
                              Digital Behavior
                            </Text>
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
                                  25% higher donation completion on simplified
                                  forms
                                </Text>
                              </ListItem>
                            </UnorderedList>
                          </Box>
                        </GridItem>
                      </Grid>
                    </VStack>
                  </VStack>
                </VStack>
              </Box>

              {/* Key Findings */}

              {/* Key Findings  Close*/}
              <Box px={12}>
                <VStack
                  alignItems="start"
                  pt={12}
                  color={"gray.600"}
                  textStyle={"p"}
                >
                  <Text
                    as="p"
                    textStyle={"pbold"}
                    color="semantic.text.primary"
                    textTransform={"uppercase"}
                  >
                    donor profile creation
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    Based on this research, we identified our target donor:
                  </Text>
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    color="gray.600"
                    alignItems="flex-start"
                  >
                    {/* Left Column - Profile List */}
                    <GridItem>
                      <List spacing={3}>
                        <ListItem>
                          <Text>• Age: 35-65 years old</Text>
                        </ListItem>
                        <ListItem>
                          <Text>• Education: College degree+</Text>
                        </ListItem>
                        <ListItem>
                          <Text>• Income: $75,000+</Text>
                        </ListItem>
                        <ListItem>
                          <Text>• Tech-savvy professionals</Text>
                        </ListItem>
                        <ListItem>
                          <Text>• Regular charitable giving habits</Text>
                        </ListItem>
                        <ListItem>
                          <Text>• Interest in arts and culture</Text>
                        </ListItem>
                      </List>
                    </GridItem>

                    {/* Right Column - Illustration */}
                    <GridItem>
                      <Box
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        w="100%"
                      >
                        <Image
                          src={profileImage}
                          alt="Donor Profile Illustration"
                          maxW="500px"
                        />
                      </Box>
                    </GridItem>
                  </Grid>

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
                <VStack alignItems="start" pt={12} color="gray.600">
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

                  <VStack alignItems="start" py={4}>
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
                    <VStack align="stretch">
                      <UnorderedList textStyle={"p"} pb={4}>
                        <ListItem>
                          <Text>
                            <strong>Research Impact:</strong> Learned how early
                            user insights can significantly reduce development
                            time and improve final outcomes.
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text>
                            <strong>Business Thinking:</strong> Developed
                            ability to balance user needs with business
                            requirements while maintaining design integrity.
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text>
                            <strong>Leadership Growth:</strong> Gained
                            confidence in presenting design decisions and
                            leading stakeholder discussions.
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text>
                            <strong>Technical Understanding:</strong> Deepened
                            knowledge of accessibility standards and responsive
                            design principles.
                          </Text>
                        </ListItem>
                      </UnorderedList>
                      <Text textStyle={"p"}>
                        These insights have fundamentally shaped my design
                        philosophy, emphasizing the importance of user-centered
                        design, iterative development, and inclusive thinking in
                        creating impactful digital experiences.
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

export default ArchivesPage;
