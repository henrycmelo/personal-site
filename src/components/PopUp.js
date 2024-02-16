import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
    AlertDialogFooter,
    useDisclosure,
    HStack,

  } from "@chakra-ui/react";
  import { useAlertContext } from "../context/alertContext";
  import { useRef } from "react";
import CustomizedButton from "./CustomizedButton";
import SecondaryButton from "./SecondaryButton";

  

  function PopUp() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {colorMode}=useAlertContext()
    const cancelRef = useRef();
   
   
  
    return (
      <>
      <CustomizedButton onClick={onOpen}>Resume</CustomizedButton>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          
          >
            <AlertDialogOverlay>
              <AlertDialogContent backgroundColor="light">
                <AlertDialogHeader textStyle="body" color={colorMode==="light" ? 'secondDark': 'dark'}>
                  Role
                </AlertDialogHeader>
                <AlertDialogBody textStyle="body" color={colorMode==="light" ? 'secondDark': 'dark'}>
                  Which resume would you like to see?
                </AlertDialogBody>
                <AlertDialogFooter>
                  <HStack>
                    <a
                        href={require("../document/softwareEng.pdf")}
                        rel="noreferrer"
                        target="_blank"
                        
                      > 
                  <CustomizedButton>
                    Software Engineer
                  </CustomizedButton>
                  </a>
                  <a
                        href={require("../document/uxdesigner.pdf")}
                        rel="noreferrer"
                        target="_blank"
                        
                      >
                        <SecondaryButton>
                    UX Designer
                  </SecondaryButton>
                        
                      </a> 
                  

                  </HStack>
                  
                    

                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>

        </AlertDialog>
      </>
    );
  }
  
  export default PopUp;