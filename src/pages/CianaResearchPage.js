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
  faCalendarCheck,
  faChartLine,
  faDatabase,
  faFileAlt,
  faLightbulb,
  faListCheck,
  faPuzzlePiece,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import problemImage from "../assets/ciana_research/problem.svg";
import goalImage from "../assets/ciana_research/goal.svg";
import questionImage from "../assets/ciana_research/question.svg";
import answerImage from "../assets/ciana_research/answer.svg";
import gantChart from "../assets/ciana_research/ganttChart.png";
import DividerSection from "../components/DividerSection";
import objectivesImage from "../assets/ciana_research/objectives.svg";
import researchQuestionsImage from "../assets/ciana_research/researchquestions.svg";
import targetAudienceImage from "../assets/ciana_research/targetaudience.svg";
import methodologyImage from "../assets/ciana_research/methodology.svg";
import toolsImage from "../assets/ciana_research/tools.svg";
import recruitingImage from "../assets/ciana_research/recruiting.svg";
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
import cianaBanner from "../assets/ciana_research/banner.png";
import ResponsiveMenu from "../components/ResponsiveMenu";
import Footer from "../components/Footer";

const CianaResearchPage = () => {
  const { capitalizeEachWord, sections } = useAlertContext();
  const sectionsProject = [
    { id: "theproject", label: "The Project Brief", icon:faFileAlt },
    { id: "planning", label: "Planning", icon: faCalendarCheck },
    { id: "datacollection", label: "Data Collection", icon: faDatabase },
    { id: "analysis", label: "Analysis", icon:faChartLine },
    { id: "synthesis", label: "Synthesis", icon:faPuzzlePiece },
    { id: "reflection", label: "Reflection & Takeaways", icon: faLightbulb },
  ];

  return (
    <>
      <ResponsiveMenu isOtherPage sections={sections} />

      <Box py={24} px={12}>
        <VStack color="semantic.text.primary" alignItems="start" pb={6}>
          <Text as="h1" textStyle={"h1"}>
            {" "}
            {capitalizeEachWord("Impact Through Community Voices")}
          </Text>
          <Text as="h2" textStyle={"h2"}>
            {" "}
            {capitalizeEachWord("UX research case study")}
          </Text>
          <Text as="i" textStyle={"p"} color='gray.600'>
            How might we demonstrate the true value of digital safety workshops
            while ensuring they meet immigrant family needs?
          </Text>
          <Text as="h3" textStyle={"caption"} color='gray.600'>
            <Text as="span" textStyle="captionbold" color='semantic.text.primary'>
              ORGANIZATION -{" "}
            </Text>{" "}
            CIANA (Center for the Integration and Advancement of New Americans)
          </Text>
         
          <Box
            w={{ base: "100%", md: "100%" }}
            overflow="hidden"
            maxH={'400px'}
          >
            <Image
              src={cianaBanner}
              alt="cianabanner"
              objectFit="contain"
              objectPosition="center"
            />
          </Box>
          <Grid
            w={"100%"}
            templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
            gap={{ base: 2, md: 24 }}
            color='gray.600'
          >
            <GridItem w="100%">
              <VStack alignItems="start">
                <Text as="p" textStyle="pbold" color='semantic.text.primary'>
                  Role
                </Text>
                <Divider variant="thick" />
                <Text as="p" textStyle={"p"}>
                  UX Researcher
                </Text>
              </VStack>
            </GridItem>
            <GridItem w="100%">
              <VStack alignItems="start">
                <Text as="p" textStyle="pbold" color='semantic.text.primary'>
                  Duration
                </Text>
                <Divider variant="thick" />
                <Text as="p" textStyle={"p"}>
                  8 Weeks
                </Text>
              </VStack>
            </GridItem>
            <GridItem w="100%">
              <VStack alignItems="start">
                <Text as="p" textStyle="pbold" color='semantic.text.primary'>
                  Tools
                </Text>
                <Divider variant="thick" />
                <Text as="p" textStyle={"p"}>
                  Google Suite • Zoom • Otter • IOS Recording App • FigJam
                </Text>
              </VStack>
            </GridItem>

            <GridItem w="100%">
              <VStack alignItems="start">
                <Text as="p" textStyle="pbold" color='semantic.text.primary'>
                  Skills
                </Text>
                <Divider variant="thick" />
                <Text as="p" textStyle={"p"}>
                  Research Planning • User Interviews • Synthesis Methods •
                  Analysis & Documentation
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

        <Box overflowY="auto" height={"100%"} data-scroll-container='true'>
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
                    color='gray.600' 
                  >
                    {/* Text Columns */}
                    <GridItem>
                      <Box pb={4}>
                        <Text textStyle="pbold" textTransform={'uppercase'} color='semantic.text.primary'>
                          Background
                        </Text>
                        <Text textStyle="p">
                          CIANA, a NYC non-profit serving new immigrants,
                          received funding through "The People's Money"
                          initiative to conduct digital safety workshops in
                          Corona, Queens. The program needed to demonstrate its
                          effectiveness and community impact for grant
                          requirements.
                        </Text>
                      </Box>

                      <Box pb={4}>
                        <Text textStyle="pbold" textTransform={'uppercase'} color='semantic.text.primary'>
                          Relevance
                        </Text>
                        <Text textStyle="p">
                          Parents in immigrant communities face growing
                          challenges in protecting their children online. These
                          workshops provide crucial digital safety support where
                          resources are limited, making it essential to
                          understand and improve their effectiveness.
                        </Text>
                      </Box>

                      <Box pb={4}>
                        <Text textStyle="pbold" textTransform={'uppercase'} color='semantic.text.primary'>
                          My impact
                        </Text>
                        <Text textStyle="p">
                          I worked as a UX researcher to evaluate CIANA's
                          workshops through parent interviews, using synthesis
                          tools to develop evidence-based recommendations for
                          grant reporting and program improvements.
                        </Text>
                      </Box>
                    </GridItem>

                    {/* image Column */}
                    <GridItem
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box>
                        <OverlayImage
                          src={cecLogo}
                          alt="NYC Civic Engagement Logo"
                          objectFit="cover"
                        />
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
                  <Text textStyle="h2" >Quick Stats</Text>

                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={6}
                    textAlign={"center"}
                    color='gray.600'
                  >
                    <GridItem>
                      <Box pb={4}>
                        <HStack
                          align={"center"}
                          justifyContent={"center"}
                          color='semantic.text.primary'
                        >
                          <FontAwesomeIcon icon={faUserGroup} size="xl" />
                          <Text as="p" textStyle="h3">
                            7
                          </Text>
                        </HStack>

                        <Text textStyle="p" textTransform='capitalize'>Total interviews</Text>
                      </Box>
                    </GridItem>

                    {/* Text Column 2 */}
                    <GridItem>
                      <Box pb={4}>
                        <HStack
                          align={"center"}
                          justifyContent={"center"}
                          color='semantic.text.primary'
                        >
                          <FontAwesomeIcon icon={faListCheck} size="xl" />
                          <Text as="p" textStyle="h3">
                            8
                          </Text>
                        </HStack>
                        <Text textStyle="p" textTransform='capitalize'>Identified themes</Text>
                      </Box>
                    </GridItem>

                    {/* Text Column 4 */}
                    <GridItem>
                      <Box pb={4}>
                        <HStack
                          align={"center"}
                          justifyContent={"center"}
                          color='semantic.text.primary'
                        >
                          <FontAwesomeIcon icon={faLightbulb} size="xl" />
                          <Text as="p" textStyle="h3">
                            4
                          </Text>
                        </HStack>
                        <Text textStyle="p" textTransform='capitalize'>Recommendations</Text>
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
                color={'gray.600'}
              >
                {/* Text Column 1 */}
                <GridItem>
                  <Box pb={4}>
                    <Text textStyle="pbold" textAlign={"center"} textTransform={'uppercase'} color='semantic.text.primary'>
                      Problem
                    </Text>
                    <Box maxW='100%' mx="auto">
                      <Image src={problemImage} alt="problem Illustration" />
                    </Box>
                    <Text textStyle="p">
                      The digital safety workshops needed a way to demonstrate
                      their effectiveness and impact for grant reporting while
                      ensuring they truly met diverse community needs. The
                      initial quantitative survey approach wasn't capturing the
                      depth of parent experiences and program value, limiting
                      our ability to make meaningful improvements and justify
                      continued funding.
                    </Text>
                  </Box>
                </GridItem>

                {/* Text Column 2 */}
                <GridItem>
                  <Box pb={4}>
                    <Text textStyle="pbold" textAlign={"center"} textTransform={'uppercase'} color='semantic.text.primary'>
                      Goal
                    </Text>
                    <Box maxW='100%' mx="auto">
                      <Image src={goalImage} />
                    </Box>
                    <Text textStyle="p">
                      To evaluate and optimize digital safety workshops through
                      qualitative UX research, gathering rich insights about
                      participant experiences that would both demonstrate
                      program impact for grant requirements and identify
                      concrete opportunities for improvement.
                    </Text>
                  </Box>
                </GridItem>
              </Grid>

              {/* How research change */}

              <Box w={"100%"} p={12} color={'gray.600'}>
                <Text as="h2" textStyle={"pbold"} pb={4} textTransform={'uppercase'} color='semantic.text.primary'>
                  {" "}
                  how research changed the problem direction
                </Text>
                <Text as="p" textStyle={"p"}>
                  {" "}
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

              {/* QUESTION & SOLUTION OPEN */}

              <Box
                backgroundColor={"semantic.background.secondary"}
                w={"100%"}
                p={12}
              >
                <VStack alignItems="center">
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    gap={6}
                    color='gray.600'
                  >
                    <GridItem>
                      <Box pb={4} >
                        <Text textStyle="pbold" textAlign={"center"} color='semantic.text.primary' textTransform={'uppercase'}>
                          Question
                        </Text>
                        <Box maxW='100%' mx="auto">
                          <Image src={questionImage} />
                        </Box>
                        <Text textStyle="p">
                          How can we optimize digital safety workshops to
                          effectively serve diverse community needs and
                          demonstrate impact for future funding?
                        </Text>
                      </Box>
                    </GridItem>

                    {/* Text Column 2 */}
                    <GridItem>
                      <Box pb={4} >
                        <Text textStyle="pbold" textAlign={"center"} color='semantic.text.primary' textTransform={'uppercase'}>
                          Answer
                        </Text>
                        <Box maxW='100%' mx="auto">
                          <Image src={answerImage} />
                        </Box>
                        <Text textStyle="p">
                          Conduct qualitative UX research through post-workshop
                          interviews to evaluate workshop effectiveness and
                          identify improvement opportunities.
                        </Text>
                      </Box>
                    </GridItem>
                  </Grid>
                </VStack>
              </Box>

              {/* QUESTION & SOLUTION CLOSE */}

              {/* IMPACT OPEN */}

              <Box w={"100%"} p={12} color='gray.600'>
                <Text as="h2" textStyle={"pbold"} pb={4}  color='semantic.text.primary' textTransform={'uppercase'}>
                  {" "}
                  impact
                </Text>
                <Text as="p" textStyle={"p"} pb={4}>
                  {" "}
                  The research changed the strategic direction of the workshops
                  from a quantitative metrics-focused approach to one that
                  deeply understands parent needs and community context. This
                  shift provides:
                </Text>
                <Text as="p" textStyle={"pbold"}>
                  Research impact:
                </Text>
                <UnorderedList textStyle={"p"} pb={4}>
                  <ListItem>
                    Evidence-based recommendations that support grant
                    requirements
                  </ListItem>
                  <ListItem>
                    Rich qualitative insights that inform program improvements
                  </ListItem>
                  <ListItem>
                    Clear framework for expanding to other communities
                  </ListItem>
                </UnorderedList>

                <Text as="p" textStyle={"pbold"}>
                  Community impact:
                </Text>
                <UnorderedList textStyle={"p"} pb={4}>
                  <ListItem>
                    Parents gain practical digital safety knowledge and
                    implementation skills
                  </ListItem>
                  <ListItem>
                    Improved workshop accessibility through schedule flexibility
                  </ListItem>
                  <ListItem>
                    Enhanced cultural relevance in content delivery
                  </ListItem>
                </UnorderedList>

                <Text as="p" textStyle={"pbold"} >
                  Program impact:
                </Text>
                <UnorderedList textStyle={"p"} pb={4}>
                  <ListItem>
                    Tangible pathway for workshop improvements
                  </ListItem>
                  <ListItem>Strong case for continued funding</ListItem>
                  <ListItem>Framework for community expansion</ListItem>
                </UnorderedList>
              </Box>

              {/* {'IMPACT CLOSE'} */}

              {/* Process */}

              <Box w={"100%"} p={12} color='gray.600'>
                <Text as="h2" textStyle={"pbold"} pb={4}  color='semantic.text.primary' textTransform={'uppercase'}>
                  {" "}
                  process
                </Text>
                <Text as="p" textStyle={"p"} pb={4}>
                  {" "}
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

              {/* PROCESS IMAGE OPEN */}

              <Box
                backgroundColor="semantic.background.secondary"
                w="100%"
                p={12}
                color='gray.600'
              >
                <Text as="h2" textStyle="pbold" textAlign="center" mb={6}  color='semantic.text.primary' textTransform={'uppercase'}>
                  Process Breakdown
                </Text>
                <figure>
                  <Box mb={3}>
                    <Image
                      src={gantChart}
                      alt="Research Process Gantt Chart showing 8-week timeline of planning, data collection, analysis, and synthesis phases with dependencies and milestones"
                    />
                  </Box>
                  <figcaption>
                    <Text as="p" textStyle="caption" textAlign="center">
                      Figure 1: Timeline of the 8-week qualitative research
                      process, showing dependencies between research phases and
                      key milestones
                    </Text>
                  </figcaption>
                </figure>
              </Box>

              {/* PROCESS IMAGE CLOSE */}
            </Box>
          </section>

          {/* FIRST SECTION CLOSE */}
          <Divider variant="section" />

          {/* SECOND SECTION PLANNING OPEN*/}
          <section>
            <Box id="planning">
              <Box px={12}>
                <DividerSection>Phase 1 </DividerSection>
                <VStack alignItems="start" pt={12} color='gray.600'>
                  <Text textStyle="h2" color='semantic.text.primary'>Planning</Text>
                  <Text as="p" textStyle="p" pb={4} >
                    This section outlines the objectives, research questions,
                    the target audience and methodology used to design the
                    study.{" "}
                  </Text>

                  {/* Items */}
                  <VStack alignItems="start">
                    <Text as="p" textStyle={"pbold"}  color='semantic.text.primary' textTransform={'uppercase'}>
                      Objectives
                    </Text>
                    <Flex gap={6} flexDirection={{base:'column', md:'row'}}>
                      <Image src={objectivesImage} alt="" w={"100px"} />
                      <UnorderedList textStyle={"p"} pb={4}>
                        <ListItem>
                          Understand participant experiences, motivations, and
                          frustrations.
                        </ListItem>
                        <ListItem>
                          Identify key themes and areas for improvement in
                          workshop delivery and content.
                        </ListItem>
                        <ListItem>
                          Provide actionable recommendations for future
                          workshops.
                        </ListItem>
                      </UnorderedList>
                    </Flex>

                    <Text as="p" textStyle={"pbold"}  color='semantic.text.primary' textTransform={'uppercase'}>
                      Research questions
                    </Text>
                    <Flex gap={6} flexDirection={{base:'column', md:'row'}}>
                      <Image src={researchQuestionsImage} alt="" w={"100px"} />
                      <UnorderedList textStyle={"p"} pb={4}>
                        <ListItem>
                          What motivated you to attend the digital safety
                          workshop?
                        </ListItem>
                        <ListItem>
                          What frustration did you have before and after the
                          workshop?
                        </ListItem>
                        <ListItem>
                          How would you change or improve your experience with
                          the workshop?
                        </ListItem>
                      </UnorderedList>
                    </Flex>

                    <Text as="p" textStyle={"pbold"}  color='semantic.text.primary' textTransform={'uppercase'}>
                      Target audience
                    </Text>
                    <Flex gap={6} flexDirection={{base:'column', md:'row'}}>
                      <Image src={targetAudienceImage} alt="" w={"100px"} />
                      <Text as="p" textStyle="p">
                        The target audience for this research primarily
                        consisted of Hispanic parents and guardians who
                        participated in the digital safety workshops. These
                        individuals were motivated by a strong desire to protect
                        their children in an increasingly digital world, despite
                        having limited access to technology themselves. Many of
                        the participants faced challenges in understanding or
                        implementing digital tools but were deeply invested in
                        learning how to manage their children’s screen time,
                        improve online security, and foster healthier digital
                        habits.
                      </Text>
                    </Flex>

                    <Text as="p" textStyle={"pbold"}  color='semantic.text.primary' textTransform={'uppercase'}>
                      Methodology
                    </Text>
                    <Flex gap={6} flexDirection={{base:'column', md:'row'}}>
                      <Image src={methodologyImage} alt="" w={"100px"} />
                      <UnorderedList textStyle={"p"} pb={4}>
                        <ListItem>Post-workshop user interviews.</ListItem>
                        <ListItem>
                          Open-ended questions designed to explore motivations,
                          benefits, frustrations, and suggestions.
                        </ListItem>
                      </UnorderedList>
                    </Flex>

                    <Text as="p" textStyle={"pbold"}  color='semantic.text.primary' textTransform={'uppercase'}>
                      Tools & Tecniques
                    </Text>
                    <Flex gap={6} flexDirection={{base:'column', md:'row'}}>
                      <Image src={toolsImage} alt="" w={"100px"} />
                      <UnorderedList textStyle={"p"} pb={4}>
                        <ListItem>
                          <HStack>
                            <Text>
                              Interview scripts for consistency using Google
                              Docs {""} 
                              <a
                              href="https://docs.google.com/document/d/1wFE8wP12O8VIpqfgRvT70KguuOMoSqW5JLeGpY3ay60/edit?tab=t.0"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Text
                                as={"span"}
                                textStyle={"p"}
                                decoration={"underline"}
                              >
                                (View Script here).
                              </Text>
                            </a>
                            </Text>
                          
                          </HStack>
                        </ListItem>
                        <ListItem>
                          Recording tools for accurate transcription such as
                          Zoom, IOS Recording App and Otter.
                        </ListItem>
                        <ListItem>
                          Empathy maps and affinity diagrams for data synthesis
                          in Figjam
                        </ListItem>
                      </UnorderedList>
                    </Flex>
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
                <VStack alignItems="start" pt={12} color='gray.600'>
                  <Text textStyle="h2" color='semantic.text.primary'>Data Collection</Text>
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
                      <Text as="i" textStyle="h3" color={'semantic.text.primary'}>
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
                        <Text textStyle="pbold" textAlign={"center"}  color='semantic.text.primary' textTransform={'uppercase'}>
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
                        <Text textStyle="pbold" textAlign={"center"}  color='semantic.text.primary' textTransform={'uppercase'}>
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
                        <Text textStyle="pbold" textAlign={"center"}  color='semantic.text.primary' textTransform={'uppercase'}>
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
                <VStack alignItems="start" pt={12} color='gray.600'>
                  <Text textStyle="h2" color='semantic.text.primary'>Analysis</Text>
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
                    <Text as="p" textStyle={"pbold"}  color='semantic.text.primary' textTransform={'uppercase'}>
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
                          <Text textStyle="pbold" textAlign={"center"}  textTransform={'capitalize'}>
                            Say
                          </Text>
                          <OverlayImage src={sayImage} alt="empathy map say" />
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box pb={4}>
                          <Text textStyle="pbold" textAlign={"center"} textTransform={'capitalize'}>
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
                          <Text textStyle="pbold" textAlign={"center"} textTransform={'capitalize'}>
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
                          <Text textStyle="pbold" textAlign={"center"} textTransform={'capitalize'}>
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
                    <Text as="p" textStyle={"pbold"} textTransform={'uppercase'} color='semantic.text.primary'>
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
                          <Text textStyle="pbold" textAlign="center" textTransform={'capitalize'}>
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
                          <Text textStyle="pbold" textAlign="center" textTransform={'capitalize'}>
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
                          <Text textStyle="pbold" textAlign="center" textTransform={'capitalize'}>
                            commitment to child development & safety
                          </Text>
                          <OverlayImage src={childImage} alt="child Theme" />
                        </Box>
                      </GridItem>

                      <GridItem>
                        <Box pb={4}>
                          <Text textStyle="pbold" textAlign="center" textTransform={'capitalize'}>
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
                          <Text textStyle="pbold" textAlign="center" textTransform={'capitalize'}>
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
                          <Text textStyle="pbold" textAlign="center" textTransform={'capitalize'}>
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
                          <Text textStyle="pbold" textAlign="center" textTransform={'capitalize'}>
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
                          <Text textStyle="pbold" textAlign="center" textTransform={'capitalize'}>
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
                <VStack alignItems="start" pt={12} pb={12} color='gray.600'>
                  <Text textStyle="h2" color='semantic.text.primary'>Synthesis</Text>
                  <Text as="p" textStyle="p" pb={4}>
                    Through my analysis, clear patterns emerged leading to
                    actionable recommendations for improving the digital safety
                    workshops. Below are the fourt key recommendations based on
                    participant feedback and identified themes, followed by our
                    conclusion about the workshop's effectiveness and future
                    direction.
                  </Text>

                  <VStack alignItems="start" >
                    <Text as="p" textStyle={"pbold"} color='semantic.text.primary' textTransform={'uppercase'}>
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
                          <Text textStyle="pbold" textAlign={"center"} textTransform={'capitalize'}>
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
                          <Text textStyle="pbold" textAlign={"center"} textTransform={'capitalize'}>
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
                          <Text textStyle="pbold" textAlign={"center"} textTransform={'capitalize'}>
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
                          <Text textStyle="pbold" textAlign={"center"} textTransform={'capitalize'}>
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
                    <Text as="p" textStyle={"pbold"} textTransform={'uppercase'} color='semantic.text.primary'>
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
                <VStack alignItems="start" pt={12} color='gray.600'>
                  <Text textStyle="h2" color='semantic.text.primary'>Takeaways</Text>
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

          <Divider variant='section' />

          <Footer />

          {/* FIFTH SECTION REFLECTIONS CLOSE*/}
        </Box>
      </Grid>
    </>
  );
};

export default CianaResearchPage;
