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
  subtitle,
  hasTwoPersonas,
  imageSrc,
  imageSrc2,
  descriptionImage,
  descriptionImage2,
  description,
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
      {hasTwoPersonas ? (
        <VStack
          alignItems={"center"}
          justifyContent={"center"}
          width={{ base: "80vw", md: "60vw" }}
        >
          <ScrollReveal>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "6xl" }}
              paddingBottom={12}
              
            >
              PERSONAS
            </Heading>
          </ScrollReveal>

          <ScrollReveal>
            <Text
              align={"center"}
              fontSize={{ base: "2xl", md: "4xl" }}
              textStyle="h6"
              textColor={colorMode==='light'?'blue':'blueDarkMode'}
              paddingBottom={4}
            >
              {subtitle}
            </Text>
          </ScrollReveal>
          <ScrollReveal>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              textStyle="body"
              textColor={colorMode==='light'? "dark":'light'}
              textAlign={"center"}
              paddingBottom={8}
            >
              {description}
            </Text>
          </ScrollReveal>

          <ScrollReveal>
            <Card boxShadow="xl" backgroundColor={colorMode==='light'? "white" : 'darkDarkMode'} border={colorMode==='light'?'none':'1px solid #C3C3C3'}>
              <CardBody>
                <Image
                  src={imageSrc}
                  alt={descriptionImage}
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body" textColor={colorMode==='light'?'blue':'blueDarkMode'}>
                  {descriptionImage}
                </Text>
              </CardFooter>
            </Card>
          </ScrollReveal>
          <ScrollReveal>
            <Card boxShadow="xl" backgroundColor={colorMode==='light'? "white" : 'darkDarkMode'} border={colorMode==='light'?'none':'1px solid #C3C3C3'}>
              <CardBody>
                <Image
                  src={imageSrc2}
                  alt={descriptionImage2}
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body" textColor={colorMode==='light'?'blue':'blueDarkMode'}>
                  {descriptionImage2}
                </Text>
              </CardFooter>
            </Card>
          </ScrollReveal>
        </VStack>
      ) : (
        <VStack
          alignItems={"center"}
          justifyContent={"center"}
          width={{ base: "80vw", md: "60vw" }}
        >
          <ScrollReveal>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "6xl" }}
              paddingBottom={12}
            >
              PERSONAS
            </Heading>
          </ScrollReveal>

          <ScrollReveal>
            <Text
              align={"center"}
              fontSize={{ base: "2xl", md: "4xl" }}
              textStyle="h6"
              textColor={colorMode==='light'?'blue':'blueDarkMode'}
              paddingBottom={4}
            >
              {subtitle}
            </Text>
          </ScrollReveal>

          <ScrollReveal>
            <Card boxShadow="xl" backgroundColor={colorMode==='light'? "white" : 'darkDarkMode'} border={colorMode==='light'?'none':'1px solid #C3C3C3'}>
              <CardBody>
                <Image
                  src={imageSrc}
                  alt={descriptionImage}
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body" textColor={colorMode==='light'?'blue':'blueDarkMode'}>
                  {descriptionImage}
                </Text>
              </CardFooter>
            </Card>
          </ScrollReveal>
        </VStack>
      )}
    </FullScreenSection>
  );
};

export default Personas;
