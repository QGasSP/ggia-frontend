import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import { LineLegend } from "./LineLegend";
import "../css/u1planner.css";
import axios from "axios";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  RadialChart,
} from "react-vis";

import { BuildingsNewUnits } from "./BuildingsNewUnits";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { Legend } from "./Legend";


/**
 * BuildingBaselineCharts baseline 
 * @return {}
 */
 const BarSeries = VerticalBarSeries;
 export const BuildingBaselineCharts = ({
   country,
   year,
   residential,
   commercial,
   baseline
 }) => {
   const [errorBBC, setErrorBBC] = useState("");
   const [emissionResidential, setEmissionResidential] = useState("");
   const [emissionCommercial, setEmissionCommercial] = useState("");
   const [emissionsByEndUse, setEmissionsByEndUse] = useState("");
//    const [baseline, setBaseline] = useState({});
   const [nextNewUnitsView, setNextNewUnitsView] = useState(false);
 
   useEffect(() => {
     localStorage.setItem("emissionResidential", JSON.stringify(emissionResidential));
   }, [emissionResidential]);
 
   useEffect(() => {
     localStorage.setItem("emissionCommercial", JSON.stringify(emissionCommercial));
   }, [emissionCommercial]);

   useEffect(() => {
    localStorage.setItem("emissionsByEndUse", JSON.stringify(emissionsByEndUse));
  }, [emissionsByEndUse]);
 
//    useEffect(async () => {
//     //  const baseline = {
//     //    country,
//     //    year,
//     //    population,
//     //    emissionResidential,
//     //  };
//      setBaseline({ baseline });
//      const raw = { baseline };
 
//      const headers = {
//        "Content-type": "application/json",
//        // "Access-Control-Allow-Origin": "*",
//      };
//      axios
//        .post(
//          "https://ggia-dev.ulno.net/api/v1/calculate/buildings",
//          raw,
//          headers
//        )
//        .then((response) => {
//          setResponse(response.data.data.baseline);
//          setEmissionResidential(response.data.data.baseline.emissions);
//          emissionCommercial(response.data.data.baseline.emissions);
//          emissionsByEndUse(response.data.data.baseline.emissionCommercial);
//        })
//        .catch((error) => {
//          setErrorBBC({ errorMessage: error.message });
//          // eslint-disable-next-line no-console
//          console.error("There was an error!", errorBBC);
//        });
//    }, []);
 
   if (nextNewUnitsView === false && Object.keys(emissionsByEndUse).length !== 0) {
     return (
       <article>
         <br />
         <Divider textAlign="left" flexItem>
           <b>Baseline - CO2e emissions from the energy use in residential buildings by unit type and source of heating energy</b>
         </Divider>
 
         <div className="barchart_container">
           <XYPlot xType="ordinal" width={1000} height={300} xDistance={200}>
             <HorizontalGridLines />
             <VerticalGridLines />
             <VerticalBarSeries
               className="BaselineBarchart"
               data={[
                 {
                   y: Math.round((emissionResidential.bus + Number.EPSILON) * 100) / 100,
                   x: "Bus",
                 },
                 {
                   y: Math.round((emissionResidential.metro + Number.EPSILON) * 100) / 100,
                   x: "Metro",
                 },
                 {
                   y: Math.round((emissionResidential.train + Number.EPSILON) * 100) / 100,
                   x: "Train",
                 },
                 {
                   y:
                     Math.round(
                       (emissionResidential.road_transport + Number.EPSILON) * 100
                     ) / 100,
                   x: "Road transport",
                 },
                 {
                   y: Math.round((emissionResidential.car + Number.EPSILON) * 100) / 100,
                   x: "Car",
                 },
                 {
                   y: Math.round((emissionResidential.tram + Number.EPSILON) * 100) / 100,
                   x: "Tram",
                 },
                 {
                   y:
                     Math.round(
                       (emissionResidential.rail_transport + Number.EPSILON) * 100
                     ) / 100,
                   x: "Rail transport",
                 },
                 {
                   y:
                     Math.round(
                       (emissionResidential.waterways_transport + Number.EPSILON) * 100
                     ) / 100,
                   x: "Waterway transport",
                 },
                 {
                   y: Math.round((emissionResidential.total + Number.EPSILON) * 100) / 100,
                   x: "total emissions",
                 },
               ]}
             />
             <XAxis />
             <YAxis />
           </XYPlot>
         </div>

         <Divider textAlign="left" flexItem>
           {" "}
           <b>Baseline - CO2e emissions from the energy use in residential buildings by the end use</b>
         </Divider>
 
         <div className="piechart_container">
           <div className="piechart_diagram">
             <div>
               <RadialChart
                 data={[
                   {
                     angle:
                       Math.round(
                         (emissionResidential.bus / emissionResidential.total + Number.EPSILON) * 36000
                       ) / 100,
                     label: "Bus",
                     color: "#8C0303",
                   },
                   {
                     angle:
                       Math.round(
                         (emissionResidential.metro / emissionResidential.total + Number.EPSILON) *
                           36000
                       ) / 100,
                     label: "Metro",
                     color: "#400D01",
                   },
                   {
                     angle:
                       Math.round(
                         (emissionResidential.train / emissionResidential.total + Number.EPSILON) *
                           36000
                       ) / 100,
                     label: "Train",
                     color: "#D90404",
                   },
                   {
                     angle:
                       Math.round(
                         (emissionResidential.road_transport / emissionResidential.total +
                           Number.EPSILON) *
                           36000
                       ) / 100,
                     label: "Road transport",
                     color: "#595959",
                   },
                   {
                     angle:
                       Math.round(
                         (emissionResidential.car / emissionResidential.total + Number.EPSILON) * 36000
                       ) / 100,
                     label: "Car",
                     color: "#A6036D",
                     rotation: 90,
                   },
                   {
                     angle:
                       Math.round(
                         (emissionResidential.tram / emissionResidential.total + Number.EPSILON) *
                           36000
                       ) / 100,
                     label: "Tram",
                     color: " #C4D4F2",
                   },
                   {
                     angle:
                       Math.round(
                         (emissionResidential.rail_transport / emissionResidential.total +
                           Number.EPSILON) *
                           36000
                       ) / 100,
                     label: "Rail transport",
                     color: "#80D941",
                   },
                   {
                     angle:
                       Math.round(
                         (emissionResidential.waterways_transport / emissionResidential.total +
                           Number.EPSILON) *
                           36000
                       ) / 100,
                     label: "Waterways transport",
                     color: "#F2CE1B",
                   },
                 ]}
                 colorType="literal"
                 innerRadius={100}
                 radius={140}
                 getAngle={(d) => d.angle}
                 width={350}
                 height={350}
               />
             </div>
           </div>
           <div className="piechart_legend">
             <Legend />
           </div>
           <div></div>
         </div>
 
         <div className="headerSettlement">
           <Divider textAlign="left" flexItem>
             {" "}
             <Chip label="Projections" />
           </Divider>
         </div>
         <br/>
 
         <Divider textAlign="left" flexItem>
           {" "}
           <b>CO2e emissions from the energy use in commercial buildings by building type and source of heating energy</b>
         </Divider>
 
         <div>
           <XYPlot width={1000} height={500} stackBy="y" xType="ordinal">
             <HorizontalGridLines />
             <VerticalGridLines />
             <VerticalBarSeries className="StackedBarchart" />
             <XAxis />
             <YAxis />
             <BarSeries
               color="#8C0303"
               data={[
                 { x: 2022, y: emissionCommercial.bus[2022] },
                 { x: 2023, y: emissionCommercial.bus[2023] },
                 { x: 2024, y: emissionCommercial.bus[2024] },
                 { x: 2025, y: emissionCommercial.bus[2025] },
                 { x: 2026, y: emissionCommercial.bus[2026] },
                 { x: 2027, y: emissionCommercial.bus[2027] },
                 { x: 2028, y: emissionCommercial.bus[2028] },
                 { x: 2029, y: emissionCommercial.bus[2029] },
                 { x: 2030, y: emissionCommercial.bus[2030] },
                 { x: 2031, y: emissionCommercial.bus[2031] },
                 { x: 2032, y: emissionCommercial.bus[2032] },
                 { x: 2033, y: emissionCommercial.bus[2033] },
                 { x: 2034, y: emissionCommercial.bus[2034] },
                 { x: 2035, y: emissionCommercial.bus[2035] },
                 { x: 2036, y: emissionCommercial.bus[2036] },
                 { x: 2037, y: emissionCommercial.bus[2037] },
                 { x: 2038, y: emissionCommercial.bus[2038] },
                 { x: 2039, y: emissionCommercial.bus[2039] },
                 { x: 2040, y: emissionCommercial.bus[2040] },
                 { x: 2041, y: emissionCommercial.bus[2041] },
                 { x: 2042, y: emissionCommercial.bus[2042] },
                 { x: 2043, y: emissionCommercial.bus[2043] },
                 { x: 2044, y: emissionCommercial.bus[2044] },
                 { x: 2045, y: emissionCommercial.bus[2045] },
                 { x: 2046, y: emissionCommercial.bus[2046] },
                 { x: 2047, y: emissionCommercial.bus[2047] },
                 { x: 2048, y: emissionCommercial.bus[2048] },
                 { x: 2049, y: emissionCommercial.bus[2049] },
                 { x: 2050, y: emissionCommercial.bus[2050] },
               ]}
             />
             <BarSeries
               color="#A6036D"
               data={[
                 { x: 2022, y: emissionCommercial.car[2022] },
                 { x: 2023, y: emissionCommercial.car[2023] },
                 { x: 2024, y: emissionCommercial.car[2024] },
                 { x: 2025, y: emissionCommercial.car[2025] },
                 { x: 2026, y: emissionCommercial.car[2026] },
                 { x: 2027, y: emissionCommercial.car[2027] },
                 { x: 2028, y: emissionCommercial.car[2028] },
                 { x: 2029, y: emissionCommercial.car[2029] },
                 { x: 2030, y: emissionCommercial.car[2030] },
                 { x: 2031, y: emissionCommercial.car[2031] },
                 { x: 2032, y: emissionCommercial.car[2032] },
                 { x: 2033, y: emissionCommercial.car[2033] },
                 { x: 2034, y: emissionCommercial.car[2034] },
                 { x: 2035, y: emissionCommercial.car[2035] },
                 { x: 2036, y: emissionCommercial.car[2036] },
                 { x: 2037, y: emissionCommercial.car[2037] },
                 { x: 2038, y: emissionCommercial.car[2038] },
                 { x: 2039, y: emissionCommercial.car[2039] },
                 { x: 2040, y: emissionCommercial.car[2040] },
                 { x: 2041, y: emissionCommercial.car[2041] },
                 { x: 2042, y: emissionCommercial.car[2042] },
                 { x: 2043, y: emissionCommercial.car[2043] },
                 { x: 2044, y: emissionCommercial.car[2044] },
                 { x: 2045, y: emissionCommercial.car[2045] },
                 { x: 2046, y: emissionCommercial.car[2046] },
                 { x: 2047, y: emissionCommercial.car[2047] },
                 { x: 2048, y: emissionCommercial.car[2048] },
                 { x: 2049, y: emissionCommercial.car[2049] },
                 { x: 2050, y: emissionCommercial.car[2050] },
               ]}
             />
             <BarSeries
               color="#400D01"
               data={[
                 { x: 2022, y: emissionCommercial.metro[2022] },
                 { x: 2023, y: emissionCommercial.metro[2023] },
                 { x: 2024, y: emissionCommercial.metro[2024] },
                 { x: 2025, y: emissionCommercial.metro[2025] },
                 { x: 2026, y: emissionCommercial.metro[2026] },
                 { x: 2027, y: emissionCommercial.metro[2027] },
                 { x: 2028, y: emissionCommercial.metro[2028] },
                 { x: 2029, y: emissionCommercial.metro[2029] },
                 { x: 2030, y: emissionCommercial.metro[2030] },
                 { x: 2031, y: emissionCommercial.metro[2031] },
                 { x: 2032, y: emissionCommercial.metro[2032] },
                 { x: 2033, y: emissionCommercial.metro[2033] },
                 { x: 2034, y: emissionCommercial.metro[2034] },
                 { x: 2035, y: emissionCommercial.metro[2035] },
                 { x: 2036, y: emissionCommercial.metro[2036] },
                 { x: 2037, y: emissionCommercial.metro[2037] },
                 { x: 2038, y: emissionCommercial.metro[2038] },
                 { x: 2039, y: emissionCommercial.metro[2039] },
                 { x: 2040, y: emissionCommercial.metro[2040] },
                 { x: 2041, y: emissionCommercial.metro[2041] },
                 { x: 2042, y: emissionCommercial.metro[2042] },
                 { x: 2043, y: emissionCommercial.metro[2043] },
                 { x: 2044, y: emissionCommercial.metro[2044] },
                 { x: 2045, y: emissionCommercial.metro[2045] },
                 { x: 2046, y: emissionCommercial.metro[2046] },
                 { x: 2047, y: emissionCommercial.metro[2047] },
                 { x: 2048, y: emissionCommercial.metro[2048] },
                 { x: 2049, y: emissionCommercial.metro[2049] },
                 { x: 2050, y: emissionCommercial.metro[2050] },
               ]}
             />
             <BarSeries
               color=" #C4D4F2"
               data={[
                 { x: 2022, y: emissionCommercial.tram[2022] },
                 { x: 2023, y: emissionCommercial.tram[2023] },
                 { x: 2024, y: emissionCommercial.tram[2024] },
                 { x: 2025, y: emissionCommercial.tram[2025] },
                 { x: 2026, y: emissionCommercial.tram[2026] },
                 { x: 2027, y: emissionCommercial.tram[2027] },
                 { x: 2028, y: emissionCommercial.tram[2028] },
                 { x: 2029, y: emissionCommercial.tram[2029] },
                 { x: 2030, y: emissionCommercial.tram[2030] },
                 { x: 2031, y: emissionCommercial.tram[2031] },
                 { x: 2032, y: emissionCommercial.tram[2032] },
                 { x: 2033, y: emissionCommercial.tram[2033] },
                 { x: 2034, y: emissionCommercial.tram[2034] },
                 { x: 2035, y: emissionCommercial.tram[2035] },
                 { x: 2036, y: emissionCommercial.tram[2036] },
                 { x: 2037, y: emissionCommercial.tram[2037] },
                 { x: 2038, y: emissionCommercial.tram[2038] },
                 { x: 2039, y: emissionCommercial.tram[2039] },
                 { x: 2040, y: emissionCommercial.tram[2040] },
                 { x: 2041, y: emissionCommercial.tram[2041] },
                 { x: 2042, y: emissionCommercial.tram[2042] },
                 { x: 2043, y: emissionCommercial.tram[2043] },
                 { x: 2044, y: emissionCommercial.tram[2044] },
                 { x: 2045, y: emissionCommercial.tram[2045] },
                 { x: 2046, y: emissionCommercial.tram[2046] },
                 { x: 2047, y: emissionCommercial.tram[2047] },
                 { x: 2048, y: emissionCommercial.tram[2048] },
                 { x: 2049, y: emissionCommercial.tram[2049] },
                 { x: 2050, y: emissionCommercial.tram[2050] },
               ]}
             />
             <BarSeries
               color="#D90404"
               data={[
                 { x: 2022, y: emissionCommercial.train[2022] },
                 { x: 2023, y: emissionCommercial.train[2023] },
                 { x: 2024, y: emissionCommercial.train[2024] },
                 { x: 2025, y: emissionCommercial.train[2025] },
                 { x: 2026, y: emissionCommercial.train[2026] },
                 { x: 2027, y: emissionCommercial.train[2027] },
                 { x: 2028, y: emissionCommercial.train[2028] },
                 { x: 2029, y: emissionCommercial.train[2029] },
                 { x: 2030, y: emissionCommercial.train[2030] },
                 { x: 2031, y: emissionCommercial.train[2031] },
                 { x: 2032, y: emissionCommercial.train[2032] },
                 { x: 2033, y: emissionCommercial.train[2033] },
                 { x: 2034, y: emissionCommercial.train[2034] },
                 { x: 2035, y: emissionCommercial.train[2035] },
                 { x: 2036, y: emissionCommercial.train[2036] },
                 { x: 2037, y: emissionCommercial.train[2037] },
                 { x: 2038, y: emissionCommercial.train[2038] },
                 { x: 2039, y: emissionCommercial.train[2039] },
                 { x: 2040, y: emissionCommercial.train[2040] },
                 { x: 2041, y: emissionCommercial.train[2041] },
                 { x: 2042, y: emissionCommercial.train[2042] },
                 { x: 2043, y: emissionCommercial.train[2043] },
                 { x: 2044, y: emissionCommercial.train[2044] },
                 { x: 2045, y: emissionCommercial.train[2045] },
                 { x: 2046, y: emissionCommercial.train[2046] },
                 { x: 2047, y: emissionCommercial.train[2047] },
                 { x: 2048, y: emissionCommercial.train[2048] },
                 { x: 2049, y: emissionCommercial.train[2049] },
                 { x: 2050, y: emissionCommercial.train[2050] },
               ]}
             />
             <BarSeries
               color="#80D941"
               data={[
                 { x: 2022, y: emissionCommercial.rail_transport[2022] },
                 { x: 2023, y: emissionCommercial.rail_transport[2023] },
                 { x: 2024, y: emissionCommercial.rail_transport[2024] },
                 { x: 2025, y: emissionCommercial.rail_transport[2025] },
                 { x: 2026, y: emissionCommercial.rail_transport[2026] },
                 { x: 2027, y: emissionCommercial.rail_transport[2027] },
                 { x: 2028, y: emissionCommercial.rail_transport[2028] },
                 { x: 2029, y: emissionCommercial.rail_transport[2029] },
                 { x: 2030, y: emissionCommercial.rail_transport[2030] },
                 { x: 2031, y: emissionCommercial.rail_transport[2031] },
                 { x: 2032, y: emissionCommercial.rail_transport[2032] },
                 { x: 2033, y: emissionCommercial.rail_transport[2033] },
                 { x: 2034, y: emissionCommercial.rail_transport[2034] },
                 { x: 2035, y: emissionCommercial.rail_transport[2035] },
                 { x: 2036, y: emissionCommercial.rail_transport[2036] },
                 { x: 2037, y: emissionCommercial.rail_transport[2037] },
                 { x: 2038, y: emissionCommercial.rail_transport[2038] },
                 { x: 2039, y: emissionCommercial.rail_transport[2039] },
                 { x: 2040, y: emissionCommercial.rail_transport[2040] },
                 { x: 2041, y: emissionCommercial.rail_transport[2041] },
                 { x: 2042, y: emissionCommercial.rail_transport[2042] },
                 { x: 2043, y: emissionCommercial.rail_transport[2043] },
                 { x: 2044, y: emissionCommercial.rail_transport[2044] },
                 { x: 2045, y: emissionCommercial.rail_transport[2045] },
                 { x: 2046, y: emissionCommercial.rail_transport[2046] },
                 { x: 2047, y: emissionCommercial.rail_transport[2047] },
                 { x: 2048, y: emissionCommercial.rail_transport[2048] },
                 { x: 2049, y: emissionCommercial.rail_transport[2049] },
                 { x: 2050, y: emissionCommercial.rail_transport[2050] },
               ]}
             />
             <BarSeries
               color="#595959"
               data={[
                 { x: 2022, y: emissionCommercial.road_transport[2022] },
                 { x: 2023, y: emissionCommercial.road_transport[2023] },
                 { x: 2024, y: emissionCommercial.road_transport[2024] },
                 { x: 2025, y: emissionCommercial.road_transport[2025] },
                 { x: 2026, y: emissionCommercial.road_transport[2026] },
                 { x: 2027, y: emissionCommercial.road_transport[2027] },
                 { x: 2028, y: emissionCommercial.road_transport[2028] },
                 { x: 2029, y: emissionCommercial.road_transport[2029] },
                 { x: 2030, y: emissionCommercial.road_transport[2030] },
                 { x: 2031, y: emissionCommercial.road_transport[2031] },
                 { x: 2032, y: emissionCommercial.road_transport[2032] },
                 { x: 2033, y: emissionCommercial.road_transport[2033] },
                 { x: 2034, y: emissionCommercial.road_transport[2034] },
                 { x: 2035, y: emissionCommercial.road_transport[2035] },
                 { x: 2036, y: emissionCommercial.road_transport[2036] },
                 { x: 2037, y: emissionCommercial.road_transport[2037] },
                 { x: 2038, y: emissionCommercial.road_transport[2038] },
                 { x: 2039, y: emissionCommercial.road_transport[2039] },
                 { x: 2040, y: emissionCommercial.road_transport[2040] },
                 { x: 2041, y: emissionCommercial.road_transport[2041] },
                 { x: 2042, y: emissionCommercial.road_transport[2042] },
                 { x: 2043, y: emissionCommercial.road_transport[2043] },
                 { x: 2044, y: emissionCommercial.road_transport[2044] },
                 { x: 2045, y: emissionCommercial.road_transport[2045] },
                 { x: 2046, y: emissionCommercial.road_transport[2046] },
                 { x: 2047, y: emissionCommercial.road_transport[2047] },
                 { x: 2048, y: emissionCommercial.road_transport[2048] },
                 { x: 2049, y: emissionCommercial.road_transport[2049] },
                 { x: 2050, y: emissionCommercial.road_transport[2050] },
               ]}
             />
             <BarSeries
               color="#F2CE1B"
               data={[
                 { x: 2022, y: emissionCommercial.waterways_transport[2022] },
                 { x: 2023, y: emissionCommercial.waterways_transport[2023] },
                 { x: 2024, y: emissionCommercial.waterways_transport[2024] },
                 { x: 2025, y: emissionCommercial.waterways_transport[2025] },
                 { x: 2026, y: emissionCommercial.waterways_transport[2026] },
                 { x: 2027, y: emissionCommercial.waterways_transport[2027] },
                 { x: 2028, y: emissionCommercial.waterways_transport[2028] },
                 { x: 2029, y: emissionCommercial.waterways_transport[2029] },
                 { x: 2030, y: emissionCommercial.waterways_transport[2030] },
                 { x: 2031, y: emissionCommercial.waterways_transport[2031] },
                 { x: 2032, y: emissionCommercial.waterways_transport[2032] },
                 { x: 2033, y: emissionCommercial.waterways_transport[2033] },
                 { x: 2034, y: emissionCommercial.waterways_transport[2034] },
                 { x: 2035, y: emissionCommercial.waterways_transport[2035] },
                 { x: 2036, y: emissionCommercial.waterways_transport[2036] },
                 { x: 2037, y: emissionCommercial.waterways_transport[2037] },
                 { x: 2038, y: emissionCommercial.waterways_transport[2038] },
                 { x: 2039, y: emissionCommercial.waterways_transport[2039] },
                 { x: 2040, y: emissionCommercial.waterways_transport[2040] },
                 { x: 2041, y: emissionCommercial.waterways_transport[2041] },
                 { x: 2042, y: emissionCommercial.waterways_transport[2042] },
                 { x: 2043, y: emissionCommercial.waterways_transport[2043] },
                 { x: 2044, y: emissionCommercial.waterways_transport[2044] },
                 { x: 2045, y: emissionCommercial.waterways_transport[2045] },
                 { x: 2046, y: emissionCommercial.waterways_transport[2046] },
                 { x: 2047, y: emissionCommercial.waterways_transport[2047] },
                 { x: 2048, y: emissionCommercial.waterways_transport[2048] },
                 { x: 2049, y: emissionCommercial.waterways_transport[2049] },
                 { x: 2050, y: emissionCommercial.waterways_transport[2050] },
               ]}
             />
           </XYPlot>
           <LineLegend />
         </div>
 
         <div className="nextU2Button">
           <Button
             size="small"
             value="u2next_inputs"
             onClick={() => setNextNewUnitsView(true)}
             label="Next &raquo;"
             primary
           />
         </div>
       </article>
     );
   } else if (nextNewUnitsView === true) {
     return (
       <BuildingsNewUnits
         baseline={baseline}
         emissionResidential={emissionResidential}
         emissionCommercial={emissionCommercial}
         year={year}
         country={country}
       />
     );
   } else {
     return <></>;
   };
 };
 
 BuildingBaselineCharts.propTypes = {
   residential: PropTypes.object.isRequired,
   commercial: PropTypes.object.isRequired,
   baseline: PropTypes.object.isRequired,
   year: PropTypes.number.isRequired,
   country: PropTypes.string.isRequired,
 };
 