import React from 'react';
import {
  Box,
  VStack,
  Grid,
  GridItem,
  Text,
  List,
  ListItem,
  HStack,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';


const FindingItem = ({ title, description, isSuccess }) => (
  <HStack align={'flex-start'} color={'gray.600'}>
    <FontAwesomeIcon 
      icon={isSuccess ? faCircleCheck : faCircleXmark}
      color={'gray.600'}
      style={{ marginTop: "10px" }}
    />
    <Box>
      <Text textStyle="p">{title}</Text>
      <Text textStyle="caption">{description}</Text>
    </Box>
  </HStack>
);

const FindingsRound = ({ title, findings, isSuccess }) => (
  <GridItem>
    <Box   height="100%">
      <Text as="p" textStyle="pbold" mb={4} textTransform="capitalize">
        {title}
      </Text>
      <List spacing={4}>
        {findings.map((finding, index) => (
          <FindingItem
            key={index}
            title={finding.title}
            description={finding.description}
            isSuccess={isSuccess}
          />
        ))}
      </List>
    </Box>
  </GridItem>
);

const UsabilityStudy = ({usabilityData}) => {
  return (
    <Box maxW="container.xl" pb={4}>

        <Grid templateColumns={{base: "1fr", md: "1fr 1fr"}} gap={8} >
          <FindingsRound 
            title={usabilityData.roundOne.title}
            findings={usabilityData.roundOne.findings}
            isSuccess={false}
          />
          <FindingsRound 
            title={usabilityData.roundTwo.title}
            findings={usabilityData.roundTwo.findings}
            isSuccess={true}
          />
        </Grid>

    </Box>
  );
};

export default UsabilityStudy;