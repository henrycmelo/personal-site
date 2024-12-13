import React from "react";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";
import "animate.css";
import { dataLanding } from "../utils/dataLanding";
import CustomizedButton from "./CustomizedButton";
import SecondaryButton from "./SecondaryButton";
import projects from "../utils/projects";
import Cards from "./Cards";

const CaseStudySection = () => {
  
  const titleText = "Case Studies";

  return (
    <FullScreenSection isBlackBackground  alignItems="stretch"
   >
      <HStack justify={'center'} w={"100%"}>
        
        <Text
          as="h2"
          color="semantic.text.button"
          textStyle="h2"
          className="heading-animation-two"
        >
          {titleText.toUpperCase()}
        </Text>
        
        
      </HStack>
      <VStack>
        {projects.map((project, index)=>(
          <Cards key={index} title={project.title} description={project.description} imageSrc={project.getImageSrc()} role={Array.isArray(project.role)?(project.role.map((role) => role)) : (null)} date={project.date} badgeAlt={project.title} />
        ))}
      </VStack>

    </FullScreenSection>
  );
};

export default CaseStudySection;