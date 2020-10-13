import React from "react";
import image1 from "../../../images/logos/slack.png";
import image2 from "../../../images/logos/google.png";
import image3 from "../../../images/logos/uber.png";
import image4 from "../../../images/logos/netflix.png";
import image5 from "../../../images/logos/airbnb.png";
import "./sponsor.css";
const Sponsor = () => {
  return (
    <div className="container m-5">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-2">
          <img className="imgUpdate" src={image1} alt="" />
        </div>
        <div className="col-md-2">
          <img className="imgUpdate" src={image2} alt="" />
        </div>
        <div className="col-md-2">
          <img className="imgUpdate" src={image3} alt="" />
        </div>
        <div className="col-md-2">
          <img className="imgUpdate" src={image4} alt="" />
        </div>
        <div className="col-md-2">
          <img className="imgUpdate" src={image5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
