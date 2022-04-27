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
  bl,
  blTotalEmmissions,
  p1,
  p1TotalEmissions,
  bLTotalAreaEmissions,
  p1TotalAreaEmissions,
  blSummedEmissions,
  p1SummedEmissions,
}) => {
  const country = localStorage.getItem("country");
  const policyYear = localStorage.getItem("policyYear");

  const resultsLegend = [
    { title: "Baseline emissions", color: "#3d58a3", strokeWidth: 13 },
    { title: "Policy emissions", color: "#ef7d00", strokeWidth: 13 },
  ];

  // blTransport

  const bLHousingEnergy = [];
  const bLHousingOther = [];
  const bLTransportFuels = [];
  const bLTransportOther = [];
  const bLAirTravel = [];
  const bLFood = [];
  const bLTangiblegoods = [];
  const bLServices = [];
  const dataBlTotalEmissions = [];
  const dataBlTotalAreaEmissions = [];
  const dataBlSummedEmissions = [];

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
  const policySummedEmissions = [];
  

  for (let i = 2020; i < 2051; i++) {
    bLHousingEnergy.push({ x: i, y: bl.housingEnergy[i] });
    bLHousingOther.push({ x: i, y: bl.housingOther[i] });
    bLTransportFuels.push({ x: i, y: bl.transportFuels[i] });
    bLTransportOther.push({ x: i, y: bl.transportOther[i] });
    bLAirTravel.push({ x: i, y: bl.airTravel[i] });
    bLFood.push({ x: i, y: bl.food[i] });
    bLTangiblegoods.push({ x: i, y: bl.tangibleGoods[i] });
    bLServices.push({ x: i, y: bl.services[i] });
    dataBlTotalEmissions.push({ x: i, y: blTotalEmmissions[i] });
    dataBlTotalAreaEmissions.push({ x: i, y: bLTotalAreaEmissions[i] });
    dataBlSummedEmissions.push({ x: i, y: blSummedEmissions[i] });

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
    policySummedEmissions.push({ x: i, y: p1SummedEmissions[i] });
  };

  const baselineDataPolicyYear = [
    { x: "Housing_energy", y: bl.housingEnergy[policyYear]},
    { x: "Housing_other", y: bl.housingOther[policyYear] },
    { x: "Transport_fuels", y: bl.transportFuels[policyYear] },
    { x: "Transport_other", y: bl.transportOther[policyYear] },
    { x: "Air_travel", y: bl.airTravel[policyYear] },
    { x: "Food", y: bl.food[policyYear] },
    { x: "Tangible_goods", y: bl.tangibleGoods[policyYear] },
    { x: "Services", y:  bl.services[policyYear] },
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
        <BarSeries
          color="#996e35"
          opacity={0.55}
          data={policyFood}
          stack
        />
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
        <XYPlot xType="ordinal" width={1000} height={400} xDistance={100}  margin={{ left: 80 }}>
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis/>
              <YAxis title="Emissions/ kG C02 eq" />
              <BarSeries
                className="vertical-bar-series-example"
               /*  opacity={0.50} */
                data={baselineDataPolicyYear}
                color="#3d58a3"
              />
              <BarSeries
                className="vertical-bar-series-example"
               /*  opacity={0.55} */
                data={policyDataPolicyYear}
                color="#ef7d00" 
              /> 
    
            </XYPlot>

          <Divider textAlign="left" flexItem>
            {" "}
            <b>
              {" "}
              {country}: Baseline total summed emissions vs Policy total summed emissions
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
              data={dataBlSummedEmissions}
            />
            <LineSeries
              color="#ef7d00"
              curve={null}
              strokeWidth="2"
              data={policySummedEmissions}
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
  bl: PropTypes.object.isRequired,
  blTotalEmmissions: PropTypes.object.isRequired,
  p1: PropTypes.object.isRequired,
  p1TotalEmissions: PropTypes.object.isRequired,
  bLTotalAreaEmissions: PropTypes.object.isRequired,
  p1TotalAreaEmissions: PropTypes.object.isRequired,
  blSummedEmissions: PropTypes.object.isRequired,
  p1SummedEmissions: PropTypes.object.isRequired,
};
