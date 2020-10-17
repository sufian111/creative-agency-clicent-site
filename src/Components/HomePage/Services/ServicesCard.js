import React from "react";
import { useHistory } from "react-router-dom";
import "./ServicesCard.css";
const ServicesCard = (props) => {
  const { name, description, img ,id } = props.service;
  const history = useHistory();
  const handlePath = (id) => {
    console.log("click");
    history.push(`/orderCourse/${id}`);
  };



  return (
    <div onClick={() => handlePath(id)} className="box col-md-3">
      <img className="imageSection" src={img} alt="" />
      <p className="headingSection">{name}</p>
      <p className="poneSetion">{description}</p>

    </div>
  );
};

export default ServicesCard;
