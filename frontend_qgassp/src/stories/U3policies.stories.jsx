import React from "react";
import { U3policies } from "../components/U3policies";

export default {
  title: "QgasSP/U3 Policies",
  component: U3policies,
};

const Template = (args) => <U3policies {...args} />;

export const Policies = Template.bind({});
Policies.args = {
  primary: true,
  label: "Policies",
};
