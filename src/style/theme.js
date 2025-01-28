import { extendTheme } from "@chakra-ui/react";
import { dividerTheme } from "./divider";

const theme = extendTheme({

  styles:{
    global: {
      body: {
        bg: "semantic.background.primary",
        color: "semantic.text.primary",
        fontFamily: "Aeonik",
      },
    },
  },
    
  components: {
    // You can define specific component styles here if needed.
    Divider: dividerTheme,
  },
  fonts: {
    heading: "Aeonik",
    body: "Aeonik",
  },
  textStyles: {
    h1: {
      fontSize: { base: "40px", sm: "48px", md: "56px", lg: "72px" },
      lineHeight: { base: "48px", sm: "56px", md: "64px", lg: "80px" },
      fontWeight: "800",
    },
    h2: {
      fontSize: { base: "32px", sm: "36px", md: "42px", lg: "48px" },
      lineHeight: { base: "40px", sm: "44px", md: "50px", lg: "56px" },
      fontWeight: "400",
    },
    h3: {
      fontSize: { base: "28px", sm: "32px", md: "36px", lg: "40px" },
      lineHeight: { base: "36px", sm: "40px", md: "44px", lg: "48px" },
      fontWeight: "400",
    },
    p: {
      fontSize: { base: "16px", sm: "18px", md: "20px" },
      lineHeight: { base: "24px", sm: "28px", md: "32px" },
      fontWeight: "400",
    },
    pbold:{
      fontSize: { base: "16px", sm: "18px", md: "20px" },
      lineHeight: { base: "24px", sm: "28px", md: "32px" },
      fontWeight: "600",
    },

    button: {
      fontSize: { base: "16px", md: "18px" },
      lineHeight: { base: "20px", md: "24px" },
      fontWeight: "400",
    },
    caption: {
      fontSize: { base: "12px", md: "14px" },
      lineHeight: { base: "16px", md: "20px" },
      fontWeight: "400",
   
  },
  captionbold: {
    fontSize: { base: "12px", md: "14px" },
    lineHeight: { base: "16px", md: "20px" },
    fontWeight: "600",
  },
  muted: {
    fontSize: { base: "12px", md: "14px" },
    lineHeight: { base: "20px", md: "24px" },
    fontWeight: "100",

  },
  
},
  colors: {
    gray: {
      50: "#F8F9FA",
      100: "#E9ECEF",
      200: "#DEE2E6",
      300: "#CED4DA",
      400: "#ADB5BD",
      500: "#6C757D",
      600: "#495057",
      700: "#343A40",
      800: "#212529",
    },
    semantic: {
      background: {
        primary: "#F8F9FA",
        secondary: "#E9ECEF",
        tertiary: "#DEE2E6",
        button: "#212529",
        
      },
      text: {
        primary: "#212529",
        secondary: "#495057",
        muted: "#6C757D",
        button: "#495057",
        hover:"#CED4DA"
      },
      border: "#CED4DA",
      divider: "#495057",
      accent:"#107c7c",
      accentHover: "#399897"
    },
  },
});

export default theme;
