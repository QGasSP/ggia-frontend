import React, { useState, useEffect } from "react";
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
  RadialChart,
  DiscreteColorLegend,
  VerticalBarSeries
} from "react-vis";


const BarSeries = VerticalBarSeries;

// import { U3planner } from "./U3planner";
import urlPrefix from "../Config";
import {useNavigate} from "react-router-dom";
import { Container, Grid } from "@mui/material";

/**
 * U2 Planner component for visualization of  baseline vs new-resident population
 * @return {}
 */

export const U2planner = () => {
  const navigate = useNavigate();

  const base= JSON.parse(localStorage.getItem("baseline"));
  const baseline = base.baseline;

  const newDevelopment = JSON.parse(localStorage.getItem("newDevelopment"));
  const settlementDistribution = JSON.parse(localStorage.getItem("settlementDistribution"));
  const projections = JSON.parse(localStorage.getItem("projections"));
  // const newDevelopment = location.state.newDevelopment;
  const [errorU2, setU2Error] = useState("");
  
  const [newPopulation, setNewPopulation] = useState(() => {
    const savedPop = localStorage.getItem("newPopulation");
    const initialValue = JSON.parse(savedPop);
    return initialValue || {};
  });
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
    navigate("/u3planner", {
      replace: true,
    }); 
  };

  useEffect(() => {
    localStorage.setItem("newPopulation", JSON.stringify(newPopulation));
  }, [newPopulation]);
  
  useEffect(() => {
    localStorage.setItem("newDevelopment", JSON.stringify(newDevelopment));
  }, [newDevelopment]);

  if (isU2Loading) {
    return <CircularProgress color="success" />;
  };

  const itemLabels = [
  { title: "Metropolitan Area", color: "#ADD8E6" },
  { title: "Urban", color: "green" },
  { title: "Suburban", color: "orange" },
  { title: "Town", color: "red" },
  { title: "Rural", color: "brown" }
]
  
    return (
      <Container maxWidth="xl">
      <article>
         <section>

            <div className="headerSettlement">
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="U2 NEW DEVELOPMENT" />
          </Divider>
        </div>

       
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
          
        
          
          <XYPlot
              xType="ordinal"
              width={1000}
              height={500}
              margin={{ left: 100 }}
            >
          
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries
            
            color="#12939A"
            data={dataProjectionPopulation}
          />
          <BarSeries
            
            color="#79C7E3"
            data={dataNewPopulation}
          />
          <LineSeries
          color="black"
            data={dataProjectionPopulation}
            strokeStyle="dashed"
          />
         
          
        </XYPlot>


            <br />

            {/* settlement type starts here */}
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <div>
                  <table style={{width:'100%'}}>
                    <thead>
                        <tr>
                          <th>Settlement type</th>
                          <th>Existing environment</th>
                          <th>New development</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>Metropolitan Area</td>
                          <td>{settlementDistribution.metropolitanCenter}</td>
                          <td>{newDevelopment.newSettlementDistribution.metropolitanCenter}</td>
                        </tr>

                        <tr>
                          <td>Urban</td>
                          <td>{settlementDistribution.urban}</td>
                          <td>{newDevelopment.newSettlementDistribution.urban}</td>
                        </tr>

                        <tr>
                          <td>Suburban</td>
                          <td>{settlementDistribution.suburban}</td>
                          <td>{newDevelopment.newSettlementDistribution.suburban}</td>
                        </tr>

                        <tr>
                          <td>Town</td>
                          <td>{settlementDistribution.town}</td>
                          <td>{newDevelopment.newSettlementDistribution.town}</td>
                        </tr>

                        <tr>
                          <td>Rural</td>
                          <td>{settlementDistribution.rural}</td>
                          <td>{newDevelopment.newSettlementDistribution.rural}</td>
                        </tr>

                    </tbody>
                  </table>
                </div>
           
              </Grid>
              <Grid item xs={6}>
                  <Divider textAlign="left" flexItem>
          {" "}
          <b>New settlement type and its distribution</b>
        </Divider>

        <div className="piechart_container">
          <div className="piechart_diagram">
            <div>
              <RadialChart
                data={[
                  {
                    angle:
                      Math.round(
                        (newDevelopment.newSettlementDistribution.metropolitanCenter / 100 + Number.EPSILON) * 36000
                      ) / 100,
                    label: "Metropolitan Area",
                    color: "#ADD8E6",
                  },
                  {
                    angle:
                      Math.round(
                        (newDevelopment.newSettlementDistribution.urban / 100 + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Urban",
                    color: "green",
                  },
                  {
                    angle:
                      Math.round(
                        (newDevelopment.newSettlementDistribution.suburban / 100 + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Suburban",
                    color: "orange",
                  },
                  {
                    angle:
                      Math.round(
                        (newDevelopment.newSettlementDistribution.town / 100 +
                          Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Town",
                    color: "red",
                  },
                  {
                    angle:
                      Math.round(
                        (newDevelopment.newSettlementDistribution.rural / 100 + Number.EPSILON) * 36000
                      ) / 100,
                    label: "Rural",
                    color: "brown",
                    rotation: 90,
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
            <DiscreteColorLegend
              items={itemLabels}
              orientation="vertical"
              strokeWidth="50px"
              />
          </div>
          <div></div>
        </div>

            </Grid>
            </Grid>
            <br/>
            <Divider textAlign="left" flexItem>
              {" "}
              <b>
                {" "}
                {baseline.country} : Projections vs New development total yearly
                emissions
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

            <br />


            <div className="backButtonNew">
              <Button
                size="small"
                value="backProjections"
                onClick={() =>
                  navigate("../newResidents", { replace: true })
                }
                label="&laquo; Previous"
                secondary="true"
              />
            </div>

            <div className="nextU2Button">
              <Button
                size="small"
                value="nextU3"
                onClick={gotoU3planner}
                label="Next &raquo;"
                primary
              />
            </div>
          
        </section>
      </article>
      </Container>
    );
};

