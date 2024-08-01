// src/components/loading/Loading.jsx
import React, { useState, useEffect } from "react";
import "./Loading.scss";

function Loading({ isLoading }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setFadeOut(false);
      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 2000); // Matches the duration of the fade-out transition
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div className={`loading ${fadeOut ? "fade-out" : ""}`}>
      {/* <div className="spinner"></div> */}
      <img src="/img/Spinner.svg" alt="Loading spinner" className="spinner" />
    </div>
  );
}

export default Loading;
