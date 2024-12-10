import React from "react";
import { Heading, HStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";
import "animate.css";
import { dataLanding } from "../utils/dataLanding";
import CustomizedButton from "./CustomizedButton";
import SecondaryButton from "./SecondaryButton";

const CaseStudySection = () => {
  const { colorMode } = useAlertContext();
  const titleText = "Case Studies";

  return (
    <FullScreenSection isBlackBackground  alignItems="stretch"
   >
      <HStack justify={'space-between'} w={"100%"}>
        
        <Text
          as="h2"
          color="semantic.text.button"
          textStyle="h2"
          className="heading-animation-two"
        >
          {titleText.toUpperCase()}
        </Text>
        <SecondaryButton className="heading-animation-three">
          {dataLanding.buttonText}
        </SecondaryButton>
        
      </HStack>
    </FullScreenSection>
  );
};

export default CaseStudySection;