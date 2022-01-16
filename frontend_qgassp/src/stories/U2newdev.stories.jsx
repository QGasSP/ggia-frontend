import React from "react";

import { U2newdev } from "../components/U2newdev";
import * as HeaderStories from "./Header.stories";

export default {
  title: "QgasSP/U2 New Development",
  component: U2newdev,
};

const Template = (args) => <U2newdev {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
