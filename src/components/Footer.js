import React from "react";
import {  HStack, Heading, Text,Grid, GridItem, Divider } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullScreenSection from "./FullScreenSection";


const Footer = () => {
  const { socials } = useAlertContext();

  return (

    <FullScreenSection
      backgroundColor="dark"
      alignItems='center'
      spacing={8}
      width='100vw'
      p={16}>
 
      <footer>
        <Grid 
              templateRows='repeat(1, 1fr)'
              templateColumns= {{ base: "repeat(1,1fr)", md: "repeat(2, 1fr)" }}
              gap={2}
              color="light"
              width={'100%'}   
              margin="0 auto"
              paddingBottom="1em"
              >
          <GridItem
            colSpan={1}
            px={12}
            color="light"
            
            maxWidth="1024px"

          >

            <Heading as='h3' paddingBottom='0.5em'>Henry Castillo</Heading>
            <Text  fontSize={{md:'sm', base:'xs'}} textStyle='body' padding="1em">Crafting seamless user experiences and building robust,
              end-to-end solutions - that's what I do as a UX designer and full-stack developer
            </Text>
          </GridItem>
          <GridItem
            colSpan={1}
            colStart={{base:0, md:4,lg:4}}
            colEnd={{base:0, md:6,lg:6}}
            
            px={12}>

              <Heading as='h3'paddingBottom='0.5em'> Socials</Heading>
              <HStack color='yellow'>
              {socials.map(icons => (                // rendering the list of icons using .map () method
                <a key={icons.id} href={icons.url} style={{padding:'1em'}} target="_blank" rel="noopener noreferrer" title={icons.url}>
                  <FontAwesomeIcon  icon={icons.icon} size='2x' />
                </a>)
              )}  
              </HStack>
          </GridItem>
          
          
        </Grid>
        <Divider color='light'  alignItems="center"  margin="0 auto" />
        <Text  color='yellow' size='xs' textStyle='body' textAlign='center'>© Copyright 2023. Designed and built by <b>Henry Castillo</b> </Text>
        
      </footer>
    
    </FullScreenSection>

  );
};
export default Footer;