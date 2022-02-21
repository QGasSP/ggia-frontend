import React from "react";
import { U3planner } from "../components/U3planner";
import * as HeaderStories from "./Header.stories";

export default {
  title: "QgasSP/U3 POLICY QUANTIFICATION",
  component: U3planner,
};

const Template = (args) => <U3planner {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
