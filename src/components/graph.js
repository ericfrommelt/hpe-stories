import React from "react";
import { letterFrequency } from "@visx/mock-data"
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";

const data = letterFrequency;
const width = 1000;
const height = 500;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// data helpers
const x = d => d.letter;
const y = d => +d.frequency * 100;

// Scale graph by data
const xScale = scaleBand({
  range: [0, xMax],
  round: true,
  domain: data.map(x),
  padding: 0.4,
});

const yScale = scaleLinear({
  range: [yMax, 0],
  round: true,
  domain: [0, Math.max(...data.map(y))],
})

// Compose the scale and accessor functions to get the point functions
const compose = (scale, accessor) => data => scale(accessor(data));
const xPoint = compose(xScale, x);
const yPoint = compose(yScale, y);

function BarGraph(props) {
  return (
    <svg width={width} height={height}>
      { data.map((d, i) => {
        const barHeight = yMax - yPoint(d);
          return (
            <Group key={`bar-${i}`}>
              <Bar
                x={xPoint(d)}
                y={yMax - barHeight}
                height={barHeight}
                width={xScale.bandwidth()}
                fill="#2ad2c9"
              />
            </Group>
          );
        })}
    </svg>
  );
}

export default BarGraph;