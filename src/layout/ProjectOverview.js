import {
  Heading,
  
  Text,

  VStack,
} from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";

const ProjectOverview = ({ client,description, challenge, solution, backgroundColor }) => {
  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      alignItems={"center"}
      spacing={8}
      width="100vw"
      p={{ base: 8, md: 32 }}
    >
      <VStack alignItems={"center"} justifyContent={"center"} width={{base:'80vw', md:'60vw'}}>
        <ScrollReveal><Heading as="h2" fontSize={{base:"4xl", md:"6xl"}} paddingBottom={12} align={'center'}>
          PROJECT OVERVIEW
        </Heading></ScrollReveal>

        <ScrollReveal><Text  fontSize={{base:"2xl", md:"4xl"}} textStyle="h6" textColor={"blue"} paddingBottom={4}>
          Client
        </Text></ScrollReveal>
        <ScrollReveal>
        <Text fontSize={{base:"lg", md:"2xl"}} textStyle='body' textColor={"dark"}  textAlign={'center'} paddingBottom={8}>
            <Text as='b'>{client.toUpperCase()}</Text> {description}
        </Text>
        </ScrollReveal>

        <ScrollReveal><Text  fontSize={{base:"2xl", md:"4xl"}} textStyle="h6" textColor={"blue"} paddingBottom={4}>
         Challenge
        </Text></ScrollReveal>
        <ScrollReveal>
        <Text fontSize={{base:"lg", md:"2xl"}} textStyle='body' textColor={"dark"}  textAlign={'center'} paddingBottom={8}>
            {challenge}
        </Text>
        </ScrollReveal>

        <ScrollReveal><Text  fontSize={{base:"2xl", md:"4xl"}} textStyle="h6" textColor={"blue"} paddingBottom={4}>
         Solution
        </Text></ScrollReveal>
        <ScrollReveal>
        <Text fontSize={{base:"lg", md:"2xl"}} textStyle='body' textColor={"dark"}  textAlign={'center'}>
            {solution}
        </Text>
        </ScrollReveal>


       
       
      </VStack>
    </FullScreenSection>
  );
};

export default ProjectOverview;
