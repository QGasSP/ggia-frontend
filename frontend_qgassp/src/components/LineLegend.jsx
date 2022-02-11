import React from "react";
import { DiscreteColorLegend } from "react-vis";
import "../css/linelegend.css";

const ITEMS = [
  { title: "Bus", color: "#8C0303" },
  { title: "Car", color: "#A6036D" },
  { title: "Metro", color: "#400D01" },
  { title: "Tram", color: " #C4D4F2" },
  { title: "Train", color: "#D90404" },
  { title: "Rail transport", color: "#80D941" },
  { title: "Road transport", color: "#595959" },
  { title: "Water transport", color: "#F2CE1B" },
];

export const LineLegend = () => {
  return (
    <div>
      <svg height={0} width={0}></svg>
      <DiscreteColorLegend orientation="horizontal" width={900} items={ITEMS} />
    </div>
  );
};
