import React from 'react';
import {
  Grid,
  GridItem,
  Box,
  Text,
  Image,
  ListItem,
  VStack,
  HStack,
  UnorderedList
} from '@chakra-ui/react';



const CompetitiveAnalysis = ({competitors}) => {
  
  return (
    
      <VStack spacing={8} align="stretch" w="100%" py={8}>
        
        
        <Grid 
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
          gap={6}
          color={'gray.600'}
        >
          {competitors.map((competitor, index) => (
            <GridItem 
              key={index}
              p={6}
              borderRadius="lg"
             shadow={'md'}
              border="1px"
                    borderColor="semantic.divider"
             
            >
              <VStack align="stretch" spacing={4}>
                <HStack spacing={4}>
                  <Image
                    src={competitor.logo}
                    alt={`${competitor.name} logo`}
                    boxSize="50px"
                    objectFit="cover"
                    borderRadius="full"
                  />
                  <Text as='p' textStyle={'pbold'} textTransform={'capitalize'} color='semantic.accent'>{competitor.name}</Text>
                </HStack>

                <Box textStyle={'caption'}>
                  <Text  textStyle={'captionbold'}   mb={2}>
                    Strengths
                  </Text>
                  <UnorderedList spacing={2}>
                    {competitor.strengths.map((strength, idx) => (
                      <ListItem key={idx}  alignItems="center">
                        
                        {strength}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>

                <Box textStyle={'caption'}>
                  <Text textStyle={'captionbold'} mb={2}>
                    Weaknesses
                  </Text>
                  <UnorderedList spacing={2}>
                    {competitor.weaknesses.map((weakness, idx) => (
                      <ListItem key={idx}  alignItems="center">
                        
                        {weakness}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    
  );
};

export default CompetitiveAnalysis;