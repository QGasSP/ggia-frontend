import React from "react";
import {BuildingsPolicies} from "../components/BuildingsPolicies";

export default {
  title: '"QgasSP/BuildingsPolicies',
  component: BuildingsPolicies,
  args: {},
};

const Template = (args) => <BuildingsPolicies {...args} />;

export const PolicyInput = Template.bind({});
PolicyInput.args = {
  primary: true,
  label: "BuildingsPolicies",
};
