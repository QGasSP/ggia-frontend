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

  const policyQuantification = {
    "2022": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2023": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2024": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2025": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2026": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2027": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2028": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2029": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2030": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2031": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2032": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2033": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2034": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2035": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2036": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2037": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2038": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2039": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2040": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2041": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2042": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2043": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2044": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2045": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2046": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2047": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2048": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2049": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    },
    "2050": {
        "apartments":  10,
        "terraced":  10,
        "semidetached":  10,
        "detached":  10,
        "retail":  10,
        "health":  10,
        "hospitality":  10,
        "offices":  10,
        "industrial":  10,
        "warehouses":  10,
        "other": 1
    }
  };
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
    apartmentsData.push({ x: i, y: policyQuantification[i].apartments });
    terracedData.push({ x: i, y: policyQuantification[i].terraced });
    semidetachedData.push({ x: i, y: policyQuantification[i].semidetached });
    detachedData.push({ x: i, y: policyQuantification[i].detached });
    retailData.push({ x: i, y: policyQuantification[i].retail });
    healthData.push({ x: i, y: policyQuantification[i].health });
    hospitalityData.push({ x: i, y: policyQuantification[i].hospitality });
    officesData.push({ x: i, y: policyQuantification[i].offices });
    industrialData.push({ x: i, y: policyQuantification[i].industrial });
    warehousesData.push({ x: i, y: policyQuantification[i].warehouses });
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
            New Construction
          </b>
        </Divider>

        <div className="buildings-baseline">
          <XYPlot
            width={1000}
            height={500}
            xType="ordinal"
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
          Policy Qunatification
          </b>
        </Divider>

        <div className="buildings-baseline">
          <XYPlot
            width={1000}
            height={500}
            xType="ordinal"
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
