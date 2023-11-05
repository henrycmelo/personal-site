import React from "react";
import { Heading, VStack, Text, Wrap } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import CustomizedButton from "./CustomizedButton";
import { useAlertContext } from "../context/alertContext";
import "animate.css";
import gif from "../images/giphy.gif"
import { dataLanding } from "../utils/dataLanding";

const LandingSection = () => {
  const { handleClick,colorMode } = useAlertContext();
  


  return (
    
    <FullScreenSection
    backgroundImage={colorMode==='light'?`linear-gradient(rgba(239,241,243,.8), rgba(239,241,243,1)), url(${gif})`:`linear-gradient(rgba(39,39,39,.7), rgba(39,39,39,1)), url(${gif})`}
    backgroundRepeat='no-repeat'
    backgroundPosition='right bottom'
    backgroundSize='contain'
   
      backgroundColor={colorMode==='light'? "light":'dark'} 
      alignItems={{ base: "center", md: "center", xl: "flex-start" }}
      spacing={8}
      width="100vw"
      pt={48}
      pl={{ base: 8, md: 32 }}
      pb={32}
      pr={{ base: 8, md: 32 }}
     
    >
     

      <VStack alignItems="start" justifyContent="left" >
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
          fontSize={{ base:"4xl", md:"6xl" }}
          textStyle="h2"
          className="heading-animation-two"
        >
          {dataLanding.bio1}
        </Heading>
        <Heading
          color={colorMode==='light'? "gray":'grayDarkMode'} 
          fontSize={{ base:"4xl", md:"6xl"}}
          textStyle="h3"
          pb="0.3em"
          className="heading-animation-three"
        >
          {dataLanding.bio2}
        </Heading>
        <Text
          maxW="2xl"
          color={colorMode==='light'? "gray":'grayDarkMode'} 
          fontSize=""
          textStyle="body"
          className="heading-animation-four"
         
        >
          {dataLanding.intro}{" "}
        </Text>
        <button  onClick={handleClick("contactme")}>
          <Text
            maxW="3xl"
            color={colorMode==='light'? "blue":'grayBoldDarkMode'}
            fontSize="sm"
            textDecoration={"underline"}
            textStyle="body"
            className="heading-animation-five"
          >
            {dataLanding.intro2}{" "}
          </Text>
        </button>
        <Wrap
          pt={10}
          pb={20}
          className="heading-animation-six"
        >
          <CustomizedButton onClick={handleClick("contactme")}>
            CONTACT ME
          </CustomizedButton>
        </Wrap>
      </VStack>
      </FullScreenSection>
      
   
  );
};

export default LandingSection;
