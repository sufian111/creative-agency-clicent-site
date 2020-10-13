import React from "react";
import "./ServicesCard.css";
const ServicesCard = (props) => {
  const { name, description, img } = props.service;
  return (
    <div className="box col-md-3">
      <img className="imageSection" src={img} alt="" />
      <p className="headingSection">{name}</p>
      <p className="paragraphSetion">{description}</p>
    </div>
  );
};

export default ServicesCard;
