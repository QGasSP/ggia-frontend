import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { LineLegend } from "./LineLegend";
import "../css/u1planner.css";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate} from "react-router-dom";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  RadialChart
} from "react-vis";

import Divider from "@mui/material/Divider";
import urlPrefix from "../Config";
import { Container, Grid, Tooltip, Box } from "@mui/material";


/**
 * U1 Planner baseline user input form
 * @return {}
 */
const BarSeries = VerticalBarSeries;

export const U1planner = () => {
  const navigate = useNavigate();
  const country = localStorage.getItem("country");
  const year = parseInt(localStorage.getItem("year"));
  const population = parseInt(localStorage.getItem("population"));
  const settlementDistribution =JSON.parse(localStorage.getItem("settlementDistribution"));
  const intensityNonResAndFt = JSON.parse(localStorage.getItem("intensity_non_res_and_ft"));
  const metroSplit = JSON.parse(localStorage.getItem("metroSplit"));
  const tramSplit = JSON.parse(localStorage.getItem("tramSplit"));


  const [emission, setEmissionData] = useState(() => {
    const savedEm = localStorage.getItem("emission");
    const initialValue = JSON.parse(savedEm);
    return initialValue || {};
  });

  const [projections, setProjections] = useState(() => {
    const savedProj = localStorage.getItem("projections");
    const initialValue = JSON.parse(savedProj);
    return initialValue || {};
  });

  const [baseline, setBaseline] = useState(() => {
    const savedBase = localStorage.getItem("baseline");
    const initialValue = JSON.parse(savedBase);
    return initialValue || {};
  });

  const [absoluteEmissionsYear1, setAbsoluteEmissionsYear1] = useState(() => {
    const savedBase = localStorage.getItem("absoluteEmissionsYear1");
    const initialValue = JSON.parse(savedBase);
    return initialValue || {};
  });

   const [absoluteProjections, setAbsoluteProjections] = useState(() => {
    const savedPop = localStorage.getItem("absoluteProjections");
    const initialValue = JSON.parse(savedPop);
    return initialValue || {};
  });

  const [isLoadingTransport, setIsLoadingTransport] = useState(true);
  const [isErrorTransport, setIsErrorTransport] = useState(false);

  {/* const dataProjectionsBus = [];
  const dataProjectionsCar = [];
  const dataProjectionsMetro = [];
  const dataProjectionsTram = [];
  const dataProjectionsTrain = [];
  const dataProjectionsRailTransport = [];
  const dataProjectionsRoadTransport = [];
  const dataProjectionsWaterwaysTransport = []; */}

  const absoluteProjectionsBus = [];
  const absoluteProjectionsCar = [];
  const absoluteProjectionsMetro = [];
  const absoluteProjectionsTram = [];
  const absoluteProjectionsTrain = [];
  const absoluteProjectionsRailTransport = [];
  const absoluteProjectionsRoadTransport = [];
  const absoluteProjectionsWaterwaysTransport = [];

  useEffect(async () => {
    const baseline = {
      country,
      year,
      population,
      settlementDistribution,
      "intensity_non_res_and_ft": intensityNonResAndFt,
      "metro_split": metroSplit,
      "tram_split": tramSplit
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
        setAbsoluteEmissionsYear1(response.data.data.baseline.absolute_year1_emissions);
        setProjections(response.data.data.baseline.projections);
        // setAbsoluteProjections(response.data.data.baseline.absolute_projections);
        setIsLoadingTransport(false);
      })
      .catch((error) => {
        setIsLoadingTransport(false);
        setIsErrorTransport(true);
        // eslint-disable-next-line no-console
        console.error("There was an error!", error.message );
      });
  }, []);

  useEffect(async () => {
    localStorage.setItem("projections", JSON.stringify(projections));
    localStorage.setItem("emission", JSON.stringify(emission));
    localStorage.setItem("baseline", JSON.stringify(baseline));
    localStorage.setItem("absoluteEmissionsYear1", JSON.stringify(absoluteEmissionsYear1));
    localStorage.setItem("absoluteProjections", JSON.stringify(absoluteProjections));
  }, [projections, emission, baseline, absoluteEmissionsYear1, absoluteProjections]);

  const emissionTotal = emission.bus + emission.train + emission.car + emission.metro + emission.waterways_transport + emission.tram + emission.rail_transport + emission.road_transport

  const goToNewResidents = () => {
    navigate("../newResidents", {
      replace: true
    });
  };

  if (isLoadingTransport) {
    return <CircularProgress color="success" />;
  }

  {/* for (let i = year; i < 2051; i++) {
    dataProjectionsBus.push({ x: i, y: projections.bus[i] });
    dataProjectionsCar.push({ x: i, y: projections.car[i] });
    dataProjectionsMetro.push({ x: i, y: projections.metro[i] });
    dataProjectionsTram.push({ x: i, y: projections.tram[i] });
    dataProjectionsTrain.push({ x: i, y: projections.train[i] });
    dataProjectionsRailTransport.push({ x: i, y: projections.rail_transport[i] });
    dataProjectionsRoadTransport.push({ x: i, y: projections.road_transport[i] });
    dataProjectionsWaterwaysTransport.push({ x: i, y: projections.waterways_transport[i] });
  } */}

    if(absoluteProjections &&
    Object.keys(absoluteProjections).length !== 0){
  for (let i = year; i < 2051; i++) {
    absoluteProjectionsBus.push({ x: i, y: absoluteProjections.bus[i] });
    absoluteProjectionsCar.push({ x: i, y: absoluteProjections.car[i] });
    absoluteProjectionsMetro.push({ x: i, y: absoluteProjections.metro[i] });
    absoluteProjectionsTram.push({ x: i, y: absoluteProjections.tram[i] });
    absoluteProjectionsTrain.push({ x: i, y: absoluteProjections.train[i] });
    absoluteProjectionsRailTransport.push({ x: i, y: absoluteProjections.rail_transport[i] });
    absoluteProjectionsRoadTransport.push({ x: i, y: absoluteProjections.road_transport[i] });
    absoluteProjectionsWaterwaysTransport.push({ x: i, y: absoluteProjections.waterways_transport[i] });
  };
}

  if (Object.keys(projections).length !== 0) {
    return (
      <Container maxWidth="xl">
      <article>
        <div className="heading">
          <h2>Baseline results</h2> 
        </div>
        <br />
        <Grid container
            spacing={11}
            direction="row"
            justifyContent="center"
            mt={0.5}
            mb={3}
          >

        <Grid item xs={5}>
            {" "}
          <b>Baseline GHG emissions {year} for transport (kgCO2e/capita, a)</b>
            <div id="piechart">
              <RadialChart
                data={[
                  {
                    angle:
                      Math.round(
                        (emission.bus / emissionTotal + Number.EPSILON) * 36000
                      ) / 100,
                    label: "Bus",
                    color: "#e69500",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.metro / emissionTotal + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Metro",
                    color: "#005aff",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.train / emissionTotal + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Train",
                    color: "#D90404",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.road_transport / emissionTotal +
                          Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Road transport",
                    color: "#595959",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.car / emissionTotal + Number.EPSILON) * 36000
                      ) / 100,
                    label: "Car",
                    color: "#A6036D",
                    rotation: 90,
                  },
                  {
                    angle:
                      Math.round(
                        (emission.tram / emissionTotal + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Tram",
                    color: " #C4D4F2",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.rail_transport / emissionTotal +
                          Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Rail transport",
                    color: "#80D941",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.waterways_transport / emissionTotal +
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
           
        </Grid>


        <Grid item xs={6}>
          
            <table style={{width:'100%'}}>
              <thead>
                <tr>
              <th>Transport Co2 Emissions</th>
              <th>kgCO2e/capita, a</th>
            </tr>
              </thead>
            <tbody>
            <tr>
              <td><span className="legend" id="bus">o</span>{"    "} Bus</td>
              <td>{emission.bus.toFixed(1)}</td>
            </tr>

            <tr>
              <td><span className="legend" id="car">o</span>{"    "}Passenger car</td>
              <td>{emission.car.toFixed(1)}</td>
            </tr>

            <tr>
              <td><span className="legend" id="metro">o</span>{"    "}Metro</td>
              <td>{emission.metro.toFixed(1)}</td>
            </tr>

            <tr>
              <td><span className="legend" id="tram">o</span>{"    "}Tram</td>
              <td>{emission.tram.toFixed(1)}</td>
            </tr>

            <tr>
              <td><span className="legend" id="train">o</span>{"    "}Passenger train</td>
              <td>{emission.train.toFixed(1)}</td>
            </tr>

            <tr>
              <td><span className="legend" id="rail">o</span>{"    "}Freight on rails</td>
              <td>{emission.rail_transport.toFixed(1)}</td>
            </tr>

            <tr>
              <td><span className="legend" id="road">o</span>{"    "}Freight on road</td>
              <td>{emission.road_transport.toFixed(1)}</td>
            </tr>

            <tr>
              <td><span className="legend" id="water">o</span>{"    "}Freight on water</td>
              <td>{emission.waterways_transport.toFixed(1)}</td>
            </tr>

            <tr>
              <td><b>Total transport emissions per capita</b></td>
              <td><b>{emissionTotal.toFixed(1)}</b></td>
            </tr>
            </tbody>
          </table>
        </Grid>
        </Grid>

        <br/>
         <Divider textAlign="left">
          <h3>Annual baseline GHG emissions for transport (tCO2e/a)</h3>
         </Divider>
          <Box 
            display="flex"
            minHeight="80vh"
            mt={10}
            >
            <div>
              <XYPlot
                width={1000}
                height={500}
                stackBy="y"
                xType="ordinal"
                margin={{left: 80}}
              >
                <HorizontalGridLines />
                <VerticalGridLines />
                <VerticalBarSeries className="StackedBarchart" />
                <XAxis title="Year" />
                <YAxis title="tCO2e/a" />
                <BarSeries
                  color="#8C0303"
                  data={absoluteProjectionsBus}
                  opacity={0.5}
                />
                <BarSeries
                  color="#A6036D"
                  data={absoluteProjectionsCar}
                  opacity={0.5}
                />
                <BarSeries
                  color="#400D01"
                  data={absoluteProjectionsMetro}
                  opacity={0.5}
                />
                <BarSeries
                  color=" #C4D4F2"
                  data={absoluteProjectionsTram}
                  opacity={0.5}
                />
                <BarSeries
                  color="#D90404"
                  data={absoluteProjectionsTrain}
                  opacity={0.5}
                />
                <BarSeries
                  color="#80D941"
                  data={absoluteProjectionsRailTransport}
                  opacity={0.5}
                />
                <BarSeries
                  color="#595959"
                  data={absoluteProjectionsRoadTransport}
                  opacity={0.5}
                />
                <BarSeries
                  color="#F2CE1B"
                  data={absoluteProjectionsWaterwaysTransport}
                />
              </XYPlot>

               <div className="transport-legend-style">
                <LineLegend />
               </div>
            </div> 

            
          </Box>

          <Box mb={10}>
            <div className="backButtonNew">
            <Button
              size="small"
              value="backProjections"
              onClick={() => navigate("../transportBaseline", { replace: true })}
              label="&laquo; Previous"
              secondary="true"
            />
          </div>

           <div className="nextU2Button">
          <Button
            size="small"
            value="u2next_inputs"
            onClick={goToNewResidents}
            label="Next &raquo;"
            primary
          />
            </div>
          </Box>
      </article>
      </Container>
    );
  }
};
