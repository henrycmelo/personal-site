import { Box, HStack, VStack } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { Link } from "react-router-dom";
import React from "react";
import CustomizedButton from "./CustomizedButton";
import SecondaryButton from "./SecondaryButton";

const SmallScreen = ({ className, hoverStyle, isHomePage, menuItems }) => {
  const { handleClick, colorMode } = useAlertContext();
  
  return (
    <Box
      height="100vh"
      width="400px"
      position="absolute"
      zIndex="0"
      right="0"
      top="-32px"
      backgroundColor="semantic.background.button"
      display={{ base: "flex", md: "none" }}
      alignItems="top"
      className={className}
    >
      <Box color="light" margin="0 auto" textStyle="body" mt="7em">
        <HStack px={10} py={10}>
          <VStack spacing={8}>
            <nav>
              <Box
                display="absolute"
                justifyContent="center"
                alignItems="center"
              >
                <VStack spacing={20}>
                  {menuItems
                    .filter((item) => item.label !== "Resume")
                    .map((item, index) =>
                      isHomePage ? (
                        <Box as='button'  color="semantic.text.button"
                        _hover={hoverStyle} key={index} onClick={item.action}>
                          {item.label}
                        </Box>
                      ) : (
                        <Link to={item.path} key={index}>
                          <Box as='button'  color="semantic.text.button"
                        _hover={hoverStyle} key={index} onClick={item.action}>
                          {item.label}
                        </Box>
                        </Link>
                      )
                    )}

                  {menuItems
                    .filter((item) => item.type === "link")
                    .map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        target={item.target}
                        rel={item.rel}
                      >
                        <SecondaryButton>{item.label}</SecondaryButton>
                      </a>
                    ))}
                </VStack>
              </Box>
            </nav>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default SmallScreen;
