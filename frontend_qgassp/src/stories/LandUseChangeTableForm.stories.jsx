import React from "react";

import { LandUseChangeTableForm } from "../components/LandUseChangeTableForm";
import * as HeaderStories from "./Header.stories";

export default {
  title: '"QgasSP/LandUseChangeTableForm',
  component: LandUseChangeTableForm,
  args: {},
};

const Template = (args) => <LandUseChangeTableForm {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
