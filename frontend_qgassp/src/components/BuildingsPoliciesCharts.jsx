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
  // const navigate = useNavigate();

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
            <td>{policyQuantificationResponse.settlementsTable.apartment.electricity}</td>
            <td>{policyQuantificationResponse.settlementsTable.apartment.gas}</td>
            <td>{policyQuantificationResponse.settlementsTable.apartment.oil}</td>
            <td>{policyQuantificationResponse.settlementsTable.apartment.coal}</td>
            <td>{policyQuantificationResponse.settlementsTable.apartment.peat}</td>
            <td>{policyQuantificationResponse.settlementsTable.apartment.wood}</td>
            <td>{policyQuantificationResponse.settlementsTable.apartment.renewable}</td>
            <td>{policyQuantificationResponse.settlementsTable.apartment.heat}</td>
            <td>{apartmentTotal}</td>
          </tr>
          <tr>
            <td>Terraced</td>
            <td>{policyQuantificationResponse.settlementsTable.terraced.electricity}</td>
            <td>{policyQuantificationResponse.settlementsTable.terraced.gas}</td>
            <td>{policyQuantificationResponse.settlementsTable.terraced.oil}</td>
            <td>{policyQuantificationResponse.settlementsTable.terraced.coal}</td>
            <td>{policyQuantificationResponse.settlementsTable.terraced.peat}</td>
            <td>{policyQuantificationResponse.settlementsTable.terraced.wood}</td>
            <td>{policyQuantificationResponse.settlementsTable.terraced.renewable}</td>
            <td>{policyQuantificationResponse.settlementsTable.terraced.heat}</td>
            <td>{terracedTotal}</td>
          </tr>
          <tr>
            <td>Semi-detached</td>
            <td>{policyQuantificationResponse.settlementsTable.semiDetached.electricity}</td>
            <td>{policyQuantificationResponse.settlementsTable.semiDetached.gas}</td>
            <td>{policyQuantificationResponse.settlementsTable.semiDetached.oil}</td>
            <td>{policyQuantificationResponse.settlementsTable.semiDetached.coal}</td>
            <td>{policyQuantificationResponse.settlementsTable.semiDetached.peat}</td>
            <td>{policyQuantificationResponse.settlementsTable.semiDetached.wood}</td>
            <td>{policyQuantificationResponse.settlementsTable.semiDetached.renewable}</td>
            <td>{policyQuantificationResponse.settlementsTable.semiDetached.heat}</td>
            <td>{semiDetachedTotal}</td>
          </tr>
          <tr>
            <td>Detached</td>
            <td>{policyQuantificationResponse.settlementsTable.detached.electricity}</td>
            <td>{policyQuantificationResponse.settlementsTable.detached.gas}</td>
            <td>{policyQuantificationResponse.settlementsTable.detached.oil}</td>
            <td>{policyQuantificationResponse.settlementsTable.detached.coal}</td>
            <td>{policyQuantificationResponse.settlementsTable.detached.peat}</td>
            <td>{policyQuantificationResponse.settlementsTable.detached.wood}</td>
            <td>{policyQuantificationResponse.settlementsTable.detached.renewable}</td>
            <td>{policyQuantificationResponse.settlementsTable.detached.heat}</td>
            <td>{detachedTotal}</td>
          </tr>
          <tr>
            <td colSpan={9}>Residential buildings total</td>
            <td>{detachedTotal + apartmentTotal + semiDetachedTotal + terracedTotal}</td>
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
            <td>{policyQuantificationResponse.policyTable.retail.electricity}</td>
            <td>{policyQuantificationResponse.policyTable.retail.gas}</td>
            <td>{policyQuantificationResponse.policyTable.retail.oil}</td>
            <td>{policyQuantificationResponse.policyTable.retail.coal}</td>
            <td>{policyQuantificationResponse.policyTable.retail.peat}</td>
            <td>{policyQuantificationResponse.policyTable.retail.wood}</td>
            <td>{policyQuantificationResponse.policyTable.retail.renewable}</td>
            <td>{policyQuantificationResponse.policyTable.retail.heat}</td>
            <td>{retailTotal}</td>
          </tr>
          <tr>
            <td>Health</td>
            <td>{policyQuantificationResponse.policyTable.health.electricity}</td>
            <td>{policyQuantificationResponse.policyTable.health.gas}</td>
            <td>{policyQuantificationResponse.policyTable.health.oil}</td>
            <td>{policyQuantificationResponse.policyTable.health.coal}</td>
            <td>{policyQuantificationResponse.policyTable.health.peat}</td>
            <td>{policyQuantificationResponse.policyTable.health.wood}</td>
            <td>{policyQuantificationResponse.policyTable.health.renewable}</td>
            <td>{policyQuantificationResponse.policyTable.health.heat}</td>
            <td>{healthTotal}</td>
          </tr>
          <tr>
            <td>Hospitality</td>
            <td>{policyQuantificationResponse.policyTable.hospitality.electricity}</td>
            <td>{policyQuantificationResponse.policyTable.hospitality.gas}</td>
            <td>{policyQuantificationResponse.policyTable.hospitality.oil}</td>
            <td>{policyQuantificationResponse.policyTable.hospitality.coal}</td>
            <td>{policyQuantificationResponse.policyTable.hospitality.peat}</td>
            <td>{policyQuantificationResponse.policyTable.hospitality.wood}</td>
            <td>{policyQuantificationResponse.policyTable.hospitality.renewable}</td>
            <td>{policyQuantificationResponse.policyTable.hospitality.heat}</td>
            <td>{hospitalityTotal}</td>
          </tr>
          <tr>
            <td>Offices</td>
            <td>{policyQuantificationResponse.policyTable.offices.electricity}</td>
            <td>{policyQuantificationResponse.policyTable.offices.gas}</td>
            <td>{policyQuantificationResponse.policyTable.offices.oil}</td>
            <td>{policyQuantificationResponse.policyTable.offices.coal}</td>
            <td>{policyQuantificationResponse.policyTable.offices.peat}</td>
            <td>{policyQuantificationResponse.policyTable.offices.wood}</td>
            <td>{policyQuantificationResponse.policyTable.offices.renewable}</td>
            <td>{policyQuantificationResponse.policyTable.offices.heat}</td>
            <td>{officesTotal}</td>
          </tr>
          <tr>
              <td>Industrial</td>
              <td>{policyQuantificationResponse.policyTable.industrial.electricity}</td>
              <td>{policyQuantificationResponse.policyTable.industrial.gas}</td>
              <td>{policyQuantificationResponse.policyTable.industrial.oil}</td>
              <td>{policyQuantificationResponse.policyTable.industrial.coal}</td>
              <td>{policyQuantificationResponse.policyTable.industrial.peat}</td>
              <td>{policyQuantificationResponse.policyTable.industrial.wood}</td>
              <td>{policyQuantificationResponse.policyTable.industrial.renewable}</td>
              <td>{policyQuantificationResponse.policyTable.industrial.heat}</td>
              <td>{industrialTotal}</td>
          </tr>
          <tr>
              <td>Warehouses</td>
              <td>{policyQuantificationResponse.policyTable.warehouses.electricity}</td>
              <td>{policyQuantificationResponse.policyTable.warehouses.gas}</td>
              <td>{policyQuantificationResponse.policyTable.warehouses.oil}</td>
              <td>{policyQuantificationResponse.policyTable.warehouses.coal}</td>
              <td>{policyQuantificationResponse.policyTable.warehouses.peat}</td>
              <td>{policyQuantificationResponse.policyTable.warehouses.wood}</td>
              <td>{policyQuantificationResponse.policyTable.warehouses.renewable}</td>
              <td>{policyQuantificationResponse.policyTable.warehouses.heat}</td>
              <td>{warehousesTotal}</td>
          </tr>
          <tr>
            <td colSpan={9}>Commercial buildings total</td>
            <td>{officesTotal + retailTotal + hospitalityTotal + healthTotal + warehousesTotal + industrialTotal}</td>
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
