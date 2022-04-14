import { ConsumptionSummary } from "../components/ConsumptionSummary";
import React from "react";

export default {
  title: '"QgasSP/Consumption_Module/ConsumptionSummary',
  component: ConsumptionSummary,
  args: {},
};

const Template = (args) => <ConsumptionSummary {...args} />;

export const ConsumptionFinalResults = Template.bind({});
ConsumptionFinalResults.args = {
  primary: true,
  label: "ConsumptionSummary",
};
