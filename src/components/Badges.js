import * as React from "react";
import { Badge, Wrap, WrapItem } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";

const Badges= ({ children, onClick, isDarkBackground }) => {
  const childrenArray = Array.isArray(children) ? children : [children]
  
  return (
    <Wrap>

      {childrenArray && childrenArray.map((child, index) => (
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
