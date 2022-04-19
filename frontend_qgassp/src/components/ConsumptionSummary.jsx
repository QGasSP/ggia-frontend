import React from "react";
import Divider from "@mui/material/Divider";
import "../css/u1planner.css";
import { LineLegendConsumption } from "./LineLegendConsumption";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  VerticalBarSeries,
} from "react-vis";

import PropTypes from "prop-types";

/**
 * Consumption Results
 * @return {}
 */
const BarSeries = VerticalBarSeries;
export const ConsumptionSummary = ({
  blTransport,
  blTotalEmmissions,
  p1,
  p1TotalEmissions,
  bLTotalAreaEmissions,
  p1TotalAreaEmissions,
}) => {
  const country = localStorage.getItem("country");
  const policyYear = localStorage.getItem("policyYear");

  const resultsLegend = [
    { title: "Baseline total emissions", color: "#3d58a3", strokeWidth: 13 },
    { title: "Policy total emissions", color: "#ef7d00", strokeWidth: 13 },
  ];
  
  // blTransport

  const bLTransportHousingEnergy = [];
  const bLTransportHousingOther = [];
  const bLTransportFuels = [];
  const bLTransportOther = [];
  const bLTransportAirTravel = [];
  const bLTransportFood = [];
  const bLTransportTangiblegoods = [];
  const bLTransportServices = [];
  const dataBlTotalEmissions = [];
  const dataBlTotalAreaEmissions = [];

  // pl

  const policyHousingEnergy = [];
  const policyHousingOther = [];
  const policyTransportFuels = [];
  const policyTransportOther = [];
  const policyAirTravel = [];
  const policyFood = [];
  const policyTangiblegoods = [];
  const policyServices = [];
  const policyTotalEmissions = [];
  const policyTotalAreaEmissions = [];
  

  for (let i = 2020; i < 2051; i++) {
    bLTransportHousingEnergy.push({ x: i, y: blTransport.housingEnergy[i] });
    bLTransportHousingOther.push({ x: i, y: blTransport.housingOther[i] });
    bLTransportFuels.push({ x: i, y: blTransport.transportFuels[i] });
    bLTransportOther.push({ x: i, y: blTransport.transportOther[i] });
    bLTransportAirTravel.push({ x: i, y: blTransport.airTravel[i] });
    bLTransportFood.push({ x: i, y: blTransport.food[i] });
    bLTransportTangiblegoods.push({ x: i, y: blTransport.tangibleGoods[i] });
    bLTransportServices.push({ x: i, y: blTransport.services[i] });
    dataBlTotalEmissions.push({ x: i, y: blTotalEmmissions[i] });
    dataBlTotalAreaEmissions.push({ x: i, y: bLTotalAreaEmissions[i] });

    policyHousingEnergy.push({ x: i, y: p1.housingEnergy[i] });
    policyHousingOther.push({ x: i, y: p1.housingOther[i] });
    policyTransportFuels.push({ x: i, y: p1.transportFuels[i] });
    policyTransportOther.push({ x: i, y: p1.transportOther[i] });
    policyAirTravel.push({ x: i, y: p1.airTravel[i] });
    policyFood.push({ x: i, y: p1.food[i] });
    policyTangiblegoods.push({ x: i, y: p1.tangibleGoods[i] });
    policyServices.push({ x: i, y: p1.services[i] });
    policyTotalEmissions.push({ x: i, y: p1TotalEmissions[i] });
    policyTotalAreaEmissions.push({ x: i, y: p1TotalAreaEmissions[i] });
  };

  const baselineDataPolicyYear = [
    { x: "Housing_energy", y: blTransport.housingEnergy[policyYear]},
    { x: "Housing_other", y: blTransport.housingOther[policyYear] },
    { x: "Transport_fuels", y: blTransport.transportFuels[policyYear] },
    { x: "Transport_other", y: blTransport.transportOther[policyYear] },
    { x: "Air_travel", y: blTransport.airTravel[policyYear] },
    { x: "Food", y: blTransport.food[policyYear] },
    { x: "Tangible_goods", y: blTransport.tangibleGoods[policyYear] },
    { x: "Services", y:  blTransport.services[policyYear] },
    { x: "Total_emissions", y: blTotalEmmissions[policyYear]},
  ];
  const policyDataPolicyYear = [
    { x: "Housing_energy", y: p1.housingEnergy[policyYear]},
    { x: "Housing_other", y: p1.housingOther[policyYear] },
    { x: "Transport_fuels", y: p1.transportFuels[policyYear] },
    { x: "Transport_other", y: p1.transportOther[policyYear] },
    { x: "Air_travel", y: p1.airTravel[policyYear] },
    { x: "Food", y: p1.food[policyYear] },
    { x: "Tangible_goods", y: p1.tangibleGoods[policyYear] },
    { x: "Services", y:  p1.services[policyYear] },
    { x: "Total_emissions", y: p1TotalEmissions[policyYear]},
  ];


  return (
    <>
      <Divider textAlign="left" flexItem>
        {" "}
        <b> {country}: Baseline vs annual household emissions</b>
      </Divider>
      <XYPlot
        margin={{ left: 80 }}
        width={1000}
        height={500}
        stackBy="y"
        xType="ordinal"
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="Year" />
        <YAxis title="Emissions/ kG C02 eq" />
        <BarSeries
          color="#3d58a3"
          opacity={0.5}
          data={bLTransportHousingEnergy}
          stack
        />
        <BarSeries
          color="#ef7d00"
          opacity={0.55}
          data={bLTransportHousingOther}
          stack
        />
        <BarSeries
          color="#95c11f"
          opacity={0.55}
          data={bLTransportFuels}
          stack
        />
        <BarSeries
          color="#ce143d"
          opacity={0.55}
          data={bLTransportOther}
          stack
        />
        <BarSeries
          color="#845f9e"
          opacity={0.55}
          data={bLTransportAirTravel}
          stack
        />
        <BarSeries
          color="#996e35"
          opacity={0.55}
          data={bLTransportFood}
          stack
        />
        <BarSeries
          color="#e1719a"
          opacity={0.55}
          data={bLTransportTangiblegoods}
          stack
        />
        <BarSeries
          color="#76918e"
          opacity={0.55}
          data={bLTransportServices}
          stack
        />
        <LineSeries
          className="fourth-series"
          color="#000000"
          strokeWidth="1"
          data={dataBlTotalEmissions}
        />
      </XYPlot>

      {Object.keys(p1).length !== 0 && (
        <>
         {/*  <Divider textAlign="left" flexItem>
            {" "}
            <b> {country}: Policy vs annual household emissions</b>
          </Divider>
          <XYPlot
            xType="ordinal"
            margin={{ left: 80 }}
            width={1000}
            height={500}
            stackBy="y"
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Year" />
            <YAxis title="Emissions/ kG C02 eq" />
            <BarSeries
              color="#3d58a3"
              opacity={0.55}
              data={policyHousingEnergy}
              stack
            />
            <BarSeries
              color="#ef7d00"
              opacity={0.55}
              data={policyHousingOther}
              stack
            />
            <BarSeries
              color="#95c11f"
              opacity={0.55}
              data={policyTransportFuels}
              stack
            />
            <BarSeries
              color="#ce143d"
              opacity={0.55}
              data={policyTransportOther}
              stack
            />
            <BarSeries
              color="#845f9e"
              opacity={0.55}
              data={policyAirTravel}
              stack
            />
            <BarSeries color="#996e35" opacity={0.45} data={policyFood} stack />
            <BarSeries
              color="#e1719a"
              opacity={0.55}
              data={policyTangiblegoods}
              stack
            />
            <BarSeries
              color="#76918e"
              opacity={0.55}
              data={policyServices}
              stack
            />
            <LineSeries
              className="fourth-series"
              color="#000000"
              strokeWidth="1"
              data={policyTotalEmissions}
            />
          </XYPlot> */}
          <br />

          <Divider textAlign="left" flexItem>
          {" "}
          <b>Baseline vs Policy {policyYear}</b>
        </Divider>
        <XYPlot xType="ordinal" width={1000} height={400} xDistance={100}>
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis/>
              <YAxis title="Emissions/ kG C02 eq" />
             <BarSeries
                className="vertical-bar-series-example"
               /*  opacity={0.55} */
                data={policyDataPolicyYear}
                color="#ef7d00" 
              /> 
              <BarSeries
                className="vertical-bar-series-example"
               /*  opacity={0.50} */
                data={baselineDataPolicyYear}
                color="#3d58a3"
              />
    
            </XYPlot>

          <Divider textAlign="left" flexItem>
            {" "}
            <b>
              {" "}
              {country}: Baseline total emissions vs Policy total emissions
            </b>
          </Divider>
          <br />
          <XYPlot
            xType="ordinal"
            width={1000}
            height={500}
            margin={{ left: 100 }}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Year" />
            <YAxis title="Emissions/ kG C02 eq" />
            <LineSeries
              className="linemark-series-example-2"
              curve={null}
              color="#3d58a3"
              strokeStyle="solid"
              style={{}}
              strokeWidth="2"
              data={dataBlTotalAreaEmissions}
            />
            <LineSeries
              color="#ef7d00"
              curve={null}
              strokeWidth="2"
              data={policyTotalAreaEmissions}
            />
          </XYPlot>
          <div className="settlementDiv">
            <LineLegendConsumption
              colorItems={resultsLegend}
              orientation="horizontal"
            />
          </div>
        </>
      )}
    </>
  );
};

ConsumptionSummary.propTypes = {
  blTransport: PropTypes.object.isRequired,
  blTotalEmmissions: PropTypes.object.isRequired,
  p1: PropTypes.object.isRequired,
  p1TotalEmissions: PropTypes.object.isRequired,
  bLTotalAreaEmissions: PropTypes.object.isRequired,
  p1TotalAreaEmissions: PropTypes.object.isRequired,
};
