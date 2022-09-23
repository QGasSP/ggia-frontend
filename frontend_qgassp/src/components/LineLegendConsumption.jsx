import React from "react";
import { DiscreteColorLegend } from "react-vis";
import PropTypes from "prop-types";
import "../css/linelegend.css";

export const LineLegendConsumption = ({ colorItems, orientation }) => {
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
  orientation: PropTypes.string.isRequired,
};

const itemsPolicyHousingEnergy = [
  {title: "Policy housing energy", color: "#3d58a3",  strokeWidth: 10 },
  {title: "Policy housing other", color: "ef7d00",  strokeWidth: 10 },
  {title: "Policy transport fuels", color: "#95c11f",  strokeWidth: 10 },
  {title: "Policy transport other", color: "#ce143d",  strokeWidth: 10 },
  {title: "Policy air travel", color: "#845f9e",  strokeWidth: 10 },
  {title: "Policy tangible goods", color: "#e1719a",  strokeWidth: 10 },
  {title: "Baseline total emissions", color: "#000000"}
]

export const LegendConsumptionResults = () => {
  return (
    <>
      <DiscreteColorLegend orientation="horizontal" items={itemsPolicyHousingEnergy}/>
    </>
  );
};
