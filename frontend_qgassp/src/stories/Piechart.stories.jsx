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

export const RadialSmall = Template.bind({});
RadialSmall.args = {
  primary: true,
  label: "Piechart",
};
