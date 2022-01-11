import React from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Piechart } from "./Piechart";
import "../css/u1planner.css";
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
 * U1 Default Planner baseline user input form
 * @return {}
 */

export const U1plannerDefault = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  country,
}) => {
  return (
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
        <form>
          <label>
            <b>U1.1 Settlement type</b>
          </label>
          <label>Share (%)</label>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>
          <div>
            <label htmlFor="suburban"> Suburban</label>
            <input type="text" id="suburban" />
          </div>
          <div>
            <label htmlFor="town">Town</label>
            <input type="text" id="town" />
          </div>
          <div>
            <label htmlFor="rural">Rural</label>
            <input type="text" id="rural" />
          </div>
          <Piechart />
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

          <label>
            <b>Baseline - Transport CO2e emission 2021</b>
          </label>
          <div>
            <div>
              <div>
                <RadialChart
                  data={[
                    {
                      angle: 360,
                      label: "No data",
                      color: "#A6A6A6",
                    },
                  ]}
                  width={350}
                  height={350}
                  labelsAboveChildren={true}
                  labelsRadiusMultiplier={1.1}
                  labelsStyle={{
                    fontSize: 8,
                  }}
                  showLabels
                />
              </div>
            </div>
            <div></div>
          </div>
          <label>
            <b>Baseline - Transport CO2e emission/resident</b>
          </label>

          <div>
            <XYPlot xType="ordinal" width={1000} height={312} xDistance={200}>
              <HorizontalGridLines />
              <VerticalGridLines />
              <VerticalBarSeries
                className="BaselineBarchart"
                data={[
                  {
                    y: 0.0,
                    x: "Buses",
                  },
                  {
                    y: 0.0,
                    x: "Metro",
                  },
                  {
                    y: 0.0,
                    x: "Passenger trains",
                  },
                  {
                    y: 0.0,
                    x: "Road freight",
                  },
                  {
                    y: 0.0,
                    x: "Passenger cars",
                  },
                  {
                    y: 0.0,
                    x: "Tram, light train",
                  },
                  {
                    y: 0.0,
                    x: "Rail freight",
                  },
                  {
                    y: 0.0,
                    x: "Inland waterways freight",
                  },
                  {
                    y: 0.0,
                    x: "Total emissions",
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
  );
};

U1plannerDefault.propTypes = {
  country: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

U1plannerDefault.defaultProps = {
  user: null,
};
