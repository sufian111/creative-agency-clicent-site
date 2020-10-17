import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userDetails } from "../../../../App";
import logo from "../../../../images/logos/logo.png";
import "./NavbarTop.css";
const NavbarTop = () => {
  const [loggingUser, setLoggingUser] = useContext(userDetails);
  const handleReloadPage = () => {
    window.location.reload();
  };
  return (
    <div className="container ">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <Link to="/">
          <a class="navbar-brand">
            <img style={{ width: "30%" }} src={logo} alt="" />
          </a>
        </Link>
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

            {loggingUser.email ? (
              <button class="btn btnModify" onClick={handleReloadPage}>
                Logout
              </button>
            ) : (
              <button class="btn btnModify">
                <Link to="/login" style={{ color: "white" }}>
                  Login
                </Link>
              </button>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarTop;
