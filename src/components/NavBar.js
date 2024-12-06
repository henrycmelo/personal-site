import React from "react";
import { HStack, Link } from "@chakra-ui/react";
import CustomizedButton from "./CustomizedButton";

const NavBar = ({ isHomePage, handleClick, colorMode, hasAnimated }) => {
  const navItems = isHomePage
    ? [
        { label: "Home", action: () => {}, link: "/" },
        { label: "Work", action: handleClick("projects") },
        { label: "About", action: handleClick("aboutme") },
        { label: "Contact", action: handleClick("contactme") },
      ]
    : [
        { label: "Home", action: () => {}, link: "/" },
        { label: "Work", link: "/projects" },
        { label: "About", link: "/aboutme" },
        { label: "Contact", link: "/contactme" },
      ];

  return (
    <HStack spacing={8} display={{ base: "none", md: "flex" }}>
      {navItems.map(({ label, action, link }, index) => (
        <Link
          key={label}
          to={link}
          onClick={action}
          className={`${hasAnimated ? "" : `heading-animation-${index}-down`} ${
            colorMode === "light" ? "button" : "hoverOtherProjects"
          }`}
        >
          {label}
        </Link>
      ))}
      <a
        href={require("../document/uxdesigner.pdf")}
        rel="noreferrer"
        target="_blank"
        className={hasAnimated ? "" : "heading-animation-six-down"}
      >
        <CustomizedButton>RESUME</CustomizedButton>
      </a>
    </HStack>
  );
};

export default NavBar;
