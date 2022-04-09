import React from "react";
import { BuildingsNewUnits } from "../components/BuildingsNewUnits";

export default {
  title: '"QgasSP/BuildingsNewUnits',
  component: BuildingsNewUnits,
  args: {},
};

const Template = (args) => <BuildingsNewUnits {...args} />;

export const NewUnitsInput = Template.bind({});
NewUnitsInput.args = {
  primary: true,
  label: "BuildingsNewUnits",
};
