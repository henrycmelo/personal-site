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
  OrderedList,
  ListIcon,
} from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";
import { useAlertContext } from "../context/alertContext";
import { MdCheckCircle } from "react-icons/md";

const Define = ({
  backgroundColor,
  type,
  description,
  povStatements,
  hmwDescription,
  hmwStatements,
  typeTwo,
  descriptionTwo,
  brainstormingData,
  typeThree,
  descriptionThree,
  strategyData,
  typeFour,
  descriptionFour,
  criteriaData,
}) => {
  const { colorMode } = useAlertContext();
  const paragraphs = description.split("\n");
  const hmwParagraphs = hmwDescription.split("\n");
  const brainstormingParagraphs = descriptionTwo.split("\n");
  const strategyParagraphs = descriptionThree.split("\n");
  const roadmapParagraphs = descriptionFour.split("\n");

  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      alignItems={"center"}
      spacing={8}
      color={colorMode === "light" ? "dark" : "light"}
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
            fontWeight={"thin"}
            paddingBottom={12}
            align={"left"}
          >
            PHASE 2: DEFINE
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
            {type}
          </Text>
        </ScrollReveal>
        <ScrollReveal>
          {paragraphs.map((paragraph, index) => (
            <Text
              key={index}
              fontSize={{ base: "lg", md: "2xl" }}
              textStyle="body"
              textColor={colorMode === "light" ? "dark" : "light"}
              textAlign={"left"}
              paddingBottom={8}
            >
              {paragraph}
            </Text>
          ))}
        </ScrollReveal>

        <ScrollReveal>
          <List
            spacing={1}
            fontSize={{ base: "sm", md: "md" }}
            textColor={colorMode === "light" ? "dark" : "light"}
            textStyle="body"
            pb={8}
          >
            {povStatements.map((item, index) => (
              <ListItem key={index}>
                <ListIcon
                  as={MdCheckCircle}
                  color={colorMode === "light" ? "blue" : "blueDarkMode"}
                />

                {item}
              </ListItem>
            ))}
          </List>
        </ScrollReveal>

        <ScrollReveal>
          {hmwParagraphs.map((paragraph, index) => (
            <Text
              key={index}
              fontSize={{ base: "lg", md: "2xl" }}
              textStyle="body"
              textColor={colorMode === "light" ? "dark" : "light"}
              textAlign={"left"}
              paddingBottom={8}
            >
              {paragraph}
            </Text>
          ))}
        </ScrollReveal>
        <ScrollReveal>
          <List
            spacing={1}
            fontSize={{ base: "sm", md: "md" }}
            textColor={colorMode === "light" ? "dark" : "light"}
            textStyle="body"
            pb={8}
          >
            {hmwStatements.map((item, index) => (
              <ListItem key={index}>
                <ListIcon
                  as={MdCheckCircle}
                  color={colorMode === "light" ? "blue" : "blueDarkMode"}
                />

                {item}
              </ListItem>
            ))}
          </List>
        </ScrollReveal>
      </VStack>

      {/* brainstorming */}

      <VStack
        alignItems={"left"}
        justifyContent={"left"}
        width={{ base: "80vw", md: "60vw" }}
      >
        <ScrollReveal>
          <Text
            align={"left"}
            fontSize={{ base: "2xl", md: "4xl" }}
            textStyle="h6"
            textColor={colorMode === "light" ? "blue" : "blueDarkMode"}
            paddingBottom={4}
          >
            {typeTwo}
          </Text>
        </ScrollReveal>
        <ScrollReveal>
          {brainstormingParagraphs.map((paragraph, index) => (
            <Text
              key={index}
              fontSize={{ base: "lg", md: "2xl" }}
              textStyle="body"
              textColor={colorMode === "light" ? "dark" : "light"}
              textAlign={"left"}
              paddingBottom={8}
            >
              {paragraph}
            </Text>
          ))}
        </ScrollReveal>

        {brainstormingData.map((item, index) => (
          <ScrollReveal key={index}>
            <Text
              align={"left"}
              textStyle="h6"
              color={colorMode==='light'? "dark":'light'}
              paddingBottom={4}
              paddingTop={4}
              fontSize={{base:"md", md:"xl"}}   
            >
              {item.title}
            </Text>

            <Text
            fontSize={{base:"sm", md:"md"}}
            textStyle="body"
            textColor={colorMode==='light'? "dark":'light'}
            textAlign={"left"}
            paddingBottom={8}
            spacing={1}   
          >
            {item.description}
          </Text>

            <Card
              boxShadow="xl"
              backgroundColor={colorMode === "light" ? "white" : "darkDarkMode"}
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
                  {item.title}
                </Text>
              </CardFooter>
            </Card>
          </ScrollReveal>
        ))}

        
        
      </VStack>


      {/* Strategy */}

      <VStack
        alignItems={"left"}
        justifyContent={"left"}
        width={{ base: "80vw", md: "60vw" }}
      >
        <ScrollReveal>
          <Text
            align={"left"}
            fontSize={{ base: "2xl", md: "4xl" }}
            textStyle="h6"
            textColor={colorMode === "light" ? "blue" : "blueDarkMode"}
            paddingBottom={4}
          >
            {typeThree}
          </Text>
        </ScrollReveal>
        <ScrollReveal>
          {strategyParagraphs.map((paragraph, index) => (
            <Text
              key={index}
              fontSize={{ base: "lg", md: "2xl" }}
              textStyle="body"
              textColor={colorMode === "light" ? "dark" : "light"}
              textAlign={"left"}
              paddingBottom={8}
            >
              {paragraph}
            </Text>
          ))}
        </ScrollReveal>

        {strategyData.map((item, index) => (
          <ScrollReveal key={index}>
            <Text
              align={"left"}
              textStyle="h6"
              color={colorMode==='light'? "dark":'light'}
              paddingBottom={4}
              paddingTop={4}
              fontSize={{base:"md", md:"xl"}}   
            >
              {item.title}
            </Text>

            <Text
            fontSize={{base:"sm", md:"md"}}
            textStyle="body"
            textColor={colorMode==='light'? "dark":'light'}
            textAlign={"left"}
            paddingBottom={8}
            spacing={1}   
          >
            {item.description}
          </Text>

            <Card
              boxShadow="xl"
              backgroundColor={colorMode === "light" ? "white" : "darkDarkMode"}
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
                  {item.title}
                </Text>
              </CardFooter>
            </Card>
          </ScrollReveal>
        ))}

        
        
      </VStack>

       {/* roadmap */}

       <VStack
        alignItems={"left"}
        justifyContent={"left"}
        width={{ base: "80vw", md: "60vw" }}
      >
        <ScrollReveal>
          <Text
            align={"left"}
            fontSize={{ base: "2xl", md: "4xl" }}
            textStyle="h6"
            textColor={colorMode === "light" ? "blue" : "blueDarkMode"}
            paddingBottom={4}
          >
            {typeFour}
          </Text>
        </ScrollReveal>
        <ScrollReveal>
          {roadmapParagraphs.map((paragraph, index) => (
            <Text
              key={index}
              fontSize={{ base: "lg", md: "2xl" }}
              textStyle="body"
              textColor={colorMode === "light" ? "dark" : "light"}
              textAlign={"left"}
              paddingBottom={8}
            >
              {paragraph}
            </Text>
          ))}
        </ScrollReveal>

        <ScrollReveal>
          <List
            spacing={1}
            fontSize={{ base: "sm", md: "md" }}
            textColor={colorMode === "light" ? "dark" : "light"}
            textStyle="body"
            pb={8}
          >
            {criteriaData.map((item, index) => (
              <React.Fragment key={index}>
                {item.criteriaItems.map((criteriaItem, criteriaIndex) => (
                  <ListItem key={criteriaIndex}>
                    <ListIcon
                      as={MdCheckCircle}
                      color={colorMode === "light" ? "blue" : "blueDarkMode"}
                    />
                    {criteriaItem}
                  </ListItem>
                ))}
                {item.criteriaSummary && (
                  <Text
                  key={index}
                  fontSize={{ base: "lg", md: "2xl" }}
                  textStyle="body"
                  textColor={colorMode === "light" ? "dark" : "light"}
                  textAlign={"left"}
                  pt={8}
               
                  >
                    {item.criteriaSummary}
                  </Text>
                )}

                {item.mustHaveItems.map((mustHave, mustIndex)=>(
                  <ListItem key={mustIndex}>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue" : "blueDarkMode"}
                  />
                  {mustHave}
                </ListItem>
                ))}
                
                  
              </React.Fragment>
            ))}

             
            
          </List>
        </ScrollReveal>

       

        
        
      </VStack>

    </FullScreenSection>
  );
};

export default Define;
