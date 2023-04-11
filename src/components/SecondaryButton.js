import * as React from "react";
import { Button } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";

const SecondaryButton = ({ children, onClick, backgroundPage }) => {
  const {  colorMode } = useAlertContext();
  return (
    <>
    {colorMode==='light'? (
      <Button
      color="yellow"
      backgroundColor="secondDark"
      border="1px solid #5A5863 "
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


    ):(
      <Button
      color="blueDarkMode"
      backgroundColor="transparent"
      border="1px solid #00A4BD "
      borderRadius="10px"
      fontWeight="800"
      p={6}
      textStyle="button"
      onClick={onClick}
      shadow="lg"
      _hover={{ bg: "rgba(0, 164, 189, 0.2)" }}
    >
      {children}
    </Button>


    )}
    

    </>
  );
};

export default SecondaryButton;
