import {
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Badge,
  Flex,
  HStack,
  Box,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import MuteButton from "./MuteButton";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import { isProjectDateRecent } from "../utils/recent";
import { useAlertContext } from "../context/alertContext";
import Badges from "./Badges";

const Cards = ({ title, description, imageSrc, to, date }) => {
  const { capitalizeEachWord } = useAlertContext();

  return (
    <Box border="1px solid red" color="semantic.text.button">
      <VStack
        border="1px solid blue"
        m={8}
        textAlign="start"
        justifyContent={"flex-start"}
        alignItems={"start"}
      >
        <Image
          src="https://bit.ly/naruto-sage"
          alt={title}
          aspectRatio={4 / 3}
          border="1px solid green"
          borderRadius="30px"
          w={{base:"100%", md:"80%"}}
        />
        <HStack>
          <Text as="p" textStyle="caption" color="semantic.background.tertiary">
            {formatDate(date)}
          </Text>
          
            <Badges colorScheme="green" borderRadius="full" px={2}>
              UX Researcher
            </Badges>
          


        </HStack>
        <Text as="h3" textStyle="h2">
          {capitalizeEachWord(title)}
        </Text>
        <Text as="p" textStyle="p" >
          {description}
        </Text>
        <VStack pt={8}>
          <Link to={to}>
            <MuteButton isDarkBackground>view case study</MuteButton>{" "}
          </Link>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Cards;
