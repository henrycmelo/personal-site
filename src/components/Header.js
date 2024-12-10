import React, { useEffect, useState } from "react";
import { Box, HStack, VStack, Switch } from "@chakra-ui/react";
import logoHenry from "../images/hc_logos_black.png";
import { useAlertContext } from "../context/alertContext";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SmallScreen from "./SmallScreen";
import { useScrollLock } from "../hooks/useScrollLock";
import { Link } from "react-router-dom";
import "animate.css";
import logoblue from "../images/hc_logo_blue.png";
import CustomizedButton from "./CustomizedButton";

const Header = ({ isHomePage }) => {
  const { handleClick, colorMode, toggleColorMode } = useAlertContext();
  const [previousScroll, setPreviousScroll] = useState(0);
  const [showMenu, setShowMenu] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();
  const [hasAnimated, setHasAnimated] = useState(false);

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
    
  {
    label: "Resume",
    type: "link", // Custom type to identify this item
    href: require("../document/uxdesigner.pdf"),
    action: null, // No action required
    target: "_blank",
    rel: "noreferrer",
  }
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
          alignItems="flex-start"
          width="100vw"
          backgroundColor={"semantic.background.primary"}
        >
          <HStack
            px={10}
            py={4}
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
              <HStack spacing={8} display={{ base: "none", md: "flex" }}>
                {menuItems
                .filter((item) => item.label !== "Resume")
                .map((item, index) => {
                  const animationClass = hasAnimated
                    ? ""
                    : `heading-animation-${numberToWord[index + 2]}-down`;

                  return isHomePage ? (
                    <button
                      key={index}
                      onClick={item.action}
                      className={animationClass}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link to={item.path} key={index}>
                      <button>{item.label}</button>
                    </Link>
                  );
                })}

                {menuItems.filter((item) => item.type === "link").map((item, index) => (
                  <a href={item.href} target={item.target} rel={item.rel} key={index}>
                    <CustomizedButton>{item.label}</CustomizedButton>
                  </a>
                ))}
                
              </HStack>

             {/* Small Screen Navigation */}

             <VStack spacing={8} display={{ base: "flex", md: "none" }}>
              <button onClick={handleToggle} style={{ zIndex: "100000" }}>
                <FontAwesomeIcon icon={isOpen? faTimes : faBars} size="2xl" id={isOpen? "": "icon"} />
              </button>
              <SmallScreen className={`${isOpen ? "removeTransition" : "addTransiton"}`} {...(isHomePage && {isHomePage})} menuItems={menuItems}/>
             </VStack>

              
            </nav>
          </HStack>
        </Box>
      )}
    </>
  );
};
export default Header;
