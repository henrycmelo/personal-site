import * as React from "react";
import { Badge } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";

const Badges= ({ children, onClick, isDarkBackground }) => {
  
  return (
    <>

      {children && children.map((child, index) => (
        <Badge 
        backgroundColor="semantic.accent"
        color="semantic.background.primary"
        borderRadius="2px"
        key={index}
        >
          {child}
        </Badge>
      ))}
      
      
 


    



    

    </>
  );
};

export default Badges;
