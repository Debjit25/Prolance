import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
// import { useQuery } from "@tanstack/react-query";
// import newRequest from "../../utils/newRequest";
// import { useLocation } from "react-router-dom";
import {gigs} from "../../data";

const Gigs = () => {
  const [sort, setSort] = useState(false);
  const [open, setOpen] = useState(false);

  const reSort = (type) => {
    console.log(type);
    setSort(type);
    setOpen(false);
  }
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Prolance &gt; Graphics & Design &gt;</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Prolance's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="number" placeholder="min" />
            <input type="number" placeholder="max" />
            <button >Apply</button>
          </div>
          <div className="right" >
            <span className="sortBy">Sort by</span>
            <div className="sortbyDiv" onClick={() => setOpen(!open)}>
              <span className="sortType">
                {sort === "sales" ? "Best Selling" : "Newest"}
              </span>
              <img src="./img/down.png" alt="" />
              {open && <div className="rightMenu">
                {sort === "sales" ? (<span onClick={() => reSort("createdAt")}>Newest</span>) :
                  (<span onClick={() => reSort("sales")}>Best Selling</span>)}
              </div>}
            </div>


          </div>
        </div>
        <div className="cards">
                {gigs.map(gig =>(
                  <GigCard key = {gig.id} item={gig} />
                ))}
        </div>

      </div>
    </div>
  );
}

export default Gigs;
