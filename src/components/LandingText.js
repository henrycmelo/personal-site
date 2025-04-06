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
        Crafting Products that{' '}
        <Text as="span" color="semantic.accent">Users Love & Businesses Value</Text>
      </Text>
      
      {/* Subheadline highlighting design process */}
      <Text as="h2" textStyle={'pbold'}>
        Research → Design → Prototype → Iterate → Deliver
      </Text>
      
      {/* Value proposition emphasizing product design expertise */}
      <Text as='p' textStyle={'p'} color='gray.600' maxWidth={'600px'} py={6}>
        <strong>I'm Henry  </strong> — a Product & UX Designer who loves to transform insights into meaningful user experiences. As a former entrepreneur with deep knowledge of front-end technologies, I bring a unique perspective to design.
        </Text>
      
      
            <MuteButton onClick={()=>handleClick('aboutme')}>More about me </MuteButton>
        
        </Box>
        
    )

}

export default LandingText