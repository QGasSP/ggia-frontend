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
import urlPrefix from "../Config";

/**
 * BuildingBaselineCharts baseline
 * @return {}
 */
const BarSeries = VerticalBarSeries;
export const BuildingBaselineCharts = ({
  country,
  year,
  baseline,
}) => {

  const [nextNewUnitsView, setNextNewUnitsView] = useState(false);
// dummy reponse object
  const response = {
    status: "success",
    data: {
      2022: {
        apartments: 2000,
        terraced: 2000,
        semidetached: 2000,
        detached: 2000,
        retail: 2000,
        health: 2000,
        hospitality: 2000,
        offices: 2000,
        industrial: 2000,
        warehouses: 2000,
      },
      2023: {
        apartments: 2000,
        terraced: 2000,
        semidetached: 2000,
        detached: 2000,
        retail: 2000,
        health: 2000,
        hospitality: 2000,
        offices: 2000,
        industrial: 2000,
        warehouses: 2000,
      },
      2024: {
        apartments: 1900,
        terraced: 1900,
        semidetached: 1900,
        detached: 1900,
        retail: 1900,
        health: 1900,
        hospitality: 1900,
        offices: 1900,
        industrial: 1900,
        warehouses: 1900,
      },
      2025: {
        apartments: 1800,
        terraced: 1800,
        semidetached: 1800,
        detached: 1800,
        retail: 1800,
        health: 1800,
        hospitality: 1800,
        offices: 1800,
        industrial: 1800,
        warehouses: 1800,
      },
      2026: {
        apartments: 1700,
        terraced: 1700,
        semidetached: 1700,
        detached: 1700,
        retail: 1700,
        health: 1700,
        hospitality: 1700,
        offices: 1700,
        industrial: 1700,
        warehouses: 1700,
      },
      2027: {
        apartments: 1600,
        terraced: 1600,
        semidetached: 1600,
        detached: 1600,
        retail: 1600,
        health: 1600,
        hospitality: 1600,
        offices: 1600,
        industrial: 1600,
        warehouses: 1600,
      },
      2028: {
        apartments: 1500,
        terraced: 1500,
        semidetached: 1500,
        detached: 1500,
        retail: 1500,
        health: 1500,
        hospitality: 1500,
        offices: 1500,
        industrial: 1500,
        warehouses: 1500,
      },
      2029: {
        apartments: 1400,
        terraced: 1400,
        semidetached: 1400,
        detached: 1400,
        retail: 1400,
        health: 1400,
        hospitality: 1400,
        offices: 1400,
        industrial: 1400,
        warehouses: 1400,
      },
      2030: {
        apartments: 1300,
        terraced: 1300,
        semidetached: 1300,
        detached: 1300,
        retail: 1300,
        health: 1300,
        hospitality: 1300,
        offices: 1300,
        industrial: 1300,
        warehouses: 1300,
      },
      2031: {
        apartments: 1200,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2032: {
        apartments: 1100,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2033: {
        apartments: 1100,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2034: {
        apartments: 1000,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2035: {
        apartments: 900,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2036: {
        apartments: 900,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2037: {
        apartments: 900,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2038: {
        apartments: 800,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2039: {
        apartments: 800,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2040: {
        apartments: 800,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2041: {
        apartments: 800,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2042: {
        apartments: 800,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2043: {
        apartments: 800,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2044: {
        apartments: 800,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2045: {
        apartments: 800,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2046: {
        apartments: 800,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2047: {
        apartments: 800,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2048: {
        apartments: 800,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2049: {
        apartments: 800,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
      },
      2050: {
        apartments: 800,
        terraced: 800,
        semidetached: 800,
        detached: 800,
        retail: 800,
        health: 800,
        hospitality: 800,
        offices: 800,
        industrial: 800,
        warehouses: 800,
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

  if (nextNewUnitsView === false && Object.keys(baseline).length !== 0) {
    return (
      <article>
        <Divider textAlign="left" flexItem>
          <Chip label="BUILDINGS BASELINE RESULTS" />
        </Divider>
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
  } else if (nextNewUnitsView === true) {
    return (
      <BuildingsNewUnits
        baseline={baseline}
        //  emissionResidential={emissionResidential}
        //  emissionCommercial={emissionCommercial}
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
  baseline: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
};

BuildingBaselineCharts.defaultProps = {
  baseline: {},
  year: 2030,
  country: "Estonia",
};
