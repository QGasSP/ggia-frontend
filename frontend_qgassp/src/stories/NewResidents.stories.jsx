import { NewResidents } from "../components/NewResidents";
import * as HeaderStories from "./Header.stories";
import React from "react";

export default {
  title: '"QgasSP/NewResidents',
  component: NewResidents,
  args: {},
};

const Template = (args) => <NewResidents {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
