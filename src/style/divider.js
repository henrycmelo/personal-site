import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const thick= defineStyle({
    borderWidth: '3px', 
  borderStyle: 'solid',
  borderColor:'semantic.text.primary',

})

const section= defineStyle({
    borderWidth: '10px', 
    borderStyle: 'double', 
    borderColor:'semantic.text.primary',
    width:"100vw"
})

const dividerSection = defineStyle({
    borderWidth:"1px",
    borderStyle:'solid',
    borderColor:'semantic.text.primary'
})

export const dividerTheme = defineStyleConfig({
    variants: { thick, section, dividerSection },
})