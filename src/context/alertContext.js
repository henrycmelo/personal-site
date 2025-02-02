import { createContext, useContext, useState } from "react";
import { useScrollLock } from "../hooks/useScrollLock";


const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: "success",
    // Message to be displayed, can be any string
    message: "",
  });


  const handleClick = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  




  

  
  const [colorMode, setColorMode]=useState('dark');

  const toggleColorMode=()=>{
    if (colorMode==='light'){
        setColorMode('dark')
    }
    else {
        setColorMode('light')
    }
   
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const capitalizeEachWord = (string) => {
  const words = string.split(' ');
  
  return words.map((word)=>{
    return word[0].toUpperCase() + word.substring(1)
  }).join(' ')


  
  

}
  
 

 

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message, error) =>
          setState({ isOpen: true, type, message, error }),
        onClose: () => setState({ isOpen: false, type: "", message: "" }),
        handleClick,
        capitalizeFirstLetter,
        capitalizeEachWord,
        colorMode,
        toggleColorMode
        
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
