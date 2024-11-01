import {
  Heading,
  ListItem,
  Text,
  VStack,
  List,
  ListIcon
} from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";
import { useAlertContext } from "../context/alertContext";
import { MdCheckCircle } from "react-icons/md";

const ProjectOverview = ({
  description,
  challenge,
  solution,
  backgroundColor,
}) => {
  const { colorMode } = useAlertContext();
  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      alignItems={"center"}
      color={colorMode === "light" ? "dark" : "light"}
      spacing={8}
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
              PROJECT OVERVIEW
            </Heading>
          </ScrollReveal>

          <ScrollReveal>
            <Text
              fontSize={{ base: "2xl", md: "4xl" }}
              textStyle="h6"
              textColor={colorMode === "light" ? "blue" : "blueDarkMode"}
              paddingBottom={4}
            >
              Problem
            </Text>
          </ScrollReveal>
          <ScrollReveal>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              textStyle="body"
              textColor={colorMode === "light" ? "dark" : "light"}
              textAlign={"left"}
              paddingBottom={8}
            >
              {description}
            </Text>
          </ScrollReveal>

          <ScrollReveal>
            <Text
              fontSize={{ base: "2xl", md: "4xl" }}
              textStyle="h6"
              textColor={colorMode === "light" ? "blue" : "blueDarkMode"}
              paddingBottom={4}
            >
              Objective
            </Text>
          </ScrollReveal>
          <ScrollReveal>
          <List>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              textStyle="body"
              textColor={colorMode === "light" ? "dark" : "light"}
              textAlign={"left"}
              paddingBottom={8}
            >
              
                {challenge && challenge.map((item, index)=>(
                  <ListItem key={index}>
                    <ListIcon as={MdCheckCircle} color={colorMode==='light'?'blue':'blueDarkMode'}/>
                      {item}
                  </ListItem>
                ))}

            
            </Text>
            </List>
          </ScrollReveal>

          <ScrollReveal>
            <Text
              fontSize={{ base: "2xl", md: "4xl" }}
              textStyle="h6"
              textColor={colorMode === "light" ? "blue" : "blueDarkMode"}
              paddingBottom={4}
            >
              Solution
            </Text>
          </ScrollReveal>
          <ScrollReveal>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              textStyle="body"
              textColor={colorMode === "light" ? "dark" : "light"}
              textAlign={"left"}
            >
              {solution}
            </Text>
          </ScrollReveal>
        </VStack>
      
    </FullScreenSection>
  );
};

export default ProjectOverview;
