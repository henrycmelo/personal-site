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
  Container,
  UnorderedList
} from '@chakra-ui/react';



const CompetitiveAnalysis = ({competitors}) => {
  
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="stretch">
        
        
        <Grid 
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
          gap={6}
          color={'gray.600'}
        >
          {competitors.map((competitor, index) => (
            <GridItem 
              key={index}
              p={6}
             
              
              bg="semantic.background.secondary"
             
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
                  <Text as='p' textStyle={'pbold'} textTransform={'capitalize'}>{competitor.name}</Text>
                </HStack>

                <Box textStyle={'caption'}>
                  <Text textStyle={'captionbold'}   mb={2}>
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
    </Container>
  );
};

export default CompetitiveAnalysis;