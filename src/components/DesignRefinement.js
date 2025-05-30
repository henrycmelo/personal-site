import React from "react";
import {
  Box,
  VStack,
  Grid,
  GridItem,
  Text,
  Image,
  AspectRatio,
  List,
  ListItem,
  Hide,
  Show,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import beforeImage from "../assets/steakhouse/before.png";
import before2Image from "../assets/steakhouse/before2.png";
import afterImage from "../assets/steakhouse/after.png";
import after2Image from "../assets/steakhouse/after2.png";
import mockupImage from "../assets/steakhouse/mockup1.png";
import mockup2Image from "../assets/steakhouse/mockup2.png";
import mockup3Image from "../assets/steakhouse/mockup3.png";

const DesignRefinement = () => {
  const prototypeUrl =
    "https://embed.figma.com/proto/jTg5y0K73FjmiGZxtmegGA/My-project-(steakhouse)?page-id=1184%3A9871&node-id=1184-9872&viewport=502%2C578%2C0.5&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1184%3A9872&show-proto-sidebar=0&embed-host=share&hide-ui=1";

  return (
    <Box w={"100%"} color="gray.600" py={8}>
      <VStack align="stretch" spacing={12}>
        {/* First Iteration */}
        <Box>
          <Text textStyle={"captionbold"}
                        color="semantic.text.primary"
                        textTransform="uppercase" mb={6}>
            First Design Iteration
          </Text>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} mb={8}>
            <GridItem>
              <Box>
                <Text textStyle="caption" mb={3}>
                  Before Testing
                </Text>
                <Image
                  src={beforeImage}
                  alt="Initial design"
                  height={"auto"}
                  maxHeight={"600px"}
                />
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Text textStyle="caption" mb={3}>
                  After User Feedback
                </Text>
                <Image
                  src={afterImage}
                  alt="First iteration"
                  height={"auto"}
                  maxHeight={"600px"}
                />
              </Box>
            </GridItem>
          </Grid>
        </Box>

        {/* Second Iteration */}
        <Box>
          <Text textStyle={"captionbold"}
                        color="semantic.text.primary"
                        textTransform="uppercase" mb={6}>
            Final Design Iteration
          </Text>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} mb={8}>
            <GridItem>
              <Box>
                <Text textStyle="caption" mb={3}>
                  Before Second Round
                </Text>
                <Image
                  src={before2Image}
                  alt="Second design"
                  height={"auto"}
                  maxHeight={"600px"}
                />
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Text textStyle="caption" mb={3}>
                  Final Design
                </Text>
                <Image
                  src={after2Image}
                  alt="Final design"
                  height={"auto"}
                  maxHeight={"600px"}
                />
              </Box>
            </GridItem>
          </Grid>
        </Box>

        {/* Key Screens */}
        <Box>
          <Text textStyle={"captionbold"}
                        color="semantic.text.primary"
                        textTransform="uppercase" mb={6}>
            Key Screens
          </Text>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            <GridItem>
              <Image
                src={mockupImage}
                alt="Location selection screen"
                height={"auto"}
                maxHeight={"600px"}
              />
              <Text textStyle="pbold" mt={2}>
                Location Selection
              </Text>
              <Text textStyle="caption">Streamlined restaurant finding</Text>
            </GridItem>
            <GridItem>
              <Image
                src={mockup2Image}
                alt="Menu customization screen"
                height={"auto"}
                maxHeight={"600px"}
              />
              <Text textStyle="pbold" mt={2}>
                Menu Customization
              </Text>
              <Text textStyle="caption">Intuitive ordering process</Text>
            </GridItem>
            <GridItem>
              <Image
                src={mockup3Image}
                alt="Checkout screen"
                height={"auto"}
                maxHeight={"600px"}
              />
              <Text textStyle="pbold" mt={2}>
                Checkout Flow
              </Text>
              <Text textStyle="caption">Clear order confirmation</Text>
            </GridItem>
          </Grid>
        </Box>

        {/* High Fidelity Prototype */}
        <Box>
          <Text textStyle={"captionbold"}
                        color="semantic.text.primary"
                        textTransform="uppercase" >
            Final Interactive Prototype
          </Text>
          <Text textStyle="p" mb={6} color="semantic.text.primary">
            Complete these tasks to experience the refined ordering flow:
          </Text>
          <List spacing={3} mb={6} color='gray.600'>
            <ListItem display="flex" alignItems="center" gap={2}>
              <FontAwesomeIcon icon={faArrowRight} color="#107c7c" />
              <Text textStyle="caption">
                Find the nearest steakhouse location
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center" gap={2}>
              <FontAwesomeIcon icon={faArrowRight}  color="#107c7c"/>
              <Text textStyle="caption">
                Customize and order a ribeye steak
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center" gap={2}>
              <FontAwesomeIcon icon={faArrowRight} color="#107c7c"/>
              <Text textStyle="caption">Complete the checkout process</Text>
            </ListItem>
          </List>
          <Hide above="md">
            <Text textStyle={"captionbold"}
                color="semantic.text.primary"
                textTransform="uppercase" mb={4}>
              Click below to try the prototype!
            </Text>
            <a href={prototypeUrl} target="_blank" rel="noreferrer">
              <Text
                as="p"
                textStyle="p"
                decoration="underline"
                textTransform="capitalize"
                mt={2}
                color='semantic.accent'
              >
                Click here to start
              </Text>
            </a>
          </Hide>
          <Show above="md">
            <AspectRatio ratio={9 / 16} maxH="650px">
              <iframe
                title="figma-prototype"
                src={prototypeUrl}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  width: "100%",
                }}
                allowFullScreen
              />
            </AspectRatio>
          </Show>
        </Box>

        {/* Impact Summary */}
      </VStack>
    </Box>
  );
};

export default DesignRefinement;
