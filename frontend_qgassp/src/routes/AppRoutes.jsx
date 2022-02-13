import React from "react";
import { Routes, Route } from "react-router-dom";
import { StartPage } from "../components/StartPage";
import { U1plannerDefault } from "../components/U1plannerDefault";
import { Settlement } from "../components/Settlement";
import { U1planner } from "../components/U1planner";
import { NewResidents } from "../components/NewResidents";
import { U2planner } from "../components/U2planner";
import { StackedBarchart } from "../components/StackedBarchart";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" >
        <Route index  element={<StartPage />} />
        <Route path="startPage/*" element={<StartPage />} />
        <Route path="settlement" element={<Settlement />} />
        <Route path="u1planner" element={<U1planner />} />
        <Route path="u1plannerDefault" element={<U1plannerDefault />} />
        <Route path="stackedBarchart" element={<StackedBarchart />} />
        <Route path="newResidents" element={<NewResidents />} />
        <Route path="u2planner" element={<U2planner />} />
      </Route> 
    </Routes>
  );
};
