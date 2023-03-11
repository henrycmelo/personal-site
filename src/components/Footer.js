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

const Footer = () => {
  const { socials, isLargerThanBase } = useAlertContext();
  const align = isLargerThanBase ? "" : "center";
  const paddingHeading = isLargerThanBase ? "0.5em" : "0.2em";
  const paddingText = isLargerThanBase ? "1em" : "";
  const paddingX = isLargerThanBase ? 12 : 4;
  const columStart = isLargerThanBase ? 4 : 0;
  const columEnd = isLargerThanBase ? 6 : 0;

  return (
    <footer>
    <FullScreenSection
      backgroundColor="dark"
      alignItems="center"
      spacing={8}
      width="100vw"
     
      p={ 8}
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
            <Heading as="h3" paddingBottom={paddingHeading} align={align}>
              Henry Castillo
            </Heading>
            <Text
              fontSize={{ md: "sm", base: "xs" }}
              textStyle="body"
              paddingRight={paddingText}
              align={align}
            >
              Crafting seamless user experiences and building robust, end-to-end
              solutions - that's what I do as a UX designer and full-stack
              developer
            </Text>
          </GridItem>
          <GridItem colSpan={1} colStart={columStart} colEnd={columEnd} px={12}>
            <Heading as="h3" paddingBottom={paddingHeading} align={align}>
              {" "}
              Socials
            </Heading>
            <Stack direction="row" justify={align} color="yellow">
              {socials.map(
                (
                  icons // rendering the list of icons using .map () method
                ) => (
                  <a
                    key={icons.id}
                    href={icons.url}
                    style={{ padding: "1em" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={icons.url}
                  >
                    <FontAwesomeIcon icon={icons.icon} size="2x" />
                  </a>
                )
              )}
            </Stack>
          </GridItem>
        </Grid>
        <Divider color="light" alignItems="center" margin="0 auto" />
        <Text color="yellow" size="xs" textStyle="body" textAlign="center">
          © Copyright 2023. Designed and built by <b>Henry Castillo</b>{" "}
        </Text>
      
    </FullScreenSection>
    </footer>
  );
};
export default Footer;
