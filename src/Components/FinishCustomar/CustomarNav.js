import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logos/logo.png";
const CustomarNav = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <img style={{ width: "15%", padding: "20px" }} src={logo} alt="" />
        </Link>
        <h5 style={{ display: "inline", marginLeft: "150px" }}>Order</h5>
        <h5 style={{ display: "inline", marginLeft: "130px" }}>Name</h5>
      </div>
    </div>
  );
};

export default CustomarNav;
