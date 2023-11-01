import {
  Heading,
  List,
  ListItem,
  ListIcon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";
import { MdCheckCircle } from "react-icons/md";
import { useAlertContext } from "../context/alertContext";


const ProjectOverview = ({ client,description, challenge, solution, backgroundColor, isProgrammingProject, design, item, item2, item3, code }) => {
  const {  colorMode } = useAlertContext();
  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      alignItems={"center"}
      color={colorMode==='light'? "dark":'light'}
      spacing={8}
      width="100vw"
      p={{ base: 8, md: 32 }}
    >
      {isProgrammingProject? ( <VStack alignItems={"center"} justifyContent={"center"} width={{base:'80vw', md:'60vw'}}>
        <ScrollReveal><Heading as="h2" fontSize={{base:"4xl", md:"6xl"}} paddingBottom={12} align={'center'}>
          PROJECT OVERVIEW
        </Heading></ScrollReveal>

        <ScrollReveal><Text  fontSize={{base:"2xl", md:"4xl"}} textStyle="h6" textColor={colorMode==='light'?'blue':'blueDarkMode'} paddingBottom={4}>
          Description
        </Text></ScrollReveal>
        <ScrollReveal>
        <Text fontSize={{base:"lg", md:"2xl"}} textStyle='body' textColor={colorMode==='light'? "dark":'light'}  textAlign={'center'} paddingBottom={8}>
            {description}
        </Text>
        </ScrollReveal>

        <ScrollReveal><Text  fontSize={{base:"2xl", md:"4xl"}} textStyle="h6" textColor={colorMode==='light'?'blue':'blueDarkMode'} paddingBottom={4}>
         Development process
        </Text></ScrollReveal>
        <ScrollReveal>
        <Text fontSize={{base:"lg", md:"2xl"}} textStyle='body' textColor={colorMode==='light'? "dark":'light'}  textAlign={'center'} paddingBottom={8}>
            {challenge}
        </Text>
        </ScrollReveal>

        <ScrollReveal><Text  fontSize={{base:"2xl", md:"4xl"}} textStyle="h6" textColor={colorMode==='light'?'blue':'blueDarkMode'} paddingBottom={4}>
         Features
        </Text></ScrollReveal>
        
        
        <ScrollReveal>
            <List spacing={1} fontSize={{base:"lg", md:"2xl"}} color={colorMode==='light'? "dark":'light'} textStyle="body" pb={8}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color={colorMode==='light'?'blue':'blueDarkMode'} />

                {item}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color={colorMode==='light'?'blue':'blueDarkMode'} />
                {item2}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color={colorMode==='light'?'blue':'blueDarkMode'} />
                {item3}
              </ListItem>
            </List>
            </ScrollReveal>
        
    

       
        {design ? 
         (
         <>
         <ScrollReveal><Text  fontSize={{base:"2xl", md:"4xl"}} textStyle="h6" textColor={colorMode==='light'?'blue':'blueDarkMode'} paddingBottom={4}>
         Design
        </Text></ScrollReveal>
        <ScrollReveal>(
          <Text fontSize={{base:"lg", md:"2xl"}} textStyle='body' textColor={colorMode==='light'? "dark":'light'}  textAlign={'center'}>
          {design}
        </Text>
        </ScrollReveal>
        </>)
         : null}


         {code?( 
          <>
          <ScrollReveal><Text  fontSize={{base:"2xl", md:"4xl"}} textStyle="h6" textColor={colorMode==='light'?'blue':'blueDarkMode'} paddingBottom={4}>
          Code Snippet
         </Text></ScrollReveal>
         <img src={code} alt="code" />
         </>): null}
        
        


       
       
      </VStack>

      ):(
      <VStack alignItems={"center"} justifyContent={"center"} width={{base:'80vw', md:'60vw'}}>
      <ScrollReveal><Heading as="h2" fontSize={{base:"4xl", md:"6xl"}} paddingBottom={12} align={'center'}>
        PROJECT OVERVIEW
      </Heading></ScrollReveal>

      <ScrollReveal><Text  fontSize={{base:"2xl", md:"4xl"}} textStyle="h6" textColor={colorMode==='light'?'blue':'blueDarkMode'} paddingBottom={4}>
        Client
      </Text></ScrollReveal>
      <ScrollReveal>
      <Text fontSize={{base:"lg", md:"2xl"}} textStyle='body' textColor={colorMode==='light'? "dark":'light'}  textAlign={'center'} paddingBottom={8}>
          <Text as='b'>{client.toUpperCase()}</Text> {description}
      </Text>
      </ScrollReveal>

      <ScrollReveal><Text  fontSize={{base:"2xl", md:"4xl"}} textStyle="h6" textColor={colorMode==='light'?'blue':'blueDarkMode'} paddingBottom={4}>
       Challenge
      </Text></ScrollReveal>
      <ScrollReveal>
      <Text fontSize={{base:"lg", md:"2xl"}} textStyle='body' textColor={colorMode==='light'? "dark":'light'} textAlign={'center'} paddingBottom={8}>
          {challenge}
      </Text>
      </ScrollReveal>

      <ScrollReveal><Text  fontSize={{base:"2xl", md:"4xl"}} textStyle="h6" textColor={colorMode==='light'?'blue':'blueDarkMode'}paddingBottom={4}>
       Solution
      </Text></ScrollReveal>
      <ScrollReveal>
      <Text fontSize={{base:"lg", md:"2xl"}} textStyle='body' textColor={colorMode==='light'? "dark":'light'} textAlign={'center'}>
          {solution}
      </Text>
      </ScrollReveal>


     
     
    </VStack>

      )}
      
    </FullScreenSection>
  );
};

export default ProjectOverview;
