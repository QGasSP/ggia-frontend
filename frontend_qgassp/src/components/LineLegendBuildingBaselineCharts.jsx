import React from "react";
import { DiscreteColorLegend } from "react-vis";
import "../css/linelegend.css";

const ITEMS = [
  { title: "Apartment", color: "#ffdf43" },
  { title: "Terraced", color: "#76918e" },
  { title: "Semi-detached", color: "#ce143d" },
  { title: "Detached", color: "#d6e7d9" },
  { title: "Retail", color: "#002117" },
  { title: "Health", color: "#ef7d00" },
  { title: "Hospitality", color: "#6c3b00" },
  { title: "Offices", color: "#00aed5" },
  { title: "Industrial", color: "#8C0303" },
  { title: "Warehouses", color: "#A6036D" },
];

export const LineLegendBuildingBaselineCharts = () => {
  return (
    <div className="luc_legend">
      <section className="ll_sub">
        <svg height={0} width={0}></svg>
        <DiscreteColorLegend orientation="horizontal" items={ITEMS} />
      </section>
    </div>
    
  );
};
