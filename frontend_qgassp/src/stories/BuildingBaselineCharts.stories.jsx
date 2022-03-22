import React from "react";
import {BuildingBaselineCharts} from "../components/BuildingBaselineCharts";

export default {
  title: '"QgasSP/BuildingBaselineCharts',
  component: BuildingBaselineCharts,
  args: {},
};

const Template = (args) => <BuildingBaselineCharts {...args} />;

export const BaselineCharts = Template.bind({});
BaselineCharts.args = {
  primary: true,
  label: "BuildingBaselineCharts",
};
