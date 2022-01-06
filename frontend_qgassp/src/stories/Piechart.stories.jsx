import React from "react";
import { Piechart } from "../components/Piechart";

export default {
  title: "QgasSP/Piechart",
  component: Piechart,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Piechart {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Piechart",
};

export const RadialSmall = Template.bind({});
RadialSmall.args = {
  size: "small",
  label: "Piechart",
};

export const RadialLarge = Template.bind({});
RadialLarge.args = {
  size: "large",
  label: "Piechart",
};
