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
  RadialChart,
} from "react-vis";

import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { Legend } from "./Legend";
import urlPrefix from "../Config";
import { Container, Grid, Paper, Tooltip } from "@mui/material";





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
  const metroSplit = JSON.parse(localStorage.getItem("metroSplit"))
  const tramSplit = JSON.parse(localStorage.getItem("tramSplit"))


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

  useEffect(async () => {
    const baseline = {
      country,
      year,
      population,
      settlementDistribution,
      metroSplit,
      tramSplit
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
        // eslint-disable-next-line no-console
        console.error("There was an error!", error.message );
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("projections", JSON.stringify(projections));
  }, [projections]);

  useEffect(() => {
    localStorage.setItem("emission", JSON.stringify(emission));
  }, [emission]);

  useEffect(() => {
    localStorage.setItem("baseline", JSON.stringify(baseline));
  }, [baseline]);

  const emissionTotal = emission.bus + emission.train + emission.car + emission.metro + emission.waterways_transport + emission.tram + emission.rail_transport + emission.road_transport

  const goToNewResidents = () => {
    navigate("../newResidents", {
      replace: true,
     /*  state: {
        baseline:baseline,
        emission:emission,
        projections:projections,
        year:year,
        settlementDistribution: settlementDistribution,
      }, */
    });
  };

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


  if (Object.keys(projections).length !== 0) {
    return (
      <Container maxWidth="xl">
      <article>
        <div style={{marginTop:"20px", textAlign:"center"}}><h3>Baseline Results</h3></div>
        
        <br />

        <Grid container spacing={6} style={{marginTop:"10px"}}>

        <Grid item xs={6}>
            <Paper>
          {" "}
          <b>{country}: Baseline - Transport CO2e emission</b>
          
        <div className="piechart_container">
          <div className="piechart_diagram">
            <div>
              <RadialChart
                data={[
                  {
                    angle:
                      Math.round(
                        (emission.bus / emissionTotal + Number.EPSILON) * 36000
                      ) / 100,
                    label: "Bus",
                    color: "#8C0303",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.metro / emissionTotal + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Metro",
                    color: "#400D01",
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
          </div>
          <div className="piechart_legend" style={{height:'60%',width:'60%', marginLeft:"70px"}}>
            <Legend />
          </div>
          
        </div>

          </Paper>
        </Grid>


        <Grid item xs={6} style={{width:'100%'}}>
          
            <Paper>
              <Tooltip title="">
            <table style={{width:'100%'}}>
              <thead>
                <tr>
              <th>Transport Co2 Emissions</th>
              <th>kgCO2e/resident</th>
            </tr>
              </thead>
            <tbody>
            <tr>
              <td>Bus</td>
              <td>{emission.bus}</td>
            </tr>

            <tr>
              <td>Passenger car</td>
              <td>{emission.car}</td>
            </tr>

            <tr>
              <td>Metro</td>
              <td>{emission.metro}</td>
            </tr>

            <tr>
              <td>Tram</td>
              <td>{emission.tram}</td>
            </tr>

            <tr>
              <td>Passenger train</td>
              <td>{emission.train}</td>
            </tr>

            <tr>
              <td>Rail transport</td>
              <td>{emission.rail_transport}</td>
            </tr>

            <tr>
              <td>Passenger train</td>
              <td>{emission.train}</td>
            </tr>

            <tr>
              <td>Road transport</td>
              <td>{emission.road_transport}</td>
            </tr>

            <tr>
              <td>Transport on inland waterways</td>
              <td>{emission.waterways_transport}</td>
            </tr>

            <tr>
              <td><b>Total Transport emissions per capita</b></td>
              <td><b>{emissionTotal}</b></td>
            </tr>
            </tbody>
          </table>
          </Tooltip>
          </Paper>
        </Grid>
      </Grid>

        <br/>
        
        <Divider textAlign="left" flexItem>
          <b>{country}: Baseline Scenario- Transport CO2e emission/resident</b>
        </Divider>

        <div className="barchart_container">
          <XYPlot xType="ordinal" width={1000} height={300} xDistance={200} margin={{left:100}}>
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
            // onClick={() => setNewResidentView(true)}
            onClick={goToNewResidents}
            label="Next &raquo;"
            primary
          />
        </div>
        
      </article>
      </Container>
    );
  }
};
