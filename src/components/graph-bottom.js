import React, { useRef, useEffect } from "react";
import JSONData from "../data/impact-data.json";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";
import { Text } from "@visx/text";
import { PatternLines } from "@visx/pattern";
import { gsap } from "gsap";
import { TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = JSONData.content;
const verticalMargin = 120;

// data helpers
const getItem = d => d.item;
const getDays = d => d.days;

export type BarsProps = {
  width: Number;
  height: Number;
};

const GraphBottom = ({ width, height }: BarsProps) => {
  const svgWrapper = useRef(null);
  const xMax = width;
  const yMax = height - verticalMargin;

  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: data.map(getItem),
    padding: 0.8,
  });

  const yScale = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(getDays))],
  });

  useEffect(() => {
    const master = gsap.timeline();

    gsap.set(".day-number", {opacity: 0});
    gsap.set(".day-type", {opacity: 0});

    function timelineGraphBottom() {
      const tl = new TimelineLite({
        scrollTrigger: {
          trigger: ".graphWrapper",
          start: "top center",
          end: "top 100px",
          scrub: 2
        }
      });
      tl.from(".bar-bottom", {scaleY: 0, transformOrigin: '100% 0%', stagger: .3, ease: "barEase"})
        .to(".day-number", {opacity: 1, stagger: .3}, "-=2.2")
        .to(".day-type", {opacity: 1, stagger: .3}, "-=2.1");
      return tl;
    }

    master.add(timelineGraphBottom());
  }, []);

  return (
    <div ref={svgWrapper}>
      <svg width={width} height={height}>
        <Group>
          {data.map(d => {

            const item = getItem(d);
            const day = getDays(d);
            const dayType = "Days";
            const barHeight = yMax - (yScale(getDays(d)) ?? 0);
            const barWidth = xScale.bandwidth();
            const barX = xScale(item);
            const textYPosition = 0 + barHeight;
            const labelText = "Average time it took to recover";
            
            return (
              <>
                <PatternLines
                  id="lines"
                  height={5}
                  width={5}
                  stroke="rgba(255, 141, 109)"
                  strokeWidth={1}
                  orientation={['horizontal']}
                />
                <Bar
                  x={barX}
                  y={0}
                  width={barWidth}
                  height={barHeight}
                  fill="url('#lines')"
                  className="bar-bottom"
                />
                <Text
                  x={barX + barWidth/2}
                  y={textYPosition}
                  dy={28}
                  textAnchor="middle"
                  verticalAnchor="middle"
                  fill="rgba(255, 255, 255, 1)"
                  fontFamily="HPESimpleWeb-Regular"
                  fontSize="1.5em"
                  lineHeight="2em"
                  className="day-number"
                >{day}</Text>
                <Text
                  x={barX + barWidth/2}
                  y={textYPosition}
                  dy={64}
                  textAnchor="middle"
                  verticalAnchor="middle"
                  fill="rgba(255, 255, 255, 1)"
                  fontFamily="HPESimpleWeb-Regular"
                  fontSize="1.5em"
                  lineHeight="2em"
                  className="day-type"
                >{dayType}</Text>
                <Text
                  x={width/6}
                  y={height-200}
                  width={140}
                  fontFamily="MetricHPE-Web-Regular"
                  fontSize="1.3em"
                  fill="rgba(255, 141, 109, 1)"
                >{labelText}</Text>
              </>
              );
            })}
        </Group>
      </svg>
    </div>
  );
}

export default GraphBottom;