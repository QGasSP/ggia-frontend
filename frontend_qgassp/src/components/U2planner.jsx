import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { U2legend } from "./U2legend";
import axios from "axios";
import "../css/u2planner.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from "react-vis";

/**
 * U1 Planner user input form for baseline
 * @return {}
 */

export const U2planner = ({
  baseline,
  newDevelopment,
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  const [errorU2, setU2Error] = useState("");
  const [responseData, setResponseData] = useState("");
  const [baselinePopulation, setBaselinePopulation] = useState("");

  useEffect(async () => {
    const rawData = { baseline, newDevelopment };
    const headers = {
      "Content-type": "application/json",
    };
    axios
      .post(
        "https://ggia-dev.ulno.net//api/v1/calculate/transport",
        rawData,
        headers
      )
      .then((response) => setU2Response(response))
      .catch((error) => {
        setU2Error({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("U2 Response data error---", errorU2);
      });
  }, []);

  const setU2Response = (response) => {
    setResponseData(response.data.data.new_development.impact.population);
    setBaselinePopulation(response.data.data.baseline.projections.population);
  };
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
          <h2>U2 NEW DEVELOPMENT</h2>
        </div>
        <form>
          <label>
            <b>U2.1 New residents</b>
          </label>
          <div>
            <label htmlFor="new_residents">
              Number of new residents moving in
            </label>
            <input
              type="text"
              pattern="[0-9]*"
              id="new_residents"
              value={newDevelopment.newResidents}
              readOnly
            />
            {/*  <label>  0 = no new developments to be quantified</label> */}
          </div>
          <div>
            <label htmlFor="start_year_selection"> Start</label>
            <select
              id="start_year_selection"
              name="start_year_selection"
              defaultValue={newDevelopment.yearStart}
              readOnly
            >
              <optgroup label="Select year"></optgroup>
              <option value="year">2022</option>
              <option value="year">2023</option>
              <option value="year">2024</option>
              <option value="year">2024</option>
              <option value="year">2025</option>
              <option value="year">2026</option>
              <option value="year">2027</option>
              <option value="year">2028</option>
              <option value="year">2029</option>
              <option value="year">2030</option>
              <option value="year">2031</option>
              <option value="year">2032</option>
              <option value="year">2033</option>
              <option value="year">2034</option>
              <option value="year">2035</option>
              <option value="year">2036</option>
              <option value="year">2037</option>
              <option value="year">2038</option>
              <option value="year">2039</option>
              <option value="year">2040</option>
              <option value="year">2041</option>
              <option value="year">2042</option>
              <option value="year">2043</option>
              <option value="year">2044</option>
              <option value="year">2045</option>
              <option value="year">2046</option>
              <option value="year">2047</option>
              <option value="year">2049</option>
              <option value="year">2050</option>
            </select>
          </div>

          <div>
            <label htmlFor="end_year_selection"> End</label>
            <select
              id="end_year_selection"
              name="end_year_selection"
              defaultValue={newDevelopment.yearFinish}
              readOnly
            >
              <optgroup label="Select year"></optgroup>
              <option value="year">2022</option>
              <option value="year">2023</option>
              <option value="year">2024</option>
              <option value="year">2024</option>
              <option value="year">2025</option>
              <option value="year">2026</option>
              <option value="year">2027</option>
              <option value="year">2028</option>
              <option value="year">2029</option>
              <option value="year">2030</option>
              <option value="year">2031</option>
              <option value="year">2032</option>
              <option value="year">2033</option>
              <option value="year">2034</option>
              <option value="year">2035</option>
              <option value="year">2036</option>
              <option value="year">2037</option>
              <option value="year">2038</option>
              <option value="year">2039</option>
              <option value="year">2040</option>
              <option value="year">2041</option>
              <option value="year">2042</option>
              <option value="year">2043</option>
              <option value="year">2044</option>
              <option value="year">2045</option>
              <option value="year">2046</option>
              <option value="year">2047</option>
              <option value="year">2049</option>
              <option value="year">2050</option>
            </select>
          </div>
          <br />
          <label>
            <b>U2.2 Settlement type</b>
          </label>
          <label>
            <b>Existing environment</b>
          </label>
          <label>
            <b>New development</b>
          </label>
          <div>
            <label htmlFor="city">Metropolitan Area</label>
            <input
              type="number"
              id="metropolitan"
              min="0"
              max="100"
              value={baseline.metropolitanCenter}
              readOnly
            />
            <input
              type="number"
              step="0.1"
              id="nsMetropolitan"
              min="0"
              max="100"
              value={
                newDevelopment.newSettlementDistribution.metropolitanCenter
              }
              readOnly
            />
          </div>
          <div>
            <label htmlFor="city">Urban</label>
            <input
              type="number"
              step="0.1"
              id="urban"
              min="0"
              max="100"
              value={baseline.urban}
              readOnly
            />
            <input
              type="number"
              step="0.1"
              id="nsUrban"
              min="0"
              max="100"
              value={newDevelopment.newSettlementDistribution.urban}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="suburban"> Suburban</label>
            <input
              type="number"
              step="0.1"
              id="suburban"
              min="0"
              max="100"
              value={baseline.suburban}
              readOnly
            />
            <input
              type="number"
              id="nsSuburban"
              step="any"
              min="0.0"
              max="100.0"
              value={newDevelopment.newSettlementDistribution.suburban}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="town">Town</label>
            <input
              type="number"
              step="0.1"
              id="town"
              min="0"
              max="100"
              value={baseline.town}
              readOnly
            />
            <input
              type="number"
              id="nsTown"
              step="0.1"
              min="0.0"
              max="100.0"
              value={newDevelopment.newSettlementDistribution.town}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="rural">Rural</label>
            <input
              type="number"
              step="0.1"
              id="ruran"
              min="0"
              max="100"
              value={baseline.rural}
              readOnly
            />
            <input
              type="number"
              id="nsRural"
              step="0.1"
              min="0"
              max="100"
              value={newDevelopment.newSettlementDistribution.rural}
              readOnly
            />
          </div>
          <br />
          <XYPlot
            width={900}
            height={500}
            xType="ordinal"
            yDomain={[0, 100000]}
            //yType="linear"
          >
            <HorizontalGridLines style={{ stroke: "#B7E9ED" }} />
            <VerticalGridLines style={{ stroke: "#B7E9ED" }} />
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
                { x: 2022, y: responseData[2022] },
                { x: 2023, y: responseData[2023] },
                { x: 2024, y: responseData[2024] },
                { x: 2025, y: responseData[2025] },
                { x: 2026, y: responseData[2026] },
                { x: 2027, y: responseData[2027] },
                { x: 2028, y: responseData[2028] },
                { x: 2029, y: responseData[2029] },
                { x: 2030, y: responseData[2030] },
                { x: 2031, y: responseData[2031] },
                { x: 2032, y: responseData[2032] },
                { x: 2033, y: responseData[2033] },
                { x: 2034, y: responseData[2034] },
                { x: 2035, y: responseData[2035] },
                { x: 2036, y: responseData[2036] },
                { x: 2037, y: responseData[2037] },
                { x: 2038, y: responseData[2038] },
                { x: 2039, y: responseData[2039] },
                { x: 2040, y: responseData[2040] },
                { x: 2041, y: responseData[2041] },
                { x: 2042, y: responseData[2042] },
                { x: 2043, y: responseData[2043] },
                { x: 2044, y: responseData[2044] },
                { x: 2045, y: responseData[2045] },
                { x: 2046, y: responseData[2046] },
                { x: 2047, y: responseData[2047] },
                { x: 2048, y: responseData[2048] },
                { x: 2049, y: responseData[2049] },
                { x: 2050, y: responseData[2050] },
              ]}
              opacity={1}
              stroke="rgba(21,75,230,1)"
              strokeDasharray=""
              strokeStyle="solid"
              strokeWidth="1.5"
              style={{}}
            />
            <LineSeries
              curve={null}
              data={[
                { x: 2022, y: baselinePopulation[2022] },
                { x: 2023, y: baselinePopulation[2023] },
                { x: 2024, y: baselinePopulation[2024] },
                { x: 2025, y: baselinePopulation[2025] },
                { x: 2026, y: baselinePopulation[2026] },
                { x: 2027, y: baselinePopulation[2027] },
                { x: 2028, y: baselinePopulation[2028] },
                { x: 2029, y: baselinePopulation[2029] },
                { x: 2030, y: baselinePopulation[2030] },
                { x: 2031, y: baselinePopulation[2031] },
                { x: 2032, y: baselinePopulation[2032] },
                { x: 2033, y: baselinePopulation[2033] },
                { x: 2034, y: baselinePopulation[2034] },
                { x: 2035, y: baselinePopulation[2035] },
                { x: 2036, y: baselinePopulation[2036] },
                { x: 2037, y: baselinePopulation[2037] },
                { x: 2038, y: baselinePopulation[2038] },
                { x: 2039, y: baselinePopulation[2039] },
                { x: 2040, y: baselinePopulation[2040] },
                { x: 2041, y: baselinePopulation[2041] },
                { x: 2042, y: baselinePopulation[2042] },
                { x: 2043, y: baselinePopulation[2043] },
                { x: 2044, y: baselinePopulation[2044] },
                { x: 2045, y: baselinePopulation[2045] },
                { x: 2046, y: baselinePopulation[2046] },
                { x: 2047, y: baselinePopulation[2047] },
                { x: 2048, y: baselinePopulation[2048] },
                { x: 2049, y: baselinePopulation[2049] },
                { x: 2050, y: baselinePopulation[2050] },
              ]}
              opacity={1}
              stroke="rgba(102,116,155,1)"
              strokeDasharray=""
              strokeStyle="dashed"
              strokeWidth="1.5"
              style={{}}
            />
          </XYPlot>
          <U2legend />
        </form>
      </section>
    </article>
  );
};

U2planner.propTypes = {
  baseline: PropTypes.array.isRequired,
  newDevelopment: PropTypes.array.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

U2planner.defaultProps = {
  user: null,
};
