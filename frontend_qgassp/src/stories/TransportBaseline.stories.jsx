import React from "react";
import { TransportBaseline } from "../components/TransportBaseline";

export default {
  title: '"QgasSP/Transport_module/TransportBaseline',
  component: TransportBaseline,
  args: {},
};

const Template = (args) => <TransportBaseline {...args} />;

export const BaselineInput = Template.bind({});
BaselineInput.args = {
  primary: true,
  label: "TransportBaseline",
};
