import React from "react";
import { DiscreteColorLegend } from "react-vis";
import "../css/u2legend.css";

const ITEMS = [
  {
    title: "Population baseline",
    color: "rgba(102,116,155,1)",
    strokeStyle: "dashed",
  },
  { title: "Population with new resident", color: "rgba(21,75,230,1)" },
];

export const U2legend = () => {
  return (
    <div>
      <svg height={0} width={0}></svg>
      <DiscreteColorLegend orientation="horizontal" width={900} items={ITEMS} />
    </div>
  );
};
