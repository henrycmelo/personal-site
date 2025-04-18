import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  VStack,
  Divider,
  Flex,
  Wrap,
  WrapItem,
  Tag
} from "@chakra-ui/react";

const DesignRecommendations = ({ recommendations }) => {
  return (
    <Box color={"gray.600"} w="100%" p={4}>
      <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={8}>
        {recommendations.map((recommendation, index) => (
          <GridItem key={index}>
            <VStack align="stretch" spacing={6}>
              <Text
                textStyle={"captionbold"}
                color="semantic.accent"
                textTransform="uppercase"
                textAlign={{ base: "left", md: "center" }}
              >
                {recommendation.title}
              </Text>
              <Text
                as="p"
                textStyle={"caption"}
                textAlign={{ base: "left", md: "center" }}
                mb={4}
              >
                {recommendation.description}
              </Text>

              <Flex
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align="start"
                gap={6}
              >
                {/* Before Image */}
                <Box flex={1} w="100%">
                  <Text textAlign="center" mb={2} textStyle={"caption"}>
                    Before
                  </Text>
                  <Box maxW={{ base: "400px", md: "500px" }} mx="auto">
                    <Image
                      src={recommendation.beforeImage}
                      alt={`${recommendation.title} - Before`}
                      w="100%"
                      h="auto"
                      objectFit="contain"
                    />
                  </Box>
                </Box>

                {/* After Image */}
                <Box flex={1} w="100%">
                  <Text textAlign="center" mb={2} textStyle={"caption"}>
                    After
                  </Text>
                  <Box maxW={{ base: "400px", md: "500px" }} mx="auto">
                    <Image
                      src={recommendation.afterImage}
                      alt={`${recommendation.title} - After`}
                      w="100%"
                      h="auto"
                      objectFit="contain"
                    />
                  </Box>
                </Box>
              </Flex>

              {/* Key Features */}
              <Box>
                                  <Text as="p" textStyle={"captionbold"} mb={2} textAlign="center">
                                    Key Features:
                                  </Text>
                                  <Wrap justify="center" spacing={2}>
                  {recommendation.keyFeatures.map((feature, idx) => (
                    <WrapItem>
                      <Tag key={idx}
                            size="md"
                            variant={"outline"}
                            color={"semantic.text.primary"}>
                        {feature}
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
                                </Box>
              

              {/* Only show divider if it's not the last element */}
              {index !== recommendations.length - 1 && (
                <Divider variant={"dividerSection"} my={4} />
              )}
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default DesignRecommendations;
