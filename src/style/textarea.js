import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const customTextarea = defineStyle({
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
    }
    

    
})

export const textareaTheme = defineStyleConfig({
    variants: { customTextarea },
})