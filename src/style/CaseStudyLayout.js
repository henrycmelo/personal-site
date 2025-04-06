import React from "react";
import { 
  Flex, 
  Box,
  Container,
} from "@chakra-ui/react";
import FloatingMenu from "../components/FloatingMenu";

const CaseStudyLayout = ({ children, sections }) => {
  

  return (
    <Container maxW="1200px" py={10}>
      <Flex 
        direction={{ base: "column", lg: "row" }} 
        gap={8}
        position="relative"
        justify="space-between"
      >
        {/* Left Side Content - Fixed Width */}
        <Box 
          width={{ 
            base: "100%", 
            lg: "calc(100% - 360px)" // Fixed width based on original layout
          }}
          data-left-content="true"
          
        >
          {children}
        </Box>
        
        {/* Navigation Menu - Fixed Position */}
        <Box
          width={{ base: "100%", lg: "60px" }}
          flexShrink={0}
          position={{ base: "relative", lg: "sticky" }}
          top={{ lg: "120px" }}
          alignSelf="flex-start"
          height="fit-content"
        >
          
          <FloatingMenu
            sections={sections}
            
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default CaseStudyLayout;