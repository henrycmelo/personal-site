import React from "react";
import { Heading, VStack, Text, Wrap } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import CustomizedButton from "./CustomizedButton";
import { useAlertContext } from "../context/alertContext";
import "animate.css";

const greeting = "HI, MY NAME IS";
const bio1 = "Henry Castillo";
const bio2 = "I design and code delightful things";
const intro = `I am a full stack developer and graduate student in my second year 
              studying human-computer interaction. With a passion for UX design and a
              love for building intuitive and visually stunning web applications, I have the
              skills to bring your ideas to life from start to finish. Whether it's creating  
              a sleek and responsive user interface or integrating a robust and scalable 
              back-end, I am always up for a challenge and strive to exceed expectations. `;
const intro2 = "Let's create something amazing together";

const LandingSection = () => {
  const { handleClick } = useAlertContext();

  return (
    <FullScreenSection
      backgroundColor="light"
      alignItems={{ base: "center", md: "center", xl: "flex-start" }}
      spacing={8}
      width="100vw"
      pt={48}
      pl={{ base: 8, md: 32 }}
      pb={32}
      pr={{ base: 8, md: 32 }}
    >
      <VStack alignItems="start" justifyContent="left">
        <Heading
          color="blue"
          size="sm"
          textStyle="button"
          className="heading-animation"
        >
          {greeting}
        </Heading>
        <Heading
          color="dark"
          fontSize={{ base:"4xl", md:"6xl" }}
          textStyle="h2"
          className="heading-animation-two"
        >
          {bio1}
        </Heading>
        <Heading
          color="gray"
          fontSize={{ base:"4xl", md:"6xl"}}
          textStyle="h3"
          pb="0.3em"
          className="heading-animation-three"
        >
          {bio2}
        </Heading>
        <Text
          maxW="3xl"
          color="gray"
          fontSize=""
          textStyle="body"
          className="heading-animation-four"
        >
          {intro}{" "}
        </Text>
        <button onClick={handleClick("contactme")}>
          <Text
            maxW="3xl"
            color="blue"
            fontSize="sm"
            textDecoration={"underline"}
            textStyle="body"
            className="heading-animation-five"
          >
            {intro2}{" "}
          </Text>
        </button>
        <Wrap
          pt={10}
          pb={20}
          className="heading-animation-six"
        >
          <CustomizedButton onClick={handleClick("contactme")}>
            CONTACT ME
          </CustomizedButton>
        </Wrap>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
