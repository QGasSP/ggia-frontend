import React from "react";
import { DiscreteColorLegend } from "react-vis";
import "../css/linelegend.css";

// const ITEMS = [
//   {
//     title: "Residents/baseline",
//     color: "rgba(102,116,155,1)",
//     strokeStyle: "dashed",
//   },
//   { title: "Total", color: "rgba(21,75,230,1)" },
// ];

const ITEMS = [
  { title: "Settlements", color: "#8C0303" },
  { title: "Cropland", color: "#A6036D" },
  { title: "Grassland", color: "#400D01" },
  { title: "Forest Land", color: " #C4D4F2" },
  { title: "Wetland", color: "#D90404" },
  { title: "Other Land", color: "#80D941" },
];


export const LineLegendLandUse = () => {
  return (
    <div>
      <svg height={0} width={0}></svg>
      <DiscreteColorLegend orientation="horizontal" width={900} items={ITEMS} />
    </div>
  );
};
