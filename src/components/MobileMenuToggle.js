import React from "react";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const MobileMenuToggle = ({ isOpen, handleToggle }) => (
  <Button onClick={handleToggle} zIndex="overlay">
    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2xl" />
  </Button>
);

export default MobileMenuToggle;
