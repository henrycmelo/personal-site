import {
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  CardFooter,
  VStack,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";
import { useAlertContext } from "../context/alertContext";
import GridItemComponent from "./GridItemComponent";

const UserTesting = ({
  type,
  description,
  backgroundColor,
  hasFindings,
  userTestingData,
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
        alignItems={"center"}
        justifyContent={"center"}
        width={{ base: "80vw", md: "60vw" }}
      >
        <ScrollReveal>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "6xl" }}
            paddingBottom={12}
          >
            USER TESTING
          </Heading>
        </ScrollReveal>

        <ScrollReveal>
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            textStyle="h6"
            textColor={colorMode === "light" ? "blue" : "blueDarkMode"}
            paddingBottom={4}
            align={"center"}
          >
            {type}
          </Text>
        </ScrollReveal>
        <ScrollReveal>
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            textStyle="body"
            textColor={colorMode === "light" ? "dark" : "light"}
            textAlign={"center"}
            paddingBottom={8}
          >
            {description}
          </Text>
        </ScrollReveal>

        {hasFindings ? (
          <ScrollReveal>
            <Grid
              templateColumns="repeat(1, 3fr)"
              templateRows="repeat(9,1/2fr)"
              gap={1}
              align="center"
              pb={8}
            >
              {userTestingData.map((item, index) => (
                <GridItemComponent
                  key={index}
                  icon={item.icon ? item.icon : ""}
                  title={item.title ? item.title : ""}
                  color={colorMode === "light" ? "dark" : "light"}
                  items={item.items ? item.items : ""}
                />
              ))}
            </Grid>
          </ScrollReveal>
        ) : (
          userTestingData.map((item, index) => (
            <ScrollReveal key={index}>
              <Card
                boxShadow="xl"
                backgroundColor={
                  colorMode === "light" ? "white" : "darkDarkMode"
                }
                border={colorMode === "light" ? "none" : "1px solid #C3C3C3"}
              >
                <CardBody>
                  <Image
                    src={item.imagePath}
                    alt={item.description}
                    background="none"
                    borderRadius="lg"
                  />{" "}
                </CardBody>

                <CardFooter justify={"center"}>
                  <Text
                    fontSize="lg"
                    textStyle="body"
                    textColor={colorMode === "light" ? "blue" : "blueDarkMode"}
                  >
                    {item.description}
                  </Text>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))
        )}
      </VStack>
    </FullScreenSection>
  );
};

export default UserTesting;
