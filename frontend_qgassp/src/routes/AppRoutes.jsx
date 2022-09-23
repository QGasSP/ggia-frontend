import React from "react";
import { useRoutes, Navigate} from "react-router-dom"; 
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
import { BuildingBaseline } from "../components/BuildingBaseline";
import { BuildingBaselineCharts } from "../components/BuildingBaselineCharts";
import { BuildingsNewUnits } from "../components/BuildingsNewUnits";
import { BuildingsPolicies } from "../components/BuildingsPolicies";
import { BuildingsPoliciesCharts } from "../components/BuildingsPoliciesCharts";
import { LandUseChangeTableForm } from "../components/LandUseChangeTableForm";
import { GenerateReport } from "../components/GenerateReport";
import { ConsumptionTransport } from "../components/ConsumptionTransport";
import { ConsumptionResults } from "../components/ConsumptionResults";
import { LUCBarChart } from "../components/LUCBarChart";
import { CreateLocaldataset } from "../components/create local-dataset/CreateLocaldataset";

export const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Welcome /> },
    { path: "startPage", element: <StartPage /> },
    { path: "transportBaseline", element: <TransportBaseline /> },
    { path: "u1planner", element: <U1planner /> },
    { path: "newResidents", element: <NewResidents /> },
    { path: "u2planner", element: <U2planner /> },
    { path: "u3planner", element: <U3planner /> },
    { path: "u3policies", element: <U3policies /> },
    { path: "landUseChangeTableForm", element: <LandUseChangeTableForm/> },
    { path: "consumptionBaseline", element: <ConsumptionBaseline /> },
    { path: "consumptionBaselineResults",element: <ConsumptionBaselineResults />,},
    { path: "consumptionHseEnergy", element: <ConsumptionHseEnergy /> },
    { path: "consumptionTransport", element: <ConsumptionTransport /> },
    { path: "consumptionResults", element: <ConsumptionResults /> },
    { path: "newResidents", element: <NewResidents /> },
    { path: "u2planner", element: <U2planner /> },
    { path: "u3planner", element: <U3planner /> },
    { path: "u3policies", element: <U3policies /> },
    { path: "buildingBaseline", element: <BuildingBaseline /> },
    { path: "buildingBaselineCharts", element: <BuildingBaselineCharts /> },
    { path: "buildingsNewUnits", element: <BuildingsNewUnits /> },
    { path: "buildingsPolicies", element: <BuildingsPolicies /> },
    { path: "buildingsPoliciesCharts", element: <BuildingsPoliciesCharts /> },
    { path: "lUCBarChart", element: <LUCBarChart /> },
    { path: "generateReport", element: <GenerateReport/> },
    { path: "createLocaldataset", element: <CreateLocaldataset/> },
    { path: "*", element: <Navigate to="/"/> }, 
  ]);
  return routes;
};
