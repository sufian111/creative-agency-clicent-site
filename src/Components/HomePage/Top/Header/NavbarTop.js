import React from "react";
import logo from "../../../../images/logos/logo.png";
import "./NavbarTop.css";
const NavbarTop = () => {
  return (
    <div className="container ">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#">
          <img style={{ width: "30%" }} src={logo} alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active modify">
              <a class="nav-link " href="#">
                Home
              </a>
            </li>
            <li class="nav-item modify">
              <a class="nav-link" href="#">
                Our Protfolio
              </a>
            </li>
            <li class="nav-item modify">
              <a class="nav-link" href="#">
                Our Team
              </a>
            </li>
            <li class="nav-item modify">
              <a class="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <button class="btn btnModify">Login</button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarTop;
