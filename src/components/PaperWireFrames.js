import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  VStack,
  HStack,
  Tag,
} from "@chakra-ui/react";
import paperwireframe1 from "../assets/steakhouse/paperwireframe1.png";
import paperwireframe2 from "../assets/steakhouse/paperwireframe2.png";

const PaperWireframes = () => {
  return (
    <Box w={"100%"} color={"gray.600"} py={8}>
      <VStack align="stretch" spacing={8}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={8}
          align="center"
        >
          {/* Crazy 8 Sketches */}
          <GridItem>
            <VStack align="stretch" spacing={4}>
              <Box maxW="200" mx="auto">
                <Image
                  src={paperwireframe1}
                  alt="Crazy 8 wireframe sketches"
                  h={"auto"}
                  w="100%"
                />
              </Box>

              <VStack align="stretch" spacing={2}>
                <Text
                  textStyle={"captionbold"}
                  color="semantic.text.primary"
                  textTransform="uppercase"
                >
                  Initial Concepts
                </Text>
                <Text textStyle={"caption"}>
                  Five quick sketches exploring different approaches to the main
                  ordering interface.
                </Text>
                <HStack justify={"center"} spacing={2} mt={2}>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    Location Selection
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    Menu View
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    Order Flow
                  </Tag>
                </HStack>
              </VStack>
            </VStack>
          </GridItem>

          {/* Refined Wireframe */}
          <GridItem>
            <VStack align="stretch" spacing={4}>
              <Box maxW="200px" mx="auto">
                <Image
                  src={paperwireframe2}
                  alt="Crazy 8 wireframe sketches"
                  h={"auto"}
                  w="100%"
                />
              </Box>
              <VStack align="stretch" spacing={2}>
                <Text
                  textStyle={"captionbold"}
                  color="semantic.text.primary"
                  textTransform="uppercase"
                >
                  Refined Design
                </Text>
                <Text textStyle={"caption"}>
                  The final paper wireframe incorporating the best elements from
                  the initial concepts.
                </Text>
                <HStack justify={"center"} spacing={2} mt={2}>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    Selected Design
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    Ready for Digital
                  </Tag>
                </HStack>
              </VStack>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

export default PaperWireframes;
