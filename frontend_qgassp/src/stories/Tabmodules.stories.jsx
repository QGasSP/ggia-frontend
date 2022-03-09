import React from "react";
import { TabModules } from "../components/TabModules";

export default {
  title: '"QgasSP/TabModules',
  component: TabModules,
  args: {},
};

const Template = (args) => <TabModules {...args} />;

export const Modules = Template.bind({});
Modules.args = {
  primary: true,
  label: "TabModules",
};
