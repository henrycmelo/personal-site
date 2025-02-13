import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  VStack,
  HStack,
} from '@chakra-ui/react';
import paperwireframe1 from "../assets/steakhouse/paperwireframe1.png"
import paperwireframe2 from "../assets/steakhouse/paperwireframe2.png"
import Badges from './Badges';

const PaperWireframes = () => {
  return (
    <Box w={"100%"} color={'gray.600'} pb={8}>
      <VStack align="stretch" spacing={8}>
        

        <Grid templateColumns={{base: "1fr", md: "repeat(2, 1fr)"}} gap={8} align='center'>
          {/* Crazy 8 Sketches */}
          <GridItem>
            <VStack align="stretch" spacing={4}>
            <Box maxW="350px" mx="auto">
                <Image
                src={paperwireframe1}
                alt="Crazy 8 wireframe sketches"
                h={'auto'}
                w='100%'

              />

            </Box>
              
              <VStack align="stretch" spacing={2}>
                <Text textStyle={'captionbold'} textTransform={'capitalize'}>Initial Concepts</Text>
                <Text textStyle={'caption'} >
                  Five quick sketches exploring different approaches to the main ordering interface.
                </Text>
                <HStack justify={'center'} spacing={2} mt={2}>
                <Badges bg='semantic.background.secondary' color='gray.600' >Location Selection</Badges>
                <Badges bg='semantic.background.secondary' color='gray.600' >Menu View</Badges>
                <Badges bg='semantic.background.secondary' color='gray.600' >Order Flow</Badges>
                </HStack>
              </VStack>
            </VStack>
          </GridItem>

          {/* Refined Wireframe */}
          <GridItem>
            <VStack align="stretch" spacing={4}>
            <Box maxW="3350px" mx="auto">
                <Image
                src={paperwireframe2}
                alt="Crazy 8 wireframe sketches"
                h={'auto'}
                w='100%'

              />

            </Box>
              <VStack align="stretch" spacing={2}>
                <Text textStyle={'captionbold'} textTransform={'capitalize'}>Refined Design</Text>
                <Text textStyle={'caption'} >
                  The final paper wireframe incorporating the best elements from the initial concepts.
                </Text>
                <HStack justify={'center'} spacing={2} mt={2}>
                  <Badges>Selected Design</Badges>
                  <Badges>Ready for Digital</Badges>
                </HStack>
              </VStack>
            </VStack>
          </GridItem>
        </Grid>

      </VStack>
    </Box>
  );
};

export default PaperWireframes;