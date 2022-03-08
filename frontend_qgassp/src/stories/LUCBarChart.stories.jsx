import React from "react";
import { LUCBarChart } from "../components/LUCBarChart";
import * as HeaderStories from "./Header.stories";

export default {
  title: '"QgasSP/LUCBarChart',
  component: LUCBarChart,
  argTypes: {},
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