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
import { Box, Grid } from "@mui/material";

/**
 * BuildingBaselineCharts baseline
 * @return {}
 */
const BarSeries = VerticalBarSeries;
export const BuildingBaselineCharts = ({
  country,
  year,
  buildingsBaselineResponse,
  population,
  baseline
}) => {
  country = country ? country : localStorage.getItem("country");
  year = year ? year : parseInt(localStorage.getItem("year"));
  population = population ? population : parseInt(localStorage.getItem("population"));
  buildingsBaselineResponse = buildingsBaselineResponse ? buildingsBaselineResponse : JSON.parse(localStorage.buildingsBaselineResponse); 

  const [nextNewUnitsView, setNextNewUnitsView] = useState(false);
  const navigate = useNavigate();
  const handleNextNewUnitsView = () => {
    navigate("../buildingsNewUnits", { replace: true });
    setNextNewUnitsView(true);
  };
  const goBackToBuildingsBaseline = () => navigate("../buildingBaseline", { replace: true });
  // #region residential co2
  const apartmentTotal = 
  Math.round(buildingsBaselineResponse.residentialTable.apartment.electricity + 
              buildingsBaselineResponse.residentialTable.apartment.gas + 
              buildingsBaselineResponse.residentialTable.apartment.oil + 
              buildingsBaselineResponse.residentialTable.apartment.heat + 
              buildingsBaselineResponse.residentialTable.apartment.renewable + 
              buildingsBaselineResponse.residentialTable.apartment.wood + 
              buildingsBaselineResponse.residentialTable.apartment.coal + 
              buildingsBaselineResponse.residentialTable.apartment.peat);

  const terracedTotal = 
  Math.round(buildingsBaselineResponse.residentialTable.terraced.electricity + 
              buildingsBaselineResponse.residentialTable.terraced.gas + 
              buildingsBaselineResponse.residentialTable.terraced.oil + 
              buildingsBaselineResponse.residentialTable.terraced.heat + 
              buildingsBaselineResponse.residentialTable.terraced.renewable + 
              buildingsBaselineResponse.residentialTable.terraced.wood + 
              buildingsBaselineResponse.residentialTable.terraced.coal + 
              buildingsBaselineResponse.residentialTable.terraced.peat);

  const semiDetachedTotal = 
  Math.round(buildingsBaselineResponse.residentialTable.semiDetached.electricity + 
              buildingsBaselineResponse.residentialTable.semiDetached.gas + 
              buildingsBaselineResponse.residentialTable.semiDetached.oil + 
              buildingsBaselineResponse.residentialTable.semiDetached.heat + 
              buildingsBaselineResponse.residentialTable.semiDetached.renewable + 
              buildingsBaselineResponse.residentialTable.semiDetached.wood + 
              buildingsBaselineResponse.residentialTable.semiDetached.coal + 
              buildingsBaselineResponse.residentialTable.semiDetached.peat);

  const detachedTotal = 
  Math.round(buildingsBaselineResponse.residentialTable.detached.electricity + 
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
    Math.round(buildingsBaselineResponse.commercialTable.retail.electricity + 
    buildingsBaselineResponse.commercialTable.retail.gas + 
    buildingsBaselineResponse.commercialTable.retail.oil + 
    buildingsBaselineResponse.commercialTable.retail.heat + 
    buildingsBaselineResponse.commercialTable.retail.renewable + 
    buildingsBaselineResponse.commercialTable.retail.wood + 
    buildingsBaselineResponse.commercialTable.retail.coal + 
    buildingsBaselineResponse.commercialTable.retail.peat);
    
    const healthTotal = 
    Math.round(buildingsBaselineResponse.commercialTable.health.electricity + 
        buildingsBaselineResponse.commercialTable.health.gas + 
        buildingsBaselineResponse.commercialTable.health.oil + 
        buildingsBaselineResponse.commercialTable.health.heat + 
        buildingsBaselineResponse.commercialTable.health.renewable + 
        buildingsBaselineResponse.commercialTable.health.wood + 
        buildingsBaselineResponse.commercialTable.health.coal + 
        buildingsBaselineResponse.commercialTable.health.peat);
    
    const hospitalityTotal = 
    Math.round(buildingsBaselineResponse.commercialTable.hospitality.electricity + 
        buildingsBaselineResponse.commercialTable.hospitality.gas + 
        buildingsBaselineResponse.commercialTable.hospitality.oil + 
        buildingsBaselineResponse.commercialTable.hospitality.heat + 
        buildingsBaselineResponse.commercialTable.hospitality.renewable + 
        buildingsBaselineResponse.commercialTable.hospitality.wood + 
        buildingsBaselineResponse.commercialTable.hospitality.coal + 
        buildingsBaselineResponse.commercialTable.hospitality.peat);
    
    const officesTotal = 
    Math.round(buildingsBaselineResponse.commercialTable.offices.electricity + 
        buildingsBaselineResponse.commercialTable.offices.gas + 
        buildingsBaselineResponse.commercialTable.offices.oil + 
        buildingsBaselineResponse.commercialTable.offices.heat + 
        buildingsBaselineResponse.commercialTable.offices.renewable + 
        buildingsBaselineResponse.commercialTable.offices.wood + 
        buildingsBaselineResponse.commercialTable.offices.coal + 
        buildingsBaselineResponse.commercialTable.offices.peat);
    
    const industrialTotal = 
    Math.round(buildingsBaselineResponse.commercialTable.industrial.electricity + 
        buildingsBaselineResponse.commercialTable.industrial.gas + 
        buildingsBaselineResponse.commercialTable.industrial.oil + 
        buildingsBaselineResponse.commercialTable.industrial.heat + 
        buildingsBaselineResponse.commercialTable.industrial.renewable + 
        buildingsBaselineResponse.commercialTable.industrial.wood + 
        buildingsBaselineResponse.commercialTable.industrial.coal + 
        buildingsBaselineResponse.commercialTable.industrial.peat);
    
    const warehousesTotal = 
    Math.round(buildingsBaselineResponse.commercialTable.warehouses.electricity + 
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
    <>
      <section>
        <div className="heading">
              <h2>Buildings baseline results</h2>
        </div>
        <Grid container spacing={2}> 
          <Grid item xs={5}>

            <section>
            <b>
              GHG emissions from the energy use in residential buildings by unit
              type and source of heating energy, {year}
            </b>
            </section>
                     
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
                <td>{Math.round(buildingsBaselineResponse.residentialTable.apartment.electricity)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.apartment.gas)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.apartment.oil)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.apartment.coal)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.apartment.peat)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.apartment.wood)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.apartment.renewable)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.apartment.heat)}</td>
                <td>{apartmentTotal}</td>
              </tr>
              <tr>
                <td>Terraced</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.terraced.electricity)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.terraced.gas)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.terraced.oil)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.terraced.coal)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.terraced.peat)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.terraced.wood)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.terraced.renewable)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.terraced.heat)}</td>
                <td>{terracedTotal}</td>
              </tr>
              <tr>
                <td>Semi-detached</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.semiDetached.electricity)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.semiDetached.gas)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.semiDetached.oil)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.semiDetached.coal)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.semiDetached.peat)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.semiDetached.wood)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.semiDetached.renewable)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.semiDetached.heat)}</td>
                <td>{semiDetachedTotal}</td>
              </tr>
              <tr>
                <td>Detached</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.detached.electricity)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.detached.gas)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.detached.oil)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.detached.coal)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.detached.peat)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.detached.wood)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.detached.renewable)}</td>
                <td>{Math.round(buildingsBaselineResponse.residentialTable.detached.heat)}</td>
                <td>{detachedTotal}</td>
              </tr>
              <tr>
                <td colSpan={9}>Residential buildings total</td>
                <td>{detachedTotal + apartmentTotal + semiDetachedTotal + terracedTotal}</td>
              </tr>
            </tbody>
          </table>
          <section>
            <b>
              CO2 emissions from the energy use in commercial buildings by
              building type and source of heating energy, {year}
            </b>
          </section>
       
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
              <td>{Math.round(buildingsBaselineResponse.commercialTable.retail.electricity)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.retail.gas)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.retail.oil)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.retail.coal)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.retail.peat)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.retail.wood)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.retail.renewable)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.retail.heat)}</td>
              <td>{retailTotal}</td>
            </tr>
            <tr>
              <td>Health</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.health.electricity)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.health.gas)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.health.oil)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.health.coal)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.health.peat)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.health.wood)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.health.renewable)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.health.heat)}</td>
              <td>{healthTotal}</td>
            </tr>
            <tr>
              <td>Hospitality</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.hospitality.electricity)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.hospitality.gas)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.hospitality.oil)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.hospitality.coal)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.hospitality.peat)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.hospitality.wood)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.hospitality.renewable)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.hospitality.heat)}</td>
              <td>{hospitalityTotal}</td>
            </tr>
            <tr>
              <td>Offices</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.offices.electricity)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.offices.gas)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.offices.oil)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.offices.coal)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.offices.peat)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.offices.wood)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.offices.renewable)}</td>
              <td>{Math.round(buildingsBaselineResponse.commercialTable.offices.heat)}</td>
              <td>{officesTotal}</td>
            </tr>
            <tr>
                <td>Industrial</td>
                <td>{Math.round(buildingsBaselineResponse.commercialTable.industrial.electricity)}</td>
                <td>{Math.round(buildingsBaselineResponse.commercialTable.industrial.gas)}</td>
                <td>{Math.round(buildingsBaselineResponse.commercialTable.industrial.oil)}</td>
                <td>{Math.round(buildingsBaselineResponse.commercialTable.industrial.coal)}</td>
                <td>{Math.round(buildingsBaselineResponse.commercialTable.industrial.peat)}</td>
                <td>{Math.round(buildingsBaselineResponse.commercialTable.industrial.wood)}</td>
                <td>{Math.round(buildingsBaselineResponse.commercialTable.industrial.renewable)}</td>
                <td>{Math.round(buildingsBaselineResponse.commercialTable.industrial.heat)}</td>
                <td>{industrialTotal}</td>
            </tr>
            <tr>
                <td>Warehouses</td>
                <td>{Math.round(buildingsBaselineResponse.commercialTable.warehouses.electricity)}</td>
                <td>{Math.round(buildingsBaselineResponse.commercialTable.warehouses.gas)}</td>
                <td>{Math.round(buildingsBaselineResponse.commercialTable.warehouses.oil)}</td>
                <td>{Math.round(buildingsBaselineResponse.commercialTable.warehouses.coal)}</td>
                <td>{Math.round(buildingsBaselineResponse.commercialTable.warehouses.peat)}</td>
                <td>{Math.round(buildingsBaselineResponse.commercialTable.warehouses.wood)}</td>
                <td>{Math.round(buildingsBaselineResponse.commercialTable.warehouses.renewable)}</td>
                <td>{Math.round(buildingsBaselineResponse.commercialTable.warehouses.heat)}</td>
                <td>{warehousesTotal}</td>
            </tr>
            <tr>
              <td colSpan={9}>Commercial buildings total</td>
              <td>{officesTotal + retailTotal + hospitalityTotal + healthTotal + warehousesTotal + industrialTotal}</td>
            </tr>
          </tbody>
        </table>
          </Grid>
          <Grid item xs={7} mt={30}>
           <section>
              <b>Baseline emissions - Energy use in buildings (tCO2e)</b>
            </section>
             <div>
          <XYPlot
            width={800}
            height={400}
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
            
            <BarSeries color="#ffdf43" opacity={0.6} data={apartmentsData} />
            
            <BarSeries color="#76918e" opacity={0.6} data={terracedData} />
            
            <BarSeries color="#ce143d" opacity={0.6} data={semidetachedData} />
            
            <BarSeries color="#d6e7d9" opacity={0.6} data={detachedData} />
            
            <BarSeries color="#002117" opacity={0.6} data={retailData} />
            
            <BarSeries color="#ef7d00" opacity={0.6} data={healthData} />
            
            <BarSeries color="#6c3b00" opacity={0.6} data={hospitalityData} />
           
            <BarSeries color="#00aed5" opacity={0.6} data={officesData} />
            
            <BarSeries color="#8C0303" opacity={0.6} data={industrialData} />
            
            <BarSeries color="#A6036D" opacity={0.6} data={warehousesData} />
          </XYPlot>
          
          <div className="transport-legend-style">
          <LineLegendBuildingBaselineCharts />
          </div>
          </div>
          </Grid>
        </Grid>

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
          <div>
            <Button
              size="small"
              value="u2next_inputs"
              onClick={handleNextNewUnitsView}
              label="Next &raquo;"
              primary
            />
          </div>
        </div>
      </section>
    </>
    );
  } else {
    return (
      <BuildingsNewUnits
        baseline={baseline}
        year={year}
        country={country}
        population={population}
      />
    );
  }
};

BuildingBaselineCharts.propTypes = {
  buildingsBaselineResponse: PropTypes.object.isRequired,
  baseline: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
};