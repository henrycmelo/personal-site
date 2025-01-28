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

const Cards = ({ title, description, imageSrc, to, date, role }) => {
  const { capitalizeEachWord } = useAlertContext();

  return (
    <Box color="semantic.text.button" border={'1px solid red'}>
      <VStack
        m={8}
        textAlign="start"
        justifyContent={"flex-start"}
        alignItems={"start"}
      >
        <Box w={{ base: "4/3", md: "100%" }} overflow="hidden">
          <Image
            src={imageSrc || "https://placehold.co/600x400"}
            alt={title}
            objectFit="cover"
            w="100%"
          />
        </Box>
        <HStack>
          <Badges borderRadius="full" px={2}>
            {role || ""}
          </Badges>
        </HStack>
        <Text as="p" textStyle="p">
          {capitalizeEachWord(title)}
        </Text>
        <Text as="p" textStyle="caption">
          {description}
        </Text>
        <VStack pt={8}>
          <Link to={to}></Link>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Cards;
