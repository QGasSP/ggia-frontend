import React from "react";
import { DiscreteColorLegend } from "react-vis";
import PropTypes from "prop-types";
import "../css/linelegend.css";

export const LineLegendConsumption = ({colorItems ,orientation}) => {
  return (
    <div>
      <svg height={0} width={0}></svg>
      <DiscreteColorLegend
        orientation={orientation}
        width={900}
        items={colorItems}
      />
    </div>
  );
};

LineLegendConsumption.propTypes = {
  colorItems: PropTypes.array.isRequired,
  orientation:PropTypes.string.isRequired,
};
