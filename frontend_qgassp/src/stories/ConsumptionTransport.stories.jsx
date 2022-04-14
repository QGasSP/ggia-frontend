import { ConsumptionTransport } from "../components/ConsumptionTransport";
import React from "react";

export default {
  title: '"QgasSP/Consumption_Module/ConsumptionTransport',
  component: ConsumptionTransport,
  args: {},
};

const Template = (args) => <ConsumptionTransport {...args} />;

export const ConsumptionBasedTransport = Template.bind({});
ConsumptionBasedTransport.args = {
  primary: true,
  label: "ConsumptionTransport",
};
