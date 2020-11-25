import React from "react";
import style from "./ctabutton.module.css";

const CtaButton = () => (
  <div className={ style.btnContainer }>
    <div className={ style.btnWrapper }>
      <div className={ style.btnArrow }>
        <svg
        aria-labelledby="arrow"
        id="svg"
        role="presentation"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 44.24 82.83">
          <title id="arrow" lang="en">Arrow</title>
          <g id="arrow" data-name="Layer 2">
            <polyline className={ style.arrow } points="1.41 1.41 41.41 41.41 1.41 81.41" fill="none"/>
          </g>
        </svg>
      </div>
    </div>
  </div>
)

export default CtaButton;