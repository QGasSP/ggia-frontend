import React from "react";

import { U2planner } from "../components/U2planner";
import * as HeaderStories from "./Header.stories";

export default {
  title: "QgasSP/Transport_module/U2_NewDevelopment",
  component: U2planner,
};

const Template = (args) => <U2planner {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
