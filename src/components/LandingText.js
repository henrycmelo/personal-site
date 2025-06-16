import React from "react"
import { Box, Text, VStack, HStack, Badge } from "@chakra-ui/react"
import MuteButton from "./MuteButton";
import { useAlertContext } from "../context/alertContext";

const LandingText = () => {
    const { handleClick } = useAlertContext()
    
    return (
        <VStack align="start" spacing={6}>
            {/* Specialty badges */}
            <HStack spacing={3} flexWrap="wrap">
                <Badge 
                    colorScheme="blue" 
                    variant="subtle" 
                    px={3} 
                    py={1} 
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="500"
                >
                    Logistics & Transportation
                </Badge>
                <Badge 
                    colorScheme="green" 
                    variant="subtle" 
                    px={3} 
                    py={1} 
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="500"
                >
                    Civic Tech
                </Badge>
            </HStack>

            {/* Main headline - improved for clarity and impact */}
            <Box>
                <Text as="h1" textStyle='h1' lineHeight="1.1" letterSpacing="-0.02em">
                    Product Designer Creating{' '}
                    <Text as="span" color="semantic.accent" display="block">
                        Efficient Systems for Real-World Impact
                    </Text>
                </Text>
            </Box>
            
            {/* Design process - more visually appealing */}
            <Box 
                bg="gray.50" 
                px={4} 
                py={3} 
                borderRadius="lg" 
                border="1px solid" 
                borderColor="gray.200"
            >
                <Text as="h2" textStyle={'pbold'} color="gray.700" fontSize="sm">
                    Research → Design → Prototype → Iterate → Deliver
                </Text>
            </Box>
            
            {/* Value proposition - better structured */}
            <Text 
                as='p' 
                textStyle={'p'} 
                color='gray.600' 
                maxWidth={'600px'} 
                lineHeight="1.7"
                fontSize="lg"
            >
                I design for logistics operations and civic impact, with firsthand courier 
                experience most designers lack. My work cuts delivery times by 25%, secures 
                $150K in nonprofit funding, and makes systems work for everyone—from drivers 
                to immigrant families.
            </Text>

            {/* Key metrics - new addition for visual impact */}
            <HStack spacing={8} py={2}>
                <VStack align="start" spacing={0}>
                    <Text fontSize="2xl" fontWeight="700" color="gray.900">94%</Text>
                    <Text fontSize="sm" color="gray.600">Error reduction</Text>
                </VStack>
                <VStack align="start" spacing={0}>
                    <Text fontSize="2xl" fontWeight="700" color="gray.900">$150K</Text>
                    <Text fontSize="sm" color="gray.600">Secured funding</Text>
                </VStack>
                <VStack align="start" spacing={0}>
                    <Text fontSize="2xl" fontWeight="700" color="gray.900">400%</Text>
                    <Text fontSize="sm" color="gray.600">Increase Service capacity</Text>
                </VStack>
            </HStack>
            
            {/* CTA button */}
            <Box pt={2}>
                <MuteButton onClick={() => handleClick('aboutme')}>
                    More about me
                </MuteButton>
            </Box>

            {/* Footer note - subtle styling */}
            <Text 
                as='p' 
                textStyle={'caption'} 
                color='gray.500' 
                fontSize="sm"
                pt={4}
                borderTop="1px solid"
                borderColor="gray.100"
                width="100%"
            >
                I built this portfolio with React & Chakra UI. Spot a bug? Let me know – I'm 
                constantly iterating (just like my designs).
            </Text>
        </VStack>
    )
}

export default LandingText