import React from "react";
import { BaselineBarchart } from "../components/BaselineBarchart";

export default {
  title: "QgasSP/BaselineBarchart",
  component: BaselineBarchart,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
};

const Template = (args) => <BaselineBarchart {...args} />;

export const PlannerBar = Template.bind({});
PlannerBar.args = {
  primary: true,
  label: "BaselineBarchart",
};
