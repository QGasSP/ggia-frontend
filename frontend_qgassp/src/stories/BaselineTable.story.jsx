import React from "react";
import BaselineTable from "../components/BaselineTable";

export default {
  title: "QgasSP/BaselineTable",
  component: BaselineTable,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
};

const Template = (args) => <BaselineTable {...args} />;

export const PlannerTable = Template.bind({});
PlannerTable.args = {
  primary: true,
  label: "BaselineTable",
};
