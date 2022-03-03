import React from "react";
import { Welcome } from "../components/Welcome";

export default {
  title: '"QgasSP/Welcome',
  component: Welcome,
  args: {},
};

const Template = (args) => <Welcome {...args} />;

export const WelcomeNote = Template.bind({});
WelcomeNote.args = {
  primary: true,
  label: "Welcome",
};
