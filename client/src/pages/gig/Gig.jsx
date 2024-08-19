import React from "react";
import "./Gig.scss";
import Slider from "react-slick";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
// import Reviews from "../../components/reviews/Reviews";
import avatar from "/img/noavatar.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gig() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            Prolance &gt; Graphics & Design &gt;
          </span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img src={avatar} alt="" />
            <span>John Doe</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <div className="sliderContainer">
            <Slider {...settings} className="slider" >
              <img src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Art 1" />
              <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Art 2" />
              <img src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Art 3" />
            </Slider>
          </div>


          <h2>About This Gig</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, vero? Voluptas ab quibusdam atque minus a, recusandae neque quisquam quia, natus facilis sed inventore animi enim corrupti porro numquam debitis!</p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src={avatar} alt="" />
              <div className="info">
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Usa</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, vel. Vitae reiciendis odit, temporibus corrupti perspiciatis necessitatibus eligendi, mollitia fugiat nesciunt nostrum soluta, adipisci ratione pariatur itaque asperiores! Rem, fugiat?</p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src={avatar} alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="" alt="" />
                    <span>united States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis error iure blanditiis, eaque laborum quia qui eius quibusdam earum beatae expedita eum, recusandae consequatur harum odit porro dolores fugiat corporis.</p>
            </div>

            <div className="helpful">
              <span>Helpful? </span>
              <img src="/img/like.png" alt="" className="like" />
              <span> Yes </span>
              <img src="/img/dislike.png" alt="" className="dislike" />
              <span> No </span>
            </div>
          </div>
        </div>
        <div className="reviews">
          <h2>Reviews</h2>
          <div className="item">
            <div className="user">
              <img src={avatar} alt="" />
              <div className="info">
                <span>John Doe</span>
                <div className="country">
                  <img src="" alt="" />
                  <span>united States</span>
                </div>
              </div>
            </div>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis error iure blanditiis, eaque laborum quia qui eius quibusdam earum beatae expedita eum, recusandae consequatur harum odit porro dolores fugiat corporis.</p>
          </div>
          <div className="helpful">
            <span>Helpful? </span>
            <img src="/img/like.png" alt="" className="like" />
            <span> Yes </span>
            <img src="/img/dislike.png" alt="" className="dislike" />
            <span> No </span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="price">
          <h3>1 Ai Generated</h3>
          <h2>₹ 2 crore</h2>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nostrum nulla! Dolore repellendus harum quibusdam id neque hic omnis modi vel! Illo maxime perspiciatis saepe deserunt fugit, consequatur tempora debitis.</p>
        <div className="details">
          <div className="item">
            <img src="/img/clock.png" alt="" />
            <span>2 Days Delivery</span>
          </div>
          <div className="item">
            <img src="/img/recycle.png" alt="" />
            <span>5 Revisions</span>
          </div>
        </div>
        <div className="features">
          <div className="item">
            <img src="/img/greencheck.png" alt="" />
            <span>Prompt writing</span>
          </div>
        </div>
        <button>Continue</button>
      </div>
      {/* </div > */}

    </div >
  );
}

export default Gig;
