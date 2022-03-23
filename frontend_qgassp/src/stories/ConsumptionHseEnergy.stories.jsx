import { ConsumptionHseEnergy } from "../components/ConsumptionHseEnergy";
import React from "react";

export default {
  title: '"QgasSP/ConsumptionHseEnergy',
  component: ConsumptionHseEnergy,
  args: {},
};

const Template = (args) => <ConsumptionHseEnergy {...args} />;

export const ConsumptionEnergy = Template.bind({});
ConsumptionEnergy.args = {
  primary: true,
  label: "ConsumptionHseEnergy",
};
