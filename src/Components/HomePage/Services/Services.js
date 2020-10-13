import React from "react";
import ServicesCard from "./ServicesCard";
import "./Services.css";
const Services = () => {
  const allServices = [
    {
      name: "Web and Mobile design",
      description:
        "We craft stunning and amazing web UI, using a well drafted UX to fit your product",
      img: "https://i.ibb.co/JrMbcwv/service1.png",
    },
    {
      name: "Graphic Design",
      description:
        "Amazing flyers and social media posts and brand representations that would make your brand stand out ",
      img: "https://i.ibb.co/t4577TY/service2.png",
    },

    {
      name: "Web Development",
      description:
        "With well written codes,we build amazing app for all platform mobile and web app in general",
      img: "https://i.ibb.co/yYWtRKj/service3.png",
    },
  ];

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
    </div>
  );
};

export default Services;
