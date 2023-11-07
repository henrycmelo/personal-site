import {
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  CardFooter,
  VStack,
  Stack,
 
} from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";
import { useAlertContext } from "../context/alertContext";



const Conclusion = ({
  conclusionData,
  backgroundColor,
  subTitle
}) => {
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
      <VStack alignItems={"center"} justifyContent={"center"} width={{base:'80vw', md:'60vw'}}>
        <ScrollReveal>
          <Heading
            as="h2"
            fontSize={{base:"4xl", md:"6xl"}}
            paddingBottom={12}
            textAlign={"center"}
          >
            {subTitle.toUpperCase()}
          </Heading>
        </ScrollReveal>
        <ScrollReveal>
          {conclusionData && conclusionData.map((conclusion, index) => (
            <React.Fragment key={index}>
            <Text
            align={'center'}
            fontSize={{base:"2xl", md:"4xl"}}
            textStyle="h6"
            textColor={colorMode==='light'?'blue':'blueDarkMode'}
            paddingBottom={4}
          >
            {conclusion.type}
          </Text>
          <ScrollReveal>
          <Text
            fontSize={{base:"lg", md:"2xl"}}
            textStyle="body"
            textColor={colorMode==='light'? "dark":'light'} 
            textAlign={"center"}
            paddingBottom={8}
          >
            {conclusion.description}
          </Text>
        </ScrollReveal>
        <ScrollReveal>
                  <Stack direction={{ base: "column", md: "row" }} pb={16}>
                    {conclusion.images && conclusion.images.map((image, index) => ( 
                      <Card
                      key={index}
                      boxShadow="xl"
                      backgroundColor={
                        colorMode === "light" ? "white" : "darkDarkMode"
                      }
                      border={
                        colorMode === "light" ? "none" : "1px solid #C3C3C3"
                      }
                    >
                      <CardBody>
                        <Image
                          src={image.imagePath}
                          alt={image.description}
                          background="none"
                          borderRadius="lg"
                        />
                      </CardBody>
                      <CardFooter justify={"center"}>
                        <Text
                          as={"b"}
                          fontSize="lg"
                          textStyle="body"
                          textColor={
                            colorMode === "light" ? "blue" : "blueDarkMode"
                          }
                        >
                          {image.description}
                        </Text>
                      </CardFooter>
                      </Card>
                    ))}


                  </Stack>
                </ScrollReveal>

        </React.Fragment>
          ))}
          
        </ScrollReveal>

    
      </VStack>
    </FullScreenSection>
  );
};

export default Conclusion;
