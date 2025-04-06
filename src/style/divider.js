import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const thick= defineStyle({
    borderWidth: '3px', 
  borderStyle: 'solid',
  borderColor:'semantic.divider',
  opacity:""

})

const section= defineStyle({
    borderWidth: '5px', 
    borderStyle: 'double', 
    borderColor:'gray.600',
    width:"100vw",
    opacity:""
    
})

const dividerSection = defineStyle({
    borderWidth:"1px",
    borderStyle:'solid',
    borderColor:'semantic.divider',
    opacity:""

})

const regular= defineStyle({
    borderWidth:"1px",
    borderStyle:'solid',
    borderColor:'semantic.background.tertiary',
    opacity:""

})

export const dividerTheme = defineStyleConfig({
    variants: { thick, section, dividerSection, regular },
})