import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { U2legend } from "./U2legend";
import axios from "axios";
import "../css/u2planner.css";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
            <label htmlFor="start_year_selection">
              {newDevelopment.newResidents}
            </label>
          </div>
          <div>
            <label> Year start</label>
            <label> {newDevelopment.yearStart}</label>
          </div>

          <div>
            <label> Year end</label>
            <label> {newDevelopment.yearFinish}</label>
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
            <label>Metropolitan Area</label>
            <label>{baseline.settlementDistribution.metropolitanCenter}</label>
            <label>
              {newDevelopment.newSettlementDistribution.metropolitanCenter}
            </label>
          </div>
          <div>
            <label>Urban</label>
            <label>{baseline.settlementDistribution.urban}</label>
            <label>{newDevelopment.newSettlementDistribution.urban}</label>
          </div>
          <div>
            <label> Suburban</label>
            <label>{baseline.settlementDistribution.suburban}</label>
            <label>{newDevelopment.newSettlementDistribution.suburban}</label>
          </div>
          <div>
            <label htmlFor="town">Town</label>
            <label>{baseline.settlementDistribution.town}</label>
            <label>{newDevelopment.newSettlementDistribution.town}</label>
          </div>
          <div>
            <label htmlFor="rural">Rural</label>
            <label>{baseline.settlementDistribution.rural}</label>
            <label>{newDevelopment.newSettlementDistribution.rural}</label>
          </div>
          <br />
          <XYPlot
            width={900}
            height={500}
            xType="ordinal"
            yDomain={[0, 100000]}
            // yType="linear"
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

          <div className="backButtonNew">
              <Button
                size="small"
                value="backProjections"
                onClick={() => navigate(-1, { replace: true })}
                label="&laquo; Previous"
                secondary
              />
            </div>
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
