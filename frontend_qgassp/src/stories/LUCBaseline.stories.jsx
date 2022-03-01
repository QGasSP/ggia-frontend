import { LUCBaseline } from "../components/LUCBaseline";
import * as HeaderStories from "./Header.stories";
import React from "react";

export default {
  title: '"QgasSP/LUCBaseline',
  component: LUCBaseline,
  args: {},
};

const Template = (args) => <LUCBaseline {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
