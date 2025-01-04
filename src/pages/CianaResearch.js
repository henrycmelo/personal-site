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
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import VerticalProgressBar from "../components/VerticalProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faListCheck, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { MdCheckCircle } from "react-icons/md";
import problemImage from "../assets/problem.svg"
import goalImage from "../assets/goal.svg"


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
          templateColumns={{ base: "1fr", md: "250px 10px 1fr" }}
        
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
            <Box id={findId("the project")} px={12}>
              <VStack alignItems="start" pt={12}>
                <Text textStyle="h2">Overview</Text>

                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
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

                {/* Quick stats */}

                <Box
                  backgroundColor={"semantic.background.secondary"}
                  w={"100%"}
                  p={8}
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
                            color={"semantic.accent"}
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
                            color={"semantic.accent"}
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
                            color={"semantic.accent"}
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

                {/* Second Grid */}

                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} pt={12}>
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
                            color={"semantic.accent"}
                          />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam hendrerit nisi sed sollicitudin
                          pellentesque.
                        </ListItem>
                        <ListItem>
                          <ListIcon
                            as={MdCheckCircle}
                            color={"semantic.accent"}
                          />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam hendrerit nisi sed sollicitudin
                          pellentesque.
                        </ListItem>
                      </List>
                    </Box>
                  </GridItem>

                 
                </Grid>
              </VStack>

            </Box>
             {/* FIRST SECTION CLOSE */}
            <Divider variant="thick" />

            {/* SECOND SECTION OPEN */}

            <Box id={findId("analysis")}>
              <VStack alignItems="start">
                <Text textStyle="h2">Overview</Text>

                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
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

                {/* Quick stats */}

                <Box
                  backgroundColor={"semantic.background.secondary"}
                  w={"100%"}
                  p={8}
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
                            color={"semantic.accent"}
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
                            color={"semantic.accent"}
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
                            color={"semantic.accent"}
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

                {/* Second Grid */}

                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
                  {/* Text Column 1 */}
                  <GridItem>
                    <Box pb={4}>
                      <Text textStyle="pbold">
                        {"Research Goal".toUpperCase()}
                      </Text>
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
                      <Text textStyle="pbold">
                        {"Research questions".toUpperCase()}
                      </Text>
                      <List textStyle={"p"}>
                        <ListItem>
                          <ListIcon
                            as={MdCheckCircle}
                            color={"semantic.accent"}
                          />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam hendrerit nisi sed sollicitudin
                          pellentesque.
                        </ListItem>
                        <ListItem>
                          <ListIcon
                            as={MdCheckCircle}
                            color={"semantic.accent"}
                          />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam hendrerit nisi sed sollicitudin
                          pellentesque.
                        </ListItem>
                      </List>
                    </Box>
                  </GridItem>

                 
                </Grid>
              </VStack>

            </Box>

            {/* SECOND PART CONTENT CLOSE */}

          </Box>
        </Grid>
      
    </>
  );
};

export default CianaResearch;
