import { LineLegend } from "../components/LineLegend";
import React from "react";

export default {
  title: '"QgasSP/Consumption_Module/LineLegend',
  component: LineLegend,
  args: {},
};

const Template = (args) => <LineLegend {...args} />;

export const DiscreteLegend = Template.bind({});
DiscreteLegend.args = {
  primary: true,
  label: "LineLegend",
};
