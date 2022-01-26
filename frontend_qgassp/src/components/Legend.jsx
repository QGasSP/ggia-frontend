import React from "react";
import { DiscreteColorLegend } from "react-vis";
import "../css/legend.css";

/**
 * Legend for various charts in application
 * @return {}
 */

const itemLabels = [
  { title: "Bus", color: "#8C0303" },
  { title: "Metro", color: "#400D01" },
  { title: "Train", color: "#D90404" },
  { title: "Road transport", color: "#595959" },
  { title: "Car", color: "#A6036D" },
  { title: "Tram", color: " #C4D4F2" },
  { title: "Rail transport", color: "#80D941" },
  { title: "Water transport", color: "#F2CE1B" },
];

export const Legend = () => {
  return (
    <DiscreteColorLegend
      items={itemLabels}
      orientation="vertical"
      strokeWidth="10px"
    />
  );
};
