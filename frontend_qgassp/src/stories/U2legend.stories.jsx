import { U2legend } from "../components/U2legend";
import React from "react";

export default {
  title: '"QgasSP/Transport_module/U2legend',
  component: U2legend,
  args: {},
};

const Template = (args) => <U2legend {...args} />;

export const DiscreteLegend = Template.bind({});
DiscreteLegend.args = {
  primary: true,
  label: "U2legend",
};
