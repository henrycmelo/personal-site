import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdCheckCircle } from "react-icons/md";
import {
    Text,
    GridItem,
    List,
    ListItem,
    ListIcon,
    HStack,
    Highlight
  
  } from "@chakra-ui/react";
  import { useAlertContext } from "../context/alertContext";
  import ScrollReveal from "../hooks/ScrollReveal";

const GridItemComponent = ({ icon, title, items, color,query, alignTitle }) => {
    const {  colorMode } = useAlertContext();
    return (
      <>
        
        <GridItem  display="flex" flexDirection="column" alignItems={alignTitle? alignTitle : "left"} justifyContent="center"  >
          
            <HStack align={'center'}>
            {title? <Text fontSize={{base:"md", md:"xl"}}   textStyle="h6" textColor={color}>{title}</Text>:null}
            {icon ? <FontAwesomeIcon icon={icon} size="2x"  color="#FC9039" /> : null}
            </HStack>
     
            
          
        </GridItem >
        <GridItem pb={6} >
          <ScrollReveal>
            <List spacing={1} fontSize={{base:"sm", md:"md"}}  textColor={color} textStyle="body">
              {items && items.map((item, index) => (
                
                <ListItem key={index}>
                  <ListIcon as={MdCheckCircle} color={colorMode==='light'?'blue':'blueDarkMode'} />
                  <Highlight ignoreCase query={query || ""} styles={{  color:'inherit', fontWeight:'semibold' }}>{item}</Highlight>
                  
                </ListItem>
              ))}
            </List>
          </ScrollReveal>
        </GridItem>
      </>
    )
  }

  export default GridItemComponent;