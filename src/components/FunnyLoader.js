import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
  Text,
  Container,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import loaderHenry from "../images/hc_logos_black.png";
import "animate.css";
import logoblue from "../images/hc_logo_blue.png";
import { Link} from "react-router-dom";

const FunnyLoader = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const { colorMode } = useAlertContext();

  const loadingMessages = [
    "Convincing React that it needs to rerender...",
    "Product Designer by day, code wrangler by night...",
    "UX Researcher who actually knows what a useState hook is...",
    "Warning: May contain traces of full-stack abilities...",
    "Loading versatility.exe — Design ✓ Research ✓ Code ✓",
    "Plot twist: This designer codes their own portfolio...",
    "Switching between Figma and VSCode like a pro...",
    "I don't always code, but when I do, I make it user-friendly...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, );

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="container.md">
        <VStack spacing={8} align="center">
          <img
            className={colorMode === "light" ? "loader" : "loader-dark"}
            style={{ width: "82px", height: "82px" }}
            src={colorMode === "light" ? loaderHenry : logoblue}
            alt="Logo brand"
          />
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            textStyle="body"
            textColor={colorMode === "light" ? "dark" : "light"}
          >
            {loadingMessages[messageIndex]}
          </Text>

          <Card
            backgroundColor={colorMode === "light" ? "dark" : "light"}
            boxShadow="xl"
            variant="elevated"
            width="full"
          >
            <CardBody>
              <VStack spacing={4} align="stretch">
                <Text
                  fontSize={{ base: "2xl", md: "4xl" }}
                  textStyle="h6"
                  textAlign="center"
                  color={colorMode === "light" ? "light" : "dark"}
                >
                  🚧 Rare Specimen Alert! 🚧
                </Text>
                <Text
                  fontSize="md"
                  color={colorMode === "light" ? "light" : "dark"}
                  textAlign="center"
                  textStyle="body"
                >
                  You've encountered a Product Designer/UX Researcher who codes
                  their own portfolio. Yes, they exist! Currently upgrading this
                  digital habitat with more evidence of this strange but
                  powerful combination of skills.
                </Text>
                <Text
                  fontSize="md"
                  color={colorMode === "light" ? "light" : "dark"}
                  textAlign="center"
                  textStyle="body"
                >
                  <Link
                    to="/contactme"
                    style={{ textDecoration: "underline" }}
                    
                  >
                    
                    Drop me a message!
                  </Link>{" "}
                  if you're curious about this unique species - I don't bite,
                  I just design, research, and code! 🚀
                </Text>

                <Text
                  fontSize="sm"
                  textColor={
                    colorMode === "light" ? "grayDarkMode" : "gray"
                  }
                  textAlign="center"
                >
                  Last updated: {new Date().toLocaleDateString()}
                </Text>
              </VStack>
            </CardBody>
          </Card>
        </VStack>
      </Container>
    </Box>
  );
};

export default FunnyLoader;
