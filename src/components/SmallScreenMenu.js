import React from "react";
import SmallScreen from "./SmallScreen";

const SmallScreenMenu = ({ isOpen, isHomePage }) => (
  <SmallScreen className={isOpen ? "removeTransition" : "addTransition"} isHomePage={isHomePage} />
);

export default SmallScreenMenu;
