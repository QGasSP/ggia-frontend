import { LineLegendConsumption } from "../components/LineLegendConsumption";
import React from "react";

export default {
  title: '"QgasSP/Consumption_Module/LineLegendConsumption',
  component: LineLegendConsumption,
  args: {},
};

const Template = (args) => <LineLegendConsumption {...args} />;

export const DiscreteLegendCb = Template.bind({});
DiscreteLegendCb.args = {
  primary: true,
  label: "LineLegendConsumption",
};
