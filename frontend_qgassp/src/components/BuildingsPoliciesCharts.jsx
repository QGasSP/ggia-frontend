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
export const BuildingsPoliciesCharts = ({policyQuantificationResponse, year }) => {
  policyQuantificationResponse = policyQuantificationResponse ? policyQuantificationResponse : JSON.parse(localStorage.policyQuantificationResponse);
  year = year ? year : localStorage.year;

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
    apartmentsData.push({ x: i, y: policyQuantificationResponse.graph[i].apartment });
    terracedData.push({ x: i, y: policyQuantificationResponse.graph[i].terraced });
    semidetachedData.push({ x: i, y: policyQuantificationResponse.graph[i].semiDetached });
    detachedData.push({ x: i, y: policyQuantificationResponse.graph[i].detached });
    retailData.push({ x: i, y: policyQuantificationResponse.graph[i].retail });
    healthData.push({ x: i, y: policyQuantificationResponse.graph[i].health });
    hospitalityData.push({ x: i, y: policyQuantificationResponse.graph[i].hospitality });
    officesData.push({ x: i, y: policyQuantificationResponse.graph[i].offices });
    industrialData.push({ x: i, y: policyQuantificationResponse.graph[i].industrial });
    warehousesData.push({ x: i, y: policyQuantificationResponse.graph[i].warehouses });
  }
  // #endregion
   // #region residential co2
   const apartmentTotal = 
   (policyQuantificationResponse.settlementsTable.apartment.electricity + 
   policyQuantificationResponse.settlementsTable.apartment.gas + 
   policyQuantificationResponse.settlementsTable.apartment.oil + 
   policyQuantificationResponse.settlementsTable.apartment.heat + 
   policyQuantificationResponse.settlementsTable.apartment.renewable + 
   policyQuantificationResponse.settlementsTable.apartment.wood + 
   policyQuantificationResponse.settlementsTable.apartment.coal + 
   policyQuantificationResponse.settlementsTable.apartment.peat);

const terracedTotal = 
   (policyQuantificationResponse.settlementsTable.terraced.electricity + 
   policyQuantificationResponse.settlementsTable.terraced.gas + 
   policyQuantificationResponse.settlementsTable.terraced.oil + 
   policyQuantificationResponse.settlementsTable.terraced.heat + 
   policyQuantificationResponse.settlementsTable.terraced.renewable + 
   policyQuantificationResponse.settlementsTable.terraced.wood + 
   policyQuantificationResponse.settlementsTable.terraced.coal + 
   policyQuantificationResponse.settlementsTable.terraced.peat);

const semiDetachedTotal = 
   (policyQuantificationResponse.settlementsTable.semiDetached.electricity + 
   policyQuantificationResponse.settlementsTable.semiDetached.gas + 
   policyQuantificationResponse.settlementsTable.semiDetached.oil + 
   policyQuantificationResponse.settlementsTable.semiDetached.heat + 
   policyQuantificationResponse.settlementsTable.semiDetached.renewable + 
   policyQuantificationResponse.settlementsTable.semiDetached.wood + 
   policyQuantificationResponse.settlementsTable.semiDetached.coal + 
   policyQuantificationResponse.settlementsTable.semiDetached.peat);

const detachedTotal = 
   (policyQuantificationResponse.settlementsTable.detached.electricity + 
   policyQuantificationResponse.settlementsTable.detached.gas + 
   policyQuantificationResponse.settlementsTable.detached.oil + 
   policyQuantificationResponse.settlementsTable.detached.heat + 
   policyQuantificationResponse.settlementsTable.detached.renewable + 
   policyQuantificationResponse.settlementsTable.detached.wood + 
   policyQuantificationResponse.settlementsTable.detached.coal + 
   policyQuantificationResponse.settlementsTable.detached.peat);
// #endregion

// #region commercial co2
const retailTotal = 
(policyQuantificationResponse.policyTable.retail.electricity + 
policyQuantificationResponse.policyTable.retail.gas + 
policyQuantificationResponse.policyTable.retail.oil + 
policyQuantificationResponse.policyTable.retail.heat + 
policyQuantificationResponse.policyTable.retail.renewable + 
policyQuantificationResponse.policyTable.retail.wood + 
policyQuantificationResponse.policyTable.retail.coal + 
policyQuantificationResponse.policyTable.retail.peat);

const healthTotal = 
(policyQuantificationResponse.policyTable.health.electricity + 
policyQuantificationResponse.policyTable.health.gas + 
policyQuantificationResponse.policyTable.health.oil + 
policyQuantificationResponse.policyTable.health.heat + 
policyQuantificationResponse.policyTable.health.renewable + 
policyQuantificationResponse.policyTable.health.wood + 
policyQuantificationResponse.policyTable.health.coal + 
policyQuantificationResponse.policyTable.health.peat);

const hospitalityTotal = 
(policyQuantificationResponse.policyTable.hospitality.electricity + 
policyQuantificationResponse.policyTable.hospitality.gas + 
policyQuantificationResponse.policyTable.hospitality.oil + 
policyQuantificationResponse.policyTable.hospitality.heat + 
policyQuantificationResponse.policyTable.hospitality.renewable + 
policyQuantificationResponse.policyTable.hospitality.wood + 
policyQuantificationResponse.policyTable.hospitality.coal + 
policyQuantificationResponse.policyTable.hospitality.peat);

const officesTotal = 
(policyQuantificationResponse.policyTable.offices.electricity + 
policyQuantificationResponse.policyTable.offices.gas + 
policyQuantificationResponse.policyTable.offices.oil + 
policyQuantificationResponse.policyTable.offices.heat + 
policyQuantificationResponse.policyTable.offices.renewable + 
policyQuantificationResponse.policyTable.offices.wood + 
policyQuantificationResponse.policyTable.offices.coal + 
policyQuantificationResponse.policyTable.offices.peat);

const industrialTotal = 
(policyQuantificationResponse.policyTable.industrial.electricity + 
policyQuantificationResponse.policyTable.industrial.gas + 
policyQuantificationResponse.policyTable.industrial.oil + 
policyQuantificationResponse.policyTable.industrial.heat + 
policyQuantificationResponse.policyTable.industrial.renewable + 
policyQuantificationResponse.policyTable.industrial.wood + 
policyQuantificationResponse.policyTable.industrial.coal + 
policyQuantificationResponse.policyTable.industrial.peat);

const warehousesTotal = 
(policyQuantificationResponse.policyTable.warehouses.electricity + 
policyQuantificationResponse.policyTable.warehouses.gas + 
policyQuantificationResponse.policyTable.warehouses.oil + 
policyQuantificationResponse.policyTable.warehouses.heat + 
policyQuantificationResponse.policyTable.warehouses.renewable + 
policyQuantificationResponse.policyTable.warehouses.wood + 
policyQuantificationResponse.policyTable.warehouses.coal + 
policyQuantificationResponse.policyTable.warehouses.peat);
// #endregion


  const navigate = useNavigate();
  const goBackToBuildingsBaseline = () => navigate("../buildingsPolicies", { replace: true });


   if (Object.keys(policyQuantificationResponse).length !== 0) {
    return (
      <section>
      <div>
        <Divider textAlign="left" flexItem>
          <Chip label="BUILDINGS BASELINE RESULTS" />
        </Divider>
      </div>
      <section>
        <Divider textAlign="left" flexItem>
          <b>
            GHG emissions from the energy use in residential buildings by unit
            type and source of heating energy
          </b>
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
            <td>{Math.round(policyQuantificationResponse.settlementsTable.apartment.electricity)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.apartment.gas)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.apartment.oil)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.apartment.coal)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.apartment.peat)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.apartment.wood)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.apartment.renewable)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.apartment.heat)}</td>
            <td>{Math.round(apartmentTotal)}</td>
          </tr>
          <tr>
            <td>Terraced</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.terraced.electricity)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.terraced.gas)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.terraced.oil)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.terraced.coal)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.terraced.peat)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.terraced.wood)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.terraced.renewable)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.terraced.heat)}</td>
            <td>{Math.round(terracedTotal)}</td>
          </tr>
          <tr>
            <td>Semi-detached</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.semiDetached.electricity)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.semiDetached.gas)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.semiDetached.oil)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.semiDetached.coal)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.semiDetached.peat)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.semiDetached.wood)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.semiDetached.renewable)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.semiDetached.heat)}</td>
            <td>{Math.round(semiDetachedTotal)}</td>
          </tr>
          <tr>
            <td>Detached</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.detached.electricity)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.detached.gas)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.detached.oil)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.detached.coal)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.detached.peat)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.detached.wood)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.detached.renewable)}</td>
            <td>{Math.round(policyQuantificationResponse.settlementsTable.detached.heat)}</td>
            <td>{Math.round(detachedTotal)}</td>
          </tr>
          <tr>
            <td colSpan={9}>Residential buildings total</td>
            <td>{Math.round(detachedTotal + apartmentTotal + semiDetachedTotal + terracedTotal)}</td>
          </tr>
        </tbody>
      </table>

      <section>
        <Divider textAlign="left" flexItem>
          {" "}
          <b>
            CO2 emissions from the energy use in commercial buildings by
            building type and source of heating energy
          </b>
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
            <td>{Math.round(policyQuantificationResponse.policyTable.retail.electricity)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.retail.gas)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.retail.oil)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.retail.coal)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.retail.peat)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.retail.wood)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.retail.renewable)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.retail.heat)}</td>
            <td>{Math.round(retailTotal)}</td>
          </tr>
          <tr>
            <td>Health</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.health.electricity)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.health.gas)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.health.oil)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.health.coal)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.health.peat)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.health.wood)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.health.renewable)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.health.heat)}</td>
            <td>{Math.round(healthTotal)}</td>
          </tr>
          <tr>
            <td>Hospitality</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.hospitality.electricity)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.hospitality.gas)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.hospitality.oil)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.hospitality.coal)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.hospitality.peat)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.hospitality.wood)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.hospitality.renewable)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.hospitality.heat)}</td>
            <td>{Math.round(hospitalityTotal)}</td>
          </tr>
          <tr>
            <td>Offices</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.offices.electricity)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.offices.gas)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.offices.oil)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.offices.coal)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.offices.peat)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.offices.wood)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.offices.renewable)}</td>
            <td>{Math.round(policyQuantificationResponse.policyTable.offices.heat)}</td>
            <td>{Math.round(officesTotal)}</td>
          </tr>
          <tr>
              <td>Industrial</td>
              <td>{Math.round(policyQuantificationResponse.policyTable.industrial.electricity)}</td>
              <td>{Math.round(policyQuantificationResponse.policyTable.industrial.gas)}</td>
              <td>{Math.round(policyQuantificationResponse.policyTable.industrial.oil)}</td>
              <td>{Math.round(policyQuantificationResponse.policyTable.industrial.coal)}</td>
              <td>{Math.round(policyQuantificationResponse.policyTable.industrial.peat)}</td>
              <td>{Math.round(policyQuantificationResponse.policyTable.industrial.wood)}</td>
              <td>{Math.round(policyQuantificationResponse.policyTable.industrial.renewable)}</td>
              <td>{Math.round(policyQuantificationResponse.policyTable.industrial.heat)}</td>
              <td>{Math.round(industrialTotal)}</td>
          </tr>
          <tr>
              <td>Warehouses</td>
              <td>{Math.round(policyQuantificationResponse.policyTable.warehouses.electricity)}</td>
              <td>{Math.round(policyQuantificationResponse.policyTable.warehouses.gas)}</td>
              <td>{Math.round(policyQuantificationResponse.policyTable.warehouses.oil)}</td>
              <td>{Math.round(policyQuantificationResponse.policyTable.warehouses.coal)}</td>
              <td>{Math.round(policyQuantificationResponse.policyTable.warehouses.peat)}</td>
              <td>{Math.round(policyQuantificationResponse.policyTable.warehouses.wood)}</td>
              <td>{Math.round(policyQuantificationResponse.policyTable.warehouses.renewable)}</td>
              <td>{Math.round(policyQuantificationResponse.policyTable.warehouses.heat)}</td>
              <td>{Math.round(warehousesTotal)}</td>
          </tr>
          <tr>
            <td colSpan={9}>Commercial buildings total</td>
            <td>{Math.round(officesTotal + retailTotal + hospitalityTotal + healthTotal + warehousesTotal + industrialTotal)}</td>
          </tr>
        </tbody>
      </table>

      <div className="headerSettlement">
          <Divider textAlign="left" flexItem>
            <Chip label="BASELINE EMISSIONS - ENERGY USE IN BUILDINGS (tCO2e)" />
          </Divider>
      </div>

      <div className="buildings-baseline">
        <XYPlot
          width={800}
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
      <div className="luc_legendline">
        <LineLegendBuildingBaselineCharts />
      </div>

      <div className="buildings-buttons">
        <div className="">
          <Button
            size="small"
            value="backProjections"
            onClick={goBackToBuildingsBaseline}
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
  policyQuantificationResponse: PropTypes.object.isRequired
};
