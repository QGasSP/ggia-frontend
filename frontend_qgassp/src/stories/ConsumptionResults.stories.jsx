import { ConsumptionResults } from "../components/ConsumptionResults";
import React from "react";

export default {
  title: '"QgasSP/Consumption_Module/ConsumptionResults',
  component: ConsumptionResults,
  args: {},
};

const Template = (args) => <ConsumptionResults {...args} />;

export const ConsumptionBasedResults = Template.bind({});
ConsumptionBasedResults.args = {
  primary: true,
  label: "ConsumptionResults",
};
