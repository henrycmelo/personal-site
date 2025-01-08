import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FullScreenSection from "../components/FullScreenSection";
import {
  Box,
  VStack,
  Text,
  Image,
  Grid,
  GridItem,
  Divider,
  HStack,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Flex,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import VerticalProgressBar from "../components/VerticalProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faListCheck,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { MdCheckCircle } from "react-icons/md";
import problemImage from "../assets/ciana_research/problem.svg";
import goalImage from "../assets/ciana_research/goal.svg";
import questionImage from "../assets/ciana_research/question.svg";
import answerImage from "../assets/ciana_research/answer.svg";
import gantChart from "../assets/ciana_research/ganttChart.png";
import DividerSection from "../components/DividerSection";
import objectivesImage from "../assets/ciana_research/objectives.svg"
import researchQuestionsImage from "../assets/ciana_research/researchquestions.svg"
import targetAudienceImage from "../assets/ciana_research/targetaudience.svg"
import methodologyImage from "../assets/ciana_research/methodology.svg"
import toolsImage from "../assets/ciana_research/tools.svg"
import recruitingImage from "../assets/ciana_research/recruiting.svg"

const CianaResearch = () => {
  const { capitalizeEachWord } = useAlertContext();
  const sections = [
    { id: "theproject", label: "The Project" },
    { id: "planning", label: "Planning" },
    { id: "datacollection", label: "Data Collection" },
    { id: "analysis", label: "Analysis" },
    { id: "synthesis", label: "Synthesis" },
    
  ];

  const findId = (label) => {
    if (!sections) {
      throw new Error("Section array is not defined");
    }

    const sectionObject = sections.find(
      (section) => section.label?.toLowerCase() === label.toLowerCase()
    );

    if (!sectionObject) {
      console.error(`No section found for label: ${label}`);
      return null;
    }

    return sectionObject.id;
  };
  return (
    <>
      <Header />

      <FullScreenSection>
        <VStack color="semantic.text.primary" alignItems="start" pb={16}>
          <Text as="h1" textStyle={"h1"}>
            {" "}
            {capitalizeEachWord("digital Safety Workshops")}
          </Text>
          <Text as="h2" textStyle={"h2"}>
            {" "}
            {capitalizeEachWord("UX research case study")}
          </Text>
          <Text as="hp" textStyle={"p"}>
            {" "}
            {capitalizeEachWord(
              "Empowering Parents in Corona, Queens with Digital Safety Knowledge"
            )}
          </Text>
          <Text as="p" textStyle={"p"}>
            2024
          </Text>
          <Box
            w={{ base: "4/3", md: "100%" }}
            borderRadius="30px"
            overflow="hidden"
            h={"30%"}
          >
            <Image
              src={"https://dummyimage.com/1280x400/fff/aaa"}
              alt="cianalogo"
              objectFit="cover"
              w="100%"
            />
          </Box>
          <Grid
            w={"100%"}
            templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
            gap={{ base: 2, md: 24 }}
          >
            <GridItem w={{ base: "50%", md: "100%" }}>
              <VStack alignItems="start">
                <Text as="p" textStyle="pbold">
                  Client
                </Text>
                <Divider variant="thick" />
                <Text as="p" textStyle={"p"}>
                  Lorem ipsum dolor sit amet
                </Text>
              </VStack>
            </GridItem>
            <GridItem w="100%">
              <VStack alignItems="start">
                <Text as="p" textStyle="pbold">
                  Role
                </Text>
                <Divider variant="thick" />
                <Text as="p" textStyle={"p"}>
                  Lorem ipsum dolor sit amet
                </Text>
              </VStack>
            </GridItem>
            <GridItem w="100%">
              <VStack alignItems="start">
                <Text as="p" textStyle="pbold">
                  Duration
                </Text>
                <Divider variant="thick" />
                <Text as="p" textStyle={"p"}>
                  Lorem ipsum dolor sit amet
                </Text>
              </VStack>
            </GridItem>
            <GridItem w="100%">
              <VStack alignItems="start">
                <Text as="p" textStyle="pbold">
                  Tools
                </Text>
                <Divider variant="thick" />
                <Text as="p" textStyle={"p"}>
                  Lorem ipsum dolor sit amet
                </Text>
              </VStack>
            </GridItem>

            <GridItem w="100%">
              <VStack alignItems="start">
                <Text as="p" textStyle="pbold">
                  Skills
                </Text>
                <Divider variant="thick" />
                <Text as="p" textStyle={"p"}>
                  Lorem ipsum dolor sit amet
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </VStack>
      </FullScreenSection>

      <Divider variant="section" />

      <Grid
        templateColumns={{ base: "1fr", md: "250px 3px 1fr" }}
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
          <VerticalProgressBar sections={sections} />
        </Box>
        <Divider orientation="vertical" variant="thick" />

        <Box overflowY="auto" height={"100%"}>
          {/* ALL CONTENT HERE */}

          {/* FIRST SECTION OVERVIEW*/}
          <section>
            <Box id={findId("the project")}>
              <Box px={12}>
                <VStack alignItems="start" pt={12}>
                  <Text textStyle="h2">Overview</Text>

                  <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={6}
                  >
                    {/* Text Columns */}
                    <GridItem>
                      <Box pb={4}>
                        <Text textStyle="pbold">
                          {"Background".toUpperCase()}
                        </Text>
                        <Text textStyle="p">
                          Evaluate and improve digital safety workshops'
                          effectiveness for parents
                        </Text>
                      </Box>

                      <Box pb={4}>
                        <Text textStyle="pbold">
                          {"Relevance".toUpperCase()}
                        </Text>
                        <Text textStyle="p">
                          Evaluate and improve digital safety workshops'
                          effectiveness for parents
                        </Text>
                      </Box>

                      <Box pb={4}>
                        <Text textStyle="pbold">
                          {"My impact".toUpperCase()}
                        </Text>
                        <Text textStyle="p">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam hendrerit nisi sed sollicitudin
                          pellentesque.
                        </Text>
                      </Box>
                    </GridItem>

                    {/* image Column */}
                    <GridItem>
                      <Box>
                        <Image
                          src="https://bit.ly/naruto-sage"
                          alt="Placeholder"
                          objectFit="cover"
                          width="100%"
                          height="100%" // Makes the image fill the available space
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
                  <Text textStyle="h2">Quick Stats</Text>

                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={6}
                    textAlign={"center"}
                  >
                    <GridItem>
                      <Box pb={4}>
                        <HStack
                          color={"semantic.text.primary"}
                          align={"center"}
                          justifyContent={"center"}
                        >
                          <FontAwesomeIcon icon={faUserGroup} size="xl" />
                          <Text as="p" textStyle="h3">
                            7
                          </Text>
                        </HStack>

                        <Text textStyle="p">{"Total Interviews"}</Text>
                      </Box>
                    </GridItem>

                    {/* Text Column 2 */}
                    <GridItem>
                      <Box pb={4}>
                        <HStack
                          color={"primary"}
                          align={"center"}
                          justifyContent={"center"}
                        >
                          <FontAwesomeIcon icon={faListCheck} size="xl" />
                          <Text as="p" textStyle="h3">
                            8
                          </Text>
                        </HStack>
                        <Text textStyle="p">{"Identified themes"}</Text>
                      </Box>
                    </GridItem>

                    {/* Text Column 4 */}
                    <GridItem>
                      <Box pb={4}>
                        <HStack
                          color={"primary"}
                          align={"center"}
                          justifyContent={"center"}
                        >
                          <FontAwesomeIcon icon={faLightbulb} size="xl" />
                          <Text as="p" textStyle="h3">
                            4
                          </Text>
                        </HStack>
                        <Text textStyle="p">{"Recommendations"}</Text>
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
              >
                {/* Text Column 1 */}
                <GridItem>
                  <Box pb={4}>
                    <Text textStyle="pbold" textAlign={"center"}>
                      {"Problem".toUpperCase()}
                    </Text>
                    <Box boxSize={"400px"}>
                      <Image src={problemImage} />
                    </Box>
                    <Text textStyle="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam hendrerit nisi sed sollicitudin pellentesque. Nunc
                      posuere purus rhoncus pulvinar aliquam. Ut aliquet
                      tristique nisl vitae volutpat. Nulla aliquet porttitor
                      venenatis. Donec a dui et dui fringilla consectetur id nec
                      massa
                    </Text>
                  </Box>
                </GridItem>

                {/* Text Column 2 */}
                <GridItem>
                  <Box pb={4}>
                    <Text textStyle="pbold" textAlign={"center"}>
                      {"Goal".toUpperCase()}
                    </Text>
                    <Box boxSize={"400px"}>
                      <Image src={goalImage} />
                    </Box>
                    <List textStyle={"p"}>
                      <ListItem>
                        <ListIcon
                          as={MdCheckCircle}
                          color={"semantic.text.primary"}
                        />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam hendrerit nisi sed sollicitudin pellentesque.
                      </ListItem>
                      <ListItem>
                        <ListIcon
                          as={MdCheckCircle}
                          color={"semantic.text.primary"}
                        />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam hendrerit nisi sed sollicitudin pellentesque.
                      </ListItem>
                    </List>
                  </Box>
                </GridItem>
              </Grid>

              {/* How research change */}

              <Box w={"100%"} p={12}>
                <Text as="h2" textStyle={"pbold"} pb={4}>
                  {" "}
                  {"how research changed the problem direction".toUpperCase()}
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
                  >
                    <GridItem>
                      <Box pb={4}>
                        <Text textStyle="pbold" textAlign={"center"}>
                          {"Question".toUpperCase()}
                        </Text>
                        <Box boxSize={"400px"}>
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
                      <Box pb={4}>
                        <Text textStyle="pbold" textAlign={"center"}>
                          {"Answer".toUpperCase()}
                        </Text>
                        <Box boxSize={"400px"}>
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

              <Box w={"100%"} p={12}>
                <Text as="h2" textStyle={"pbold"} pb={4}>
                  {" "}
                  {"impact".toUpperCase()}
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

                <Text as="p" textStyle={"pbold"}>
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

              <Box w={"100%"} p={12}>
                <Text as="h2" textStyle={"pbold"} pb={4}>
                  {" "}
                  {"process".toUpperCase()}
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
              >
                <Text as="h2" textStyle="pbold" textAlign="center" mb={6}>
                  {"Process Breakdown".toUpperCase()}
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
                <VStack alignItems="start" pt={12}>
                  <Text textStyle="h2">Planning</Text>
                  <Text as="p" textStyle="p" pb={4}>
                    This section outlines the objectives, research questions,
                    the target audience and methodology used to design the
                    study.{" "}
                  </Text>

                  {/* Items */}
                  <VStack alignItems="start">
                    <Text as="p" textStyle={"pbold"}>
                      Objectives
                    </Text>
                    <Flex gap={6}>
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

                    <Text as="p" textStyle={"pbold"}>
                      Research questions
                    </Text>
                    <Flex gap={6}>
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

                    <Text as="p" textStyle={"pbold"}>
                      Target audience
                    </Text>
                    <Flex gap={6}>
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

                    <Text as="p" textStyle={"pbold"}>
                      Methodology
                    </Text>
                    <Flex gap={6}>
                      <Image src={methodologyImage} alt="" w={"100px"} />
                      <UnorderedList textStyle={"p"} pb={4}>
                        <ListItem>Post-workshop user interviews.</ListItem>
                        <ListItem>
                          Open-ended questions designed to explore motivations,
                          benefits, frustrations, and suggestions.
                        </ListItem>
                      </UnorderedList>
                    </Flex>

                    <Text as="p" textStyle={"pbold"}>
                      Tools & Tecniques
                    </Text>
                    <Flex gap={6}>
                      <Image src={toolsImage} alt="" w={"100px"} />
                      <UnorderedList textStyle={"p"} pb={4}>
                        <ListItem>
                          <HStack>
                            <Text>
                              Interview scripts for consistency using Google
                              Docs.
                            </Text>
                            <a
                              href="https://docs.google.com/document/d/1wFE8wP12O8VIpqfgRvT70KguuOMoSqW5JLeGpY3ay60/edit?tab=t.0"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Text
                                as={"p"}
                                textStyle={"p"}
                                decoration={"underline"}
                              >
                                (View Script here.)
                              </Text>
                            </a>
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
            <Box id={findId("datacollection")}>
              <Box px={12}>
                <DividerSection>Phase 2 </DividerSection>
                <VStack alignItems="start" pt={12}>
                  <Text textStyle="h2">Data Collection</Text>
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
                      <Text as="i" textStyle="h3">
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
                        <Text textStyle="pbold" textAlign={"center"}>
                          {"Recruiting".toUpperCase()}
                        </Text>
                        <Box boxSize={"400px"}>
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
                        <Text textStyle="pbold" textAlign={"center"}>
                          {"Interviews".toUpperCase()}
                        </Text>
                        <Box boxSize={"400px"}>
                          <Image src={recruitingImage} />
                        </Box>
                        <Text textStyle="p" textAlign={"left"}>
                        Structured post-workshop interviews were conducted with open-ended questions to gather feedback on participants' experiences, motivations, and suggestions. Some participants were initially hesitant, fearing they might be quizzed, but were reassured that the goal was to collect feedback, not assess their knowledge. The interviews were recorded (with consent) and transcribed for accurate analysis to ensure detailed documentation for synthesis.
                        </Text>
                      </Box>
                    </GridItem>

                    <GridItem>
                      <Box pb={4}>
                        <Text textStyle="pbold" textAlign={"center"}>
                          {"Documentation".toUpperCase()}
                        </Text>
                        <Box boxSize={"400px"}>
                          <Image src={recruitingImage} />
                        </Box>
                        <Text textStyle="p" textAlign={"left"} >
                        The interviews were recorded (with participant consent) and later transcribed for accurate analysis. This documentation ensured that every piece of feedback was captured in detail and could be referenced during the synthesis and analysis phases.
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
            <Box id={findId("analysis")}>
              <Box px={12}>
                <DividerSection>Phase 3 </DividerSection>
                <VStack alignItems="start" pt={12}>
                  <Text textStyle="h2">Analysis</Text>
                </VStack>
              </Box>
            </Box>
          </section>

          {/* FOURTH SECTION ANALYSIS CLOSE*/}
          <Divider variant="section" />

          {/* FIFTH SECTION SYNTHESIS OPEN*/}
          <section>
            <Box id={findId("synthesis")}>
              <Box px={12}>
                <DividerSection>Phase 4 </DividerSection>
                <VStack alignItems="start" pt={12}>
                  <Text textStyle="h2">Synthesis</Text>
                </VStack>
              </Box>
            </Box>
          </section>

          {/* FIFTH SECTION SYNTHESIS CLOSE*/}
        </Box>
      </Grid>
    </>
  );
};

export default CianaResearch;
