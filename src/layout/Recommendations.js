import {
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  CardFooter,
  VStack,
  Stack,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";
import { useAlertContext } from "../context/alertContext";
import GridItemComponent from "./GridItemComponent";

const Recommendations = ({
  backgroundColor,
  recommendationsData,
}) => {
  const { colorMode } = useAlertContext();
  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      alignItems={"center"}
      spacing={8}
      color={colorMode === "light" ? "dark" : "light"}
      width="100vw"
      p={{ base: 8, md: 32 }}
    >
      <VStack alignItems={"center"} justifyContent={"center"} width="80vw">
        <ScrollReveal>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "6xl" }}
            paddingBottom={12}
            textAlign={"center"}
          >
            RECOMMENDATIONS
          </Heading>
          {recommendationsData &&
            recommendationsData.map((recommendation, index) => (
              <React.Fragment key={index}>
                <ScrollReveal>
                  <Text
                    align={"center"}
                    fontSize={{ base: "2xl", md: "4xl" }}
                    textStyle="h6"
                    textColor={colorMode === "light" ? "blue" : "blueDarkMode"}
                    paddingBottom={4}
                  >
                    {recommendation.type}
                  </Text>
                </ScrollReveal>
                <ScrollReveal>
                  <Grid
                    templateColumns="repeat(1, 3fr)"
                    templateRows="repeat(9,1/2fr)"
                    gap={1}
                    align="center"
                    pb={8}
                  >
                    {recommendation.data &&
                      recommendation.data.map((subItem, subIndex) => (
                        <GridItemComponent
                          key={subIndex}
                          icon={subItem.icon ? subItem.icon : ""}
                          title={subItem.iconTitle ? subItem.iconTitle : ""}
                          color={colorMode === "light" ? "dark" : "light"}
                          items={subItem.items ? subItem.items : ""}
                        />
                      ))}
                  </Grid>
                </ScrollReveal>
                <ScrollReveal>
                  <Stack direction={{ base: "column", md: "row" }} pb={16}>
                    {recommendation.images && recommendation.images.map((image, index) => ( 
                      <Card
                      key={index}
                      boxShadow="xl"
                      backgroundColor={
                        colorMode === "light" ? "white" : "darkDarkMode"
                      }
                      border={
                        colorMode === "light" ? "none" : "1px solid #C3C3C3"
                      }
                    >
                      <CardBody>
                        <Image
                          src={image.imagePath}
                          alt={image.description}
                          background="none"
                          borderRadius="lg"
                        />
                      </CardBody>
                      <CardFooter justify={"center"}>
                        <Text
                          as={"b"}
                          fontSize="lg"
                          textStyle="body"
                          textColor={
                            colorMode === "light" ? "blue" : "blueDarkMode"
                          }
                        >
                          {image.description}
                        </Text>
                      </CardFooter>
                      </Card>
                    ))}


                  </Stack>
                </ScrollReveal>
              </React.Fragment>
            ))}
        </ScrollReveal>
      </VStack>
    </FullScreenSection>
  );
};

export default Recommendations;
