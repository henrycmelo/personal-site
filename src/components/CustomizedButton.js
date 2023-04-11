import * as React from "react";
import { Button } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";

const CustomizedButton = ({ children, onClick, type, width }) => {
  const { colorMode } = useAlertContext();
  return (
    <>
      {colorMode === "light" ? (
        <Button
          color= "secondDark"
          borderRadius="10px"
          backgroundColor="yellow"
          fontWeight="800"
          p={6}
          textStyle="button"
          onClick={onClick}
          shadow="lg"
          type={type}
          zIndex="0"
          width={width}
          _hover={{ bg: "#e5c25c", color: "dark" }}
        >
          {children}
        </Button>
      ) : (
        <Button
          color="dark"
          borderRadius="10px"
          backgroundColor="blueDarkMode"
          fontWeight="800"
          p={6}
          textStyle="button"
          onClick={onClick}
          shadow="lg"
          type={type}
          zIndex="0"
          width={width}
          _hover={{ bg:'#66c8d7', color: "dark" }}
        >
          {children}
        </Button>
      )}
    </>
  );
};

export default CustomizedButton;
