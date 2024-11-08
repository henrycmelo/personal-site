import {
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  CardFooter,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";
import { useAlertContext } from "../context/alertContext";

const Personas = ({
  backgroundColor,
  type,
  description,
  userPersonasData
}) => {
  const {  colorMode } = useAlertContext();
  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      alignItems={"center"}
      spacing={8}
      color={colorMode==='light'? "dark":'light'}
      width="100vw"
      p={{ base: 8, md: 32 }}
    >
    
        <VStack
          alignItems={"left"}
          justifyContent={"left"}
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
            {type}
          </Text>
        </ScrollReveal>
        <ScrollReveal>
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            textStyle="body"
            textColor={colorMode === "light" ? "dark" : "light"}
            textAlign={"left"}
            paddingBottom={8}
          >
            {description}
          </Text>
        </ScrollReveal>

          {userPersonasData.map((item, index) => (
            <ScrollReveal key={index}>
              <Card
                boxShadow="xl"
                backgroundColor={
                  colorMode === "light" ? "white" : "darkDarkMode"
                }
                border={colorMode === "light" ? "none" : "1px solid #C3C3C3"}
              >
                <CardBody>
                  <Image
                    src={item.imagePath}
                    alt={item.description}
                    background="none"
                    borderRadius="lg"
                  />{" "}
                </CardBody>

                <CardFooter justify={"center"}>
                  <Text
                    fontSize="lg"
                    textStyle="body"
                    textColor={colorMode === "light" ? "blue" : "blueDarkMode"}
                  >
                    {item.description}
                  </Text>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </VStack>
  
    </FullScreenSection>
  );
};

export default Personas;
