import React from "react";
import { DiscreteColorLegend } from "react-vis";
import "../css/linelegend.css";

const ITEMS = [
  { title: "Bus", color: "#e69500", strokeWidth: 10 },
  { title: "Car", color: "#A6036D", strokeWidth: 10 },
  { title: "Metro", color: "#005aff", strokeWidth: 10 },
  { title: "Tram", color: " #C4D4F2", strokeWidth: 10 },
  { title: "Train", color: "#D90404", strokeWidth: 10 },
  { title: "Rail transport", color: "#80D941", strokeWidth: 10 },
  { title: "Road transport", color: "#595959", strokeWidth: 10 },
  { title: "Water transport", color: "#F2CE1B", strokeWidth: 10 },
];

export const LineLegend = () => {
  return (
    <div>
      <svg height={0} width={0}></svg>
      <DiscreteColorLegend orientation="horizontal" width={900} items={ITEMS}/>
    </div>
  );
};
