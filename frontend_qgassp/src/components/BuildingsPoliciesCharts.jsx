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
export const BuildingsPoliciesCharts = ({ baseline, newConstructionResponse, policyQuantificationResponseDummy, country, year }) => {
  const [errorBBC, setErrorBBC] = useState("");

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
    apartmentsData.push({ x: i, y: policyQuantificationResponseDummy[i].apartments });
    terracedData.push({ x: i, y: policyQuantificationResponseDummy[i].terraced });
    semidetachedData.push({ x: i, y: policyQuantificationResponseDummy[i].semidetached });
    detachedData.push({ x: i, y: policyQuantificationResponseDummy[i].detached });
    retailData.push({ x: i, y: policyQuantificationResponseDummy[i].retail });
    healthData.push({ x: i, y: policyQuantificationResponseDummy[i].health });
    hospitalityData.push({ x: i, y: policyQuantificationResponseDummy[i].hospitality });
    officesData.push({ x: i, y: policyQuantificationResponseDummy[i].offices });
    industrialData.push({ x: i, y: policyQuantificationResponseDummy[i].industrial });
    warehousesData.push({ x: i, y: policyQuantificationResponseDummy[i].warehouses });
  }
  // #endregion

   if (Object.keys(policyQuantificationResponseDummy).length !== 0) {
    return (
      <article>
        <div className="headerSettlement">
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="POLICY QUANTIFICATION RESULTS" />
          </Divider>
        </div>
        <div className="luc_alert_container">
          <Divider textAlign="left" flexItem>
            <b>
              New Construction
            </b>
          </Divider>
        </div>

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
            <BarSeries color="#ffdf43" opacity={0.6} data={apartmentsData} />
            {/* 2 */}
            <BarSeries color="#76918e" opacity={0.6} data={terracedData} />
            {/* 3 */}
            <BarSeries color="#ce143d" opacity={0.6} data={semidetachedData} />
            {/* 4 */}
            <BarSeries color="#d6e7d9" opacity={0.6} data={detachedData} />
            {/* 5 */}
            <BarSeries color="#002117" opacity={0.6} data={retailData} />
            {/* 6 */}
            <BarSeries color="#ef7d00" opacity={0.6} data={healthData} />
            {/* 7 */}
            <BarSeries color="#6c3b00" opacity={0.6} data={hospitalityData} />
            {/* 8 */}
            <BarSeries color="#00aed5" opacity={0.6} data={officesData} />
            {/* 9 */}
            <BarSeries color="#8C0303" opacity={0.6} data={industrialData} />
            {/* 10 */}
            <BarSeries color="#A6036D" opacity={0.6} data={warehousesData} />
          </XYPlot>
        </div>

        <div className="luc_alert_container">
          <Divider textAlign="left" flexItem>
            {" "}
            <b>
            Policy Quantification
            </b>
          </Divider>
        </div>

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
            <BarSeries color="#ffdf43" opacity={0.6} data={apartmentsData} />
            {/* 2 */}
            <BarSeries color="#76918e" opacity={0.6} data={terracedData} />
            {/* 3 */}
            <BarSeries color="#ce143d" opacity={0.6} data={semidetachedData} />
            {/* 4 */}
            <BarSeries color="#d6e7d9" opacity={0.6} data={detachedData} />
            {/* 5 */}
            <BarSeries color="#002117" opacity={0.6} data={retailData} />
            {/* 6 */}
            <BarSeries color="#ef7d00" opacity={0.6} data={healthData} />
            {/* 7 */}
            <BarSeries color="#6c3b00" opacity={0.6} data={hospitalityData} />
            {/* 8 */}
            <BarSeries color="#00aed5" opacity={0.6} data={officesData} />
            {/* 9 */}
            <BarSeries color="#8C0303" opacity={0.6} data={industrialData} />
            {/* 10 */}
            <BarSeries color="#A6036D" opacity={0.6} data={warehousesData} />
          </XYPlot>
        </div>

      </article>
    );
  }
};

BuildingsPoliciesCharts.propTypes = {
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  baseline: PropTypes.object.isRequired,
  newConstructionResponse: PropTypes.object.isRequired,
  policyQuantificationResponseDummy: PropTypes.object.isRequired
};
