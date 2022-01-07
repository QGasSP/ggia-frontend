import React from "react";
import { RadialChart } from "react-vis";
import PropTypes from "prop-types";
import "../css/piechart.css";

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
        className={["storybook-piechart", `storybook-piechart--${size}`, mode,].join(" ")} {...props}
        data={[
          {
            angle: 27,
            label: "City",
          },
          {
            angle: 12,
            label: "Suburban",
          },
          {
            angle: 15,
            label: "Town",
          },
          {
            angle: 32,
            label: "Rural",
          },
        ]}
        width={150}
        height={150}
        labelsAboveChildren={true}
        labelsRadiusMultiplier={1.1}
        labelsStyle={{
          fontSize: 8,
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
