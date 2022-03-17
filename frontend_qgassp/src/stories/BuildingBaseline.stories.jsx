import React from "react";
import {BuildingBaseline} from "../components/BuildingBaseline";

export default {
  title: '"QgasSP/BuildingBaseline',
  component: BuildingBaseline,
  args: {},
};

const Template = (args) => <BuildingBaseline {...args} />;

export const BaselineInput = Template.bind({});
BaselineInput.args = {
  primary: true,
  label: "BuildingBaseline",
};
