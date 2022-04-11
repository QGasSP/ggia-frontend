import { Legend } from "../components/Legend";
import React from "react";

export default {
  title: '"QgasSP/Legend',
  component: Legend,
  args: {},
};

const Template = (args) => <Legend {...args} />;

export const DiscreteLegend = Template.bind({});
DiscreteLegend.args = {
  primary: true,
  label: "Legend",
};
