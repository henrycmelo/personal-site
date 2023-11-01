import {
    Heading,

    Text,
   VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import FullScreenSection from "../components/FullScreenSection";
  import ScrollReveal from "../hooks/ScrollReveal";
  import { useAlertContext } from "../context/alertContext";
import { formatDateRange } from "../utils/formatDate";

const ProjectTitle=({client, title, role, tools, dateInititial, dateFinal})=>{
  const {  colorMode } = useAlertContext();

    return(
        <FullScreenSection
        layerStyle={colorMode==='light'?'normalDark':'gradientBack'}
        color='light'
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
            <Text  fontSize={{base:"2xl", md:"4xl"}} textStyle="h6" textColor={colorMode==='light'?'blue':'blueDarkMode'} align={'center'} >
         {title}
        </Text></ScrollReveal>

          <Text  fontSize={{base:"lg", md:"2xl"}} textStyle="body" align={"center"}>
            {" "}
            <span style={{ color: colorMode==='light'? "#007183" : '#00A4BD'}}>
              <b>Role:</b>
            </span>{" "}
            {role}
          </Text>

          <Text fontSize={{base:"lg", md:"2xl"}} textStyle="body" align={"center"}>
            {" "}
            <span style={{ color: colorMode==='light'? "#007183" : '#00A4BD'}}>
              <b>Tools:</b>
            </span>{" "}
            {tools}
          </Text>
          <Text fontSize={{base:"lg", md:"2xl"}} textStyle="body" align={"center"}>
            {" "}
            <span style={{ color: colorMode==='light'? "#007183" : '#00A4BD' }}>
              <b>Date: </b>
            </span>
            {formatDateRange(dateInititial, dateFinal)}
          </Text>
        </VStack>
      </FullScreenSection>

    )
}





export default ProjectTitle;