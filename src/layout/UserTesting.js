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

const UserTesting = ({ type,description, imageSrc, descriptionImage, backgroundColor }) => {
  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      alignItems={"center"}
      spacing={8}
      width="100vw"
      p={{ base: 8, md: 32 }}
    >
      <VStack alignItems={"center"} justifyContent={"center"} width={{base:'80vw', md:'60vw'}}>
        <ScrollReveal><Heading as="h2" fontSize={{base:"4xl", md:"6xl"}} paddingBottom={12}>
          USER TESTING
        </Heading></ScrollReveal>

        <ScrollReveal><Text  fontSize={{base:"2xl", md:"4xl"}} textStyle="h6" textColor={"blue"} paddingBottom={4} align={'center'}>
          {type}
        </Text></ScrollReveal>
        <ScrollReveal>
        <Text fontSize={{base:"lg", md:"2xl"}}textStyle='body' textColor={"dark"}  textAlign={'center'} paddingBottom={8}>
            {description}
        </Text>
        </ScrollReveal>
        <ScrollReveal>

        <Card boxShadow="xl">
            <CardBody>
              <Image
                src={imageSrc}
                alt={descriptionImage}
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
              <Text  fontSize="lg" textStyle="body" textColor={"blue"}>
                {descriptionImage}
              </Text>
            </CardFooter>
          </Card>
          </ScrollReveal>

       
       
      </VStack>
    </FullScreenSection>
  );
};

export default UserTesting;
