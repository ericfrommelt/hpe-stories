import React, { useRef, useEffect } from "react";
import style from "./ctabutton.module.css";
import gsap from 'gsap';
import { TimelineLite } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const CtaButton = () => {
  const svgWrapper = useRef(null);

  useEffect(() => {
    const [svgElements] = svgWrapper.current.children;
    const master = gsap.timeline();

    function timelineArrow() {
      const tl = new TimelineLite({
        scrollTrigger: {
          trigger: "#ctaButton",
          start: "bottom 100%",
          end: "top 100%",
          markers: false,
          scrub: 1,
        }
      });
        tl.from("#ctaArrow", { x: -1000, duration: 0.5});
      return tl
    }
    master.add(timelineArrow());

  }, []);

  return (
    <div className={ style.btnContainer }>
      <div className={ style.btnWrapper }>
        <div className={ style.btnArrow } ref={svgWrapper}>
          <svg
          aria-labelledby="arrow"
          id="svg"
          role="presentation"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 44.24 82.83">
            <title id="arrow" lang="en">Arrow</title>
            <g id="ctaArrow" data-name="Layer 2">
              <polyline id="Arrow" className={ style.arrow } points="1.41 1.41 41.41 41.41 1.41 81.41" fill="none"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}


export default CtaButton;