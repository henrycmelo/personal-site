import {
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  CardFooter,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";
import { useAlertContext } from "../context/alertContext";

const Define = ({
  backgroundColor,
  type,
  description,
  userPersonasData
}) => {
  const {  colorMode } = useAlertContext();
  const paragraphs = description.split('\n');
  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      alignItems={"center"}
      spacing={8}
      color={colorMode==='light'? "dark":'light'}
      width="100vw"
      p={{ base: 8, md: 32 }}
    >
    
        <VStack
          alignItems={"left"}
          justifyContent={"left"}
          width={{ base: "80vw", md: "60vw" }}
        >
          <ScrollReveal>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight={'thin'}
              paddingBottom={12}
              align={"left"}
            >
              PHASE 2: DEFINE
            </Heading>
          </ScrollReveal>

          <ScrollReveal>
          <Text
             align={'left'}
             fontSize={{base:"2xl", md:"4xl"}}
             textStyle="h6"
             textColor={colorMode==='light'?'blue':'blueDarkMode'}
             paddingBottom={4}
             
            
          >
            {type}
          </Text>
        </ScrollReveal>
        <ScrollReveal>
        {paragraphs.map((paragraph, index) => (
            <Text
              key={index}
              fontSize={{ base: "lg", md: "2xl" }}
              textStyle="body"
              textColor={colorMode === "light" ? "dark" : "light"}
              textAlign={"left"}
              paddingBottom={8}
            >
              {paragraph}
            </Text>
          ))}
        </ScrollReveal>

        <ScrollReveal>
        {paragraphs.map((paragraph, index) => (
            <Text
              key={index}
              fontSize={{ base: "lg", md: "2xl" }}
              textStyle="body"
              textColor={colorMode === "light" ? "dark" : "light"}
              textAlign={"left"}
              paddingBottom={8}
            >
              {paragraph}
            </Text>
          ))}
        </ScrollReveal>

        

          
        </VStack>
  
    </FullScreenSection>
  );
};

export default Define;
