import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { U2legend } from "./U2legend";
import axios from "axios";
import "../css/u2planner.css";
import { Button } from "./Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
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
  const [nextU3planer, setU3planner] = useState(false);
  const [isU2Loading, setIsU2Loading] = useState(true);
  const dataNewPopulation = [];
  const dataProjectionPopulation = [];

  const fetchU2PlannerData = () => {
    const rawData = { baseline, newDevelopment };
    const headers = {
      "Content-type": "application/json",
    };
    axios
      .post(
        urlPrefix + "/api/v1/calculate/transport/new-development",
        rawData,
        headers
      )
      .then((response) => {
        // setU2Response(response.data);
        setNewPopulation(response.data.data.new_development.impact.population);


        setIsU2Loading(false);
      })
      .catch((error) => {
        setIsU2Loading(false);
        setU2Error({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("U2 Response data error---", errorU2);
      });
  };

  useEffect(async () => {
    fetchU2PlannerData();
  }, []);

  
  for (let i = baseline.year; i < 2051; i++) {
    dataProjectionPopulation.push({ x: i, y: projections.population[i] });
    dataNewPopulation.push({ x: i, y: newPopulation[i] });
  }

  const gotoU3planner = () => {
    setU3planner(true);
  };

  useEffect(() => {
    localStorage.setItem("newPopulation", JSON.stringify(newPopulation));
  }, [newPopulation]);

  if (isU2Loading) {
    return <CircularProgress color="success" />;
  }

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
            <Divider textAlign="left" flexItem>
            {" "}
            <b>
              {" "}
              {baseline.country} :  Projections vs New development total yearly emissions 
            </b>
          </Divider>

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
                color="#ef7d00"
                strokeStyle="solid"
                style={{}}
                strokeWidth="2"
                data={dataNewPopulation}
              />
              <LineSeries
                color="#3d58a3"
                curve={null}
                strokeWidth="2"
                strokeStyle="dashed"
                data={dataProjectionPopulation}
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
