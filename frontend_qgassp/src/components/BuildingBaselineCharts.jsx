import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/u1planner.css";
import "../css/buildingbaseline.css";
import { useNavigate } from "react-router-dom";
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
  buildingsBaselineResponse,
  population
}) => {
  country = country ? country : localStorage.getItem("country");
  year = year ? year : parseInt(localStorage.getItem("year"));
  population = population ? population : parseInt(localStorage.getItem("population"));
  buildingsBaselineResponse = buildingsBaselineResponse ? buildingsBaselineResponse : JSON.parse(localStorage.buildingsBaselineResponse); 

  const [nextNewUnitsView, setNextNewUnitsView] = useState(false);
  const navigate = useNavigate();

  // #region residential co2
  const apartmentTotal = 
              (buildingsBaselineResponse.residentialTable.apartment.electricity + 
              buildingsBaselineResponse.residentialTable.apartment.gas + 
              buildingsBaselineResponse.residentialTable.apartment.oil + 
              buildingsBaselineResponse.residentialTable.apartment.heat + 
              buildingsBaselineResponse.residentialTable.apartment.renewable + 
              buildingsBaselineResponse.residentialTable.apartment.wood + 
              buildingsBaselineResponse.residentialTable.apartment.coal + 
              buildingsBaselineResponse.residentialTable.apartment.peat);

  const terracedTotal = 
              (buildingsBaselineResponse.residentialTable.terraced.electricity + 
              buildingsBaselineResponse.residentialTable.terraced.gas + 
              buildingsBaselineResponse.residentialTable.terraced.oil + 
              buildingsBaselineResponse.residentialTable.terraced.heat + 
              buildingsBaselineResponse.residentialTable.terraced.renewable + 
              buildingsBaselineResponse.residentialTable.terraced.wood + 
              buildingsBaselineResponse.residentialTable.terraced.coal + 
              buildingsBaselineResponse.residentialTable.terraced.peat);

  const semiDetachedTotal = 
              (buildingsBaselineResponse.residentialTable.semiDetached.electricity + 
              buildingsBaselineResponse.residentialTable.semiDetached.gas + 
              buildingsBaselineResponse.residentialTable.semiDetached.oil + 
              buildingsBaselineResponse.residentialTable.semiDetached.heat + 
              buildingsBaselineResponse.residentialTable.semiDetached.renewable + 
              buildingsBaselineResponse.residentialTable.semiDetached.wood + 
              buildingsBaselineResponse.residentialTable.semiDetached.coal + 
              buildingsBaselineResponse.residentialTable.semiDetached.peat);

  const detachedTotal = 
              (buildingsBaselineResponse.residentialTable.detached.electricity + 
              buildingsBaselineResponse.residentialTable.detached.gas + 
              buildingsBaselineResponse.residentialTable.detached.oil + 
              buildingsBaselineResponse.residentialTable.detached.heat + 
              buildingsBaselineResponse.residentialTable.detached.renewable + 
              buildingsBaselineResponse.residentialTable.detached.wood + 
              buildingsBaselineResponse.residentialTable.detached.coal + 
              buildingsBaselineResponse.residentialTable.detached.peat);
  // #endregion

    // #region commercial co2
    const retailTotal = 
    (buildingsBaselineResponse.commercialTable.retail.electricity + 
    buildingsBaselineResponse.commercialTable.retail.gas + 
    buildingsBaselineResponse.commercialTable.retail.oil + 
    buildingsBaselineResponse.commercialTable.retail.heat + 
    buildingsBaselineResponse.commercialTable.retail.renewable + 
    buildingsBaselineResponse.commercialTable.retail.wood + 
    buildingsBaselineResponse.commercialTable.retail.coal + 
    buildingsBaselineResponse.commercialTable.retail.peat);
    
    const healthTotal = 
        (buildingsBaselineResponse.commercialTable.health.electricity + 
        buildingsBaselineResponse.commercialTable.health.gas + 
        buildingsBaselineResponse.commercialTable.health.oil + 
        buildingsBaselineResponse.commercialTable.health.heat + 
        buildingsBaselineResponse.commercialTable.health.renewable + 
        buildingsBaselineResponse.commercialTable.health.wood + 
        buildingsBaselineResponse.commercialTable.health.coal + 
        buildingsBaselineResponse.commercialTable.health.peat);
    
    const hospitalityTotal = 
        (buildingsBaselineResponse.commercialTable.hospitality.electricity + 
        buildingsBaselineResponse.commercialTable.hospitality.gas + 
        buildingsBaselineResponse.commercialTable.hospitality.oil + 
        buildingsBaselineResponse.commercialTable.hospitality.heat + 
        buildingsBaselineResponse.commercialTable.hospitality.renewable + 
        buildingsBaselineResponse.commercialTable.hospitality.wood + 
        buildingsBaselineResponse.commercialTable.hospitality.coal + 
        buildingsBaselineResponse.commercialTable.hospitality.peat);
    
    const officesTotal = 
        (buildingsBaselineResponse.commercialTable.offices.electricity + 
        buildingsBaselineResponse.commercialTable.offices.gas + 
        buildingsBaselineResponse.commercialTable.offices.oil + 
        buildingsBaselineResponse.commercialTable.offices.heat + 
        buildingsBaselineResponse.commercialTable.offices.renewable + 
        buildingsBaselineResponse.commercialTable.offices.wood + 
        buildingsBaselineResponse.commercialTable.offices.coal + 
        buildingsBaselineResponse.commercialTable.offices.peat);
    
    const industrialTotal = 
        (buildingsBaselineResponse.commercialTable.industrial.electricity + 
        buildingsBaselineResponse.commercialTable.industrial.gas + 
        buildingsBaselineResponse.commercialTable.industrial.oil + 
        buildingsBaselineResponse.commercialTable.industrial.heat + 
        buildingsBaselineResponse.commercialTable.industrial.renewable + 
        buildingsBaselineResponse.commercialTable.industrial.wood + 
        buildingsBaselineResponse.commercialTable.industrial.coal + 
        buildingsBaselineResponse.commercialTable.industrial.peat);
    
    const warehousesTotal = 
        (buildingsBaselineResponse.commercialTable.warehouses.electricity + 
        buildingsBaselineResponse.commercialTable.warehouses.gas + 
        buildingsBaselineResponse.commercialTable.warehouses.oil + 
        buildingsBaselineResponse.commercialTable.warehouses.heat + 
        buildingsBaselineResponse.commercialTable.warehouses.renewable + 
        buildingsBaselineResponse.commercialTable.warehouses.wood + 
        buildingsBaselineResponse.commercialTable.warehouses.coal + 
        buildingsBaselineResponse.commercialTable.warehouses.peat);
    // #endregion

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
    apartmentsData.push({ x: i, y: buildingsBaselineResponse.baseline[i].apartment });
    terracedData.push({ x: i, y: buildingsBaselineResponse.baseline[i].terraced });
    semidetachedData.push({ x: i, y: buildingsBaselineResponse.baseline[i].semiDetached });
    detachedData.push({ x: i, y: buildingsBaselineResponse.baseline[i].detached });
    retailData.push({ x: i, y: buildingsBaselineResponse.baseline[i].retail });
    healthData.push({ x: i, y: buildingsBaselineResponse.baseline[i].health });
    hospitalityData.push({ x: i, y: buildingsBaselineResponse.baseline[i].hospitality });
    officesData.push({ x: i, y: buildingsBaselineResponse.baseline[i].offices });
    industrialData.push({ x: i, y: buildingsBaselineResponse.baseline[i].industrial });
    warehousesData.push({ x: i, y: buildingsBaselineResponse.baseline[i].warehouses });
  }
  // #endregion

  if (nextNewUnitsView === false && Object.keys(buildingsBaselineResponse).length !== 0) {
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
              <td>{buildingsBaselineResponse.residentialTable.apartment.electricity}</td>
              <td>{buildingsBaselineResponse.residentialTable.apartment.gas}</td>
              <td>{buildingsBaselineResponse.residentialTable.apartment.oil}</td>
              <td>{buildingsBaselineResponse.residentialTable.apartment.coal}</td>
              <td>{buildingsBaselineResponse.residentialTable.apartment.peat}</td>
              <td>{buildingsBaselineResponse.residentialTable.apartment.wood}</td>
              <td>{buildingsBaselineResponse.residentialTable.apartment.renewable}</td>
              <td>{buildingsBaselineResponse.residentialTable.apartment.heat}</td>
              <td>{apartmentTotal}</td>
            </tr>
            <tr>
              <td>Terraced</td>
              <td>{buildingsBaselineResponse.residentialTable.terraced.electricity}</td>
              <td>{buildingsBaselineResponse.residentialTable.terraced.gas}</td>
              <td>{buildingsBaselineResponse.residentialTable.terraced.oil}</td>
              <td>{buildingsBaselineResponse.residentialTable.terraced.coal}</td>
              <td>{buildingsBaselineResponse.residentialTable.terraced.peat}</td>
              <td>{buildingsBaselineResponse.residentialTable.terraced.wood}</td>
              <td>{buildingsBaselineResponse.residentialTable.terraced.renewable}</td>
              <td>{buildingsBaselineResponse.residentialTable.terraced.heat}</td>
              <td>{terracedTotal}</td>
            </tr>
            <tr>
              <td>Semi-detached</td>
              <td>{buildingsBaselineResponse.residentialTable.semiDetached.electricity}</td>
              <td>{buildingsBaselineResponse.residentialTable.semiDetached.gas}</td>
              <td>{buildingsBaselineResponse.residentialTable.semiDetached.oil}</td>
              <td>{buildingsBaselineResponse.residentialTable.semiDetached.coal}</td>
              <td>{buildingsBaselineResponse.residentialTable.semiDetached.peat}</td>
              <td>{buildingsBaselineResponse.residentialTable.semiDetached.wood}</td>
              <td>{buildingsBaselineResponse.residentialTable.semiDetached.renewable}</td>
              <td>{buildingsBaselineResponse.residentialTable.semiDetached.heat}</td>
              <td>{semiDetachedTotal}</td>
            </tr>
            <tr>
              <td>Detached</td>
              <td>{buildingsBaselineResponse.residentialTable.detached.electricity}</td>
              <td>{buildingsBaselineResponse.residentialTable.detached.gas}</td>
              <td>{buildingsBaselineResponse.residentialTable.detached.oil}</td>
              <td>{buildingsBaselineResponse.residentialTable.detached.coal}</td>
              <td>{buildingsBaselineResponse.residentialTable.detached.peat}</td>
              <td>{buildingsBaselineResponse.residentialTable.detached.wood}</td>
              <td>{buildingsBaselineResponse.residentialTable.detached.renewable}</td>
              <td>{buildingsBaselineResponse.residentialTable.detached.heat}</td>
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
              <td>{buildingsBaselineResponse.commercialTable.retail.electricity}</td>
              <td>{buildingsBaselineResponse.commercialTable.retail.gas}</td>
              <td>{buildingsBaselineResponse.commercialTable.retail.oil}</td>
              <td>{buildingsBaselineResponse.commercialTable.retail.coal}</td>
              <td>{buildingsBaselineResponse.commercialTable.retail.peat}</td>
              <td>{buildingsBaselineResponse.commercialTable.retail.wood}</td>
              <td>{buildingsBaselineResponse.commercialTable.retail.renewable}</td>
              <td>{buildingsBaselineResponse.commercialTable.retail.heat}</td>
              <td>{retailTotal}</td>
            </tr>
            <tr>
              <td>Health</td>
              <td>{buildingsBaselineResponse.commercialTable.health.electricity}</td>
              <td>{buildingsBaselineResponse.commercialTable.health.gas}</td>
              <td>{buildingsBaselineResponse.commercialTable.health.oil}</td>
              <td>{buildingsBaselineResponse.commercialTable.health.coal}</td>
              <td>{buildingsBaselineResponse.commercialTable.health.peat}</td>
              <td>{buildingsBaselineResponse.commercialTable.health.wood}</td>
              <td>{buildingsBaselineResponse.commercialTable.health.renewable}</td>
              <td>{buildingsBaselineResponse.commercialTable.health.heat}</td>
              <td>{healthTotal}</td>
            </tr>
            <tr>
              <td>Hospitality</td>
              <td>{buildingsBaselineResponse.commercialTable.hospitality.electricity}</td>
              <td>{buildingsBaselineResponse.commercialTable.hospitality.gas}</td>
              <td>{buildingsBaselineResponse.commercialTable.hospitality.oil}</td>
              <td>{buildingsBaselineResponse.commercialTable.hospitality.coal}</td>
              <td>{buildingsBaselineResponse.commercialTable.hospitality.peat}</td>
              <td>{buildingsBaselineResponse.commercialTable.hospitality.wood}</td>
              <td>{buildingsBaselineResponse.commercialTable.hospitality.renewable}</td>
              <td>{buildingsBaselineResponse.commercialTable.hospitality.heat}</td>
              <td>{hospitalityTotal}</td>
            </tr>
            <tr>
              <td>Offices</td>
              <td>{buildingsBaselineResponse.commercialTable.offices.electricity}</td>
              <td>{buildingsBaselineResponse.commercialTable.offices.gas}</td>
              <td>{buildingsBaselineResponse.commercialTable.offices.oil}</td>
              <td>{buildingsBaselineResponse.commercialTable.offices.coal}</td>
              <td>{buildingsBaselineResponse.commercialTable.offices.peat}</td>
              <td>{buildingsBaselineResponse.commercialTable.offices.wood}</td>
              <td>{buildingsBaselineResponse.commercialTable.offices.renewable}</td>
              <td>{buildingsBaselineResponse.commercialTable.offices.heat}</td>
              <td>{officesTotal}</td>
            </tr>
            <tr>
                <td>Industrial</td>
                <td>{buildingsBaselineResponse.commercialTable.industrial.electricity}</td>
                <td>{buildingsBaselineResponse.commercialTable.industrial.gas}</td>
                <td>{buildingsBaselineResponse.commercialTable.industrial.oil}</td>
                <td>{buildingsBaselineResponse.commercialTable.industrial.coal}</td>
                <td>{buildingsBaselineResponse.commercialTable.industrial.peat}</td>
                <td>{buildingsBaselineResponse.commercialTable.industrial.wood}</td>
                <td>{buildingsBaselineResponse.commercialTable.industrial.renewable}</td>
                <td>{buildingsBaselineResponse.commercialTable.industrial.heat}</td>
                <td>{industrialTotal}</td>
            </tr>
            <tr>
                <td>Warehouses</td>
                <td>{buildingsBaselineResponse.commercialTable.warehouses.electricity}</td>
                <td>{buildingsBaselineResponse.commercialTable.warehouses.gas}</td>
                <td>{buildingsBaselineResponse.commercialTable.warehouses.oil}</td>
                <td>{buildingsBaselineResponse.commercialTable.warehouses.coal}</td>
                <td>{buildingsBaselineResponse.commercialTable.warehouses.peat}</td>
                <td>{buildingsBaselineResponse.commercialTable.warehouses.wood}</td>
                <td>{buildingsBaselineResponse.commercialTable.warehouses.renewable}</td>
                <td>{buildingsBaselineResponse.commercialTable.warehouses.heat}</td>
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

        <div className="buildings-buttons">
          <div className="">
            <Button
              size="small"
              value="backProjections"
              onClick={() => navigate("../buildingBaseline", { replace: true })}
              label="&laquo; Previous"
              secondary
            />
          </div>
          <div>
            <Button
              size="small"
              value="u2next_inputs"
              onClick={() => setNextNewUnitsView(true)}
              label="Next &raquo;"
              primary
            />
          </div>
        </div>
      </section>
    );
  } else if (nextNewUnitsView === true) {
    return (
      <BuildingsNewUnits
        baseline={buildingsBaselineResponse}
        year={year}
        country={country}
        population={population}
      />
    );
  }
};

BuildingBaselineCharts.propTypes = {
  buildingsBaselineResponse: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
};