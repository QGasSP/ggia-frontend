import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import { LineLegend } from "./LineLegend";
import "../css/u1planner.css";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  RadialChart,
} from "react-vis";

import { NewResidents } from "./NewResidents";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { Legend } from "./Legend";
import urlPrefix from "../Config";

/**
 * U1 Planner baseline user input form
 * @return {}
 */
const BarSeries = VerticalBarSeries;
export const U1planner = ({
  country,
  year,
  population,
  settlementDistribution,
}) => {
  const [errorU1planner, setU1PlannerError] = useState("");
  const [emission, setEmissionData] = useState("");
  const [projections, setProjections] = useState("");
  const [baseline, setBaseline] = useState({});
  const [nextNewResidentview, setNewResidentView] = useState(false);
  const [isLoadingTransport, setIsLoadingTransport] = useState(true);
  const [isErrorTransport, setIsErrorTransport] = useState(false);

  const dataProjectionsBus = [];
  const dataProjectionsCar = [];
  const dataProjectionsMetro = [];
  const dataProjectionsTram = [];
  const dataProjectionsTrain = [];
  const dataProjectionsRailTransport = [];
  const dataProjectionsRoadTransport = [];
  const dataProjectionsWaterwaysTransport = [];

  useEffect(() => {
    localStorage.setItem("projections", JSON.stringify(projections));
  }, [projections]);

  useEffect(() => {
    localStorage.setItem("emission", JSON.stringify(emission));
  }, [emission]);

  useEffect(async () => {
    const baseline = {
      country,
      year,
      population,
      settlementDistribution,
    };
    setBaseline({ baseline });
    const raw = { baseline };

    const headers = {
      "Content-type": "application/json",
    };
    axios
      .post(urlPrefix + "/api/v1/calculate/transport/baseline", raw, headers)
      .then((response) => {
        // setResponse(response.data.data.baseline);
        setEmissionData(response.data.data.baseline.emissions);
        setProjections(response.data.data.baseline.projections);
        setIsLoadingTransport(false);
      })
      .catch((error) => {
        setIsLoadingTransport(false);
        setIsErrorTransport(true);
        setU1PlannerError({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("There was an error!", errorU1planner);
      });
  }, []);

  if (isLoadingTransport) {
    return <CircularProgress color="success" />;
  }

  for (let i = year; i < 2051; i++) {
    dataProjectionsBus.push({ x: i, y: projections.bus[i] });
    dataProjectionsCar.push({ x: i, y: projections.car[i] });
    dataProjectionsMetro.push({ x: i, y: projections.metro[i] });
    dataProjectionsTram.push({ x: i, y: projections.tram[i] });
    dataProjectionsTrain.push({ x: i, y: projections.train[i] });
    dataProjectionsRailTransport.push({
      x: i,
      y: projections.rail_transport[i],
    });
    dataProjectionsRoadTransport.push({
      x: i,
      y: projections.road_transport[i],
    });
    dataProjectionsWaterwaysTransport.push({
      x: i,
      y: projections.waterways_transport[i],
    });
  }

  if (nextNewResidentview === false && Object.keys(projections).length !== 0) {
    return (
      <article>
        <br />
        <Divider textAlign="left" flexItem>
          {" "}
          <b>{country}: Baseline - Transport CO2e emission</b>
        </Divider>

        <div className="piechart_container">
          <div className="piechart_diagram">
            <div>
              <RadialChart
                data={[
                  {
                    angle:
                      Math.round(
                        (emission.bus / emission.total + Number.EPSILON) * 36000
                      ) / 100,
                    label: "Bus",
                    color: "#8C0303",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.metro / emission.total + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Metro",
                    color: "#400D01",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.train / emission.total + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Train",
                    color: "#D90404",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.road_transport / emission.total +
                          Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Road transport",
                    color: "#595959",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.car / emission.total + Number.EPSILON) * 36000
                      ) / 100,
                    label: "Car",
                    color: "#A6036D",
                    rotation: 90,
                  },
                  {
                    angle:
                      Math.round(
                        (emission.tram / emission.total + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Tram",
                    color: " #C4D4F2",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.rail_transport / emission.total +
                          Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Rail transport",
                    color: "#80D941",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.waterways_transport / emission.total +
                          Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Waterways transport",
                    color: "#F2CE1B",
                  },
                ]}
                colorType="literal"
                innerRadius={100}
                radius={140}
                getAngle={(d) => d.angle}
                width={350}
                height={350}
              />
            </div>
          </div>
          <div className="piechart_legend">
            <Legend />
          </div>
          <div></div>
        </div>
        <Divider textAlign="left" flexItem>
          <b>{country}: Baseline - Transport CO2e emission/resident</b>
        </Divider>

        <div className="barchart_container">
          <XYPlot xType="ordinal" width={1000} height={300} xDistance={200}>
            <HorizontalGridLines />
            <VerticalGridLines />
            <VerticalBarSeries
              className="BaselineBarchart"
              data={[
                {
                  y: Math.round((emission.bus + Number.EPSILON) * 100) / 100,
                  x: "Bus",
                },
                {
                  y: Math.round((emission.metro + Number.EPSILON) * 100) / 100,
                  x: "Metro",
                },
                {
                  y: Math.round((emission.train + Number.EPSILON) * 100) / 100,
                  x: "Train",
                },
                {
                  y:
                    Math.round(
                      (emission.road_transport + Number.EPSILON) * 100
                    ) / 100,
                  x: "Road transport",
                },
                {
                  y: Math.round((emission.car + Number.EPSILON) * 100) / 100,
                  x: "Car",
                },
                {
                  y: Math.round((emission.tram + Number.EPSILON) * 100) / 100,
                  x: "Tram",
                },
                {
                  y:
                    Math.round(
                      (emission.rail_transport + Number.EPSILON) * 100
                    ) / 100,
                  x: "Rail transport",
                },
                {
                  y:
                    Math.round(
                      (emission.waterways_transport + Number.EPSILON) * 100
                    ) / 100,
                  x: "Waterway transport",
                },
                {
                  y: Math.round((emission.total + Number.EPSILON) * 100) / 100,
                  x: "total emissions",
                },
              ]}
            />
            <XAxis />
            <YAxis />
          </XYPlot>
        </div>

        <div className="headerSettlement">
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="Projections" />
          </Divider>
        </div>
        <br />

        <Divider textAlign="left" flexItem>
          {" "}
          <b>
            {country}: CO2e emissions per capita {year}-2050
          </b>
        </Divider>
        {/*  
        [{
       Object.keys(projections.bus).map((key, i) => (
        <p key={i}>
          &#123;x: {key},y: {projections.bus[key]}&#125;,
        </p>
      ))
       }] */}

        <div>
          <XYPlot
            width={1000}
            height={500}
            stackBy="y"
            xType="ordinal"
            margin={{ left: 80 }}
          >
            <HorizontalGridLines />
            <VerticalGridLines />
            <VerticalBarSeries className="StackedBarchart" />
            <XAxis title="Year" />
            <YAxis title="Emissions/ kG C02 eq" />
            <BarSeries
              color="#8C0303"
              data={dataProjectionsBus}
              opacity={0.5}
            />
            <BarSeries
              color="#A6036D"
              data={dataProjectionsCar}
              opacity={0.5}
            />
            <BarSeries
              color="#400D01"
              data={dataProjectionsMetro}
              opacity={0.5}
            />
            <BarSeries
              color=" #C4D4F2"
              data={dataProjectionsTram}
              opacity={0.5}
            />
            <BarSeries
              color="#D90404"
              data={dataProjectionsTrain}
              opacity={0.5}
            />
            <BarSeries
              color="#80D941"
              data={dataProjectionsRailTransport}
              opacity={0.5}
            />
            <BarSeries
              color="#595959"
              data={dataProjectionsRoadTransport}
              opacity={0.5}
            />
            <BarSeries
              color="#F2CE1B"
              data={dataProjectionsWaterwaysTransport}
            />
          </XYPlot>
          <div>
            <LineLegend />
          </div>
        </div>

        <div className="nextU2Button">
          <Button
            size="small"
            value="u2next_inputs"
            onClick={() => setNewResidentView(true)}
            label="Next &raquo;"
            primary
          />
        </div>
      </article>
    );
  } else if (nextNewResidentview === true) {
    return (
      <NewResidents
        baseline={baseline}
        settlementDistribution={settlementDistribution}
        emission={emission}
        projections={projections}
        year={year}
      />
    );
  } else {
    return <></>;
  }
};

U1planner.propTypes = {
  settlementDistribution: PropTypes.object.isRequired,
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
};
