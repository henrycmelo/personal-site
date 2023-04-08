import {
    Heading,

    Text,
   VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import FullScreenSection from "../components/FullScreenSection";
  import ScrollReveal from "../hooks/ScrollReveal";

const ProjectTitle=({client, title, role, tools, date})=>{

    return(
        <FullScreenSection
        backgroundColor="dark"
        isDarkBackground
        alignItems={"center"}
        spacing={8}
        width="100vw"
        p={{ base: 8, md: 32 }}
      >
        <VStack gap={3} alignItems={"center"} justifyContent={"center"}>
          <Heading  as='h2' textStyle="h2" fontSize={{base:"4xl", md:"6xl"}} align={"center"}>
            {client.toUpperCase()}
          </Heading>
          <ScrollReveal>
            <Text  fontSize={{base:"2xl", md:"4xl"}} textStyle="h6" textColor={"blue"} align={'center'} >
         {title}
        </Text></ScrollReveal>

          <Text  fontSize={{base:"lg", md:"2xl"}} textStyle="body" align={"center"}>
            {" "}
            <span style={{ color: "#007183" }}>
              <b>Role:</b>
            </span>{" "}
            {role}
          </Text>

          <Text fontSize={{base:"lg", md:"2xl"}} textStyle="body" align={"center"}>
            {" "}
            <span style={{ color: "#007183" }}>
              <b>Tools:</b>
            </span>{" "}
            {tools}
          </Text>
          <Text fontSize={{base:"lg", md:"2xl"}} textStyle="body" align={"center"}>
            {" "}
            <span style={{ color: "#007183" }}>
              <b>Date: </b>
            </span>
            {date}
          </Text>
        </VStack>
      </FullScreenSection>

    )
}





export default ProjectTitle;