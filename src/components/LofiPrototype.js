import React from "react";
import {
  Box,
  VStack,
  Text,
  Image,
  AspectRatio,
  List,
  ListItem,
  GridItem,
  Grid,
  Show,
  Hide
} from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import lofiFlow from "../assets/steakhouse/lofi-flow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import orderSucces from "../assets/steakhouse/ordersucces.png";

const LofiPrototype = () => {
  const prototypeUrl =
    "https://embed.figma.com/proto/jTg5y0K73FjmiGZxtmegGA/My-project-(steakhouse)?page-id=0%3A1&node-id=51-110&viewport=243%2C455%2C0.5&scaling=scale-down&content-scaling=fixed&starting-point-node-id=51%3A110&embed-host=share&hide-ui=1";
  return (
    <Box w="100%" py={8}>
      <VStack align="stretch" spacing={8}>
        {/* Flow Diagram */}
        <Box w="100%">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
            <GridItem>
              <Text
                as="p"
                mb={4}
                textStyle={"captionbold"}
                color="semantic.text.primary"
                textTransform="uppercase"
              >
                User Flow
              </Text>
              <Image src={lofiFlow} alt="User flow diagram" mb={4} />
            </GridItem>
            <GridItem>
              <Box maxW="200px" mx="auto">
                <Image
                  src={orderSucces}
                  alt="order Success"
                  h={"auto"}
                  w="100%"
                />
              </Box>
            </GridItem>
          </Grid>
        </Box>

        {/* Prototype */}
        <Box>
          <Text textStyle={"captionbold"}
                color="semantic.text.primary"
                textTransform="uppercase">
            Interactive Low-fi Prototype
          </Text>
          <Text textStyle="p" mb={6} color="semantic.text.primary">
            Complete the following testing scenarios:
          </Text>
          <List spacing={3} mb={6} color='gray.600'>
            <ListItem display="flex" alignItems="center" gap={2}>
              <FontAwesomeIcon icon={faArrowRight} color="#107c7c" />
              <Text textStyle="caption">Order a Steak from the homepage.</Text>
            </ListItem>
            <ListItem display="flex" alignItems="center" gap={2}>
              <FontAwesomeIcon icon={faArrowRight} color="#107c7c"/>
              <Text textStyle="caption">
                Localize the nearest restaurant to your home.
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center" gap={2}>
              <FontAwesomeIcon icon={faArrowRight} color="#107c7c"/>
              <Text textStyle="caption">
                Confirm payment and complete checkout process from the homepage.
              </Text>
            </ListItem>
          </List>
          <Hide above="md">
            <Text textStyle={"captionbold"}
                color="semantic.text.primary"
                textTransform="uppercase" mb={4}>
              Click below to try the Low-fi prototype!
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
      </VStack>
    </Box>
  );
};

export default LofiPrototype;
