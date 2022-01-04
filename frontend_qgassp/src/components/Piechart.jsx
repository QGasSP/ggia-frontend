import React from "react";
import { RadialChart } from "react-vis";
import "../css/piechart.css";

/**
 * Piechart UI component
 * @return {}
 */

export const Piechart = () => (
  <div>
    <RadialChart
      data={[
        {
          angle: 27,
          label: 'City'
        },
        {
          angle: 12,
          label: 'Suburban'
        },
        {
          angle: 15,
          label: 'Town'
        },
        {
          angle: 32,
          label: 'Rural'
        },
       
      ]}
      width={150}
      height={150}
      labelsRadiusMultiplier={1.1}
      labelsStyle={{
        fontSize: 8
      }}
      showLabels
    />
  </div>
);
