import {
  Heading,
  Text,
  VStack,
  Grid,

} from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";
import GridItemComponent from "./GridItemComponent";
import { useAlertContext } from "../context/alertContext";




const Research = ({
  subtitle,
  description,
  data,
  backgroundColor,
 
}) => {
  const {  colorMode } = useAlertContext();
  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      color={colorMode==='light'? "dark":'light'}
      alignItems={"center"}
      spacing={8}
      width="100vw"
      p={{ base: 8, md: 32 }}
    >
      <VStack alignItems={"center"} justifyContent={"center"} width={{base:'80vw', md:'60vw'}}>
        <ScrollReveal>
          <Heading as="h2" fontSize={{base:"4xl", md:"6xl"}} paddingBottom={12}>
            RESEARCH
          </Heading>
        </ScrollReveal>

        <ScrollReveal>
          <Text
            align={'center'}
          
            fontSize={{base:"2xl", md:"4xl"}}
            textStyle="h6"
            textColor={colorMode==='light'?'blue':'blueDarkMode'}
            paddingBottom={4}
            
          >
            {subtitle}
          </Text>
        </ScrollReveal>
        <ScrollReveal>
          <Text
            fontSize={{base:"lg", md:"2xl"}}
            textStyle="body"
            textColor={colorMode==='light'? "dark":'light'}
            textAlign={"center"}
            paddingBottom={8}
          >
            {description}
          </Text>
        </ScrollReveal>

        <Grid
          templateColumns="repeat(1, 3fr)"
          templateRows="repeat(9,1/2fr)"
          gap={1}
          align="center"
        >
          {data.map((item, index) => (
            
            <GridItemComponent
              key={index}
              icon={item.icon}
              title={item.iconTitle}
              items={item.items}
              color={colorMode==='light'? "dark":'light'}
            />
          
          ))}
        </Grid>
      </VStack>
    </FullScreenSection>
  );
};

export default Research;
