import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  VStack,
  HStack,
  Divider
} from '@chakra-ui/react';
import Badges from './Badges';



const DigitalWireframes = ({digital}) => {
  return (
    <Box p={8} maxW="container.xl" color={'gray.600'}>
      <VStack align="stretch" spacing={8}>
        
        <Grid templateColumns={{base: "1fr", md: "repeat(3, 1fr)"}} gap={8}>
          {digital.map((screen, index) => (
            <GridItem key={index}>
              <VStack align="stretch" spacing={4}>
                <Box maxW="350px" mx="auto">
                <Image
                  src={screen.image}
                  alt={screen.title}
                  h={'auto'}
                w='100%'
                  
                />
                </Box>
                <VStack align="stretch" spacing={3}>
                  <Text as='p' textStyle={'captionbold'}>{screen.title}</Text>
                  <Text as='p' textStyle={'caption'}>
                    {screen.description}
                  </Text>
                  <Divider variant={'dividerSection'}/>
                  <Box>
                    <Text as='p' textStyle={'captionbold'} mb={2}>
                      Key Features:
                    </Text>
                    <HStack wrap="wrap" spacing={2}>
                      {screen.keyFeatures.map((feature, idx) => (
                        <Badges key={idx} size="sm" colorScheme="blue">
                          {feature}
                        </Badges>
                      ))}
                    </HStack>
                  </Box>
                </VStack>
              </VStack>
            </GridItem>
          ))}
        </Grid>

       
      </VStack>
    </Box>
  );
};

export default DigitalWireframes;