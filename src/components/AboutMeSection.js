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
          Hey there, welcome to my world of code and chaos! I'm Henry, a certified
          <HighlightedText> tech wizard with a knack for cooking up digital delights. </HighlightedText>
          With a background in industrial engineering, I've decided to ditch the spreadsheets for some serious coding and design adventures.
          <br />
          <br />
          I have already survived the wild ride of <HighlightedText>grad school at Pratt Institute,  where I became a guru in human-computer stuff. </HighlightedText> 
          Picture me as Indiana Jones, but instead of a whip, I wield a keyboard and mouse with precision!
          <br />
          <br />
          I'm still a newbie in the tech universe, I'm eager to tackle any challenge that comes my way. Whether it's front-end, back-end, design, 
           or any tech in between, I'm your guy!
          <br />
          <br />
          So, <HighlightedText>if you need a tech whiz to join your team, you're in luck!</HighlightedText> Let's mix up some digital magic together!
          <br />
          <br />
          
          Here's a sneak peek at my tech toolbox:
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