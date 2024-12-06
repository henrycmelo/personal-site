import React from "react";
import { Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";
import "animate.css";
import { dataLanding } from "../utils/dataLanding";
import CustomizedButton from "./CustomizedButton";

const LandingSection = () => {
  const { colorMode } = useAlertContext();

  return (
    <FullScreenSection isCentered isLanding>
      <VStack>
        
        <Text
          as="h1"
          color="semantic.text.primary"
          textStyle="h1"
          className="heading-animation-two"
        >
          {dataLanding.bio1}
        </Text>
        <Text
          as="h2"
          color="semantic.text.secondary"
          textStyle="h2"
          pb="0.3em"
          className="heading-animation-three"
        >
          {dataLanding.bio2}
        </Text>
        <CustomizedButton>
          {dataLanding.buttonText}
        </CustomizedButton>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;