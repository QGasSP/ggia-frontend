import { LUCBarChart } from "../components/LUCBarChart";
import * as HeaderStories from "./Header.stories";
import React from "react";

export default {
  title: '"QgasSP/LUCBarChart',
  component: LUCBarChart,
  args: {},
};

const Template = (args) => <LUCBarChart {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
