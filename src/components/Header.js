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

  const menuItems = [
    {label: "Home", path: isHomePage? null : "/", action: ()=>{}},
    {label: "Case Studies" , path: isHomePage? null: "/projects", action: handleClick("projects")},
    {label: "About Me", path: isHomePage? null:"/aboutme", action: handleClick("aboutme")},
    {label: "Contact Me", path: isHomePage? null:"/contactme", action: handleClick("contactme")},
  ]

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
          backgroundColor={"red"}
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
                  src={colorMode === "light" ? logoHenry : logoblue}
                  alt="logoHenry"
                  style={{ width: "82px", height: "82px" }}
                  className={hasAnimated ? "" : "heading-animation-down"}
                />

                
              </HStack>
            </nav>
            <nav>
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              {menuItems.map((item, index) => (
                <button key={index} onClick={item.action}>
                  {item.label}
                </button>
              ))}
            </HStack>

              {isHomePage ? (
                <HStack spacing={8} display={{ base: "none", md: "flex" }}>
                  
                  <Link to="/">
                    <button
                      className={`${
                        hasAnimated ? "" : "heading-animation-two-down"
                      } ${
                        colorMode === "light" ? "button" : "hoverOtherProjects"
                      }`}
                    >
                      Home
                    </button>
                  </Link>
                  {
                    <button
                      className={`${
                        hasAnimated ? "" : "heading-animation-four-down"
                      } ${
                        colorMode === "light" ? "button" : "hoverOtherProjects"
                      }`}
                      onClick={handleClick("projects")}
                    >
                      Work
                    </button>
                  }

                  {
                    <button
                      className={`${
                        hasAnimated ? "" : "heading-animation-three-down"
                      } ${
                        colorMode === "light" ? "button" : "hoverOtherProjects"
                      }`}
                      onClick={handleClick("aboutme")}
                    >
                      About
                    </button>
                  }

                  {
                    <button
                      className={`${
                        hasAnimated ? "" : "heading-animation-five-down"
                      } ${
                        colorMode === "light" ? "button" : "hoverOtherProjects"
                      }`}
                      onClick={handleClick("contactme")}
                    >
                      {" "}
                      Contact
                    </button>
                  }
                  {
                    <a
                      href={require("../document/uxdesigner.pdf")}
                      rel="noreferrer"
                      target="_blank"
                      className={
                        hasAnimated ? "" : "heading-animation-six-down"
                      }
                    >
                      {" "}
                      <CustomizedButton>RESUME</CustomizedButton>{" "}
                    </a>
                  }
                </HStack>
              ) : (
                <HStack spacing={8} display={{ base: "none", md: "flex" }}>
                  <Link to="/">
                    <button
                      className={`${
                        hasAnimated ? "" : "heading-animation-two-down"
                      } ${
                        colorMode === "light" ? "button" : "hoverOtherProjects"
                      }`}
                    >
                      Home
                    </button>
                  </Link>
                  {
                    <Link to="/projects">
                      <button
                        className={`${
                          hasAnimated ? "" : "heading-animation-four-down"
                        } ${
                          colorMode === "light"
                            ? "button"
                            : "hoverOtherProjects"
                        }`}
                      >
                        Work
                      </button>
                    </Link>
                  }

                  {
                    <Link to="/aboutme">
                      {" "}
                      <button
                        className={`${
                          hasAnimated ? "" : "heading-animation-three-down"
                        } ${
                          colorMode === "light"
                            ? "button"
                            : "hoverOtherProjects"
                        }`}
                      >
                        About
                      </button>
                    </Link>
                  }

                  {
                    <Link to="/contactme">
                      <button
                        className={`${
                          hasAnimated ? "" : "heading-animation-five-down"
                        } ${
                          colorMode === "light"
                            ? "button"
                            : "hoverOtherProjects"
                        }`}
                      >
                        {" "}
                        Contact
                      </button>
                    </Link>
                  }
                  {
                    <a
                      href={require("../document/uxdesigner.pdf")}
                      rel="noreferrer"
                      target="_blank"
                      className={
                        hasAnimated ? "" : "heading-animation-six-down"
                      }
                    >
                      {" "}
                      <CustomizedButton>RESUME</CustomizedButton>{" "}
                    </a>
                  }
                </HStack>
              )}
              <VStack spacing={8} display={{ base: "flex", md: "none" }}>
                {" "}
                {isOpen ? (
                  <button
                    className={
                      colorMode === "light"
                        ? "button-responsive"
                        : "hoverOtherProjects"
                    }
                    onClick={handleToggle}
                    style={{ zIndex: "100000" }}
                  >
                    <FontAwesomeIcon icon={faTimes} size="2xl" />
                  </button>
                ) : (
                  <button
                    className={
                      colorMode === "light" ? "button" : "hoverOtherProjects"
                    }
                    onClick={handleToggle}
                    style={{ zIndex: "100000" }}
                  >
                    <FontAwesomeIcon icon={faBars} size="2xl" id="icon" />
                  </button>
                )}{" "}
                {isHomePage ? (
                  <SmallScreen
                    className={`${
                      isOpen ? "removeTransition" : "addTransiton"
                    }`}
                    isHomePage
                  />
                ) : (
                  <SmallScreen
                    className={`${
                      isOpen ? "removeTransition" : "addTransiton"
                    }`}
                  />
                )}
              </VStack>
            </nav>
          </HStack>
        </Box>
      )}
    </>
  );
};
export default Header;
