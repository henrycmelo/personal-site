import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";

const VerticalProgressBar = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      sections?.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <VStack position="sticky" top="20%" left="5%" zIndex="10" >
      {sections?.map((section) => (
        <Box
          textStyle="caption"
          w={"100%"}
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          color={
            activeSection === section.id
              ? "semantic.background.primary"
              : "semantic.text.primary"
          }
          fontWeight={activeSection === section.id ? "bold" : "normal"}
          backgroundColor={
            activeSection === section.id ? "semantic.accent" : "none"
          }
          cursor="pointer"
          transition={'background-color 0.3s'}
          py={2}
          pl={12}
        >
          <Box>{section.label}</Box>
        </Box>
      ))}
    </VStack>
  );
};

export default VerticalProgressBar;
