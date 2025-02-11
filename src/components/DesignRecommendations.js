import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Tag,
  Divider,
  Flex
} from '@chakra-ui/react';
import Badges from './Badges';

const DesignRecommendations = ({recommendations}) => {
  return (
    <Box p={8} maxW="container.xl" color={'gray.600'}>
      <VStack align="stretch" spacing={8}>
        <Grid templateColumns={{base: "1fr", md: "1fr"}} gap={8}>
          {recommendations.map((recommendation, index) => (
            <GridItem key={index}>
              <VStack align="stretch" spacing={6}>
                <Heading size="md" textAlign="center">{recommendation.title}</Heading>
                <Text textAlign="center" mb={4}>{recommendation.description}</Text>
                
                <Flex 
                  direction={{base: "column", md: "row"}} 
                  justify="space-between" 
                  align="start" 
                  gap={6}
                >
                  {/* Before Image */}
                  <Box flex={1} w="100%">
                    <Text textAlign="center" mb={2} fontWeight="bold">Before</Text>
                    <Box maxW="500px" mx="auto">
                      <Image
                        src={recommendation.beforeImage}
                        alt={`${recommendation.title} - Before`}
                        w="100%"
                        h="auto"
                        objectFit="contain"
                        border="1px solid"
                        borderColor="gray.200"
                        boxShadow="md"
                      />
                    </Box>
                  </Box>

                  {/* After Image */}
                  <Box flex={1} w="100%">
                    <Text textAlign="center" mb={2} fontWeight="bold">After</Text>
                    <Box maxW="500px" mx="auto">
                      <Image
                        src={recommendation.afterImage}
                        alt={`${recommendation.title} - After`}
                        w="100%"
                        h="auto"
                        objectFit="contain"
                        border="1px solid"
                        borderColor="gray.200"
                        boxShadow="md"
                      />
                    </Box>
                  </Box>
                </Flex>

                {/* Key Features */}
                <Box mt={4}>
                  <Text as='p' textAlign="center" textStyle={'captionbold'} mb={2}>
                    Key Features:
                  </Text>
                  <HStack justify="center" wrap="wrap" spacing={2}>
                    {recommendation.keyFeatures.map((feature, idx) => (
                      <Badges key={idx} size="sm" colorScheme="blue">
                        {feature}
                      </Badges>
                    ))}
                  </HStack>
                </Box>

                <Divider variant={'dividerSection'} my={4}/>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default DesignRecommendations;