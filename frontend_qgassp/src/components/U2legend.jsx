import React from "react";
import { DiscreteColorLegend } from "react-vis";
import "../css/u2legend.css";

const ITEMS = [
  {
    title: "Population baseline",
    color: "rgb(61, 88, 163)",
    strokeStyle: "dashed",
  },
  { title: "Population with new resident", color: "rgb(239, 125, 0)" },
];

export const U2legend = () => {
  return (
    <div>
      <svg height={0} width={0}></svg>
      <DiscreteColorLegend orientation="horizontal" width={900} items={ITEMS} />
    </div>
  );
};
