import React from 'react';
import {
  Box,
  VStack,
  Grid,
  GridItem,
  Text,
  Divider
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import journeyData from '../assets/steakhouse/data/journey';




const JourneyMap = () => {
  return (
    <Box w="100%" color={'gray.600'} pb={8}>
      <VStack align="stretch" spacing={8}>

        <Grid
          templateColumns={{base:"1fr", xl:"repeat(5, 1fr)"}}
          gap={4}
          overflowX="auto"
         
        >
          {journeyData.phases.map((phase, index) => (
            <GridItem key={index}>
              <VStack 
                align="stretch" 
                bg="semantic.background.secondary" 
                p={4} 
                h="100%"
                spacing={4}
              >
                <VStack>
                  <Box color="semantic.text.primary">
                    <FontAwesomeIcon icon={phase.icon} />
                  </Box>
                  <Text textStyle={'pbold'} textAlign="center" textTransform={'capitalize'}>{phase.stage}</Text>
                </VStack>

                <Divider variant={'dividerSection'} />

                <Box>
                  <Text textStyle="captionbold"  mb={1}>Actions</Text>
                  <Text textStyle="caption">{phase.actions}</Text>
                </Box>

                <Box>
                  <Text textStyle="captionbold" mb={1}>Thinking</Text>
                  <Text textStyle="caption">{phase.thinking}</Text>
                </Box>

                <Box>
                  <Text textStyle="captionbold" mb={1}>Feeling</Text>
                  <Text textStyle="caption">{phase.feeling}</Text>
                </Box>

                <Box>
                  <Text textStyle="captionbold" mb={1}>Pain Points</Text>
                  <Text textStyle="caption">{phase.painPoints}</Text>
                </Box>

                <Box>
                  <Text textStyle="captionbold" mb={1}>Opportunities</Text>
                  <Text textStyle="caption">{phase.opportunities}</Text>
                </Box>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default JourneyMap;