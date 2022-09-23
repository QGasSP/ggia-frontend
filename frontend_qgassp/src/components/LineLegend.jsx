import { Box } from "@mui/material";
import React from "react";
import { DiscreteColorLegend } from "react-vis";
import "../css/linelegend.css";

const ITEMS = [
  { title: "Bus", color: "#e69500", strokeWidth: 10 },
  { title: "Car", color: "#A6036D", strokeWidth: 10 },
  { title: "Metro", color: "#005aff", strokeWidth: 10 },
  { title: "Tram", color: " #C4D4F2", strokeWidth: 10 },
  { title: "Train", color: "#FFB6C1", strokeWidth: 10 },
  { title: "Freight on rails", color: "#80D941", strokeWidth: 10 },
  { title: "Freight on road", color: "#595959", strokeWidth: 10 },
  { title: "Freight on water", color: "#F2CE1B", strokeWidth: 10 },
  { title: "Baseline total", color: "black" }
];

export const LineLegend = () => {
  return (
    <>
      <DiscreteColorLegend orientation="horizontal" items={ITEMS}/>
    </>
  );
};

const itemsForGenerateReport = [
  { title: "Buildings", color:"#3d58a3", strokeWidth: 10 },
  { title: "Baseline", color: "#cc7000", strokeWidth: 10 },
  { title: "Transport", color: "#2e8b57", strokeWidth: 10 },
  { title: "LUC emissions", color: "#F6BE00", strokeWidth: 10 },
  { title: "LUC removal", color: "#ACD5F3", strokeWidth: 10 }
]

export const LegendTerritorialApproach = () => {
  return (
    <>
      <Box m={2}>
        <DiscreteColorLegend orientation="horizontal" items={itemsForGenerateReport}/>
      </Box>
    </>
  );
};
