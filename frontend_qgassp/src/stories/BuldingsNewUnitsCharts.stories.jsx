import React from "react";
import { BuldingsNewUnitsCharts } from "../components/BuldingsNewUnitsCharts";

export default {
  title: '"QgasSP/BuldingsNewUnitsCharts',
  component: BuldingsNewUnitsCharts,
  args: {},
};

const Template = (args) => <BuldingsNewUnitsCharts {...args} />;

export const NewUnitsCharts = Template.bind({});
NewUnitsCharts.args = {
  primary: true,
  label: "BuldingsNewUnitsCharts",
};
