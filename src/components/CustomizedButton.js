import * as React from "react";
import { Button } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";

const CustomizedButton = ({ children, onClick, type, width }) => {


  return (
    <>
       
        <Button
          color= "semantic.text.button"
          borderRadius="10px"
          border="1px solid #107c7c"
          backgroundColor="semantic.accent"
          fontWeight="800"
          p={6}
          textStyle="button"
          onClick={onClick}
          shadow="lg"
          type={type}
          zIndex="0"
          width={width}
          _hover={{ bg: "semantic.hover"   }}
          textTransform={"uppercase"}
        >
          {children}
        </Button>
      
    </>
  );
};

export default CustomizedButton;
