import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const [slider, setSlider] = useState([
    {
      img: "https://images.pexels.com/photos/15913289/pexels-photo-15913289/free-photo-of-cityscape-of-london-at-night.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      img: "https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      img: "https://images.pexels.com/photos/15250353/pexels-photo-15250353/free-photo-of-citycape-of-london.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      img: "https://images.pexels.com/photos/15913289/pexels-photo-15913289/free-photo-of-cityscape-of-london-at-night.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      img: "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      img: "https://images.pexels.com/photos/29285514/pexels-photo-29285514/free-photo-of-luxury-yacht-in-central-london-s-canary-wharf-at-night.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <div
      className="slider-container"
      style={{ width: "90%", margin: "auto", marginTop: "200px" }}
    >
      <Slider {...settings}>
        {slider.map((slid) => (
          <div key={slid}>
            <img
              src={slid.img}
              alt=""
              style={{
                height: "250px",
                width: "300px",
                margin: "auto",
                border: "3px solid yellow",
                borderRadius: "10px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
