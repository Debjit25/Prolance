import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Featured.scss";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const images = [
  "/img/Hero_img_1.jpg",
  "/img/Hero_img_2.jpg",
  "/img/Hero_img_3.jpg",
  "/img/Hero_img_4.jpg",
];

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };
  

  return (
    <div className="featured">
      <Slider {...settings} className="background-carousel">
        {images.map((image, index) => (
          <div key={index} className="carousel-image">
            <img src={image} alt={`carousel ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="container">
        <div className="left">
          <h1>
            Connecting You to the Brightest
            <br />
            <span>Student Freelancers</span>
          </h1>
          <div className="search">
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for any service..."
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>
              <IoSearch />
            </button>
          </div>
          <div className="popular">
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
