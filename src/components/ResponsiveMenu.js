import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Avatar,
  Text,
  IconButton,
  useDisclosure,
  Divider,
  Flex,
  Link,
  Stack,
  Collapse
} from "@chakra-ui/react";
import socialsData from "../utils/socialsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import headShot from "../images/avatar.jpg";
import { useAlertContext } from "../context/alertContext";

const ResponsiveMenu = ({
  sections,
  
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {handleClick} = useAlertContext()
  const handleSectionClick = (id) =>{
    handleClick(id);
    onClose();
  }
  
  const HEADER_HEIGHT = '90px';
  return (
    <Box position="relative">
      {/* Mobile Header */}
      <Box
        display={{ base: "block", lg: "none" }}
        position="fixed"
        top="0"
        left="0"
        right="0"
        bg="semantic.background.primary"
        border="2px solid red"
        
      >
        <Flex justify="space-between" align="center" py={4} px={4}>
          <HStack spacing={3}>
            <Avatar name="Henry" src={headShot} />
            <Box>
              <Text as="p" textStyle="pbold">
                Henry C. Melo
              </Text>
              <Text as="p" textStyle="caption" color="gray.600">
                Product Designer/ UX researcher
              </Text>
            </Box>
          </HStack>
          <IconButton
            icon={isOpen?(<FontAwesomeIcon icon={faClose} />): (<FontAwesomeIcon icon={faBars} />)}
            variant="ghost"
            onClick={isOpen ? onClose : onOpen}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          />
        </Flex>
        <Divider  variant='thick' />
        <Collapse
          in={isOpen}
          
        >
        
          <Box
            bg='semantic.background.primary'

          >
            <VStack spacing={0} height="100%">
              <VStack spacing={0} width="100%" flex={1}>
                {sections?.map((section) => (
                  <Box
                    key={section.id}
                    w="100%"
                    py={4}
                    px={6}
                    cursor="pointer"
                    onClick={()=>handleSectionClick(section.id)}
                    color='semantic.divider'
                    textStyle='caption'
                    
                    _hover={{ bg: "semantic.text.primary", color: 'semantic.background.primary' }}
                  >
                    <HStack spacing={3} textTransform='capitalize'>
                      <FontAwesomeIcon icon={section.icon} size="xl" />
                      <Text>{section.label}</Text>
                    </HStack>
                  </Box>
                ))}
              </VStack>

              <Divider variant='thick' />
              <Stack
                direction={{ base: 'row' }}
                p={6}
                spacing={6}
                color="gray.600"
                w="100%"
                justify="center"
              >
                {socialsData.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    isExternal
                    _hover={{ color: 'semantic.text.primary' }}
                  >
                    <FontAwesomeIcon icon={social.icon} size="lg" />
                  </Link>
                ))}
              </Stack>
            </VStack>
          </Box>
        </Collapse>
        
        
      </Box>
      
      

      {/* Mobile Drawer */}
      
    </Box>
  );
};

export default ResponsiveMenu;
