import React from "react"
import { Box, Text } from "@chakra-ui/react"
import MuteButton from "./MuteButton";
import { useAlertContext } from "../context/alertContext";
const LandingText=()=>{
    const {handleClick} = useAlertContext()
    return(
        <Box >
            <Text as='h1' textStyle={'h1'}>Hey there! </Text>
            <Text as='h1' textStyle={'h1'}>I'm Henry... </Text>
            <Text as='p' textStyle={'p'} color='gray.600' maxWidth={'600px'} py={6}>I'm a passionate UX Researcher and Product Designer who loves to transform insights into meaningful experiences</Text>
            <MuteButton onClick={()=>handleClick('aboutme')}>More about me </MuteButton>
        
        </Box>
        
    )

}

export default LandingText