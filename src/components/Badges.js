import * as React from "react";
import { Badge, Wrap, WrapItem } from "@chakra-ui/react";

const Badges= ({ children, ...props }) => {
  const childrenArray = Array.isArray(children) ? children : [children]
  
  return (
    <Wrap>

      {childrenArray && childrenArray.map((child, index) => (
        <WrapItem key={index}>
        <Badge 
        
        color="semantic.background.secondary"
        bg='gray.600'
      
        borderRadius="md" 
      
        {...props}
        >
          {child}
        </Badge>
        </WrapItem>
      ))}
      
      
    </Wrap>

   
  );
};

export default Badges;
