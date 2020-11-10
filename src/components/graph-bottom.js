import React from "react";
import JSONData from "../data/impact-data.json";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";
import { Text } from "@visx/text";
import { PatternLines } from "@visx/pattern";

const data = JSONData.content;
const verticalMargin = 120;

// data helpers
const getItem = d => d.item;
const getDays = d => d.days;

export type BarsProps = {
  width: Number;
  height: Number;
};

export default function GraphBottom({ width, height }: BarsProps) {

  // Set the bounds
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

  return (
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
  );
}
