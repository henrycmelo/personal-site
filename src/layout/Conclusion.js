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



const Conclusion = ({
  title,
  imageSrc,
  type,
  type2,
  description2,
  descriptionImage,
  backgroundColor,
  description,
}) => {
  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      alignItems={"center"}
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
            {title}
          </Heading>
        </ScrollReveal>
        <ScrollReveal>
          <Text
            align={'center'}
            fontSize={{base:"2xl", md:"4xl"}}
            textStyle="h6"
            textColor={"blue"}
            paddingBottom={4}
          >
            {type}
          </Text>
        </ScrollReveal>

        <ScrollReveal>
          <Text
            fontSize={{base:"lg", md:"2xl"}}
            textStyle="body"
            textColor={"dark"}
            textAlign={"center"}
            paddingBottom={8}
          >
            {description}
          </Text>
        </ScrollReveal>

        <ScrollReveal>
          <Text
            align={'center'}
            fontSize={{base:"2xl", md:"4xl"}}
            textStyle="h6"
            textColor={"blue"}
            paddingBottom={4}
          >
            {type2}
          </Text>
        </ScrollReveal>

        <ScrollReveal>
          <Text
            fontSize={{base:"lg", md:"2xl"}}
            textStyle="body"
            textColor={"dark"}
            textAlign={"center"}
            paddingBottom={8}
          >
            {description2}
          </Text>
        </ScrollReveal>

        <ScrollReveal>
          <Stack direction={{ base: "column", md: "row" }}>
            <Card boxShadow="xl">
              <CardBody>
                <Image
                  src={imageSrc}
                  alt={descriptionImage}
                  background="none"
                  borderRadius="lg"
                />
              </CardBody>

              <CardFooter justify={"center"}>
                <Text
                  as={"b"}
                  fontSize="lg"
                  textStyle="body"
                  textColor={"blue"}
                >
                  {descriptionImage}
                </Text>
              </CardFooter>
            </Card>
          </Stack>
        </ScrollReveal>
      </VStack>
    </FullScreenSection>
  );
};

export default Conclusion;
