import React from "react";
import { DiscreteColorLegend } from "react-vis";
import "../css/linelegend.css";

const ITEMS = [
  { title: "Cropland To Forestland", color: "#ffdf43" },
  { title: "Grassland To Forestland", color: "#76918e" },
  { title: "Wetland To Forestland", color: "#ce143d" },
  { title: "Settlement To Forestland", color: "#d6e7d9" },
  { title: "Otherland To Forestland", color: "#002117" },
  { title: "Forestland To Cropland", color: "#ef7d00" },
  { title: "Grassland To Cropland", color: "#6c3b00" },
  { title: "Wetland To Cropland", color: "#00aed5" },
  { title: "Settlement To Cropland", color: "#8C0303" },
  { title: "Otherland To Cropland", color: "#A6036D" },
  { title: "Forestland To Grassland", color: "#400D01" },
  { title: "Cropland To Grassland", color: "#C4D4F2" },
  { title: "Wetland To Grassland", color: "#D90404" },
  { title: "Settlement To Grassland", color: "#80D941" },
  { title: "Otherland To Grassland", color: "#595959" },
  { title: "Forestland To Wetland", color: "#F2CE1B" },
  { title: "Cropland To Wetland", color: "#d51317" },
  { title: "Grassland To Wetland", color: "#8f2e57" },
  { title: "Land converted to peat extraction", color: "#da4f89" },
  { title: "Peatland restoration", color: "#6e438c" },
  { title: "Forestland To Settlement", color: "#164194" },
  { title: "Cropland To Settlement", color: "#2b7abf" },
  { title: "Grassland To Settlement", color: "#00aed5" },
  { title: "Wetland To Settlement", color: "#6caac7" },
  { title: "Otherland To Settlement", color: "#4a5b58" },
  { title: "Forestland To Otherland", color: "#f7cebd" },
  { title: "Cropland To Otherland", color: "#af1411" },
  { title: "Grassland To Otherland", color: "#fffdee" },
  { title: "Wetland To Otherland", color: "#371740" },
  { title: "Settlement To Otherland", color: "#620d00" },
];

export const LineLegendLandUse = () => {
  return (
    <div className="luc_legend">
      <section className="ll_sub">
        <svg height={0} width={0}></svg>
        <DiscreteColorLegend orientation="horizontal" items={ITEMS} />
      </section>
    </div>
    
  );
};
