import React from "react";
import { Barchart } from "../components/Barchart";

export default {
  title: "QgasSP/Barchart",
  component: Barchart,
  argTypes: {},
};

const Template = (args) => <Barchart {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Barchart",
};

export const VerticalBarchart = Template.bind({});
VerticalBarchart.args = {
  ortientation: "vertical",
  label: "Barchart",
};

export const HorizontalBarchart = Template.bind({});
HorizontalBarchart.args = {
  ortientation: "horizontal",
  label: "Barchart",
};
