import React, { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "../HomePage/Services/ServicesCard";
import NavbarTop from "../HomePage/Top/Header/NavbarTop";

const AllCourse = () => {
  
  const[allServices,setAllServices] = useState([]);

  

  useEffect(() => {
    fetch("http://localhost:5000/allCourse")
      .then((response) => response.json())
      .then((data) => setAllServices(data));
  }, []);


  return (
    <div>
      <NavbarTop></NavbarTop>
      <div className="row d-flex justify-content-center">
        {allServices.map((service) => (
          <ServicesCard service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
