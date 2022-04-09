import React from "react";

import { LandUseChangeTableForm } from "../components/LandUseChangeTableForm";

export default {
  title: '"QgasSP/LandUseChangeTableForm',
  component: LandUseChangeTableForm,
  args: {},
};

const Template = (args) => <LandUseChangeTableForm {...args} />;

export const LUCForm = Template.bind({});
LUCForm.args = {
  primary: true,
  label: "LandUseChangeTableForm",
};
