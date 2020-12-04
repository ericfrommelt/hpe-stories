import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TweenMax, TimelineMax } from 'gsap';
import CustomEase from 'gsap/CustomEase.js';
gsap.registerPlugin(CustomEase);

const GenomicTitle = () => {
  const svgWrapper = useRef(null);

  useEffect(() => {
    const [svgElements] = svgWrapper.current.children;
  }, []);

  return (
    <div ref={svgWrapper}>
      <svg 
      aria-labelledby="title"
      id="svg"
      role="presentation"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1038.21 460">
        <title id="title" lang="en">Genomic Basics for CIOs</title>
        <rect width="1000" height="460" fill="#425563" id="Background"/>
        <g id="__G" fill="none" stroke-miterlimit="10">
          <path d="M167.15 158.74a70.15 70.15 0 11-5.12-93.48" stroke="#ff8d6d" stroke-width="17"/>
          <path d="M167.15 158.74a70.15 70.15 0 11-5.12-93.48" stroke="#2ad2c9" stroke-width="17"/>
          <g id="Arrow" stroke="#01a982" stroke-width="10">
            <polyline points="137.15 118 167.15 118 167.15 148"/>
            <line x1="167.15" y1="118" x2="137.15" y2="148"/>
          </g>
        </g>
        <g id="__E">
          <path d="M246.3 125h-25.7a8.57 8.57 0 01-8.57-8.57h0a8.57 8.57 0 018.57-8.57h25.7M248.87 125h25.71a8.57 8.57 0 008.57-8.57h0a8.57 8.57 0 00-8.57-8.57h-25.71" fill="none" stroke="#01a982" stroke-miterlimit="10" stroke-width="7"/>
          <rect x="192.15" y="35" width="57.61" height="20" fill="#01a982"/>
          <rect x="249.76" y="35" width="42.39" height="20" fill="#ff8d6d"/>
          <rect x="192.15" y="173" width="60" height="20" fill="#e6e7e8"/>
          <rect x="252.15" y="173" width="40" height="20" fill="#01a982"/>
          <rect x="192.15" y="55" width="20" height="48.17" fill="#2ad2c9"/>
          <rect x="192.15" y="130.7" width="20" height="17.3" fill="#01a982"/>
          <rect x="192.15" y="148" width="20" height="25" fill="#2ad2c9"/>
        </g>
        <g id="__N">
          <path d="M331.15 46l4.48-2.22a5 5 0 016.7 2.26h0a5 5 0 01-2.26 6.7h0a5 5 0 00-2.25 6.7h0a5 5 0 006.7 2.25h0a5 5 0 016.7 2.26h0a5 5 0 01-2.25 6.7h0a5 5 0 00-2.26 6.7h0a5 5 0 006.7 2.26h0a5 5 0 016.7 2.26h0a5 5 0 01-2.25 6.7h0a5 5 0 00-2.26 6.7h0a5 5 0 006.7 2.26h0a5 5 0 016.7 2.25h0a5 5 0 01-2.25 6.7h0a5 5 0 00-2.26 6.7h0a5 5 0 006.7 2.26h0a5 5 0 016.7 2.26h0a5 5 0 01-2.25 6.7h0a5 5 0 00-2.26 6.7h0a5 5 0 006.7 2.26h0a5 5 0 016.7 2.25h0a5 5 0 01-2.25 6.7h0a5 5 0 00-2.26 6.7h0a5 5 0 006.7 2.26h0a5 5 0 016.71 2.26h0a5 5 0 01-2.26 6.7h0a5 5 0 00-2.26 6.7h0a5 5 0 006.71 2.26h0a5 5 0 016.7 2.25h0a5 5 0 01-2.26 6.7h0a5 5 0 00-2.26 6.7h0a5 5 0 006.71 2.25l4.47-2.22" fill="none" stroke="#ff8d6d" stroke-miterlimit="10" stroke-width="2"/>
          <rect x="312.15" y="145" width="20" height="50" fill="#e6e7e8"/>
          <rect x="312.15" y="85" width="20" height="60" fill="#2ad2c9"/>
          <rect x="312.15" y="35" width="20" height="50" fill="#ff8d6d"/>
          <rect x="410.15" y="145" width="20" height="50" fill="#e6e7e8"/>
          <rect x="410.15" y="85" width="20" height="60" fill="#2ad2c9"/>
          <rect x="410.15" y="35" width="20" height="50" fill="#ff8d6d"/>
        </g>
        <g id="__O" fill="none" stroke-miterlimit="10" stroke-width="17">
          <circle cx="532.15" cy="115" r="70" stroke="#c6c9ca"/>
          <circle cx="532.15" cy="115" r="70" stroke="#ff8d6d"/>
        </g>
        <g id="__M">
          <path d="M731.5 37.79l-4.91-.93a5 5 0 00-5.85 4h0a5 5 0 004 5.84h0a5 5 0 014 5.85h0a5 5 0 01-5.85 4h0a5 5 0 00-5.84 4h0a5 5 0 004 5.84h0a5 5 0 014 5.85h0a5 5 0 01-5.84 4h0a5 5 0 00-5.84 4h0a5 5 0 004 5.84h0a5 5 0 014 5.85h0a5 5 0 01-5.84 4h0a5 5 0 00-5.85 4h0a5 5 0 004 5.85h0a5 5 0 014 5.84h0a5 5 0 01-5.85 4h0a5 5 0 00-5.84 4h0a5 5 0 004 5.85h0a5 5 0 014 5.84h0a5 5 0 01-5.85 4h0a5 5 0 00-5.84 4h0a5 5 0 004 5.85h0a5 5 0 014 5.84h0a5 5 0 01-5.84 4h0a5 5 0 00-5.84 4h0a5 5 0 004 5.85h0a5 5 0 014 5.84h0a5 5 0 01-5.84 4h0a5 5 0 00-5.85 4h0a5 5 0 004 5.85h0a5 5 0 014 5.84h0a5 5 0 01-5.85 4l-5.11-.93h0l-5.1.93a5 5 0 01-5.85-4h0a5 5 0 014-5.84h0a5 5 0 004-5.85h0a5 5 0 00-5.85-4h0a5 5 0 01-5.84-4h0a5 5 0 014-5.84h0a5 5 0 004-5.85h0a5 5 0 00-5.84-4h0a5 5 0 01-5.84-4h0a5 5 0 014-5.84h0a5 5 0 004-5.85h0a5 5 0 00-5.84-4h0a5 5 0 01-5.85-4h0a5 5 0 014-5.84h0a5 5 0 004-5.85h0a5 5 0 00-5.85-4h0a5 5 0 01-5.84-4h0a5 5 0 014-5.84h0a5 5 0 004-5.85h0a5 5 0 00-5.85-4h0a5 5 0 01-5.84-4h0a5 5 0 014-5.85h0a5 5 0 004-5.84h0a5 5 0 00-5.84-4h0a5 5 0 01-5.84-4h0a5 5 0 014-5.85h0a5 5 0 004-5.84h0a5 5 0 00-5.84-4h0a5 5 0 01-5.85-4h0a5 5 0 014-5.85h0a5 5 0 004-5.84h0a5 5 0 00-5.85-4l-4.91.93" fill="none" stroke="#ff8d6d" stroke-miterlimit="10" stroke-width="2"/>
          <rect x="632.15" y="145" width="20" height="50" fill="#e6e7e8"/>
          <rect x="632.15" y="85" width="20" height="60" fill="#2ad2c9"/>
          <rect x="632.15" y="35" width="20" height="50" fill="#ff8d6d"/>
          <rect x="731.15" y="145" width="20" height="50" fill="#e6e7e8"/>
          <rect x="731.15" y="85" width="20" height="60" fill="#2ad2c9"/>
          <rect x="731.15" y="35" width="20" height="50" fill="#ff8d6d"/>
        </g>
        <g id="__I" fill="none" stroke-miterlimit="10">
          <path d="M790.1 160.89c-7.09 10-12.94 21-12.94 34.54M777.16 35.43c0 41.89 37.59 44.28 37.59 80 0 11.32-6.18 21-13.53 30.72" stroke="#ff8d6d" stroke-width="7"/>
          <line x1="783.68" y1="38.43" x2="807.68" y2="38.43" stroke="#2ad2c9" stroke-width="4"/>
          <path d="M789.94 84.43c-7 8.14-12.78 17-12.78 31 0 27.92 37.59 45.65 37.59 80M814.75 35.43c0 16.14-5.58 26.42-12.45 35" stroke="#ff8d6d" stroke-width="7"/>
          <line x1="785.68" y1="49.43" x2="805.68" y2="49.43" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="791.68" y1="60.43" x2="799.68" y2="60.43" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="791.68" y1="94.43" x2="799.68" y2="94.43" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="785.68" y1="104.43" x2="805.68" y2="104.43" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="783.68" y1="115.43" x2="807.68" y2="115.43" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="785.68" y1="126.43" x2="805.68" y2="126.43" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="791.68" y1="136.43" x2="799.68" y2="136.43" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="791.68" y1="170.43" x2="799.68" y2="170.43" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="785.68" y1="181.43" x2="805.68" y2="181.43" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="783.68" y1="192.43" x2="807.68" y2="192.43" stroke="#2ad2c9" stroke-width="4"/>
        </g>
        <g id="__C" fill="none" stroke-miterlimit="10" stroke-width="17">
          <path d="M968.62 158.74a70.15 70.15 0 11-5.12-93.48" stroke="#ff8d6d"/>
          <path d="M968.62 158.74a70.15 70.15 0 11-5.12-93.48" stroke="#2ad2c9"/>
        </g>
        <g id="__B" fill="none" stroke-miterlimit="10">
          <path d="M117.15 325a40 40 0 000-80h-30M117.15 325a40 40 0 010 80h-30" stroke="#2ad2c9" stroke-width="10"/>
          <g id="helix">
            <path d="M52.43 370c-7.08 10-12.93 21-12.93 34.53M39.5 244.53c0 41.89 37.59 44.28 37.59 80 0 11.32-6.18 21-13.53 30.72" stroke="#ff8d6d" stroke-width="7"/>
            <line x1="46.01" y1="247.53" x2="70.01" y2="247.53" stroke="#2ad2c9" stroke-width="4"/>
            <path d="M52.27 293.53c-7 8.14-12.78 17-12.78 31 0 27.92 37.59 45.66 37.59 80M77.08 244.53c0 16.14-5.58 26.42-12.44 35" stroke="#ff8d6d" stroke-width="7"/>
            <line x1="48.01" y1="258.53" x2="68.01" y2="258.53" stroke="#2ad2c9" stroke-width="4"/>
            <line x1="54.01" y1="269.53" x2="62.01" y2="269.53" stroke="#2ad2c9" stroke-width="4"/>
            <line x1="54.01" y1="303.53" x2="62.01" y2="303.53" stroke="#2ad2c9" stroke-width="4"/>
            <line x1="48.01" y1="313.53" x2="68.01" y2="313.53" stroke="#2ad2c9" stroke-width="4"/>
            <line x1="46.01" y1="324.53" x2="70.01" y2="324.53" stroke="#2ad2c9" stroke-width="4"/>
            <line x1="48.01" y1="335.53" x2="68.01" y2="335.53" stroke="#2ad2c9" stroke-width="4"/>
            <line x1="54.01" y1="345.53" x2="62.01" y2="345.53" stroke="#2ad2c9" stroke-width="4"/>
            <line x1="54.01" y1="379.53" x2="62.01" y2="379.53" stroke="#2ad2c9" stroke-width="4"/>
            <line x1="48.01" y1="390.53" x2="68.01" y2="390.53" stroke="#2ad2c9" stroke-width="4"/>
            <line x1="46.01" y1="401.53" x2="70.01" y2="401.53" stroke="#2ad2c9" stroke-width="4"/>
          </g>
        </g>
        <g id="__A" fill="none" stroke-miterlimit="10">
          <polyline points="177.15 405 247.15 255 317.15 405" stroke="#fff" stroke-width="10"/>
          <line x1="299.5" y1="367.17" x2="317.15" y2="405" stroke="#2ad2c9" stroke-width="10"/>
          <polyline points="222.15 308.57 247.15 255 266.13 295.66" stroke="#2ad2c9" stroke-width="10"/>
          <path d="M217.15 345v-5a5 5 0 015-5h0a5 5 0 015 5h0a5 5 0 005 5h0a5 5 0 005-5h0a5 5 0 015-5h0a5 5 0 015 5h0a5 5 0 005 5h0a5 5 0 005-5h0a5 5 0 015-5h0a5 5 0 015 5h0a5 5 0 005 5h0a5 5 0 005-5v-5" stroke="#ff8d6d" stroke-width="2"/>
        </g>
        <g id="__S">
          <rect x="337.15" y="245" width="90" height="20" fill="#ff8d6d"/>
          <rect x="337.15" y="265" width="20" height="60" fill="#2ad2c9"/>
          <rect x="357.15" y="305" width="70" height="20" fill="#fff"/>
          <rect x="407.15" y="325" width="20" height="80" fill="#2ad2c9"/>
          <rect x="337.15" y="385" width="70" height="20" fill="#01a982"/>
        </g>
        <g id="__I-2" data-name="__I" fill="none" stroke-miterlimit="10">
          <path d="M467.5 373.45c-7.08 10-12.93 21-12.93 34.55M458.61 248c0 41.89 37.58 44.28 37.58 80 0 11.32-6.18 21-13.52 30.72" stroke="#fff" stroke-width="7"/>
          <line x1="465.12" y1="251" x2="489.12" y2="251" stroke="#2ad2c9" stroke-width="4"/>
          <path d="M471.38 297c-7 8.14-12.77 17-12.77 31 0 27.92 37.58 45.65 37.58 80M496.19 248c0 16.14-5.58 26.42-12.44 35" stroke="#fff" stroke-width="7"/>
          <line x1="467.12" y1="262" x2="487.12" y2="262" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="473.12" y1="273" x2="481.12" y2="273" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="473.12" y1="307" x2="481.12" y2="307" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="467.12" y1="317" x2="487.12" y2="317" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="465.12" y1="328" x2="489.12" y2="328" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="467.12" y1="339" x2="487.12" y2="339" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="473.12" y1="349" x2="481.12" y2="349" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="473.12" y1="383" x2="481.12" y2="383" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="467.12" y1="394" x2="487.12" y2="394" stroke="#2ad2c9" stroke-width="4"/>
          <line x1="465.12" y1="405" x2="489.12" y2="405" stroke="#2ad2c9" stroke-width="4"/>
        </g>
        <g id="__C-2" data-name="__C" fill="none" stroke-miterlimit="10" stroke-width="17">
          <path d="M650.5 370.06a70.14 70.14 0 11-5.12-93.49" stroke="#ff8d6d"/>
          <path d="M650.5 370.06a70.14 70.14 0 11-5.12-93.49" stroke="#2ad2c9"/>
        </g>
        <g id="__S-2" data-name="__S">
          <rect x="683.15" y="245" width="90" height="20" fill="#01a982"/>
          <rect x="683.15" y="265" width="20" height="60" fill="#2ad2c9"/>
          <rect x="703.15" y="305" width="70" height="20" fill="#fff"/>
          <rect x="753.15" y="325" width="20" height="80" fill="#fff"/>
          <rect x="683.15" y="385" width="70" height="20" fill="#2ad2c9"/>
        </g>
        <text transform="translate(798.21 406.01)" font-size="50" fill="#fff" font-family="MetricHPE-Regular, MetricHPE" id="forCIOs">
          <tspan letter-spacing="-.01em">f</tspan><tspan x="14.1" y="0">or CI</tspan><tspan x="103.35" y="0" letter-spacing="0em">O</tspan><tspan x="134.95" y="0">s</tspan>
        </text>
      </svg>
    </div>
  )
}

export default GenomicTitle