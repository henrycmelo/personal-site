import { createContext, useContext, useState } from "react";
import { faBriefcase, faComment, faEnvelope, faFolderOpen, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const navigate  = useNavigate()
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: "success",
    // Message to be displayed, can be any string
    message: "",
  });

  const sections = [
      { id: "home", label: "Home", icon:faHome, path:"/" },
      { id: "projects", label: "Projects", icon:faFolderOpen, path:'projects' },
      { id: "reviews", label: "What people say about me", icon:faComment, path:'reviews' },
      { id: "career", label: "Career timeline", icon:faBriefcase },
      { id: "aboutme", label: "about me", icon:faUser },
      { id: "contact", label: "contact", icon:faEnvelope },
      
    ]

  const handleClick = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handlePath = (path) =>{
    navigate(path)
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const capitalizeEachWord = (string) => {
    const words = string.split(" ");

    return words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
  };

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
        sections,
        handlePath
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
