import React from "react";
import "../css/linechart.css";

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from "react-vis";

/**
 * Linechart UI component
 * @return {}
 */

export const Linechart = () => {
  return (
    <div>
      <XYPlot
        width={900}
        height={400}
        yDomain={[0, 100000]}
        xDomain={[2021, 2050]}
      >
        <HorizontalGridLines style={{ stroke: "#B7E9ED" }} />
        <VerticalGridLines style={{ stroke: "#B7E9ED" }} />
        <XAxis
          style={{
            line: { stroke: "#ADDDE1" },
            ticks: { stroke: "#ADDDE1" },
            text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
          }}
        />
        <YAxis />
        <LineSeries
          curve={null}
          data={[
            { x: 2021, y: 15000 },
            { x: 2022, y: 16000 },
            { x: 2023, y: 17000 },
            { x: 2024, y: 18000 },
            { x: 2025, y: 19000 },
            { x: 2026, y: 20000 },
            { x: 2027, y: 22000 },
            { x: 2028, y: 44000 },
            { x: 2029, y: 46000 },
            { x: 2030, y: 50000 },
            { x: 2031, y: 16000 },
            { x: 2032, y: 16000 },
            { x: 2033, y: 16000 },
            { x: 2034, y: 16000 },
            { x: 2035, y: 16000 },
            { x: 2036, y: 16000 },
            { x: 2037, y: 16000 },
            { x: 2038, y: 16000 },
            { x: 2039, y: 16000 },
            { x: 2040, y: 16000 },
            { x: 2041, y: 16000 },
            { x: 2042, y: 16000 },
            { x: 2043, y: 16000 },
            { x: 2044, y: 16000 },
            { x: 2045, y: 16000 },
            { x: 2046, y: 16000 },
            { x: 2047, y: 16000 },
            { x: 2048, y: 16000 },
            { x: 2049, y: 16000 },
            { x: 2050, y: 16000 },
          ]}
          opacity={0.5}
          stroke="rgba(21,75,230,1)"
          strokeDasharray=""
          strokeStyle="solid"
          strokeWidth="1.5"
          style={{}}
        />
        <LineSeries
          curve={null}
          data={[
            { x: 2021, y: 15000 },
            { x: 2022, y: 15000 },
            { x: 2023, y: 15000 },
            { x: 2024, y: 15000 },
            { x: 2025, y: 15000 },
            { x: 2026, y: 15000 },
            { x: 2027, y: 15000 },
            { x: 2028, y: 15000 },
            { x: 2029, y: 15000 },
            { x: 2030, y: 15000 },
            { x: 2031, y: 15000 },
            { x: 2032, y: 15000 },
            { x: 2033, y: 15000 },
            { x: 2034, y: 15000 },
            { x: 2035, y: 15000 },
            { x: 2036, y: 15000 },
            { x: 2037, y: 15000 },
            { x: 2038, y: 15000 },
            { x: 2039, y: 15000 },
            { x: 2040, y: 15000 },
            { x: 2041, y: 15000 },
            { x: 2042, y: 15000 },
            { x: 2043, y: 15000 },
            { x: 2044, y: 15000 },
            { x: 2045, y: 15000 },
            { x: 2046, y: 15000 },
            { x: 2047, y: 15000 },
            { x: 2048, y: 15000 },
            { x: 2049, y: 15000 },
            { x: 2050, y: 15000 },
          ]}
          opacity={0.5}
          stroke="rgba(102,116,155,1)"
          strokeDasharray=""
          strokeStyle="dashed"
          strokeWidth="1.5"
          style={{}}
        />
      </XYPlot>
    </div>
  );
};
