import * as React from "react";
import { Badge, Wrap, WrapItem } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";

const Badges= ({ children, onClick, isDarkBackground }) => {
  
  return (
    <Wrap>

      {children && children.map((child, index) => (
        <WrapItem>
        <Badge 
        backgroundColor="semantic.accent"
        color="semantic.background.primary"
        borderRadius="2px"
        key={index}
        
        >
          {child}
        </Badge>
        </WrapItem>
      ))}
      
      
    </Wrap>

   
  );
};

export default Badges;
