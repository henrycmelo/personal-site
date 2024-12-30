import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FullScreenSection from "../components/FullScreenSection";
import { Box, VStack, Text, Image, Grid, GridItem, Divider } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";

const CianaResearch = () => {
  const { capitalizeEachWord } = useAlertContext();
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
          <Grid w={"100%"}  templateColumns="repeat(3, 1fr)" gap={24} >
            <GridItem w='100%'>
                <VStack alignItems='start'>
                    <Text as='p' textStyle='pbold' >
                        About the product
                    </Text>
                    <Text as='p' textStyle={'p'}>CIANA is not for profit organization that offer different social services to inmigrants</Text>
                </VStack>
            </GridItem>
            <GridItem w='100%'><VStack alignItems='start'>
                    <Text as='p' textStyle='pbold' >
                        Role
                    </Text>
                    <Text as='p' textStyle={'p'}>UX Researcher</Text>
                </VStack>
                </GridItem>
            <GridItem w='100%'><VStack alignItems='start'>
                    <Text as='p' textStyle='pbold' >
                        Main Project Goal
                    </Text>
                    <Text as='p' textStyle={'p'}>Identify key themes and provide actionable recommendations to improve future workshops in the grant report for the citywide Participatory Budgeting</Text>
                </VStack>
                </GridItem>
          </Grid>

        </VStack>

        <Divider variant='thick'  />
      </FullScreenSection>
    </>
  );
};

export default CianaResearch;
