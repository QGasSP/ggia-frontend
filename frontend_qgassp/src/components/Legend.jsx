import React from "react";
import { DiscreteColorLegend } from "react-vis";
import "../css/legend.css";

/**
 * Legend for various charts in application
 * @return {}
 */

const itemLabels = [
  { title: "Buses", color: "#8C0303" },
  { title: "Metro", color: "#400D01" },
  { title: "Passenger trains", color: "#D90404" },
  { title: "Road freight", color: "#F21905" },
  { title: "Passenger cars", color: "#A6036D" },
  { title: "Tram light train", color: "#03A688" },
  { title: "Rail (freight)", color: "#80D941" },
  { title: "Inland waterways freight", color: "#F2CE1B" },
];

export const Legend = () => {
  return (
    <DiscreteColorLegend
      items={itemLabels}
      orientation="vertical"
      strokeWidth="3px"
    />
  );
};
