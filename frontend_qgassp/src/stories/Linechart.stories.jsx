import React from "react";
import { Linechart } from "../components/Linechart";

export default {
  title: "QgasSP/Linechart",
  component: Linechart,
  argTypes: {},
};

const Template = (args) => <Linechart {...args} />;

export const LineLarge = Template.bind({});
LineLarge.args = {
  primary: true,
  label: "Linechart",
};
