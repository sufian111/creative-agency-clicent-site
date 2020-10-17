import React from "react";
import HeaderMain from "./HeaderMain";
import NavbarTop from "./NavbarTop";
import "./Header.css";
const Header = () => {
  return (
    <div className="bg">
      <NavbarTop></NavbarTop>
      <HeaderMain></HeaderMain>
    </div>
  );
};

export default Header;
