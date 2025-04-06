import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  VStack,
  WrapItem,
  Wrap,
  Tag,
} from "@chakra-ui/react";


const DigitalWireframes = ({ digital }) => {
  return (
    <Box w="100%" color={"gray.600"} py={8}>
      <VStack align="stretch" spacing={8}>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            "2xl": "repeat(3, 1fr)",
          }}
          gap={8}
          align="center"
        >
          {digital.map((screen, index) => (
            <GridItem key={index}>
              <VStack align="stretch" spacing={4}>
                <Box maxW="200px" mx="auto">
                  <Image
                    src={screen.image}
                    alt={screen.title}
                    h={"auto"}
                    w="100%"
                  />
                </Box>
                <VStack align="stretch" spacing={3}>
                  <Text
                    textStyle={"captionbold"}
                    color="semantic.text.primary"
                    textTransform="uppercase"
                  >
                    {screen.title}
                  </Text>
                  <Text as="p" textStyle={"caption"}>
                    {screen.description}
                  </Text>

                  <Box>
                    <Text as="p" textStyle={"captionbold"} mb={2}>
                      Key Features:
                    </Text>
                    <Wrap justify="center" spacing={2}>
                      {screen.keyFeatures.map((feature, idx) => (
                        <WrapItem>
                          <Tag
                            key={idx}
                            size="md"
                            variant={"outline"}
                            color={"semantic.text.primary"}
                          >
                            {feature}
                          </Tag>
                        </WrapItem>
                      ))}
                    </Wrap>
                  </Box>
                </VStack>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default DigitalWireframes;
