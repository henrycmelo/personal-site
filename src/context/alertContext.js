import {createContext, useContext, useState} from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useScrollLock } from "../hooks/useScrollLock";
import {useMediaQuery} from "@chakra-ui/react"


const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: 'success',
    // Message to be displayed, can be any string
    message: '',
  })
  const { unlockScroll}=useScrollLock();
  
  
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",

      })
      unlockScroll()
        ;
    }
  };
  const socials = [
    { id: "faEnvelope",
      icon: faEnvelope,
      url: "mailto: hcasti40@pratt.edu",
    },
    { id: "faGithub",
      icon: faGithub,
      url: "https://github.com/henrycastillome",
    },
    { id: "faLinkedin",
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/henry--castillo/",
    }
   
  ];

  
  const handleClickToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const[isLargerThanBase]=useMediaQuery("(min-width:769px")
    const direction=isLargerThanBase ? 'row' :"column";
    const spacing =isLargerThanBase ? 20 : 16
    const align = isLargerThanBase ? "flex-start" : 'center'

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message,error) => setState({ isOpen: true, type, message,error }),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
        handleClick,
        socials,
        handleClickToTop,
        direction,
        spacing,
        align,
        isLargerThanBase
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
