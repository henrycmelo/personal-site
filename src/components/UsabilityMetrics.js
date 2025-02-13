import React from "react";
import { Box, Text, VStack, Grid, GridItem, Image } from "@chakra-ui/react";
import errorImage from "../assets/archives/error.svg"

const UsabilityMetric = ({ number, label }) => (
  <VStack spacing={2} align="center" color="gray.600">
    <Text textStyle={'pbold'}>
      {number}
    </Text>
    <Text textStyle="caption" textAlign="center">
      {label}
    </Text>
  </VStack>
);

const UsabilityMetrics = () => {
  return (
    <Box w="100%" >
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
        gap={8}
        py={6}
      >
        <GridItem>
          <UsabilityMetric 
            number="48" 
            label="SUS Score (Below average usability)"
          />
        </GridItem>
        <GridItem>
          <UsabilityMetric
            number="45%"
            label="Users struggled to locate the donation button"
          />
        </GridItem>
        <GridItem>
          <UsabilityMetric
            number="8.5m"
            label="Average time to complete donation"
          />
        </GridItem>
        <GridItem>
          <UsabilityMetric number="70%" label="Users encountered form errors" />
        </GridItem>
      </Grid>

      <Box
        backgroundColor={"semantic.background.secondary"}
        w={"100%"}
        p={6}
        boxShadow={"md"}
      >
        <VStack >
          <Box display="flex" justifyContent={"center"}>
            <Image src={errorImage} alt="error illustration" maxW={"100px"} />
          </Box>

          <Text as="p" textStyle={"pbold"} textTransform={"capitalize"}>
            Usability issues
          </Text>
          <Text as="p" textStyle="p">
          Initial testing revealed significant usability issues in the donation flow, 
          with users struggling to complete basic tasks and experiencing high error rates.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default UsabilityMetrics;
