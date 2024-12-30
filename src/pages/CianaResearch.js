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
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import VerticalProgressBar from "../components/VerticalProgressBar";

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
        <VStack color="semantic.text.primary" alignItems="start">
          <Text as="h1" textStyle={"h1"}>
            {" "}
            {capitalizeEachWord("digital Safety Workshops")}
          </Text>
          <Text as="h2" textStyle={"h2"}>
            {" "}
            {capitalizeEachWord("UX research case study")}
          </Text>
          <Text as="h3" textStyle={"caption"}>
            2024
          </Text>
          <Box
            w={{ base: "4/3", md: "100%" }}
            borderRadius="30px"
            overflow="hidden"
          >
            <Image
              src={"https://bit.ly/naruto-sage"}
              alt="cianalogo"
              objectFit="cover"
              w="100%"
            />
          </Box>
          <Grid w={"100%"} templateColumns={{base:"1fr", md:"repeat(4, 1fr)"}} gap={{base:2, md:24}}>
            <GridItem w="100%">
              <VStack alignItems="start">
                <Text as="p" textStyle="pbold">
                  Role
                </Text>
                <Text as="p" textStyle={"p"} >
                Lorem ipsum dolor sit amet
                </Text>
              </VStack>
            </GridItem>
            <GridItem w="100%">
              <VStack alignItems="start">
                <Text as="p" textStyle="pbold">
                  Duration
                </Text>
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
                <Text as="p" textStyle={"p"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. 
                </Text>
              </VStack>
            </GridItem>

            <GridItem w="100%">
              <VStack alignItems="start">
                <Text as="p" textStyle="pbold">
                  Skills
                </Text>
                <Text as="p" textStyle={"p"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. nec massa
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </VStack>

        <Divider variant="thick" />
        <Grid
          templateColumns={{base:"1fr", md:"200px 1fr"}}
          gap={6}
          height="100vh"
          alignItems="start"
          w={"100%"}
        >
          <Box display={{base:'none', md:'block'}} visibility={{base:'hidden', md:'visible'}}>
            <VerticalProgressBar sections={sections} />
          </Box>

          <Box overflowY="scroll">

            {/* ALL CONTENT HERE */}
            <Box id={findId("the project")}>
              <VStack alignItems="start">
                <Text textStyle="h2">Overview</Text>
                
                <Grid templateColumns={{base:"1fr", md:"1fr 1fr"}}>

                  {/* Text Columns */}
                  <GridItem>
                    <Box pb={4}>
                      <Text textStyle='pbold' >
                        {"Client".toUpperCase()}
                      </Text>
                      <Text textStyle='p'>
                      Corona community, Queen, NY (The People’s Money grant by NYC Civic Engagement Commision)
                      </Text>
                    </Box>

                    <Box pb={4}>
                      <Text textStyle='pbold' >
                        {"Challenge".toUpperCase()}
                      </Text>
                      <Text textStyle='p' >
                      Evaluate and improve digital safety workshops' effectiveness for parents
                      </Text>
                    </Box>

                    <Box pb={4}>
                      <Text textStyle='pbold' >
                        {"My impact".toUpperCase()}
                      </Text>
                      <Text textStyle='p' >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
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

                {/* Second Grip */}

                <Grid templateColumns={{base:"1fr", md:"1fr 1fr"}}>

                  {/* Text Column 1 */}
                  <GridItem>
                    <Box pb={4}>
                      <Text textStyle='pbold' >
                        {"Goal".toUpperCase()}
                      </Text>
                      <Text textStyle='p'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa
                      </Text>
                    </Box>

                    
                  </GridItem>

                  {/* Text Column 2 */}
                  <GridItem>
                  <Box pb={4}>
                      <Text textStyle='pbold' >
                        {"Problem".toUpperCase()}
                      </Text>
                      <Text textStyle='p'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa
                      </Text>
                    </Box>
                </GridItem>
                </Grid>


              </VStack>
            </Box>
          </Box>
        </Grid>
      </FullScreenSection>
    </>
  );
};

export default CianaResearch;
