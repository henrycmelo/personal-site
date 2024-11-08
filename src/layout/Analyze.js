import {
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  CardFooter,
  VStack,
  Stack,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";
import { useAlertContext } from "../context/alertContext";
import GridItemComponent from "./GridItemComponent";

const Analyze = ({
  imageSrc,
  subtitle,
  description,
  backgroundColor,
  analisisData,
  imageData,
  titleConclusion,
  conclusionInsights
}) => {
  const { colorMode } = useAlertContext();
  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      alignItems={"center"}
      spacing={8}
      width="100vw"
      p={{ base: 8, md: 32 }}
    >
      <VStack
        align={"left"}
        width={{ base: "80vw", md: "60vw" }}
      >
        
          
        <ScrollReveal>
          <Text
             align={'left'}
             fontSize={{base:"2xl", md:"4xl"}}
             textStyle="h6"
             textColor={colorMode==='light'?'blue':'blueDarkMode'}
             paddingBottom={4}
          >
            {subtitle}
          </Text>
        </ScrollReveal>
        <Text
          fontSize={{ base: "lg", md: "2xl" }}
          textStyle="body"
          textColor={colorMode === "light" ? "dark" : "light"}
          textAlign={"left"}
          paddingBottom={8}
        >
          {description}
        </Text>
        <ScrollReveal>
          

          <Stack direction={{ base: "column", md: "column" }}>
            {imageData.map((item, index) => (
              <Card
                boxShadow="xl"
                backgroundColor={
                  colorMode === "light" ? "white" : "darkDarkMode"
                }
                border={colorMode === "light" ? "none" : "1px solid #C3C3C3"}
                key={index}
              >
                <CardBody>
                  <Image
                    src={item.imagePath}
                    alt={item.description}
                    background="none"
                    borderRadius="lg"
                    
                  />
                </CardBody>
                <CardFooter justify={"center"}>
                  <Text
                    as={"b"}
                    fontSize="lg"
                    textStyle="body"
                    textColor={colorMode === "light" ? "blue" : "blueDarkMode"}
                  >
                    {item.description}
                  </Text>
                </CardFooter>
              </Card>
            ))}
          </Stack>
          <Grid
            templateColumns="repeat(1, 3fr)"
            templateRows="repeat(9,1/2fr)"
            gap={1}
            align={"center"}
            pb={16}
            pt={8}
            
          >
            <Text fontSize={{base:"lg", md:"2xl"}}   textStyle="h6" color={colorMode === "light" ? "dark" : "light"}>{titleConclusion}</Text> 
            <ScrollReveal>
              {analisisData.map((item, index) =>(
                <GridItemComponent
                  key={index}
                  icon={item.icon ? item.icon : ""}
                  title={item.iconTitle ? item.iconTitle : ""}
                  color={colorMode === "light" ? "dark" : "light"}
                  items={item.items ? item.items : ""}
                  alignTitle={'center'}
                  
                  
                />
              ))}
            </ScrollReveal>
          </Grid>
          <Text
          fontSize={{ base: "lg", md: "2xl" }}
          textStyle="body"
          textColor={colorMode === "light" ? "dark" : "light"}
          textAlign={"left"}
          paddingBottom={8}
          fontStyle={"italic"}
          fontWeight={"bold"}
        >
          {conclusionInsights || ""}
        </Text>
        </ScrollReveal>
      </VStack>
    </FullScreenSection>
  );
};

export default Analyze;
