import React from "react";
import {
  Heading,
  VStack,
  Text,
  Image,
  Box,
  Stack,
  SimpleGrid,
  Highlight,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";
import ScrollReveal from "../hooks/ScrollReveal";
import { badges } from "../utils/badges";
import { technologiesData, headShotData } from "../utils/dataAboutMe";

const Headshots = ({ headshots }) => {
  const { colorMode } = useAlertContext();
  return (
    <>
      {headshots.map((headshot, index) => (
        <ScrollReveal key={index}>
          <Image
            key={index}
            src={headshot.getImageSrc()}
            alt={headshot.title}
            boxSize={{ base: "lg", md: "sm", xl: "xs" }}
            objectFit={"cover"}
            objectPosition="50% 20%"
            border="5px solid #272727"
            opacity={colorMode === "light" ? "none" : "0.8"}
          />
        </ScrollReveal>
      ))}
    </>
  );
};

const Technologies = ({ technologies }) => {
  return (
    <>
      <SimpleGrid columns={4} flexWrap="wrap" spacing={4}>
        {technologies.map((technology, index) => (
          <img
            key={index}
            src={badges[technology]}
            alt={technology}
            width="70px"
          />
        ))}
      </SimpleGrid>
    </>
  );
};
const TextIntro = ({ children }) => {
  const { colorMode } = useAlertContext();
  return (
    <>
      <VStack>
        <Text
          maxW="3xl"
          color={colorMode === "light" ? "gray" : "grayDarkMode"}
          size="sm"
          textStyle="body"
        >
          {children}
        </Text>
        <Technologies technologies={technologiesData} />
      </VStack>
    </>
  );
};

const AboutMeSection = ({ isHomePage }) => {
  const { direction, spacing, align, colorMode } = useAlertContext();
  const intro = (
    <>
      <TextIntro>
        <Text>
          <Highlight
            query={[
              "end-to-end designer & UX researcher",
              "Optimizing processes",
              "user experiences",
              "tough problems",
            ]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: colorMode === "light" ? "#FED766" : "#00A4BD",
            }}
          >
            I am an end-to-end designer & UX researcher with over 8+ years of experience, specializing in 
            data-driven solutions to create better user experiences. 
            I love diving into tough problems and working closely with others to solve them.
          </Highlight>
        </Text>
        <br />

        <Text>
          <Highlight
            query={["qualitative and quantitative research"]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: colorMode === "light" ? "#FED766" : "#00A4BD",
            }}
          >
            Every day, I enjoy uncovering user needs through qualitative and quantitative research, 
            generating innovative ideas, and bringing them to life. Whether I’m sketching concepts 
            or fine-tuning prototypes, I am passionate about every step of the design process, from 
            ideation to implementation.
          </Highlight>
        </Text>
        <br />

        <Text>
          <Highlight
            query={[
              "research",
              "master’s in human-computer interaction",
            ]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: colorMode === "light" ? "#FED766" : "#00A4BD",
            }}
          >
            My background in research, focusing on digital experiences, gives
            me a solid and systematic way of working. And my time during my
            master’s in human-computer interaction taught me a lot about
            teamwork and self-improvement.
          </Highlight>
        </Text>

        <br />

        <Text>
          <Highlight
            query={[
              "Proficient in Python, TypeScript, and JavaScript"
            ]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: colorMode === "light" ? "#FED766" : "#00A4BD",
            }}
          >
            Proficient in Python, TypeScript, and JavaScript, I bring a
            versatile skill set to my design work, allowing for seamless
            integration of design and development processes.
          </Highlight>
        </Text>

        <br />

        <Text>
          <Highlight
            query={["learning something new"]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: colorMode === "light" ? "#FED766" : "#00A4BD",
            }}
          >
            Outside of work, I am all about sports. I played soccer in college,
            and for the past years, I have been learning how to play tennis. I
            am always up for learning something new.
          </Highlight>
        </Text>

        <br />

        <Text>
          <Highlight
            query={["collaborative work"]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: colorMode === "light" ? "#FED766" : "#00A4BD",
            }}
          >
            I am here to create experiences through innovative solutions that
            make a difference via collaborative work.
          </Highlight>
        </Text>

        <br />

        <Text>These are a few technologies I know:</Text>
      </TextIntro>
    </>
  );

  return (
    <FullScreenSection
      backgroundColor={colorMode === "light" ? "light" : "dark"}
      spacing={8}
      width="100vw"
      alignItems={"center"}
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
            alignItems={"center"}
            justifyContent="center"
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

          <Headshots headshots={headShotData} />
        </Stack>
      </VStack>
    </FullScreenSection>
  );
};

export default AboutMeSection;
