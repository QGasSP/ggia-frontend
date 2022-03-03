import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import "../css/u3.css";
import axios from "axios";
import {
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

const BarSeries = VerticalBarSeries;
/**
 * U3 input display
 * @return {}
 */

export const U3policies = ({
  policyQuantification,
  emission,
  passengerMob,
  freightTrans,
  modalPassShares,
  modalSplitPass,
  modalFreShares,
  modalSplitFre,
  fuelSharesBusTypes,
  fuelSharesBus,
  fuelSharesCarTypes,
  fuelSharesCar,
  electricityTransTypes,
  electricityTrans
}) => {
  const navigate = useNavigate();

  // if (updateU2charts === false && totalNewResidents !== 100) {
  return (
    <article>
      <div className="headerU3policies">
        <Divider textAlign="left" flexItem>
          {" "}
          <Chip label="U3 POLICY QUANTIFICATION" />
        </Divider>
      </div>

      <section>
        <div>{policyQuantification}</div>
        <div>
          <form>
            <div>
              <label>
                <b>U3.1 Passenger mobility (resident and non-residential)</b>
              </label>
              <label>expected change %</label>
              <label></label>
              <label>% of the area affected</label>
              <div>
                <label>change in mobility %</label>
                <label>{passengerMob.expectedChange}</label>
                {/* <label>{policyQuant.passengerMob.expectedChange}</label> */}
                <label></label>
                <label>{passengerMob.affectedArea}</label>
              </div>
              <div>
                <label>Policy period</label>
                <label> {passengerMob.yearStart}</label>
                <label> {passengerMob.yearFinish}</label>
              </div>
            </div>
            <br />
            <div>
              <label>
                <b>U3.2 Freight transport</b>
              </label>
              <label>expected change %</label>
              {/* <label empty for spacing></label>
              <label>% of the area affected</label> */}
              <div>
                <label>change in mobility %</label>
                <label>
                  {freightTrans.expectedChange}
                </label>
                {/* <label empty for spacing></label>
                <label>% of the area affected goes here</label> */}
              </div>
              <div>
                <label>Policy period</label>
                <label> {freightTrans.yearStart}</label>
                <label> {freightTrans.yearFinish}</label>
              </div>
            </div>
            <br />
            <div>
              <label>
                <b>U3.3 Modal split/Passenger transport</b>
              </label>
              <label>without policy</label>
              <label>policy target %</label>
              <label>% of the population affected</label>
              <div>
                <label>Share for bus</label>
                <label>{emission.bus}</label>
                <label> {modalPassShares.bus}</label>
                <label>
                  {" "}
                  {modalSplitPass.affectedPopulation}
                </label>
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
                <label> {modalSplitPass.yearStart}</label>
                <label> {modalSplitPass.yearFinish}</label>
              </div>
            </div>
            {/* <div className="column"> */}
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
              /> */}
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

            {/* <DiscreteColorLegend
                items={settlementLabels}
                orientation="horizontal"
                strokeWidth="40"
              /> */}
            {/* </div> */}
            <br />
            <div>
              <label>
                <b>U3.4 Modal split/Freight transport</b>
              </label>
              <label>withouth policy</label>
              <label>policy target %</label>
              {/* <label>% of the area affeccted</label> */}
              <div>
                <label>Share for rail</label>
                <label>{emission.rail_transport}</label>
                <label>
                  {" "}
                  {modalFreShares.railTransport}
                </label>
              </div>
              <div>
                <label>Share for inland waterways</label>
                <label>{emission.waterways_transport}</label>
                <label>
                  {" "}
                  {modalFreShares.waterwaysTransport}
                </label>
              </div>
              <div>
                <label>Share for road freight</label>
                <label>{emission.road_transport}</label>
                <label>
                  {" "}
                  {modalFreShares.roadTransport}
                </label>
              </div>
              <div>
                <label>
                  <b>Total</b>
                </label>
                <label>{emission.total}</label>
                <label></label>
              </div>
              <div>
                <label>Policy period</label>
                <label> {modalSplitFre.yearStart}</label>
                <label> {modalSplitFre.yearFinish}</label>
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
              /> */}
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
              <label>
                <b>U3.5 Shares of fuel types/Bus transport</b>
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
                <label>{fuelSharesBus.yearFinish}</label>
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
              /> */}
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
            {/* <div>
              <label>
                <b>U3.6 Shares of fuel types/Cars</b>
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
              <div>
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
                <label>{fuelSharesCar.yearFinish}</label>
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
              /> */}
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
              <label>
                <b>U3.7 Electricity for transport</b>
              </label>
              <label>gCO2e/kWh without policy</label>
              <label>policy target %</label>
              <label>% of the area affected</label>
              <div>
                <label>Increase in the share of renewables</label>
                <label>gCO2e/kWh without policy</label>
                <label>{electricityTransTypes.renewables}</label>
                <label>{electricityTrans.affectedArea}</label>
              </div>
              <div>
                <label>Policy period</label>
                <label>{electricityTrans.yearStart}</label>
                <label>{electricityTrans.yearFinish}</label>
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
              /> */}
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
                    text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
                  }}
                />
                <YAxis />
                <LineSeries
                  curve={null}
                  data={[
                    { x: 2022, y: 20000 },
                    { x: 2023, y: 20000 },
                    { x: 2024, y: 20000 },
                    { x: 2025, y: 20000 },
                    { x: 2026, y: 20000 },
                    { x: 2027, y: 20000 },
                    { x: 2028, y: 20000 },
                    { x: 2029, y: 20000 },
                    { x: 2030, y: 20000 },
                    { x: 2031, y: 20000 },
                    { x: 2032, y: 20000 },
                    { x: 2033, y: 20000 },
                    { x: 2034, y: 20000 },
                    { x: 2035, y: 20000 },
                    { x: 2036, y: 20000 },
                    { x: 2037, y: 20000 },
                    { x: 2038, y: 20000 },
                    { x: 2039, y: 20000 },
                    { x: 2040, y: 20000 },
                    { x: 2041, y: 20000 },
                    { x: 2042, y: 20000 },
                    { x: 2043, y: 20000 },
                    { x: 2044, y: 20000 },
                    { x: 2045, y: 20000 },
                    { x: 2046, y: 20000 },
                    { x: 2047, y: 20000 },
                    { x: 2048, y: 20000 },
                    { x: 2049, y: 20000 },
                    { x: 2050, y: 20000 },
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
                  color="#76918e"
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
                  color="#ce143d"
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
                  color="#d6e7d9"
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
                  color="#002117"
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
                  color="#ef7d00"
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
                  color="#6c3b00"
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
                  color="#00aed5"
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
              </XYPlot>
            </div>
            <br />
            <div>
              <div className="backButton">
                <Button
                  size="small"
                  value="backU3planner"
                  onClick={() => navigate("/U3plannner", { replace: true })}
                  label="&laquo; Previous"
                  secondary
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </article>
  );
};

U3policies.propTypes = {
  policyQuantification: PropTypes.object.isRequired,
  emission: PropTypes.object.isRequired,
  passengerMob: PropTypes.object.isRequired,
  freightTrans: PropTypes.object.isRequired,
  modalPassShares: PropTypes.object.isRequired,
  modalSplitPass: PropTypes.object.isRequired,
  modalFreShares: PropTypes.object.isRequired,
  modalSplitFre: PropTypes.object.isRequired,
  fuelSharesBusTypes: PropTypes.object.isRequired,
  fuelSharesBus: PropTypes.object.isRequired,
  fuelSharesCarTypes: PropTypes.object.isRequired,
  fuelSharesCar: PropTypes.object.isRequired,
  electricityTransTypes: PropTypes.object.isRequired,
  electricityTrans: PropTypes.object.isRequired,
};
