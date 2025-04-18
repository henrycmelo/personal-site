import React from "react";
import {
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (

      
      <Box p={6} mt="auto" >
        <Stack direction={{base:'column', md:'row'}} justify='space-between' alignItems={'center'}  color="gray.600" as={'p'} textStyle={'caption'} align='' mt={2}>
          <Text>© Copyright {year}</Text>
          <Text >
            Designed and built with <FontAwesomeIcon icon={faHeart} size="sm" color="#107c7c" /> by Henry using React JS & Chakra UI
          </Text>
          
          <Text>henry.melo.contact@gmail.com</Text>
        </Stack>
      </Box>
  
  );
};
export default Footer;
