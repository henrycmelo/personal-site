import React from "react";
import {
  Heading,
  VStack,
  Text,
  Image,
  Box,
  Stack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";
import ScrollReveal from "../hooks/ScrollReveal";
import { badges } from "../utils/badges";

const headshot = [
  {
    title: "Henry headshot",
    getImageSrc: () => require("../images/headshot.jpg"),
    
  },
];

const technologies = [
  
    badges["python"],
    badges["javascript"],
    badges["react"],
    badges["nodejs"],
    badges["html"],
    badges["css"],
    badges["sass"],
    badges["bootstrap"],
    badges["materialui"],
    badges["tailwindcss"],
    badges["typescript"],
    badges["php"],
    badges["sql"],
    badges["django"],
    badges["flask"],
    badges["amazonaws"],
    badges["heroku"],
    badges["netlify"],
    badges["jest"],
    badges["figma"],
    badges["adobe"],
    badges["chakraui"],
    badges["zoom"],
    badges["miroboard"],

]

const AboutMeSection = ({ isHomePage }) => {
  const { direction, spacing, align, colorMode } = useAlertContext();
  const intro = (
    <>
      <VStack>
        <Text
          maxW="3xl"
          color={colorMode === "light" ? "gray" : "grayDarkMode"}
          size="sm"
          textStyle="body"
        >
          Hello and welcome to my portfolio! My name is Henry and I am a
          certified{" "}
          <span
            style={{ color: colorMode === "light" ? "#007183" : "#00A4BD" }}
          >
            full stack developer and UX designer
          </span>{" "}
          with a background in industrial engineering. After working as an
          entrepreneur, I decided to switch careers and pursue my passion for
          technology.I am currently{" "}
          <span
            style={{ color: colorMode === "light" ? "#007183" : "#00A4BD" }}
          >
            in grad school at Pratt Institute, studying human-computer
            interaction
          </span>{" "}
          and gaining valuable skills in programming and design.
          <br />
          <br />
          Although I am just starting my journey in the tech industry, I am
          eager to learn and grow as a developer, I am always up for a challenge
          and strive to exceed expectations in every project I work on.
          <br />
          <br />I am currently seeking opportunities as a{" "}
          <span
            style={{ color: colorMode === "light" ? "#007183" : "#00A4BD" }}
          >
            software engineer, full stack developer, front-end or back-end
            developer
          </span>
          , and am excited to bring my skills and experience to a new team.
          <br />
          <br />
          These are a few technologies I know:
          <br />
          <br />
        </Text>
        <SimpleGrid columns={4} flexWrap='wrap' spacing={4}>
        {technologies.map((technology, index) => (
          <img key={index} src={technology} alt={technology} width="70px" />
        ))}

        </SimpleGrid>
        
        
      </VStack>
      <HStack
        spacing={16}
        ml={16}
        color={colorMode === "light" ? "gray" : "grayDarkMode"}
        size="sm"
        textStyle="body"
      >
        
      </HStack>
    </>
  );

  return (
    <FullScreenSection
      backgroundColor={colorMode === "light" ? "secondLight" : "darkDarkMode"}
      alignItems={align}
      spacing={8}
      width="100vw"
      pr={{ base: 8, md: 32 }}
      pl={{ base: 8, md: 32 }}
      pt={{ base: 8, md: 32 }}
      pb={{ base: 32, md: 32 }}
    >
      {isHomePage && (
        <ScrollReveal>
          {" "}
          <Heading
            as="h1"
            id="aboutme-section"
            color={colorMode === "light" ? "dark" : "light"}
          >
            About me
          </Heading>{" "}
        </ScrollReveal>
      )}

      <VStack alignItems={align} justifyContent="center">
        <Stack direction={direction} spacing={spacing}>
          <ScrollReveal>
            <Box color={colorMode === "light" ? "dark" : "light"}>{intro}</Box>
          </ScrollReveal>

          {headshot.map((headshots, index) => (
            <ScrollReveal key={index}>
              <Image
                key={index}
                src={headshots.getImageSrc()}
                alt={headshot.title}
                boxSize={{ base: "lg", md: "sm", xl: "xs" }}
                objectFit={"cover"}
                objectPosition="50% 20%"
                border="5px solid #272727"
                opacity={colorMode === "light" ? "none" : "0.8"}
              />
            </ScrollReveal>
          ))}
        </Stack>
      </VStack>
    </FullScreenSection>
  );
};

export default AboutMeSection;
