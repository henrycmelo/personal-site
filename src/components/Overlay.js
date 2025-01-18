import * as React from "react";
import { Box, Image } from "@chakra-ui/react";

const OverlayImage = ({src, alt }) => {
  return (
    <Box >
      <Image
        src={src}
        alt={alt}
        filter="grayscale(100%)"
      />
      {/* <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(33, 37, 41, 1)"
        mixBlendMode="overlay"
      /> */}
    </Box>
  );
};

export default OverlayImage;
