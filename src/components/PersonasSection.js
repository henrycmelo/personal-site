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
  List,
  ListItem,
  Tag,
  Divider
} from '@chakra-ui/react';
import { faUser, faBriefcase, faMapPin, faClock, faQuoteLeft, faBirthdayCake, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badges from './Badges';

const PersonasSection = ({personas}) => {
  return (
    <Box  maxW="container.xl" >
      
      {personas.map((persona, index) => (
        <Grid
          key={index}
          templateColumns={{ base: "1fr", md: "300px 1fr" }}
          gap={8}
          mb={12}
          bg={'semantic.background.secondary'}
          p={12}
          color={'gray.600'}
          textStyle={'caption'}
        >
          {/* Left Column */}
          <GridItem>
            <VStack align="stretch" spacing={6}>
              <Image
                src={persona.image}
                alt={persona.name}
                borderRadius="full"
                objectFit="cover"
              />
              
              <VStack align="stretch" spacing={4}>
                <Heading size="lg">{persona.name}</Heading>
                <HStack>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <Text>{persona.occupation}</Text>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faMapPin} />
                  <Text>{persona.location}</Text>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faBirthdayCake} />
                  <Text>{persona.age} years old</Text>
                </HStack>
              </VStack>
    
              <Box>
                <Text fontWeight="bold" mb={2}>Personality</Text>
                <HStack wrap="wrap" spacing={2}>
                  {persona.personality.map((trait, index) => (
                    <Badges key={index} color={'semantic.background.primary'}>{trait}</Badges>
                  ))}
                </HStack>
              </Box>
            </VStack>
          </GridItem>
    
          {/* Right Column */}
          <GridItem>
            <VStack align="stretch" spacing={6}>
              <Box>
                <Text as='p' textStyle={'pbold'} mb={3}>About</Text>
                <Text>{persona.about}</Text>
              </Box>
    
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
                <Box>
                <Text as='p' textStyle={'pbold'} mb={3}>Goals</Text>
                  <List spacing={2}>
                    {persona.goals.map((goal, index) => (
                      <ListItem key={index}>• {goal}</ListItem>
                    ))}
                  </List>
                </Box>
    
                <Box>
                  <Text as='p' textStyle={'pbold'} mb={3}>Pain Points</Text>
                  <List spacing={2}>
                    {persona.painPoints.map((pain, index) => (
                      <ListItem key={index}>• {pain}</ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
    
              <Box>
                <Text as='p' textStyle={'pbold'} mb={3}>Behaviors</Text>
                <List spacing={2}>
                  {persona.behaviors.map((behavior, index) => (
                    <ListItem key={index}>• {behavior}</ListItem>
                  ))}
                </List>
              </Box>
    
              <Box bg="semantic.background.primary" p={4} borderRadius="md" boxShadow={'md'}>
                <HStack mb={2}>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  <FontAwesomeIcon icon={faQuoteRight} />
                  <Text as='p' textStyle={'pbold'}>Quote</Text>
                </HStack>
                <Text fontStyle="italic">
                  "{persona.quote}"
                </Text>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      ))}
    </Box>
  );
};

export default PersonasSection;