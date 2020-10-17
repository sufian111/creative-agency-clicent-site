import React from "react";
import "./FeedBackCard.css";
const FeedBackCard = (props) => {
  const { name, state, description, img } = props.details;

  return (
    <div className="col-md-4">
      <div className="feedbackBox">
        <div className="row">
          <div className="col-md-3">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="col-md-9">
            <p className="pMore">{name} </p>
            <p className="ptwoMore">{state} </p>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeedBackCard;
