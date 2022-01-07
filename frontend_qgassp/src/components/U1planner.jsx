import React from "react";
import PropTypes from "prop-types";

import { Header } from "./Header";
import { Piechart } from "./Piechart";
import { BaselinePiechart } from "./BaselinePiechart";
import { Barchart } from "./Barchart";
import { Legend } from "./Legend";

// import { BaselineTable } from "./BaselineTable";
import "../css/u1planner.css";

/**
 * U1 Planner user input form for baseline
 * @return {}
 */

export const U1planner = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
      onCreateAccount={onCreateAccount}
    />

    <section>
      <div>
        <h2>U1 PLANNER USER INPUT 1: BASELINE</h2>
      </div>
      <form>
        <div>
          <label>Year</label>
          <select>
            <option value="year">2021</option>
          </select>
        </div>
        <div>
          <label>Country</label>
          <select>
            <option value="country_name">Finland</option>
          </select>
        </div>
        <div>
          <label>Population of the assessment area</label>
          <input type="text" name="name" />
        </div>
        <br />
        <div className="containerSmallPie">
          <div id="firstSmallPie">
          <label>
              <b>U1.1 Settlement type</b>
          </label>
          <label>Share (%)</label>
            <div>
              <label>City</label>
              <input type="text" name="city" />
            </div>
            <div>
              <label>Suburban</label>
              <input type="text" name="suburban" />
            </div>
            <div>
              <label>Town</label>
              <input type="text" name="town" />
            </div>
            <div>
              <label>Rural</label>
              <input type="text" name="rural" />
            </div>
          </div>
          <div id="secondSmallPie">
            <Piechart />
          </div>
          <div id="clear"></div>
        </div>
        <br />
        {/* <label>
          <b>U1.1 Settlement type</b>
        </label>
        <label>Share (%)</label>
        <div>
          <label>City</label>
          <input type="text" name="city" />
        </div>
        <div>
          <label>Suburban</label>
          <input type="text" name="suburban" />
        </div>
        <div>
          <label>Town</label>
          <input type="text" name="town" />
        </div>
        <div>
          <label>Rural</label>
          <input type="text" name="rural" />
        </div>
        <Piechart />
        <br /> */}
        <label>
          <b>U1.2 Area</b>
        </label>
        <label>Km</label>
        <div>
          <label>N-S Measurement (km)</label>
          <input type="text" name="ns_measure" />
        </div>
        <div>
          <label>E-W Measurement (km)</label>
          <input type="text" name="ew_measure" />
        </div>
        <br />
        <div>
          <label>
            <b>U1.2 Non-residential and freight</b>
          </label>
          <label></label>
        </div>
        <div>
          <label> Non-residential road transport</label>
          <select>
            <option value="very_limited">0.25</option>
            <option value="national_average_intensity" selected>
              1.0
            </option>
            <option value="very_intensive">2.50</option>
          </select>
        </div>

        <div>
          <label>Freight transport by road</label>
          <select>
            <option value="very_limited">0.25</option>
            <option value="national_average_intensity" selected>
              1.0
            </option>
            <option value="very_intensive">2.50</option>
          </select>
        </div>
        <div>
          <label>Freight transport by rail</label>
          <select>
            <option value="very_limited">0.25</option>
            <option value="national_average_intensity" selected>
              1.0
            </option>
            <option value="very_intensive">2.50</option>
          </select>
        </div>

        <div>
          <label>Freight transport by inland waterways</label>
          <select>
            <option value="very_limited">0.25</option>
            <option value="national_average_intensity" selected>
              1.0
            </option>
            <option value="very_intensive">2.50</option>
          </select>
        </div>

        <label>
          <b>Baseline - Transport CO2e emission 2021</b>
        </label>
        <div className="container">
          <div id="first">
            <BaselinePiechart />
          </div>
          <div id="second">
            <Legend />
          </div>
          <div id="clear"></div>
        </div>
        <label>
          <b>Baseline - Transport CO2e emission/resident</b>
        </label>
        <Barchart />
      </form>
    </section>
  </article>
);
U1planner.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

U1planner.defaultProps = {
  user: null,
};
