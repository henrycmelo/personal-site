import React from "react"
import {  Text, VStack, HStack, Heading,  } from "@chakra-ui/react"
import MuteButton from "./MuteButton";
import { useAlertContext } from "../context/alertContext";
import CustomizedButton from "./CustomizedButton";

const LandingText = () => {
    const { handleClick } = useAlertContext()
    
    return (
        <VStack align="start" spacing={6} maxW="800px">
            <Text fontSize="md" color="gray.600">Hi, I'm Henry 👋</Text>
            <Heading as="h1" textStyle='h1' size="3xl" lineHeight="1.1">
                Designing Digital Solutions for
                <Text as="span" color="semantic.accent"> Healthcare, Fintech & Social Impact</Text>
            </Heading>
            <Text fontSize="lg" color="gray.600">
            I help organizations deliver better patient outcomes, streamline financial workflows, and create accessible digital experiences.
            </Text>
            
            <HStack spacing={4}>
                <CustomizedButton  onClick={() => handleClick('projects')}>See My Work</CustomizedButton>
                <MuteButton variant="outline" onClick={() => handleClick('contact')}>Let's Talk</MuteButton>
            </HStack>
        </VStack>
    )
}

export default LandingText