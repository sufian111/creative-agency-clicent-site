import React from "react";
import "./Carousel.css";
import CarouselMain from "./CarouselMain/CarouselMain";
const Carousel = () => {
  return (
    <div className="">
      <div className="bgSection">
        <div className="container">
          <p className="pSetion">
            Here are some of <span className="green">our works</span>
          </p>
          <CarouselMain></CarouselMain>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
