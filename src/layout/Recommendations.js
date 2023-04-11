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
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";
import { MdSettings } from "react-icons/md";
import { useAlertContext } from "../context/alertContext";

const Recommendations = ({
  title,
  imageSrc,
  imageSrc2,
  type,
  descriptionImage,
  descriptionImage2,
  backgroundColor,
  item,
  item2,
  item3,
  item4,
  hasTwoBulletPoints,
  hasThreeBulletPoints,
}) => {
  const {  colorMode } = useAlertContext();
  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      alignItems={"center"}
      spacing={8}
      color={colorMode==='light'? "dark":'light'}
      width="100vw"
      p={{ base: 8, md: 32 }}
    >
      <VStack alignItems={"center"} justifyContent={"center"} width="80vw">
        <ScrollReveal>
          <Heading
            as="h2"
            fontSize={{base:"4xl", md:"6xl"}}
            paddingBottom={12}
            textAlign={"center"}
          >
            {title}
          </Heading>
        </ScrollReveal>
        <ScrollReveal>
          <Text
            align={'center'}
            fontSize={{base:"2xl", md:"4xl"}}
            textStyle="h6"
            textColor={colorMode==='light'?'blue':'blueDarkMode'}
            paddingBottom={4}
          >
            {type}
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
            {hasTwoBulletPoints ? (
              <GridItem pb={6}>
                <ScrollReveal>
                  <List
                    spacing={1}
                    fontSize={{base:"lg", md:"2xl"}}
                    color={colorMode==='light'? "dark":'light'}
                    textStyle="body"
                  >
                    <ListItem>
                      <ListIcon as={MdSettings} color={colorMode==='light'?'blue':'blueDarkMode'}/>

                      {item}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdSettings} color={colorMode==='light'?'blue':'blueDarkMode'}/>
                      {item2}
                    </ListItem>
                  </List>
                </ScrollReveal>
              </GridItem>
            ) : hasThreeBulletPoints ? (
              <GridItem pb={6}>
                <ScrollReveal>
                  <List
                    spacing={1}
                    fontSize={{base:"lg", md:"2xl"}}
                    color={colorMode==='light'? "dark":'light'}
                    textStyle="body"
                  >
                    <ListItem>
                      <ListIcon as={MdSettings} color={colorMode==='light'?'blue':'blueDarkMode'} />

                      {item}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdSettings} color={colorMode==='light'?'blue':'blueDarkMode'} />
                      {item2}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdSettings} color={colorMode==='light'?'blue':'blueDarkMode'} />
                      {item3}
                    </ListItem>
                  </List>
                </ScrollReveal>
              </GridItem>
            ) : (
              <GridItem pb={6}>
                <ScrollReveal>
                  <List
                    spacing={1}
                    fontSize={{base:"lg", md:"2xl"}}
                    color={colorMode==='light'? "dark":'light'}
                    textStyle="body"
                  >
                    <ListItem>
                      <ListIcon as={MdSettings} color={colorMode==='light'?'blue':'blueDarkMode'} />

                      {item}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdSettings} color={colorMode==='light'?'blue':'blueDarkMode'} />
                      {item2}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdSettings} color={colorMode==='light'?'blue':'blueDarkMode'} />
                      {item3}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdSettings} color={colorMode==='light'?'blue':'blueDarkMode'} />
                      {item4}
                    </ListItem>
                  </List>
                </ScrollReveal>
              </GridItem>
            )}
          </Grid>
        <ScrollReveal>
          <Stack direction={{ base: "column", md: "row" }}>
            <Card boxShadow="xl" backgroundColor={colorMode==='light'? "white" : 'darkDarkMode'} border={colorMode==='light'?'none':'1px solid #C3C3C3'}>
              <CardBody>
                <Image
                  src={imageSrc}
                  alt={descriptionImage}
                  background="none"
                  borderRadius="lg"
                />
              </CardBody>

              <CardFooter justify={"center"}>
                <Text
                  as={"b"}
                  fontSize="lg"
                  textStyle="body"
                  textColor={colorMode==='light'?'blue':'blueDarkMode'}
                >
                  {descriptionImage}
                </Text>
              </CardFooter>
            </Card>

            <Card boxShadow="xl" backgroundColor={colorMode==='light'? "white" : 'darkDarkMode'} border={colorMode==='light'?'none':'1px solid #C3C3C3'}>
              <CardBody>
                <Image
                  src={imageSrc2}
                  alt={descriptionImage2}
                  background="none"
                  borderRadius="lg"
                />
              </CardBody>

              <CardFooter justify={"center"}>
                <Text
                  as={"b"}
                  fontSize="lg"
                  textStyle="body"
                  textColor={colorMode==='light'?'blue':'blueDarkMode'}
                >
                  {descriptionImage2}
                </Text>
              </CardFooter>
            </Card>
          </Stack>
          </ScrollReveal>
        </ScrollReveal>
      </VStack>
    </FullScreenSection>
  );
};

export default Recommendations;
