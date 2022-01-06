import React from "react";
import {
  XYPlot,
  VerticalGridLines,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
} from "react-vis";
import "../css/barchart.css";

/**
 * Barchart UI component
 * @return {}
 */
const dataList = [
  { y: 0.044888566666666664, x: "Buses" },
  { y: 0.0001947, x: "Metro" },
  { y: 0.006142934963868816, x: "Passenger trains" },
  { y: 0.1345, x: "Road freight" },
  { y: 1.430907142857143, x: "Passenger cars" },
  { y: 0.0027191999999999997, x: "Tram, light train" },
  { y: 0.1717, x: "Rail freight" },
  { y: 0.000667, x: "Inland waterways freight" },
];

export const Barchart = () => (
  <div>
    <XYPlot xType="ordinal" width={1000} height={312} xDistance={200}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <VerticalBarSeries className="BaselineBarchart" data={dataList} />
      <XAxis />
      <YAxis />
    </XYPlot>
  </div>
);
