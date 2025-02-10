import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const customInput = definePartsStyle({
    field:{
        border:"1px solid",
        borderColor:'semantic.divider',
        background: 'transparent',
        _focus:{
            borderColor:'semantic.text.primary',
            boxShadow: '0 0 0 2px #212529 '
        },
        _placeholder:{
            color:'gray.400'
        },
        _invalid:{
            borderColor: 'red',
            boxShadow: '0 0 0 1px red',
        },
       

    }
    
})

export const inputTheme = defineMultiStyleConfig({
    variants: { customInput },
})