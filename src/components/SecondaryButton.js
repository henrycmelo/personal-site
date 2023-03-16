import * as React from "react";
import { Button } from "@chakra-ui/react";

const SecondaryButton = ({ children, onClick }) => {
  return (
    <Button
      color="yellow"
      backgroundColor="secondDark"
      borderRadius="10px"
      fontWeight="800"
      p={6}
      textStyle="button"
      onClick={onClick}
      shadow="lg"
      _hover={{ bg: "dark" }}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
