import * as React from "react";
import { Badge, Wrap, WrapItem } from "@chakra-ui/react";

const Badges= ({ children, ...props }) => {
  const childrenArray = Array.isArray(children) ? children : [children]
  
  return (
    <Wrap>

      {childrenArray && childrenArray.map((child, index) => (
        <WrapItem key={index}>
        <Badge 
        backgroundColor="gray.600"
        color="semantic.background.primary"
        borderRadius="2px"
        
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
