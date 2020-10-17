import React from "react";
import "./HeaderMain.css";
import banner from "../../../../images/logos/Frame.png";
import { Link } from "react-router-dom";
const HeaderMain = () => {
  return (
    <div className="container headerSection">
      <div className="row d-flex align-items-center">
        <div className="col-md-4 ">
          <p className="wordSection">Lets Grow Your Brand To The Next Level</p>
          <p className="paragraphSetion">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            itaque doloremque a nostrum optio culpa.
          </p>
          <Link to="/login">
            <button className="btn buttonSection">Hire Us</button>
          </Link>
        </div>
        <div className="col-md-8">
          <img style={{ width: "90%" }} src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
