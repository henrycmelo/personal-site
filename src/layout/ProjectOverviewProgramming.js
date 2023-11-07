import FullScreenSection from "../components/FullScreenSection";
import {
    Heading,
    List,
    ListItem,
    ListIcon,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import ScrollReveal from "../hooks/ScrollReveal";
  import { MdCheckCircle } from "react-icons/md";
  import { useAlertContext } from "../context/alertContext";

const ProjectOverviewProgamming= ({
    description,
    challenge,
    backgroundColor,
    features
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
      alignItems={"center"}
      justifyContent={"center"}
      width={{ base: "80vw", md: "60vw" }}
    >
      <ScrollReveal>
        <Heading
          as="h2"
          fontSize={{ base: "4xl", md: "6xl" }}
          paddingBottom={12}
          align={"center"}
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
          Description
        </Text>
      </ScrollReveal>
      <ScrollReveal>
        <Text
          fontSize={{ base: "lg", md: "2xl" }}
          textStyle="body"
          textColor={colorMode === "light" ? "dark" : "light"}
          textAlign={"center"}
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
          Development process
        </Text>
      </ScrollReveal>
      <ScrollReveal>
        <Text
          fontSize={{ base: "lg", md: "2xl" }}
          textStyle="body"
          textColor={colorMode === "light" ? "dark" : "light"}
          textAlign={"center"}
          paddingBottom={8}
        >
          {challenge}
        </Text>
      </ScrollReveal>

      <ScrollReveal>
        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
          textStyle="h6"
          textColor={colorMode === "light" ? "blue" : "blueDarkMode"}
          paddingBottom={4}
        >
          Features
        </Text>
      </ScrollReveal>

      <ScrollReveal>
        <List
          spacing={1}
          fontSize={{ base: "lg", md: "2xl" }}
          color={colorMode === "light" ? "dark" : "light"}
          textStyle="body"
          pb={8}
          textAlign={"center"}
        >
            {features.map((feature, index)=>(
                <ListItem key={index}>
                    <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue" : "blueDarkMode"}
                    />
                    {feature}
                </ListItem>
            ))}
        
        </List>
      </ScrollReveal>

    </VStack>
    </FullScreenSection>
  ) 
    
      }

export default ProjectOverviewProgamming;