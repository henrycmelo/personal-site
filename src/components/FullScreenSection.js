import * as React from "react";
import { VStack } from "@chakra-ui/react";


const FullScreenSection = ({ 
  children, 
  isCentered = false, 
  isDarkBackground = false,
  isLanding = false, 
  ...boxProps 
}) => {
  return (
    <VStack
      backgroundColor={isDarkBackground ? "semantic.background.secondary" : "semantic.background.primary"}
      alignItems={isCentered ? "center" : "start"}
      justifyContent={isCentered ? "center" : "flex-start"}
      textAlign={isCentered ? "center" : "start"}
      spacing={8}
      width="100vw"
      height= {isLanding ? "100vh" : "auto"}
      pt={48}
      pl={{ base: 8, md: 32 }}
      pb={32}
      pr={{ base: 8, md: 32 }}
    >
      <VStack  {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
