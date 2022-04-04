import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/u1planner.css";
import "../css/buildingbaseline.css";
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
import { LineLegendBuildingBaselineCharts } from "./LineLegendBuildingBaselineCharts";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";


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
 
  //  useEffect(() => {
  //    localStorage.setItem("emissionResidential", JSON.stringify(emissionResidential));
  //  }, [emissionResidential]);
 
  //  useEffect(() => {
  //    localStorage.setItem("emissionCommercial", JSON.stringify(emissionCommercial));
  //  }, [emissionCommercial]);

  //  useEffect(() => {
  //   localStorage.setItem("emissionsByEndUse", JSON.stringify(emissionsByEndUse));
  // }, [emissionsByEndUse]);
 
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
 
  //  if (nextNewUnitsView === false && Object.keys(emissionsByEndUse).length !== 0) 
  if(nextNewUnitsView === false)
   {
     return (
       <article>
          <Divider textAlign="left" flexItem>
            <Chip label="BUILDINGS BASELINE RESULTS" />
          </Divider>
         <section>
           <Divider textAlign="left" flexItem>
             <b>GHG emissions from the energy use in residential buildings by unit type and source of heating energy</b>
           </Divider>
         </section>

         {/* table 1 6X9 */}
         <table className="buildings-table">
           <thead>
                <tr>
                  <th>tCO2/a</th>
                  <th>Electricity</th>
                  <th>Gas</th>
                  <th>Oil</th>
                  <th>Coal</th>
                  <th>Peat</th>
                  <th>Wood</th>
                  <th>Renewable</th>
                  <th>Heat</th>
                  <th>Total</th>
                </tr>
           </thead>
           <tbody>
                <tr>
                  <td>Apartment</td>
                  <td>Apartment</td>
                  <td>Apartment</td>
                  <td>Apartment</td>
                  <td>Apartment</td>
                  <td>Apartment</td>
                  <td>Apartment</td>
                  <td>Apartment</td>
                  <td>Apartment</td>
                  <td>total</td>
                </tr>
                <tr>
                  <td>Terraced</td>
                  <td>Terraced</td>
                  <td>Terraced</td>
                  <td>Terraced</td>
                  <td>Terraced</td>
                  <td>Terraced</td>
                  <td>Terraced</td>
                  <td>Terraced</td>
                  <td>Terraced</td>
                  <td>total</td>
                </tr>
                <tr>
                  <td>Semi-detached</td>
                  <td>Semi-detached</td>
                  <td>Semi-detached</td>
                  <td>Semi-detached</td>
                  <td>Semi-detached</td>
                  <td>Semi-detached</td>
                  <td>Semi-detached</td>
                  <td>Semi-detached</td>
                  <td>Semi-detached</td>
                  <td>total</td>
                </tr>
                <tr>
                  <td>Detached</td>
                  <td>Detached</td>
                  <td>Detached</td>
                  <td>Detached</td>
                  <td>Detached</td>
                  <td>Detached</td>
                  <td>Detached</td>
                  <td>Detached</td>
                  <td>Detached</td>
                  <td>total</td>
                </tr>
                <tr>
                  <td colSpan={9}>Residential buildings total</td>
                  <td>total</td>
                </tr>
           </tbody>
         </table>

         <section>
           <Divider textAlign="left" flexItem>
             {" "}
             <b>CO2 emissions from the energy use in commercial buildings by building type and source of heating energy</b>
           </Divider>
         </section>
 
        {/* table 2 8X9 */}
        <table className="buildings-table">
           <thead>
                <tr>
                  <th>tCO2/a</th>
                  <th>Electricity</th>
                  <th>Gas</th>
                  <th>Oil</th>
                  <th>Coal</th>
                  <th>Peat</th>
                  <th>Wood</th>
                  <th>Renewable</th>
                  <th>Heat</th>
                  <th>Total</th>
                </tr>
           </thead>
           <tbody>
                <tr>
                  <td>Retail</td>
                  <td>Retail</td>
                  <td>Retail</td>
                  <td>Retail</td>
                  <td>Retail</td>
                  <td>Retail</td>
                  <td>Retail</td>
                  <td>Retail</td>
                  <td>Retail</td>
                  <td>total</td>
                </tr>
                <tr>
                  <td>Health</td>
                  <td>Health</td>
                  <td>Health</td>
                  <td>Health</td>
                  <td>Health</td>
                  <td>Health</td>
                  <td>Health</td>
                  <td>Health</td>
                  <td>Health</td>
                  <td>total</td>
                </tr>
                <tr>
                  <td>Hospitality</td>
                  <td>Hospitality</td>
                  <td>Hospitality</td>
                  <td>Hospitality</td>
                  <td>Hospitality</td>
                  <td>Hospitality</td>
                  <td>Hospitality</td>
                  <td>Hospitality</td>
                  <td>Hospitality</td>
                  <td>total</td>
                </tr>
                <tr>
                  <td>Offices</td>
                  <td>Offices</td>
                  <td>Offices</td>
                  <td>Offices</td>
                  <td>Offices</td>
                  <td>Offices</td>
                  <td>Offices</td>
                  <td>Offices</td>
                  <td>Offices</td>
                  <td>total</td>
                </tr>
                <tr>
                  <td>Industrial</td>
                  <td>Industrial</td>
                  <td>Industrial</td>
                  <td>Industrial</td>
                  <td>Industrial</td>
                  <td>Industrial</td>
                  <td>Industrial</td>
                  <td>Industrial</td>
                  <td>Industrial</td>
                  <td>total</td>
                </tr>
                <tr>
                  <td>Warehouses</td>
                  <td>Warehouses</td>
                  <td>Warehouses</td>
                  <td>Warehouses</td>
                  <td>Warehouses</td>
                  <td>Warehouses</td>
                  <td>Warehouses</td>
                  <td>Warehouses</td>
                  <td>Warehouses</td>
                  <td>total</td>
                </tr>
                <tr>
                  <td colSpan={9}>Commercial buildings total</td>
                  <td>total</td>
                </tr>
           </tbody>
         </table>
 
         <div className="headerSettlement">
           <section>
             <Divider textAlign="left" flexItem>
               <Chip label="BASELINE EMISSIONS - ENERGY USE IN BUILDINGS (tCO2e)" />
             </Divider>
           </section>
         </div>

         <div className="buildings-baseline">
           <XYPlot
              width={1200}
              height={500}
              xType="linear"
              yDomain={[0, 45000]}
              stackBy="y"
            >
              <HorizontalGridLines style={{ stroke: "#B7E9ED" }} />
              <VerticalGridLines style={{ stroke: "#B7E9ED" }} />
              <VerticalBarSeries className="LucStackedBarchart" />
              <XAxis
                style={{
                  line: { stroke: "#ADDDE1" },
                  ticks: { stroke: "#ADDDE1" },
                  text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
                }}
              />
              <YAxis />
              {/* 1 */}
              <BarSeries
                color="#ffdf43"
                data={[
                  { x: 2022, y: 3000 },
                  { x: 2023, y: 2800 },
                  { x: 2024, y: 2800 },
                  { x: 2025, y: 2800 },
                  { x: 2026, y: 2800 },
                  { x: 2027, y: 2800 },
                  { x: 2028, y: 2800 },
                  { x: 2029, y: 2800 },
                  { x: 2030, y: 2800 },
                  { x: 2031, y: 3600 },
                  { x: 2032, y: 3600 },
                  { x: 2033, y: 3600 },
                  { x: 2034, y: 3600 },
                  { x: 2035, y: 3600 },
                  { x: 2036, y: 3000 },
                  { x: 2037, y: 3000 },
                  { x: 2038, y: 3000 },
                  { x: 2039, y: 3000 },
                  { x: 2040, y: 3000 },
                  { x: 2041, y: 3000 },
                  { x: 2042, y: 2600 },
                  { x: 2043, y: 2600 },
                  { x: 2044, y: 2600 },
                  { x: 2045, y: 2000 },
                  { x: 2046, y: 2000 },
                  { x: 2047, y: 2000 },
                  { x: 2048, y: 2000 },
                  { x: 2049, y: 2000 },
                  { x: 2050, y: 2000 },
                ]}
              />
              {/* 2 */}
              <BarSeries
                color="#76918e"
                data={[
                  { x: 2022, y: 2000 },
                  { x: 2023, y: 2000 },
                  { x: 2024, y: 2000 },
                  { x: 2025, y: 2000 },
                  { x: 2026, y: 2000 },
                  { x: 2027, y: 2000 },
                  { x: 2028, y: 2000 },
                  { x: 2029, y: 2000 },
                  { x: 2030, y: 2000 },
                  { x: 2031, y: 2000 },
                  { x: 2032, y: 2000 },
                  { x: 2033, y: 2000 },
                  { x: 2034, y: 2000 },
                  { x: 2035, y: 2000 },
                  { x: 2036, y: 2000 },
                  { x: 2037, y: 2000 },
                  { x: 2038, y: 2000 },
                  { x: 2039, y: 2000 },
                  { x: 2040, y: 2000 },
                  { x: 2041, y: 2000 },
                  { x: 2042, y: 2000 },
                  { x: 2043, y: 2000 },
                  { x: 2044, y: 2000 },
                  { x: 2045, y: 2000 },
                  { x: 2046, y: 2000 },
                  { x: 2047, y: 2000 },
                  { x: 2048, y: 2000 },
                  { x: 2049, y: 2000 },
                  { x: 2050, y: 2000 },
                ]}
              />
              {/* 3 */}
              <BarSeries
                color="#ce143d"
                data={[
                  { x: 2022, y: 2000 },
                  { x: 2023, y: 2000 },
                  { x: 2024, y: 2000 },
                  { x: 2025, y: 2000 },
                  { x: 2026, y: 2000 },
                  { x: 2027, y: 2000 },
                  { x: 2028, y: 2000 },
                  { x: 2029, y: 2000 },
                  { x: 2030, y: 2000 },
                  { x: 2031, y: 2000 },
                  { x: 2032, y: 2000 },
                  { x: 2033, y: 2000 },
                  { x: 2034, y: 2000 },
                  { x: 2035, y: 2000 },
                  { x: 2036, y: 2000 },
                  { x: 2037, y: 2000 },
                  { x: 2038, y: 2000 },
                  { x: 2039, y: 2000 },
                  { x: 2040, y: 2000 },
                  { x: 2041, y: 2000 },
                  { x: 2042, y: 2000 },
                  { x: 2043, y: 2000 },
                  { x: 2044, y: 2000 },
                  { x: 2045, y: 2000 },
                  { x: 2046, y: 2000 },
                  { x: 2047, y: 2000 },
                  { x: 2048, y: 2000 },
                  { x: 2049, y: 2000 },
                  { x: 2050, y: 2000 },
                ]}
              />
              {/* 4 */}
              <BarSeries
                color="#d6e7d9"
                data={[
                  { x: 2022, y: 2000 },
                  { x: 2023, y: 2000 },
                  { x: 2024, y: 2000 },
                  { x: 2025, y: 2000 },
                  { x: 2026, y: 2000 },
                  { x: 2027, y: 2000 },
                  { x: 2028, y: 2000 },
                  { x: 2029, y: 2000 },
                  { x: 2030, y: 2000 },
                  { x: 2031, y: 2000 },
                  { x: 2032, y: 2000 },
                  { x: 2033, y: 2000 },
                  { x: 2034, y: 2000 },
                  { x: 2035, y: 2000 },
                  { x: 2036, y: 2000 },
                  { x: 2037, y: 2000 },
                  { x: 2038, y: 2000 },
                  { x: 2039, y: 2000 },
                  { x: 2040, y: 2000 },
                  { x: 2041, y: 2000 },
                  { x: 2042, y: 2000 },
                  { x: 2043, y: 2000 },
                  { x: 2044, y: 2000 },
                  { x: 2045, y: 2000 },
                  { x: 2046, y: 2000 },
                  { x: 2047, y: 2000 },
                  { x: 2048, y: 2000 },
                  { x: 2049, y: 2000 },
                  { x: 2050, y: 2000 },
                ]}
              />
              {/* 5 */}
              <BarSeries
                color="#002117"
                data={[
                  { x: 2022, y: 2000 },
                  { x: 2023, y: 2000 },
                  { x: 2024, y: 2000 },
                  { x: 2025, y: 2000 },
                  { x: 2026, y: 2000 },
                  { x: 2027, y: 2000 },
                  { x: 2028, y: 2000 },
                  { x: 2029, y: 2000 },
                  { x: 2030, y: 2000 },
                  { x: 2031, y: 2000 },
                  { x: 2032, y: 2000 },
                  { x: 2033, y: 2000 },
                  { x: 2034, y: 2000 },
                  { x: 2035, y: 2000 },
                  { x: 2036, y: 2000 },
                  { x: 2037, y: 2000 },
                  { x: 2038, y: 2000 },
                  { x: 2039, y: 2000 },
                  { x: 2040, y: 2000 },
                  { x: 2041, y: 2000 },
                  { x: 2042, y: 2000 },
                  { x: 2043, y: 2000 },
                  { x: 2044, y: 2000 },
                  { x: 2045, y: 2000 },
                  { x: 2046, y: 2000 },
                  { x: 2047, y: 2000 },
                  { x: 2048, y: 2000 },
                  { x: 2049, y: 2000 },
                  { x: 2050, y: 2000 },
                ]}
              />
              {/* 6 */}
              <BarSeries
                color="#ef7d00"
                data={[
                  { x: 2022, y: 2000 },
                  { x: 2023, y: 2000 },
                  { x: 2024, y: 2000 },
                  { x: 2025, y: 2000 },
                  { x: 2026, y: 2000 },
                  { x: 2027, y: 2000 },
                  { x: 2028, y: 2000 },
                  { x: 2029, y: 2000 },
                  { x: 2030, y: 2000 },
                  { x: 2031, y: 2000 },
                  { x: 2032, y: 2000 },
                  { x: 2033, y: 2000 },
                  { x: 2034, y: 2000 },
                  { x: 2035, y: 2000 },
                  { x: 2036, y: 2000 },
                  { x: 2037, y: 2000 },
                  { x: 2038, y: 2000 },
                  { x: 2039, y: 2000 },
                  { x: 2040, y: 2000 },
                  { x: 2041, y: 2000 },
                  { x: 2042, y: 2000 },
                  { x: 2043, y: 2000 },
                  { x: 2044, y: 2000 },
                  { x: 2045, y: 2000 },
                  { x: 2046, y: 2000 },
                  { x: 2047, y: 2000 },
                  { x: 2048, y: 2000 },
                  { x: 2049, y: 2000 },
                  { x: 2050, y: 2000 },
                ]}
              />
              {/* 7 */}
              <BarSeries
                color="#6c3b00"
                data={[
                  { x: 2022, y: 2000 },
                  { x: 2023, y: 2000 },
                  { x: 2024, y: 2000 },
                  { x: 2025, y: 2000 },
                  { x: 2026, y: 2000 },
                  { x: 2027, y: 2000 },
                  { x: 2028, y: 2000 },
                  { x: 2029, y: 2000 },
                  { x: 2030, y: 2000 },
                  { x: 2031, y: 2000 },
                  { x: 2032, y: 2000 },
                  { x: 2033, y: 2000 },
                  { x: 2034, y: 2000 },
                  { x: 2035, y: 2000 },
                  { x: 2036, y: 2000 },
                  { x: 2037, y: 2000 },
                  { x: 2038, y: 2000 },
                  { x: 2039, y: 2000 },
                  { x: 2040, y: 2000 },
                  { x: 2041, y: 2000 },
                  { x: 2042, y: 2000 },
                  { x: 2043, y: 2000 },
                  { x: 2044, y: 2000 },
                  { x: 2045, y: 2000 },
                  { x: 2046, y: 2000 },
                  { x: 2047, y: 2000 },
                  { x: 2048, y: 2000 },
                  { x: 2049, y: 2000 },
                  { x: 2050, y: 2000 },
                ]}
              />
              {/* 8 */}
              <BarSeries
                color="#00aed5"
                data={[
                  { x: 2022, y: 2000 },
                  { x: 2023, y: 2000 },
                  { x: 2024, y: 2000 },
                  { x: 2025, y: 2000 },
                  { x: 2026, y: 2000 },
                  { x: 2027, y: 2000 },
                  { x: 2028, y: 2000 },
                  { x: 2029, y: 2000 },
                  { x: 2030, y: 2000 },
                  { x: 2031, y: 2000 },
                  { x: 2032, y: 2000 },
                  { x: 2033, y: 2000 },
                  { x: 2034, y: 2000 },
                  { x: 2035, y: 2000 },
                  { x: 2036, y: 2000 },
                  { x: 2037, y: 2000 },
                  { x: 2038, y: 2000 },
                  { x: 2039, y: 2000 },
                  { x: 2040, y: 2000 },
                  { x: 2041, y: 2000 },
                  { x: 2042, y: 2000 },
                  { x: 2043, y: 2000 },
                  { x: 2044, y: 2000 },
                  { x: 2045, y: 2000 },
                  { x: 2046, y: 2000 },
                  { x: 2047, y: 2000 },
                  { x: 2048, y: 2000 },
                  { x: 2049, y: 2000 },
                  { x: 2050, y: 2000 },
                ]}
              />
              {/* 9 */}
              <BarSeries
                color="#8C0303"
                data={[
                  { x: 2022, y: 2000 },
                  { x: 2023, y: 2000 },
                  { x: 2024, y: 2000 },
                  { x: 2025, y: 2000 },
                  { x: 2026, y: 2000 },
                  { x: 2027, y: 2000 },
                  { x: 2028, y: 2000 },
                  { x: 2029, y: 2000 },
                  { x: 2030, y: 2000 },
                  { x: 2031, y: 2000 },
                  { x: 2032, y: 2000 },
                  { x: 2033, y: 2000 },
                  { x: 2034, y: 2000 },
                  { x: 2035, y: 2000 },
                  { x: 2036, y: 2000 },
                  { x: 2037, y: 2000 },
                  { x: 2038, y: 2000 },
                  { x: 2039, y: 2000 },
                  { x: 2040, y: 2000 },
                  { x: 2041, y: 2000 },
                  { x: 2042, y: 2000 },
                  { x: 2043, y: 2000 },
                  { x: 2044, y: 2000 },
                  { x: 2045, y: 2000 },
                  { x: 2046, y: 2000 },
                  { x: 2047, y: 2000 },
                  { x: 2048, y: 2000 },
                  { x: 2049, y: 2000 },
                  { x: 2050, y: 2000 },
                ]}
              />
              {/* 10 */}
              <BarSeries
                color="#A6036D"
                data={[
                  { x: 2022, y: 2000 },
                  { x: 2023, y: 2000 },
                  { x: 2024, y: 2000 },
                  { x: 2025, y: 2000 },
                  { x: 2026, y: 2000 },
                  { x: 2027, y: 2000 },
                  { x: 2028, y: 2000 },
                  { x: 2029, y: 2000 },
                  { x: 2030, y: 2000 },
                  { x: 2031, y: 2000 },
                  { x: 2032, y: 2000 },
                  { x: 2033, y: 2000 },
                  { x: 2034, y: 2000 },
                  { x: 2035, y: 2000 },
                  { x: 2036, y: 2000 },
                  { x: 2037, y: 2000 },
                  { x: 2038, y: 2000 },
                  { x: 2039, y: 2000 },
                  { x: 2040, y: 2000 },
                  { x: 2041, y: 2000 },
                  { x: 2042, y: 2000 },
                  { x: 2043, y: 2000 },
                  { x: 2044, y: 2000 },
                  { x: 2045, y: 2000 },
                  { x: 2046, y: 2000 },
                  { x: 2047, y: 2000 },
                  { x: 2048, y: 2000 },
                  { x: 2049, y: 2000 },
                  { x: 2050, y: 2000 },
                ]}
              />
            </XYPlot>
         </div>
      <div className="luc_legendline">
          <LineLegendBuildingBaselineCharts />
      </div>
 
         {/* <section>
           <Divider textAlign="left" flexItem>
             {" "}
             <b>CO2e emissions from the energy use in commercial buildings by building type and source of heating energy</b>
           </Divider>
         </section> */}
 

         {/* <div className="piechart_container">
           <div className="piechart_diagram">
             <div>
               <RadialChart
                 data={[
                   {
                     angle:
                       Math.round(
                         (emissionResidential.bus / emissionResidential.total + Number.EPSILON) * 36000
                       ) / 2000,
                     label: "Bus",
                     color: "#8C0303",
                   },
                   {
                     angle:
                       Math.round(
                         (emissionResidential.metro / emissionResidential.total + Number.EPSILON) *
                           36000
                       ) / 2000,
                     label: "Metro",
                     color: "#400D01",
                   },
                   {
                     angle:
                       Math.round(
                         (emissionResidential.train / emissionResidential.total + Number.EPSILON) *
                           36000
                       ) / 2000,
                     label: "Train",
                     color: "#D90404",
                   },
                   {
                     angle:
                       Math.round(
                         (emissionResidential.road_transport / emissionResidential.total +
                           Number.EPSILON) *
                           36000
                       ) / 2000,
                     label: "Road transport",
                     color: "#595959",
                   },
                   {
                     angle:
                       Math.round(
                         (emissionResidential.car / emissionResidential.total + Number.EPSILON) * 36000
                       ) / 2000,
                     label: "Car",
                     color: "#A6036D",
                     rotation: 90,
                   },
                   {
                     angle:
                       Math.round(
                         (emissionResidential.tram / emissionResidential.total + Number.EPSILON) *
                           36000
                       ) / 2000,
                     label: "Tram",
                     color: " #C4D4F2",
                   },
                   {
                     angle:
                       Math.round(
                         (emissionResidential.rail_transport / emissionResidential.total +
                           Number.EPSILON) *
                           36000
                       ) / 2000,
                     label: "Rail transport",
                     color: "#80D941",
                   },
                   {
                     angle:
                       Math.round(
                         (emissionResidential.waterways_transport / emissionResidential.total +
                           Number.EPSILON) *
                           36000
                       ) / 2000,
                     label: "Waterways transport",
                     color: "#F2CE1B",
                   },
                 ]}
                 colorType="literal"
                 innerRadius={2000}
                 radius={2600}
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
         <div className="barchart_container">
           <XYPlot xType="ordinal" width={1000} height={300} xDistance={200}>
             <HorizontalGridLines />
             <VerticalGridLines />
             <VerticalBarSeries
               className="BaselineBarchart"
               data={[
                 {
                   y: Math.round((emissionResidential.bus + Number.EPSILON) * 2000) / 2000,
                   x: "Bus",
                 },
                 {
                   y: Math.round((emissionResidential.metro + Number.EPSILON) * 2000) / 2000,
                   x: "Metro",
                 },
                 {
                   y: Math.round((emissionResidential.train + Number.EPSILON) * 2000) / 2000,
                   x: "Train",
                 },
                 {
                   y:
                     Math.round(
                       (emissionResidential.road_transport + Number.EPSILON) * 2000
                     ) / 2000,
                   x: "Road transport",
                 },
                 {
                   y: Math.round((emissionResidential.car + Number.EPSILON) * 2000) / 2000,
                   x: "Car",
                 },
                 {
                   y: Math.round((emissionResidential.tram + Number.EPSILON) * 2000) / 2000,
                   x: "Tram",
                 },
                 {
                   y:
                     Math.round(
                       (emissionResidential.rail_transport + Number.EPSILON) * 2000
                     ) / 2000,
                   x: "Rail transport",
                 },
                 {
                   y:
                     Math.round(
                       (emissionResidential.waterways_transport + Number.EPSILON) * 2000
                     ) / 2000,
                   x: "Waterway transport",
                 },
                 {
                   y: Math.round((emissionResidential.total + Number.EPSILON) * 2000) / 2000,
                   x: "total emissions",
                 },
               ]}
             />
             <XAxis />
             <YAxis />
           </XYPlot>
         </div>
         */}

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
   } 
   else if (nextNewUnitsView === true) {
     return (
       <BuildingsNewUnits
         baseline={baseline}
         emissionResidential={emissionResidential}
         emissionCommercial={emissionCommercial}
         year={year}
         country={country}
       />
     );
   } 
  //  else {
  //    return <></>;
  //  }
 };
 
 BuildingBaselineCharts.propTypes = {
   residential: PropTypes.object.isRequired,
   commercial: PropTypes.object.isRequired,
   baseline: PropTypes.object.isRequired,
   year: PropTypes.number.isRequired,
   country: PropTypes.string.isRequired,
 };
 
 BuildingBaselineCharts.defaultProps = {
  residential: {},
  commercial: {},
  baseline: {},
  year: 2030,
  country: "Estonia",
};
