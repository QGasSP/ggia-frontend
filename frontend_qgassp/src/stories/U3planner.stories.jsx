import React from "react";
import { U3planner } from "../components/U3planner";

export default {
  title: "QgasSP/Transport_module/U3_POLICY_QUANTIFICATION",
  component: U3planner,
};

const Template = (args) => <U3planner {...args} />;

export const DiscreteLegend = Template.bind({});
DiscreteLegend.args = {
  primary: true,
  label: "U3Policy",
};
