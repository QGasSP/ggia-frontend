import React from "react";
import { Router, Route } from "react-router-dom";
import { NewResidents } from "./components/NewResidents";
import { Settlement } from "./components/Settlement";
import { StackedBarchart } from "./components/StackedBarchart";
import { StartPage } from "./components/StartPage";
import { U1planner } from "./components/U1planner";
import { U2planner } from "./components/U2planner";

export const AppRoutes = () => {
  return (
    <Router history={history}>
      <Route path="/" exact component={StartPage} />
      <Route path="/settlement" component={Settlement} />
      <Route path="/u1Planner" component={U1planner} />
      <Route path="/stackedBarchart" component={StackedBarchart} />
      <Route path="/newResidents" component={NewResidents} />
      <Route path="/u2Planner" component={U2planner} />
    </Router>
  );
};
