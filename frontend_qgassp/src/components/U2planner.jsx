import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { U2legend } from "./U2legend";
import axios from "axios";
import "../css/u2planner.css";
import { Button } from "./Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from "react-vis";
import { U3planner } from "./U3planner";
import urlPrefix from "../Config";

/**
 * U2 Planner component for visualization of  baseline vs new-resident population
 * @return {}
 */

export const U2planner = ({
  baseline,
  newDevelopment,
  settlementDistribution,
  emission,
  projections,
}) => {
  const [errorU2, setU2Error] = useState("");
  const [newPopulation, setNewPopulation] = useState("");
  // const [baselinePopulation, setBaselinePopulation] = useState("");
  const [nextU3planer, setU3planner] = useState(false);

  useEffect(() => {
    localStorage.setItem("projections", JSON.stringify(projections));
  }, [projections]);

  useEffect(async () => {
    const rawData = { baseline, newDevelopment, projections };
    const headers = {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    await axios
      .post(
        urlPrefix + "/api/v1/calculate/transport/new-development",
        rawData,
        headers
      )
      .then((response) => setU2Response(response.data))
      .catch((error) => {
        setU2Error({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("U2 Response data error---", errorU2);
      });
  }, []);

  const setU2Response = (response) => {
    setNewPopulation(response.data.new_development.impact.population);
    // setBaselinePopulation(response.data.baseline.projections.population);
  };

  const gotoU3planner = () => {
    setU3planner(true);
  };

  if (nextU3planer === false) {
    return (
      <article>
        <div className="headerSettlement">
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="U2 NEW DEVELOPMENT" />
          </Divider>
        </div>

        <section>
          <form>
            <label>
              <b>New residents</b>
            </label>
            <div>
              <label htmlFor="new_residents">
                Number of new residents moving in
              </label>
              <label htmlFor="start_year_selection">
                {" "}
                {newDevelopment.newResidents}
              </label>
            </div>
            <div>
              <label> Start</label>
              <label> {newDevelopment.yearStart}</label>
            </div>

            <div>
              <label> End</label>
              <label> {newDevelopment.yearFinish}</label>
            </div>
            <br />
            <label>
              <b>Settlement type</b>
            </label>
            <label>
              <b>Existing environment</b>
            </label>
            <label>
              <b>New development</b>
            </label>
            <div>
              <label>Metropolitan Area</label>
              <label>{settlementDistribution.metropolitanCenter}</label>
              <label>
                {newDevelopment.newSettlementDistribution.metropolitanCenter}
              </label>
            </div>
            <div>
              <label>Urban</label>
              <label>{settlementDistribution.urban}</label>
              <label>{newDevelopment.newSettlementDistribution.urban}</label>
            </div>
            <div>
              <label> Suburban</label>
              <label>{settlementDistribution.suburban}</label>
              <label>{newDevelopment.newSettlementDistribution.suburban}</label>
            </div>
            <div>
              <label htmlFor="town">Town</label>
              <label>{settlementDistribution.town}</label>
              <label>{newDevelopment.newSettlementDistribution.town}</label>
            </div>
            <div>
              <label htmlFor="rural">Rural</label>
              <label>{settlementDistribution.rural}</label>
              <label>{newDevelopment.newSettlementDistribution.rural}</label>
            </div>

            <XYPlot
              width={900}
              height={500}
              xType="ordinal"
              yDomain={[100000, 250000]}
              // yType="linear"
              // yDomain={[0, 1000]}
              // yType="log"
            >
              <HorizontalGridLines style={{ stroke: "#B7E9ED" }} />
              <VerticalGridLines style={{ stroke: "#B7E9ED" }} />
              <XAxis title="Year" />
              {/* <XAxis
                position="start"
                style={{
                  line: { stroke: "#ADDDE1" },
                  ticks: { stroke: "#ADDDE1" },
                  text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
                }}
              /> */}
              <YAxis />

              <LineSeries
                curve={null}
                data={[
                  { x: 2022, y: newPopulation[2022] },
                  { x: 2023, y: newPopulation[2023] },
                  { x: 2024, y: newPopulation[2024] },
                  { x: 2025, y: newPopulation[2025] },
                  { x: 2026, y: newPopulation[2026] },
                  { x: 2027, y: newPopulation[2027] },
                  { x: 2028, y: newPopulation[2028] },
                  { x: 2029, y: newPopulation[2029] },
                  { x: 2030, y: newPopulation[2030] },
                  { x: 2031, y: newPopulation[2031] },
                  { x: 2032, y: newPopulation[2032] },
                  { x: 2033, y: newPopulation[2033] },
                  { x: 2034, y: newPopulation[2034] },
                  { x: 2035, y: newPopulation[2035] },
                  { x: 2036, y: newPopulation[2036] },
                  { x: 2037, y: newPopulation[2037] },
                  { x: 2038, y: newPopulation[2038] },
                  { x: 2039, y: newPopulation[2039] },
                  { x: 2040, y: newPopulation[2040] },
                  { x: 2041, y: newPopulation[2041] },
                  { x: 2042, y: newPopulation[2042] },
                  { x: 2043, y: newPopulation[2043] },
                  { x: 2044, y: newPopulation[2044] },
                  { x: 2045, y: newPopulation[2045] },
                  { x: 2046, y: newPopulation[2046] },
                  { x: 2047, y: newPopulation[2047] },
                  { x: 2048, y: newPopulation[2048] },
                  { x: 2049, y: newPopulation[2049] },
                  { x: 2050, y: newPopulation[2050] },
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
                  { x: 2022, y: projections.population[2022] },
                  { x: 2023, y: projections.population[2023] },
                  { x: 2024, y: projections.population[2024] },
                  { x: 2025, y: projections.population[2025] },
                  { x: 2026, y: projections.population[2026] },
                  { x: 2027, y: projections.population[2027] },
                  { x: 2028, y: projections.population[2028] },
                  { x: 2029, y: projections.population[2029] },
                  { x: 2030, y: projections.population[2030] },
                  { x: 2031, y: projections.population[2031] },
                  { x: 2032, y: projections.population[2032] },
                  { x: 2033, y: projections.population[2033] },
                  { x: 2034, y: projections.population[2034] },
                  { x: 2035, y: projections.population[2035] },
                  { x: 2036, y: projections.population[2036] },
                  { x: 2037, y: projections.population[2037] },
                  { x: 2038, y: projections.population[2038] },
                  { x: 2039, y: projections.population[2039] },
                  { x: 2040, y: projections.population[2040] },
                  { x: 2041, y: projections.population[2041] },
                  { x: 2042, y: projections.population[2042] },
                  { x: 2043, y: projections.population[2043] },
                  { x: 2044, y: projections.population[2044] },
                  { x: 2045, y: projections.population[2045] },
                  { x: 2046, y: projections.population[2046] },
                  { x: 2047, y: projections.population[2047] },
                  { x: 2048, y: projections.population[2048] },
                  { x: 2049, y: projections.population[2049] },
                  { x: 2050, y: projections.population[2050] },
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

            <div className="nextU2Button">
              <Button
                size="small"
                value="nextU3"
                onClick={gotoU3planner}
                label="Next &raquo;"
                primary
              />
            </div>
          </form>
        </section>
      </article>
    );
  } else {
    return (
      <U3planner
        baseline={baseline}
        newDevelopment={newDevelopment}
        emission={emission}
        projections={projections}
      />
    );
  }
};

U2planner.propTypes = {
  emission: PropTypes.object.isRequired,
  projections: PropTypes.object.isRequired,
  baseline: PropTypes.object.isRequired,
  settlementDistribution: PropTypes.object.isRequired,
  newDevelopment: PropTypes.object.isRequired,
};

U2planner.defaultProps = {
  user: null,
};
