import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";

const VerticalProgressBar = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("");
  const contentRef = useRef(null);


  //Find the scrollable container on the right
  useEffect(() => {
    // Look for the scrollable container - the Box with overflowY="auto"
    //the data-scroll-container is added to the box

    contentRef.current = document.querySelector('[data-scroll-container="true"]');
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  useEffect(() => {
    const container = contentRef.current

    const handleScroll = (event) => {
      if(!container) return
      
      let currentSection = "";
      const containerRect = container.getBoundingClientRect();
      const triggerPoint = containerRect.top + (containerRect.height/3)
      

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

    if(container){
      // Add scroll listener to the container
      container.addEventListener('scroll', handleScroll) // Without this, we wouldn't detect when someone scrolls inside the right content area


      handleScroll() //It ensures that the correct section is highlighted right when the page loads

      window.addEventListener('scroll', handleScroll) //It's a safety net to catch all possible scroll scenarios
    }

    // Cleanup
    return () =>{
      if(container){
        container.removeEventListener("scroll", handleScroll) 
        window.removeEventListener('scroll', handleScroll) 
      }
    } 
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
            activeSection === section.id ? "semantic.text.primary" : "none"
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
