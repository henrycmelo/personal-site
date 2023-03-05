import * as React from "react";
import { Button } from "@chakra-ui/react";


const SecondaryButton = ({children, onClick}) => {
    return (
        <Button color='yellow'
                backgroundColor='#5A5863'
                borderRadius='10px'
                fontWeight='800' 
                p={6} textStyle="button" 
                onClick={onClick}
                border= '2px solid #696773'
                _hover={{bg:'dark'}}>{children}
                
                
                
                </Button>
        )

    
}

export default SecondaryButton