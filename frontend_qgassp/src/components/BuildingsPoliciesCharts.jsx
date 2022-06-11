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
    apartmentsData.push({ x: i, y: policyQuantificationResponse.data.graph[i].apartment });
    terracedData.push({ x: i, y: policyQuantificationResponse.data.graph[i].terraced });
    semidetachedData.push({ x: i, y: policyQuantificationResponse.data.graph[i].semiDetached });
    detachedData.push({ x: i, y: policyQuantificationResponse.data.graph[i].detached });
    retailData.push({ x: i, y: policyQuantificationResponse.data.graph[i].retail });
    healthData.push({ x: i, y: policyQuantificationResponse.data.graph[i].health });
    hospitalityData.push({ x: i, y: policyQuantificationResponse.data.graph[i].hospitality });
    officesData.push({ x: i, y: policyQuantificationResponse.data.graph[i].offices });
    industrialData.push({ x: i, y: policyQuantificationResponse.data.graph[i].industrial });
    warehousesData.push({ x: i, y: policyQuantificationResponse.data.graph[i].warehouses });
  }
  // #endregion
   // #region residential co2
   const apartmentTotal = 
   (policyQuantificationResponse.data.settlementsTable.apartment.electricity + 
   policyQuantificationResponse.data.settlementsTable.apartment.gas + 
   policyQuantificationResponse.data.settlementsTable.apartment.oil + 
   policyQuantificationResponse.data.settlementsTable.apartment.heat + 
   policyQuantificationResponse.data.settlementsTable.apartment.renewable + 
   policyQuantificationResponse.data.settlementsTable.apartment.wood + 
   policyQuantificationResponse.data.settlementsTable.apartment.coal + 
   policyQuantificationResponse.data.settlementsTable.apartment.peat);

const terracedTotal = 
   (policyQuantificationResponse.data.settlementsTable.terraced.electricity + 
   policyQuantificationResponse.data.settlementsTable.terraced.gas + 
   policyQuantificationResponse.data.settlementsTable.terraced.oil + 
   policyQuantificationResponse.data.settlementsTable.terraced.heat + 
   policyQuantificationResponse.data.settlementsTable.terraced.renewable + 
   policyQuantificationResponse.data.settlementsTable.terraced.wood + 
   policyQuantificationResponse.data.settlementsTable.terraced.coal + 
   policyQuantificationResponse.data.settlementsTable.terraced.peat);

const semiDetachedTotal = 
   (policyQuantificationResponse.data.settlementsTable.semiDetached.electricity + 
   policyQuantificationResponse.data.settlementsTable.semiDetached.gas + 
   policyQuantificationResponse.data.settlementsTable.semiDetached.oil + 
   policyQuantificationResponse.data.settlementsTable.semiDetached.heat + 
   policyQuantificationResponse.data.settlementsTable.semiDetached.renewable + 
   policyQuantificationResponse.data.settlementsTable.semiDetached.wood + 
   policyQuantificationResponse.data.settlementsTable.semiDetached.coal + 
   policyQuantificationResponse.data.settlementsTable.semiDetached.peat);

const detachedTotal = 
   (policyQuantificationResponse.data.settlementsTable.detached.electricity + 
   policyQuantificationResponse.data.settlementsTable.detached.gas + 
   policyQuantificationResponse.data.settlementsTable.detached.oil + 
   policyQuantificationResponse.data.settlementsTable.detached.heat + 
   policyQuantificationResponse.data.settlementsTable.detached.renewable + 
   policyQuantificationResponse.data.settlementsTable.detached.wood + 
   policyQuantificationResponse.data.settlementsTable.detached.coal + 
   policyQuantificationResponse.data.settlementsTable.detached.peat);
// #endregion

// #region commercial co2
const retailTotal = 
(policyQuantificationResponse.data.policyTable.retail.electricity + 
policyQuantificationResponse.data.policyTable.retail.gas + 
policyQuantificationResponse.data.policyTable.retail.oil + 
policyQuantificationResponse.data.policyTable.retail.heat + 
policyQuantificationResponse.data.policyTable.retail.renewable + 
policyQuantificationResponse.data.policyTable.retail.wood + 
policyQuantificationResponse.data.policyTable.retail.coal + 
policyQuantificationResponse.data.policyTable.retail.peat);

const healthTotal = 
(policyQuantificationResponse.data.policyTable.health.electricity + 
policyQuantificationResponse.data.policyTable.health.gas + 
policyQuantificationResponse.data.policyTable.health.oil + 
policyQuantificationResponse.data.policyTable.health.heat + 
policyQuantificationResponse.data.policyTable.health.renewable + 
policyQuantificationResponse.data.policyTable.health.wood + 
policyQuantificationResponse.data.policyTable.health.coal + 
policyQuantificationResponse.data.policyTable.health.peat);

const hospitalityTotal = 
(policyQuantificationResponse.data.policyTable.hospitality.electricity + 
policyQuantificationResponse.data.policyTable.hospitality.gas + 
policyQuantificationResponse.data.policyTable.hospitality.oil + 
policyQuantificationResponse.data.policyTable.hospitality.heat + 
policyQuantificationResponse.data.policyTable.hospitality.renewable + 
policyQuantificationResponse.data.policyTable.hospitality.wood + 
policyQuantificationResponse.data.policyTable.hospitality.coal + 
policyQuantificationResponse.data.policyTable.hospitality.peat);

const officesTotal = 
(policyQuantificationResponse.data.policyTable.offices.electricity + 
policyQuantificationResponse.data.policyTable.offices.gas + 
policyQuantificationResponse.data.policyTable.offices.oil + 
policyQuantificationResponse.data.policyTable.offices.heat + 
policyQuantificationResponse.data.policyTable.offices.renewable + 
policyQuantificationResponse.data.policyTable.offices.wood + 
policyQuantificationResponse.data.policyTable.offices.coal + 
policyQuantificationResponse.data.policyTable.offices.peat);

const industrialTotal = 
(policyQuantificationResponse.data.policyTable.industrial.electricity + 
policyQuantificationResponse.data.policyTable.industrial.gas + 
policyQuantificationResponse.data.policyTable.industrial.oil + 
policyQuantificationResponse.data.policyTable.industrial.heat + 
policyQuantificationResponse.data.policyTable.industrial.renewable + 
policyQuantificationResponse.data.policyTable.industrial.wood + 
policyQuantificationResponse.data.policyTable.industrial.coal + 
policyQuantificationResponse.data.policyTable.industrial.peat);

const warehousesTotal = 
(policyQuantificationResponse.data.policyTable.warehouses.electricity + 
policyQuantificationResponse.data.policyTable.warehouses.gas + 
policyQuantificationResponse.data.policyTable.warehouses.oil + 
policyQuantificationResponse.data.policyTable.warehouses.heat + 
policyQuantificationResponse.data.policyTable.warehouses.renewable + 
policyQuantificationResponse.data.policyTable.warehouses.wood + 
policyQuantificationResponse.data.policyTable.warehouses.coal + 
policyQuantificationResponse.data.policyTable.warehouses.peat);
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
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.apartment.electricity)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.apartment.gas)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.apartment.oil)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.apartment.coal)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.apartment.peat)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.apartment.wood)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.apartment.renewable)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.apartment.heat)}</td>
            <td>{Math.round(apartmentTotal)}</td>
          </tr>
          <tr>
            <td>Terraced</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.terraced.electricity)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.terraced.gas)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.terraced.oil)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.terraced.coal)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.terraced.peat)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.terraced.wood)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.terraced.renewable)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.terraced.heat)}</td>
            <td>{Math.round(terracedTotal)}</td>
          </tr>
          <tr>
            <td>Semi-detached</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.semiDetached.electricity)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.semiDetached.gas)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.semiDetached.oil)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.semiDetached.coal)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.semiDetached.peat)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.semiDetached.wood)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.semiDetached.renewable)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.semiDetached.heat)}</td>
            <td>{Math.round(semiDetachedTotal)}</td>
          </tr>
          <tr>
            <td>Detached</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.detached.electricity)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.detached.gas)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.detached.oil)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.detached.coal)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.detached.peat)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.detached.wood)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.detached.renewable)}</td>
            <td>{Math.round(policyQuantificationResponse.data.settlementsTable.detached.heat)}</td>
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
            <td>{Math.round(policyQuantificationResponse.data.policyTable.retail.electricity)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.retail.gas)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.retail.oil)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.retail.coal)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.retail.peat)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.retail.wood)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.retail.renewable)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.retail.heat)}</td>
            <td>{Math.round(retailTotal)}</td>
          </tr>
          <tr>
            <td>Health</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.health.electricity)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.health.gas)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.health.oil)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.health.coal)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.health.peat)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.health.wood)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.health.renewable)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.health.heat)}</td>
            <td>{Math.round(healthTotal)}</td>
          </tr>
          <tr>
            <td>Hospitality</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.hospitality.electricity)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.hospitality.gas)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.hospitality.oil)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.hospitality.coal)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.hospitality.peat)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.hospitality.wood)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.hospitality.renewable)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.hospitality.heat)}</td>
            <td>{Math.round(hospitalityTotal)}</td>
          </tr>
          <tr>
            <td>Offices</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.offices.electricity)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.offices.gas)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.offices.oil)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.offices.coal)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.offices.peat)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.offices.wood)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.offices.renewable)}</td>
            <td>{Math.round(policyQuantificationResponse.data.policyTable.offices.heat)}</td>
            <td>{Math.round(officesTotal)}</td>
          </tr>
          <tr>
              <td>Industrial</td>
              <td>{Math.round(policyQuantificationResponse.data.policyTable.industrial.electricity)}</td>
              <td>{Math.round(policyQuantificationResponse.data.policyTable.industrial.gas)}</td>
              <td>{Math.round(policyQuantificationResponse.data.policyTable.industrial.oil)}</td>
              <td>{Math.round(policyQuantificationResponse.data.policyTable.industrial.coal)}</td>
              <td>{Math.round(policyQuantificationResponse.data.policyTable.industrial.peat)}</td>
              <td>{Math.round(policyQuantificationResponse.data.policyTable.industrial.wood)}</td>
              <td>{Math.round(policyQuantificationResponse.data.policyTable.industrial.renewable)}</td>
              <td>{Math.round(policyQuantificationResponse.data.policyTable.industrial.heat)}</td>
              <td>{Math.round(industrialTotal)}</td>
          </tr>
          <tr>
              <td>Warehouses</td>
              <td>{Math.round(policyQuantificationResponse.data.policyTable.warehouses.electricity)}</td>
              <td>{Math.round(policyQuantificationResponse.data.policyTable.warehouses.gas)}</td>
              <td>{Math.round(policyQuantificationResponse.data.policyTable.warehouses.oil)}</td>
              <td>{Math.round(policyQuantificationResponse.data.policyTable.warehouses.coal)}</td>
              <td>{Math.round(policyQuantificationResponse.data.policyTable.warehouses.peat)}</td>
              <td>{Math.round(policyQuantificationResponse.data.policyTable.warehouses.wood)}</td>
              <td>{Math.round(policyQuantificationResponse.data.policyTable.warehouses.renewable)}</td>
              <td>{Math.round(policyQuantificationResponse.data.policyTable.warehouses.heat)}</td>
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
