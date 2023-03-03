import React from "react";
import {  Heading, VStack, Text, Image, Box, Stack, HStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";






const intro= (
  <><VStack>
    <Text maxW='3xl' color='gray' size='sm' textStyle='body'>
      Hello and welcome to my portfolio! My name is Henry and I am a certified <span style={{ color: '#007183' }}>full stack
        developer and UX designer</span> with a background in industrial engineering. After working as an entrepreneur,
      I decided to switch careers and pursue my passion for technology.I am currently <span style={{ color: '#007183' }}>in grad
        school at Pratt Institute, studying human-computer interaction</span> and gaining valuable skills in programming and design.
      <br />
      <br />

      Although I am just starting my journey in the tech industry, I am eager to learn and grow as a developer,
      I am always up for a challenge and strive to exceed expectations in every project I work on.
      <br />
      <br />

      I am currently seeking opportunities as a <span style={{ color: '#007183' }}>software engineer, full stack developer,
        front-end or back-end developer</span>, and am excited to bring my skills and experience to a new team.
      <br />
      <br />

      These are a few technologies I know:
      <br />
      <br />
    </Text>
  </VStack><HStack spacing={16} ml={16} color='gray' size='sm' textStyle='body'>
      <VStack>

        <ul>
          <li>Python</li>
          <li>Django</li>
          <li>Dash</li>
          <li>Flask</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </VStack>
      <VStack>
        <ul>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>Node JS</li>
          <li>PHP</li>
          <li>SQL</li>
          <li>Figma</li>

        </ul>
      </VStack>
    </HStack></>


  



)



const headshot = [
  {
    title:"Henry headshot",
    getImageSrc: () => require("../images/Henry-headshot.jpg"),

  }
]

const AboutMeSection = () => (
  <FullScreenSection
  backgroundColor="secondLight"
  alignItems={{base:'center', md:"flex-start", lg:'center'}}
  spacing={8}
  width='100vw'
  pr={{base:8, md:32}}
  pl={{base:8, md:32}}
  pt={{base:8, md:32}}
  pb={{base:32, md:32}}
  >
    <Heading as="h1" id="aboutme-section" color='dark' >About me</Heading>

    <VStack alignItems='center'justifyContent='center' >
      
      <Stack direction={{base: 'column', md: 'row'}}  spacing={{base:16, md:20}}>
        <Box >
        {intro}

        </Box>
      
        
        <Box boxSize='sm'  >
          {headshot.map((headshots, index)=>(
            <Image
              key={index}
              src={headshots.getImageSrc()} 
              alt={headshot.title} 
              boxSize='md' 
              objectFit='cover' 
              objectPosition='60% 20%'
              border="5px solid #272727"
             />
          ))}
        </Box>
     
      </Stack>


    </VStack>
    




  </FullScreenSection>
);

export default AboutMeSection;