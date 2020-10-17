import React from "react";
import Header from "./Top/Header/Header";
import "./Home.css";
import Sponsor from "./Sponsor/Sponsor";
import Services from "./Services/Services";
import Carousel from "./carousel/Carousel";
import ClicntFeedBack from "./ClicntFeedBack/ClicntFeedBack";
import Footer from "./Footer/Footer";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <Sponsor></Sponsor>
      <Services></Services>
      <Carousel></Carousel>
      <ClicntFeedBack></ClicntFeedBack>
      <Footer></Footer>
    </div>
  );
};

export default Home;
