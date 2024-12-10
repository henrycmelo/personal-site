import * as React from "react";
import { Button } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";

const SecondaryButton = ({ children, onClick }) => {
  return (
    <>
    
      <Button
      color="semantic.text.primart"
      backgroundColor="semantic.background.primary"
      border="1px solid #F8F9FA"
      borderRadius="10px"
      fontWeight="800"
      p={6}
      textStyle="button"
      onClick={onClick}
      shadow="lg"
      _hover={{ bg: "semantic.background.tertiary" }}
    >
      {children}
    </Button>


    



    

    </>
  );
};

export default SecondaryButton;
