import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  VStack,
  WrapItem,
  Wrap,
} from '@chakra-ui/react';
import Badges from './Badges';



const DigitalWireframes = ({digital}) => {
  return (
    <Box w="100%" color={'gray.600'} pb={8}>
      <VStack align="stretch" spacing={8}>
        
        <Grid templateColumns={{base: "1fr", md:"repeat(2, 1fr)", '2xl': "repeat(3, 1fr)"}} gap={8} align='center'>
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
                  
                  <Box>
                    <Text as='p' textStyle={'captionbold'} mb={2}>
                      Key Features:
                    </Text>
                    <Wrap justify="center" spacing={2}>
                      {screen.keyFeatures.map((feature, idx) => (
                        <WrapItem>
                            <Badges key={idx} size="sm" >
                          {feature}
                        </Badges>

                        </WrapItem>
                        
                      ))}
                    </Wrap>
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