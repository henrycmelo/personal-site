import React from "react";
import {  Heading, VStack, Text, Wrap, } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import CustomizedButton from "./CustomizedButton"
import { useAlertContext } from "../context/alertContext"

const greeting = "HI, MY NAME IS";
const bio1 = "Henry Castillo";
const bio2 = "I design and code delightful things";
const intro = `I am a full stack developer and graduate student in my second year 
              studying human-computer interaction. With a passion for UX design and a
              love for building intuitive and visually stunning web applications, I have the
              skills to bring your ideas to life from start to finish. Whether it's creating  
              a sleek and responsive user interface or integrating a robust and scalable 
              back-end, I am always up for a challenge and strive to exceed expectations. `
const intro2= "Let's create something amazing together"






const LandingSection = () => {
  const { handleClick } = useAlertContext();

  return (
  
  (


  <FullScreenSection
    backgroundColor="light"
    
    alignItems={{base:'center', md:"flex-start", lg:'flex-start'}}
    spacing={8}
    width='100vw'
    pt={48} 
    pl={32}
    pb={8}
    pr={16}

    
    
    
  >
    
 
    
    <VStack alignItems='start' justifyContent='left' >
      

      <Heading color='blue' size="sm" textStyle='button' >{greeting}</Heading>
      <Heading color='dark' size={{base:"3xl",md:'4xl'}} textStyle='h2'>{bio1}</Heading>
      <Heading color='gray' size={{base:"2xl",md:'3xl'}} textStyle='h3' pb='0.3em'>{bio2}</Heading>
      <Text maxW='3xl' color='gray' fontSize={'sm'} textStyle='body'>{intro} </Text>
      <Text maxW='3xl' color='blue' size='sm' textStyle='body'>{intro2} </Text>
      <Wrap pt={10} pb={20}><CustomizedButton onClick={handleClick('contactme')}>CONTACT ME</CustomizedButton></Wrap>


    </VStack>
    




  </FullScreenSection>
))};

export default LandingSection;