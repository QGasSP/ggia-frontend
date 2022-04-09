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
import urlPrefix from "../Config";

/**
 * BuildingsPoliciesCharts baseline
 * @return {}
 */
const BarSeries = VerticalBarSeries;
export const BuildingsPoliciesCharts = ({ baseline, country, year }) => {
  const [errorBBC, setErrorBBC] = useState("");
  const [emissionResidential, setEmissionResidential] = useState("");
  const [emissionCommercial, setEmissionCommercial] = useState("");
  const [emissionsByEndUse, setEmissionsByEndUse] = useState("");
  //    const [baseline, setBaseline] = useState({});
  const [nextNewUnitsView, setNextNewUnitsView] = useState(false);

  const response = {
    status: "success",
    data: {
      2022: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2023: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2024: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2025: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2026: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2027: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2028: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2029: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2030: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2031: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2032: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2033: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2034: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2035: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2036: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2037: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2038: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2039: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2040: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2041: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2042: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2043: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2044: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2045: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2046: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2047: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2048: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2049: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
      2050: {
        apartments: 1000,
        terraced: 1000,
        semidetached: 1000,
        detached: 1000,
        retail: 1000,
        health: 1000,
        hospitality: 1000,
        offices: 1000,
        industrial: 1000,
        warehouses: 1000,
        other: 1,
      },
    },
  };

  baseline = response.data;
  // #region data distribution
  const apartmentsData = [];
  const terracedData = [];
  const semidetachedData = [];
  const detachedData = [];
  const retailData = [];
  const healthData = [];
  const hospitalityData = [];
  const officesData = [];
  const industrialData = [];
  const warehousesData = [];

  for (let i = year; i < 2051; i++) {
    apartmentsData.push({ x: i, y: baseline[i].apartments });
    terracedData.push({ x: i, y: baseline[i].terraced });
    semidetachedData.push({ x: i, y: baseline[i].semidetached });
    detachedData.push({ x: i, y: baseline[i].detached });
    retailData.push({ x: i, y: baseline[i].retail });
    healthData.push({ x: i, y: baseline[i].health });
    hospitalityData.push({ x: i, y: baseline[i].hospitality });
    officesData.push({ x: i, y: baseline[i].offices });
    industrialData.push({ x: i, y: baseline[i].industrial });
    warehousesData.push({ x: i, y: baseline[i].warehouses });
  }
  // #endregion

  //  if (nextNewUnitsView === false && Object.keys(emissionsByEndUse).length !== 0) {
  if (nextNewUnitsView === false) {
    return (
      <article>
        <div className="headerSettlement">
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="POLICY QUANTIFICATION RESULTS" />
          </Divider>
        </div>
        <Divider textAlign="left" flexItem>
          <b>
            Baseline - CO2e emissions from the energy use in residential
            buildings by unit type and source of heating energy
          </b>
        </Divider>

        <div className="buildings-baseline">
          <XYPlot
            width={1000}
            height={500}
            xType="ordinal"
            yDomain={[0, 45000]}
            stackBy="y"
          >
            <HorizontalGridLines style={{ stroke: "#B7E9ED" }} />
            <VerticalGridLines style={{ stroke: "#B7E9ED" }} />
            <VerticalBarSeries className="LucStackedBarchart" />
            <XAxis
              title="Year"
              style={{
                line: { stroke: "#ADDDE1" },
                ticks: { stroke: "#ADDDE1" },
                text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
              }}
            />
            <YAxis title="Energy use  tC02e" />
            {/* 1 */}
            <BarSeries color="#ffdf43" data={apartmentsData} />
            {/* 2 */}
            <BarSeries color="#76918e" data={terracedData} />
            {/* 3 */}
            <BarSeries color="#ce143d" data={semidetachedData} />
            {/* 4 */}
            <BarSeries color="#d6e7d9" data={detachedData} />
            {/* 5 */}
            <BarSeries color="#002117" data={retailData} />
            {/* 6 */}
            <BarSeries color="#ef7d00" data={healthData} />
            {/* 7 */}
            <BarSeries color="#6c3b00" data={hospitalityData} />
            {/* 8 */}
            <BarSeries color="#00aed5" data={officesData} />
            {/* 9 */}
            <BarSeries color="#8C0303" data={industrialData} />
            {/* 10 */}
            <BarSeries color="#A6036D" data={warehousesData} />
          </XYPlot>
        </div>

        <Divider textAlign="left" flexItem>
          {" "}
          <b>
            Baseline - CO2e emissions from the energy use in residential
            buildings by the end use
          </b>
        </Divider>

        <div className="buildings-baseline">
          <XYPlot
            width={1000}
            height={500}
            xType="ordinal"
            yDomain={[0, 45000]}
            stackBy="y"
          >
            <HorizontalGridLines style={{ stroke: "#B7E9ED" }} />
            <VerticalGridLines style={{ stroke: "#B7E9ED" }} />
            <VerticalBarSeries className="LucStackedBarchart" />
            <XAxis
              title="Year"
              style={{
                line: { stroke: "#ADDDE1" },
                ticks: { stroke: "#ADDDE1" },
                text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
              }}
            />
            <YAxis title="Energy use  tC02e" />
            {/* 1 */}
            <BarSeries color="#ffdf43" data={apartmentsData} />
            {/* 2 */}
            <BarSeries color="#76918e" data={terracedData} />
            {/* 3 */}
            <BarSeries color="#ce143d" data={semidetachedData} />
            {/* 4 */}
            <BarSeries color="#d6e7d9" data={detachedData} />
            {/* 5 */}
            <BarSeries color="#002117" data={retailData} />
            {/* 6 */}
            <BarSeries color="#ef7d00" data={healthData} />
            {/* 7 */}
            <BarSeries color="#6c3b00" data={hospitalityData} />
            {/* 8 */}
            <BarSeries color="#00aed5" data={officesData} />
            {/* 9 */}
            <BarSeries color="#8C0303" data={industrialData} />
            {/* 10 */}
            <BarSeries color="#A6036D" data={warehousesData} />
          </XYPlot>
        </div>

        {/* <div className="headerSettlement">
           <Divider textAlign="left" flexItem>
             {" "}
             <Chip label="Projections" />
           </Divider>
         </div> */}

        <Divider textAlign="left" flexItem>
          {" "}
          <b>
            CO2e emissions from the energy use in commercial buildings by
            building type and source of heating energy
          </b>
        </Divider>

        <div className="buildings-baseline">
          <XYPlot
            width={1000}
            height={500}
            xType="ordinal"
            yDomain={[0, 45000]}
            stackBy="y"
          >
            <HorizontalGridLines style={{ stroke: "#B7E9ED" }} />
            <VerticalGridLines style={{ stroke: "#B7E9ED" }} />
            <VerticalBarSeries className="LucStackedBarchart" />
            <XAxis
              title="Year"
              style={{
                line: { stroke: "#ADDDE1" },
                ticks: { stroke: "#ADDDE1" },
                text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
              }}
            />
            <YAxis title="Energy use  tC02e" />
            {/* 1 */}
            <BarSeries color="#ffdf43" data={apartmentsData} />
            {/* 2 */}
            <BarSeries color="#76918e" data={terracedData} />
            {/* 3 */}
            <BarSeries color="#ce143d" data={semidetachedData} />
            {/* 4 */}
            <BarSeries color="#d6e7d9" data={detachedData} />
            {/* 5 */}
            <BarSeries color="#002117" data={retailData} />
            {/* 6 */}
            <BarSeries color="#ef7d00" data={healthData} />
            {/* 7 */}
            <BarSeries color="#6c3b00" data={hospitalityData} />
            {/* 8 */}
            <BarSeries color="#00aed5" data={officesData} />
            {/* 9 */}
            <BarSeries color="#8C0303" data={industrialData} />
            {/* 10 */}
            <BarSeries color="#A6036D" data={warehousesData} />
          </XYPlot>
        </div>
      </article>
    );
  }
};

BuildingsPoliciesCharts.propTypes = {
  //  residential: PropTypes.object.isRequired,
  //  commercial: PropTypes.object.isRequired,
  //  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  baseline: PropTypes.object.isRequired,
};
