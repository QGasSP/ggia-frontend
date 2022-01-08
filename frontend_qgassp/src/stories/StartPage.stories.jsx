import { StartPage } from "../components/StartPage";
import * as HeaderStories from "./Header.stories";
import React from "react";

export default {
  title: '"QgasSP/StartPage',
  component: StartPage,
  args: {},
};

const Template = (args) => <StartPage {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};