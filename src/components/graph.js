import React from "react";
import { letterFrequency } from "@visx/mock-data"
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";

const data = letterFrequency.slice(5);
const verticalMargin = 120;

// data helpers
const getLetter = d => d.letter;
const getLetterFrequency = d => +d.frequency * 100;

export type BarsProps = {
  width: Number;
  height: Number;
};

export default function BarGraph({ width, height }: BarsProps) {
  // Set the bounds
  const xMax = width;
  const yMax = height - verticalMargin;

  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: data.map(getLetter),
    padding: 0.4,
  });

  const yScale = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(getLetterFrequency))],
  });
  
  return (
    <svg width={width} height={height}>
      <Group top={verticalMargin / 2}>
        {data.map(d => {
          const letter = getLetter(d);
          const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0);
          const barWidth = xScale.bandwidth();
          const barX = xScale(letter);
          const barY = yMax - barHeight;
          return (
            <Bar
            key={`bar-${letter}`}
            x={barX}
            y={barY}
            width={barWidth}
            height={barHeight}
            fill="rgba(42, 210, 201, 1)"
            />
            );
          })}
      </Group>
    </svg>
  );
}
