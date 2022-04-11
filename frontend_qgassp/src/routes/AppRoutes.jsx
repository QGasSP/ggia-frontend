import React from "react";
/* import { Routes, Route , useRoutes} from "react-router-dom"; */
import { useRoutes } from "react-router-dom";
import { StartPage } from "../components/StartPage";
import { NewResidents } from "../components/NewResidents";
import { U2planner } from "../components/U2planner";
import { Welcome } from "../components/Welcome";
import { TransportBaseline } from "../components/TransportBaseline";
import { U1planner } from "../components/U1planner";
import { U3planner } from "../components/U3planner";
import { U3policies } from "../components/U3policies";
import { ConsumptionBaseline } from "../components/ConsumptionBaseline";
import { ConsumptionBaselineResults } from "../components/ConsumptionBaselineResults";
import { ConsumptionHseEnergy } from "../components/ConsumptionHseEnergy";
import { ConsumptionSummary } from "../components/ConsumptionSummary";
import { BuildingBaseline } from "../components/BuildingBaseline";
import { BuildingBaselineCharts } from "../components/BuildingBaselineCharts";
import { BuildingsNewUnits } from "../components/BuildingsNewUnits";
import { BuldingsNewUnitsCharts } from "../components/BuldingsNewUnitsCharts";
import { BuildingsPolicies } from "../components/BuildingsPolicies";
import { BuildingsPoliciesCharts } from "../components/BuildingsPoliciesCharts";

export const AppRoutes = () => {
  const routes = useRoutes([
    { path: "welcome", element: <Welcome /> },
    { path: "startPage", element: <StartPage /> },
    { path: "transportBaseline", element: <TransportBaseline /> },
    { path: "u1planner", element: <U1planner /> },
    { path: "newResidents", element: <NewResidents /> },
    { path: "u2planner", element: <U2planner /> },
    { path: "u3planner", element: <U3planner /> },
    { path: "u3policies", element: <U3policies /> },
    { path: "consumptionBaseline", element: <ConsumptionBaseline /> },
    { path: "consumptionBaselineResults",element: <ConsumptionBaselineResults />,},
    { path: "consumptionHseEnergy", element: <ConsumptionHseEnergy /> },
    { path: "consumptionResults", element: <ConsumptionSummary /> },
    { path: "newResidents", element: <NewResidents /> },
    { path: "u2planner", element: <U2planner /> },
    { path: "u3planner", element: <U3planner /> },
    { path: "u3policies", element: <U3policies /> },
    { path: "buildingBaseline", element: <BuildingBaseline /> },
    { path: "buildingBaselineCharts", element: <BuildingBaselineCharts /> },
    { path: "buildingsNewUnits", element: <BuildingsNewUnits /> },
    { path: "buildingsNewUnitsCharts", element: <BuldingsNewUnitsCharts /> },
    { path: "buildingsPolicies", element: <BuildingsPolicies /> },
    { path: "buildingsPoliciesCharts", element: <BuildingsPoliciesCharts /> },
  ]);
  return routes;
};
