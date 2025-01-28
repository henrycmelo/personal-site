import * as React from "react";
import { Button } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";

const MuteButton = ({ children, onClick, }) => {

  const {capitalizeFirstLetter} = useAlertContext()
  
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
      _hover={{ bg: "semantic.text.muted",  }}
    >
      {capitalizeFirstLetter(children)}
    </Button>


    



    

    </>
  );
};

export default MuteButton;
