import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const thick= defineStyle({
    borderWidth: '3px', 
  borderStyle: 'solid', 
  borderRadius: 10,
  borderColor:'semantic.divider',
  paddingTop:8,
  width:"100vw"

})

export const dividerTheme = defineStyleConfig({
    variants: { thick },
})