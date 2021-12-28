import React from "react";

import { U1planner } from "./U1planner";
import * as HeaderStories from "./Header.stories";

export default {
  title: "QgasSP/U1 PLANNER",
  component: U1planner,
};

const Template = (args) => <U1planner {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
