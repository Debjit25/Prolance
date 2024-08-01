import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FadeInSection = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const animation = gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // When the top of the element hits 80% from the top of the viewport
          end: "top 70%",
          once: true, // Ensure the animation triggers only once
          onEnter: () => {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: 1,
            });
          },
          markers: false,
        },
      }
    );

    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default FadeInSection;
