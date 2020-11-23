import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TweenMax, TimelineMax } from 'gsap';
import CustomEase from 'gsap/CustomEase.js';
gsap.registerPlugin(CustomEase);


const CybercrimeTitle = () => {
  const svgWrapper = useRef(null);
  
  useEffect(() => {
    const [svgElements] = svgWrapper.current.children;
    const blocksOne = svgElements.querySelector("#blocks-01");
    const greenBarOne = svgElements.querySelector("#greenBarOne");
    const greenBarTwo = svgElements.querySelector("#greenBarTwo");
    const bluelinesOne = svgElements.querySelector("#bluelines-1");
    const bluelinesTwo = svgElements.querySelector("#bluelines-2");
    const bluelinesThree = svgElements.querySelector("#bluelines-3");
    const blueBarOne = svgElements.querySelector("#bluebarOne");
    const blueBarTwo = svgElements.querySelector("#bluebarTwo");
    const blueBarThree = svgElements.querySelector("#bluebarThree");
    const circleOne = svgElements.querySelector("#circleOne");
    const circleTwo = svgElements.querySelector("#circleTwo");
    const circleThree = svgElements.querySelector("#circleThree");
    const master = gsap.timeline();
    const backgroundTl = gsap.timeline();
    const glitchDuration = 0.2;
    
    CustomEase.create("typeEase", "M0,0 C0.036,0.592 -0.094,1 0.59,1 0.701,1 0.818,1.001 1,1 ");

    // INITIAL MOVEMENT ::::::::::::::::::::::::::::::::::::::::::

    gsap.to(blocksOne, {x: 200, duration: 1, ease: "typeEase"});
    gsap.to(greenBarOne, {x: 400, duration: 1, ease: "typeEase"});
    gsap.from(bluelinesTwo, {x: 800, duration: 1, ease: "typeEase"});
    gsap.from(bluelinesOne, {y: -200, duration: 1, ease: "typeEase"});
    gsap.from(bluelinesThree, {y: 500, duration: 1.2, ease: "typeEase"});
    gsap.fromTo(blueBarOne, {x: 100, y: 300}, {keyframes: [
      {x: 10, width: 70, height: 10, duration: glitchDuration}, 
      {x: 500, width: 700, height: 500, duration: glitchDuration}, 
      {x: 233, width: 390, height: 90, duration: glitchDuration, delay: 0.1},
      {x: 300, width: 100, height: 100, duration: glitchDuration},
      {x: 300, width: 1040, height: 35, duration: glitchDuration},
      {x: 300, width: 1040, height: 0, duration: glitchDuration, opacity: 0, delay: 0.5}
    ]});
    gsap.fromTo(greenBarOne, {x: 400}, {keyframes: [
      {y: 800, height: 800, duration: glitchDuration},
      {y: 300, height: 200, duration: glitchDuration},
      {y: -20, height: 20, duration: glitchDuration}
    ]});
    gsap.fromTo(blueBarTwo, {x: 1000, y: 500}, {keyframes: [
      {x: -1000, width: 800, duration: glitchDuration, ease: "typeEase"},
      {x: -60, width: 600, duration: glitchDuration, ease: "typeEase"},
      {x: -2000, width: 6000, height: 10, duration: glitchDuration, ease: "typeEase"},
      {x: -2000, width: 6000, height: 10, duration: glitchDuration, ease: "typeEase", opacity: 0},
    ]});
    gsap.fromTo(blueBarThree, {x: 0}, {keyframes: [
      {x: -1000, width: 800, duration: glitchDuration },
      {x: -60, width: 600, duration: glitchDuration, ease: "typeEase"},
      {x: -2000, width: 6000, height: 10, duration: glitchDuration},
      {x: -2000, width: 6000, height: 10, duration: glitchDuration, ease: "typeEase", opacity: 0},
    ]});
    gsap.fromTo(greenBarOne, {x: 0}, {keyframes: [
      {x: -1000, width: 800, duration: glitchDuration },
      {x: -60, width: 600, duration: glitchDuration, ease: "typeEase"},
      {x: -2000, width: 6000, height: 10, duration: glitchDuration},
      {x: -2000, width: 6000, height: 10, duration: glitchDuration, ease: "typeEase", opacity: 0},
    ]});
    gsap.fromTo(greenBarTwo, {y: 0}, {keyframes: [
      {y: -1000, width: 800, duration: glitchDuration },
      {y: -60, width: 600, duration: glitchDuration, ease: "typeEase"},
      {y: -2000, width: 6000, height: 10, duration: glitchDuration},
      {y: -2000, width: 6000, height: 10, duration: glitchDuration, ease: "typeEase", opacity: 0},
    ]});

    gsap.fromTo(circleOne, {cx: 245, cy: 108, opacity: 0}, {keyframes: [
      {cx: 330, cy: 120, duration: 1, ease: "typeEase"},
      {opacity: 0, duration: glitchDuration, ease: "typeEase"},
      {opacity: 1, duration: glitchDuration, ease: "typeEase"},
      {opacity: 0, duration: glitchDuration, ease: "typeEase"},
      {opacity: 1, duration: glitchDuration, ease: "typeEase"},
    ]});

    gsap.fromTo(circleTwo, {cx: 85, cy: 648}, {keyframes: [
      {cx: 106, cy: 222, duration: 2, ease: "typeEase"},
      {cx: 20, cy: 444, duration: 2, ease: "typeEase"},
      {cx: 85, cy: 648, duration: 2, ease: "typeEase"},
    ]});

    gsap.fromTo(circleThree, {cx: 1175, cy: 788, opacity: 0}, {keyframes: [
      {cx: 1100, cy: 788, duration: 1, ease: "typeEase"},
      {opacity: 0, duration: glitchDuration, ease: "typeEase"},
      {opacity: 1, duration: glitchDuration, ease: "typeEase"},
      {opacity: 0, duration: glitchDuration, ease: "typeEase"},
      {opacity: 1, duration: glitchDuration, ease: "typeEase"},
    ]});

    // BACKGROUND ANIMATION [SHAPES] SETUP ::::::::::::::::::::::::::::::::::::::::::

    let randFill = gsap.utils.random([0, 0.5, 1], true);

    function timelineBlocksOne() {
      const tl = new TimelineMax();
      const t = 4;
      tl.to(".gridblock", t, {
        fillOpacity: function(i, elem, gridblocks) {
          return randFill();
        }
      })

      tl.to(".gridblock", t, {
        fillOpacity: function(i, elem, gridblocks) {
          return randFill();
        }
      })

      tl.to(".gridblock", t, {
        fillOpacity: function(i, elem, gridblocks) {
          return randFill();
        }
      })

      tl.to(".gridblock", t, {
        fillOpacity: function(i, elem, gridblocks) {
          return randFill();
        }
      })
         
      return tl;
    }

    function timelineBlocksTwo() {
      const tl = new TimelineMax();
      const t = 1;
      tl.to(".lineblock", t, {
        fillOpacity: function(i, elem, lineblocks) {
          return randFill();
        }
      })

      tl.to(".lineblock", t, {
        fillOpacity: function(i, elem, lineblocks) {
          return randFill();
        }
      })
      
      tl.to(".lineblock", t, {
        fillOpacity: function(i, elem, lineblocks) {
          return randFill();
        }
      })
      
      tl.to(".lineblock", t, {
        fillOpacity: function(i, elem, lineblocks) {
          return randFill();
        }
      })
      
      return tl;
    }
    
    
    // TYPE ANIMATION SETUP ::::::::::::::::::::::::::::::::::::::::::
    
    
    // Set initial position of elements
    gsap.set("#c1", {x: 100, y: 60});
    gsap.set("#c2", {x: -20});
    gsap.set("#y1", {x: -100, y: 20});
    gsap.set("#y2", {x: 20, y: -20});
    gsap.set("#y3", {x: 100, y: 20});
    gsap.set("#y4", {x: -20, y: -20});
    gsap.set("#y5", {x: -60, y: -120});
    gsap.set("#b1", {x: -60, y: 20});
    gsap.set("#b2", {x: -160, y: 0});
    gsap.set("#b3", {x: 10, y: 20});
    gsap.set("#b4", {x: 0, y: -20});
    gsap.set("#b5", {x: 0, y: 0});
    gsap.set("#b7", {x: -120, y: 0});
    gsap.set("#b9", {x: 0, y: 0});
    gsap.set("#e1", {x: 40, y: 20});
    gsap.set("#e2", {x: 40, y: 20});
    gsap.set("#e3", {x: -60, y: -40});
    gsap.set("#e4", {x: 140, y: -40});
    gsap.set("#r1", {x: 10, y: -40});
    gsap.set("#r2", {x: 0, y: -60});
    gsap.set("#r3", {x: 60, y: 40});
    gsap.set("#r5", {x: 20, y: 40});
    gsap.set("#cc1", {x: -20, y: 20});
    gsap.set("#cc2", {x: -20, y: -10});
    gsap.set("#cc3", {x: 0, y: 100});
    gsap.set("#rr1", {x: 60, y: 60});
    gsap.set("#rr2", {x: 0, y: 100});
    gsap.set("#rr3", {x: 100, y: 0});
    gsap.set("#rr4", {x: -20, y: 20});
    gsap.set("#i1", {x: -20, y: 20});
    gsap.set("#i2", {x: -20, y: 20});
    gsap.set("#i3", {x: 40, y: 0});
    gsap.set("#i4", {x: 80, y: 0});
    gsap.set("#i5", {x: -20, y: 20});
    gsap.set("#i6", {x: 40, y: -40});
    gsap.set("#m1", {x: 40, y: 80});
    gsap.set("#m2", {x: 40, y: 0});
    gsap.set("#m3", {x: 0, y: -30});
    gsap.set("#m4", {x: -20, y: 0});
    gsap.set("#m8", {x: -20, y: 20});
    gsap.set("#ee1", {x: -20, y: 20});
    gsap.set("#ee2", {x: 0, y: 60});
    gsap.set("#ee3", {x: 0, y: -20});
    gsap.set("#ee5", {x: 40, y: 20});
    
    
    // Timelines
    // [C]
    function timelineC1() {
      const tl = new TimelineMax();
      tl.to("#c1", .5, {x: 0, ease: "typeEase"})
        .to("#c1", .75, {y: 0, ease: "typeEase"}, "_+=0.5")
        .to("#c2", .75, {x: 0, ease: "typeEase"}, "-=0.5")
        .to("#c3", .75, {x: -50, ease: "typeEase"}, "-=0.5");
      return tl;
    }
    // [Y]
    function timelineY1() {
      const tl = new TimelineMax();
      tl.to("#y1", .50, {x: 0, ease: "typeEase"})
        .to("#y1", .75, {y: 0, ease: "typeEase"})
        .to("#y2", .50, {x: 0, ease: "typeEase"})
        .to("#y2", .75, {y: 0, ease: "typeEase"})
        .to("#y3", .50, {x: 0, ease: "typeEase"})
        .to("#y3", .75, {y: 0, ease: "typeEase"})
        .to("#y4", .50, {x: 0, ease: "typeEase"})
        .to("#y4", .75, {y: 0, ease: "typeEase"})
        .to("#y5", .50, {x: -35, ease: "typeEase"})
        .to("#y5", .75, {y: 0, ease: "typeEase"})
        .to("#y6", .75, {x: -20, ease: "typeEase"});
        
      return tl;
    }
    // [B]
    function timelineB1() {
      const tl = new TimelineMax();
      tl.to("#b1", .50, {x: 0, ease: "typeEase"})
        .to("#b1", .75, {y: 0, ease: "typeEase"})
        .to("#b2", .50, {x: 0, ease: "typeEase"})
        .to("#b2", .75, {y: 0, ease: "typeEase"})
        .to("#b3", .50, {x: 0, ease: "typeEase"}, "-=0.5")
        .to("#b3", .75, {y: 0, ease: "typeEase"}, "-=0.5")
        .to("#b4", .50, {x: 0, ease: "typeEase"}, "-=0.5")
        .to("#b4", .75, {y: 0, ease: "typeEase"}, "-=0.5")
        .to("#b7", .75, {x: 20, ease: "typeEase"}, "-=0.5")
        .to("#b8", .75, {y: -10, ease: "typeEase"})
        .to("#b9", .75, {x: -50, ease: "typeEase"}, "-=1");
        
      return tl;
    }
    // [E]
    function timelineE1() {
      const tl = new TimelineMax();
      tl.to("#e1", .50, {x: 0, ease: "typeEase"})
        .to("#e1", .75, {y: 0, ease: "typeEase"})
        .to("#e2", .50, {x: 0, ease: "typeEase"})
        .to("#e2", .75, {y: 0, ease: "typeEase"})
        .to("#e3", .50, {x: 0, ease: "typeEase"}, "-=0.5")
        .to("#e3", .75, {y: 0, ease: "typeEase"}, "-=0.5")
        .to("#e4", .50, {x: 0, ease: "typeEase"}, "-=0.5")
        .to("#e4", .75, {y: 0, ease: "typeEase"})
        .to("#e7", .75, {y: -50, ease: "typeEase"}, "-=0.5")
        .to("#e8", .75, {y: 10, ease: "typeEase"}, "-=0.5")
        .to("#e10", .75, {x: -40, ease: "typeEase"}, "-=0.5")
        .to("#e9", .75, {y: -10, ease: "typeEase"}, "-=0.5");

      return tl;
    }
    // [R]
    function timelineR1() {
      const tl = new TimelineMax();
      tl.to("#r1", .50, {x: 0, ease: "typeEase"})
        .to("#r1", .75, {y: 0, ease: "typeEase"})
        .to("#r2", .50, {y: 0, ease: "typeEase"})
        .to("#r3", .50, {x: 0, ease: "typeEase"}, "-=0.5")
        .to("#r3", .75, {y: 0, ease: "typeEase"}, "-=0.5")
        .to("#r5", .50, {x: 0, ease: "typeEase"}, "-=0.5")
        .to("#r5", .75, {y: 0, ease: "typeEase"})
        .to("#r7", .75, {y: 30, ease: "typeEase"})
        .to("#r6", .75, {x: -20, ease: "typeEase"});

      return tl;
    }
    // [C]
    function timelineCc1() {
      const tl = new TimelineMax();
      tl.to("#cc1", .50, {x: 0, ease: "typeEase"})
        .to("#cc1", .75, {y: 0, ease: "typeEase"})
        .to("#cc2", .50, {x: 0, ease: "typeEase"})
        .to("#cc2", .50, {y: 0, ease: "typeEase"})
        .to("#cc3", .75, {y: 0, ease: "typeEase"}, "-=0.5")
        .to("#cc4", .75, {x: -20, ease: "typeEase"}, "-=0.5")
        .to("#cc5", .75, {y: 30, ease: "typeEase"}, "-=0.5");

      return tl;
    }
    // [R]
    function timelineRr1() {
      const tl = new TimelineMax();
      tl.to("#rr1", .50, {x: 0, ease: "typeEase"})
        .to("#rr1", .75, {y: 0, ease: "typeEase"})
        .to("#rr2", .50, {y: 0, ease: "typeEase"})
        .to("#rr3", .75, {y: 0, ease: "typeEase"}, "-=0.5")
        .to("#rr3", .75, {x: 0, ease: "typeEase"}, "-=0.5")
        .to("#rr4", .75, {x: 0, ease: "typeEase"}, "-=0.5")
        .to("#rr4", .75, {y: 0, ease: "typeEase"}, "-=0.5")
        .to("#rr7", .75, {y: 30, ease: "typeEase"}, "-=0.5")
        .to("#rr6", .75, {x: -20, ease: "typeEase"}, "-=0.5");

      return tl;
    }

    // [I]
    function timelineI() {
      const tl = new TimelineMax();
      tl.to("#i1", .50, {x: 0, ease: "typeEase"})
        .to("#i1", .75, {y: 0, ease: "typeEase"})
        .to("#i2", .50, {x: 0, ease: "typeEase"})
        .to("#i2", .50, {y: 0, ease: "typeEase"})
        .to("#i3", .75, {x: 0, ease: "typeEase"}, "-=0.5")
        .to("#i4", .75, {x: 0, ease: "typeEase"}, "-=0.5")
        .to("#i5", .75, {x: 0, ease: "typeEase"}, "-=0.5")
        .to("#i5", .75, {y: 0, ease: "typeEase"}, "-=0.5")
        .to("#i6", .75, {x: 0, ease: "typeEase"}, "-=0.5")
        .to("#i6", .75, {y: 0, ease: "typeEase"}, "-=0.5")
        .to("#i8", .75, {x: -10, ease: "typeEase"}, "-=0.5")
        .to("#i9", .75, {x: -20, ease: "typeEase"}, "-=0.5")
        .to("#i11", .75, {y: -20, ease: "typeEase"}, "-=0.5")
        .to("#i10", .75, {y: 30, ease: "typeEase"}, "-=0.5");

      return tl;
    }
    
    // [M]
    function timelineM() {
      const tl = new TimelineMax();
      tl.to("#m1", .50, {x: 0, ease: "typeEase"})
        .to("#m1", .75, {y: 0, ease: "typeEase"})
        .to("#m2", .50, {x: 0, ease: "typeEase"})
        .to("#m3", .75, {y: 0, ease: "typeEase"}, "-=0.5")
        .to("#m4", .75, {x: 0, ease: "typeEase"}, "-=0.5")
        .to("#m5", .75, {x: 20, ease: "typeEase"}, "-=0.5")
        .to("#m6", .75, {x: 10, ease: "typeEase"}, "-=0.5")
        .to("#m7", .75, {x: 20, ease: "typeEase"}, "-=0.5")
        .to("#m8", .75, {y: 0, ease: "typeEase"}, "-=0.5")
        .to("#m8", .75, {x: 0, ease: "typeEase"}, "-=0.5");

      return tl;
    }

    // [E]
    function timelineEe() {
      const tl = new TimelineMax();
      tl.to("#ee1", .50, {x: 0, ease: "typeEase"})
        .to("#ee1", .75, {y: 0, ease: "typeEase"})
        .to("#ee2", .50, {y: 0, ease: "typeEase"})
        .to("#ee3", .75, {y: 0, ease: "typeEase"}, "-=0.5")
        .to("#ee4", .75, {x: 0, ease: "typeEase"}, "-=0.5")
        .to("#ee5", .75, {x: 0, ease: "typeEase"}, "-=0.5")
        .to("#ee5", .75, {y: 0, ease: "typeEase"}, "-=0.5")
        .to("#ee6", .75, {y: 20, ease: "typeEase"}, "-=0.5")
        .to("#ee7", .75, {y: -20, ease: "typeEase"}, "-=0.5");
        
      return tl;
    }

    // Sequence timelines ::::::::::::::::::::::::::::::::::::::::::

    // Type Animation
    master.add(timelineC1());
    master.add(timelineY1(), "-=3");
    master.add(timelineB1(), "-=5");
    master.add(timelineE1(), "-=6");
    master.add(timelineR1(), "-=7");
    master.add(timelineCc1(), "-=4");
    master.add(timelineRr1(), "-=5");
    master.add(timelineI(), "-=6");
    master.add(timelineM(), "-=5");
    master.add(timelineEe(), "-=5");

    // Background Animation
    backgroundTl.add(timelineBlocksTwo);
    backgroundTl.add(timelineBlocksOne);

  }, []);
  
  return (
    <div ref={svgWrapper}>
      <svg
      aria-labelledby="title"
      id="svg"
      role="presentation"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1201.41 950">
        <title id="title" lang="en">Cyber Crime</title>
        <g id="blocks-01" fill="#2ad2c9">
          <rect className="gridblock" x="45" y="284" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="57" y="284" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="69" y="284" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="81" y="284" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="93" y="284" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="105" y="284" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="117" y="284" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="129" y="284" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="45" y="296" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="57" y="296" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="69" y="296" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="81" y="296" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="93" y="296" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="105" y="296" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="117" y="296" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="129" y="296" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="45" y="308" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="57" y="308" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="69" y="308" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="81" y="308" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="93" y="308" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="105" y="308" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="117" y="308" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="129" y="308" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="45" y="320" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="57" y="320" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="69" y="320" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="81" y="320" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="93" y="320" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="105" y="320" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="117" y="320" width="8" height="8" fillOpacity="1"/>
          <rect className="gridblock" x="129" y="320" width="8" height="8" fillOpacity="1"/>
        </g>
        <g id="blocks-02" fill="#2ad2c9">
          <rect className="gridblock" x="1087" y="376" width="8" height="8"/>
          <rect className="gridblock" x="1099" y="376" width="8" height="8"/>
          <rect className="gridblock" x="1111" y="376" width="8" height="8"/>
          <rect className="gridblock" x="1123" y="376" width="8" height="8"/>
          <rect className="gridblock" x="1135" y="376" width="8" height="8"/>
          <rect className="gridblock" x="1147" y="376" width="8" height="8"/>
          <rect className="gridblock" x="1159" y="376" width="8" height="8"/>
          <rect className="gridblock" x="1171" y="376" width="8" height="8"/>
          <rect className="gridblock" x="1087" y="388" width="8" height="8"/>
          <rect className="gridblock" x="1099" y="388" width="8" height="8"/>
          <rect className="gridblock" x="1111" y="388" width="8" height="8"/>
          <rect className="gridblock" x="1123" y="388" width="8" height="8"/>
          <rect className="gridblock" x="1135" y="388" width="8" height="8"/>
          <rect className="gridblock" x="1147" y="388" width="8" height="8"/>
          <rect className="gridblock" x="1159" y="388" width="8" height="8"/>
          <rect className="gridblock" x="1171" y="388" width="8" height="8"/>
          <rect className="gridblock" x="1087" y="400" width="8" height="8"/>
          <rect className="gridblock" x="1099" y="400" width="8" height="8"/>
          <rect className="gridblock" x="1111" y="400" width="8" height="8"/>
          <rect className="gridblock" x="1123" y="400" width="8" height="8"/>
          <rect className="gridblock" x="1135" y="400" width="8" height="8"/>
          <rect className="gridblock" x="1147" y="400" width="8" height="8"/>
          <rect className="gridblock" x="1159" y="400" width="8" height="8"/>
          <rect className="gridblock" x="1171" y="400" width="8" height="8"/>
          <rect className="gridblock" x="1087" y="412" width="8" height="8"/>
          <rect className="gridblock" x="1099" y="412" width="8" height="8"/>
          <rect className="gridblock" x="1111" y="412" width="8" height="8"/>
          <rect className="gridblock" x="1123" y="412" width="8" height="8"/>
          <rect className="gridblock" x="1135" y="412" width="8" height="8"/>
          <rect className="gridblock" x="1147" y="412" width="8" height="8"/>
          <rect className="gridblock" x="1159" y="412" width="8" height="8"/>
          <rect className="gridblock" x="1171" y="412" width="8" height="8"/>
        </g>
        <g id="blocks-03" fill="#2ad2c9">
          <rect className="gridblock" x="862" y="609" width="8" height="8"/>
          <rect className="gridblock" x="874" y="609" width="8" height="8"/>
          <rect className="gridblock" x="886" y="609" width="8" height="8"/>
          <rect className="gridblock" x="898" y="609" width="8" height="8"/>
          <rect className="gridblock" x="910" y="609" width="8" height="8"/>
          <rect className="gridblock" x="862" y="621" width="8" height="8"/>
          <rect className="gridblock" x="874" y="621" width="8" height="8"/>
          <rect className="gridblock" x="886" y="621" width="8" height="8"/>
          <rect className="gridblock" x="898" y="621" width="8" height="8"/>
          <rect className="gridblock" x="910" y="621" width="8" height="8"/>
        </g>
        <g id="blocks-04" fill="#2ad2c9">
          <rect className="gridblock" x="1073" y="897" width="8" height="8"/>
          <rect className="gridblock" x="1085" y="897" width="8" height="8"/>
          <rect className="gridblock" x="1097" y="897" width="8" height="8"/>
          <rect className="gridblock" x="1073" y="909" width="8" height="8"/>
          <rect className="gridblock" x="1085" y="909" width="8" height="8"/>
          <rect className="gridblock" x="1097" y="909" width="8" height="8"/>
          <rect className="gridblock" x="1073" y="921" width="8" height="8"/>
          <rect className="gridblock" x="1085" y="921" width="8" height="8"/>
          <rect className="gridblock" x="1097" y="921" width="8" height="8"/>
        </g>
        <g id="blocks-05" fill="#2ad2c9">
          <rect className="gridblock" x="333" y="373" width="8" height="8"/>
          <rect className="gridblock" x="345" y="373" width="8" height="8"/>
          <rect className="gridblock" x="357" y="373" width="8" height="8"/>
          <rect className="gridblock" x="333" y="385" width="8" height="8"/>
          <rect className="gridblock" x="345" y="385" width="8" height="8"/>
          <rect className="gridblock" x="357" y="385" width="8" height="8"/>
          <rect className="gridblock" x="333" y="397" width="8" height="8"/>
          <rect className="gridblock" x="345" y="397" width="8" height="8"/>
          <rect className="gridblock" x="357" y="397" width="8" height="8"/>
        </g>
        <g id="blocks-06" fill="#2ad2c9">
          <rect className="gridblock" x="189" y="765" width="8" height="8"/>
          <rect className="gridblock" x="201" y="765" width="8" height="8"/>
          <rect className="gridblock" x="213" y="765" width="8" height="8"/>
          <rect className="gridblock" x="225" y="765" width="8" height="8"/>
          <rect className="gridblock" x="237" y="765" width="8" height="8"/>
          <rect className="gridblock" x="249" y="765" width="8" height="8"/>
          <rect className="gridblock" x="261" y="765" width="8" height="8"/>
          <rect className="gridblock" x="273" y="765" width="8" height="8"/>
          <rect className="gridblock" x="189" y="777" width="8" height="8"/>
          <rect className="gridblock" x="201" y="777" width="8" height="8"/>
          <rect className="gridblock" x="213" y="777" width="8" height="8"/>
          <rect className="gridblock" x="225" y="777" width="8" height="8"/>
          <rect className="gridblock" x="237" y="777" width="8" height="8"/>
          <rect className="gridblock" x="249" y="777" width="8" height="8"/>
          <rect className="gridblock" x="261" y="777" width="8" height="8"/>
          <rect className="gridblock" x="273" y="777" width="8" height="8"/>
          <rect className="gridblock" x="189" y="789" width="8" height="8"/>
          <rect className="gridblock" x="201" y="789" width="8" height="8"/>
          <rect className="gridblock" x="213" y="789" width="8" height="8"/>
          <rect className="gridblock" x="225" y="789" width="8" height="8"/>
          <rect className="gridblock" x="237" y="789" width="8" height="8"/>
          <rect className="gridblock" x="249" y="789" width="8" height="8"/>
          <rect className="gridblock" x="261" y="789" width="8" height="8"/>
          <rect className="gridblock" x="273" y="789" width="8" height="8"/>
          <rect className="gridblock" x="189" y="801" width="8" height="8"/>
          <rect className="gridblock" x="201" y="801" width="8" height="8"/>
          <rect className="gridblock" x="213" y="801" width="8" height="8"/>
          <rect className="gridblock" x="225" y="801" width="8" height="8"/>
          <rect className="gridblock" x="237" y="801" width="8" height="8"/>
          <rect className="gridblock" x="249" y="801" width="8" height="8"/>
          <rect className="gridblock" x="261" y="801" width="8" height="8"/>
          <rect className="gridblock" x="273" y="801" width="8" height="8"/>
        </g>
        <g id="greenBars" fill="#01a982">
          <rect id="greenBarOne" y="243" width="230" height="160"/>
          <rect id="greenBarTwo" x="1020" y="693" width="50" height="140"/>
        </g>
        <g id="_01-cyber-c" data-name="01-cyber-c" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
          <polyline id="c1" points="30 403 30 443 50 463 230 463 240 453"/>
          <polyline id="c2" points="240 173 230 163 50 163 30 183 30 243"/>
          <line id="c3" x1="80" y1="243" x2="80" y2="403"/>
        </g>
        <g id="_01-cyber-y" data-name="01-cyber-y" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
          <polyline id="y1" points="408.34 263.25 390 303 360 303 330 303 270 173 260 173 260 163"/>
          <polyline id="y2" points="460 163 460 173 450 173 439.74 195.24"/>
          <line id="y3" x1="360" y1="363" x2="360" y2="303"/>
          <line id="y4" x1="360" y1="463" x2="360" y2="433"/>
          <polyline id="y5" points="474.87 195.24 459.02 229.57 443.48 263.25"/>
          <polyline id="y6" points="380 433 380 413 380 363"/>
        </g>
        <g id="_01-cyber-b" data-name="01-cyber-b" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
          <polyline id="b1" points="600 463 510 463 490 443 490 423"/>
          <polyline id="b2" points="700 243 700 293 690 303 700 313 700 453 690 463 640 463"/>
          <polyline id="b3" points="650 163 690 163 700 173 700 193"/>
          <polyline id="b4" points="490 333 490 313 490 293 490 183 510 163 610 163 650 143"/>
          <line id="b5" x1="540" y1="233" x2="650" y2="233"/>
          <line id="b6" x1="540" y1="383" x2="650" y2="383"/>
          <polyline id="b7" points="470 423 470 383 470 333"/>
          <polyline id="b8" points="640 473 620 473 600 473"/>
          <polyline id="b9" points="750 193 750 213 750 243"/>
        </g>
        <g id="_01-cyber-e" data-name="01-cyber-e" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
          <polyline id="e1" points="880 463 920 463 930 453"/>
          <polyline id="e2" points="730 403 730 443 750 463 850 463"/>
          <polyline id="e3" points="800 163 750 163 730 183 730 343"/>
          <polyline id="e4" points="930 173 920 163 820 163"/>
          <line id="e5" x1="880" y1="303" x2="920" y2="303"/>
          <line id="e6" x1="730" y1="303" x2="790" y2="303"/>
          <polyline id="e7" points="790 353 820 353 880 353"/>
          <polyline id="e8" points="820 153 810 153 800 153"/>
          <polyline id="e9" points="850 473 860 473 880 473"/>
          <polyline id="e10" points="770 343 770 373 770 403"/>
        </g>
        <g id="_01-cyber-r" data-name="01-cyber-r" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
          <polyline id="r1" points="960 313 970 303 1150 303 1160 293 1160 263 1200 223"/>
          <polyline id="r2" points="1040 163 1150 163 1160 173 1160 203"/>
          <polyline id="r3" points="950 343 950 183 970 163 1000 163"/>
          <line id="r4" x1="950" y1="463" x2="950" y2="413"/>
          <polyline id="r5" points="1110 313 1150 313 1150 453 1160 463"/>
          <polyline id="r6" points="970 413 970 383 970 343"/>
          <polyline id="r7" points="1000 133 1020 133 1040 133"/>
        </g>
        <g id="_01-crime-c" data-name="01-crime-c" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
          <polyline id="cc1" points="30 803 30 843 50 863 230 863 240 853"/>
          <polyline id="cc2" points="160 563 50 563 30 583 30 713"/>
          <polyline id="cc3" points="240 573 230 563 210 563"/>
          <polyline id="cc4" points="50 713 50 763 50 803"/>
          <polyline id="cc5" points="210 533 190 533 160 533"/>
        </g>
        <g id="_01-crime-r" data-name="01-crime-r" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
          <polyline id="rr1" points="470 663 470 693 460 703 280 703 270 713" fill="none"/>
          <polyline id="rr2" points="340 563 460 563 470 573 470 593 530 653" fill="none"/>
          <polyline id="rr3" points="260 863 260 583 280 563 310 563" fill="none"/>
          <polyline id="rr4" points="460 833 460 853 470 863" fill="none"/>
          <polyline id="rr5" points="420 713 460 713 460 813" fill="none"/>
          <polyline id="rr6" points="480 813 480 823 480 833" fill="none"/>
          <polyline id="rr7" points="310 533 320 533 340 533" fill="#ff8d6d"/>
        </g>
        <g id="_01-crime-i" data-name="01-crime-i" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
          <line id="i1" x1="680" y1="863" x2="690" y2="863"/>
          <polyline id="i2" points="600 813 600 863 620 863"/>
          <line id="i3" x1="600" y1="623" x2="600" y2="743"/>
          <polyline id="i4" points="570 563 600 563 600 603"/>
          <line id="i5" x1="510" y1="563" x2="530" y2="563"/>
          <line id="i6" x1="610" y1="563" x2="690" y2="563"/>
          <line id="i7" x1="590" y1="863" x2="510" y2="863"/>
          <polyline id="i8" points="610 743 610 783 610 813"/>
          <polyline id="i9" points="620 603 620 613 620 623"/>
          <polyline id="i10" points="530 533 550 533 570 533"/>
          <polyline id="i11" points="620 883 650 883 680 883"/>
        </g>
        <g id="_01-crime-m" data-name="01-crime-m" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
          <polyline id="m1" points="730 703 730 583 750 563 820 563 820 603"/>
          <polyline id="m2" points="720 863 720 853 730 853 730 793"/>
          <polyline id="m3" points="920 733 920 583 900 563 830 563"/>
          <polyline id="m4" points="930 863 930 853 920 853 920 793"/>
          <polyline id="m5" points="710 793 710 743 710 703"/>
          <polyline id="m6" points="810 603 810 633 810 673"/>
          <polyline id="m7" points="900 793 900 763 900 733"/>
          <line id="m8" x1="820" y1="673" x2="820" y2="863"/>
        </g>
        <g id="_01-crime-e" data-name="01-crime-e" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
          <polyline id="ee1" points="1030 863 1140 863 1150 853"/>
          <polyline id="ee2" points="1060 563 970 563 950 583 950 843 970 863 1000 863"/>
          <polyline id="ee3" points="1150 573 1140 563 1100 563 1060 533"/>
          <line id="ee4" x1="1070" y1="703" x2="1140" y2="703"/>
          <line id="ee5" x1="950" y1="703" x2="1020" y2="703"/>
          <polyline id="ee6" points="1020 683 1050 683 1070 683"/>
          <polyline id="ee7" points="1000 883 1010 883 1030 883"/>
        </g>
        <g id="blueBars" fill="#2ad2c9">
          <rect id="bluebarThree" x="30" y="723" width="60" height="60"/>
          <rect id="bluebarOne" x="310" y="703" width="390" height="90"/>
          <rect id="bluebarTwo" x="1000" y="133" width="40" height="130"/>
        </g>
        <g id="circles" fill="#ff8d6d">
          <circle id="circleOne" cx="245" cy="108" r="15"/>
          <circle id="circleTwo" cx="85" cy="648" r="5"/>
          <circle id="circleThree" cx="1175" cy="788" r="5"/>
        </g>
        <g id="bluelines-1" fill="#2ad2c9">
          <rect className="lineblock" x="570" y="263" width="4" height="4"/>
          <rect className="lineblock" x="591" y="263" width="4" height="4"/>
          <rect className="lineblock" x="612" y="263" width="4" height="4"/>
          <rect className="lineblock" x="633" y="263" width="4" height="4"/>
          <rect className="lineblock" x="654" y="263" width="4" height="4"/>
          <rect className="lineblock" x="675" y="263" width="4" height="4"/>
          <rect className="lineblock" x="696" y="263" width="4" height="4"/>
          <rect className="lineblock" x="717" y="263" width="4" height="4"/>
          <rect className="lineblock" x="738" y="263" width="4" height="4"/>
        </g>
        <g id="bluelines-2" fill="#2ad2c9">
          <rect className="lineblock" x="955" y="490" width="4" height="4"/>
          <rect className="lineblock" x="976" y="490" width="4" height="4"/>
          <rect className="lineblock" x="997" y="490" width="4" height="4"/>
          <rect className="lineblock" x="1018" y="490" width="4" height="4"/>
          <rect className="lineblock" x="1039" y="490" width="4" height="4"/>
          <rect className="lineblock" x="1060" y="490" width="4" height="4"/>
          <rect className="lineblock" x="1081" y="490" width="4" height="4"/>
          <rect className="lineblock" x="1102" y="490" width="4" height="4"/>
          <rect className="lineblock" x="1123" y="490" width="4" height="4"/>
        </g>
        <g id="bluelines-3" fill="#2ad2c9">
          <rect className="lineblock" x="137" y="637" width="4" height="4"/>
          <rect className="lineblock" x="158" y="637" width="4" height="4"/>
          <rect className="lineblock" x="179" y="637" width="4" height="4"/>
          <rect className="lineblock" x="200" y="637" width="4" height="4"/>
          <rect className="lineblock" x="221" y="637" width="4" height="4"/>
          <rect className="lineblock" x="242" y="637" width="4" height="4"/>
          <rect className="lineblock" x="263" y="637" width="4" height="4"/>
          <rect className="lineblock" x="284" y="637" width="4" height="4"/>
          <rect className="lineblock" x="305" y="637" width="4" height="4"/>
        </g>
        <g id="triangles" fill="#2ad2c9">
          <polygon points="1165 543 1160 553 1170 553 1165 543"/>
          <polygon points="1165 54 1160 64 1170 64 1165 54"/>
          <polygon points="1165 694 1160 704 1170 704 1165 694"/>
        </g>
      </svg>
    </div>
  )
}

export default CybercrimeTitle;