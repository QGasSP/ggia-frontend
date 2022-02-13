import React, { useState } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Button } from "./Button";
import "../css/u2planner.css";
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

const BarSeries = VerticalBarSeries;
/**
 * U3 user input
 * @return {}
 */

export const U3policies = ({
  year,
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  const [yearStart, setYearStart] = useState(0);
  const [yearFinish, setYearFinish] = useState(0);
  // const [baseline, setBaseline] = useState("");
  //   const [newDevelopment, setNewDevelopment] = useState("");
  //   const [updateU2charts, setU2charts] = useState(false);
  //   const [totalNewResidents, setTotalNewResidents] = useState(0.0);
  const optionsNew = [];
  for (let i = 2022; i < 2051; i++) optionsNew.push(i);
  const handleStartYear = (e) => {
    setYearStart(Number(e.target.value));
  };
  const handleYearFinish = (e) => {
    e.preventDefault();
    setYearFinish(Number(e.target.value));
  };
  //   const updateU2Planner = () => {
  //     const baselineSettlement = {
  //       country,
  //       year,
  //       population,
  //       settlementDistribution,
  //     };
  //     setBaseline(baselineSettlement);
  //     const newSettlementDistribution = {
  //       metropolitanCenter,
  //       urban,
  //       suburban,
  //       town,
  //       rural,
  //     };
  //   const newDevelopmentU2 = {
  //     newResidents,
  //     yearStart,
  //     yearFinish,
  //     newSettlementDistribution,
  //   };
  //     setNewDevelopment(newDevelopmentU2);
  //     setTotalNewResidents(metropolitanCenter + urban + suburban + town + rural);
  //     setU2charts(true);

  // if (updateU2charts === false && totalNewResidents !== 100) {
  return (
    <article>
      {
        <Header
          user={user}
          onLogin={onLogin}
          onLogout={onLogout}
          onCreateAccount={onCreateAccount}
        />
      }

      <section>
        <div>
          <h2>U3 POLICY QUANTIFICATION</h2>
        </div>
        {/* <form onSubmit={updateU2Planner}> */}
        <form>
          <div>
            <label>
              <b>U3.1 Passenger mobility (resident and non-residential)</b>
            </label>
            <label>expected change %</label>
            <label>% of the area affected</label>
            <div>
              <label>change in mobility %</label>
              <label> expected change value goes here</label>
              <label>% of the area affected goes here</label>
            </div>
            <div>
              <label>Policy period</label>
              <select
                className="start_year"
                id="start_year"
                name="start_year"
                onChange={handleStartYear}
                defaultValue="2022"
                required
              >
                <option value="DefaultOption">Select start year</option>
                {optionsNew.map((option) => (
                  <option key={option} value={option}>
                    {option}{" "}
                  </option>
                ))}
              </select>
              <select
                className="finish_year"
                id="finish_year"
                name="finish_year"
                onChange={handleYearFinish}
                defaultValue="2022"
                required
              >
                <option value="DefaultOption">Select end year</option>
                {optionsNew.map((option) => (
                  <option key={option} value={option}>
                    {option}{" "}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <br />
          <div>
            <label>
              <b>U3.2 Freight transport</b>
            </label>
            <label>expected change %</label>
            <label>% of the area affected</label>
            <div>
              <label>change in freight transport %</label>
              <label> expected change value goes here</label>
              <label>% of the area affected goes here</label>
            </div>
            <div>
              <label>Policy period</label>
              <select
                className="start_year"
                id="start_year"
                name="start_year"
                onChange={handleStartYear}
                defaultValue="2022"
                required
              >
                <option value="DefaultOption">Select start year</option>
                {optionsNew.map((option) => (
                  <option key={option} value={option}>
                    {option}{" "}
                  </option>
                ))}
              </select>
              <select
                className="finish_year"
                id="finish_year"
                name="finish_year"
                onChange={handleYearFinish}
                defaultValue="2022"
                required
              >
                <option value="DefaultOption">Select end year</option>
                {optionsNew.map((option) => (
                  <option key={option} value={option}>
                    {option}{" "}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <br />
          <div>
          <div>
            <label>
              <b>U3.3 Modal split/Passenger transport</b>
            </label>
            <label>withouth policy</label>
            <label>policy target %</label>
            <label>% of the area affeccted</label>
            <div>
              <label>Share for bus</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Share for tram and metro</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Share for train</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Car passenger</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>
                <b>Total</b>
              </label>
              <label></label>
              <label></label>
            </div>
            <label>Policy period</label>
            <select
              className="start_year"
              id="start_year"
              name="start_year"
              onChange={handleStartYear}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select start year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
            <select
              className="finish_year"
              id="finish_year"
              name="finish_year"
              onChange={handleYearFinish}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select end year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
          </div>
          <div className="column">
            <div>
              <RadialChart
                type="piechart"
                data={[
                  {
                    //angle: ,
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
            <div>
              <RadialChart
                type="piechart"
                data={[
                  {
                    //angle: ,
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
          </div>
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
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Share for inland waterways</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Share for road freight</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>
                <b>Total</b>
              </label>
              <label></label>
              <label></label>
            </div>
            <label>Policy period</label>
            <select
              className="start_year"
              id="start_year"
              name="start_year"
              onChange={handleStartYear}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select start year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
            <select
              className="finish_year"
              id="finish_year"
              name="finish_year"
              onChange={handleYearFinish}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select end year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
          </div>
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
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Liquified Petroleum Gas (LPG)</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Natural Gas (CNG)</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Electricty</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Diesel</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>
                <b>Total</b>
              </label>
              <label></label>
              <label></label>
            </div>
            <label>Policy period</label>
            <select
              className="start_year"
              id="start_year"
              name="start_year"
              onChange={handleStartYear}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select start year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
            <select
              className="finish_year"
              id="finish_year"
              name="finish_year"
              onChange={handleYearFinish}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select end year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div>
            <label>
              <b>U3.6 Shares of fuel types/Cars</b>
            </label>
            <label>withouth policy</label>
            <label>policy target %</label>
            <label>% of the area affeccted</label>
            <div>
              <label>Liquified Petroleum Gas (LPG)</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Natural Gas (CNG)</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Alternative Energy/biomethane NGV</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Hybrid electric-petrol</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Plug-in hybrid petrol-electric PHEV</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Hybrid diesel-electric</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Plug-in hybrid diesel-electric PHEV</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Hydrogen and fuel cells</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Bioethanol</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Bio-diesel</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Bi-fuel</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Other (unknown)</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Electricity BEV</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Petrol, according to country selection</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Diesel, according to country selection</label>
              <label></label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>
                <b>Total</b>
              </label>
              <label></label>
              <label></label>
            </div>
            <label>Policy period</label>
            <select
              className="start_year"
              id="start_year"
              name="start_year"
              onChange={handleStartYear}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select start year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
            <select
              className="finish_year"
              id="finish_year"
              name="finish_year"
              onChange={handleYearFinish}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select end year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
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
              <label> gCO2e/kWh without policy goes here</label>
              <label> policy target % goes here</label>
            </div>
            <div>
              <label>Policy period</label>
              <select
                className="start_year"
                id="start_year"
                name="start_year"
                onChange={handleStartYear}
                defaultValue="2022"
                required
              >
                <option value="DefaultOption">Select start year</option>
                {optionsNew.map((option) => (
                  <option key={option} value={option}>
                    {option}{" "}
                  </option>
                ))}
              </select>
              <select
                className="finish_year"
                id="finish_year"
                name="finish_year"
                onChange={handleYearFinish}
                defaultValue="2022"
                required
              >
                <option value="DefaultOption">Select end year</option>
                {optionsNew.map((option) => (
                  <option key={option} value={option}>
                    {option}{" "}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <Button
              size="small"
              type="submit"
              value="Submit"
              label="Next"
              primary
            />
          </div>
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
              <VerticalBarSeries className="StackedBarchart" />
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
          <div>
            <Button
              size="small"
              type="submit"
              value="Submit"
              label="Next"
              primary
            />
          </div>
        </form>
      </section>
    </article>
  );
};

U3policies.propTypes = {
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

U3policies.defaultProps = {
  user: null,
};
