import React from "react";
import { DiscreteColorLegend } from "react-vis";
import "../css/linelegend.css";

const ITEMS = [
  {
    title: "Residents/baseline",
    color: "rgba(102,116,155,1)",
    strokeStyle: "dashed",
  },
  { title: "Total", color: "rgba(21,75,230,1)" },
];

export const LineLegend = () => {
  return (
    <div>
      <svg height={0} width={0}></svg>
      <DiscreteColorLegend orientation="horizontal" width={300} items={ITEMS} />
    </div>
  );
};
