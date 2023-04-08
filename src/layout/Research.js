import {
  Heading,
  Text,
  VStack,
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,

} from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdCheckCircle } from "react-icons/md";


const Research = ({
  subtitle,
  description,
  iconTitle,
  iconTitle2,
  iconTitle3,
  item,
  item2,
  item3,
  item21,
  item22,
  item23,
  item31,
  item32,
  item33,
  backgroundColor,
  icon,
  icon2,
  icon3
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
          <Heading as="h2" fontSize={{base:"4xl", md:"6xl"}} paddingBottom={12}>
            RESEARCH
          </Heading>
        </ScrollReveal>

        <ScrollReveal>
          <Text
            align={'center'}
          
            fontSize={{base:"2xl", md:"4xl"}}
            textStyle="h6"
            textColor={"blue"}
            paddingBottom={4}
            
          >
            {subtitle}
          </Text>
        </ScrollReveal>
        <ScrollReveal>
          <Text
            fontSize={{base:"lg", md:"2xl"}}
            textStyle="body"
            textColor={"dark"}
            textAlign={"center"}
            paddingBottom={8}
          >
            {description}
          </Text>
        </ScrollReveal>

        <Grid
          templateColumns="repeat(1, 3fr)"
          templateRows="repeat(9,1/2fr)"
          gap={1}
          align="center"
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

          <GridItem>
            <ScrollReveal>
              <FontAwesomeIcon icon={icon2} size="4x" color="#FC9039" />
            </ScrollReveal>
          </GridItem>
          <GridItem>
            <ScrollReveal>
          <Text fontSize={{base:"lg", md:"2xl"}} textStyle="h6" color="dark">
              {iconTitle2}
            </Text>{" "}
            </ScrollReveal>
          </GridItem>
          <GridItem pb={6}>
          <ScrollReveal>
            <List spacing={1} fontSize="sm" color="dark" textStyle="body">
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue" />

                {item21}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue" />
                {item22}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue" />
                {item23}
              </ListItem>
            </List>
            </ScrollReveal>
          </GridItem>

          <GridItem>
            <ScrollReveal>
              <FontAwesomeIcon icon={icon3} size="4x" color="#FC9039" />
            </ScrollReveal>
          </GridItem>
          <GridItem>
            <ScrollReveal>
          <Text fontSize={{base:"lg", md:"2xl"}} textStyle="h6" color="dark">
              {iconTitle3}
            </Text>{" "}
            </ScrollReveal>
          </GridItem>
          <GridItem pb={6}>
          <ScrollReveal>
            <List spacing={1} fontSize="sm" color="dark" textStyle="body">
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue" />

                {item31}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue" />
                {item32}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue" />
                {item33}
              </ListItem>
            </List>
            </ScrollReveal>
          </GridItem>
        </Grid>
      </VStack>
    </FullScreenSection>
  );
};

export default Research;
