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

const CurrentUserInterface = ({
  imageSrc,
  imageSrc2,
  description,
  description2,
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
      <VStack alignItems={"center"} justifyContent={"center"} width="80vw">
        <ScrollReveal>
          <Heading
            as="h2"
            fontSize={{base:"4xl", md:"6xl"}}
            paddingBottom={12}
            textAlign={"center"}
          >
            CURRENT USER INTERFACE (UI) DESIGN
          </Heading>
        </ScrollReveal>
        <ScrollReveal>
        <Stack direction={{ base: "column", md: "row" }}>
          
          <Card boxShadow="xl" backgroundColor={colorMode==='light'? "white" : 'darkDarkMode'} border={colorMode==='light'?'none':'1px solid #C3C3C3'}>
            <CardBody>
              <Image
                src={imageSrc}
                alt={description}
                background="none"
                borderRadius="lg"
              />
            </CardBody>

            <CardFooter justify={"center"}>
              <Text as={"b"} fontSize="lg" textStyle="body" textColor={colorMode==='light'?'blue':'blueDarkMode'}>
                {description}
              </Text>
            </CardFooter>
          </Card>
          <Card boxShadow="xl" backgroundColor={colorMode==='light'? "white" : 'darkDarkMode'} border={colorMode==='light'?'none':'1px solid #C3C3C3'}>
            <CardBody>
              <Image
                src={imageSrc2}
                alt={description2}
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"} >
              <Text  fontSize="lg" textStyle="body" textColor={"blue"}>
                {description2}
              </Text>
            </CardFooter>
          </Card>
         
        </Stack>
        </ScrollReveal>
      </VStack>
    </FullScreenSection>
  );
};

export default CurrentUserInterface;
