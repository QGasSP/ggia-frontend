import React from "react";
import { GenerateReport } from "../components/GenerateReport";

export default {
  title: '"QgasSP/GenerateReport',
  component: GenerateReport,
  args: {},
};


const Template = (args) => <GenerateReport {...args} />;

export const ReportGen = Template.bind({});
ReportGen.args = {
  primary: true,
  label: "GenerateReport",
};
