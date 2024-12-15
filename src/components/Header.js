import React, { useEffect, useState } from "react";
import { Box, HStack, VStack} from "@chakra-ui/react";
import logoHenry from "../images/hc_logo_grayHQ.png";
import { useAlertContext } from "../context/alertContext";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SmallScreen from "./SmallScreen";
import { useScrollLock } from "../hooks/useScrollLock";
import { Link } from "react-router-dom";
import "animate.css";


const Header = ({ isHomePage }) => {
  const { handleClick } = useAlertContext();
  const [previousScroll, setPreviousScroll] = useState(0);
  const [showMenu, setShowMenu] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();
  const [hasAnimated, setHasAnimated] = useState(false);
  const hoverStyle = {
    color:"semantic.text.primary", textDecoration:"underline", fontWeight:"bold"
  }
  const hoverStyleDark = {
    textDecoration:"underline", fontWeight:"bold"
  }

  const numberToWord = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];

  const menuItems = [
    { label: "Home", path: isHomePage ? null : "/", action: () => {} },
    {
      label: "Case Studies",
      path: isHomePage ? null : "/projects",
      action: handleClick("projects"),
    },
    {
      label: "About Me",
      path: isHomePage ? null : "/aboutme",
      action: handleClick("aboutme"),
    },
    {
      label: "Contact Me",
      path: isHomePage ? null : "/contactme",
      action: handleClick("contactme"),
    },
    
 
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);

    lockScroll();
  };

  useEffect(() => {
    if (!isOpen) {
      unlockScroll();
    }
  }, [isOpen, unlockScroll]); //This will call the unlockScroll function whenever the isOpen state variable changes and its value is false, which means the menu is closed.

  useEffect(() => {
    function handleScroll() {
      setIsOpen(false);
      const currentScroll = window.scrollY;
      if (typeof window !== "undefined") {
        if (currentScroll > previousScroll) {
          setShowMenu(false);
        } else {
          setShowMenu(true);
          if (!hasAnimated) {
            setHasAnimated(true);
          }
        }
      }

      setPreviousScroll(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousScroll, hasAnimated]);

  return (
    <>
      {showMenu && (
        <Box
          position="fixed"
          top={0}
          translateY={0}
          transitionProperty="transform"
          transitionDuration="0.3s"
          transitionTimingFunction="ease-in-out"
          zIndex="overlay"
          width="100vw"
          backgroundColor={"semantic.background.primary"}
        
        >
          <HStack
            pl={{base:8, md:32}}
            py={4}
            pr={{base:8, md:32}}
            justifyContent="space-between"
            alignItems="center"
          >
            <nav>
              <HStack>
                <img
                  src={logoHenry}
                  alt="logoHenry"
                  style={{ width: "200px" }}
                  className={hasAnimated ? "" : "heading-animation-down"}
                />
              </HStack>
            </nav>
            <nav>
              <HStack spacing={8} display={{ base: "none", md: "flex" }}  >
                {menuItems
                .filter((item) => item.label !== "socials")
                .map((item, index) => {
                  const animationClass = hasAnimated
                    ? ""
                    : `heading-animation-${numberToWord[index + 2]}-down`;

                  return isHomePage ? (
                    <Box
                      as='button'
                      key={index}
                      onClick={item.action}
                      className={animationClass}
                      color="semantic.text.secondary"
                      _hover={hoverStyle}
                    >
                      {item.label}
                    </Box>
                  ) : (
                    <Link to={item.path} key={index}>
                      <Box
                      as='button'
                      key={index}
                      onClick={item.action}
                      className={animationClass}
                      color="semantic.text.secondary"
                      _hover={hoverStyle}
                    >
                      {item.label}
                    </Box>
                    </Link>
                  );
                })}

               
                
              </HStack>

             {/* Small Screen Navigation */}

             <VStack spacing={8} display={{ base: "flex", md: "none" }}>
              <Box as="button" onClick={handleToggle} style={{ zIndex: "100000" }} color={isOpen? "semantic.text.button" : "semantic.text.primary"}
              _hover={hoverStyleDark}>
                <FontAwesomeIcon icon={isOpen? faTimes : faBars} size="2xl" id={isOpen? "": "icon"} />
              </Box>
              <SmallScreen className={`${isOpen ? "removeTransition" : "addTransiton"}`} {...(isHomePage && {isHomePage})} menuItems={menuItems} hoverStyle={hoverStyleDark}/>
             </VStack>

              
            </nav>
          </HStack>
        </Box>
      )}
    </>
  );
};
export default Header;
