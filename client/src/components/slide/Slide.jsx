// import React from "react";
// import "./Slide.scss";
// import Slider from "infinite-react-carousel";

// const Slide = ({ children, slidesToShow, arrowsScroll }) => {
//   return (
//     <div className="slide">
//       <div className="container">
//         <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
//           {children}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Slide;
import React from "react";
import "./Slide.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  const settings = {
    slidesToShow: slidesToShow,
    slidesToScroll: arrowsScroll,
    dots: true, // Add any additional settings you need
    infinite: true,
    speed: 500,
  };

  return (
    <>
      <div className="slide">
        <div className="container">
          <Slider {...settings}>{children}</Slider>
        </div>
      </div>
    </>
  );
};

export default Slide;
