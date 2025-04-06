import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Text,
  List,
  HStack,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';


const FindingItem = ({ title, description, isSuccess }) => (
  <HStack align={'flex-start'} color={'semantic.text.primary'} >
    <FontAwesomeIcon 
      icon={isSuccess ? faCircleCheck : faCircleXmark}
      color="#107c7c"
      style={{ marginTop: "10px" }}
    />
    <Box>
      <Text textStyle="p" >{title}</Text>
      <Text textStyle="caption" color={'gray.600'}>{description}</Text>
    </Box>
  </HStack>
);

const FindingsRound = ({ title, findings, isSuccess }) => (
  <GridItem>
    <Box   height="100%">
      <Text textStyle={"captionbold"}
                        color="semantic.text.primary"
                        textTransform="uppercase" pb={4}>
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
    <Box maxW="container.xl" py={8}>

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