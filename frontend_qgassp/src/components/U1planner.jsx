import React from "react";
import PropTypes from "prop-types";

import { Header } from "./Header";
import "../css/u1planner.css";
import { Row } from "react-bootstrap";

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
      <h2>U1 PLANNER USER INPUT 1: BASELINE</h2>
      <br />
      <form>
        <div>
          <label>Year</label>
          <input type="text" name="name" />
        </div>

        <div>
          <label>Country</label>
          <select>
            <option value="country_name">Finland</option>
          </select>
        </div>

        <div>
          <label>Population of assessment area</label>
          <input type="text" name="name" />
        </div>

        <label>
          <b>U1.1 Settlement type</b>
        </label>
        <label>Share %</label>

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

        <label>
          <b>U1.2 Area</b>
        </label>
        <label>Area km</label>
        <br />

        <div>
          <label>N-S Measurement(km)</label>
          <input type="text" name="ns_measure" />
        </div>
        <div>
          <label>E-W Measurement(km)</label>
          <input type="text" name="ew_measure" />
        </div>

        <label>
          <b>U1.2 Non-residential and freight</b>
        </label>
        <label></label>
        <label>factor, default=1</label>
        <br />
        <div>
          <label> Non-residential road transport</label>
          <label> 2</label>
          <label> 1.0</label>
        </div>

        <div>
          <label>Freight transport by road</label>
          <label>3</label>
          <label>1.0</label>
        </div>

        <div>
          <label>Freight transport by rail</label>
          <label>3</label>
          <label>1.0</label>
        </div>

        <div>
          <label>Freight transport by inland waterways</label>
          <label>2</label>
          <label>0.3</label>
        </div>
        <br />
        <label></label>
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
