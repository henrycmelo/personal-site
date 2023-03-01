import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme ( {
    fonts:{
        heading: "'Open Sans', sans-serif" 
    },
    textStyles:{
        h2: {
            fontFamily: "'Open Sans', sans-serif",
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '80px',
            letterSpacing: '-0.25px' },
        h3: {
            fontFamily: "'Open Sans', sans-serif",
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '65px' },
        h6: {
            fontFamily: "'Open Sans', sans-serif",
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '27px',
            letterSpacing: '0.15px' },
        button: {
            fontFamily: `'Monserrat', sans-serif`,
            fontStyle: 'normal',
            fontWeight: '800',
            lineHeight: '17px',
            letterSpacing: '1.25px'
        },
        body: {
            fontFamily: `'Monserrat', sans-serif`,
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '200%',
            letterSpacing: '0.5px'
        }
    },
    colors:{
       light:'#EFF1F3' ,
       dark: '#272727',
       blue: '#007183',
       yellow: '#FED766',
       gray: '#696773',
       secondLight:'#E8EBED'}
})

export default theme