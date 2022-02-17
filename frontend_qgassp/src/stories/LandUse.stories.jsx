import { LandUse } from "../components/LandUse";
import * as HeaderStories from "./Header.stories";
import React from "react";

export default {
  title: '"QgasSP/LandUse',
  component: LandUse,
  args: {},
};

const Template = (args) => <LandUse {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
