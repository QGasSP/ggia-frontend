import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Piechart } from "./Piechart";
import { Legend } from "./Legend";
import { U1plannerDefault } from "./U1plannerDefault";
import { Button } from "./Button";
import "../css/u1planner.css";
import axios from "axios";
import {
  XYPlot,
  VerticalGridLines,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  RadialChart,
} from "react-vis";

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
}) => {
  const [emission, setEmissionData] = useState("");

  useEffect(() => {
    const headers = {
      "Content-type": "application/json",
    };

    axios
      .post("http://localhost:5000/calc/emission", { country }, headers)
      .then(function (response) {
        // eslint-disable-next-line no-console
        console.log(response);
        setEmissionData(response.data);
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  return (
    <div>
      {emission.length != 0 ? (
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
              <h2>U1 PLANNER USER INPUT 1: BASELINE </h2>
            </div>
            <div>
              <h3>
                <b>{country}</b>
              </h3>
            </div>

            <div className="row">
              <form id="form_settlement" action="">
                <div className="column">
                  <div className="settlement_headers">
                    <label>
                      <b>U1.1 Settlement type </b>
                    </label>
                    <label>Share (%)</label>
                  </div>
                  <div>
                    <label htmlFor="metropolitan">Metropolitan center</label>
                    <input type="number" id="metropolitan" min="0" max="100" required/>
                  </div>
                  <div>
                    <label htmlFor="city">City</label>
                    <input type="number" id="city" min="0" max="100" required />
                  </div>
                  <div>
                    <label htmlFor="suburban"> Suburban</label>
                    <input type="number" id="suburban" min="0" max="100" required />
                  </div>
                  <div>
                    <label htmlFor="town">Town</label>
                    <input type="number" id="town" min="0" max="100" required/>
                  </div>
                  <div>
                    <label htmlFor="rural">Rural</label>
                    <input type="number" id="rural" min="0" max="100" required />
                  </div>
                </div>
              </form>
              <div className="column">
              <div>
              {/*   <Button
                  size="small"
                  type="submit" 
                  value="Submit"
                  label="Update settlement type default values"
                /> */}
                </div>
                <Piechart />
              </div>
            </div>
            <br />

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
              <br></br>
              <label>
                <b>Baseline - Transport CO2e emission 2021</b>
              </label>
              <div className="piechart_container">
                <div className="piechart_diagram">
                  <div>
                    <RadialChart
                      data={[
                        {
                          angle:
                            Math.round(
                              (emission.motor_coaches_buses_and_trolley_buses /
                                emission.total +
                                Number.EPSILON) *
                                36000
                            ) / 100,
                          label: "Buses",
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
                              (emission.passenger_trains / emission.total +
                                Number.EPSILON) *
                                36000
                            ) / 100,
                          label: "Passenger trains",
                          color: "#D90404",
                        },
                        {
                          angle:
                            Math.round(
                              (emission.road_freight / emission.total +
                                Number.EPSILON) *
                                36000
                            ) / 100,
                          label: "Road freight",
                          color: "#595959",
                        },
                        {
                          angle:
                            Math.round(
                              (emission.passenger_cars / emission.total +
                                Number.EPSILON) *
                                36000
                            ) / 100,
                          label: "Passenger cars",
                          color: "#A6036D",
                          rotation: 90,
                        },
                        {
                          angle:
                            Math.round(
                              (emission.tram_light_train / emission.total +
                                Number.EPSILON) *
                                36000
                            ) / 100,
                          label: "Tram, light train",
                          color: " #C4D4F2",
                        },
                        {
                          angle:
                            Math.round(
                              (emission.rail_freight / emission.total +
                                Number.EPSILON) *
                                36000
                            ) / 100,
                          label: "Rail freight",
                          color: "#80D941",
                        },
                        {
                          angle:
                            Math.round(
                              (emission.inland_waterways_freight /
                                emission.total +
                                Number.EPSILON) *
                                36000
                            ) / 100,
                          label: "Inland waterways freight",
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
                          Math.round(
                            (emission.motor_coaches_buses_and_trolley_buses +
                              Number.EPSILON) *
                              100
                          ) / 100,
                        x: "Buses",
                      },
                      {
                        y:
                          Math.round((emission.metro + Number.EPSILON) * 100) /
                          100,
                        x: "Metro",
                      },
                      {
                        y:
                          Math.round(
                            (emission.passenger_trains + Number.EPSILON) * 100
                          ) / 100,
                        x: "Passenger trains",
                      },
                      {
                        y:
                          Math.round(
                            (emission.road_freight + Number.EPSILON) * 100
                          ) / 100,
                        x: "Road freight",
                      },
                      {
                        y:
                          Math.round(
                            (emission.passenger_cars + Number.EPSILON) * 100
                          ) / 100,
                        x: "Passenger cars",
                      },
                      {
                        y:
                          Math.round(
                            (emission.tram_light_train + Number.EPSILON) * 100
                          ) / 100,
                        x: "Tram, light train",
                      },
                      {
                        y:
                          Math.round(
                            (emission.rail_freight + Number.EPSILON) * 100
                          ) / 100,
                        x: "Rail freight",
                      },
                      {
                        y:
                          Math.round(
                            (emission.inland_waterways_freight +
                              Number.EPSILON) *
                              100
                          ) / 100,
                        x: "Inland waterways freight",
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
            </form>
          </section>
        </article>
      ) : (
        <U1plannerDefault country={country} />
      )}
    </div>
  );
};

U1planner.propTypes = {
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

U1planner.defaultProps = {
  user: null,
};
