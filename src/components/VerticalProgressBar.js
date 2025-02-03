import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  VStack,
  Divider,
  Avatar,
  Text,
  Spacer,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import headShot from "../images/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialsData from "../utils/socialsData";
import { useAlertContext } from "../context/alertContext";
const VerticalProgressBar = ({ sections, isHomePage, isOtherPage }) => {
  const [activeSection, setActiveSection] = useState("");
  const contentRef = useRef(null);
  const showLabel = useBreakpointValue({ base: false, lg: true });
  const { capitalizeFirstLetter, handleClick, handlePath } = useAlertContext();

  

  //Find the scrollable container on the right
  useEffect(() => {
    // Look for the scrollable container - the Box with overflowY="auto"
    //the data-scroll-container is added to the box

    contentRef.current = document.querySelector(
      '[data-scroll-container="true"]'
    );
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const container = contentRef.current;

    const handleScroll = (event) => {
      if (!container) return;

      let currentSection = "";
      const containerRect = container.getBoundingClientRect();
      const triggerPoint = containerRect.top + containerRect.height / 3;

      sections?.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();

          // Check if the element is in view relative to the container

          if (rect.top <= triggerPoint && rect.bottom >= containerRect.top) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    if (container) {
      // Add scroll listener to the container
      container.addEventListener("scroll", handleScroll); // Without this, we wouldn't detect when someone scrolls inside the right content area

      handleScroll(); //It ensures that the correct section is highlighted right when the page loads

      window.addEventListener("scroll", handleScroll); //It's a safety net to catch all possible scroll scenarios
    }

    // Cleanup
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [sections]);

  return (
    <>
      {isHomePage ? (
        <>
          <VStack
            position="sticky"
            left="5%"
            zIndex="10"
            height={"100vh"}
            spacing={0}
          >
            <Stack
              direction={{ base: "column", lg: "row" }}
              py={12}
              align={"center"}
              textTransform="capitalize"
            >
              <Avatar name="Henry" src={headShot} objectFit="cover" />
              <Box textAlign={{ base: "center", lg: "left" }}>
                <Text as="p" textStyle="pbold">
                  Henry C. Melo
                </Text>
                <Text as="p" textStyle="caption" color="gray.600">
                  Product Designer/ UX researcher
                </Text>
              </Box>
            </Stack>

            <Divider variant="thick" />
            {sections?.map((section) => (
              <Box
                textStyle="caption"
                w={"100%"}
                key={section.id}
                onClick={() => {
                  if (isOtherPage) {
                    handlePath(section.path); // Navigate to the path on other pages
                  } else {
                    scrollToSection(section.id); // Scroll to the section on the homepage
                  }
                }}
                color={
                  activeSection === section.id
                    ? "semantic.background.primary"
                    : "semantic.divider"
                }
                fontWeight={activeSection === section.id ? "bold" : "normal"}
                backgroundColor={
                  activeSection === section.id
                    ? "semantic.text.primary"
                    : "none"
                }
                cursor="pointer"
                transition={"background-color 0.3s"}
                py={6}
                px={6}
                display={"flex"}
                justifyContent={{ base: "center", lg: "start" }}
                align={{ base: "center", lg: "start" }}
              >
                <Box
                  display="flex"
                  align="center"
                  gap={2}
                  textTransform="capitalize"
                >
                  <FontAwesomeIcon icon={section.icon} size="xl" />
                  {showLabel && (
                    <span display={{ base: "none" }}>{section.label}</span>
                  )}
                </Box>
              </Box>
            ))}
            <Spacer />

            <Divider variant="thick" />
            <Stack
              direction={{ base: "column", md: "row" }}
              p={6}
              gap={12}
              color="gray.600"
              style={{ lineHeight: 0 }}
            >
              {socialsData.map((icons, index) => (
                <a
                  key={index}
                  href={icons.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={icons.url}
                  style={{ lineHeight: 0 }}
                >
                  <FontAwesomeIcon icon={icons.icon} size="2x" />
                </a>
              ))}
            </Stack>
          </VStack>
        </>
      ) : (
        <VStack position="sticky" top="20%" left="5%" zIndex="10">
          <Text
              fontSize="sm"
              color="gray.500"
              textStyle={'caption'}
              textAlign="center"
              px={6}
              py={2}
            >
              Click to advance to a specific section{" "}
              <Text as='span' textStyle='caption' fontStyle='italic'>
                or just scroll down
              </Text> 
            </Text>
          {sections?.map((section) => (
            <Box
              textStyle="caption"
              w={"100%"}
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              color={
                activeSection === section.id
                  ? "semantic.background.primary"
                  : "semantic.divider"
              }
              fontWeight={activeSection === section.id ? "bold" : "normal"}
              backgroundColor={
                activeSection === section.id ? "semantic.text.primary" : "none"
              }
              cursor="pointer"
              transition={"background-color 0.3s"}
              py={6}
              px={6}
              display={"flex"}
              justifyContent={{ base: "center", lg: "start" }}
              align={{ base: "center", lg: "start" }}
            >
              <Box
                display="flex"
                align="center"
                gap={2}
                textTransform="capitalize"
              >
                <FontAwesomeIcon icon={section.icon} size="xl" />
                {showLabel && (
                  <span display={{ base: "none" }}>{section.label}</span>
                )}
              </Box>
            </Box>
          ))}
        </VStack>
      )}
    </>
  );
};

export default VerticalProgressBar;
