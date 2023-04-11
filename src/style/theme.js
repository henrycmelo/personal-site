import { extendTheme } from "@chakra-ui/react"
import { switchTheme } from "./Switch"





const theme = extendTheme({
    components: { Switch: switchTheme },
    fonts: {
        heading: "'Open Sans', sans-serif"
    },
    textStyles: {
        h2: {
            fontFamily: "'Open Sans', sans-serif",
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '80px',
            letterSpacing: '-0.25px'
        },
        h3: {
            fontFamily: "'Open Sans', sans-serif",
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '65px'
        },
        h6: {
            fontFamily: "'Open Sans', sans-serif",
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '40px',
            letterSpacing: '0.15px'
        },
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
    colors: {
        light: '#EFF1F3',
        dark: '#272727',
        blue: '#007183',
        yellow: '#FED766',
        gray: '#696773',
        secondLight: '#E8EBED',
        secondDark: '#5A5863',
        blueDarkMode:"#00A4BD",
        grayDarkMode:"#C3C3C3",
        grayBoldDarkMode:"#909BA3",
        darkDarkMode:'#232323',
        
      
},
    layerStyles:{
        gradientBack:{
            bg:'radial-gradient(circle, rgba(54,76,82,1) 0%, rgba(35,35,35,1) 100%)'

      
        },
        normalBlue:{
            bg:'#007183'
        },
        normalDark:{
            bg:'#272727'
        }
       
    },
    
   
 
    initialColorMode: 'light',
    useSystemColorMode: false,
})

export default theme


