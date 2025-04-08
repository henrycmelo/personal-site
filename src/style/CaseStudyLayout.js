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
            lg: "calc(100% - 360px)" 
          }}
          data-left-content="true"
          data-scroll-container="true"
        >
          {children}
        </Box>
        
        {/* Navigation Menu - Only visible on lg screens and above */}
        <Box
          width={{ base: "100%", lg: "60px" }}
          flexShrink={0}
          position={{ lg: "sticky" }}
          top={{ lg: "120px" }}
          alignSelf="flex-start"
          height="fit-content"
          display={{ base: "none", lg: "block" }}
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