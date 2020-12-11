import React, { useRef, useEffect } from 'react';
import style from './genomic-title.module.css';
import { gsap } from 'gsap';
import { TweenMax, TimelineMax, TimelineLite } from 'gsap';
import CustomEase from 'gsap/CustomEase.js';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin.js';
import { Timeline } from 'gsap/gsap-core';
gsap.registerPlugin(CustomEase, DrawSVGPlugin);

const GenomicTitle = () => {
  const svgWrapper = useRef(null);
  const typeBg = '#425563';
  // #425563

  useEffect(() => {
    const [svgElements] = svgWrapper.current.children;
    const master = gsap.timeline();
    const sequence = gsap.timeline();
    CustomEase.create("typeEase", ".9,.03,.04,.99");

    // Set initial state of type elements :::::::::::::::::::::::::::::::::::::::
    gsap.set("#__G", {autoAlpha: 1});
    gsap.set("#__E", {autoAlpha: 1});
    gsap.set("#__N", {autoAlpha: 1});
    gsap.set("#__O", {autoAlpha: 1});
    gsap.set("#__M", {autoAlpha: 1});
    gsap.set("#__I", {autoAlpha: 1});
    gsap.set("#__C", {autoAlpha: 1});
    gsap.set("#__B", {autoAlpha: 1});
    gsap.set("#__A", {autoAlpha: 1});
    gsap.set("#__S", {autoAlpha: 1});
    gsap.set("#__I2", {autoAlpha: 1});
    gsap.set("#__C2", {autoAlpha: 1});
    gsap.set("#__S2", {autoAlpha: 1});
    gsap.set("#forCios", {autoAlpha: 1});

    // G
    function timelineG() {
      const tl = new TimelineMax();
      tl.from("#__G", {x:"-40", duration: 1, ease: "typeEase"});
      tl.fromTo("#__G_bottom", {drawSVG:"0"}, {duration: 1.2, drawSVG:"50%", ease:"typeEase"}, "-=0.8");
      tl.fromTo("#__G_top", {drawSVG:"50%"}, {duration: 1.4, drawSVG:"100%", ease: "typeEase"}, "-=0.8");
      tl.from("#Arrow", {x: -30, duration: 1, ease: "typeEase"}, "-=0.8");
      return tl;
    }

    // E
    function timelineE() {
      const tl = new TimelineMax();
      tl.from("#__E", {x:"-40", duration: 1, ease: "typeEase"});
      tl.fromTo("#__E_1",{width:"0%"}, {duration: 1, width: 57.61, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__E_2",{width:"0%"}, {duration: 1, width: 42.39, ease: "typeEase"},"-=0.8");
      tl.fromTo("#__E_3",{width:"0%"}, {duration: 1, width: 60, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__E_4",{width:"0%"}, {duration: 1, width: 40, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__E_5",{height:"0%"}, {duration: 1, height: 48.17, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__E_6",{height:"0%"}, {duration: 1, height: 17.3, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__E_7",{height:"0%"}, {duration: 1, height: 25, ease: "typeEase"}, "-=0.8");
      tl.from("#__E_0", {x: -30, duration: 1, ease: "typeEase"}, "-=2.1");
      tl.fromTo("#__E_0", {drawSVG:"0"}, {duration: 1, drawSVG:"100%", ease:"typeEase"}, "-=2");
      return tl;
    }

    // N
    function timelineN() {
      const tl = new TimelineMax();
      tl.from("#__N", {x:"-40", duration: 1, ease: "typeEase"});
      tl.fromTo("#__N_1",{height:"0%"}, {duration: 1, height: 50, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__N_2",{height:"0%"}, {duration: 1, height: 60, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__N_3",{height:"0%"}, {duration: 1, height: 50, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__N_4",{height:"0%"}, {duration: 1, height: 50, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__N_5",{height:"0%"}, {duration: 1, height: 60, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__N_6",{height:"0%"}, {duration: 1, height: 50, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__N_0", {drawSVG:"0"}, {duration: 1, drawSVG:"100%", ease:"typeEase"}, "-=1.8");
      return tl;
    }

    // O
    function timelineO() {
      const tl = new TimelineMax();
      tl.from("#__O", {x:"-40", duration: 1, ease: "typeEase"});
      tl.fromTo("#__O_1", {drawSVG:"100% 100%"}, {duration: 1.2, drawSVG:"50% 100%", ease:"typeEase"}, "-=0.8");
      tl.fromTo("#__O_2", {drawSVG:"0%"}, {duration: 1.2, drawSVG:"0% 50%", ease:"typeEase"}, "-=0.8");
      return tl;
    }

    // M
    function timelineM() {
      const tl = new TimelineMax();
      tl.from("#__M", {x:"-40", duration: 1, ease: "typeEase"});
      tl.fromTo("#__M_1",{height:"0%"}, {duration: 1, height: 50, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__M_2",{height:"0%"}, {duration: 1, height: 60, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__M_3",{height:"0%"}, {duration: 1, height: 50, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__M_4",{height:"0%"}, {duration: 1, height: 50, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__M_5",{height:"0%"}, {duration: 1, height: 60, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__M_6",{height:"0%"}, {duration: 1, height: 50, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__M_0", {drawSVG:"0"}, {duration: 1, drawSVG:"100%", ease:"typeEase"}, "-=1.8");
      return tl;
    }

    // I
    function timelineI() {
      const tl = new TimelineMax();
      tl.from("#__I", {x:"-40", duration: 1, ease: "typeEase"});
      tl.fromTo("#__I_0", {drawSVG: "0%"}, {duration:1, drawSVG:"100%", ease:"typeEase"}, "-=0.8");
      tl.fromTo("#__I_1", {drawSVG: "0%"}, {duration:1, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I_7", {drawSVG: "50% 50%"}, {duration:1, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I_6", {drawSVG: "50% 50%"}, {duration:1, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I_5", {drawSVG: "50% 50%"}, {duration:0.9, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I_8", {drawSVG: "50% 50%"}, {duration:0.9, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I_4", {drawSVG: "50% 50%"}, {duration:0.8, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I_9", {drawSVG: "50% 50%"}, {duration:0.8, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I_3", {drawSVG: "50% 50%"}, {duration:0.7, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I_10", {drawSVG: "50% 50%"}, {duration:0.7, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I_2", {drawSVG: "50% 50%"}, {duration:0.6, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I_11", {drawSVG: "50% 50%"}, {duration:0.6, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I_12", {drawSVG: "50% 50%"}, {duration:0.6, drawSVG:"100%", ease:"typeEase"}, "-=1");
      return tl;
    }

    // C
    function timelineC() {
      const tl = new TimelineMax();
      tl.from("#__C", {x:"-40", duration: 1, ease: "typeEase"});
      tl.fromTo("#__C_0", {drawSVG:"50% 50%"}, {duration: 1.2, drawSVG:"100%", ease:"typeEase"}, "-=0.8");
      tl.fromTo("#__C_1", {drawSVG:"50% 50%"}, {duration: 1.4, drawSVG:"50%", ease: "typeEase"}, "-=1");
      return tl;
    }

    // B
    function timelineB() {
      const tl = new TimelineMax();
      tl.from("#__B", {x:"-40", duration: 1, ease: "typeEase"});
      tl.fromTo("#__B_1", {drawSVG: "0%"}, {duration:1, drawSVG:"100%", ease:"typeEase"}, "-=0.8");
      tl.fromTo("#__B_7", {drawSVG: "50% 50%"}, {duration:1, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__B_6", {drawSVG: "50% 50%"}, {duration:1, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__B_5", {drawSVG: "50% 50%"}, {duration:0.9, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__B_8", {drawSVG: "50% 50%"}, {duration:0.9, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__B_4", {drawSVG: "50% 50%"}, {duration:0.8, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__B_9", {drawSVG: "50% 50%"}, {duration:0.8, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__B_3", {drawSVG: "50% 50%"}, {duration:0.7, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__B_10", {drawSVG: "50% 50%"}, {duration:0.7, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__B_2", {drawSVG: "50% 50%"}, {duration:0.6, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__B_11", {drawSVG: "50% 50%"}, {duration:0.6, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__B_12", {drawSVG: "50% 50%"}, {duration:0.6, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__B_13", {drawSVG: "50% 50%"}, {duration:0.6, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__B_0", {drawSVG: "0%", x:"-20"}, {duration:1, drawSVG:"100%", ease:"typeEase", x:0}, "-=1");
      return tl;
    }

    // A
    function timelineA() {
      const tl = new TimelineMax();
      tl.from("#__A", {x:"-40", duration: 1, ease: "typeEase"});
      tl.fromTo("#__A_0", {drawSVG: "0%"}, {duration:1, drawSVG: "100%", ease: "tyoeEase"}, "-=0.8");
      tl.fromTo("#__A_1", {drawSVG: "0%"}, {duration:1, drawSVG: "100%", ease: "tyoeEase"}, "-=0.8");
      tl.fromTo("#__A_2", {drawSVG: "0%"}, {duration:1, drawSVG: "100%", ease: "tyoeEase"}, "-=0.8");
      tl.fromTo("#__A_3", {drawSVG: "0%"}, {duration:1, drawSVG: "100%", ease: "tyoeEase"}, "-=0.8");
      return tl;
    }

    // S
    function timelineS() {
      const tl = new TimelineMax();
      tl.from("#__S", {x:"-40", duration: 1, ease: "typeEase"});
      tl.fromTo("#__S_0",{width:"0%"}, {duration: 1, width: 90, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__S_1",{height:"0%"}, {duration: 1, height: 60, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__S_2",{width:"0%"}, {duration: 1, width: 70, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__S_3",{height:"0%"}, {duration: 1, height: 80, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__S_4",{width:"0%"}, {duration: 1, width: 70, ease: "typeEase"}, "-=0.8");
      return tl;
    }

    // I
    function timelineI2() {
      const tl = new TimelineMax();
      tl.from("#__I2", {x:"-40", duration: 1, ease: "typeEase"});
      tl.fromTo("#__I2_0", {drawSVG: "0%"}, {duration:1, drawSVG:"100%", ease:"typeEase"}, "-=0.8");
      tl.fromTo("#__I2_1", {drawSVG: "0%"}, {duration:1, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I2_7", {drawSVG: "50% 50%"}, {duration:1, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I2_6", {drawSVG: "50% 50%"}, {duration:1, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I2_5", {drawSVG: "50% 50%"}, {duration:0.9, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I2_8", {drawSVG: "50% 50%"}, {duration:0.9, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I2_4", {drawSVG: "50% 50%"}, {duration:0.8, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I2_9", {drawSVG: "50% 50%"}, {duration:0.8, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I2_3", {drawSVG: "50% 50%"}, {duration:0.7, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I2_10", {drawSVG: "50% 50%"}, {duration:0.7, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I2_2", {drawSVG: "50% 50%"}, {duration:0.6, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I2_11", {drawSVG: "50% 50%"}, {duration:0.6, drawSVG:"100%", ease:"typeEase"}, "-=1");
      tl.fromTo("#__I2_12", {drawSVG: "50% 50%"}, {duration:0.6, drawSVG:"100%", ease:"typeEase"}, "-=1");
      return tl;
    }

    // C
    function timelineC2() {
      const tl = new TimelineMax();
      tl.from("#__C2", {x:"-40", duration: 1, ease: "typeEase"});
      tl.fromTo("#__C2_0", {drawSVG:"50% 50%"}, {duration: 1.2, drawSVG:"100%", ease:"typeEase"}, "-=0.8");
      tl.fromTo("#__C2_1", {drawSVG:"50% 50%"}, {duration: 1.4, drawSVG:"50%", ease: "typeEase"}, "-=1");
      return tl;
    }

    // S
    function timelineS2() {
      const tl = new TimelineMax();
      tl.from("#__S2", {x:"-40", duration: 1, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__S2_0",{width:"0%"}, {duration: 1, width: 90, ease: "typeEase"});
      tl.fromTo("#__S2_1",{height:"0%"}, {duration: 1, height: 60, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__S2_2",{width:"0%"}, {duration: 1, width: 70, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__S2_3",{height:"0%"}, {duration: 1, height: 80, ease: "typeEase"}, "-=0.8");
      tl.fromTo("#__S2_4",{width:"0%"}, {duration: 1, width: 70, ease: "typeEase"}, "-=0.8");
      return tl;
    }

    // for CIOs
    function timelineText() {
      const tl = new TimelineMax();
      tl.from("#forCios", {x:"-178", duration:1, ease: "typeEase"});
      return tl;
    }

    master.add(timelineG());
    master.add(timelineE(), "-=1");
    master.add(timelineN(), "-=1");
    master.add(timelineO(), "-=2");
    master.add(timelineM(), "-=1");
    master.add(timelineI(), "-=2");
    master.add(timelineC(), "-=1");
    master.add(timelineB(), "-=2");
    master.add(timelineA(), "-=1");
    master.add(timelineS(), "-=2");
    master.add(timelineI2(), "-=1");
    master.add(timelineC2(), "-=2");
    master.add(timelineS2(), "-=2");
    master.add(timelineText(), "-=2");
  }, []);

  return (
    <div ref={svgWrapper}>
      <svg 
      aria-labelledby="title"
      id="svg"
      role="presentation"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1038.21 460"
      className={style.genomicTitle}>
        <title id="title" lang="en">Genomic Basics for CIOs</title>
        <rect width="1000" height="460" fill="#425563" id="Background"/>
        <g id="forCios" className={style.forCios}>
          <text transform="translate(798.21 406.01)" font-size="50" fill="#fff" font-family="MetricHPE-Regular, MetricHPE">
            <tspan letter-spacing="-.01em">f</tspan><tspan x="14.1" y="0">or CI</tspan><tspan x="103.35" y="0" letter-spacing="0em">O</tspan><tspan x="134.95" y="0">s</tspan>
          </text>
        </g>
        <rect id="__Cio_background" x="596" y="360" width="178" height="60" fill={typeBg}/>
        <g id="__S2" className={style.__S2} data-name="__S2">
          <rect id="__S2_background" x="682" y="230" width="92" height="200" fill={typeBg}/>
          <rect id="__S2_0" x="683.15" y="245" width="90" height="20" fill="#01a982"/>
          <rect id="__S2_1" x="683.15" y="265" width="20" height="60" fill="#2ad2c9"/>
          <rect id="__S2_2" x="703.15" y="305" width="70" height="20" fill="#fff"/>
          <rect id="__S2_3" x="753.15" y="325" width="20" height="80" fill="#fff"/>
          <rect id="__S2_4" x="683.15" y="385" width="70" height="20" fill="#2ad2c9"/>
        </g>
        <g id="__C" className={style.__C} fill="none" strokeMiterlimit="10" strokeWidth="17">
          <rect id="__C_background" x="835" y="20" width="140" height="200" fill={typeBg}/>
          <path id="__C_0" d="M968.62 158.74a70.15 70.15 0 11-5.12-93.48" stroke="#ff8d6d"/>
          <path id="__C_1" d="M968.62 158.74a70.15 70.15 0 11-5.12-93.48" stroke="#2ad2c9"/>
        </g>
        <g id="__I" className={style.__I} fill="none" strokeMiterlimit="10">
          <rect id="__I_background" x="773" y="20" width="45" height="200" fill={typeBg}/>
          <path id="__I_0" d="M790.1 160.89c-7.09 10-12.94 21-12.94 34.54M777.16 35.43c0 41.89 37.59 44.28 37.59 80 0 11.32-6.18 21-13.53 30.72" stroke="#ff8d6d" strokeWidth="7"/>
          <path id="__I_1" d="M789.94 84.43c-7 8.14-12.78 17-12.78 31 0 27.92 37.59 45.65 37.59 80M814.75 35.43c0 16.14-5.58 26.42-12.45 35" stroke="#ff8d6d" strokeWidth="7"/>
          <line id="__I_2" x1="783.68" y1="38.43" x2="807.68" y2="38.43" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I_3" x1="785.68" y1="49.43" x2="805.68" y2="49.43" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I_4" x1="791.68" y1="60.43" x2="799.68" y2="60.43" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I_5" x1="791.68" y1="94.43" x2="799.68" y2="94.43" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I_6" x1="785.68" y1="104.43" x2="805.68" y2="104.43" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I_7" x1="783.68" y1="115.43" x2="807.68" y2="115.43" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I_8" x1="785.68" y1="126.43" x2="805.68" y2="126.43" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I_9" x1="791.68" y1="136.43" x2="799.68" y2="136.43" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I_10" x1="791.68" y1="170.43" x2="799.68" y2="170.43" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I_11" x1="785.68" y1="181.43" x2="805.68" y2="181.43" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I_12" x1="783.68" y1="192.43" x2="807.68" y2="192.43" stroke="#2ad2c9" strokeWidth="4"/>
        </g>
        <g id="__M" className={style.__M}>
          <rect id="__M_background" x="632" y="20" width="120" height="200" fill={typeBg}/>
          <path id="__M_0" d="M731.5 37.79l-4.91-.93a5 5 0 00-5.85 4h0a5 5 0 004 5.84h0a5 5 0 014 5.85h0a5 5 0 01-5.85 4h0a5 5 0 00-5.84 4h0a5 5 0 004 5.84h0a5 5 0 014 5.85h0a5 5 0 01-5.84 4h0a5 5 0 00-5.84 4h0a5 5 0 004 5.84h0a5 5 0 014 5.85h0a5 5 0 01-5.84 4h0a5 5 0 00-5.85 4h0a5 5 0 004 5.85h0a5 5 0 014 5.84h0a5 5 0 01-5.85 4h0a5 5 0 00-5.84 4h0a5 5 0 004 5.85h0a5 5 0 014 5.84h0a5 5 0 01-5.85 4h0a5 5 0 00-5.84 4h0a5 5 0 004 5.85h0a5 5 0 014 5.84h0a5 5 0 01-5.84 4h0a5 5 0 00-5.84 4h0a5 5 0 004 5.85h0a5 5 0 014 5.84h0a5 5 0 01-5.84 4h0a5 5 0 00-5.85 4h0a5 5 0 004 5.85h0a5 5 0 014 5.84h0a5 5 0 01-5.85 4l-5.11-.93h0l-5.1.93a5 5 0 01-5.85-4h0a5 5 0 014-5.84h0a5 5 0 004-5.85h0a5 5 0 00-5.85-4h0a5 5 0 01-5.84-4h0a5 5 0 014-5.84h0a5 5 0 004-5.85h0a5 5 0 00-5.84-4h0a5 5 0 01-5.84-4h0a5 5 0 014-5.84h0a5 5 0 004-5.85h0a5 5 0 00-5.84-4h0a5 5 0 01-5.85-4h0a5 5 0 014-5.84h0a5 5 0 004-5.85h0a5 5 0 00-5.85-4h0a5 5 0 01-5.84-4h0a5 5 0 014-5.84h0a5 5 0 004-5.85h0a5 5 0 00-5.85-4h0a5 5 0 01-5.84-4h0a5 5 0 014-5.85h0a5 5 0 004-5.84h0a5 5 0 00-5.84-4h0a5 5 0 01-5.84-4h0a5 5 0 014-5.85h0a5 5 0 004-5.84h0a5 5 0 00-5.84-4h0a5 5 0 01-5.85-4h0a5 5 0 014-5.85h0a5 5 0 004-5.84h0a5 5 0 00-5.85-4l-4.91.93" fill="none" stroke="#ff8d6d" strokeMiterlimit="10" strokeWidth="2"/>
          <rect id="__M_1" x="632.15" y="145" width="20" height="50" fill="#e6e7e8"/>
          <rect id="__M_2" x="632.15" y="85" width="20" height="60" fill="#2ad2c9"/>
          <rect id="__M_3" x="632.15" y="35" width="20" height="50" fill="#ff8d6d"/>
          <rect id="__M_4" x="731.15" y="145" width="20" height="50" fill="#e6e7e8"/>
          <rect id="__M_5" x="731.15" y="85" width="20" height="60" fill="#2ad2c9"/>
          <rect id="__M_6" x="731.15" y="35" width="20" height="50" fill="#ff8d6d"/>
        </g>
        <g id="__O" className={style.__O} fill="none" strokeMiterlimit="10" strokeWidth="17">
          <rect id="__O_background" x="452" y="20" width="160" height="200" fill={typeBg}/>
          <circle id="__O_1" cx="532.15" cy="115" r="70" stroke="#c6c9ca"/>
          <circle id="__O_2" cx="532.15" cy="115" r="70" stroke="#ff8d6d"/>
        </g>
        <g id="__N" className={style.__N}>
          <rect id="__N_background" x="310" y="20" width="121" height="200" fill={typeBg}/>
          <path id="__N_0" d="M331.15 46l4.48-2.22a5 5 0 016.7 2.26h0a5 5 0 01-2.26 6.7h0a5 5 0 00-2.25 6.7h0a5 5 0 006.7 2.25h0a5 5 0 016.7 2.26h0a5 5 0 01-2.25 6.7h0a5 5 0 00-2.26 6.7h0a5 5 0 006.7 2.26h0a5 5 0 016.7 2.26h0a5 5 0 01-2.25 6.7h0a5 5 0 00-2.26 6.7h0a5 5 0 006.7 2.26h0a5 5 0 016.7 2.25h0a5 5 0 01-2.25 6.7h0a5 5 0 00-2.26 6.7h0a5 5 0 006.7 2.26h0a5 5 0 016.7 2.26h0a5 5 0 01-2.25 6.7h0a5 5 0 00-2.26 6.7h0a5 5 0 006.7 2.26h0a5 5 0 016.7 2.25h0a5 5 0 01-2.25 6.7h0a5 5 0 00-2.26 6.7h0a5 5 0 006.7 2.26h0a5 5 0 016.71 2.26h0a5 5 0 01-2.26 6.7h0a5 5 0 00-2.26 6.7h0a5 5 0 006.71 2.26h0a5 5 0 016.7 2.25h0a5 5 0 01-2.26 6.7h0a5 5 0 00-2.26 6.7h0a5 5 0 006.71 2.25l4.47-2.22" fill="none" stroke="#ff8d6d" strokeMiterlimit="10" strokeWidth="2"/>
          <rect id="__N_1" x="312.15" y="145" width="20" height="50" fill="#e6e7e8"/>
          <rect id="__N_2" x="312.15" y="85" width="20" height="60" fill="#2ad2c9"/>
          <rect id="__N_3" x="312.15" y="35" width="20" height="50" fill="#ff8d6d"/>
          <rect id="__N_4" x="410.15" y="145" width="20" height="50" fill="#e6e7e8"/>
          <rect id="__N_5" x="410.15" y="85" width="20" height="60" fill="#2ad2c9"/>
          <rect id="__N_6" x="410.15" y="35" width="20" height="50" fill="#ff8d6d"/>
        </g>
        <g id="__E" className={style.__E}>
          <rect id="__E_background" x="190" y="20" width="103" height="200" fill={typeBg}/>
          <path id="__E_0" d="M246.3 125h-25.7a8.57 8.57 0 01-8.57-8.57h0a8.57 8.57 0 018.57-8.57h25.7M248.87 125h25.71a8.57 8.57 0 008.57-8.57h0a8.57 8.57 0 00-8.57-8.57h-25.71" fill="none" stroke="#01a982" strokeMiterlimit="10" strokeWidth="7"/>
          <rect id="__E_1" x="192.15" y="35" width="57.61" height="20" fill="#01a982"/>
          <rect id="__E_2" x="249.76" y="35" width="42.39" height="20" fill="#ff8d6d"/>
          <rect id="__E_3" x="192.15" y="173" width="60" height="20" fill="#e6e7e8"/>
          <rect id="__E_4" x="252.15" y="173" width="40" height="20" fill="#01a982"/>
          <rect id="__E_5" x="192.15" y="55" width="20" height="48.17" fill="#2ad2c9"/>
          <rect id="__E_6" x="192.15" y="130.7" width="20" height="17.3" fill="#01a982"/>
          <rect id="__E_7" x="192.15" y="148" width="20" height="25" fill="#2ad2c9"/>
        </g>
        <g id="__G" className={style.__G} fill="none" strokeMiterlimit="10">
          <rect id="__G_background" x="20" y="20" width="160" height="200" fill={typeBg}/>
          <path id="__G_top" d="M167.15 158.74a70.15 70.15 0 11-5.12-93.48" stroke="#ff8d6d" strokeWidth="17"/>
          <path id="__G_bottom" d="M167.15 158.74a70.15 70.15 0 11-5.12-93.48" stroke="#2ad2c9" strokeWidth="17"/>
          <g id="Arrow" stroke="#01a982" strokeWidth="10">
            <polyline points="137.15 118 167.15 118 167.15 148"/>
            <line x1="167.15" y1="118" x2="137.15" y2="148"/>
          </g>
        </g>

        <g id="__C2" className={style.__C2} data-name="__C2" fill="none" strokeMiterlimit="10" strokeWidth="17">
          <rect id="__C2_background" x="517" y="230" width="140" height="200" fill={typeBg}/>
          <path id="__C2_0" d="M650.5 370.06a70.14 70.14 0 11-5.12-93.49" stroke="#ff8d6d"/>
          <path id="__C2_1" d="M650.5 370.06a70.14 70.14 0 11-5.12-93.49" stroke="#2ad2c9"/>
        </g>
        <g id="__I2" className={style.__I2} data-name="__I2" fill="none" strokeMiterlimit="10">
          <rect id="__I2_background" x="450" y="230" width="50" height="200" fill={typeBg}/>
          <path id="__I2_0" d="M467.5 373.45c-7.08 10-12.93 21-12.93 34.55M458.61 248c0 41.89 37.58 44.28 37.58 80 0 11.32-6.18 21-13.52 30.72" stroke="#fff" strokeWidth="7"/>
          <path id="__I2_1" d="M471.38 297c-7 8.14-12.77 17-12.77 31 0 27.92 37.58 45.65 37.58 80M496.19 248c0 16.14-5.58 26.42-12.44 35" stroke="#fff" strokeWidth="7"/>
          <line id="__I2_2" x1="465.12" y1="251" x2="489.12" y2="251" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I2_3" x1="467.12" y1="262" x2="487.12" y2="262" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I2_4" x1="473.12" y1="273" x2="481.12" y2="273" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I2_5" x1="473.12" y1="307" x2="481.12" y2="307" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I2_6" x1="467.12" y1="317" x2="487.12" y2="317" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I2_7" x1="465.12" y1="328" x2="489.12" y2="328" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I2_8" x1="467.12" y1="339" x2="487.12" y2="339" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I2_9" x1="473.12" y1="349" x2="481.12" y2="349" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I2_10" x1="473.12" y1="383" x2="481.12" y2="383" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I2_11" x1="467.12" y1="394" x2="487.12" y2="394" stroke="#2ad2c9" strokeWidth="4"/>
          <line id="__I2_12" x1="465.12" y1="405" x2="489.12" y2="405" stroke="#2ad2c9" strokeWidth="4"/>
        </g>
        <g id="__S" className={style.__S}>
          <rect id="__S_background" x="336" y="230" width="92" height="200" fill={typeBg}/>
          <rect id="__S_0" x="337.15" y="245" width="90" height="20" fill="#ff8d6d"/>
          <rect id="__S_1" x="337.15" y="265" width="20" height="60" fill="#2ad2c9"/>
          <rect id="__S_2" x="357.15" y="305" width="70" height="20" fill="#fff"/>
          <rect id="__S_3" x="407.15" y="325" width="20" height="80" fill="#2ad2c9"/>
          <rect id="__S_4" x="337.15" y="385" width="70" height="20" fill="#01a982"/>
        </g>
        <g id="__A" className={style.__A} fill="none" strokeMiterlimit="10">
          <rect id="__A_background" x="170" y="230" width="152" height="200" fill={typeBg}/>
          <polyline id="__A_0" points="177.15 405 247.15 255 317.15 405" stroke="#fff" strokeWidth="10"/>
          <line id="__A_1" x1="299.5" y1="367.17" x2="317.15" y2="405" stroke="#2ad2c9" strokeWidth="10"/>
          <polyline id="__A_2" points="222.15 308.57 247.15 255 266.13 295.66" stroke="#2ad2c9" strokeWidth="10"/>
          <path id="__A_3" d="M217.15 345v-5a5 5 0 015-5h0a5 5 0 015 5h0a5 5 0 005 5h0a5 5 0 005-5h0a5 5 0 015-5h0a5 5 0 015 5h0a5 5 0 005 5h0a5 5 0 005-5h0a5 5 0 015-5h0a5 5 0 015 5h0a5 5 0 005 5h0a5 5 0 005-5v-5" stroke="#ff8d6d" strokeWidth="2"/>
        </g>
        <g id="__B" className={style.__B} fill="none" strokeMiterlimit="10">
          <rect id="__B_background" x="26" y="230" width="137" height="200" fill={typeBg}/>
          <path id="__B_0" d="M117.15 325a40 40 0 000-80h-30M117.15 325a40 40 0 010 80h-30" stroke="#2ad2c9" strokeWidth="10"/>
          <g id="helix">
            <path id="__B_1" d="M52.43 370c-7.08 10-12.93 21-12.93 34.53M39.5 244.53c0 41.89 37.59 44.28 37.59 80 0 11.32-6.18 21-13.53 30.72" stroke="#ff8d6d" strokeWidth="7"/>
            <path id="__B_2" d="M52.27 293.53c-7 8.14-12.78 17-12.78 31 0 27.92 37.59 45.66 37.59 80M77.08 244.53c0 16.14-5.58 26.42-12.44 35" stroke="#ff8d6d" strokeWidth="7"/>
            <line id="__B_3" x1="46.01" y1="247.53" x2="70.01" y2="247.53" stroke="#2ad2c9" strokeWidth="4"/>
            <line id="__B_4" x1="48.01" y1="258.53" x2="68.01" y2="258.53" stroke="#2ad2c9" strokeWidth="4"/>
            <line id="__B_5" x1="54.01" y1="269.53" x2="62.01" y2="269.53" stroke="#2ad2c9" strokeWidth="4"/>
            <line id="__B_6" x1="54.01" y1="303.53" x2="62.01" y2="303.53" stroke="#2ad2c9" strokeWidth="4"/>
            <line id="__B_7" x1="48.01" y1="313.53" x2="68.01" y2="313.53" stroke="#2ad2c9" strokeWidth="4"/>
            <line id="__B_8" x1="46.01" y1="324.53" x2="70.01" y2="324.53" stroke="#2ad2c9" strokeWidth="4"/>
            <line id="__B_9" x1="48.01" y1="335.53" x2="68.01" y2="335.53" stroke="#2ad2c9" strokeWidth="4"/>
            <line id="__B_10" x1="54.01" y1="345.53" x2="62.01" y2="345.53" stroke="#2ad2c9" strokeWidth="4"/>
            <line id="__B_11" x1="54.01" y1="379.53" x2="62.01" y2="379.53" stroke="#2ad2c9" strokeWidth="4"/>
            <line id="__B_12" x1="48.01" y1="390.53" x2="68.01" y2="390.53" stroke="#2ad2c9" strokeWidth="4"/>
            <line id="__B_13" x1="46.01" y1="401.53" x2="70.01" y2="401.53" stroke="#2ad2c9" strokeWidth="4"/>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default GenomicTitle