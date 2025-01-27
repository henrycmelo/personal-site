import React from "react";
import {
  Heading,
  Text,
  Grid,
  GridItem,
  Divider,
  Stack,
  Box
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullScreenSection from "./FullScreenSection";
import ScrollReveal from "../hooks/ScrollReveal";
import socialsData from "../utils/socialsData";

const Footer = () => {
  const { isLargerThanBase, colorMode } = useAlertContext();
  const align = isLargerThanBase ? "" : "center";
  const paddingHeading = isLargerThanBase ? "0.5em" : "0.2em";
  const paddingText = isLargerThanBase ? "1em" : "";
  const paddingX = isLargerThanBase ? 12 : 4;
  const columStart = isLargerThanBase ? 4 : 0;
  const columEnd = isLargerThanBase ? 6 : 0;
  const year= new Date().getFullYear();


  return (
    <footer>
      <>
        <Divider variant={'thick'} />
        <Box>
          <Text>Henry</Text>
        </Box>
      </>

      
    </footer>
  );
};
export default Footer;
