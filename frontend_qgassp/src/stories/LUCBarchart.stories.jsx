import { LUCBarchart } from "../components/LUCBarchart";
import * as HeaderStories from "./Header.stories";
import React from "react";

export default {
  title: '"QgasSP/LUCBarchart',
  component: LUCBarchart,
  args: {},
};

const Template = (args) => <LUCBarchart {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
