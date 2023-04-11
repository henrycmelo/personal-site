import {
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  CardFooter,
  VStack,
  List,
  ListItem,
  ListIcon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdCheckCircle } from "react-icons/md";
import { useAlertContext } from "../context/alertContext";

const UserTesting = ({
  type,
  description,
  imageSrc,
  descriptionImage,
  backgroundColor,
  hasFindings,
  icon,
  iconTitle,
  item,
  item2,
  item3,
  icon2,
  iconTitle2,
  item21,
  item22,
  item23,
}) => {
  const {  colorMode } = useAlertContext();
  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      color={colorMode==='light'? "dark":'light'}
      alignItems={"center"}
      spacing={8}
      width="100vw"
      p={{ base: 8, md: 32 }}
    >
      {hasFindings ? (
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
              textColor={colorMode==='light'?'blue':'blueDarkMode'}
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
              textColor={colorMode==='light'? "dark":'light'} 
              textAlign={"center"}
              paddingBottom={8}
            >
              {description}
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
              <GridItem>
                <ScrollReveal>
                  <FontAwesomeIcon icon={icon} size="4x" color="#FC9039" />
                </ScrollReveal>
              </GridItem>
              <GridItem>
                <ScrollReveal>
                  <Text
                    fontSize={{ base: "lg", md: "2xl" }}
                    textStyle="h6"
                    color={colorMode==='light'? "dark":'light'} 
                  >
                    {iconTitle}
                  </Text>{" "}
                </ScrollReveal>
              </GridItem>
              <GridItem pb={6}>
                <ScrollReveal>
                  <List spacing={1} fontSize="sm" textColor={colorMode==='light'? "dark":'light'}  textStyle="body">
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color={colorMode==='light'?'blue':'blueDarkMode'} />

                      {item}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color={colorMode==='light'?'blue':'blueDarkMode'} />
                      {item2}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color={colorMode==='light'?'blue':'blueDarkMode'} />
                      {item3}
                    </ListItem>
                  </List>
                </ScrollReveal>
              </GridItem>
            </Grid>
          </ScrollReveal>

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
                  <FontAwesomeIcon icon={icon2} size="4x" color="#FC9039" />
                </ScrollReveal>
              </GridItem>
              <GridItem>
                <ScrollReveal>
                  <Text
                    fontSize={{ base: "lg", md: "2xl" }}
                    textStyle="h6"
                    color={colorMode==='light'? "dark":'light'}
                  >
                    {iconTitle2}
                  </Text>{" "}
                </ScrollReveal>
              </GridItem>
              <GridItem pb={6}>
                <ScrollReveal>
                  <List spacing={1} fontSize="sm" textColor={colorMode==='light'? "dark":'light'} textStyle="body">
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color={colorMode==='light'?'blue':'blueDarkMode'} />

                      {item21}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color={colorMode==='light'?'blue':'blueDarkMode'} />
                      {item22}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color={colorMode==='light'?'blue':'blueDarkMode'} />
                      {item23}
                    </ListItem>
                  </List>
                </ScrollReveal>
              </GridItem>
            </Grid>
          </ScrollReveal>
        </VStack>
      ) : (
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
              textColor={colorMode==='light'?'blue':'blueDarkMode'}
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
              textColor={colorMode==='light'? "dark":'light'}
              textAlign={"center"}
              paddingBottom={8}
            >
              {description}
            </Text>
          </ScrollReveal>
          <ScrollReveal>
            <Card boxShadow="xl" backgroundColor={colorMode==='light'? "white" : 'darkDarkMode'} border={colorMode==='light'?'none':'1px solid #C3C3C3'}>
              <CardBody>
                <Image
                  src={imageSrc}
                  alt={descriptionImage}
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body" textColor={colorMode==='light'?'blue':'blueDarkMode'}>
                  {descriptionImage}
                </Text>
              </CardFooter>
            </Card>
          </ScrollReveal>
        </VStack>
      )}
    </FullScreenSection>
  );
};

export default UserTesting;
