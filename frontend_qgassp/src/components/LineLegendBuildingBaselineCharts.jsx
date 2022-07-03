import React from "react";
import { DiscreteColorLegend } from "react-vis";
import "../css/linelegend.css";

const ITEMS = [
  { title: "Apartment", color: "#ffdf43", strokeWidth: 10  },
  { title: "Terraced", color: "#76918e", strokeWidth: 10  },
  { title: "Semi-detached", color: "#ce143d", strokeWidth: 10 },
  { title: "Detached", color: "#d6e7d9", strokeWidth: 10 },
  { title: "Retail", color: "#002117", strokeWidth: 10 },
  { title: "Health", color: "#ef7d00", strokeWidth: 10 },
  { title: "Hospitality", color: "#6c3b00", strokeWidth: 10 },
  { title: "Offices", color: "#00aed5", strokeWidth: 10 },
  { title: "Industrial", color: "#8C0303", strokeWidth: 10 },
  { title: "Warehouses", color: "#A6036D", strokeWidth: 10 },
];

export const LineLegendBuildingBaselineCharts = () => {
  return (
    <>
        <DiscreteColorLegend orientation="horizontal" items={ITEMS} />
    </>
  );
};
