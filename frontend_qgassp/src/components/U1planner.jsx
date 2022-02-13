import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Button } from "./Button";
import "../css/u1planner.css";
import axios from "axios";
import { Legend } from "./Legend";
import { Settlement } from "./Settlement";

import {
  XYPlot,
  VerticalGridLines,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  RadialChart,
  DiscreteColorLegend,
} from "react-vis";
import { StackedBarchart } from "./StackedBarchart";

/**
 * U1 Planner baseline user input form
 * @return {}
 */

export const U1planner = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  country,
  year,
  population,
  metropolitanCenter,
  urban,
  suburban,
  town,
  rural,
  total,
}) => {
  const [emission, setEmissionData] = useState("");
  const [projections, setProjections] = useState("");
  const [error, setError] = useState("");
  const [nextQuantification, setQuantification] = useState(false);
  const [backSettlement, setBackSettlement] = useState(false);
  // const [settlementDistribution, setSettlementDistribution] = useState("");
  const settlementLabels = [
    { title: "urban", color: "#164059" },
    { title: "suburban", color: "#F25F29" },
    { title: "town", color: "#F23A29" },
    { title: "rural", color: "#D9D9D9" },
    { title: "Metropolitan center", color: "#730E16" },
  ];

  useEffect(async () => {
    const settlementDistribution = {
      metropolitanCenter,
      urban,
      suburban,
      town,
      rural,
    };
    const rawData = { country, year, population, settlementDistribution };
    const headers = {
      "Content-type": "application/json",
      "Cache-Control": "no-cache",
    };
    axios
      .post(
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

  const setResponse = (response) => {
    setEmissionData(response.data.data.emissions);
    setProjections(response.data.data.projections);
  };

  const goBackToSettlement = () => {
    setBackSettlement(true);
  };

  const goToU1Projections = () => {
    setQuantification(true);
  };

  if (nextQuantification === false) {
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

          <section>
            <div>
              <h1 className="settlement_header">U1 PLANNER : BASELINE </h1>{" "}
              {/* {error} */}
            </div>
            {/*  <div>{JSON.stringify(emission.car)} </div>
            <div>{error.errorMessage} </div> */}

            <div className="row">
              <div className="column">
                <div className="settlement_headers">
                  <label>
                    <b>U1.1 Settlement type </b>
                  </label>
                  <label>Share ({total}%)</label>
                </div>
                <div>
                  <label htmlFor="metropolitan">Metropolitan center</label>
                  <input
                    type="number"
                    id="metropolitan"
                    min="0"
                    max="100"
                    value={metropolitanCenter}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="urban">Urban</label>
                  <input
                    type="number"
                    id="urban"
                    min="0"
                    max="100"
                    value={urban}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="suburban"> Suburban</label>
                  <input
                    type="number"
                    id="suburban"
                    min="0"
                    max="100"
                    value={suburban}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="town">Town</label>
                  <input
                    type="number"
                    id="town"
                    min="0"
                    max="100"
                    value={town}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="rural">Rural</label>
                  <input
                    type="number"
                    id="rural"
                    min="0"
                    max="100"
                    value={rural}
                    readOnly
                  />
                </div>
              </div>
              <div className="column">
                <div>
                  <RadialChart
                    type="piechart"
                    data={[
                      {
                        angle: urban,
                        label: "Urban",
                        color: "#164059",
                      },
                      {
                        angle: suburban,
                        label: "Suburban",
                        color: "#F25F29",
                      },
                      {
                        angle: town,
                        label: "Town",
                        color: "#F23A29",
                      },
                      {
                        angle: rural,
                        label: "Rural",
                        color: "#D9D9D9",
                      },
                      {
                        angle: metropolitanCenter,
                        label: "Metropolitan center",
                        color: "#730E16",
                      },
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
                  items={settlementLabels}
                  orientation="horizontal"
                  strokeWidth="40"
                />
              </div>
            </div>
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
            <form>
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
                <label htmlFor="freight=road">Freight transport by road</label>
                <select id="freight_road" name="freight_road">
                  <optgroup label="Select freight road intensity"></optgroup>
                  <option value="very_limited">0.25</option>
                  <option value="national_average_intensity">1.0</option>
                  <option value="very_intensive">2.50</option>
                </select>
              </div>
              <div>
                <label htmlFor="freight_rail">Freight transport by rail</label>
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
            </form>
            <label>
              <b>Baseline - Transport CO2e emission</b>
            </label>
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
            <label>
              <b>Baseline - Transport CO2e emission/resident</b>
            </label>

            <div className="barchart_container">
              <XYPlot xType="ordinal" width={1000} height={312} xDistance={200}>
                <HorizontalGridLines />
                <VerticalGridLines />
                <VerticalBarSeries
                  className="BaselineBarchart"
                  data={[
                    {
                      y:
                        Math.round((emission.bus + Number.EPSILON) * 100) / 100,
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
                        Math.round((emission.car + Number.EPSILON) * 100) / 100,
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
                          (emission.waterways_transport + Number.EPSILON) * 100
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

            <div className="backButton">
              <Button
                size="small"
                value="backSettlement"
                onClick={goBackToSettlement}
                label="Back"
                primary
              />
            </div>
            <div className="nextU2Button">
              <Button
                size="small"
                value="nextU2"
                onClick={goToU1Projections}
                label="Next"
                primary
              />
            </div>
          </section>
        </article>
      </div>
    );
  } else if (backSettlement === true) {
    return (
      <Settlement
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
        country={country}
        year={year}
        population={population}
      />
    );
  } else {
    return (
      <StackedBarchart
        projections={projections}
        country={country}
        year={year}
        population={population}
        metropolitanCenter={metropolitanCenter}
        urban={urban}
        suburban={suburban}
        town={town}
        rural={rural}
      />
    );
  }
};

U1planner.propTypes = {
  metropolitanCenter: PropTypes.number.isRequired,
  urban: PropTypes.number.isRequired,
  suburban: PropTypes.number.isRequired,
  town: PropTypes.number.isRequired,
  rural: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

U1planner.defaultProps = {
  user: null,
};
