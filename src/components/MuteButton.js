import * as React from "react";
import { Button } from "@chakra-ui/react";


const MuteButton = ({ children, onClick, }) => {

  
  
  return (
    <>
    
      <Button
      color="semantic.text.button"
      backgroundColor="transparent"
      border= "1px solid #212529"
      borderRadius="10px"
      fontWeight="800"
      p={6}
      textStyle="button"
      onClick={onClick}
      shadow="lg"
      textTransform='capitalize'
      _hover={{ bg: "semantic.background.secondary", color:'semantic.text.primary'  }}
    >
      {children}
    </Button>


    



    

    </>
  );
};

export default MuteButton;
