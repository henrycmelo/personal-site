import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const thick= defineStyle({
    borderWidth: '3px', 
  borderStyle: 'solid',
  borderColor:'semantic.divider',
  opacity:""

})

const section= defineStyle({
    borderWidth: '10px', 
    borderStyle: 'double', 
    borderColor:'semantic.divider',
    width:"100vw",
    opacity:""
})

const dividerSection = defineStyle({
    borderWidth:"1px",
    borderStyle:'solid',
    borderColor:'semantic.divider',
    opacity:""

})

export const dividerTheme = defineStyleConfig({
    variants: { thick, section, dividerSection },
})