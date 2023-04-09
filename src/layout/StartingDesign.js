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

const StartingDesign = ({
  backgroundColor,
  subtitle,
  description,
  imageSrc,
  descriptionImage,
  subtitle2,
  subtitle3,
  imageSrc2,
  imageSrc22,
  imageSrc3,
  descriptionImage2,
  descriptionImage22,
  descriptionImage3,
  description2,
  description3,
  title,
  href
}) => {
  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      alignItems={"center"}
      spacing={8}
      width="100vw"
      p={{ base: 8, md: 32 }}
    >
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
            {title}
          </Heading>
        </ScrollReveal>

        <ScrollReveal>
          <Text
            align={"center"}
            fontSize={{ base: "2xl", md: "4xl" }}
            textStyle="h6"
            textColor={"blue"}
            paddingBottom={4}
          >
            {subtitle}
          </Text>
        </ScrollReveal>

        <ScrollReveal>
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            textStyle="body"
            textColor={"dark"}
            textAlign={"center"}
            paddingBottom={8}
          >
            {description}
          </Text>
        </ScrollReveal>

        <ScrollReveal>
          <Card boxShadow="xl" >
            <CardBody>
              <Image
                src={imageSrc}
                alt={descriptionImage}
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
              <Text fontSize="lg" textStyle="body" textColor={"blue"}>
                {descriptionImage}
              </Text>
            </CardFooter>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Text
            align={"center"}
            fontSize={{ base: "2xl", md: "4xl" }}
            textStyle="h6"
            textColor={"blue"}
            paddingBottom={4}
            pt={16}
          >
            {subtitle2}
          </Text>
        </ScrollReveal>

        <ScrollReveal>
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            textStyle="body"
            textColor={"dark"}
            textAlign={"center"}
            paddingBottom={8}
          >
            {description2}
          </Text>
        </ScrollReveal>

        <ScrollReveal>
          <Card boxShadow="xl">
            <CardBody>
              <Image
                src={imageSrc2}
                alt={descriptionImage2}
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
              <Text fontSize="lg" textStyle="body" textColor={"blue"}>
                {descriptionImage2}
              </Text>
            </CardFooter>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card boxShadow="xl">
            <CardBody>
              <Image
                src={imageSrc22}
                alt={descriptionImage22}
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
              <Text fontSize="lg" textStyle="body" textColor={"blue"}>
                {descriptionImage22}
              </Text>
            </CardFooter>
          </Card>
        </ScrollReveal>


        <ScrollReveal>
          <Text
            align={"center"}
            fontSize={{ base: "2xl", md: "4xl" }}
            textStyle="h6"
            textColor={"blue"}
            paddingBottom={4}
            pt={16}
          >
            {subtitle3}
          </Text>
        </ScrollReveal>

        <ScrollReveal>
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            textStyle="body"
            textColor={"dark"}
            textAlign={"center"}
            paddingBottom={8}
          >
            {description3}
          </Text>
        </ScrollReveal>

        <ScrollReveal>
          <Card boxShadow="xl">
            <CardBody>
              <Image
                src={imageSrc3}
                alt={descriptionImage3}
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
              <a href={href} rel="noreferrer"
                target="_blank"><Text fontSize="lg" textStyle="body" textColor={"blue"}>
                {descriptionImage3}
              </Text>
              </a>
            </CardFooter>
          </Card>
        </ScrollReveal>

      </VStack>
    </FullScreenSection>
  );
};

export default StartingDesign;
