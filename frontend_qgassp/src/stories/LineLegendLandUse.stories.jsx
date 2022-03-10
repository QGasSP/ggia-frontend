import { LineLegendLandUse } from "../components/LineLegendLandUse";
import React from "react";

export default {
  title: '"QgasSP/LineLegendLandUse',
  component: LineLegendLandUse,
  args: {},
};

const Template = (args) => <LineLegendLandUse {...args} />;

export const DiscreteLegend = Template.bind({});
DiscreteLegend.args = {
  primary: true,
  label: "LineLegendLandUse",
};
