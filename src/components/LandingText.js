import React from "react"
import { Box, Text } from "@chakra-ui/react"
import MuteButton from "./MuteButton";
import { useAlertContext } from "../context/alertContext";
const LandingText=()=>{
    const {handleClick} = useAlertContext()
    return(
        <Box >
          {/* Main headline with product design focus */}
      <Text as="h1" textStyle='h1'>
        Logistics & Civic Tech Designer{' '}
        <Text as="span" color="semantic.accent">Data-Driven Solutions for Complex Systems</Text>
      </Text>
      
      {/* Subheadline highlighting design process */}
      <Text as="h2" textStyle={'pbold'}>
        Research → Design → Prototype → Iterate → Deliver
      </Text>
      
      {/* Value proposition emphasizing product design expertise */}
      <Text as='p' textStyle={'p'} color='gray.600' maxWidth={'600px'} py={6}>
        I design for logistics operations and civic impact, with firsthand courier experience most designers lack. My work cuts delivery times by 25%, secures $150K in nonprofit funding, and makes systems work for everyone—from drivers to immigrant families.
        </Text>
      
      
            <MuteButton onClick={()=>handleClick('aboutme')}>More about me </MuteButton>

          <Text as='p' textStyle={'caption'} color='gray.600' py={6}>I built this portfolio with React & Chakra UI. Spot a bug? Let me know – I'm constantly iterating (just like my designs).</Text>
        
        </Box>
        
    )

}

export default LandingText