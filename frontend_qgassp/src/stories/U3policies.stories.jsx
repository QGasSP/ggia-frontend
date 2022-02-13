import React from "react";
import { U3policies } from "../components/U3policies";
import * as HeaderStories from "./Header.stories";

export default {
  title: "QgasSP/U3 Policies",
  component: U3policies,
};

const Template = (args) => <U3policies {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
