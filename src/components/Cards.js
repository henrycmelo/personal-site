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
import OverlayImage from "./OverlayImage";

const Cards = ({ title, description, imageSrc, path, keywords, logoSrc,type}) => {
  const { capitalizeEachWord, handlePath } = useAlertContext();

  return (
    
    <Box
      color="semantic.text.button"
      border={"1px solid #495057"}
      boxShadow={"md "}
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
      onClick={()=>handlePath(path)}
      maxW={'lg'}
      data-action={`View Project: ${title}`} 
     
    >
      <VStack
        m={8}
        textAlign="start"
        justifyContent={"flex-start"}
        alignItems={"start"}
        gap={2}
      >
         {logoSrc.length > 0 && (
        <HStack spacing={4} mb={2}>
          {logoSrc.map((logo, index) => (
            <OverlayImage key={index} src={logo} alt={`Logo ${index + 1}`} h="40px" />
          ))}
        </HStack>
      )}
        <Box w={{ base: "4/3", md: "100%" }} overflow="hidden">
          <Image
            src={imageSrc || "https://placehold.co/600x400"}
            alt={title}
            objectFit="cover"
            w="100%"
            mb={4}
          />
        </Box>
        <Text as="p" textStyle="caption" >
          {type?.toUpperCase()}
        </Text>
        <Box height="4.5em" overflow="hidden"> {/* Fixed height for 2 lines */}
          <Text 
            as="p" 
            textStyle="pbold"
            noOfLines={2}
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {capitalizeEachWord(title)}
          </Text>
        </Box>
        <Box height="6em"> {/* Fixed height for description */}
          <Text 
            as="p" 
            textStyle="caption"
            noOfLines={4}
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {description}
          </Text>
        </Box>
        <HStack height='4em' >
          <Badges  >
            {keywords || ""}
          </Badges>
        </HStack>
        
      </VStack>
    </Box>
    
  );
};

export default Cards;
