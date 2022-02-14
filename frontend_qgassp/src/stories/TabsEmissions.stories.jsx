import { TabsEmission } from "../components/TabsEmission";
import React from "react";

export default {
  title: '"QgasSP/TabsEmissions',
  component: TabsEmission,
  args: {},
};

const Template = (args) => <TabsEmission {...args} />;

export const TabsType = Template.bind({});
TabsType.args = {
  primary: true,
  label: "TabsEmissions",
};
