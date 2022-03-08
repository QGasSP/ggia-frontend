import React from "react";
/* import { Routes, Route , useRoutes} from "react-router-dom"; */
import { useRoutes } from "react-router-dom";
import { StartPage } from "../components/StartPage";
import { NewResidents } from "../components/NewResidents";
import { U2planner } from "../components/U2planner";
import { Welcome } from "../components/Welcome";
import { TransportBaseline } from "../components/TransportBaseline";
import { U1planner } from "../components/U1planner";

export const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Welcome /> },
    { path: "startPage", element: <StartPage /> },
    { path: "transportBaseline", element: <TransportBaseline /> },
    { path: "u1planner", element: <U1planner /> },
    { path: "newResidents", element: <NewResidents /> },
    { path: "u2planner", element: <U2planner /> },
  ]);
  return routes;
};
