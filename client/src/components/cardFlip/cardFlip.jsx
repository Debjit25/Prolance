import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CardFlip.scss";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container" onClick={handleFlip}>
      <motion.div
        className={`card ${isFlipped ? "flipped" : ""}`}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div className="card-front">
          <h1>A Universe of Talent at Your Fingertips</h1>
          <div className="title">
            <img src="./img/check.png" alt="Check icon" />
            Top Talent for Every Budget
          </div>
          <p>
            Find exceptional services at various price points. Enjoy
            transparent, project-based pricing with no hidden hourly rates.
          </p>
          <div className="title">
            <img src="./img/check.png" alt="Check icon" />
            Efficient Quality, Delivered Fast
          </div>
          <p>
            Connect with the right freelancer and kick off your project within
            minutes for quick and high-quality results.
          </p>
        </motion.div>
        <motion.div className="card-back">
          <div className="title">
            <img src="./img/check.png" alt="Check icon" />
            Secure Payments, Guaranteed
          </div>
          <p>
            Know exactly what you'll pay upfront. Your funds are only released
            once you’re satisfied with the completed work.
          </p>
          <div className="title">
            <img src="./img/check.png" alt="Check icon" />
            24/7 support
          </div>
          <p>
            Access top-notch services any time of the day, with reliable support
            always at hand.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardFlip;
