import {
    Heading,
    Image,
    Text,
    Card,
    CardBody,
    CardFooter,
    VStack,
    Stack,
    List,
    ListItem,
    ListIcon,
    Grid,
    GridItem
  } from "@chakra-ui/react";
  import React from "react";
  import FullScreenSection from "../components/FullScreenSection";
  import ScrollReveal from "../hooks/ScrollReveal";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdCheckCircle } from "react-icons/md";
  
  const Analyze= ({
    imageSrc,
    type,
    description,
    descriptionImage,
    backgroundColor,
    icon,
    iconTitle,
    item,
    item2,
    item3
  }) => {
    return (
      <FullScreenSection
        backgroundColor={backgroundColor}
        alignItems={"center"}
        spacing={8}
        width="100vw"
        p={{ base: 8, md: 32 }}
      >
        <VStack alignItems={"center"} justifyContent={"center"} width={{base:'80vw', md:'60vw'}}>
          <ScrollReveal>
            <Heading
              as="h2"
              fontSize={{base:"4xl", md:"6xl"}}
              paddingBottom={12}
              textAlign={"center"}
            >
              ANALYZE
            </Heading>
          </ScrollReveal>
          <ScrollReveal><Text align='center' fontSize={{base:"2xl", md:"4xl"}} textStyle="h6" textColor={"blue"} paddingBottom={4}>
          {type}
        </Text></ScrollReveal>
        <Text fontSize={{base:"lg", md:"2xl"}} textStyle='body' textColor={"dark"}  textAlign={'center'} paddingBottom={8}>
            {description}
        </Text>
          <ScrollReveal>
          <Grid
          templateColumns="repeat(1, 3fr)"
          templateRows="repeat(9,1/2fr)"
          gap={1}
          align="center"
          pb={8}
        >
          <GridItem>
            <ScrollReveal>
              <FontAwesomeIcon icon={icon} size="4x" color="#FC9039" />
            </ScrollReveal>
          </GridItem>
          <GridItem >
          <ScrollReveal>
            <Text fontSize={{base:"lg", md:"2xl"}} textStyle="h6" color="dark">
              {iconTitle}
            </Text>{" "}
            </ScrollReveal>
          </GridItem>
          <GridItem pb={6}>
          <ScrollReveal>
            <List spacing={1} fontSize="sm" color="dark" textStyle="body">
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue" />

                {item}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue" />
                {item2}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue" />
                {item3}
              </ListItem>
            </List>
            </ScrollReveal>
          </GridItem>

          
        
        </Grid>

          <Stack direction={{ base: "column", md: "row" }}>
            
            <Card boxShadow="xl">
              <CardBody>
                <Image
                  src={imageSrc}
                  alt={descriptionImage}
                  background="none"
                  borderRadius="lg"
                />
              </CardBody>
  
              <CardFooter justify={"center"}>
                <Text as={"b"} fontSize="lg" textStyle="body" textColor={"blue"}>
                  {descriptionImage}
                </Text>
              </CardFooter>
            </Card>
            
          </Stack>
          </ScrollReveal>
        </VStack>
      </FullScreenSection>
    );
  };
  
  export default Analyze;
  