import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function CatCard({ card }) {
  return (
    <div className="main">
      <Link to="/gigs?cat=design" >
        <div className="catCard">
          <img src={card.img} alt="" />
          <span className="desc">{card.desc}</span>
          <span className="title">{card.title}</span>
        </div>
      </Link>
    </div>
  );
}
export default CatCard;
