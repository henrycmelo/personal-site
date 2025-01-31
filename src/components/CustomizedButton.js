import * as React from "react";
import { Button } from "@chakra-ui/react";


const CustomizedButton = ({ children, onClick, type, width }) => {


  return (
    <>
       
        <Button
          color= "semantic.background.primary"
          borderRadius="10px"
          border="1px solid #107c7c"
          backgroundColor="semantic.text.primary"
          fontWeight="800"
          p={6}
          textStyle="button"
          onClick={onClick}
          shadow="lg"
          type={type}
          zIndex="0"
          width={width}
          _hover={{ bg: "semantic.text.secondary"   }}
          textTransform='capitalize'
        >
          {children}
        </Button>
      
    </>
  );
};

export default CustomizedButton;
