import { Box, Divider, AbsoluteCenter, Circle } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DividerSection = ({ icon }) => {
  return (
    <Box position="relative" py="10" textStyle={"caption"}>
      <Divider variant="section" />
      <AbsoluteCenter bg="semantic.background.primary" px="4">
        <Circle
          size={"60px"}
          bg="semantic.background.secondary"
          color="semantic.accent"
          
        >
          <FontAwesomeIcon icon={icon ? icon : ""} size="2xl" />
        </Circle>
      </AbsoluteCenter>
    </Box>
  );
};

export default DividerSection;
