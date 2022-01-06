import React from "react";
import { BaselinePiechart } from "../components/BaselinePiechart";

export default {
  title: "QgasSP/BaselinePiechart",
  component: BaselinePiechart,
  argTypes: {},
};

const Template = (args) => <BaselinePiechart {...args} />;

export const RadialLarge = Template.bind({});
RadialLarge.args = {
  primary: true,
  label: "BaselinePiechart",
};
