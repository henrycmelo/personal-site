import React from "react";
import {
  Heading,
  Text,
  Grid,
  GridItem,
  Divider,
  Stack,
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
      <FullScreenSection
        className='footer'
        backgroundColor="dark"
        alignItems="center"
        spacing={8}
        width="100vw"
        p={8}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      >
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns={"repeat(1, 1fr)"}
          gap={2}
          color="light"
          width={"100%"}
          margin="0 auto"
          paddingBottom="1em"
        >
          <GridItem colSpan={1} px={paddingX} color="light" maxWidth="1024px">
            <ScrollReveal><Heading as="h3" paddingBottom={paddingHeading} align={align}>
              Henry Castillo
            </Heading></ScrollReveal>
            <ScrollReveal><Text
              fontSize={{ md: "sm", base: "xs" }}
              textStyle="body"
              paddingRight={paddingText}
              align={align}
              
            >
              Crafting seamless user experiences and building robust, end-to-end
              solutions - that's what I do as a UX designer and full-stack
              developer
            </Text>
            </ScrollReveal>
          </GridItem>
          <GridItem colSpan={1} colStart={columStart} colEnd={columEnd} px={12}>
            <ScrollReveal><Heading as="h3" paddingBottom={paddingHeading} align={align}>
              {" "}
              Socials
            </Heading></ScrollReveal>
            <Stack direction="row" justify={align} color={colorMode==='light'? "yellow":"blueDarkMode"}>
              {socialsData.map(
                (
                  icons // rendering the list of icons using .map () method
                ) => (
                  <ScrollReveal key={icons.id}><a
                    key={icons.id}
                    href={icons.url}
                    style={{ padding: "1em" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={icons.url}
                  >
                    <FontAwesomeIcon icon={icons.icon} size="2x" />
                  </a></ScrollReveal>
                )
              )}
            </Stack>
          </GridItem>
        </Grid>
        <Divider color="light" alignItems="center" margin="0 auto" />
        <ScrollReveal><Text color={colorMode==='light'? "yellow":"blueDarkMode"} size="xs" textStyle="body" textAlign="center">
          © Copyright {year}. Designed and built by <b>Henry Castillo</b>{" "}
        </Text></ScrollReveal>
      </FullScreenSection>
    </footer>
  );
};
export default Footer;
