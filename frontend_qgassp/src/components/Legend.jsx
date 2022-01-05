import React from "react";
import { DiscreteColorLegendItem } from "react-vis";
import "../css/legend.css";

/**
 * Piechart UI component
 * @return {}
 */


export const Legend = () => (
  <div>
    <DiscreteColorLegendItem
      colors={[
        "#19CDD7",
        "#DDB27C",
        "#88572C",
        "#FF991F",
        "#F15C17",
        "#223F9A",
        "#DA70BF",
        "#125C77",
        "#BF1717",
      ]}
      items={[
        "Motor coaches, buses and trolley buses",
        "Metro",
        "Passenger trains",
        "Road freight",
        "Passenger cars",
        "Tram, light train",
        "Rail (freight)",
        "Inland waterways freight",
      ]}
      orientation="vertical"
    />
  </div>
);
