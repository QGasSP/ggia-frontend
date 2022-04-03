import { LineLegendBuildingBaselineCharts } from "../components/LineLegendBuildingBaselineCharts";
import React from "react";

export default {
  title: '"QgasSP/LineLegendBuildingBaselineCharts',
  component: LineLegendBuildingBaselineCharts,
  args: {},
};

const Template = (args) => <LineLegendBuildingBaselineCharts {...args} />;

export const DiscreteLegendBuildings = Template.bind({});
DiscreteLegendBuildings.args = {
  primary: true,
  label: "LineLegendBuildingBaselineCharts",
};
