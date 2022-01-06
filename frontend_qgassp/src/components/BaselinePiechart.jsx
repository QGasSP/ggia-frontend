import React from "react";
import { RadialChart } from "react-vis";
import "../css/baselinepiechart.css";

/**
 * Piechart UI component
 * @return {}
 */

export const BaselinePiechart = () => (
  <div>
    <RadialChart
      data={[
        {
          angle: 9.02,
          label: "Motor coaches, buses and trolley buses",
        },
        {
          angle: 0.04,
          label: "Metro",
        },
        {
          angle: 1.23,
          label: "Passenger trains",
        },
        {
          angle: 27.02,
          label: "Road freight",
        },
        {
          angle: 287.5,
          label: "Passenger cars",
        },
        {
          angle: 0.55,
          label: "Tram, light train",
        },
        {
          angle: 34.5,
          label: "Rail (freight)",
        },
        {
          angle: 0.13,
          label: "Inland waterways freight",
        },
      ]}
      width={350}
      height={350}
      labelsAboveChildren={true}
      labelsRadiusMultiplier={1.1}
      labelsStyle={{
        fontSize: 8,
      }}
      showLabels
    />
  </div>
);
