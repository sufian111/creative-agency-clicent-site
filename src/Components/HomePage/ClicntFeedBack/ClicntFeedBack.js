import React, { useEffect, useState } from "react";
import FeedBackCard from "./FeedBackCard/FeedBackCard";
import "./ClicntFeedBack.css";
const ClicntFeedBack = () => {
  
  const [feedBackMessage,setFeedBackMessage] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/allFeedback")
      .then((response) => response.json())
      .then((data) => setFeedBackMessage(data));
  }, []);


  return (
    <div className="container">
      <div>
        <p className="pmodifying p-5">
          Clients <span className="green"> Feedback</span>
        </p>
        <div className="row mt-5 ">
          {feedBackMessage.map((details) => (
            <FeedBackCard details={details}></FeedBackCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClicntFeedBack;
