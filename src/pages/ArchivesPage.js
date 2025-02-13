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
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import VerticalProgressBar from "../components/VerticalProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faChartLine,
  faCheckCircle,
  faFileAlt,
  faLightbulb,
  faPuzzlePiece,
  faClockRotateLeft,
  faVial,
  faMagnifyingGlass,
  faBullseye,
  faChartBar,
  faUsers,
  faMousePointer,
  faHandHoldingUsd,
  faCreditCard,
  faCompass,
  faLocationDot,
  faWandMagicSparkles,
  faLayerGroup,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";

import problemImage from "../assets/archives/problem.svg";
import goalImage from "../assets/archives/goal.svg";
import recruitImage from "../assets/archives/recruit.svg";
import processImage from "../assets/archives/process.png";
import DividerSection from "../components/DividerSection";
import OverlayImage from "../components/OverlayImage";
import ResponsiveMenu from "../components/ResponsiveMenu";
import Footer from "../components/Footer";
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
import finalPresentationImage from "../assets/archives/finalpresentation.png"
import heroMockup from "../assets/archives/buttonsafter.png"
import heroMockup2 from "../assets/archives/hero.png"
import banner from "../assets/archives/banner.png"

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
    { id: "second", label: "Usability testing final round", icon: faVial },
    { id: "takeaway", label: "Reflection & Takeaways", icon: faLightbulb },
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

          <Box w={{ base: "100%", md: "100%" }} overflow="hidden" maxH="300px" >
            <Image
              src={banner}
              alt="banner"
              objectFit="contain"
   
              
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
                          <a
                            href="https://www.aaa.si.edu/support"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Text
                              as={"span"}
                
                              decoration={"underline"}
                              pb={4}
                            >
                              The Smithsonian Archives of American Art {""}
                            </Text>
                          </a>
                          , the nation's
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
                        <Box maxW={"650px"}>
                          <Image
                            src={heroMockup}
                            alt="mockup Archives of American Art"
                          />
                        </Box>
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
                    <Box maxW={'300px'} mx="auto">
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
                    <Box maxW={'300px'} mx="auto">
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
                        Figure 1: Usability Study Process
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
                        src={heroMockup2}
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

          {/* SECOND SECTION RESEARCH OPEN*/}
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

              <Box p={12}>
                <Grid
                  templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                  gap={6}
                  color="gray.600"
                >
                  <GridItem>
                    <Box
                      pb={4}
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text
                        textStyle="pbold"
                        color="semantic.text.primary"
                        textTransform={"uppercase"}
                      >
                        donor profile creation
                      </Text>
                      <Box maxW={'300px'} mx="auto">
                        <Image src={profileImage} />
                      </Box>

                      <Text as="p" textStyle="pbold">
                        Based on this research, we identified our target donor:
                      </Text>
                      <UnorderedList
                        spacing={3}
                        textStyle={"p"}
                        alignSelf="flex-start"
                        pb={4}
                      >
                        <ListItem>Age: 35-65 years old</ListItem>
                        <ListItem>Education: College degree+</ListItem>
                        <ListItem>Income: $75,000+</ListItem>
                        <ListItem>Tech-savvy professionals</ListItem>
                        <ListItem>Regular charitable giving habits</ListItem>
                        <ListItem>Interest in arts and culture</ListItem>
                      </UnorderedList>
                    </Box>
                  </GridItem>

                  {/* Text Column 2 */}
                  <GridItem>
                    <Box
                      pb={4}
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text
                        textStyle="pbold"
                        textAlign={"center"}
                        color="semantic.text.primary"
                        textTransform={"uppercase"}
                      >
                        Screening & Recruitment
                      </Text>
                      <Box maxW={'300px'} mx="auto">
                        <Image src={recruitImage} />
                      </Box>
                      <Text as="p" textStyle="pbold">
                        Created screening criteria to match identified donor
                        profile:
                      </Text>
                      <UnorderedList
                        spacing={3}
                        textStyle="p"
                        alignSelf="flex-start"
                        pb={4}
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
                        <ListItem>Mix of first-time and repeat donors</ListItem>
                      </UnorderedList>
                    </Box>
                  </GridItem>
                </Grid>

                <VStack alignItems="start">
                  <Text
                    as="p"
                    textStyle={"pbold"}
                    color="semantic.text.primary"
                    textTransform={"uppercase"}
                  >
                    Screening Process Development
                  </Text>
                  <Text as="p" textStyle="p">
                    Developed a comprehensive screening questionnaire to
                    identify participants who matched our target donor profile.
                    The questionnaire was structured in sections to ensure
                    thorough participant screening:
                  </Text>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScYzFCW2I8QsShj7lbau4GReLowXljwmnw0weZAC1z3W_x8xA/viewform?usp=header"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text
                      as={"p"}
                      textStyle={"p"}
                      decoration={"underline"}
                      pb={4}
                    >
                      (View Screening Form)
                    </Text>
                  </a>
                  <UnorderedList spacing={4}>
                    <ListItem>
                      <Text textStyle="p">
                        {" "}
                        <Text as="span" textStyle="pbold">
                          Demographics Validation:{" "}
                        </Text>
                        Age range, education level, and income brackets to match
                        donor profile.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text textStyle="p">
                        {" "}
                        <Text as="span" textStyle="pbold">
                          Donation Behavior:{" "}
                        </Text>{" "}
                        Previous online donation experience, frequency, and
                        typical donation amounts.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text textStyle="p">
                        {" "}
                        <Text as="span" textStyle="pbold">
                          Arts Engagement:{" "}
                        </Text>
                        Interest in arts and culture, frequency of museum
                        visits, and engagement with cultural institutions.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text textStyle="p">
                        {" "}
                        <Text as="span" textStyle="pbold">
                          Technical Proficiency:{" "}
                        </Text>
                        Comfort level with online transactions and digital
                        platforms.
                      </Text>
                    </ListItem>
                  </UnorderedList>

                  <Text
                    as="p"
                    textStyle={"pbold"}
                    color="semantic.text.primary"
                    textTransform={"uppercase"}
                    pt={12}
                  >
                    Recruitment platform
                  </Text>
                  <Flex gap={6} alignItems="center">
                    <OverlayImage
                      src={userTestingLogo}
                      alt="market illustration"
                      maxW={"100px"}
                    />
                    <Box textStyle={"p"} display="flex" alignItems="center">
                      <Text as="p" textStyle="p">
                        We leveraged UserTesting.com's professional testing
                        panel to recruit qualified participants who matched our
                        target donor profile. The platform provided robust
                        screening capabilities and automated scheduling tools.
                      </Text>
                    </Box>
                  </Flex>
                </VStack>
              </Box>
            </Box>
          </section>

          {/* SECOND SECTION PLANNING CLOSE*/}
          <Divider variant="section" />

          {/* THIRD SECTION DATA COLLECTION OPEN*/}
          <section>
            <Box id="usability">
              <Box px={12}>
                <DividerSection>Phase 2 </DividerSection>
                <VStack alignItems="start" pt={12} color="gray.600">
                  <Text
                    textStyle="h2"
                    color="semantic.text.primary"
                    textTransform={"capitalize"}
                  >
                    usability testing
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    Conducted remote moderated usability testing sessions to
                    evaluate the donation flow and identify opportunities for
                    improvement. Each session was recorded for detailed
                    analysis.
                  </Text>
                </VStack>
              </Box>
              <Box
                backgroundColor={"semantic.background.secondary"}
                w={"100%"}
                p={12}
                color={"gray.600"}
              >
                <VStack alignItems="center">
                  <Text
                    textStyle="pbold"
                    textAlign={"center"}
                    textTransform={"uppercase"}
                    color="semantic.text.primary"
                  >
                    Remote usability testing session via UserTesting.com
                  </Text>

                  <Grid
                    templateColumns={{ base: "1fr", md: "3fr 2fr" }}
                    gap={8}
                    alignItems={"center"}
                  >
                    {/* Testing Details */}
                    <GridItem>
                      <Box p={6}>
                        <UnorderedList spacing={4}>
                          <ListItem>
                            <Text textStyle="p">
                              <Text as="span" textStyle="pbold">
                                Participants:{" "}
                              </Text>
                              8 qualified donors matching target user profile
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text textStyle="p">
                              <Text as="span" textStyle="pbold">
                                Session Format:{" "}
                              </Text>
                              30-minute remote moderated sessions via
                              UserTesting.com
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text textStyle="p">
                              <Text as="span" textStyle="pbold">
                                Testing Scope:{" "}
                              </Text>
                              End-to-end donation flow from homepage to
                              confirmation
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text textStyle="p">
                              <Text as="span" textStyle="pbold">
                                Data Collection:{" "}
                              </Text>
                              Session recordings, think-aloud feedback, task
                              completion metrics
                            </Text>
                          </ListItem>
                        </UnorderedList>
                      </Box>
                    </GridItem>

                    {/* Supporting Image */}
                    <GridItem>
                      <Box height="100%">
                        <Image
                          src={userTestingImage}
                          alt="Usability Testing Session"
                          width="100%"
                          height="auto"
                          objectFit="cover"
                        />
                      </Box>
                    </GridItem>
                  </Grid>
                </VStack>
              </Box>

              <Box px={12}>
                <VStack alignItems="start" py={12} color="gray.600">
                  <Text
                    as="p"
                    textStyle={"pbold"}
                    color="semantic.text.primary"
                    textTransform={"uppercase"}
                  >
                    tasks scenarios
                  </Text>
                  <Text as="p" textStyle="p">
                    Participants were asked to complete three core tasks that
                    represent key user journeys in the donation process:
                  </Text>
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={8}
                    color="gray.600"
                  >
                    {/* Task 1 */}
                    <GridItem>
                      <Box
                        bg="semantic.background.secondary"
                        p={6}
                        height="100%"
                      >
                        <Box mb={4}>
                          <FontAwesomeIcon icon={faCompass} size="xl" />
                        </Box>
                        <Text textStyle="pbold" mb={3}>
                          Task 1: Homepage Donation
                        </Text>
                        <UnorderedList spacing={3}>
                          <ListItem>
                            <Text textStyle="caption">
                              "Starting from the homepage, find and begin the
                              donation process."
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text textStyle="caption">
                              Locate donation button
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text textStyle="caption">
                              Navigate to donation form
                            </Text>
                          </ListItem>
                        </UnorderedList>
                      </Box>
                    </GridItem>

                    {/* Task 2 */}
                    <GridItem>
                      <Box
                        bg="semantic.background.secondary"
                        p={6}
                        height="100%"
                      >
                        <Box mb={4}>
                          <FontAwesomeIcon icon={faHandHoldingUsd} size="xl" />
                        </Box>
                        <Text textStyle="pbold" mb={3}>
                          Task 2: Donation Amount
                        </Text>
                        <UnorderedList spacing={3}>
                          <ListItem>
                            <Text textStyle="caption">
                              "Select a donation amount and any additional
                              options."
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text textStyle="caption">
                              Choose donation amount
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text textStyle="caption">
                              Review giving options
                            </Text>
                          </ListItem>
                        </UnorderedList>
                      </Box>
                    </GridItem>

                    {/* Task 3 */}
                    <GridItem>
                      <Box
                        bg="semantic.background.secondary"
                        p={6}
                        height="100%"
                      >
                        <Box mb={4}>
                          <FontAwesomeIcon icon={faCreditCard} size="xl" />
                        </Box>
                        <Text textStyle="pbold" mb={3}>
                          Task 3: Complete Checkout
                        </Text>
                        <UnorderedList spacing={3}>
                          <ListItem>
                            <Text textStyle="caption">
                              "Complete the donation process including payment
                              information."
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text textStyle="caption">
                              Fill payment details
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text textStyle="caption">Review and confirm</Text>
                          </ListItem>
                        </UnorderedList>
                      </Box>
                    </GridItem>
                  </Grid>
                  <Text as="p" textStyle={"pbold"} textTransform={"capitalize"}>
                    Initial Usability Test Results
                  </Text>
                  <Text as="p" textStyle="p">
                    Each task was evaluated based on completion rate, time on
                    task, and error rate. Participants were encouraged to think
                    aloud, providing qualitative feedback throughout the
                    process.
                  </Text>
                  <UsabilityMetrics />
                </VStack>
              </Box>
            </Box>
          </section>

          {/* THIRD SECTION DATA COLLECTION CLOSE*/}
          <Divider variant="section" />

          {/* FOURTH SECTION ANALYSIS OPEN*/}
          <section>
            <Box id="synthesis">
              <Box px={12}>
                <DividerSection>Phase 3 </DividerSection>
                <VStack alignItems="start" py={12} color="gray.600">
                  <Text
                    textStyle="h2"
                    color="semantic.text.primary"
                    textTransform={"capitalize"}
                  >
                    synthesis
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    Using FigJam's digital whiteboard, our team collaboratively
                    analyzed the usability test findings. We created virtual
                    sticky notes for each observation from the testing sessions.
                    Through remote brainstorming sessions, we grouped these
                    notes into related clusters, identifying emerging patterns
                    and pain points. This affinity mapping exercise helped us
                    transform individual user insights into actionable themes
                    that would guide our design decisions.
                  </Text>
                  {/* Content Empathy map and affinity diagram */}
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
                          Call-to-Action Visibility
                        </Text>
                        <OverlayImage
                          src={ctaImage}
                          alt="call-to-action Theme"
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
                          Hero Section Issues
                        </Text>
                        <OverlayImage
                          src={heroImage}
                          alt="hero section Theme"
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
                          Visual Hierarchy Problems
                        </Text>
                        <OverlayImage src={visualImage} alt="visual Theme" />
                      </Box>
                    </GridItem>
                    <GridItem>
                      <Box pb={4}>
                        <Text
                          textStyle="pbold"
                          textAlign="center"
                          textTransform={"capitalize"}
                        >
                          Layout Navigation
                        </Text>
                        <OverlayImage src={layoutImage} alt="layout Theme" />
                      </Box>
                    </GridItem>
                  </Grid>

                  <VStack alignItems="start" py={4}>
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                      pb={4}
                    >
                      Key Findings analysis
                    </Text>
                    <Text as="p" textStyle="p" pb={4}>
                      Following the comprehensive affinity diagram exercise,
                      this key findings analysis distills the synthesized user
                      experience data into strategic, actionable insights. By
                      clustering and analyzing qualitative data, we transformed
                      raw observations into structured, meaningful patterns that
                      reveal critical design considerations for optimizing
                      donation experience.
                    </Text>
                  </VStack>
                  <VStack align="stretch" spacing={8} w="100%">
                    <Grid
                      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                      gap={8}
                      color="gray.600"
                    >
                      <GridItem>
                        <Box
                          bg="semantic.background.secondary"
                          p={6}
                          height="100%"
                        >
                          <Box mb={4}>
                            <FontAwesomeIcon icon={faLocationDot} size="xl" />
                          </Box>
                          <Text textStyle="pbold" mb={3}>
                            Call-to-Action Placement
                          </Text>
                          <UnorderedList spacing={3}>
                            <ListItem>
                              <Text textStyle="caption">
                                Donation button needs prominent placement above
                                the fold
                              </Text>
                            </ListItem>
                            <ListItem>
                              <Text textStyle="caption">
                                Users expect consistent button location across
                                pages
                              </Text>
                            </ListItem>
                            <ListItem>
                              <Text textStyle="caption">
                                Clear visual distinction needed for primary
                                actions
                              </Text>
                            </ListItem>
                          </UnorderedList>
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box
                          bg="semantic.background.secondary"
                          p={6}
                          height="100%"
                        >
                          <Box mb={4}>
                            <FontAwesomeIcon
                              icon={faWandMagicSparkles}
                              size="xl"
                            />
                          </Box>
                          <Text textStyle="pbold" mb={3}>
                            Hero Section Impact
                          </Text>
                          <UnorderedList spacing={3}>
                            <ListItem>
                              <Text textStyle="caption">
                                Value proposition must be immediately clear
                              </Text>
                            </ListItem>
                            <ListItem>
                              <Text textStyle="caption">
                                Content needs stronger emotional connection
                              </Text>
                            </ListItem>
                            <ListItem>
                              <Text textStyle="caption">
                                Visual hierarchy should guide to donation action
                              </Text>
                            </ListItem>
                          </UnorderedList>
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box
                          bg="semantic.background.secondary"
                          p={6}
                          height="100%"
                        >
                          <Box mb={4}>
                            <FontAwesomeIcon icon={faLayerGroup} size="xl" />
                          </Box>
                          <Text textStyle="pbold" mb={3}>
                            Content Hierarchy
                          </Text>
                          <UnorderedList spacing={3}>
                            <ListItem>
                              <Text textStyle="caption">
                                Important information needs clear visual
                                emphasis
                              </Text>
                            </ListItem>
                            <ListItem>
                              <Text textStyle="caption">
                                Donation options require better differentiation
                              </Text>
                            </ListItem>
                            <ListItem>
                              <Text textStyle="caption">
                                Progress indicators essential for user
                                orientation
                              </Text>
                            </ListItem>
                          </UnorderedList>
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box
                          bg="semantic.background.secondary"
                          p={6}
                          height="100%"
                        >
                          <Box mb={4}>
                            <FontAwesomeIcon icon={faPenRuler} size="xl" />
                          </Box>
                          <Text textStyle="pbold" mb={3}>
                            Layout Structure
                          </Text>
                          <UnorderedList spacing={3}>
                            <ListItem>
                              <Text textStyle="caption">
                                Streamlined navigation path to donation form
                              </Text>
                            </ListItem>
                            <ListItem>
                              <Text textStyle="caption">
                                Logical grouping of related information
                              </Text>
                            </ListItem>
                            <ListItem>
                              <Text textStyle="caption">
                                Simplified form layout with clear sections
                              </Text>
                            </ListItem>
                          </UnorderedList>
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

          {/* FIFTH SECTION RECOMMENDATIONS OPEN*/}
          <section>
            <Box id="recommendations">
              <Box px={12}>
                <DividerSection>Phase 4 </DividerSection>
                <VStack alignItems="start" pt={12} pb={12} color="gray.600">
                  <Text
                    textStyle="h2"
                    color="semantic.text.primary"
                    textTransform="capitalize"
                  >
                    Recommendations
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    This project provided valuable insights about user-centered
                    design and the importance of iterative development in
                    creating impactful solutions.
                  </Text>

                  <DesignRecommendations
                    recommendations={designRecommendations}
                  />

                  
                </VStack>
              </Box>
            </Box>
          </section>

          <Divider variant="section" />

          {/* FIFTH SECTION RECOMMENDATIONS OPEN*/}
          <section>
            <Box id="second">
              <Box px={12}>
                <DividerSection>Phase 5</DividerSection>
                <VStack alignItems="start" pt={12} pb={12} color="gray.600">
                  <Text
                    textStyle="h2"
                    color="semantic.text.primary"
                    textTransform="capitalize"
                  >
                    Usabiliy testing results
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    Comparison of initial and final usability testing results
                    showing significant improvements across key metrics with the
                    recommendations suggested.
                  </Text>

                  <VStack alignItems="start">
                    <UsabilityResults />
                  </VStack>

                  <VStack alignItems="start" py={12}>
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      textTransform={"uppercase"}
                      color="semantic.text.primary"
                    >
                      conclusion
                    </Text>
                    <Text as="p" textStyle={"p"}>
                      The final usability testing results validate the
                      effectiveness of our design improvements, showing
                      substantial gains in both user experience and task
                      completion metrics. The increase in SUS score from 48 to
                      82, combined with a 35% higher donation completion rate
                      and 40% faster completion time, demonstrates that our
                      redesigned interface successfully streamlines the donation
                      process while maintaining accessibility and user
                      satisfaction. These improvements establish a solid
                      foundation for future platform development and enhanced
                      donor engagement.
                    </Text>
                  </VStack>
                </VStack>
              </Box>
            </Box>
          </section>

          {/* FIFTH SECTION SYNTHESIS CLOSE*/}
          <Divider variant="section" />

          <section>
            <Box id="takeaway">
              <Box px={12}>
                <DividerSection>Phase 6</DividerSection>
                <VStack alignItems="start" pt={12} pb={12} color="gray.600">
                  <Text
                    textStyle="h2"
                    color="semantic.text.primary"
                    textTransform="capitalize"
                  >
                    Reflection & Takeaways
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    Leading the redesign of the Archives of American Art's
                    donation platform presented unique challenges in balancing
                    the institution's cultural significance with modern user
                    experience needs. The project required careful consideration
                    of both the Archives' historical context and the
                    expectations of contemporary donors. Working closely with
                    the Archives' team and stakeholders provided valuable
                    insights into how digital solutions can enhance cultural
                    preservation while maintaining accessibility and ease of
                    use.
                  </Text>
                  <UnorderedList textStyle={"p"} pb={4}>
                    <ListItem>
                      <Text>
                        <strong>Data-Driven Design:</strong> Discovered how
                        quantitative usability metrics combined with qualitative
                        donor feedback can guide design decisions that respect
                        both the Archives' mission and user needs.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text>
                        <strong>Stakeholder Collaboration:</strong> Enhanced
                        skills in communicating design rationale to cultural
                        institution stakeholders and working closely with
                        developers to implement accessibility features that
                        serve a diverse donor base.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text>
                        <strong>Technical Integration:</strong> Gained valuable
                        experience in implementing UI card patterns and
                        optimization techniques while maintaining consistency
                        with the Smithsonian's design system standards.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text>
                        <strong>User-Centric Approach:</strong> Strengthened
                        understanding of cultural institution donor behaviors
                        and how to optimize interfaces to encourage support for
                        art historical preservation.
                      </Text>
                    </ListItem>
                  </UnorderedList>
                  <Text textStyle={"p"}>
                    This project reinforced the importance of balancing
                    institutional heritage with modern digital solutions. The
                    significant improvements in user metrics demonstrate how
                    thoughtful design decisions can enhance the donation
                    experience while honoring the Archives of American Art's
                    mission to collect, preserve, and share the nation's
                    artistic legacy.
                  </Text>
                </VStack>

                <Box pb={12}>
                  <Image
                    src={finalPresentationImage}
                    alt="screenshot of a final presentation"
                  />
                  <figcaption>
                    <Text as="p" textStyle="caption" textAlign="center" pt={4}>
                      Final presentation with stakeholders
                    </Text>
                  </figcaption>
                </Box>
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
