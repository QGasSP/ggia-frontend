import React from "react";
import { BuildingsNewUnits } from "../components/BuildingsNewUnits";

export default {
  title: '"QgasSP/BuildingsNewUnits',
  component: BuildingsNewUnits,
  args: {},
};

const Template = (args) => <BuildingsNewUnits {...args} />;

export const BaselineInput = Template.bind({});
BaselineInput.args = {
  primary: true,
  label: "BuildingsNewUnits",
};
