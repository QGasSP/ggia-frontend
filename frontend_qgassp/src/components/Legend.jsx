import React from "react";
import { DiscreteColorLegend } from "react-vis";
import "../css/legend.css";

/**
 * Legend for various charts in application
 * @return {}
 */

const itemLabels = [
  { title: "Motor coaches, buses and trolley buses" },
  { title: "Metro" },
  { title: "Passenger trains" },
  { title: "Road freight" },
  { title: "Passenger cars" },
  { title: "Tram light train" },
  { title: "Rail (freight)" },
  { title: "Inland waterways freight" },
];

const Legend = () => {
  return <DiscreteColorLegend items={itemLabels} orientation="vertical" />;
};

export default Legend;
