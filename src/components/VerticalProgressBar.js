import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  VStack,
  Divider,
  Avatar,
  AvatarBadge,
  HStack,
  Text,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import headshot from "../images/headshot.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import socialsData from "../utils/socialsData";

const VerticalProgressBar = ({ sections, isHomePage}) => {
  const [activeSection, setActiveSection] = useState("");
  const contentRef = useRef(null);

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
          <VStack position="sticky" left="5%" zIndex="10" height={'100vh'} >
            <HStack py={12}>
              <Avatar name="Henry" src={headshot} objectFit="cover" />
              <Box>
                <Text as="p" textStyle="pbold">
                  Henry C. Melo
                </Text>
                <Text as="p" textStyle="caption" color="gray.600">
                  Product Designer/ UX Researcher
                </Text>
              </Box>
            </HStack>

            <Divider variant="thick" />
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
                  activeSection === section.id
                    ? "semantic.text.primary"
                    : "none"
                }
                cursor="pointer"
                transition={"background-color 0.3s"}
                py={6}
                pl={12}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <FontAwesomeIcon icon={section.icon} size="xl" />
                  <span>{section.label}</span>
                </Box>
                
              </Box>
            ))}
            <Spacer />

            <Divider variant='thick' />
            <Stack direction={'row'} p={6} gap={12} color='gray.600'>
              {socialsData.map((icons, index)=>(
                <a key={index} href={icons.url} target="_blank" rel="noopener noreferrer"
                title={icons.url}>
                  <FontAwesomeIcon icon={icons.icon} size="2x" />

                </a>
                
              ))}
              
            </Stack>
          </VStack>
        </>
      ) : (
        <VStack position="sticky" top="20%" left="5%" zIndex="10">
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
              pl={12}
            >
              <Box>{section.label}</Box>
            </Box>
          ))}
        </VStack>
      )}
    </>
  );
};

export default VerticalProgressBar;
