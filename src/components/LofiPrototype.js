import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  AspectRatio,
  List,
  ListItem,
  ListIcon,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import lofiFlow from "../assets/steakhouse/lofi-flow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import orderSucces from "../assets/steakhouse/ordersucces.png";

const LofiPrototype = () => {
  return (
    <Box maxW="container.xl">
      <VStack align="stretch" spacing={8}>
        {/* Flow Diagram */}
        <Box w="100%">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
            <GridItem>
              <Text
                as="p"
                textStyle={"pbold"}
                mb={4}
                textTransform={"capitalize"}
              >
                User Flow
              </Text>
              <Image src={lofiFlow} alt="User flow diagram" mb={4} />
            </GridItem>
            <GridItem>
              
            
  <Box maxW="350px" mx="auto">
    <Image 
      src={orderSucces} 
      alt="order Success"  
      h={'auto'}
      w='100%' 
    />
  </Box>
            </GridItem>
          </Grid>
        </Box>

        {/* Prototype */}
        <Box>
                  <Text as="p" textStyle="pbold" mb={4}>
                  Interactive Low-fi Prototype
                  </Text>
                  <Text textStyle="p" mb={6}>
                    Complete the following testing scenarios:
                  </Text>
                  <List spacing={3} mb={6}>
                    <ListItem display="flex" alignItems="center" gap={2}>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <Text textStyle="caption">
                      Order a Steak from the
                      homepage.
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center" gap={2}>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <Text textStyle="caption">
                      Localize the nearest
                      restaurant to your home.
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center" gap={2}>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <Text textStyle="caption">Confirm payment and complete
                      checkout process from the homepage.</Text>
                    </ListItem>
                  </List>
                  <AspectRatio ratio={9 / 16} maxH={"650px"}>
                    <iframe
                      id="figma-iframe"
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                      }}
                      src="https://embed.figma.com/proto/jTg5y0K73FjmiGZxtmegGA/My-project-(steakhouse)?page-id=0%3A1&node-id=51-110&viewport=243%2C455%2C0.5&scaling=scale-down&content-scaling=fixed&starting-point-node-id=51%3A110&embed-host=share&hide-ui=1"
                      allowFullScreen
                    ></iframe>
                  </AspectRatio>
                </Box>
        
      </VStack>
    </Box>
  );
};

export default LofiPrototype;
