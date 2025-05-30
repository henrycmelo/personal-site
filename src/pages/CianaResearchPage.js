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
} from "@chakra-ui/react";
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
import { useAlertContext } from "../context/alertContext";
import questionImage from "../assets/ciana_research/question.svg";
import answerImage from "../assets/ciana_research/answer.svg";
import gantChart from "../assets/ciana_research/ganttChart.png";
import targetAudienceImage from "../assets/ciana_research/targetaudience.svg";
import sayImage from "../assets/ciana_research/say.png";
import thinkImage from "../assets/ciana_research/think.png";
import feelImage from "../assets/ciana_research/feel.png";
import doesImage from "../assets/ciana_research/does.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faLightbulb,
  faExclamationTriangle,
  faCheckCircle,
  faStar,
  faHandPointDown,
  faCalendarCheck,
  faChartLine,
  faDatabase,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import DividerSection from "../components/DividerSection";
import banner from "../assets/ciana_research/banner.png";
import ResponsiveMenu from "../components/ResponsiveMenu";
import Footer from "../components/Footer";
import CaseStudyLayout from "../style/CaseStudyLayout";
import cecLogo from "../assets/ciana_research/cecLogo.png";
import OverlayImage from "../components/OverlayImage";

const SteakHousePage = () => {
  const { sections, handleClick } = useAlertContext();

  const sectionsProject = [
    { id: "theproject", label: "The Project Brief", icon: faFileAlt },
    { id: "planning", label: "Planning", icon: faCalendarCheck },
    { id: "datacollection", label: "Data Collection", icon: faDatabase },
    { id: "analysis", label: "Analysis", icon: faChartLine },
    { id: "synthesis", label: "Synthesis", icon: faPuzzlePiece },
    { id: "reflection", label: "Reflection & Takeaways", icon: faLightbulb },
  ];

  return (
    <>
      <ResponsiveMenu isOtherPage sections={sections} />
      <Box position="relative" overflow="hidden" >
        {/* Hero section with dark background and centered headline */}
        <Box
          bg={`linear-gradient(rgba(73,80,87,0.5), rgba(73,80,87,0.8)), url(${banner})`}
         bgSize={"cover"}
          color="semantic.background.primary"
          bgPosition="center"
          bgRepeat="no-repeat"
          py={20}
          px={4}
          minH="70vh"
          display="flex"
          alignItems="center"
        >
          <Container
            maxW="container.xl"
            textAlign="center"
            textShadow="0 2px 4px rgba(0,0,0,0.8)"
          >
            <Text as="span" textStyle={"pbold"} letterSpacing="wider" mb={6} textTransform="uppercase" fontSize={{ base: "sm", md: "md" }}>
              A UX Research Case Study
            </Text>

            <Text
              as="h1"
              textStyle={"h2"}
              lineHeight="1.2"
              mb={8}
              fontWeight="bold"
            >
              How CIANA's Digital Safety Workshops Secured $150K in Funding &
              Directly Impacted 18,000+ Hispanic Parents in Corona, Queens
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
                <Text textStyle="pbold">CIANA</Text>
                <Box fontSize="sm" color="gray.600" mt={1}>
                  (Center for the Integration and Advancement of New Americans)
                </Box>
              </Box>

              <Box>
                <Text textStyle={"pbold"} color="semantic.accent" mb={2}>
                  Description
                </Text>
                <Text color="gray.600">
                  CIANA needed to secure future funding by demonstrating the
                  impact of its digital safety workshops and showcasing
                  improvements based on community feedback.
                </Text>
              </Box>

              <Box>
                <Text textStyle={"pbold"} color="semantic.accent" mb={4}>
                  Key Results
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  <Box>
                    <Text textStyle={"h3bold"} color="semantic.accent">
                      $150K
                    </Text>
                    <Text textStyle={"caption"} color="gray.600">
                      in secured funding
                    </Text>
                  </Box>
                  <Box>
                    <Text textStyle={"h3bold"} color="semantic.accent">
                      18K+
                    </Text>
                    <Text textStyle={"caption"} color="gray.600">
                      people impacted
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
                    Digital safety education programs often lack meaningful
                    evaluation methods, particularly for immigrant communities
                    where standard metrics fail to capture cultural nuances and
                    real-world impact.
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
                        Difficulty measuring behavior change in diverse
                        communities
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Limited understanding of immigrant families' specific
                        digital challenges
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Reliance on quantitative metrics missing deeper insights
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Risk of losing funding without compelling impact
                        evidence
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
                    A qualitative UX research approach using post-workshop
                    interviews to capture authentic participant experiences and
                    demonstrate program value beyond basic metrics.
                  </Text>
                  <List spacing={2} mt={4} color="semantic.accent">
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        In-depth interviews with 7 workshop participants
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Synthesis revealing 8 important themes
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Documentation of personal narratives and real-world
                        applications
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Development of 4 strategic recommendations
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
                    The research provided rich evidence of program effectiveness
                    while uncovering key insights about immigrant families'
                    digital safety needs that quantitative measurements alone
                    couldn't capture.
                  </Text>

                  <List spacing={2} mt={4} color="semantic.accent">
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Compelling qualitative evidence for grant reporting
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Deeper understanding of participant motivations and
                        challenges
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        UX improvements for digital safety workshops based on
                        user needs, increasing family participation by 40%
                      </Text>
                    </ListItem>

                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Secured $150K in continued funding
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
                  UX Researcher
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
                    Research Planning
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    User Interviews
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    Synthesis Methods
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    Analysis
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    Documentation
                  </Tag>
                </Flex>

                <Divider variant="regular" />

                {/* Approach Section */}
                <Box pt={2} >
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
                    Qualitative UX Research
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
                    3 (Researcher, Director, Product Manager)
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
          Explore the detailed research methodology, interview insights, and
          impact measurement approach
        </Text>
        <Text textStyle="caption" color="gray.500" pb={4}>
          7 mins read
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
                    CIANA, a NYC non-profit serving new immigrants, received
                    funding through "The People's Money" initiative to conduct
                    digital safety workshops in Corona, Queens. The program
                    needed to demonstrate its effectiveness and community impact
                    for grant requirements.
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
                    Parents in immigrant communities face growing challenges in
                    protecting their children online. These workshops provide
                    crucial digital safety support where resources are limited,
                    making it essential to understand and improve their effectiveness.
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
                    I worked as a UX researcher to evaluate CIANA's workshops
                    through parent interviews, using synthesis tools to develop
                    evidence-based recommendations for grant reporting and
                    program improvements.
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
                    src={cecLogo}
                    alt="NYC Civic Engagement Logo"
                    objectFit="cover"
                  />

                  <Text as="p" textStyle="caption" textAlign="center" mt={2}>
                    NYC Civic Engagement Commission grant provider
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
                  Key metrics from our research on digital safety workshops
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
                    18K+
                  </Text>
                  <Text textStyle={"caption"} color="gray.600">
                    People impacted
                  </Text>
                </Box>
                <Box>
                  <Text textStyle={"h3bold"} color="semantic.accent">
                    7
                  </Text>
                  <Text textStyle={"caption"} color="gray.600">
                    Total interviews
                  </Text>
                </Box>
                <Box>
                  <Text textStyle={"h3bold"} color="semantic.accent">
                    8
                  </Text>
                  <Text textStyle={"caption"} color="gray.600">
                    Identified themes
                  </Text>
                </Box>
                <Box>
                  <Text textStyle={"h3bold"} color="semantic.accent">
                    4
                  </Text>
                  <Text textStyle={"caption"} color="gray.600">
                    Recommendations
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
                how research changed the problem direction
              </Text>
              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color="gray.600">
                  The initial assumption was to measure behavior change through
                  quantitative surveys, however, the qualitative post-workshop
                  interviews revealed deeper insights about parents'
                  motivations, challenges, and needs that surveys alone couldn't
                  capture. This shift to qualitative research allowed us to
                  understand not just if the workshops were effective, but why
                  and how they impacted parents' approach to digital safety. The
                  rich narratives and personal experiences shared by parents
                  provided compelling evidence for the grant report and valuable
                  insights for program improvement that went beyond mere
                  metrics.
                </Text>
              </Box>
            
            <Box py={4} w="100%" color={"gray.600"}>
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
                          src={questionImage}
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
                          Question
                        </Heading>

                        <Text textStyle={"caption"} color="gray.600">
                          How can we optimize digital safety workshops to
                          effectively serve diverse community needs and
                          demonstrate impact for future funding?
                        </Text>
                      </Box>
                    </VStack>
                  </GridItem>

                  {/* Answer */}
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
                          src={answerImage}
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
                          Answer
                        </Heading>

                        <Text textStyle={"caption"} color="gray.600">
                          Conduct qualitative UX research through post-workshop
                          interviews to evaluate workshop effectiveness and
                          identify improvement opportunities.
                        </Text>
                      </Box>
                    </VStack>
                  </GridItem>
                </Grid>
              </VStack>
            </Box>
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
                  The research process began with planning and research design,
                  focusing on understanding workshop effectiveness through
                  participant experiences. We conducted post-workshop interviews
                  with 7 parents, ensuring a systematic approach to data
                  collection. Each interview was documented and analyzed using
                  qualitative research methods. Through empathy mapping, we
                  organized participant feedback, emotions, and needs. The
                  affinity diagram helped identify patterns and themes across
                  interviews. These insights were then synthesized into
                  actionable recommendations, supporting both grant reporting
                  requirements and future program improvements.
                </Text>
              </Box>
              <Box pt={4} textAlign="center">
                <Box
                  rounded="lg"
                  width="full"
                  bg="semantic.background.secondary"
                  p={{ base: 8, md: 12 }}
                >
                  <OverlayImage src={gantChart} />
                  <Text textStyle={"caption"} color="gray.600">
                    Timeline of the 8-week qualitative research process
                  </Text>
                </Box>
              </Box>
            </Box>
          </VStack>

          <DividerSection icon={faCalendarCheck} />

          <VStack align="stretch" spacing={10} py={12} id="planning">
            {/* phase 1 Section */}
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 1: planning
              </Heading>
              <Text as="p" textStyle="p" pb={4}>
                This section outlines the objectives, research questions, the
                target audience and methodology used to design the study.
              </Text>
              <Box pb={4}>
                <Text
                  textStyle="pbold"
                  textTransform="uppercase"
                  color="gray.600"
                  pb={3}
                  as="h3"
                >
                  Objectives
                </Text>

                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <UnorderedList textStyle="p">
                    <ListItem>
                      Understand participant experiences, motivations, and
                      frustrations.
                    </ListItem>
                    <ListItem>
                      Identify key themes and areas for improvement in workshop
                      delivery and content.
                    </ListItem>
                    <ListItem>
                      Provide actionable recommendations for future workshops.
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
                  Research questions
                </Text>

                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <UnorderedList textStyle="p">
                    <ListItem>
                      What motivated you to attend the digital safety workshop?
                    </ListItem>
                    <ListItem>
                      What frustration did you have before and after the
                      workshop?
                    </ListItem>
                    <ListItem>
                      How would you change or improve your experience with the
                      workshop?
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
                  Methodology
                </Text>

                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <UnorderedList textStyle="p">
                    <ListItem>Post-workshop user interviews.</ListItem>
                    <ListItem>
                      Open-ended questions designed to explore motivations,
                      benefits, frustrations, and suggestions.
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
                  Tools & Tecniques
                </Text>

                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <UnorderedList textStyle="p">
                    <ListItem>
                      Interview scripts for consistency using Google Docs {""}
                      <a
                        href="https://docs.google.com/document/d/1wFE8wP12O8VIpqfgRvT70KguuOMoSqW5JLeGpY3ay60/edit?tab=t.0"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text as={"span"} decoration={"underline"}>
                          (View Script here).
                        </Text>
                      </a>
                    </ListItem>
                    <ListItem>
                      Recording tools for accurate transcription such as Zoom,
                      IOS Recording App and Otter.
                    </ListItem>
                    <ListItem>
                      Empathy maps and affinity diagrams for data synthesis in
                      Figjam.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>

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
                    src={targetAudienceImage}
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
                    Target audience
                  </Heading>

                  <Text textStyle={"caption"} color="gray.600">
                    Our research focused on Hispanic parents attending digital
                    safety workshops who were highly motivated to protect their
                    children online despite limited tech access. While many
                    struggled with digital tools, they were committed to
                    learning about screen time management, online security, and
                    fostering healthy digital habits.
                  </Text>
                </Box>
              </Box>
            </Box>
          </VStack>
          <DividerSection icon={faDatabase} />

          <VStack align="stretch" spacing={10} py={12} id="datacollection">
            {/* phase 2 Section */}
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 2: Data Collection
              </Heading>
              <Text as="p" textStyle="p" pb={4}>
                This section outlines the approach used to gather qualitative
                data from workshop participants, focusing on the methods of
                participant recruitment, the interview process, and the
                documentation of responses. The goal was to ensure a
                comprehensive collection of feedback that could be analyzed to
                improve future workshops.
              </Text>
              <Box pb={4}>
                <Box
                  rounded="lg"
                  width="full"
                  bg="semantic.background.secondary"
                  p={{ base: 8, md: 12 }}
                >
                  <Box textAlign="center">
                    <Text textStyle={"h3bold"} color="semantic.accent">
                      “I think I learned how my son should be using a tablet.”
                    </Text>
                    <Text textStyle={"caption"} color="gray.600">
                      - Workshop atendee
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
                  Recruiting
                </Text>

                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                    Participants were recruited through phone calls and emails,
                    which allowed for personalized outreach and provided an
                    opportunity to address any questions about the study.
                    Recruitment was aimed at parents who attended the digital
                    safety workshops, with an emphasis on flexibility to
                    accommodate their schedules.
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
                  Interviews
                </Text>

                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                    Structured post-workshop interviews were conducted with
                    open-ended questions to gather feedback on participants'
                    experiences, motivations, and suggestions. Some participants
                    were initially hesitant, fearing they might be quizzed, but
                    were reassured that the goal was to collect feedback, not
                    assess their knowledge. The interviews were recorded (with
                    consent) and transcribed for accurate analysis to ensure
                    detailed documentation for synthesis.
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
                  Documentation
                </Text>

                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                    The interviews were recorded (with participant consent) and
                    later transcribed for accurate analysis. This documentation
                    ensured that every piece of feedback was captured in detail
                    and could be referenced during the synthesis and analysis
                    phases.
                  </Text>
                </Box>
              </Box>
            </Box>
          </VStack>

          <DividerSection icon={faChartLine} />

          <VStack align="stretch" spacing={10} py={12} id="analysis">
            {/* phase 3 Section */}
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 3: analysis
              </Heading>
              <Text as="p" textStyle="p" pb={4}>The analysis was conducted by first creating empathy maps, followed by synthesizing the findings using an affinity diagram. </Text>

              <Box pb={4}>
                <Text
                  textStyle="pbold"
                  textTransform="uppercase"
                  color="gray.600"
                  pb={3}
                  as="h3"
                >
                  Empathy Map
                </Text>

                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
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
                </Box>
                </Box>
                <Box pb={4}>
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    gap={6}
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
                          Say
                        </Text>
                        <OverlayImage src={sayImage} alt="empathy map say" />
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
                          Think
                        </Text>
                        <OverlayImage
                          src={thinkImage}
                          alt="empathy map think"
                        />
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
                          Feel
                        </Text>

                        <OverlayImage src={feelImage} alt="empathy map feel" />
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
                  Affinity Diagram & Theme Identification
                </Text>

                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p" color='gray.600'>
                    Through our affinity diagramming process, I organized the
                    sticky notes from the empathy map into three main
                    categories: Positive Feedback, Motivations/Goals, and
                    Frustrations. Within each category, key themes emerged.
                    Below are the themes identified with supporting participant
                    quotes.
                  </Text>
                </Box>
                
            
                <Box py={4}>
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    gap={6}
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
                          Clarity & impact
                        </Text>
                        <OverlayImage src={clarityImage} alt="clarity Theme" />
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
                          practical insights & learning outcomes
                        </Text>
                        <OverlayImage
                          src={practicalImage}
                          alt="practical Theme"
                        />
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
                          commitment to child development & safety
                        </Text>

                        <OverlayImage src={childImage} alt="child Theme" />
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
                          proactive digital parenting
                        </Text>
                        <OverlayImage
                          src={proactiveImage}
                          alt="proactive Theme"
                        />
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
                          reinforcing digital safety for kids
                        </Text>
                        <OverlayImage
                          src={reinforcingImage}
                          alt="reinforcing Theme"
                        />
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
                          scheduling & accessibility
                        </Text>
                        <OverlayImage
                          src={schedulingImage}
                          alt="scheduling Theme"
                        />
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
                          technical difficulties & setup
                        </Text>
                        <OverlayImage
                          src={technicalImage}
                          alt="scheduling Theme"
                        />
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
                          workshop delivery & content
                        </Text>
                        <OverlayImage
                          src={workshopImage}
                          alt="scheduling Theme"
                        />
                      </Box>
                    </GridItem>
                  </Grid>
                </Box>
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
                phase 4: Synthesis
              </Heading>
              <Text as="p" textStyle="p" pb={4}>
                Through my analysis, clear patterns emerged leading to
                actionable recommendations for improving the digital safety
                workshops. Below are the fourt key recommendations based on
                participant feedback and identified themes, followed by our
                conclusion about the workshop's effectiveness and future
                direction.
              </Text>
              
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
                          src={recommendationScheduleImage}
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
                          Flexible scheduling
                        </Heading>

                        <Text textStyle={"caption"} color="gray.600">
                          Offer workshops at various times to accommodate
                          different schedules. Consider recording sessions for
                          on-demand access.
                        </Text>
                      </Box>
                    </VStack>
                  </GridItem>

                  {/* Answer */}
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
                          src={recommendationTechnicalImage}
                          alt="laptop Illustration"
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
                          technical support
                        </Heading>

                        <Text textStyle={"caption"} color="gray.600">
                          Provide follow-up materials and technical assistance
                          to help participants apply what they have learned.
                          Ensure all promised materials are sent right away.
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
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width="100%"
                      >
                        <Image
                          src={recommendationContentImage}
                          alt="laptop Illustration"
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
                          content delivery
                        </Heading>

                        <Text textStyle={"caption"} color="gray.600">
                          Incorporate more visual aids and interactive elements
                          to engage participants and clarify complex topics.
                          Consider live demonstrations for technical setups such
                          as parental controls on their phone/tablet/laptop.
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
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width="100%"
                      >
                        <Image
                          src={recommendationKidsImage}
                          alt="laptop Illustration"
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
                          Targeted sessions
                        </Heading>

                        <Text textStyle={"caption"} color="gray.600">
                          Develop sessions specifically for children to
                          reinforce the concepts taught to parents, ensuring the
                          education about digital safety is for both children
                          and their parents.
                        </Text>
                      </Box>
                    </VStack>
                  </GridItem>
                </Grid>
              </VStack>
            </Box>

            <Box pb={4} color="gray.600">
              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                Conclusion
              </Text>

              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p">
                  The qualitative analysis of participant feedback highlights
                  both the strengths and areas for improvements in our digital
                  safety workshops. By addressing the identified frustrations
                  and implementing the proposed recommendations, we can improve
                  the overall effectiveness and satisfaction of our workshops,
                  ultimately providing better support for parents and their
                  children in navigating digital safety.
                </Text>
              </Box>
            </Box>
          </VStack>
          <DividerSection icon={faLightbulb} />
          <VStack align="stretch" spacing={10} py={12} id="reflection">
            {/* phase 5 Section */}
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 5: Takeaways
              </Heading>
              <Text as="p" textStyle="p" pb={4}>
                I feel fortunate to have had the opportunity to work on digital
                safety workshops that directly impact parents in the Corona,
                Queens community.
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
                    I learned several valuable lessons through this experience:
                  </Text>

                  <VStack align="stretch">
                    <UnorderedList textStyle={"p"} pb={4}>
                      <ListItem>
                        <Text>
                          <strong>
                            Qualitative insights reveal deeper understanding -
                          </strong>{" "}
                          Our shift from quantitative surveys to qualitative
                          interviews proved crucial in uncovering the real needs
                          and challenges of parents. This taught me that
                          sometimes the most valuable insights come from
                          listening to personal stories rather than just
                          collecting metrics.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text>
                          <strong>
                            Flexibility in research methods is key -
                          </strong>{" "}
                          Learning to adapt and choose the right research method
                          for the context was essential. Post-workshop
                          interviews provided richer insights into parent
                          experiences than surveys would have, showing me how
                          different research approaches can lead to different
                          types of understanding.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text>
                          <strong>
                            Community needs drive research direction -
                          </strong>{" "}
                          The research revealed how community context shapes
                          program effectiveness. Understanding parents'
                          scheduling constraints, technical challenges, and
                          cultural perspectives helped develop more relevant and
                          accessible workshop recommendations.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text>
                          <strong>
                            Research synthesis tools enhance understanding -
                          </strong>{" "}
                          Using empathy maps and affinity diagrams taught me how
                          to transform individual feedback into actionable
                          insights. These tools helped bridge the gap between
                          raw data and meaningful recommendations.
                        </Text>
                      </ListItem>
                    </UnorderedList>
                  </VStack>
                </Box>
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

export default SteakHousePage;
