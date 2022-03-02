import React from "react";
import { useRoutes } from "react-router-dom";
import { NewResidents } from "./components/NewResidents";
import { Settlement } from "./components/Settlement";
import { StartPage } from "./components/StartPage";
import { U1planner } from "./components/U1planner";
import { U2planner } from "./components/U2planner";
import { U3planner } from "./components/U3planner";
import { U1plannerDefault } from "./components/U1plannerDefault";
import App from "./App";
import { StackedBarchart } from "./components/StackedBarchart";

export const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <App /> },
    { path: "startPage", element: <StartPage /> },
    { path: "settlement", element: <Settlement /> },
    { path: "u1planner", element: <U1planner /> },
    { path: "u1plannerDefault", element: <U1plannerDefault /> },
    { path: "stackedBarChart", element: <StackedBarchart /> },
    { path: "newResidents", element: <NewResidents /> },
    { path: "u2planner", element: <U2planner /> },
    { path: "u3planner", element: <U3planner /> },
  ]);
  return routes;
};
