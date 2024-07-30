import React, { useState } from "react";
import "./Featured.scss";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Connecting You to the Brightest
            <br />
            <span>Student Freelancers</span>
          </h1>
          <div className="search">
            <div className="searchInput">
              {/* <img src="./img/search.png" alt="" /> */}
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
            {/* <p>Not sure How this works??</p> */}
            {/* <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button> */}
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
