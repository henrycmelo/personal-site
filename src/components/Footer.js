import React from "react";
import {
  Heading,
  Text,
  Grid,
  GridItem,
  Divider,
  Stack,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullScreenSection from "./FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";
import socialsData from "../utils/socialsData";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (

      
      <Box p={6} >
        <Stack direction={{base:'column', md:'row'}} justify='space-between' alignItems={'center'}  color="gray.600" as={'p'} textStyle={'caption'} align='' mt={2}>
          <Text>© Copyright {year}</Text>
          <Text >
            Designed and built with <FontAwesomeIcon icon={faHeart} size="sm" /> by Henry using React JS & Chakra UI
          </Text>
          
          <Text>henry.melo.contact@gmail.com</Text>
        </Stack>
      </Box>
  
  );
};
export default Footer;
