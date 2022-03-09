import React from "react";
import { DiscreteColorLegend } from "react-vis";
import "../css/linelegend.css";

const ITEMS = [
  { title: "Cropland To Forestland", color: "#ffdf43" },
  { title: "Grassland To Forestland", color: "#76918e" },
  { title: "wetlandToForestland", color: "#ce143d" },
  { title: "settlementToForestland", color: "#d6e7d9" },
  { title: "otherlandToForestland", color: "#002117" },
  { title: "forestlandToCropland", color: "#ef7d00" },
  { title: "grasslandToCropland", color: "#6c3b00" },
  { title: "wetlandToCropland", color: "#00aed5" },
  { title: "settlementToCropland", color: "#8C0303" },
  { title: "otherlandToCropland", color: "#A6036D" },
  { title: "forestlandToGrassland", color: "#400D01" },
  { title: "croplandToGrassland", color: "#C4D4F2" },
  { title: "wetlandToGrassland", color: "#D90404" },
  { title: "settlementToGrassland", color: "#80D941" },
  { title: "otherlandToGrassland", color: "#595959" },
];

const ITEMS2 = [
  { title: "forestlandToWetland", color: "#F2CE1B" },
  { title: "croplandToWetland", color: "#d51317" },
  { title: "croplandToWetland", color: "#8f2e57" },
  { title: "croplandToWetland", color: "#da4f89" },
  { title: "croplandToWetland", color: "#6e438c" },
  { title: "croplandToWetland", color: "#164194" },
  { title: "croplandToWetland", color: "#2b7abf" },
  { title: "croplandToWetland", color: "#00aed5" },
  { title: "croplandToWetland", color: "#6caac7" },
  { title: "croplandToWetland", color: "#4a5b58" },
  { title: "croplandToWetland", color: "#f7cebd" },
  { title: "croplandToWetland", color: "#fffdee" },
  { title: "croplandToWetland", color: "#371740" },
  { title: "croplandToWetland", color: "#620d00" },
  { title: "croplandToWetland", color: "#af1411" },
];

export const LineLegendLandUse = () => {
  return (
    <div className="luc_legend">
      <section className="ll_sub">
        <svg height={0} width={0}></svg>
        <DiscreteColorLegend orientation="vertical" items={ITEMS} />
      </section>
      <section className="ll_sub">
        <svg height={0} width={0}></svg>
        <DiscreteColorLegend orientation="vertical" items={ITEMS2} />
      </section>
    </div>
    
  );
};
