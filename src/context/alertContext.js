import {createContext, useContext, useState} from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useScrollLock } from "../hooks/useScrollLock";


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
    },
    { id:"faInstagram",
      icon: faInstagram,
      url: "https://www.instagram.com/henrycastillome",
    }
   
  ];

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
        handleClick,
        socials
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
