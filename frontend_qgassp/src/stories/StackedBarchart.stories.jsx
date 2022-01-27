import React from "react";
import { StackedBarchart } from "../components/StackedBarchart";

export default {
  title: "QgasSP/StackedBarchart",
  component: StackedBarchart,
  argTypes: {},
};

const Template = (args) => <StackedBarchart {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "StackedBarchart",
};

export const VerticalBarchart = Template.bind({});
VerticalBarchart.args = {
  ortientation: "vertical",
  label: "StackedBarchart",
};

export const HorizontalBarchart = Template.bind({});
HorizontalBarchart.args = {
  ortientation: "horizontal",
  label: "StackedBarchart",
};
