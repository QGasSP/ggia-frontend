import React from "react";
import { Legend } from "../components/Legend";

export default {
  title: "QgasSP/Legend",
  component: Legend,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Legend {...args} />;

export const BLegend = Template.bind({});
BLegend.args = {
  primary: true,
  label: "Legend",
};
