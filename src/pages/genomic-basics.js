import React, { useRef, useEffect} from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import { gsap } from 'gsap'
import PrimaryNav from '../components/primary-nav'
import style from './genomic-basics.module.css'
import GenomicTitle from '../components/genomic-title'
import Atgc from '../components/atgc'
import StoryFooter from '../components/story-footer'
import { TimelineLite } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import CustomEase from 'gsap/CustomEase.js';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

const GenomicBasics = (props) => {
  const svgWrapper = useRef(null);
  useEffect(() => {
    const svgElements = svgWrapper.current.children;
    const master = gsap.timeline();

    function timelineLineShapes() {
      const tl = new TimelineLite({
        scrollTrigger: {
        trigger: "#lineGreen",
        start: "bottom 90%",
        end: "bottom 10%",
        markers: false,
        scrub: 1,
        }
      });
        tl.fromTo("#lineCircleGreen", { x: 0 }, { x: 200 });
        tl.fromTo("#hexOne", { x: 0 }, { x: 50 }, "<");
        tl.fromTo("#hexTwo", { x: -100 }, { x: 50 }, "<");
        tl.fromTo("#hexThree", { x: -100 }, { x: 0 }, "<");
        tl.fromTo("#hexFour", { x: -120 }, { x: -20 }, "<");
        tl.fromTo("#hexFive", { x: -120 }, { x: -20 }, "<");
        tl.fromTo("#hexSix", { x: -120 }, { x: 0 }, "<");
        tl.fromTo("#hexSeven", { x: -120 }, { x: 10 }, "<");
      return tl;
    }

    function timelineBasePairs() {
      const tl = new TimelineLite({
        scrollTrigger: {
          trigger: "#billion",
          start: "bottom 90%",
          end: "bottom 25%",
          markers: false,
          scrub: 1,
        }
      });
        tl.fromTo("#l1-l", { drawSVG: "100% 100%"}, { drawSVG: "0% 100%" });
        tl.fromTo("#c1-l", { drawSVG: "0%"}, { drawSVG: "100%" });
        tl.fromTo("#l1-r", { drawSVG: "100% 100%"}, { drawSVG: "0% 100%" }, "<");
        tl.fromTo("#c1-r", { drawSVG: "0%"}, { drawSVG: "100%" });

        tl.fromTo("#l2-l", { drawSVG: "100% 100%"}, { drawSVG: "0% 100%" });
        tl.fromTo("#c2-l", { drawSVG: "0%"}, { drawSVG: "100%" });
        tl.fromTo("#l2-r", { drawSVG: "100% 100%"}, { drawSVG: "0% 100%" }, "<");
        tl.fromTo("#c2-r", { drawSVG: "0%"}, { drawSVG: "100%" });

        tl.fromTo("#l3-l", { drawSVG: "100% 100%"}, { drawSVG: "0% 100%" });
        tl.fromTo("#c3-l", { drawSVG: "0%"}, { drawSVG: "100%" });
        tl.fromTo("#l3-r", { drawSVG: "100% 100%"}, { drawSVG: "0% 100%" }, "<");
        tl.fromTo("#c3-r", { drawSVG: "0%"}, { drawSVG: "100%" });

        tl.fromTo("#l4-l", { drawSVG: "100% 100%"}, { drawSVG: "0% 100%" });
        tl.fromTo("#c4-l", { drawSVG: "0%"}, { drawSVG: "100%" });
        tl.fromTo("#l4-r", { drawSVG: "100% 100%"}, { drawSVG: "0% 100%" }, "<");
        tl.fromTo("#c4-r", { drawSVG: "0%"}, { drawSVG: "100%" });

        tl.fromTo("#l5-l", { drawSVG: "100% 100%"}, { drawSVG: "0% 100%" });
        tl.fromTo("#c5-l", { drawSVG: "0%"}, { drawSVG: "100%" });
        tl.fromTo("#l5-r", { drawSVG: "100% 100%"}, { drawSVG: "0% 100%" }, "<");
        tl.fromTo("#c5-r", { drawSVG: "0%"}, { drawSVG: "100%" });

        tl.fromTo("#l6-l", { drawSVG: "100% 100%"}, { drawSVG: "0% 100%" });
        tl.fromTo("#c6-l", { drawSVG: "0%"}, { drawSVG: "100%" });
        tl.fromTo("#l6-r", { drawSVG: "100% 100%"}, { drawSVG: "0% 100%" }, "<");
        tl.fromTo("#c6-r", { drawSVG: "0%"}, { drawSVG: "100%" });

        tl.fromTo("#l7-l", { drawSVG: "10% 10%"}, { drawSVG: "100%" });
        tl.fromTo("#c7-l", { drawSVG: "0%"}, { drawSVG: "100%" });
        tl.fromTo("#l7-r", { drawSVG: "100% 100%"}, { drawSVG: "0% 100%" }, "<");
        tl.fromTo("#c7-r", { drawSVG: "0%"}, { drawSVG: "100%" });
      return tl;
    }

    master.add(timelineLineShapes());
    master.add(timelineBasePairs());
  }, []);

  return (
    <Layout>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Genomic Basics for CIOs</title>
      </Helmet>
      <div className={style.genomicBody}>
        <PrimaryNav></PrimaryNav>
      </div>
      <div className={`${style.gridWrapper} ${style.genomicBody}`}>
        <div className={style.title}>
          <GenomicTitle />
        </div>
        <p className={style.introcopy}>As human genetic sequencing becomes more common, organizations are strategizing how their IT infrastructures can help them seize new opportunities. Here are a few things to know about the human genome:</p>
        <p className={style.sectionOneCopy}>Genetic code is expressed in long sequences of four different DNA molecules called “bases.”</p>
        <figure className={style.atgcFigure}>
          <Atgc />
        </figure>
      </div>
  
      <div className={`${style.gridWrapper} ${style.genomicBody}`} ref={svgWrapper}>
        <div className={style.circleLine}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 871 22">
            <g id="lineCircleGreen" data-name="Layer 2" strokeMiterlimit="10" strokeWidth="2" fill="none">
              <line id="lineGreen" x1="21" y1="11" x2="871" y2="11" stroke="#00b388"/>
              <circle id="circleGreen" cx="11" cy="11" r="10" stroke="#01a982"/>
            </g>
          </svg>
        </div>
        <div className={style.hexagonsOne}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333.58 92">
            <g id="hexagonsOne" data-name="hexagonsOne" fill="none" strokeMiterlimit="10">
              <polygon id="hexOne" points="100.42 11 77.33 11 65.78 31 77.33 51 100.42 51 111.97 31 100.42 11" stroke="#01a982" strokeWidth="2"/>
              <polygon id="hexTwo" points="50.78 3.68 40.78 3.68 35.78 12.34 40.78 21 50.78 21 55.78 12.34 50.78 3.68" stroke="#ff8d6d"/>
              <polygon id="hexThree" points="323.76 1 306.44 1 297.78 16 306.44 31 323.76 31 332.42 16 323.76 1" stroke="#e6e7e8" strokeWidth="2"/>
              <polygon id="hexFour" points="42.12 41 14.8 41 1.14 66 14.8 91 42.12 91 55.78 66 42.12 41" stroke="#e6e7e8" strokeWidth="2"/>
            </g>
          </svg>
        </div>
        <p className={style.genomeCopy}>A full human genome is made up of roughly 3.2 billion base pairs and 25,000 genes.</p>
        <figure className={style.genomeFigure}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402.03 452.23">
            <g id="billion" data-name="3.2billion">
              <g id="_3.2Billion-2" data-name="3.2Billion" fill="#fff">
                <path d="M242.28 103.49a16.9 16.9 0 01-16.83 16.83h-5.06a16.9 16.9 0 01-16.83-16.83v-2.64a.52.52 0 01.55-.55h2.64a.52.52 0 01.55.55v2.64a13.19 13.19 0 0013.09 13.09h5.06a13.19 13.19 0 0013.09-13.09V87.21a13.19 13.19 0 00-13.09-13.09H218a.71.71 0 01-.66-.66v-4.07a.57.57 0 01.22-.44l20.13-24.53H208a.52.52 0 01-.55-.55v-2.64a.52.52 0 01.55-.55h32.3a.62.62 0 01.66.55v4.18a.84.84 0 01-.22.55l-19.58 24.42h4.29a17 17 0 0116.83 16.83zM264.61 118.34a.71.71 0 01-.66.66h-9.9a.71.71 0 01-.66-.66v-9.9a.71.71 0 01.66-.66H264a.71.71 0 01.66.66zM314.44 118.45a.52.52 0 01-.55.55h-37.51a.71.71 0 01-.66-.66v-3.63c0-15.51 4.07-22.66 18.26-33 13.53-9.79 15.4-17.71 15.4-21.89v-3.63a13 13 0 00-13-13.09h-2.64a13 13 0 00-13 13.09v2.42c0 .44-.11.66-.44.66h-2.6a.63.63 0 01-.66-.66v-2.42a16.74 16.74 0 0116.72-16.83h2.64a16.74 16.74 0 0116.72 16.83v3.63c0 5.94-3 15-16.94 25-12.65 9.13-16.28 14.74-16.61 30.47h34.32a.52.52 0 01.55.55z" transform="translate(-3.97 -4)"/>
                <g>
                  <path d="M216.67 146.77a4.59 4.59 0 01-4.59 4.59h-.66a4.65 4.65 0 01-3.57-1.71v1.2a.14.14 0 01-.15.15h-.7a.14.14 0 01-.15-.15v-21.06a.14.14 0 01.15-.15h.72a.14.14 0 01.15.15v8a4.56 4.56 0 013.57-1.71h.66a4.59 4.59 0 014.59 4.59zm-1-6.12a3.56 3.56 0 00-3.57-3.57h-.66a3.56 3.56 0 00-3.57 3.57v6.12a3.58 3.58 0 003.57 3.57h.66a3.58 3.58 0 003.57-3.57zM233.59 150.85a.14.14 0 01-.15.15h-11.55a.14.14 0 01-.15-.15v-.72a.14.14 0 01.15-.15h5.94v-12.57h-4.59a.14.14 0 01-.15-.15v-.72a.14.14 0 01.15-.15h5.46a.14.14 0 01.15.15V150h4.59a.14.14 0 01.15.15zm-4.38-18.66a.14.14 0 01-.15.15H227a.17.17 0 01-.18-.15v-2.1a.14.14 0 01.15-.15h2.1a.14.14 0 01.15.15zM249.43 150.85a.14.14 0 01-.15.15h-11.91a.14.14 0 01-.15-.15v-.72a.14.14 0 01.15-.15h5.94v-19.32h-4.59a.14.14 0 01-.15-.15v-.72a.14.14 0 01.15-.15h5.46a.14.14 0 01.15.12V150h4.95a.14.14 0 01.15.15zM265.27 150.85a.14.14 0 01-.15.15h-11.91a.14.14 0 01-.15-.15v-.72a.14.14 0 01.15-.15h5.94v-19.32h-4.59a.14.14 0 01-.15-.15v-.72a.14.14 0 01.15-.15H260a.14.14 0 01.15.12V150h4.95a.14.14 0 01.15.15zM281.11 150.85a.14.14 0 01-.15.15h-11.55a.14.14 0 01-.15-.15v-.72a.14.14 0 01.15-.15h5.94v-12.57h-4.59a.14.14 0 01-.15-.15v-.72a.14.14 0 01.15-.15h5.46a.14.14 0 01.15.15V150H281a.14.14 0 01.15.15zm-4.38-18.66a.14.14 0 01-.15.15h-2.07a.17.17 0 01-.18-.15v-2.1a.14.14 0 01.15-.15h2.1a.14.14 0 01.15.15zM285.76 140.65a4.58 4.58 0 014.56-4.59h.68a4.58 4.58 0 014.56 4.59v6.12a4.58 4.58 0 01-4.56 4.59h-.72a4.58 4.58 0 01-4.56-4.59zm1 6.12a3.58 3.58 0 003.57 3.57h.67a3.58 3.58 0 003.57-3.57v-6.12a3.58 3.58 0 00-3.57-3.57h-.72a3.58 3.58 0 00-3.57 3.57zM311.59 150.85a.14.14 0 01-.15.15h-.72a.14.14 0 01-.15-.15v-10.2a3.57 3.57 0 00-3.6-3.57h-.66a3.55 3.55 0 00-3.54 3.57v10.2a.14.14 0 01-.15.15h-.72a.16.16 0 01-.15-.15v-14.31a.14.14 0 01.15-.15h.72a.14.14 0 01.15.15v1.23a4.5 4.5 0 013.54-1.71h.69a4.62 4.62 0 014.62 4.59z" transform="translate(-3.97 -4)"/>
                </g>
              </g>
            </g>
            <g fill="none" stroke="#ff8d6d" strokeMiterlimit="10" strokeWidth="2" id="r1-l">
              <circle id="c1-l" id="c1-l" cx="121.03" cy="11" r="10"/>
              <line id="l1-l" x1="131.03" y1="11" x2="251.03" y2="11"/>
            </g>
            <g fill="none" stroke="#2ad2c9" strokeMiterlimit="10" strokeWidth="2" id="r1-r">
              <circle id="c1-r" id="c1-r" cx="391.03" cy="11" r="10"/>
              <line id="l1-r" x1="381.03" y1="11" x2="251.03" y2="11"/>
            </g>
            <g fill="none" stroke="#01a982" strokeMiterlimit="10" strokeWidth="2" id="r2-l">
              <circle id="c2-l" cx="131.03" cy="41" r="10"/>
              <line id="l2-l" x1="141.03" y1="41" x2="171.03" y2="41"/>
            </g>
            <g fill="none" stroke="#2ad2c9" strokeMiterlimit="10" strokeWidth="2" id="r2-r">
              <circle id="c2-r" cx="381.03" cy="41" r="10"/>
              <line id="l2-r" x1="371.03" y1="41" x2="341.03" y2="41"/>
            </g>
            <g fill="none" stroke="#ff8d6d" strokeMiterlimit="10" strokeWidth="2" id="r3-l">
              <circle id="c3-l" cx="141.03" cy="71" r="10"/>
              <line id="l3-l" x1="151.03" y1="71" x2="181.03" y2="71"/>
            </g>
            <g fill="none" stroke="#c6c9ca" strokeMiterlimit="10" strokeWidth="2" id="r3-r">
              <circle id="c3-r" cx="371.03" cy="71" r="10"/>
              <line id="l3-r" x1="361.03" y1="71" x2="331.03" y2="71"/>
            </g>
            <g fill="none" stroke="#2ad2c9" strokeMiterlimit="10" strokeWidth="2" id="r4-l">
              <circle id="c4-l" cx="151.03" cy="101" r="10"/>
              <line id="l4-l" x1="161.03" y1="101" x2="191.03" y2="101"/>
            </g>
            <g fill="none" stroke="#01a982" strokeMiterlimit="10" strokeWidth="2" id="r4-r">
              <circle id="c4-r" cx="361.03" cy="101" r="10"/>
              <line id="l4-r" x1="351.03" y1="101" x2="321.03" y2="101"/>
            </g>
            <g fill="none" stroke="#ff8d6d" strokeMiterlimit="10" strokeWidth="2" id="r5-l">
              <circle id="c5-l" cx="141.03" cy="131" r="10"/>
              <line id="l5-l" x1="151.03" y1="131" x2="181.03" y2="131"/>
            </g>
            <g fill="none" stroke="#2ad2c9" strokeMiterlimit="10" strokeWidth="2" id="r5-r">
              <circle id="c5-r" cx="371.03" cy="131" r="10"/>
              <line id="l5-r" x1="361.03" y1="131" x2="331.03" y2="131"/>
            </g>
            <g fill="none" stroke="#2ad2c9" strokeMiterlimit="10" strokeWidth="2" id="r6-l">
              <circle id="c6-l" cx="131.03" cy="161" r="10"/>
              <line id="l6-l" x1="141.03" y1="161" x2="251.03" y2="161"/>
            </g>
            <g fill="none" stroke="#ff8d6d" strokeMiterlimit="10" strokeWidth="2" id="r6-r">
              <circle id="c6-r" cx="381.03" cy="161" r="10"/>
              <line id="l6-r" x1="371.03" y1="161" x2="251.03" y2="161"/>
            </g>
            <g fill="none" stroke="#01a982" strokeMiterlimit="10" strokeWidth="2" id="r7-l">
              <circle id="c7-l" cx="11" cy="441.23" r="10"/>
              <polyline id="l7-l" points="251 191.23 131 191.23 11 191.23 11 431.23"/>
            </g>
            <g fill="none" stroke="#2ad2c9" strokeMiterlimit="10" strokeWidth="2" id="r7-r">
              <circle id="c7-r" cx="391" cy="191.23" r="10"/>
              <line id="l7-r" x1="381" y1="191.23" x2="251" y2="191.23"/>
            </g>
          </svg>
        </figure>
  
        <div className={style.genomeImage}>
          <Img fluid={props.data.genomeImage.childImageSharp.fluid}></Img>
        </div>
        <div className={style.storageInfo}>
          <div className={style.storageFigure}>
            <figure>30<span className={style.storageFigureSmall}>GB</span>-150<span className={style.storageFigureSmall}>GB</span></figure>
          </div>
          <p className={style.storageCopy}>Storage size for a complete human genome is between 30GB and 150GB – for the majority of patients, there is no medical need for sequencing the entire genome.</p>
        </div>
        <div className={style.hexagonsTwo}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292.03 247.14">
            <g id="Content" fill="none" strokeMiterlimit="10">
              <polygon id="hexFive" points="166.23 55.86 56.95 55.86 2.31 150.5 56.95 245.14 166.23 245.14 220.87 150.5 166.23 55.86" stroke="#2ad2c9" strokeWidth="4"/>
              <polygon id="hexSix" points="279.33 40.5 256.23 40.5 244.69 60.5 256.23 80.5 279.33 80.5 290.87 60.5 279.33 40.5" stroke="#ff8d6d" strokeWidth="2"/>
              <polygon id="hexSeven" points="176.83 0.5 168.73 0.5 164.69 7.51 168.73 14.52 176.83 14.52 180.87 7.51 176.83 0.5" stroke="#00b388"/>
            </g>
          </svg>
        </div>
      </div>
      
      <div className={`${style.gridWrapper} ${style.genomicBody}`}>
        <figure className={style.markerFigure}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 220">
            <rect width="310" height="220" fill="#425563" id="Background"/>
            <g id="Markers" fill="none" strokeMiterlimit="10">
              <g stroke="#2ad2c9" strokeWidth="2">
                <polyline points="304.37 210.17 304.37 215.17 299.37 215.17"/>
                <line x1="291.37" y1="215.17" x2="263.37" y2="215.17" stroke-dasharray="8 8"/>
                <polyline points="259.37 215.17 254.37 215.17 254.37 210.17"/>
                <line x1="254.37" y1="200.65" x2="254.37" y2="14.93" stroke-dasharray="9.52 9.52"/>
                <polyline points="254.37 10.17 254.37 5.17 259.37 5.17"/>
                <line x1="267.37" y1="5.17" x2="295.37" y2="5.17" stroke-dasharray="8 8"/>
                <polyline points="299.37 5.17 304.37 5.17 304.37 10.17"/>
                <line x1="304.37" y1="19.69" x2="304.37" y2="205.41" stroke-dasharray="9.52 9.52"/>
              </g>
              <line x1="267.21" y1="22.19" x2="291.53" y2="22.19" stroke="#fff" strokeWidth="4"/>
              <line x1="267.21" y1="89.08" x2="291.53" y2="89.08" stroke="#fff" strokeWidth="4"/>
              <line x1="267.21" y1="115.83" x2="291.53" y2="115.83" stroke="#fff" strokeWidth="4"/>
              <line x1="264.78" y1="196.1" x2="293.96" y2="196.1" stroke="#fff" strokeWidth="4"/>
            </g>
            <g id="arrow" fill="none" stroke="#2ad2c9" strokeMiterlimit="10" strokeWidth="2">
              <line x1="190.77" y1="105.17" x2="230.77" y2="105.17"/>
              <polyline points="220.77 95.17 230.77 105.17 220.77 115.17"/>
            </g>
            <g id="Connectors" fill="none" stroke="#c6c9ca" strokeMiterlimit="10" strokeWidth="2">
              <line x1="111.77" y1="22.31" x2="65.44" y2="22.31"/>
              <line x1="111.77" y1="89.32" x2="65.44" y2="89.32"/>
              <line x1="111.77" y1="115.13" x2="65.44" y2="115.13"/>
              <line x1="111.77" y1="195.05" x2="65.44" y2="195.05"/>
            </g>
            <g id="helixOne" fill="none" strokeMiterlimit="10">
              <path d="M23.86 157.74c-8.61 12.19-15.73 25.53-15.73 42M8.13 5.17c0 50.94 45.71 53.85 45.71 97.29 0 13.76-7.51 25.49-16.45 37.36" stroke="#ff8d6d" strokeWidth="7"/>
              <line x1="16.06" y1="8.82" x2="45.24" y2="8.82" stroke="#2ad2c9" strokeWidth="4"/>
              <path d="M23.67 64.76c-8.53 9.9-15.54 20.69-15.54 37.7 0 34 45.71 55.52 45.71 97.29M53.84 5.17c0 19.63-6.79 32.13-15.13 42.56" stroke="#ff8d6d" strokeWidth="7"/>
              <line x1="18.49" y1="22.19" x2="42.81" y2="22.19" stroke="#2ad2c9" strokeWidth="4"/>
              <line x1="25.78" y1="35.57" x2="35.51" y2="35.57" stroke="#2ad2c9" strokeWidth="4"/>
              <line x1="25.78" y1="76.92" x2="35.51" y2="76.92" stroke="#2ad2c9" strokeWidth="4"/>
              <line x1="18.49" y1="89.08" x2="42.81" y2="89.08" stroke="#2ad2c9" strokeWidth="4"/>
              <line x1="16.06" y1="102.46" x2="45.24" y2="102.46" stroke="#2ad2c9" strokeWidth="4"/>
              <line x1="18.49" y1="115.83" x2="42.81" y2="115.83" stroke="#2ad2c9" strokeWidth="4"/>
              <line x1="25.78" y1="128" x2="35.51" y2="128" stroke="#2ad2c9" strokeWidth="4"/>
              <line x1="25.78" y1="169.34" x2="35.51" y2="169.34" stroke="#2ad2c9" strokeWidth="4"/>
              <line x1="18.49" y1="182.72" x2="42.81" y2="182.72" stroke="#2ad2c9" strokeWidth="4"/>
              <line x1="16.06" y1="196.1" x2="45.24" y2="196.1" stroke="#2ad2c9" strokeWidth="4"/>
            </g>
            <g id="HelixTwo" fill="none" strokeMiterlimit="10">
              <path d="M136.79 157.74c-8.61 12.19-15.73 25.53-15.73 42M121.06 5.17c0 50.94 45.71 53.85 45.71 97.29 0 13.76-7.51 25.49-16.45 37.36" stroke="#ff8d6d" strokeWidth="7"/>
              <line x1="128.98" y1="8.82" x2="158.17" y2="8.82" stroke="#2ad2c9" strokeWidth="4"/>
              <path d="M136.6 64.76c-8.53 9.9-15.54 20.69-15.54 37.7 0 34 45.71 55.52 45.71 97.29M166.77 5.17c0 19.63-6.79 32.13-15.13 42.56" stroke="#ff8d6d" strokeWidth="7"/>
              <line x1="131.42" y1="22.19" x2="155.74" y2="22.19" stroke="#fff" strokeWidth="4"/>
              <line x1="138.71" y1="35.57" x2="148.44" y2="35.57" stroke="#2ad2c9" strokeWidth="4"/>
              <line x1="138.71" y1="76.92" x2="148.44" y2="76.92" stroke="#2ad2c9" strokeWidth="4"/>
              <line x1="131.42" y1="89.08" x2="155.74" y2="89.08" stroke="#fff" strokeWidth="4"/>
              <line x1="128.98" y1="102.46" x2="158.17" y2="102.46" stroke="#2ad2c9" strokeWidth="4"/>
              <line x1="131.42" y1="115.83" x2="155.74" y2="115.83" stroke="#fff" strokeWidth="4"/>
              <line x1="138.71" y1="128" x2="148.44" y2="128" stroke="#2ad2c9" strokeWidth="4"/>
              <line x1="138.71" y1="169.34" x2="148.44" y2="169.34" stroke="#2ad2c9" strokeWidth="4"/>
              <line x1="131.42" y1="182.72" x2="155.74" y2="182.72" stroke="#2ad2c9" strokeWidth="4"/>
              <line x1="128.98" y1="196.1" x2="158.17" y2="196.1" stroke="#fff" strokeWidth="4"/>
            </g>
          </svg>
        </figure>
        <div className={style.markerCopy}>
          <p>"Marker" is the term for any changes in DNA relative to a "reference" or normal copy. This includes changes to:</p>
          <ul className={style.markerList}>
            <li>Single base pairs</li>
            <li>Insertion or deletion of a sequence of base pairs</li>
            <li>The number of copies of a given gene</li>
          </ul>
          <p>Because markers are a small subset of whole genome sequencing, storage needs are much smaller.</p>
        </div>
      </div>
      <StoryFooter
        ctaCopy="Learn more about readying IT to take advantage genetic data. Download the full report from Gartner:"
        linkCopy="Prepare your healthcare organization for the first wave of genomics"
      />
    </Layout>
  )
}

export default GenomicBasics

export const pageQuery = graphql`
  query {
    genomeImage: file(relativePath: { eq: "genome-face.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`