import React from "react";
import { RadialChart } from "react-vis";
import PropTypes from "prop-types";
// import "../css/piechart.css";

/**
 * Piechart UI component
 * @return {}
 */

export const Piechart = ({ primary, size, ...props }) => {
  const mode = primary
    ? "storybook-piechart--small"
    : "storybook-piechart--large";
  return (
    <div>
      <RadialChart
        type="piechart"
        className={[
          "storybook-chart",
          `storybook-piechart--${size}`,
          mode,
        ].join(" ")}
        {...props}
        data={[
          {
            angle: 27,
            label: "City",
            color: "#D90404",
          },
          {
            angle: 12,
            label: "Suburban",
            color: "#A69886",
          },
          {
            angle: 15,
            label: "Town",
            color: "#38D0F2",
          },
          {
            angle: 32,
            label: "Rural",
            color: "#F2E205",
          },
          {
            angle: 17,
            label: "Metropolitan",
            color: "#D9B1A3",
          },
        ]}
        width={200}
        height={200}
        colorType="literal"
        labelsAboveChildren={true}
        labelsRadiusMultiplier={0.8}
        labelsStyle={{
          fontSize: 8,
          // fontStyle: "bold",
          fontWeight: 900,
          // fill: "#FFF"
        }}
        showLabels
      />
    </div>
  );
};

Piechart.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the piechart be?
   */
  size: PropTypes.oneOf(["small", "large"]),
};

Piechart.defaultProps = {
  primary: false,
  size: "small",
};
