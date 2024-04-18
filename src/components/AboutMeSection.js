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
            query={["Engineering intern", "A personal trainer side business"]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: colorMode === "light" ? "#FED766" : "#00A4BD",
            }}
          >
            I initially started my career as an engineering intern at a
            telecommunications company, collecting and analyzing data to improve
            employee experience. In the meantime, I was running a personal
            trainer side business that I had started during college.
          </Highlight>
        </Text>
        <br />

        <Text>
          <Highlight
            query={["Helping people and tech"]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: colorMode === "light" ? "#FED766" : "#00A4BD",
            }}
          >
            After completing my internship, I decided to work full-time on my
            entrepreneurial pursuit to expand the business. During this
            experience, I discovered two passions — helping people and tech.
            First, it was very fulfilling to see how we were able to change a
            lot of people's lives. And second, as part of this business, I
            helped create an app for my clients, which sparked a high interest
            in tech.
          </Highlight>
        </Text>
        <br />

        <Text>
          <Highlight
            query={["Master's in Information Experience Design"]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: colorMode === "light" ? "#FED766" : "#00A4BD",
            }}
          >
            Following these two interests, I decided to move to NY to pursue a
            career in tech. I started by learning English and then pursuing a
            Master's in Information Experience Design. Through this program, I
            deepened my design and coding skills and had the opportunity to work
            on interesting projects that proved that tech is a field I will
            succeed in.
          </Highlight>
        </Text>

        <br />

        <Text>
          These are a few technologies I know: 
        </Text>
      </TextIntro>
    </>
  );

  return (
    <FullScreenSection
      backgroundColor={colorMode==='light'? "light":'dark'}
      spacing={8}
      width="100vw"
      alignItems={'center'}
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
            alignItems={'center'}
            justifyContent='center'
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
