import { LUCtableFromTo } from "../components/LUCtableFromTo";
import * as HeaderStories from "./Header.stories";
import React from "react";

export default {
  title: '"QgasSP/LUCtableFromTo',
  component: LUCtableFromTo,
  args: {},
};

const Template = (args) => <LUCtableFromTo {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
