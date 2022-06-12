import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "../css/u3policies.css";
import axios from "axios";
import {
  FlexibleXYPlot,
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  VerticalBarSeries,
  RadialChart,
  DiscreteColorLegend,
} from "react-vis";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import {useNavigate} from "react-router-dom";
import { Container, Grid } from "@mui/material";

const BarSeries = VerticalBarSeries;

/**
 * U3 input display
 * @return {}
 */

export const U3policies = () =>
  /*   {
  policyQuantification,
  emission,
  baseline,
  projections,
  passengerMobility,
  freightTransport,
  modalPassShares,
  modalSplitPassenger,
  modalFreShares,
  modalSplitFreight,
  fuelSharesBusTypes,
  fuelSharesBus,
  fuelSharesCarTypes,
  fuelSharesCar,
  electricityTransTypes,
  electricityTrans,
} */
  {
    const base = JSON.parse(localStorage.getItem("baseline"))|| {};
    const baseline = base.baseline;
    const navigate = useNavigate();
    const policyQuantificationGetResponse = JSON.parse(localStorage.getItem("policyQuantificationTransportResponse")) || "";
    const policyQuantification = policyQuantificationGetResponse.data.policy_quantification

    const policyQuantificationGetRequest = JSON.parse(localStorage.getItem("policyQuantificationTransportRequest")) || "";
    const getModalSplitPassenger = policyQuantificationGetRequest.policyQuantification.modalSplitPassenger
    
    
    const emission = JSON.parse(localStorage.getItem("emission"))||{};
    const projections = JSON.parse(localStorage.getItem("projections"))|| {};

    const passengerMobility = localStorage.getItem("passengerMobility") || 0;

    const freightTransport = localStorage.getItem("freightTransport")|| "";

    const modalPassShares = localStorage.getItem("modalPassShares ") || 0;
    const modalSplitPassenger = localStorage.getItem("modalSplitPassenger ")|| "";

    const modalFreShares = localStorage.getItem("modalFreShares")|| 0;
    const modalSplitFreight = localStorage.getItem("modalSplitFreight")|| "";

    const fuelSharesBusTypes = localStorage.getItem(" fuelSharesBusTypes ")|| "";
    const fuelSharesBus = localStorage.getItem("fuelSharesBus")|| "";

    const fuelSharesCarTypes = localStorage.getItem("fuelSharesCarTypes ") ||" ";
    const fuelSharesCar = localStorage.getItem("fuelSharesCar ")|| "";

    const electricityTransTypes = localStorage.getItem("electricityTransTypes")|| "";
    const electricityTransport = localStorage.getItem("electricityTransport")|| "";

    const emissionTotal = emission.bus + emission.train + emission.car + emission.metro  + emission.tram


  const policyQuantificationTotal = getModalSplitPassenger.shares.bus + getModalSplitPassenger.shares.tram + getModalSplitPassenger.shares.car +
  getModalSplitPassenger.shares.metro + getModalSplitPassenger.shares.train

    const emissionPolicyLegendItems = [
    {
      title: "Bus",
      color: "#F8DE7E",
      strokeWidth: 6,
    },
    {
      title: "Metro",
      color: "#ADD8E6",
      strokeWidth: 6,
    },
    {
      title: "Train",
      color: "#FF6347",
      strokeWidth: 6,
    },

    {
      title: "Car",
      color: "#0000CD",
      strokeWidth: 6,
    },

    {
      title: "Tram",
      color: " #228B22",
      strokeWidth: 6,
    },
  ];

    const transportAndPolicyResultsLegend = [
    {
      title: "Bus",
      color: "#3d58a3",
      strokeWidth: 6
    },

    {
      title: "Car",
      color: "#ef7d00",
      strokeWidth: 6
    },

    {
      title: "Metro",
      color: "#95c11f",
      strokeWidth: 6
    },

    {
      title: "Rail Transport",
      color: "#ce143d",
      strokeWidth: 6
    },

    {
      title: "Road Transport",
      color: "#845f9e",
      strokeWidth: 6
    },

    {
      title: "Train",
      color: "#996e35",
      strokeWidth: 6
    },

    {
      title: "Tram",
      color: "#76918e",
      strokeWidth: 6
    },

    {
      title: "Waterways transport",
      color: "#0000CD",
      strokeWidth: 6
    }
    ]

  // policy quantification results
  const busPolicyQuantification = [];
  const carPolicyQuantification = []
  const tramPolicyQuantification = [];
  const metroPolicyQuantification = [];
  const trainPolicyQuantification = [];
  const railTransportPolicyQuantification = [];
  const roadTransportPolicyQuantification = [];
  const waterwaysTransportPolicyQuantification = [];
  const totalPolicyQuantification = [];
 

  // transport projections
  const busProjection = [];
  const carProjection = [];
  const metroProjection = [];
  const railTransportProjection = [];
  const roadTransportProjection = [];
  const trainProjection = [];
  const tramProjection = [];
  const waterwaysTransportProjection = [];
  
  
  for (let i = 2022; i < 2051; i++) { 
    [
      busProjection.push({ x: i, y: projections.bus[i] }),
    carProjection.push({ x: i, y: projections.car[i] }),
    metroProjection.push({ x: i, y: projections.metro[i] }),
    railTransportProjection.push({ x: i, y: projections.rail_transport[i] }),
    roadTransportProjection.push({ x: i, y: projections.road_transport[i] }),
    trainProjection.push({ x: i, y: projections.train[i] }),
    tramProjection.push({ x: i, y: projections.tram[i] }),
    waterwaysTransportProjection.push({ x: i, y: projections.waterways_transport[i] })
    ]
  }

  
      for (let i = 2021; i < 2051; i++) {[
    busPolicyQuantification.push({ x: i, y: policyQuantification.bus[i] }), 
    carPolicyQuantification.push({ x: i, y: policyQuantification.car[i] }),
    metroPolicyQuantification.push({ x: i, y: policyQuantification.metro[i] }),
    railTransportPolicyQuantification.push({ x: i, y: policyQuantification.rail_transport[i] }),
    roadTransportPolicyQuantification.push({ x: i, y: policyQuantification.road_transport[i] }),
    trainPolicyQuantification.push({ x: i, y: policyQuantification.train[i] }),
    tramPolicyQuantification.push({ x: i, y: policyQuantification.tram[i] }),
    waterwaysTransportPolicyQuantification.push({ x: i, y: policyQuantification.waterways_transport[i] }),
    // totalPolicyQuantification.push({ x: i, y: policyQuantification.total[i] })
      ] 
  }
    return (
      <Container maxWidth="xl">
     
        <br />
        <div className="headerU3policies">
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="U3 POLICY QUANTIFICATION RESULTS" />
          </Divider>
        </div>

        <div>
          <table style={{width:'100%'}}>
              <thead>
                <tr>
                  <th>Modal split passenger transport</th>
                  <th>Without policy</th>
                  <th>With policy</th>
                  <th>Population affected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shares for bus</td>
                  <td>{emission.bus}</td>
                  <td>{getModalSplitPassenger.shares.bus}</td>
                  <td>{getModalSplitPassenger.affectedPopulation}</td>
                </tr>

                <tr>
                  <td>Shares for metro</td>
                  <td>{emission.metro}</td>
                  <td>{getModalSplitPassenger.shares.metro}</td>
                </tr>

                <tr>
                  <td>Shares for tram</td>
                  <td>{emission.tram}</td>
                  <td>{getModalSplitPassenger.shares.tram}</td>
                </tr>

                <tr>
                  <td>Shares for train</td>
                  <td>{emission.train}</td>
                  <td>{getModalSplitPassenger.shares.train}</td>
                </tr>

                <tr>
                  <td>Shares for passenger car</td>
                  <td>{emission.car}</td>
                  <td>{getModalSplitPassenger.shares.car}</td>
                </tr>
              </tbody>
          </table>
        </div>
        <Divider>
        </Divider>
        <br/>
        {/* with and without policy radial charts*/}
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {/* emissions without policy go here */}
              <div>
              <h4>Emissions without policy</h4>
              <RadialChart
                data={[
                  {
                    angle:
                      Math.round(
                        (emission.bus / emissionTotal + Number.EPSILON) * 36000
                      ) / 100,
                    label: "Bus",
                    color: "#F8DE7E",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.metro / emissionTotal + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Metro",
                    color: "#ADD8E6",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.train / emissionTotal + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Train",
                    color: "#FF6347",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.car / emissionTotal + Number.EPSILON) * 36000
                      ) / 100,
                    label: "Car",
                    color: "#0000CD",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.tram / emissionTotal + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Tram",
                    color: " #228B22",
                  },
                  
                ]}
                type="piechart"
                colorType="literal"
                radius={140}
                getAngle={(d) => d.angle}
                width={350}
                height={350}
              />
              </div>
              <div>
                <DiscreteColorLegend
                items={emissionPolicyLegendItems}
                orientation="horizontal"/>
              </div>
            </Grid>
            <Grid item xs={6}>
              {/* emissions with policy go here */}
              <div>
              <h4>Emissions with policy</h4>
              <RadialChart
                data={[
                  {
                    angle:
                      Math.round(
                        (getModalSplitPassenger.shares.bus / policyQuantificationTotal + Number.EPSILON) * 36000
                      ) / 100,
                    label: "Bus",
                    color: "#F8DE7E",
                  },
                  {
                    angle:
                      Math.round(
                        (getModalSplitPassenger.shares.metro / policyQuantificationTotal + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Metro",
                    color: "#ADD8E6",
                  },
                  {
                    angle:
                      Math.round(
                        (getModalSplitPassenger.shares.train / policyQuantificationTotal + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Train",
                    color: "#FF6347",
                  },
                  {
                    angle:
                      Math.round(
                        (getModalSplitPassenger.shares.car / policyQuantificationTotal + Number.EPSILON) * 36000
                      ) / 100,
                    label: "Car",
                    color: "#0000CD",
                  },
                  {
                    angle:
                      Math.round(
                        (getModalSplitPassenger.shares.tram / policyQuantificationTotal + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Tram",
                    color: " #228B22",
                  },
                  
                ]}
                type="piechart"
                colorType="literal"
                radius={140}
                getAngle={(d) => d.angle}
                width={350}
                height={350}
              />
              </div>
              <div>
                <DiscreteColorLegend
                items={emissionPolicyLegendItems}
                orientation="horizontal"/>
              </div>
            </Grid>
          </Grid>
        </div>

        <div style={{marginTop:"60px"}}>
          {/* policy quantification results */}
              <h3>Policy Quantification Results</h3>
              <XYPlot
                className="policy-quantification-chart"
                stackBy="y"
                xType="ordinal"
                margin={{ left: 80 }}
                width={1150}
                height={500}
              >
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <BarSeries
                  color="#3d58a3"
                  opacity={0.5}
                  data={busPolicyQuantification}
                  stack
                />
                <BarSeries
                  color="#ef7d00"
                  opacity={0.55}
                  data={carPolicyQuantification}
                  stack
                />
                <BarSeries
                  color="#95c11f"
                  opacity={0.55}
                  data={metroPolicyQuantification}
                  stack
                />
                <BarSeries
                  color="#ce143d"
                  opacity={0.55}
                  data={railTransportPolicyQuantification}
                  stack
                />
                <BarSeries
                  color="#845f9e"
                  opacity={0.55}
                  data={roadTransportPolicyQuantification}
                  stack
                />
                <BarSeries color="#996e35" opacity={0.55} data={trainPolicyQuantification} stack />
                <BarSeries color="#76918e" opacity={0.55} data={tramPolicyQuantification} stack />
                <BarSeries
                  color="#0000CD"
                  data={waterwaysTransportPolicyQuantification}
                  stack
                />
                <LineSeries
                  className="fourth-series"
                  color="#000000"
                  strokeWidth="1"
                  data={totalPolicyQuantification}
                />
              </XYPlot>

              <div>
                <DiscreteColorLegend
                items={transportAndPolicyResultsLegend}
                orientation="horizontal"/>
              </div>
              
        </div>
        <br/>
        <div style={{margin:"30px"}}>
          {/* transport projections start here */}
              <h3>Transport Projection Results</h3>
              <XYPlot
                className="transport-projection-chart"
                stackBy="y"
                xType="ordinal"
                margin={{ left: 80 }}
                width={1150}
                height={500}
                
              >
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <BarSeries
                  color="#3d58a3"
                  opacity={0.5}
                  data={busProjection}
                  stack
                />
                <BarSeries
                  color="#ef7d00"
                  opacity={0.55}
                  data={carProjection}
                  stack
                />
                <BarSeries
                  color="#95c11f"
                  opacity={0.55}
                  data={metroProjection}
                  stack
                />
                <BarSeries
                  color="#ce143d"
                  opacity={0.55}
                  data={railTransportProjection}
                  stack
                />
                <BarSeries
                  color="#845f9e"
                  opacity={0.55}
                  data={roadTransportProjection}
                  stack
                />
                <BarSeries color="#996e35" opacity={0.55} data={trainProjection} stack />
                <BarSeries color="#76918e" opacity={0.55} data={tramProjection} stack />
                <BarSeries
                  color="#0000CD"
                  strokeWidth="1"
                  data={waterwaysTransportProjection}
                  stack
                />
                <LineSeries
                  className="fourth-series"
                  color="#000000"
                  strokeWidth="1"
                  // data={totalTransportProjection}
                />
              </XYPlot>
              <div>
                <DiscreteColorLegend
                items={transportAndPolicyResultsLegend}
                orientation="horizontal"/>
              </div>
              
        </div>

              <br />
              <div className="backButtonNew">
              <Button
                size="small"
                value="backProjections"
                onClick={() =>
                  navigate("../u3planner", { replace: true })
                }
                label="&laquo; Previous"
                secondary="true"
              />
            </div>
      
      </Container>
    );
  };


   {/* <section>
          <div></div>
          <div>
            <form>
              <div>
                <label>
                  <b>Passenger mobility (resident and non-residential)</b>
                </label>
                <label>expected change %</label>
                <label></label>
                <label>% of the area affected</label>
                <div>
                  <label>change in mobility %</label>
                  <label>{passengerMobility.expectedPassChange}</label>
                  {/* <label>{policyQuant.passengerMobility.expectedChange}</label>
                  <label></label>
                  <label>{passengerMobility.affectedPassArea}</label>
                </div>

                <div>
                  <label>Policy period</label>
                  <label> {passengerMobility.yearStart}</label>
                  <label> {passengerMobility.yearEnd}</label>
                </div>
              </div>
              <br />
              <div>
                <label>
                  <b>Freight transport</b>
                </label>
                <label>expected change %</label>
                {/* <label empty for spacing></label>
              <label>% of the area affected</label>
                <div>
                  <label>change in mobility %</label>
                  <label>{freightTransport.expectedChange}</label>
                  {/* <label empty for spacing></label>
                <label>% of the area affected goes here</label>
                </div>
                <div>
                  <label>Policy period</label>
                  <label> {freightTransport.yearStart}</label>
                  <label> {freightTransport.yearEnd}</label>
                </div>
              </div>
              <br />
              <div>
                <label>
                  <b>Modal split/Passenger transport</b>
                </label>
                <label>without policy</label>
                <label>policy target %</label>
                <label>% of the population affected</label>
                <div>
                  <label>Share for bus</label>
                  <label>{emission.bus}</label>
                  <label> {modalPassShares.bus}</label>
                  <label> {modalSplitPassenger.affectedPopulation}</label>
                </div>
                <div>
                  <label>Share for metro</label>
                  <label>{emission.metro}</label>
                  <label> {modalPassShares.metro}</label>
                </div>
                <div>
                  <label>Share for tram</label>
                  <label>{emission.tram}</label>
                  <label> {modalPassShares.tram}</label>
                </div>
                <div>
                  <label>Share for train</label>
                  <label>{emission.train}</label>
                  <label> {modalPassShares.train}</label>
                </div>
                <div>
                  <label>Car passenger</label>
                  <label>{emission.car}</label>
                  <label> {modalPassShares.car}</label>
                </div>
                <div>
                  <label>
                    <b>Total</b>
                  </label>
                  <label></label>
                  <label></label>
                </div>
               
                <div>
                  <label>Policy period</label>
                  <label> {modalSplitPassenger.yearStart}</label>
                  <label> {modalSplitPassenger.yearEnd}</label>
                </div>
              </div>
             
             
              
              <br />
              <div>
                <label>
                  <b>Modal split/ Freight transport</b>
                </label>
                <label>withouth policy</label>
                <label>policy target %</label>
                {/* <label>% of the area affeccted</label>
                <div>
                  <label>Share for rail</label>
                  <label>{emission.rail_transport}</label>
                  <label> {modalFreShares.railTransport}</label>
                </div>
                <div>
                  <label>Share for inland waterways</label>
                  <label>{emission.waterways_transport}</label>
                  <label> {modalFreShares.waterwaysTransport}</label>
                </div>
                <div>
                  <label>Share for road freight</label>
                  <label>{emission.road_transport}</label>
                  <label> {modalFreShares.roadTransport}</label>
                </div>
                <div>
                  <label>
                    <b>Total</b>
                  </label>
                  {/* <label>{emission.total}</label>
                  <label></label>
                </div>
                <div>
                  <label>Policy period</label>
                  <label> {modalSplitFreight.yearStart}</label>
                  <label> {modalSplitFreight.yearEnd}</label>
                </div>
              </div>
             
             
             
              <br />
              <div>
                <label>
                  <b>Shares of fuel types/ Bus transport</b>
                </label>
                <label>withouth policy</label>
                <label>policy target %</label>
                <label>% of the area affeccted</label>
                <div>
                  <label>Petroleum products</label>
                  <label></label>
                  <label>{fuelSharesBusTypes.petrol}</label>
                  <label>{fuelSharesBus.affectedArea}</label>
                </div>
                <div>
                  <label>Liquified Petroleum Gas (LPG)</label>
                  <label></label>
                  <label>{fuelSharesBusTypes.lpg}</label>
                </div>
                <div>
                  <label>Natural Gas (CNG)</label>
                  <label></label>
                  <label>{fuelSharesBusTypes.cng}</label>
                </div>
                <div>
                  <label>Electricty</label>
                  <label></label>
                  <label>{fuelSharesBusTypes.electricity}</label>
                </div>
                <div>
                  <label>Diesel</label>
                  <label></label>
                  <label>{fuelSharesBusTypes.diesel}</label>
                </div>
                <div>
                  <label>
                    <b>Total</b>
                  </label>
                  <label></label>
                  <label></label>
                </div>
                <div>
                  <label>Policy period</label>
                  <label>{fuelSharesBus.yearStart}</label>
                  <label>{fuelSharesBus.yearEnd}</label>
                </div>
              </div>
              <br/>
              
              <br />
              <div>
                <label>
                  <b>Shares of fuel types/Cars</b>
                </label>
                <label>withouth policy</label>
                <label>policy target %</label>
                <label>% of the area affeccted</label>
                <div>
                  <label>Liquified Petroleum Gas (LPG)</label>
                  <label></label>
                  <label>{fuelSharesCarTypes.lpg}</label>
                  <label>{fuelSharesCar.affectedArea}</label>
                </div>
                <div>
                  <label>Natural Gas (CNG)</label>
                  <label></label>
                  <label>{fuelSharesCarTypes.cng}</label>
                </div>
                <div>
                  <label>Alternative Energy/biomethane NGV</label>
                  <label></label>
                  <label>{fuelSharesCarTypes.ngv}</label>
                </div>
                <div>
                  <label>Hybrid electric-petrol</label>
                  <label></label>
                  <label>{fuelSharesCarTypes.hep}</label>
                </div>
                <div>
                  <label>Plug-in hybrid petrol-electric PHEV</label>
                  <label></label>
                  <label>{fuelSharesCarTypes.phev}</label>
                </div>
                {/* <div>
                <label>Hybrid diesel-electric</label>
                <label></label>
                <label>policy target %</label>
              </div>
              <div>
                <label>Plug-in hybrid diesel-electric PHEV</label>
                <label></label>
                <label>policy target %</label>
              </div>
                <div>
                  <label>Hydrogen and fuel cells</label>
                  <label></label>
                  <label>{fuelSharesCarTypes.hydrogenfuel}</label>
                </div>
                <div>
                  <label>Bioethanol</label>
                  <label></label>
                  <label>{fuelSharesCarTypes.bioethanol}</label>
                </div>
                <div>
                  <label>Bio-diesel</label>
                  <label></label>
                  <label>{fuelSharesCarTypes.biodiesel}</label>
                </div>
                <div>
                  <label>Bi-fuel</label>
                  <label></label>
                  <label>{fuelSharesCarTypes.bifuel}</label>
                </div>
                <div>
                  <label>Other (unknown)</label>
                  <label></label>
                  <label>{fuelSharesCarTypes.other}</label>
                </div>
                <div>
                  <label>Electricity BEV</label>
                  <label></label>
                  <label>{fuelSharesCarTypes.electricity}</label>
                </div>
                <div>
                  <label>Petrol, according to country selection</label>
                  <label></label>
                  <label>{fuelSharesCarTypes.petrol}</label>
                </div>
                <div>
                  <label>Diesel, according to country selection</label>
                  <label></label>
                  <label>{fuelSharesCarTypes.diesel}</label>
                </div>
                <div>
                  <label>
                    <b>Total</b>
                  </label>
                  <label></label>
                  <label></label>
                </div>
                <div>
                  <label>Policy period</label>
                  <label>{fuelSharesCar.yearStart}</label>
                  <label>{fuelSharesCar.yearEnd}</label>
                </div>
              </div>

              
              
              <br />
              <div>
                <label>
                  <b>Electricity for transport</b>
                </label>
                <label>gCO2e/kWh without policy</label>
                <label>policy target %</label>
                <label>% of the area affected</label>
                <div>
                  <label>Increase in the share of renewables</label>
                  <label>gCO2e/kWh without policy</label>
                  <label>{electricityTransTypes.renewables}</label>
                  <label>{electricityTransport.affectedArea}</label>
                </div>
                <div>
                  <label>Policy period</label>
                  <label>{electricityTransport.yearStart}</label>
                  <label>{electricityTransport.yearEnd}</label>
                </div>
              </div>
              <div id="divspace">
                <RadialChart
                  type="piechart"
                  data={[
                    {
                      // angle: ,
                      angle: 12,
                      label: "Urban",
                      color: "#164059",
                    },
                    {
                      angle: 38,
                      label: "Suburban",
                      color: "#F25F29",
                    },
                    {
                      angle: 12,
                      label: "Town",
                      color: "#F23A29",
                    },
                    {
                      angle: 38,
                      label: "Rural",
                      color: "#D9D9D9",
                    },
                  ]}
                  width={180}
                  height={180}
                  colorType="literal"
                />
              </div>
              <label>colorlegend can go here maybe</label>
              {/* <DiscreteColorLegend
                items={settlementLabels}
                orientation="horizontal"
                strokeWidth="40"
              />
              <div>
                <RadialChart
                  type="piechart"
                  data={[
                    {
                      // angle: ,
                      angle: 12,
                      label: "Urban",
                      color: "#164059",
                    },
                    {
                      angle: 38,
                      label: "Suburban",
                      color: "#F25F29",
                    },
                    {
                      angle: 12,
                      label: "Town",
                      color: "#F23A29",
                    },
                    {
                      angle: 38,
                      label: "Rural",
                      color: "#D9D9D9",
                    },
                  ]}
                  width={180}
                  height={180}
                  colorType="literal"
                />
              </div>
              <br />
              <div>
                <XYPlot
                  margin={{ left: 100 }}
                  width={900}
                  height={500}
                  xType="ordinal"
                  yDomain={[0, 100000]}
                  // yType="linear"
                  stackBy="y"
                >
                  <HorizontalGridLines style={{ stroke: "#B7E9ED" }} />
                  <VerticalGridLines style={{ stroke: "#B7E9ED" }} />
                  <VerticalBarSeries className="U3StackedBarchart" />
                  <XAxis
                    style={{
                      line: { stroke: "#ADDDE1" },
                      ticks: { stroke: "#ADDDE1" },
                      text: {
                        stroke: "none",
                        fill: "#6b6b76",
                        fontWeight: 600,
                      },
                    }}
                  />
                  <YAxis />
                  <LineSeries
                    curve={null}
                    data={[
                      { x: 2022, y: 12000 },
                      { x: 2023, y: 16200 },
                      { x: 2024, y: 16300 },
                      { x: 2025, y: 16340 },
                      { x: 2026, y: 16360 },
                      { x: 2027, y: 16220 },
                      { x: 2028, y: 16000 },
                      { x: 2029, y: 14000 },
                      { x: 2030, y: 16550 },
                      { x: 2031, y: 16300 },
                      { x: 2032, y: 16200 },
                      { x: 2033, y: 15600 },
                      { x: 2034, y: 15800 },
                      { x: 2035, y: 16000 },
                      { x: 2036, y: 16100 },
                      { x: 2037, y: 16200 },
                      { x: 2038, y: 16300 },
                      { x: 2039, y: 16400 },
                      { x: 2040, y: 16500 },
                      { x: 2041, y: 16400 },
                      { x: 2042, y: 16300 },
                      { x: 2043, y: 16200 },
                      { x: 2044, y: 16100 },
                      { x: 2045, y: 16000 },
                      { x: 2046, y: 15900 },
                      { x: 2047, y: 16000 },
                      { x: 2048, y: 16000 },
                      { x: 2049, y: 16000 },
                      { x: 2050, y: 16000 },
                    ]}
                    opacity={1}
                    stroke="rgba(102,116,155,1)"
                    strokeDasharray=""
                    strokeStyle="dashed"
                    strokeWidth="1.5"
                    style={{}}
                  />
                  <BarSeries
                    color="#8C0303"
                    data={[
                      { x: 2022, y: 1500 },
                      { x: 2023, y: 1500 },
                      { x: 2024, y: 1500 },
                      { x: 2025, y: 1500 },
                      { x: 2026, y: 1500 },
                      { x: 2027, y: 1500 },
                      { x: 2028, y: 1500 },
                      { x: 2029, y: 1500 },
                      { x: 2030, y: 1500 },
                      { x: 2031, y: 1500 },
                      { x: 2032, y: 1500 },
                      { x: 2033, y: 1500 },
                      { x: 2034, y: 1500 },
                      { x: 2035, y: 1500 },
                      { x: 2036, y: 1500 },
                      { x: 2037, y: 1500 },
                      { x: 2038, y: 1500 },
                      { x: 2039, y: 1500 },
                      { x: 2040, y: 1500 },
                      { x: 2041, y: 1500 },
                      { x: 2042, y: 1500 },
                      { x: 2043, y: 1500 },
                      { x: 2044, y: 1500 },
                      { x: 2045, y: 1500 },
                      { x: 2046, y: 1500 },
                      { x: 2047, y: 1500 },
                      { x: 2048, y: 1500 },
                      { x: 2049, y: 1500 },
                      { x: 2050, y: 1500 },
                    ]}
                  />
                  <BarSeries
                    color="#A6036D"
                    data={[
                      { x: 2022, y: 1500 },
                      { x: 2023, y: 1500 },
                      { x: 2024, y: 1500 },
                      { x: 2025, y: 1500 },
                      { x: 2026, y: 1500 },
                      { x: 2027, y: 1500 },
                      { x: 2028, y: 1500 },
                      { x: 2029, y: 1500 },
                      { x: 2030, y: 1500 },
                      { x: 2031, y: 1500 },
                      { x: 2032, y: 1500 },
                      { x: 2033, y: 1500 },
                      { x: 2034, y: 1500 },
                      { x: 2035, y: 1500 },
                      { x: 2036, y: 1500 },
                      { x: 2037, y: 1500 },
                      { x: 2038, y: 1500 },
                      { x: 2039, y: 1500 },
                      { x: 2040, y: 1500 },
                      { x: 2041, y: 1500 },
                      { x: 2042, y: 1500 },
                      { x: 2043, y: 1500 },
                      { x: 2044, y: 1500 },
                      { x: 2045, y: 1500 },
                      { x: 2046, y: 1500 },
                      { x: 2047, y: 1500 },
                      { x: 2048, y: 1500 },
                      { x: 2049, y: 1500 },
                      { x: 2050, y: 1500 },
                    ]}
                  />
                  <BarSeries
                    color="#400D01"
                    data={[
                      { x: 2022, y: 1500 },
                      { x: 2023, y: 1500 },
                      { x: 2024, y: 1500 },
                      { x: 2025, y: 1500 },
                      { x: 2026, y: 1500 },
                      { x: 2027, y: 1500 },
                      { x: 2028, y: 1500 },
                      { x: 2029, y: 1500 },
                      { x: 2030, y: 1500 },
                      { x: 2031, y: 1500 },
                      { x: 2032, y: 1500 },
                      { x: 2033, y: 1500 },
                      { x: 2034, y: 1500 },
                      { x: 2035, y: 1500 },
                      { x: 2036, y: 1500 },
                      { x: 2037, y: 1500 },
                      { x: 2038, y: 1500 },
                      { x: 2039, y: 1500 },
                      { x: 2040, y: 1500 },
                      { x: 2041, y: 1500 },
                      { x: 2042, y: 1500 },
                      { x: 2043, y: 1500 },
                      { x: 2044, y: 1500 },
                      { x: 2045, y: 1500 },
                      { x: 2046, y: 1500 },
                      { x: 2047, y: 1500 },
                      { x: 2048, y: 1500 },
                      { x: 2049, y: 1500 },
                      { x: 2050, y: 1500 },
                    ]}
                  />
                  <BarSeries
                    color="#C4D4F2"
                    data={[
                      { x: 2022, y: 1500 },
                      { x: 2023, y: 1500 },
                      { x: 2024, y: 1500 },
                      { x: 2025, y: 1500 },
                      { x: 2026, y: 1500 },
                      { x: 2027, y: 1500 },
                      { x: 2028, y: 1500 },
                      { x: 2029, y: 1500 },
                      { x: 2030, y: 1500 },
                      { x: 2031, y: 1500 },
                      { x: 2032, y: 1500 },
                      { x: 2033, y: 1500 },
                      { x: 2034, y: 1500 },
                      { x: 2035, y: 1500 },
                      { x: 2036, y: 1500 },
                      { x: 2037, y: 1500 },
                      { x: 2038, y: 1500 },
                      { x: 2039, y: 1500 },
                      { x: 2040, y: 1500 },
                      { x: 2041, y: 1500 },
                      { x: 2042, y: 1500 },
                      { x: 2043, y: 1500 },
                      { x: 2044, y: 1500 },
                      { x: 2045, y: 1500 },
                      { x: 2046, y: 1500 },
                      { x: 2047, y: 1500 },
                      { x: 2048, y: 1500 },
                      { x: 2049, y: 1500 },
                      { x: 2050, y: 1500 },
                    ]}
                  />
                  <BarSeries
                    color="#D90404"
                    data={[
                      { x: 2022, y: 1500 },
                      { x: 2023, y: 1500 },
                      { x: 2024, y: 1500 },
                      { x: 2025, y: 1500 },
                      { x: 2026, y: 1500 },
                      { x: 2027, y: 1500 },
                      { x: 2028, y: 1500 },
                      { x: 2029, y: 1500 },
                      { x: 2030, y: 1500 },
                      { x: 2031, y: 1500 },
                      { x: 2032, y: 1500 },
                      { x: 2033, y: 1500 },
                      { x: 2034, y: 1500 },
                      { x: 2035, y: 1500 },
                      { x: 2036, y: 1500 },
                      { x: 2037, y: 1500 },
                      { x: 2038, y: 1500 },
                      { x: 2039, y: 1500 },
                      { x: 2040, y: 1500 },
                      { x: 2041, y: 1500 },
                      { x: 2042, y: 1500 },
                      { x: 2043, y: 1500 },
                      { x: 2044, y: 1500 },
                      { x: 2045, y: 1500 },
                      { x: 2046, y: 1500 },
                      { x: 2047, y: 1500 },
                      { x: 2048, y: 1500 },
                      { x: 2049, y: 1500 },
                      { x: 2050, y: 1500 },
                    ]}
                  />
                  <BarSeries
                    color="#80D941"
                    data={[
                      { x: 2022, y: 1500 },
                      { x: 2023, y: 1500 },
                      { x: 2024, y: 1500 },
                      { x: 2025, y: 1500 },
                      { x: 2026, y: 1500 },
                      { x: 2027, y: 1500 },
                      { x: 2028, y: 1500 },
                      { x: 2029, y: 1500 },
                      { x: 2030, y: 1500 },
                      { x: 2031, y: 1500 },
                      { x: 2032, y: 1500 },
                      { x: 2033, y: 1500 },
                      { x: 2034, y: 1500 },
                      { x: 2035, y: 1500 },
                      { x: 2036, y: 1500 },
                      { x: 2037, y: 1500 },
                      { x: 2038, y: 1500 },
                      { x: 2039, y: 1500 },
                      { x: 2040, y: 1500 },
                      { x: 2041, y: 1500 },
                      { x: 2042, y: 1500 },
                      { x: 2043, y: 1500 },
                      { x: 2044, y: 1500 },
                      { x: 2045, y: 1500 },
                      { x: 2046, y: 1500 },
                      { x: 2047, y: 1500 },
                      { x: 2048, y: 1500 },
                      { x: 2049, y: 1500 },
                      { x: 2050, y: 1500 },
                    ]}
                  />
                  <LineSeries
                  curve={null}
                  data={[
                    { x: 2022, y: projections.total[2022]},
                    { x: 2023, y: projections.total[2023]},
                    { x: 2024, y: projections.total[2024]},
                    { x: 2025, y: projections.total[2025]},
                    { x: 2026, y: projections.total[2026]},
                    { x: 2027, y: projections.total[2027]},
                    { x: 2028, y: projections.total[2028]},
                    { x: 2029, y: projections.total[2029]},
                    { x: 2030, y: projections.total[2030]},
                    { x: 2031, y: projections.total[2031]},
                    { x: 2032, y: projections.total[2032]},
                    { x: 2033, y: projections.total[2033]},
                    { x: 2034, y: projections.total[2034]},
                    { x: 2035, y: projections.total[2035]},
                    { x: 2036, y: projections.total[2036]},
                    { x: 2037, y: projections.total[2037]},
                    { x: 2038, y: projections.total[2038]},
                    { x: 2039, y: projections.total[2039]},
                    { x: 2040, y: projections.total[2040]},
                    { x: 2041, y: projections.total[2041]},
                    { x: 2042, y: projections.total[2042]},
                    { x: 2043, y: projections.total[2043]},
                    { x: 2044, y: projections.total[2044]},
                    { x: 2045, y: projections.total[2045]},
                    { x: 2046, y: projections.total[2046]},
                    { x: 2047, y: projections.total[2047]},
                    { x: 2048, y: projections.total[2048]},
                    { x: 2049, y: projections.total[2049]},
                    { x: 2050, y: projections.total[2050]},
                  ]}
                  opacity={1}
                  stroke="rgba(102,116,155,1)"
                  strokeDasharray=""
                  strokeStyle="dashed"
                  strokeWidth="1.5"
                  style={{}}
                />
                <BarSeries
                  color="#ffdf43"
                  data={[
                    { x: 2022, y: policyQuantification.bus[2022]},
                    { x: 2023, y: policyQuantification.bus[2023]},
                    { x: 2024, y: policyQuantification.bus[2024]},
                    { x: 2025, y: policyQuantification.bus[2025]},
                    { x: 2026, y: policyQuantification.bus[2026]},
                    { x: 2027, y: policyQuantification.bus[2027]},
                    { x: 2028, y: policyQuantification.bus[2028]},
                    { x: 2029, y: policyQuantification.bus[2029]},
                    { x: 2030, y: policyQuantification.bus[2030]},
                    { x: 2031, y: policyQuantification.bus[2031]},
                    { x: 2032, y: policyQuantification.bus[2032]},
                    { x: 2033, y: policyQuantification.bus[2033]},
                    { x: 2034, y: policyQuantification.bus[2034]},
                    { x: 2035, y: policyQuantification.bus[2035]},
                    { x: 2036, y: policyQuantification.bus[2036]},
                    { x: 2037, y: policyQuantification.bus[2037]},
                    { x: 2038, y: policyQuantification.bus[2038]},
                    { x: 2039, y: policyQuantification.bus[2039]},
                    { x: 2040, y: policyQuantification.bus[2040]},
                    { x: 2041, y: policyQuantification.bus[2041]},
                    { x: 2042, y: policyQuantification.bus[2042]},
                    { x: 2043, y: policyQuantification.bus[2043]},
                    { x: 2044, y: policyQuantification.bus[2044]},
                    { x: 2045, y: policyQuantification.bus[2045]},
                    { x: 2046, y: policyQuantification.bus[2046]},
                    { x: 2047, y: policyQuantification.bus[2047]},
                    { x: 2048, y: policyQuantification.bus[2048]},
                    { x: 2049, y: policyQuantification.bus[2049]},
                    { x: 2050, y: policyQuantification.bus[2050]},
                  ]}
                />
                <BarSeries
                  color="#76918e"
                  data={[
                    { x: 2022, y: policyQuantification.car[2022]},
                    { x: 2023, y: policyQuantification.car[2023]},
                    { x: 2024, y: policyQuantification.car[2024]},
                    { x: 2025, y: policyQuantification.car[2025]},
                    { x: 2026, y: policyQuantification.car[2026]},
                    { x: 2027, y: policyQuantification.car[2027]},
                    { x: 2028, y: policyQuantification.car[2028]},
                    { x: 2029, y: policyQuantification.car[2029]},
                    { x: 2030, y: policyQuantification.car[2030]},
                    { x: 2031, y: policyQuantification.car[2031]},
                    { x: 2032, y: policyQuantification.car[2032]},
                    { x: 2033, y: policyQuantification.car[2033]},
                    { x: 2034, y: policyQuantification.car[2034]},
                    { x: 2035, y: policyQuantification.car[2035]},
                    { x: 2036, y: policyQuantification.car[2036]},
                    { x: 2037, y: policyQuantification.car[2037]},
                    { x: 2038, y: policyQuantification.car[2038]},
                    { x: 2039, y: policyQuantification.car[2039]},
                    { x: 2040, y: policyQuantification.car[2040]},
                    { x: 2041, y: policyQuantification.car[2041]},
                    { x: 2042, y: policyQuantification.car[2042]},
                    { x: 2043, y: policyQuantification.car[2043]},
                    { x: 2044, y: policyQuantification.car[2044]},
                    { x: 2045, y: policyQuantification.car[2045]},
                    { x: 2046, y: policyQuantification.car[2046]},
                    { x: 2047, y: policyQuantification.car[2047]},
                    { x: 2048, y: policyQuantification.car[2048]},
                    { x: 2049, y: policyQuantification.car[2049]},
                    { x: 2050, y: policyQuantification.car[2050]},
                  ]}
                />
                <BarSeries
                  color="#ce143d"
                  data={[
                    { x: 2022, y: policyQuantification.tram[2022]},
                    { x: 2023, y: policyQuantification.tram[2023]},
                    { x: 2024, y: policyQuantification.tram[2024]},
                    { x: 2025, y: policyQuantification.tram[2025]},
                    { x: 2026, y: policyQuantification.tram[2026]},
                    { x: 2027, y: policyQuantification.tram[2027]},
                    { x: 2028, y: policyQuantification.tram[2028]},
                    { x: 2029, y: policyQuantification.tram[2029]},
                    { x: 2030, y: policyQuantification.tram[2030]},
                    { x: 2031, y: policyQuantification.tram[2031]},
                    { x: 2032, y: policyQuantification.tram[2032]},
                    { x: 2033, y: policyQuantification.tram[2033]},
                    { x: 2034, y: policyQuantification.tram[2034]},
                    { x: 2035, y: policyQuantification.tram[2035]},
                    { x: 2036, y: policyQuantification.tram[2036]},
                    { x: 2037, y: policyQuantification.tram[2037]},
                    { x: 2038, y: policyQuantification.tram[2038]},
                    { x: 2039, y: policyQuantification.tram[2039]},
                    { x: 2040, y: policyQuantification.tram[2040]},
                    { x: 2041, y: policyQuantification.tram[2041]},
                    { x: 2042, y: policyQuantification.tram[2042]},
                    { x: 2043, y: policyQuantification.tram[2043]},
                    { x: 2044, y: policyQuantification.tram[2044]},
                    { x: 2045, y: policyQuantification.tram[2045]},
                    { x: 2046, y: policyQuantification.tram[2046]},
                    { x: 2047, y: policyQuantification.tram[2047]},
                    { x: 2048, y: policyQuantification.tram[2048]},
                    { x: 2049, y: policyQuantification.tram[2049]},
                    { x: 2050, y: policyQuantification.tram[2050]},
                  ]}
                />
                <BarSeries
                  color="#d6e7d9"
                  data={[
                    { x: 2022, y: policyQuantification.metro[2022]},
                    { x: 2023, y: policyQuantification.metro[2023]},
                    { x: 2024, y: policyQuantification.metro[2024]},
                    { x: 2025, y: policyQuantification.metro[2025]},
                    { x: 2026, y: policyQuantification.metro[2026]},
                    { x: 2027, y: policyQuantification.metro[2027]},
                    { x: 2028, y: policyQuantification.metro[2028]},
                    { x: 2029, y: policyQuantification.metro[2029]},
                    { x: 2030, y: policyQuantification.metro[2030]},
                    { x: 2031, y: policyQuantification.metro[2031]},
                    { x: 2032, y: policyQuantification.metro[2032]},
                    { x: 2033, y: policyQuantification.metro[2033]},
                    { x: 2034, y: policyQuantification.metro[2034]},
                    { x: 2035, y: policyQuantification.metro[2035]},
                    { x: 2036, y: policyQuantification.metro[2036]},
                    { x: 2037, y: policyQuantification.metro[2037]},
                    { x: 2038, y: policyQuantification.metro[2038]},
                    { x: 2039, y: policyQuantification.metro[2039]},
                    { x: 2040, y: policyQuantification.metro[2040]},
                    { x: 2041, y: policyQuantification.metro[2041]},
                    { x: 2042, y: policyQuantification.metro[2042]},
                    { x: 2043, y: policyQuantification.metro[2043]},
                    { x: 2044, y: policyQuantification.metro[2044]},
                    { x: 2045, y: policyQuantification.metro[2045]},
                    { x: 2046, y: policyQuantification.metro[2046]},
                    { x: 2047, y: policyQuantification.metro[2047]},
                    { x: 2048, y: policyQuantification.metro[2048]},
                    { x: 2049, y: policyQuantification.metro[2049]},
                    { x: 2050, y: policyQuantification.metro[2050]},
                  ]}
                />
                <BarSeries
                  color="#002117"
                  data={[
                    { x: 2022, y: policyQuantification.train[2022]},
                    { x: 2023, y: policyQuantification.train[2023]},
                    { x: 2024, y: policyQuantification.train[2024]},
                    { x: 2025, y: policyQuantification.train[2025]},
                    { x: 2026, y: policyQuantification.train[2026]},
                    { x: 2027, y: policyQuantification.train[2027]},
                    { x: 2028, y: policyQuantification.train[2028]},
                    { x: 2029, y: policyQuantification.train[2029]},
                    { x: 2030, y: policyQuantification.train[2030]},
                    { x: 2031, y: policyQuantification.train[2031]},
                    { x: 2032, y: policyQuantification.train[2032]},
                    { x: 2033, y: policyQuantification.train[2033]},
                    { x: 2034, y: policyQuantification.train[2034]},
                    { x: 2035, y: policyQuantification.train[2035]},
                    { x: 2036, y: policyQuantification.train[2036]},
                    { x: 2037, y: policyQuantification.train[2037]},
                    { x: 2038, y: policyQuantification.train[2038]},
                    { x: 2039, y: policyQuantification.train[2039]},
                    { x: 2040, y: policyQuantification.train[2040]},
                    { x: 2041, y: policyQuantification.train[2041]},
                    { x: 2042, y: policyQuantification.train[2042]},
                    { x: 2043, y: policyQuantification.train[2043]},
                    { x: 2044, y: policyQuantification.train[2044]},
                    { x: 2045, y: policyQuantification.train[2045]},
                    { x: 2046, y: policyQuantification.train[2046]},
                    { x: 2047, y: policyQuantification.train[2047]},
                    { x: 2048, y: policyQuantification.train[2048]},
                    { x: 2049, y: policyQuantification.train[2049]},
                    { x: 2050, y: policyQuantification.train[2050]},
                  ]}
                />
                <BarSeries
                  color="#ef7d00"
                  data={[
                    { x: 2022, y: policyQuantification.rail_transport[2022]},
                    { x: 2023, y: policyQuantification.rail_transport[2023]},
                    { x: 2024, y: policyQuantification.rail_transport[2024]},
                    { x: 2025, y: policyQuantification.rail_transport[2025]},
                    { x: 2026, y: policyQuantification.rail_transport[2026]},
                    { x: 2027, y: policyQuantification.rail_transport[2027]},
                    { x: 2028, y: policyQuantification.rail_transport[2028]},
                    { x: 2029, y: policyQuantification.rail_transport[2029]},
                    { x: 2030, y: policyQuantification.rail_transport[2030]},
                    { x: 2031, y: policyQuantification.rail_transport[2031]},
                    { x: 2032, y: policyQuantification.rail_transport[2032]},
                    { x: 2033, y: policyQuantification.rail_transport[2033]},
                    { x: 2034, y: policyQuantification.rail_transport[2034]},
                    { x: 2035, y: policyQuantification.rail_transport[2035]},
                    { x: 2036, y: policyQuantification.rail_transport[2036]},
                    { x: 2037, y: policyQuantification.rail_transport[2037]},
                    { x: 2038, y: policyQuantification.rail_transport[2038]},
                    { x: 2039, y: policyQuantification.rail_transport[2039]},
                    { x: 2040, y: policyQuantification.rail_transport[2040]},
                    { x: 2041, y: policyQuantification.rail_transport[2041]},
                    { x: 2042, y: policyQuantification.rail_transport[2042]},
                    { x: 2043, y: policyQuantification.rail_transport[2043]},
                    { x: 2044, y: policyQuantification.rail_transport[2044]},
                    { x: 2045, y: policyQuantification.rail_transport[2045]},
                    { x: 2046, y: policyQuantification.rail_transport[2046]},
                    { x: 2047, y: policyQuantification.rail_transport[2047]},
                    { x: 2048, y: policyQuantification.rail_transport[2048]},
                    { x: 2049, y: policyQuantification.rail_transport[2049]},
                    { x: 2050, y: policyQuantification.rail_transport[2050]},
                  ]}
                />
                <BarSeries
                  color="#6c3b00"
                  data={[
                    { x: 2022, y: policyQuantification.road_transport[2022]},
                    { x: 2023, y: policyQuantification.road_transport[2023]},
                    { x: 2024, y: policyQuantification.road_transport[2024]},
                    { x: 2025, y: policyQuantification.road_transport[2025]},
                    { x: 2026, y: policyQuantification.road_transport[2026]},
                    { x: 2027, y: policyQuantification.road_transport[2027]},
                    { x: 2028, y: policyQuantification.road_transport[2028]},
                    { x: 2029, y: policyQuantification.road_transport[2029]},
                    { x: 2030, y: policyQuantification.road_transport[2030]},
                    { x: 2031, y: policyQuantification.road_transport[2031]},
                    { x: 2032, y: policyQuantification.road_transport[2032]},
                    { x: 2033, y: policyQuantification.road_transport[2033]},
                    { x: 2034, y: policyQuantification.road_transport[2034]},
                    { x: 2035, y: policyQuantification.road_transport[2035]},
                    { x: 2036, y: policyQuantification.road_transport[2036]},
                    { x: 2037, y: policyQuantification.road_transport[2037]},
                    { x: 2038, y: policyQuantification.road_transport[2038]},
                    { x: 2039, y: policyQuantification.road_transport[2039]},
                    { x: 2040, y: policyQuantification.road_transport[2040]},
                    { x: 2041, y: policyQuantification.road_transport[2041]},
                    { x: 2042, y: policyQuantification.road_transport[2042]},
                    { x: 2043, y: policyQuantification.road_transport[2043]},
                    { x: 2044, y: policyQuantification.road_transport[2044]},
                    { x: 2045, y: policyQuantification.road_transport[2045]},
                    { x: 2046, y: policyQuantification.road_transport[2046]},
                    { x: 2047, y: policyQuantification.road_transport[2047]},
                    { x: 2048, y: policyQuantification.road_transport[2048]},
                    { x: 2049, y: policyQuantification.road_transport[2049]},
                    { x: 2050, y: policyQuantification.road_transport[2050]},
                  ]}
                />
                <BarSeries
                  color="#00aed5"
                  data={[
                    { x: 2022, y: policyQuantification.waterways_transport[2022]},
                    { x: 2023, y: policyQuantification.waterways_transport[2023]},
                    { x: 2024, y: policyQuantification.waterways_transport[2024]},
                    { x: 2025, y: policyQuantification.waterways_transport[2025]},
                    { x: 2026, y: policyQuantification.waterways_transport[2026]},
                    { x: 2027, y: policyQuantification.waterways_transport[2027]},
                    { x: 2028, y: policyQuantification.waterways_transport[2028]},
                    { x: 2029, y: policyQuantification.waterways_transport[2029]},
                    { x: 2030, y: policyQuantification.waterways_transport[2030]},
                    { x: 2031, y: policyQuantification.waterways_transport[2031]},
                    { x: 2032, y: policyQuantification.waterways_transport[2032]},
                    { x: 2033, y: policyQuantification.waterways_transport[2033]},
                    { x: 2034, y: policyQuantification.waterways_transport[2034]},
                    { x: 2035, y: policyQuantification.waterways_transport[2035]},
                    { x: 2036, y: policyQuantification.waterways_transport[2036]},
                    { x: 2037, y: policyQuantification.waterways_transport[2037]},
                    { x: 2038, y: policyQuantification.waterways_transport[2038]},
                    { x: 2039, y: policyQuantification.waterways_transport[2039]},
                    { x: 2040, y: policyQuantification.waterways_transport[2040]},
                    { x: 2041, y: policyQuantification.waterways_transport[2041]},
                    { x: 2042, y: policyQuantification.waterways_transport[2042]},
                    { x: 2043, y: policyQuantification.waterways_transport[2043]},
                    { x: 2044, y: policyQuantification.waterways_transport[2044]},
                    { x: 2045, y: policyQuantification.waterways_transport[2045]},
                    { x: 2046, y: policyQuantification.waterways_transport[2046]},
                    { x: 2047, y: policyQuantification.waterways_transport[2047]},
                    { x: 2048, y: policyQuantification.waterways_transport[2048]},
                    { x: 2049, y: policyQuantification.waterways_transport[2049]},
                    { x: 2050, y: policyQuantification.waterways_transport[2050]},
                  ]}
                />
                </XYPlot>
              </div>

            </form>
          </div>
        </section> */}
