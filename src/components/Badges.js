import * as React from "react";
import { Badge } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";

const Badges= ({ children, onClick, isDarkBackground }) => {
  
  return (
    <>
    
      <Badge 
        backgroundColor="semantic.accent"
        color="semantic.background.primary"
        borderRadius="2px"
        >
      {children.toUpperCase()}
      </Badge>
      
 


    



    

    </>
  );
};

export default Badges;
