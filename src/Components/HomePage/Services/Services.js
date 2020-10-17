import React, { useState } from "react";
import ServicesCard from "./ServicesCard";
import "./Services.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const Services = () => {

  const[allServices,setAllServices] = useState([]);

  

  useEffect(() => {
    fetch("http://localhost:5000/allCourse")
      .then((response) => response.json())
      .then((data) => setAllServices(data));
  }, []);


  const [division,setDivision] = useState(true);


  const history = useHistory();
  const handlePath = () => {
    console.log("click");
    history.push("/allCourseList");
  };


  return (
    <div className="container mt-5">
      <div>
        <p className="top">
          Provied awesome <span className="green">service</span>
        </p>
      </div>
      <div className="row d-flex justify-content-center">
        {allServices.map((service) => (
          <ServicesCard service={service}></ServicesCard>
        ))}
      </div>
      <div>
          {division && <button onClick={handlePath}  className="btn btn-primary divCenter">All Course</button> }
      </div>
    </div>
  );
};

export default Services;
