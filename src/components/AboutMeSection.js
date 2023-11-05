import React from "react";
import {
  Heading,
  VStack,
  Text,
  Image,
  Box,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";
import ScrollReveal from "../hooks/ScrollReveal";
import { badges } from "../utils/badges";
import { technologiesData, headShotData } from "../utils/dataAboutMe";



const HighlightedText = ({ children }) => {
  const {colorMode} = useAlertContext();
  return(
    <span style={{color:colorMode==="light" ? "#007183" : "#00A4BD"}}>
      {children}
    </span>
  )
}

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
  )
}

const Technologies=({technologies})=>{
  return(
    <>
    <SimpleGrid columns={4} flexWrap='wrap' spacing={4}>
        {technologies.map((technology, index) => (
          <img key={index} src={badges[technology]} alt={technology} width="70px" />
        ))}

        </SimpleGrid>
    </>
  )
}
const TextIntro=({children})=>{
  const {colorMode} = useAlertContext();
  return(
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
        <Technologies technologies={technologiesData}/>

    </VStack>
    </>
    
  )

}

const AboutMeSection = ({ isHomePage }) => {
  const { direction, spacing, align, colorMode } = useAlertContext();
  const intro = (
    <>  
        <TextIntro>
          Hello and welcome to my portfolio! My name is Henry and I am a
          certified <HighlightedText> full stack developer and UX engineer </HighlightedText>
          with a background in industrial engineering. After working as an
          entrepreneur, I decided to switch careers and pursue my passion for
          technology.I am currently <HighlightedText>in grad school at Pratt Institute, studying human-computer
          interaction </HighlightedText> and gaining valuable skills in programming and design.
          <br />
          <br />
          Although I am just starting my journey in the tech industry, I am
          eager to learn and grow as a developer, I am always up for a challenge
          and strive to exceed expectations in every project I work on.
          <br />
          <br />
          I am currently seeking opportunities as a <HighlightedText> software engineer, full stack developer,
          front-end or back-end developer,</HighlightedText> and am excited to bring my skills and experience to a new team.
          <br />
          <br />
          These are a few technologies I know:
          <br />
          <br />
        
        
        
      </TextIntro>
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

          <Headshots headshots={headShotData} />
          
        </Stack>
      </VStack>
    </FullScreenSection>
  );
};

export default AboutMeSection;