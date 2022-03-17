import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import { LineLegend } from "./LineLegend";
import "../css/u1planner.css";
import axios from "axios";
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
      // "Access-Control-Allow-Origin": "*",
    };
    axios
      .post(
        "https://ggia-dev.ulno.net/api/v1/calculate/transport/baseline",
        raw,
        headers
      )
      .then((response) => {
        // setResponse(response.data.data.baseline);
        setEmissionData(response.data.data.baseline.emissions);
        setProjections(response.data.data.baseline.projections);
      })
      .catch((error) => {
        setU1PlannerError({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("There was an error!", errorU1planner);
      });
  }, []);

  if (nextNewResidentview === false && Object.keys(projections).length !== 0) {
    return (
      <article>
        <br />
        <Divider textAlign="left" flexItem>
          {" "}
          <b>Baseline - Transport CO2e emission</b>
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
          <b>Baseline - Transport CO2e emission/resident</b>
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
        <br/>

        <Divider textAlign="left" flexItem>
          {" "}
          <b>CO2e emissions per capita 2023-2050</b>
        </Divider>

        <div>
          <XYPlot width={1000} height={500} stackBy="y" xType="ordinal">
            <HorizontalGridLines />
            <VerticalGridLines />
            <VerticalBarSeries className="StackedBarchart" />
            <XAxis />
            <YAxis />
            <BarSeries
              color="#8C0303"
              data={[
                { x: 2022, y: projections.bus[2022] },
                { x: 2023, y: projections.bus[2023] },
                { x: 2024, y: projections.bus[2024] },
                { x: 2025, y: projections.bus[2025] },
                { x: 2026, y: projections.bus[2026] },
                { x: 2027, y: projections.bus[2027] },
                { x: 2028, y: projections.bus[2028] },
                { x: 2029, y: projections.bus[2029] },
                { x: 2030, y: projections.bus[2030] },
                { x: 2031, y: projections.bus[2031] },
                { x: 2032, y: projections.bus[2032] },
                { x: 2033, y: projections.bus[2033] },
                { x: 2034, y: projections.bus[2034] },
                { x: 2035, y: projections.bus[2035] },
                { x: 2036, y: projections.bus[2036] },
                { x: 2037, y: projections.bus[2037] },
                { x: 2038, y: projections.bus[2038] },
                { x: 2039, y: projections.bus[2039] },
                { x: 2040, y: projections.bus[2040] },
                { x: 2041, y: projections.bus[2041] },
                { x: 2042, y: projections.bus[2042] },
                { x: 2043, y: projections.bus[2043] },
                { x: 2044, y: projections.bus[2044] },
                { x: 2045, y: projections.bus[2045] },
                { x: 2046, y: projections.bus[2046] },
                { x: 2047, y: projections.bus[2047] },
                { x: 2048, y: projections.bus[2048] },
                { x: 2049, y: projections.bus[2049] },
                { x: 2050, y: projections.bus[2050] },
              ]}
            />
            <BarSeries
              color="#A6036D"
              data={[
                { x: 2022, y: projections.car[2022] },
                { x: 2023, y: projections.car[2023] },
                { x: 2024, y: projections.car[2024] },
                { x: 2025, y: projections.car[2025] },
                { x: 2026, y: projections.car[2026] },
                { x: 2027, y: projections.car[2027] },
                { x: 2028, y: projections.car[2028] },
                { x: 2029, y: projections.car[2029] },
                { x: 2030, y: projections.car[2030] },
                { x: 2031, y: projections.car[2031] },
                { x: 2032, y: projections.car[2032] },
                { x: 2033, y: projections.car[2033] },
                { x: 2034, y: projections.car[2034] },
                { x: 2035, y: projections.car[2035] },
                { x: 2036, y: projections.car[2036] },
                { x: 2037, y: projections.car[2037] },
                { x: 2038, y: projections.car[2038] },
                { x: 2039, y: projections.car[2039] },
                { x: 2040, y: projections.car[2040] },
                { x: 2041, y: projections.car[2041] },
                { x: 2042, y: projections.car[2042] },
                { x: 2043, y: projections.car[2043] },
                { x: 2044, y: projections.car[2044] },
                { x: 2045, y: projections.car[2045] },
                { x: 2046, y: projections.car[2046] },
                { x: 2047, y: projections.car[2047] },
                { x: 2048, y: projections.car[2048] },
                { x: 2049, y: projections.car[2049] },
                { x: 2050, y: projections.car[2050] },
              ]}
            />
            <BarSeries
              color="#400D01"
              data={[
                { x: 2022, y: projections.metro[2022] },
                { x: 2023, y: projections.metro[2023] },
                { x: 2024, y: projections.metro[2024] },
                { x: 2025, y: projections.metro[2025] },
                { x: 2026, y: projections.metro[2026] },
                { x: 2027, y: projections.metro[2027] },
                { x: 2028, y: projections.metro[2028] },
                { x: 2029, y: projections.metro[2029] },
                { x: 2030, y: projections.metro[2030] },
                { x: 2031, y: projections.metro[2031] },
                { x: 2032, y: projections.metro[2032] },
                { x: 2033, y: projections.metro[2033] },
                { x: 2034, y: projections.metro[2034] },
                { x: 2035, y: projections.metro[2035] },
                { x: 2036, y: projections.metro[2036] },
                { x: 2037, y: projections.metro[2037] },
                { x: 2038, y: projections.metro[2038] },
                { x: 2039, y: projections.metro[2039] },
                { x: 2040, y: projections.metro[2040] },
                { x: 2041, y: projections.metro[2041] },
                { x: 2042, y: projections.metro[2042] },
                { x: 2043, y: projections.metro[2043] },
                { x: 2044, y: projections.metro[2044] },
                { x: 2045, y: projections.metro[2045] },
                { x: 2046, y: projections.metro[2046] },
                { x: 2047, y: projections.metro[2047] },
                { x: 2048, y: projections.metro[2048] },
                { x: 2049, y: projections.metro[2049] },
                { x: 2050, y: projections.metro[2050] },
              ]}
            />
            <BarSeries
              color=" #C4D4F2"
              data={[
                { x: 2022, y: projections.tram[2022] },
                { x: 2023, y: projections.tram[2023] },
                { x: 2024, y: projections.tram[2024] },
                { x: 2025, y: projections.tram[2025] },
                { x: 2026, y: projections.tram[2026] },
                { x: 2027, y: projections.tram[2027] },
                { x: 2028, y: projections.tram[2028] },
                { x: 2029, y: projections.tram[2029] },
                { x: 2030, y: projections.tram[2030] },
                { x: 2031, y: projections.tram[2031] },
                { x: 2032, y: projections.tram[2032] },
                { x: 2033, y: projections.tram[2033] },
                { x: 2034, y: projections.tram[2034] },
                { x: 2035, y: projections.tram[2035] },
                { x: 2036, y: projections.tram[2036] },
                { x: 2037, y: projections.tram[2037] },
                { x: 2038, y: projections.tram[2038] },
                { x: 2039, y: projections.tram[2039] },
                { x: 2040, y: projections.tram[2040] },
                { x: 2041, y: projections.tram[2041] },
                { x: 2042, y: projections.tram[2042] },
                { x: 2043, y: projections.tram[2043] },
                { x: 2044, y: projections.tram[2044] },
                { x: 2045, y: projections.tram[2045] },
                { x: 2046, y: projections.tram[2046] },
                { x: 2047, y: projections.tram[2047] },
                { x: 2048, y: projections.tram[2048] },
                { x: 2049, y: projections.tram[2049] },
                { x: 2050, y: projections.tram[2050] },
              ]}
            />
            <BarSeries
              color="#D90404"
              data={[
                { x: 2022, y: projections.train[2022] },
                { x: 2023, y: projections.train[2023] },
                { x: 2024, y: projections.train[2024] },
                { x: 2025, y: projections.train[2025] },
                { x: 2026, y: projections.train[2026] },
                { x: 2027, y: projections.train[2027] },
                { x: 2028, y: projections.train[2028] },
                { x: 2029, y: projections.train[2029] },
                { x: 2030, y: projections.train[2030] },
                { x: 2031, y: projections.train[2031] },
                { x: 2032, y: projections.train[2032] },
                { x: 2033, y: projections.train[2033] },
                { x: 2034, y: projections.train[2034] },
                { x: 2035, y: projections.train[2035] },
                { x: 2036, y: projections.train[2036] },
                { x: 2037, y: projections.train[2037] },
                { x: 2038, y: projections.train[2038] },
                { x: 2039, y: projections.train[2039] },
                { x: 2040, y: projections.train[2040] },
                { x: 2041, y: projections.train[2041] },
                { x: 2042, y: projections.train[2042] },
                { x: 2043, y: projections.train[2043] },
                { x: 2044, y: projections.train[2044] },
                { x: 2045, y: projections.train[2045] },
                { x: 2046, y: projections.train[2046] },
                { x: 2047, y: projections.train[2047] },
                { x: 2048, y: projections.train[2048] },
                { x: 2049, y: projections.train[2049] },
                { x: 2050, y: projections.train[2050] },
              ]}
            />
            <BarSeries
              color="#80D941"
              data={[
                { x: 2022, y: projections.rail_transport[2022] },
                { x: 2023, y: projections.rail_transport[2023] },
                { x: 2024, y: projections.rail_transport[2024] },
                { x: 2025, y: projections.rail_transport[2025] },
                { x: 2026, y: projections.rail_transport[2026] },
                { x: 2027, y: projections.rail_transport[2027] },
                { x: 2028, y: projections.rail_transport[2028] },
                { x: 2029, y: projections.rail_transport[2029] },
                { x: 2030, y: projections.rail_transport[2030] },
                { x: 2031, y: projections.rail_transport[2031] },
                { x: 2032, y: projections.rail_transport[2032] },
                { x: 2033, y: projections.rail_transport[2033] },
                { x: 2034, y: projections.rail_transport[2034] },
                { x: 2035, y: projections.rail_transport[2035] },
                { x: 2036, y: projections.rail_transport[2036] },
                { x: 2037, y: projections.rail_transport[2037] },
                { x: 2038, y: projections.rail_transport[2038] },
                { x: 2039, y: projections.rail_transport[2039] },
                { x: 2040, y: projections.rail_transport[2040] },
                { x: 2041, y: projections.rail_transport[2041] },
                { x: 2042, y: projections.rail_transport[2042] },
                { x: 2043, y: projections.rail_transport[2043] },
                { x: 2044, y: projections.rail_transport[2044] },
                { x: 2045, y: projections.rail_transport[2045] },
                { x: 2046, y: projections.rail_transport[2046] },
                { x: 2047, y: projections.rail_transport[2047] },
                { x: 2048, y: projections.rail_transport[2048] },
                { x: 2049, y: projections.rail_transport[2049] },
                { x: 2050, y: projections.rail_transport[2050] },
              ]}
            />
            <BarSeries
              color="#595959"
              data={[
                { x: 2022, y: projections.road_transport[2022] },
                { x: 2023, y: projections.road_transport[2023] },
                { x: 2024, y: projections.road_transport[2024] },
                { x: 2025, y: projections.road_transport[2025] },
                { x: 2026, y: projections.road_transport[2026] },
                { x: 2027, y: projections.road_transport[2027] },
                { x: 2028, y: projections.road_transport[2028] },
                { x: 2029, y: projections.road_transport[2029] },
                { x: 2030, y: projections.road_transport[2030] },
                { x: 2031, y: projections.road_transport[2031] },
                { x: 2032, y: projections.road_transport[2032] },
                { x: 2033, y: projections.road_transport[2033] },
                { x: 2034, y: projections.road_transport[2034] },
                { x: 2035, y: projections.road_transport[2035] },
                { x: 2036, y: projections.road_transport[2036] },
                { x: 2037, y: projections.road_transport[2037] },
                { x: 2038, y: projections.road_transport[2038] },
                { x: 2039, y: projections.road_transport[2039] },
                { x: 2040, y: projections.road_transport[2040] },
                { x: 2041, y: projections.road_transport[2041] },
                { x: 2042, y: projections.road_transport[2042] },
                { x: 2043, y: projections.road_transport[2043] },
                { x: 2044, y: projections.road_transport[2044] },
                { x: 2045, y: projections.road_transport[2045] },
                { x: 2046, y: projections.road_transport[2046] },
                { x: 2047, y: projections.road_transport[2047] },
                { x: 2048, y: projections.road_transport[2048] },
                { x: 2049, y: projections.road_transport[2049] },
                { x: 2050, y: projections.road_transport[2050] },
              ]}
            />
            <BarSeries
              color="#F2CE1B"
              data={[
                { x: 2022, y: projections.waterways_transport[2022] },
                { x: 2023, y: projections.waterways_transport[2023] },
                { x: 2024, y: projections.waterways_transport[2024] },
                { x: 2025, y: projections.waterways_transport[2025] },
                { x: 2026, y: projections.waterways_transport[2026] },
                { x: 2027, y: projections.waterways_transport[2027] },
                { x: 2028, y: projections.waterways_transport[2028] },
                { x: 2029, y: projections.waterways_transport[2029] },
                { x: 2030, y: projections.waterways_transport[2030] },
                { x: 2031, y: projections.waterways_transport[2031] },
                { x: 2032, y: projections.waterways_transport[2032] },
                { x: 2033, y: projections.waterways_transport[2033] },
                { x: 2034, y: projections.waterways_transport[2034] },
                { x: 2035, y: projections.waterways_transport[2035] },
                { x: 2036, y: projections.waterways_transport[2036] },
                { x: 2037, y: projections.waterways_transport[2037] },
                { x: 2038, y: projections.waterways_transport[2038] },
                { x: 2039, y: projections.waterways_transport[2039] },
                { x: 2040, y: projections.waterways_transport[2040] },
                { x: 2041, y: projections.waterways_transport[2041] },
                { x: 2042, y: projections.waterways_transport[2042] },
                { x: 2043, y: projections.waterways_transport[2043] },
                { x: 2044, y: projections.waterways_transport[2044] },
                { x: 2045, y: projections.waterways_transport[2045] },
                { x: 2046, y: projections.waterways_transport[2046] },
                { x: 2047, y: projections.waterways_transport[2047] },
                { x: 2048, y: projections.waterways_transport[2048] },
                { x: 2049, y: projections.waterways_transport[2049] },
                { x: 2050, y: projections.waterways_transport[2050] },
              ]}
            />
          </XYPlot>
          <LineLegend />
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
      />
    );
  } else {
    return <></>;
  };
};

U1planner.propTypes = {
  settlementDistribution: PropTypes.object.isRequired,
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
};
