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

} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import VerticalProgressBar from "../components/VerticalProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faListCheck, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { MdCheckCircle } from "react-icons/md";
import problemImage from "../assets/problem.svg"
import goalImage from "../assets/goal.svg"
import questionImage from '../assets/question.svg'
import answerImage from '../assets/answer.svg'
import Flowchart from "../components/FlowChart";


const CianaResearch = () => {
  const { capitalizeEachWord } = useAlertContext();
  const sections = [
    { id: "theproject", label: "The Project" },
    { id: "analysis", label: "Analysis" },
    { id: "design", label: "Design" },
    { id: "deliver", label: "Deliver" },
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
          overflow={'hidden'}
          
        >
          <Box
            display={{ base: "none", md: "block" }}
            visibility={{ base: "hidden", md: "visible" }}
            position={'sticky'}
            top='4'
            height='fit-content'
            pt={12}
            
            
            
          >
            <VerticalProgressBar sections={sections} />
          </Box>
          <Divider orientation="vertical" variant="thick" />

          <Box overflowY="auto" height={'100%'} >
            {/* ALL CONTENT HERE */}

            {/* FIRST SECTION OVERVIEW*/}
            <Box id={findId("the project")} >
                
            <Box px={12}>
              <VStack alignItems="start" pt={12}>
                <Text textStyle="h2">Overview</Text>

                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
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
                      <Text textStyle="pbold">{"Relevance".toUpperCase()}</Text>
                      <Text textStyle="p">
                        Evaluate and improve digital safety workshops'
                        effectiveness for parents
                      </Text>
                    </Box>

                    <Box pb={4}>
                      <Text textStyle="pbold">{"My impact".toUpperCase()}</Text>
                      <Text textStyle="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam hendrerit nisi sed sollicitudin pellentesque.
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

                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} pt={12} px={12}>
                  {/* Text Column 1 */}
                  <GridItem>
                    <Box pb={4}>
                      <Text textStyle="pbold" textAlign={'center'}>
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
                        venenatis. Donec a dui et dui fringilla consectetur id
                        nec massa
                      </Text>
                    </Box>
                  </GridItem>

                 

                  {/* Text Column 2 */}
                  <GridItem>
                    <Box pb={4}>
                      <Text textStyle="pbold" textAlign={'center'}>
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam hendrerit nisi sed sollicitudin
                          pellentesque.
                        </ListItem>
                        <ListItem>
                          <ListIcon
                            as={MdCheckCircle}
                            color={"semantic.text.primary"}
                          />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam hendrerit nisi sed sollicitudin
                          pellentesque.
                        </ListItem>
                      </List>
                    </Box>
                  </GridItem>

                 
                </Grid>

                {/* How research change */}

                <Box w={"100%"}
                  p={12}>
                    <Text as='h2' textStyle={'pbold'} pb={4}> {"how research changed the problem direction".toUpperCase()}</Text>
                    <Text as="p" textStyle={'p'}> The initial assumption was to measure behavior change through quantitative surveys, however, the qualitative post-workshop interviews revealed deeper insights about parents' motivations, challenges, and needs that surveys alone couldn't capture. This shift to qualitative research allowed us to understand not just if the workshops were effective, but why and how they impacted parents' approach to digital safety. The rich narratives and personal experiences shared by parents provided compelling evidence for the grant report and valuable insights for program improvement that went beyond mere metrics.</Text>

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
                      <Text textStyle="pbold" textAlign={'center'}>
                        {"Question".toUpperCase()}
                      </Text>
                      <Box boxSize={"400px"}>
                        <Image src={questionImage} />
                      </Box>
                      <Text textStyle="p">
                      How can we optimize digital safety workshops to effectively serve diverse community needs and demonstrate impact for future funding?
                      </Text>
                    </Box>
                  </GridItem>

                      {/* Text Column 2 */}
                      <GridItem>
                    <Box pb={4}>
                      <Text textStyle="pbold" textAlign={'center'}>
                        {"Answer".toUpperCase()}
                      </Text>
                      <Box boxSize={"400px"}>
                        <Image src={answerImage} />
                      </Box>
                      <Text textStyle="p">
                      Conduct qualitative UX research through post-workshop interviews to evaluate workshop effectiveness and identify improvement opportunities. 
                      </Text>
                    </Box>
                  </GridItem>
                      
                    </Grid>
                  </VStack>
                </Box>
 

            {/* QUESTION & SOLUTION CLOSE */}

            {/* IMPACT OPEN */}

            <Box w={"100%"}
                  p={12}>
                    <Text as='h2' textStyle={'pbold'} pb={4}> {"impact".toUpperCase()}</Text>
                    <Text as="p" textStyle={'p'} pb={4}> The research changed the strategic direction of the workshops from a quantitative metrics-focused approach to one that deeply understands parent needs and community context. This shift provides:</Text>
                    <Text as="p" textStyle={'pbold'}>Research impact:</Text>
                    <UnorderedList textStyle={'p'} pb={4}>
                        
                        <ListItem>Evidence-based recommendations that support grant requirements</ListItem>
                        <ListItem>Rich qualitative insights that inform program improvements</ListItem>
                        <ListItem>Clear framework for expanding to other communities</ListItem>
                    </UnorderedList>

                    <Text as="p" textStyle={'pbold'}>Community impact:</Text>
                    <UnorderedList textStyle={'p'} pb={4}>
                        
                        <ListItem>Parents gain practical digital safety knowledge and implementation skills</ListItem>
                        <ListItem>Improved workshop accessibility through schedule flexibility</ListItem>
                        <ListItem>Enhanced cultural relevance in content delivery</ListItem>
                    </UnorderedList>

                    <Text as="p" textStyle={'pbold'}>Program impact:</Text>
                    <UnorderedList textStyle={'p'} pb={4}>
                        
                        <ListItem>Tangible pathway for workshop improvements</ListItem>
                        <ListItem>Strong case for continued funding</ListItem>
                        <ListItem>Framework for community expansion</ListItem>
                    </UnorderedList>


                </Box>

                {/* {'IMPACT CLOSE'} */}

                {/* Process */}

                <Box w={"100%"}
                  p={12}>
                    <Text as='h2' textStyle={'pbold'} pb={4}> {"process".toUpperCase()}</Text>
                    <Text as="p" textStyle={'p'} pb={4}> The research process began with planning and research design, focusing on understanding workshop effectiveness through participant experiences. We conducted post-workshop interviews with 7 parents, ensuring a systematic approach to data collection. Each interview was documented and analyzed using qualitative research methods. Through empathy mapping, we organized participant feedback, emotions, and needs. The affinity diagram helped identify patterns and themes across interviews. These insights were then synthesized into actionable recommendations, supporting both grant reporting requirements and future program improvements.</Text>
                </Box>

                 {/* PROCESS IMAGE OPEN */}

                 <Box
                  backgroundColor={"semantic.background.secondary"}
                  w={"100%"}
                  p={12}
                  minH={"50vh"}
                >
                    <Flowchart />
                </Box>
 

            {/* PROCESS IMAGE CLOSE */}

          
              

            </Box>
            
            
             {/* FIRST SECTION CLOSE */}
            <Divider variant="thick" />

          

            

          </Box>
        </Grid>
      
    </>
  );
};

export default CianaResearch;
