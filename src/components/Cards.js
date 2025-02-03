import {
  Image,
  Text,
  HStack,
  Box,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useAlertContext } from "../context/alertContext";
import Badges from "./Badges";

const Cards = ({ title, description, imageSrc, path, role }) => {
  const { capitalizeEachWord, handlePath } = useAlertContext();

  return (
    
    <Box
      color="semantic.text.button"
      border={"1px solid #495057"}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px "}
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
      onClick={()=>handlePath(path)}
    >
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
        <Text as="p" textStyle="p">
          {capitalizeEachWord(title)}
        </Text>
        <Text as="p" textStyle="caption">
          {description}
        </Text>
        <HStack>
          <Badges borderRadius="full" px={2}>
            {role || ""}
          </Badges>
        </HStack>
        
      </VStack>
    </Box>
    
  );
};

export default Cards;
