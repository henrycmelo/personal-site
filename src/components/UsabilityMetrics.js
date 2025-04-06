import React from "react";
import { Box, Text, VStack, Grid, GridItem, Image, Heading } from "@chakra-ui/react";
import errorImage from "../assets/archives/error.svg"

const UsabilityMetric = ({ number, label }) => (
  <VStack spacing={2} align="center" color="gray.600">
    <Text textStyle={'pbold'} color={'semantic.accent'}>
      {number}
    </Text>
    <Text textStyle="caption" textAlign="center">
      {label}
    </Text>
  </VStack>
);

const UsabilityMetrics = () => {
  return (
    <Box w="100%" py={4}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
        gap={8}
        pb={8}
       
      >
        <GridItem
        p={6}
        borderRadius="lg"
        shadow={"md"}
        border="1px"
        borderColor="semantic.divider"
        >
          <UsabilityMetric 
            number="48" 
            label="SUS Score (Below average usability)"
          />
        </GridItem>
        <GridItem
        p={6}
        borderRadius="lg"
        shadow={"md"}
        border="1px"
        borderColor="semantic.divider">
          <UsabilityMetric
            number="45%"
            label="Users struggled to locate the donation button"
          />
        </GridItem>
        <GridItem
        p={6}
        borderRadius="lg"
        shadow={"md"}
        border="1px"
        borderColor="semantic.divider">
          <UsabilityMetric
            number="8.5m"
            label="Average time to complete donation"
          />
        </GridItem>
        <GridItem
        p={6}
        borderRadius="lg"
        shadow={"md"}
        border="1px"
        borderColor="semantic.divider">
          <UsabilityMetric number="70%" label="Users encountered form errors" />
        </GridItem>
      </Grid>

      <Box
        rounded="lg"
        width="full"
        bg="semantic.background.secondary"
        p={{ base: 8, md: 12 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        
          <Box display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%">
            <Image src={errorImage} alt="error illustration" maxW={"100px"} />
          </Box>
          <Box textAlign="center">
                            <Heading
                              textStyle="pbold"
                              textTransform={"capitalize"}
                              color="semantic.accent"
                              pb={2}
                            >
                              Usability issues
                            </Heading>
          
                            <Text textStyle={"caption"} color="gray.600">
                            Initial testing revealed significant usability issues in the donation flow, 
                            with users struggling to complete basic tasks and experiencing high error rates.
                            </Text>
                          </Box>

        
      </Box>
    </Box>
  );
};

export default UsabilityMetrics;
