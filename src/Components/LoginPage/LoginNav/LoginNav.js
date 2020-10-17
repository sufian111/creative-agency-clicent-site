import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import "./LoginNav.css";
const LoginNav = () => {
  return (
    <div className="makeCenter">
      <Link to="/">
        <img style={{ width: "10%" }} src={logo} alt="" />
      </Link>
    </div>
  );
};

export default LoginNav;
