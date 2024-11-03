import {
  Heading,
  Text,
  VStack,
  Grid,
  GridItem,
  Image,
  List,
  ListItem,
  ListIcon,
  Highlight,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";
import { useAlertContext } from "../context/alertContext";

const CompetitiveAnalysis = ({
  title,
  subtitle,
  description,
  data,
  backgroundColor,
  conclusion,
  color,
  query,
}) => {
  const { colorMode } = useAlertContext();
  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      color={colorMode === "light" ? "dark" : "light"}
      alignItems={"center"}
      spacing={8}
      width="100vw"
      p={{ base: 8, md: 32 }}
    >
      <VStack
        alignItems={"left"}
        justifyContent={"left"}
        width={{ base: "80vw", md: "60vw" }}
      >
        <ScrollReveal>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl" }}
            paddingBottom={12}
            fontWeight={"thin"}
          >
            {title ? "RESEARCH" : null}
          </Heading>
        </ScrollReveal>

        <ScrollReveal>
          <Text
            align={"left"}
            fontSize={{ base: "2xl", md: "4xl" }}
            textStyle="h6"
            textColor={colorMode === "light" ? "blue" : "blueDarkMode"}
            paddingBottom={4}
          >
            {subtitle}
          </Text>
        </ScrollReveal>
        <ScrollReveal>
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            textStyle="body"
            textColor={colorMode === "light" ? "dark" : "light"}
            textAlign={"left"}
            paddingBottom={8}
          >
            {description}
          </Text>
        </ScrollReveal>

        <Grid
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap={1}
          align="left"
        >
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <GridItem align={"center"}>
                <Image src={item.image} alt={item.title} />
                <Text
                  fontSize={{ base: "lg", md: "2xl" }}
                  textAlign={"left"}
                  textStyle="h6"
                  textColor={colorMode === "light" ? "dark" : "light"}
                >
                  {item.title}
                </Text>
                <List
                  spacing={1}
                  fontSize={{ base: "lg", md: "2xl" }}
                  textColor={color}
                  textStyle="body"
                  pb={8}
                >
                  {item.items &&
                    item.items.map((ite, index) => (
                      <ListItem key={index} textAlign={"left"} pb={4}>
                        <ListIcon
                          as={MdCheckCircle}
                          color={
                            colorMode === "light" ? "blue" : "blueDarkMode"
                          }
                        />
                        <Highlight
                          ignoreCase
                          query={query || []}
                          styles={{
                            color: "inherit",
                            fontWeight: "semibold",
                            textAlign: "left",
                          }}
                        >
                          {ite}
                        </Highlight>
                      </ListItem>
                    ))}
                </List>
                <Text
                  fontSize={{ base: "lg", md: "2xl" }}
                  textAlign={"left"}
                  textStyle="h6"
                  textColor={colorMode === "light" ? "dark" : "light"}
                >
                  {item.title2}
                </Text>
                <List
                  spacing={1}
                  fontSize={{ base: "lg", md: "2xl" }}
                  textColor={color}
                  textStyle="body"
                >
                  {item.items2 &&
                    item.items2.map((ite, index) => (
                      <ListItem key={index} textAlign={"left"} pb={4}>
                        <ListIcon
                          as={MdCheckCircle}
                          color={
                            colorMode === "light" ? "blue" : "blueDarkMode"
                          }
                        />
                        <Highlight
                          ignoreCase
                          query={query || []}
                          styles={{ color: "inherit", fontWeight: "semibold" }}
                        >
                          {ite}
                        </Highlight>
                      </ListItem>
                    ))}
                </List>
              </GridItem>
            </React.Fragment>
          ))}
        </Grid>
        <ScrollReveal>
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            textStyle="body"
            textColor={colorMode === "light" ? "dark" : "light"}
            textAlign={"left"}
            paddingBottom={8}
            fontStyle={"italic"}
            fontWeight={"bold"}
          >
            {conclusion || " "}
          </Text>
        </ScrollReveal>
      </VStack>
    </FullScreenSection>
  );
};

export default CompetitiveAnalysis;
