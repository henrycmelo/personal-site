import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";
import "animate.css";
import { dataLanding } from "../utils/dataLanding";

const LandingSection = () => {
  const { colorMode } = useAlertContext();
  


  return (
    
    <FullScreenSection

      backgroundColor={colorMode==='light'? "light":'dark'} 
      alignItems={{ base: "center", md: "center", xl: "center" }}
      textAlign='center'
      justify='center'
      spacing={8}
      width="100vw"
      h="100vh"
      pt={48}
      pl={{ base: 8, md: 32 }}
      pb={32}
      pr={{ base: 8, md: 32 }}
     
    >
    
     

      <VStack alignItems="center" justify="center" >
        <Heading
          color={colorMode==='light'? "blue":'grayBoldDarkMode'} 
          size="sm"
          textStyle="button"
          className="heading-animation"
        >
          {dataLanding.greeting}
        </Heading>
        <Heading
          color={colorMode==='light'? "dark":'light'} 
          fontSize={{ base:"2xl", md:"4xl" }}
          textStyle="h2"
          className="heading-animation-two"
          justify='center'

        >
          {dataLanding.bio1}
        </Heading>
        <Heading
          color={colorMode==='light'? "gray":'grayDarkMode'} 
          fontSize={{ base:"md", md:"xl"}}
          textStyle="h3"
          pb="0.3em"
          className="heading-animation-three"
        >
          {dataLanding.bio2}
        </Heading>
        
        
      
      </VStack>
      </FullScreenSection>
      
   
  );
};

export default LandingSection;
