import React, { useState, useEffect, useRef } from "react";
import {
  VStack,
  Box,
  Text,
  IconButton,
  Card,
  CardBody,
  Flex,
  useDisclosure
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FloatingMenu = ({ sections,  onToggle }) => {
    const [activeSection, setActiveSection] = useState("");
    const { isOpen, onToggle: internalToggle } = useDisclosure({ defaultIsOpen: false });
    const contentRef = useRef(null);
  
    // Handle toggle and notify parent component
    const handleToggle = () => {
      internalToggle();
      if (onToggle) {
        onToggle(!isOpen);
      }
    };
  
    // Find the scrollable container on the right
    useEffect(() => {
      contentRef.current = document.querySelector(
        '[data-scroll-container="true"]'
      );
    }, []);
  
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          const yOffset = -120; // Offset in pixels (negative value means scroll higher)
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({
            top: y,
            behavior: "smooth"
          });
        }
    };
  
    useEffect(() => {
      const container = contentRef.current || window;
      
      const handleScroll = () => {
        if (!sections || sections.length === 0) return;
  
        let currentSection = "";
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        
        // Find which section is currently in view
        sections.forEach((section) => {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const offset = 200; // Adjust this offset as needed
            
            // Check if the element is in view
            if (rect.top <= offset && rect.bottom >= offset) {
              currentSection = section.id;
            }
          }
        });
        
        if (currentSection !== activeSection) {
          setActiveSection(currentSection);
        }
      };
  
      // Add scroll event listeners
      container.addEventListener("scroll", handleScroll);
      window.addEventListener("scroll", handleScroll);
      
      // Initial check
      handleScroll();
      
      // Cleanup
      return () => {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("scroll", handleScroll);
      };
    }, [sections, activeSection]);

  return (
    <Box
      position="relative"
      height="fit-content"
      width={{ base: "100%", lg: "60px" }}
      flexShrink={0}
      zIndex="10"
    >
      <Card
        position="absolute"
        right="0"
        width={{ base: "100%", lg: isOpen ? "300px" : "60px" }}
        bg="semantic.background.secondary"
        shadow="xl"
        borderRadius="lg"
        transition="all 0.3s ease"
        overflow="hidden"
        h="fit-content"
      >
        <CardBody p={0}>
          <Flex
            justify="center"
            align="center"
            bg="semantic.accent"
            color="semantic.background.primary"
            p={3}
            borderTopRadius="lg"
            cursor="pointer"
            onClick={handleToggle}
          >
            {isOpen ? (
              <Flex width="100%" justify="space-between" align="center">
                <Text textStyle={"captionbold"}
                textTransform="uppercase">
                  Navigation
                </Text>
                <IconButton
                  icon={<FontAwesomeIcon icon={faChevronUp} />}
                  size="sm"
                  variant="ghost"
                  color="semantic.background.primary"
                  aria-label="Minimize menu"
                  _hover={{ bg:'semantic.lightAccent', color:'gray.600'}}
                />
              </Flex>
            ) : (
              <IconButton
                icon={<FontAwesomeIcon icon={faChevronDown} />}
                size="sm"
                variant="ghost"
                color="semantic.background.primary"
                aria-label="Expand menu"
                _hover={{ bg:'semantic.lightAccent', color:'gray.600'}}
              />
            )}
          </Flex>

          {isOpen ? (
            <Box p={4}>
              <Text
                textStyle={"caption"}
                
                mb={4}
                fontSize="sm"
              color="gray.500"
              >
                Click to navigate to a section
              </Text>

              <VStack spacing={3} align="stretch">
                {sections?.map((section) => (
                  <Box
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    color={
                      activeSection === section.id
                        ? "semantic.background.primary"
                      : "gray.600"
                    }
                    fontWeight={activeSection === section.id ? "bold" : "normal"}
                    backgroundColor={
                      activeSection === section.id ?"gray.600" : "transparent"
                    }
                    cursor="pointer"
                    transition={"all 0.3s"}
                    py={3}
                    px={4}
                    borderRadius="md"
                    display={"flex"}
                    alignItems="center"
                    _hover={{ bg:'gray.600', color:'semantic.background.primary'}}
                  >
                    <Flex align="center" gap={3}>
                      <FontAwesomeIcon icon={section.icon} />
                      <Text fontSize="sm">{section.label}</Text>
                    </Flex>
                  </Box>
                ))}
              </VStack>
            </Box>
          ) : (
            <VStack spacing={1} align="stretch" p={2}>
              {sections?.map((section) => (
                <Box
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  color={
                    activeSection === section.id
                      ? "semantic.background.primary"
                      : "gray.600"
                  }
                  fontWeight={activeSection === section.id ? "bold" : "normal"}
                  backgroundColor={
                    activeSection === section.id ? "gray.600" : "transparent"
                  }
                  cursor="pointer"
                  transition={"all 0.3s"}
                  py={3}
                  borderRadius="md"
                  display={"flex"}
                  justifyContent="center"
                  alignItems="center"
                  _hover={{ bg:'gray.600', color:'semantic.background.primary', cursor:"pointer"}}
                >
                  <FontAwesomeIcon icon={section.icon} />
                </Box>
              ))}
            </VStack>
          )}
        </CardBody>
      </Card>
    </Box>
  );
};

export default FloatingMenu;