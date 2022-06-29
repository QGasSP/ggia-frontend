import React from "react";
import { DiscreteColorLegend } from "react-vis";
import "../css/linelegend.css";

const ITEMS = [
  { title: "Bus", color: "#e69500", strokeWidth: 10 },
  { title: "Car", color: "#A6036D", strokeWidth: 10 },
  { title: "Metro", color: "#005aff", strokeWidth: 10 },
  { title: "Tram", color: " #C4D4F2", strokeWidth: 10 },
  { title: "Train", color: "#D90404", strokeWidth: 10 },
  { title: "Freight on rails", color: "#80D941", strokeWidth: 10 },
  { title: "Freight on road", color: "#595959", strokeWidth: 10 },
  { title: "Freight on water", color: "#F2CE1B", strokeWidth: 10 },
  { title: "Baseline total", color: "black" }
];

export const LineLegend = () => {
  return (
    <div>
      <DiscreteColorLegend orientation="horizontal" width={800} items={ITEMS}/>
    </div>
  );
};
