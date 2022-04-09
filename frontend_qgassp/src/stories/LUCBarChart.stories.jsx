import React from "react";
import { LUCBarChart } from "../components/LUCBarChart";

export default {
  title: '"QgasSP/LUCBarChart',
  component: LUCBarChart,
  argTypes: {},
};

const Template = (args) => <LUCBarChart {...args} />;

export const LUCChart = Template.bind({});
LUCChart.args = {
  primary: true,
  label: "LUCBarChart",
};
