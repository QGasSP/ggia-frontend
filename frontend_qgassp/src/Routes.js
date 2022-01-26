import React  from "react";
import { Router, Switch, Route } from "react-router-dom";
import { Settlement } from "./components/Settlement";
import { StartPage } from "./components/StartPage";
import { U1planner } from "./components/U1planner";
import { U2planner } from "./components/U2planner";

export const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={StartPage} />
        <Route path="/Settlement" component={Settlement} />
        <Route path="/U1Planner" component={U1planner} />
        <Route path="/U2Planner" component={U2planner} />
      </Switch>
    </Router>
  );
};
