import React from "react";
import "./CourseCard.css";
const CourseCard = (props) => {
  const { img, name, description } = props.service;
  return (
    <div className="box col-md-4">
      <img className="imageSection" src={img} alt="" />
      <p className="headingSection">{name}</p>
      <p className="poneSetion">{description}</p>
    </div>
  );
};

export default CourseCard;
