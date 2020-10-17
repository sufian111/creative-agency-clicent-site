import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CarouselMain = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="pb-5">
      <Slider {...settings}>
        <div>
          <img src="https://i.ibb.co/fQv9p4j/carousel-1.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/52Bsc84/carousel-2.png" alt="" />
        </div>

        <div>
          <img src="https://i.ibb.co/QPLpBdt/carousel-4.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/2gmdJ98/carousel-5.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselMain;
