import React from "react";
import JSONData from "../data/impact-data.json";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";
import { Text } from "@visx/text";

const data = JSONData.content;
const verticalMargin = 120;

// data helpers
const getItem = d => d.item;
const getPercentage = d => d.percentage;

export type BarsProps = {
  width: Number;
  height: Number;
};

export default function BarGraph({ width, height }: BarsProps) {

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
    domain: [0, Math.max(...data.map(getPercentage))],
  });

  return (
    <svg width={width} height={height}>
      <Group top={verticalMargin / 2}>
        {data.map(d => {
          const item = getItem(d);
          const percentage = getPercentage(d) + "%";
          const barHeight = yMax - (yScale(getPercentage(d)) ?? 0);
          const barWidth = xScale.bandwidth();
          const barX = xScale(item);
          const barY = yMax - barHeight;
          const textYPosition = height - 90;
          const percentagePosition = height - barHeight - 150;
          const textWidth = 140;
          const labelText = "% of companies impacted over a four-week span";

          return (
            <>
              <Bar
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="rgba(42, 210, 201, 1)"
              />
              <Text
                x={barX + barWidth/2}
                y={percentagePosition}
                dx={8}
                textAnchor="middle"
                verticalAnchor="middle"
                fill="rgba(255, 255, 255, 1)"
                fontFamily="HPESimpleWeb-Regular"
                fontSize="1.5em"
              >{percentage}</Text>
              <Text
                x={barX + barWidth/2}
                y={textYPosition}
                textAnchor="middle"
                verticalAnchor="middle"
                fill="rgba(255, 255, 255, 1)"
                fontFamily="MetricHPE-Web-Regular"
                fontSize="1.1em"
                width={textWidth}
              >{item}</Text>
              <Text
                x={width/2}
                y={height/6}
                width={220}
                fontFamily="MetricHPE-Web-Regular"
                fontSize="1.3em"
                fill="rgba(42, 210, 201, 1)"
              >{labelText}</Text>
            </>
            );
          })}
      </Group>
    </svg>
  );
}
