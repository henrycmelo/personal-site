import * as React from "react";
import { Button } from "@chakra-ui/react";


const CustomizedButton = ({children, onClick, type, width}) => {
    return (
        <Button color='secondDark' 
                borderRadius='10px'
                backgroundColor='yellow'
                fontWeight='800' 
                p={6} textStyle="button" 
                onClick={onClick}
                shadow='lg'
                type={type}
                zIndex='0'
                width={width}
                _hover={{bg:'#e5c25c', color:'dark'}}>{children}
                
                
                
                </Button>
        )

    
}

export default CustomizedButton

