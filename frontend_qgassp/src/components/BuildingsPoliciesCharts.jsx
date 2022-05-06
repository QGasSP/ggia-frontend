import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/u1planner.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  RadialChart,
} from "react-vis";

import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { useNavigate } from "react-router-dom";
import { LineLegendBuildingBaselineCharts } from "./LineLegendBuildingBaselineCharts";

/**
 * BuildingsPoliciesCharts baseline
 * @return {}
 */
const BarSeries = VerticalBarSeries;
export const BuildingsPoliciesCharts = ({newConstructionResponse, policyQuantificationResponse, year }) => {
  newConstructionResponse = newConstructionResponse ? newConstructionResponse : JSON.parse(localStorage.newConstructionResponse);
  policyQuantificationResponse = policyQuantificationResponse ? policyQuantificationResponse : JSON.parse(localStorage.policyQuantificationResponse);
  year = year ? year : localStorage.year;
  const navigate = useNavigate();
  // #region data distribution NewConstruction
  const apartmentsDataNewConstruction = [];
  const terracedDataNewConstruction = [];
  const semidetachedDataNewConstruction = [];
  const detachedDataNewConstruction = [];
  const retailDataNewConstruction = [];
  const healthDataNewConstruction = [];
  const hospitalityDataNewConstruction = [];
  const officesDataNewConstruction = [];
  const industrialDataNewConstruction = [];
  const warehousesDataNewConstruction = [];

  for (let i = year; i < 2051; i++) {
    apartmentsDataNewConstruction.push({ x: i, y: newConstructionResponse[i].apartment });
    terracedDataNewConstruction.push({ x: i, y: newConstructionResponse[i].terraced });
    semidetachedDataNewConstruction.push({ x: i, y: newConstructionResponse[i].semiDetached });
    detachedDataNewConstruction.push({ x: i, y: newConstructionResponse[i].detached });
    retailDataNewConstruction.push({ x: i, y: newConstructionResponse[i].retail });
    healthDataNewConstruction.push({ x: i, y: newConstructionResponse[i].health });
    hospitalityDataNewConstruction.push({ x: i, y: newConstructionResponse[i].hospitality });
    officesDataNewConstruction.push({ x: i, y: newConstructionResponse[i].offices });
    industrialDataNewConstruction.push({ x: i, y: newConstructionResponse[i].industrial });
    warehousesDataNewConstruction.push({ x: i, y: newConstructionResponse[i].warehouses });
  }
  // #endregion

  // #region data distribution PolicyQuant
  const apartmentsDataPolicyQuant = [];
  const terracedDataPolicyQuant = [];
  const semidetachedDataPolicyQuant = [];
  const detachedDataPolicyQuant = [];
  const retailDataPolicyQuant = [];
  const healthDataPolicyQuant = [];
  const hospitalityDataPolicyQuant = [];
  const officesDataPolicyQuant = [];
  const industrialDataPolicyQuant = [];
  const warehousesDataPolicyQuant = [];

  for (let i = year; i < 2051; i++) {
    apartmentsDataPolicyQuant.push({ x: i, y: policyQuantificationResponse[i].apartment });
    terracedDataPolicyQuant.push({ x: i, y: policyQuantificationResponse[i].terraced });
    semidetachedDataPolicyQuant.push({ x: i, y: policyQuantificationResponse[i].semiDetached });
    detachedDataPolicyQuant.push({ x: i, y: policyQuantificationResponse[i].detached });
    retailDataPolicyQuant.push({ x: i, y: policyQuantificationResponse[i].retail });
    healthDataPolicyQuant.push({ x: i, y: policyQuantificationResponse[i].health });
    hospitalityDataPolicyQuant.push({ x: i, y: policyQuantificationResponse[i].hospitality });
    officesDataPolicyQuant.push({ x: i, y: policyQuantificationResponse[i].offices });
    industrialDataPolicyQuant.push({ x: i, y: policyQuantificationResponse[i].industrial });
    warehousesDataPolicyQuant.push({ x: i, y: policyQuantificationResponse[i].warehouses });
  }
  // #endregion

   if (Object.keys(policyQuantificationResponse).length !== 0 && Object.keys(newConstructionResponse).length !== 0) {
    return (
      <section>
        <div className="headerSettlement">
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="POLICY QUANTIFICATION AND NEW SETTLEMENT RESULTS" />
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
            <BarSeries color="#ffdf43" opacity={0.6} data={apartmentsDataNewConstruction} />
            {/* 2 */}
            <BarSeries color="#76918e" opacity={0.6} data={terracedDataNewConstruction} />
            {/* 3 */}
            <BarSeries color="#ce143d" opacity={0.6} data={semidetachedDataNewConstruction} />
            {/* 4 */}
            <BarSeries color="#d6e7d9" opacity={0.6} data={detachedDataNewConstruction} />
            {/* 5 */}
            <BarSeries color="#002117" opacity={0.6} data={retailDataNewConstruction} />
            {/* 6 */}
            <BarSeries color="#ef7d00" opacity={0.6} data={healthDataNewConstruction} />
            {/* 7 */}
            <BarSeries color="#6c3b00" opacity={0.6} data={hospitalityDataNewConstruction} />
            {/* 8 */}
            <BarSeries color="#00aed5" opacity={0.6} data={officesDataNewConstruction} />
            {/* 9 */}
            <BarSeries color="#8C0303" opacity={0.6} data={industrialDataNewConstruction} />
            {/* 10 */}
            <BarSeries color="#A6036D" opacity={0.6} data={warehousesDataNewConstruction} />
          </XYPlot>
        </div>
        <div className="luc_legendline">
          <LineLegendBuildingBaselineCharts />
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
            <BarSeries color="#ffdf43" opacity={0.6} data={apartmentsDataPolicyQuant} />
            {/* 2 */}
            <BarSeries color="#76918e" opacity={0.6} data={terracedDataPolicyQuant} />
            {/* 3 */}
            <BarSeries color="#ce143d" opacity={0.6} data={semidetachedDataPolicyQuant} />
            {/* 4 */}
            <BarSeries color="#d6e7d9" opacity={0.6} data={detachedDataPolicyQuant} />
            {/* 5 */}
            <BarSeries color="#002117" opacity={0.6} data={retailDataPolicyQuant} />
            {/* 6 */}
            <BarSeries color="#ef7d00" opacity={0.6} data={healthDataPolicyQuant} />
            {/* 7 */}
            <BarSeries color="#6c3b00" opacity={0.6} data={hospitalityDataPolicyQuant} />
            {/* 8 */}
            <BarSeries color="#00aed5" opacity={0.6} data={officesDataPolicyQuant} />
            {/* 9 */}
            <BarSeries color="#8C0303" opacity={0.6} data={industrialDataPolicyQuant} />
            {/* 10 */}
            <BarSeries color="#A6036D" opacity={0.6} data={warehousesDataPolicyQuant} />
          </XYPlot>
        </div>
        <div className="luc_legendline">
          <LineLegendBuildingBaselineCharts />
        </div>
        <div className="buildings-buttons">
          <div className="">
            <Button
              size="small"
              value="backProjections"
              onClick={() => navigate("../buildingsPolicies", { replace: true })}
              label="&laquo; Previous"
              secondary
            />
          </div>
        </div>
        
      </section>
    );
  }
};

BuildingsPoliciesCharts.propTypes = {
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  newConstructionResponse: PropTypes.object.isRequired,
  policyQuantificationResponse: PropTypes.object.isRequired
};
