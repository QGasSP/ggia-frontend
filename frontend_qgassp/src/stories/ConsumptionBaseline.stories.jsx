import { ConsumptionBaseline } from "../components/ConsumptionBaseline";
import React from "react";

export default {
  title: '"QgasSP/Consumption_Module/ConsumptionBaseline',
  component: ConsumptionBaseline,
  args: {},
};

const Template = (args) => <ConsumptionBaseline {...args} />;

export const ConsumptionStart = Template.bind({});
ConsumptionStart.args = {
  primary: true,
  label: "ConsumptionBaseline",
};
