import { Settlement } from "../components/Settlement";
import * as HeaderStories from "./Header.stories";
import React from "react";

export default {
  title: '"QgasSP/Settlement',
  component: Settlement,
  args: {},
};

const Template = (args) => <Settlement {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
