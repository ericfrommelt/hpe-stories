import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TweenMax, TimelineMax } from 'gsap';
import CustomEase from 'gsap/CustomEase.js';
gsap.registerPlugin(CustomEase);

const Atgc = () => {
  const svgWrapper = useRef(null);

  useEffect(() => {
    const [svgElements] = svgWrapper.current.children;
  }, []);

  return (
    <div ref={svgWrapper}>
      <svg
      aria-labelledby="illustration"
      id="svg"
      role="presentation" 
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 180">
        <title id="illustration" lang="en">Genetic code bases</title>
        <rect width="800" height="180" fill="#425563" id="Background"/>
        <g id="Connectors" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
          <line x1="156.1" y1="68.5" x2="210.1" y2="68.5"/>
          <line x1="373.29" y1="68.5" x2="427.29" y2="68.5"/>
          <line x1="589.47" y1="68.5" x2="643.47" y2="68.5"/>
        </g>
        <g id="Adenine">
          <text transform="translate(40.42 165.8)" font-size="22" fill="#fff" font-family="MetricHPE-Regular, MetricHPE">
            <tspan letter-spacing="-.01em">A</tspan><tspan x="12.96" y="0">denine</tspan>
          </text>
          <polygon points="110.02 8.5 40.74 8.5 6.1 68.5 40.74 128.5 110.02 128.5 144.66 68.5 110.02 8.5" fill="none" stroke="#2ad2c9" stroke-miterlimit="10" stroke-width="4"/>
          <path d="M85.22 88.2a.28.28 0 01-.3.3h-1.44a.28.28 0 01-.3-.3V73.56h-15.6V88.2a.28.28 0 01-.3.3h-1.44a.28.28 0 01-.3-.3V72.36L72.5 46a.33.33 0 01.36-.24h5a.33.33 0 01.36.24l7 26.34zm-8.58-40.38h-2.52l-6.24 23.7h15z" fill="#fff"/>
        </g>
        <g id="Thymine">
          <text transform="translate(255.32 165.8)" font-size="22" fill="#fff" font-family="MetricHPE-Regular, MetricHPE">
            T<tspan x="12.47" y="0" letter-spacing="0em">h</tspan><tspan x="23.12" y="0">ymine</tspan>
          </text>
          <polygon points="327.04 8.5 257.76 8.5 223.12 68.5 257.76 128.5 327.04 128.5 361.68 68.5 327.04 8.5" fill="none" stroke="#ff8d6d" stroke-miterlimit="10" stroke-width="4"/>
          <path d="M303.56 47.52a.28.28 0 01-.3.3h-9.84V88.2a.28.28 0 01-.3.3h-1.44a.28.28 0 01-.3-.3V47.82h-9.84a.28.28 0 01-.3-.3v-1.44a.28.28 0 01.3-.3h21.72a.28.28 0 01.3.3z" fill="#fff"/>
        </g>
        <g id="Guanine">
          <text transform="translate(475.36 165.8)" font-size="22" fill="#fff" font-family="MetricHPE-Regular, MetricHPE">
            Guanine
          </text>
          <polygon points="544.82 8.5 475.53 8.5 440.89 68.5 475.53 128.5 544.82 128.5 579.46 68.5 544.82 8.5" fill="none" stroke="#c6c9ca" stroke-miterlimit="10" stroke-width="4"/>
          <path d="M520.37 80a9.18 9.18 0 01-9.18 9.18h-2A9.18 9.18 0 01500 80V54.24a9.14 9.14 0 019.18-9.18h2a9.14 9.14 0 019.18 9.18V55a.28.28 0 01-.3.3h-1.5a.28.28 0 01-.3-.3v-.72a7.11 7.11 0 00-7.08-7.14h-2a7.16 7.16 0 00-7.18 7.1V80a7.16 7.16 0 007.14 7.14h2a7.16 7.16 0 007.19-7.14V68.16h-7.14a.28.28 0 01-.3-.3v-1.44a.34.34 0 01.36-.3H520a.34.34 0 01.36.3z" fill="#fff"/>
        </g>
        <g id="Cytosine">
          <text transform="translate(688.09 165.8)" font-size="22" fill="#fff" font-family="MetricHPE-Regular, MetricHPE">
            <tspan letter-spacing="0em">C</tspan><tspan x="11.81" y="0">y</tspan><tspan x="21.82" y="0" letter-spacing="-.01em">t</tspan><tspan x="28.64" y="0">osine</tspan>
          </text>
          <polygon points="759.26 8.5 689.98 8.5 655.34 68.5 689.98 128.5 759.26 128.5 793.9 68.5 759.26 8.5" fill="none" stroke="#01a982" stroke-miterlimit="10" stroke-width="4"/>
          <path d="M735.18 80a9.22 9.22 0 01-9.18 9.22h-2.1a9.17 9.17 0 01-9.12-9.22V54.24a9.13 9.13 0 019.12-9.18h2.1a9.18 9.18 0 019.18 9.18v.66a.39.39 0 01-.36.36h-1.38a.39.39 0 01-.36-.36v-.66A7.11 7.11 0 00726 47.1h-2.1a7.11 7.11 0 00-7.08 7.14V80a7.14 7.14 0 007.08 7.14h2.1a7.14 7.14 0 007.08-7.14v-1.34a.39.39 0 01.36-.36h1.38a.39.39 0 01.36.36z" fill="#fff"/>
        </g>
      </svg>
    </div>
  )
}

export default Atgc