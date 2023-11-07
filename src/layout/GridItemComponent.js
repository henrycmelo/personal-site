import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdCheckCircle } from "react-icons/md";
import {
    Text,
    GridItem,
    List,
    ListItem,
    ListIcon,
  
  } from "@chakra-ui/react";
  import { useAlertContext } from "../context/alertContext";
  import ScrollReveal from "../hooks/ScrollReveal";

const GridItemComponent = ({ icon, title, items, color }) => {
    const {  colorMode } = useAlertContext();
    return (
      <>
        <GridItem>
          <ScrollReveal>
            {icon ? <FontAwesomeIcon icon={icon} size="4x" color="#FC9039" /> : null}
  
          </ScrollReveal>
        </GridItem>
        <GridItem>
          <ScrollReveal>
            {title? <Text fontSize={{base:"lg", md:"2xl"}} textStyle="h6" textColor={color}>{title}</Text>:null}
            
          </ScrollReveal>
        </GridItem>
        <GridItem pb={6}>
          <ScrollReveal>
            <List spacing={1} fontSize={{base:"lg", md:"2xl"}} textColor={color} textStyle="body">
              {items && items.map((item, index) => (
                <ListItem key={index}>
                  <ListIcon as={MdCheckCircle} color={colorMode==='light'?'blue':'blueDarkMode'} />
  
                  {item}
                </ListItem>
              ))}
            </List>
          </ScrollReveal>
        </GridItem>
      </>
    )
  }

  export default GridItemComponent;