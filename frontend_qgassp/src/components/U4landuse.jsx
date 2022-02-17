import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Button } from "./Button";
import "../css/u1planner.css";
import axios from "axios";
// import { Legend } from "./Legend";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  RadialChart,
  DiscreteColorLegend,
} from "react-vis";
import { LineLegendLandUse } from "./LineLegendLandUse"; 

/**
 * U4 land use baseline user input form
 * @return {}
 */
const BarSeries = VerticalBarSeries;
export const U4planner = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  country,
  year,
  population,
  settlements,
  cropLand,
  grassLand,
  forestLand,
  wetland,
  otherLand,
  total,
  nextEmissions,
}) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // U2View
  const [nextU2view, setU2View] = useState(false);

  // WHAT IS setEmissionData FOR
//   const [emission, setEmissionData] = useState(() => {
//     const savedEmissions = window.localStorage.getItem("emission");
//     return savedEmissions !== null ? JSON.parse(savedEmissions) : parseFloat(0);
//   });

  const [projections, setProjections] = useState(() => {
    const savedProjections = window.localStorage.getItem("projections");
    return savedProjections !== null
      ? JSON.parse(savedProjections)
      : parseFloat(0);
  });

  const [landUseCangeEmissions, setlandUseCangeEmissions] = useState(() => {
    const savedlandUseCangeEmiss = window.localStorage.getItem("landUseCangeEmissions");
    return savedlandUseCangeEmiss !== null ?
      JSON.parse(savedlandUseCangeEmiss) :
      parseFloat(0);
  });

  // NAMING...? goToNewResidents
  const goTolandUseCangeEmissions = () => {
    const landUseCangeEmiss = {
      settlements,
      cropLand,
      grassLand,
      forestLand,
      wetland,
      otherLand,
    };
    setlandUseCangeEmissions(landUseCangeEmiss);
    setU2View(true);
  };

  const goBackLandUseChange = () => {
    localStorage.removeItem("nextEmissions", nextEmissions);
    navigate("/landuse", { replace: true })
  };

  /*   const [backSettlement, setBackSettlement] = useState(false); */
  // const [landUseCangeEmissions, setlandUseCangeEmissions] = useState("");

  // CHANGE COLORS
  const landUseLabels = [
    { title: "settlements", color: "#164059" },
    { title: "cropland", color: "#F25F29" },
    { title: "grassland", color: "#F23A29" },
    { title: "forestland", color: "#D9D9D9" },
    { title: "wetland", color: "#730E16" },
    { title: "otherland", color: "#52974c" },
  ];

  useEffect(async () => {
    const landUseCangeEmissions = {
      settlements,
      cropLand,
      grassLand,
      forestLand,
      wetland,
      otherLand,
    };
    const rawData = { country, year, population, landUseCangeEmissions };
    const headers = {
      "Content-type": "application/json",
    };
    axios
      .post(
        // CHANGE LINK ?
        "https://ggia.ulno.net/api/v1/calculate/transport",
        rawData,
        headers
      )
      .then((response) => setResponse(response))
      .catch((error) => {
        setError({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("There was an error!", error);
      });
  }, []);

  // FUNCTIONS
  const setResponse = (response) => {
    // setEmissionData(response.data.data.emissions);
    setProjections(response.data.data.projections);
  };

//   useEffect(() => {
//     localStorage.setItem("emission", emission);
//   }, [emission]);

  useEffect(() => {
    localStorage.setItem("projections", projections);
  }, [projections]);

  if (nextU2view === false) {
    return (
      <div>
        <article>
          {
            <Header
              user={user}
              onLogin={onLogin}
              onLogout={onLogout}
              onCreateAccount={onCreateAccount}
            />
          }
          <div className="headerSettlement">
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="U4 LAND USE BASELINE" />
            </Divider>
          </div>

          <section>
            {/*   <div>
              <h1 className="settlement_header">U1 PLANNER : BASELINE </h1>{" "}
            </div> */}
            {/*  <div>{JSON.stringify(emission.car)} </div>
            <div>{error.errorMessage} </div> */}

            <div className="row">
              <div className="column">
                <div className="settlement_headers">
                  <label>
                    <b>Land Use Category </b>
                  </label>
                  <label>land area ({total}ha)</label>
                </div>
                <div>
                  <label htmlFor="settlements">Settlements</label>
                  <input
                    type="number"
                    id="settlements"
                    min="0"
                    // max="100" WHAT IS MAX
                    value={settlements}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="cropLand">Cropland</label>
                  <input
                    type="number"
                    id="cropLand"
                    min="0"
                    // max="100"
                    value={cropLand}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="grassLand">Grassland</label>
                  <input
                    type="number"
                    id="grassLand"
                    min="0"
                    // max="100"
                    value={grassLand}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="forestLand">Forest Land</label>
                  <input
                    type="number"
                    id="forestLand"
                    min="0"
                    // max="100"
                    value={forestLand}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="wetland">Wetland</label>
                  <input
                    type="number"
                    id="wetland"
                    min="0"
                    // max="100"
                    value={wetland}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="otherLand">Other Land</label>
                  <input
                    type="number"
                    id="otherLand"
                    min="0"
                    // max="100"
                    value={otherLand}
                    readOnly
                  />
                </div>
              </div>
              <div className="column">
                <div>
                  <RadialChart
                    type="piechart"
                    // CHANGE COLORS
                    data={[
                      {
                        angle: settlements,
                        label: "Settlements",
                        color: "#164059",
                      },
                      {
                        angle: cropLand,
                        label: "CropLand",
                        color: "#F25F29",
                      },
                      {
                        angle: grassLand,
                        label: "grassLand",
                        color: "#F23A29",
                      },
                      {
                        angle: forestLand,
                        label: "Forest Land",
                        color: "#D9D9D9",
                      },
                      {
                        angle: wetland,
                        label: "Wetland",
                        color: "#730E16",
                      },
                      {
                        angle: otherLand,
                        label: "Other Land",
                        color: "#52974c",
                      }
                    ]}
                    width={180}
                    height={180}
                    colorType="literal"
                    // labelsAboveChildren={true}
                    /* labelsRadiusMultiplier={0.8}
                    labelsStyle={{
                      fontSize: 8,
                      fontWeight: 900,
                    }} */
                    //  showLabels
                  />
                </div>
                <DiscreteColorLegend
                  items={landUseLabels}
                  orientation="horizontal"
                  strokeWidth="40"
                />
              </div>
            </div>
            <div className="settlementDiv">
              <label>
                <b>U1.2 Area</b>
              </label>
              <label>Km</label>

              <div>
                <label htmlFor="ns_measure">N-S Measurement (km)</label>
                <input type="text" id="ns_measure" />
              </div>
              <div>
                <label htmlFor="ew_measure">E-W Measurement (km)</label>
                <input type="text" id="ew_measure" />
              </div>

              <br />
                //#region 
              {/* <form>
                <div>
                  <label>
                    <b>U1.2 Non-residential and freight</b>
                  </label>
                  <label></label>
                </div>
                <div>
                  <label htmlFor="non_resident_road">
                    {" "}
                    Non-residential road transport
                  </label>
                  <select id="non_resident_road">
                    <optgroup label="Select road transport intensity"></optgroup>
                    <option value="very_limited">0.25</option>
                    <option value="national_average_intensity">1.0</option>
                    <option value="very_intensive">2.50</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="freight=road">
                    Freight transport by road
                  </label>
                  <select id="freight_road" name="freight_road">
                    <optgroup label="Select freight road intensity"></optgroup>
                    <option value="very_limited">0.25</option>
                    <option value="national_average_intensity">1.0</option>
                    <option value="very_intensive">2.50</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="freight_rail">
                    Freight transport by rail
                  </label>
                  <select id="freight_rail" name="freight_rail">
                    <option value="very_limited">0.25</option>
                    <option value="national_average_intensity">1.0</option>
                    <option value="very_intensive">2.50</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="freight_waterway">
                    Freight transport by inland waterways
                  </label>
                  <select id="freight_waterway" name="freight_waterway">
                    <option value="very_limited">0.25</option>
                    <option value="national_average_intensity">1.0</option>
                    <option value="very_intensive">2.50</option>
                  </select>
                </div>
              </form> */}
                //#endregion
              
              <Divider textAlign="left" flexItem>
                {" "}
                <b>Baseline - Land Use CO2 emission</b>
              </Divider>

            
              <div className="piechart_container">
                <div className="piechart_diagram">
                  <div>
                    <RadialChart
                      data={[
                        {
                          angle:
                            Math.round(
                              (emission.bus / emission.total + Number.EPSILON) *
                                36000
                            ) / 100,
                          label: "Bus",
                          color: "#8C0303",
                        },
                        {
                          angle:
                            Math.round(
                              (emission.metro / emission.total +
                                Number.EPSILON) *
                                36000
                            ) / 100,
                          label: "Metro",
                          color: "#400D01",
                        },
                        {
                          angle:
                            Math.round(
                              (emission.train / emission.total +
                                Number.EPSILON) *
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
                              (emission.car / emission.total + Number.EPSILON) *
                                36000
                            ) / 100,
                          label: "Car",
                          color: "#A6036D",
                          rotation: 90,
                        },
                        {
                          angle:
                            Math.round(
                              (emission.tram / emission.total +
                                Number.EPSILON) *
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
                <b>Baseline - Land Use CO2e emission</b>
              </Divider>

              <div className="barchart_container">
                <XYPlot
                  xType="ordinal"
                  width={1000}
                  height={312}
                  xDistance={200}
                >
                  <HorizontalGridLines />
                  <VerticalGridLines />
                  <VerticalBarSeries
                    className="BaselineBarchart"
                    data={[
                      {
                        y:
                          Math.round((emission.bus + Number.EPSILON) * 100) /
                          100,
                        x: "Bus",
                      },
                      {
                        y:
                          Math.round((emission.metro + Number.EPSILON) * 100) /
                          100,
                        x: "Metro",
                      },
                      {
                        y:
                          Math.round((emission.train + Number.EPSILON) * 100) /
                          100,
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
                        y:
                          Math.round((emission.car + Number.EPSILON) * 100) /
                          100,
                        x: "Car",
                      },
                      {
                        y:
                          Math.round((emission.tram + Number.EPSILON) * 100) /
                          100,
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
                            (emission.waterways_transport + Number.EPSILON) *
                              100
                          ) / 100,
                        x: "Waterway transport",
                      },
                      {
                        y:
                          Math.round((emission.total + Number.EPSILON) * 100) /
                          100,
                        x: "total emissions",
                      },
                    ]}
                  />
                  <XAxis />
                  <YAxis />
                </XYPlot>
              </div>

              <Divider textAlign="left" flexItem>
                <b>Projections: CO2e emissions per capita 2022-2050</b>
              </Divider>
              //#region 
              {/*   <div>{JSON.stringify(projections.bus)}</div> */}
              {/*  <div>
                <XYPlot width={900} height={500} stackBy="y" xType="ordinal">
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
                <LineLegendLandUse />
              </div> */}
              //#endregion
              
              <div className="backButton">
                <Button
                  size="small"
                  value="backSettlement"
                  onClick={goBackLandUseChange}
                  label="&laquo; Previous"
                  secondary
                />
              </div>
              <div className="nextU2Button">
                <Button
                  size="small"
                  value="nextU2"
                  onClick={goTolandUseCangeEmissions}
                  label="Next &raquo;"
                  primary
                />
              </div>
            </div>
          </section>
        </article>
      </div>
    );
  } else {
    return (
    // CHANGE NewResidents - create new jsx file
      <NewResidents 
        country={country}
        year={year}
        landUseCangeEmissions={landUseCangeEmissions}
        population={population}
      />
    );
  }
};

U4planner.propTypes = {
  nextEmissions: PropTypes.bool.isRequired,
  settlements: PropTypes.number.isRequired,
  cropLand: PropTypes.number.isRequired,
  grassLand: PropTypes.number.isRequired,
  forestLand: PropTypes.number.isRequired,
  wetland: PropTypes.number.isRequired,
  otherLand: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

U4planner.defaultProps = {
  user: null,
};
