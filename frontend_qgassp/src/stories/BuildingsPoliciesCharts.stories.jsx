import React from "react";
import {BuildingsPoliciesCharts} from "../components/BuildingsPoliciesCharts";

export default {
  title: '"QgasSP/BuildingsPoliciesCharts',
  component: BuildingsPoliciesCharts,
  args: {},
};

const Template = (args) => <BuildingsPoliciesCharts {...args} />;

export const PoliciesCharts = Template.bind({});
PoliciesCharts.args = {
  primary: true,
  label: "BuildingsPoliciesCharts",
};
