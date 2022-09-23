import React from "react";
import { DiscreteColorLegend } from "react-vis";

/**
 * Legend for various charts in application
 * @return {}
 */

const itemLabels = [
  { title: "Bus", color: "#8C0303", strokeWidth:10 },
  { title: "Metro", color: "#400D01", strokeWidth:10 },
  { title: "Train", color: "#D90404", strokeWidth:10 },
  { title: "Road transport", color: "#595959", strokeWidth:10 },
  { title: "Car", color: "#A6036D", strokeWidth:10 },
  { title: "Tram", color: " #C4D4F2", strokeWidth:10 },
  { title: "Rail transport", color: "#80D941", strokeWidth:10 },
  { title: "Water transport", color: "#F2CE1B", strokeWidth:10 },
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
