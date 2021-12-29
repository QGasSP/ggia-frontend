import React from "react";
import PropTypes from "prop-types";

import { Header } from "./Header";
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
      <h2>U1 PLANNER USER INPUT 1: BASELINE</h2>
      <form>
        <label>Year</label>
        <input type="text" name="name" />
        <br />

        <label>Country</label>
        <select>
          <option value="country_name">Finland</option>
        </select>
        <br />

        <label>Population of assessmnet area</label>
        <input type="text" name="name" />
        <br />

        <label>
          <b>U1.1 Settlement type</b>
        </label>
        <br />
        <label> City</label>
        <br />
        <label> Town</label>
        <br />
        <label>Suburban</label>
        <br />
        <label> Rural</label>
        <br />
        <label>
          {" "}
          <b>U1.2 Area</b>
        </label>
        <br />

        <label>
          {" "}
          <b>Area</b>
        </label>
        <br />
        <label>N-S Measurement(km)</label>
        <br />
        <label>E-W Measurement(km)</label>
        <br />

        <label>
          {" "}
          <b>U1.2 Non-residential and freight</b>
        </label>
        <br />
        <label> Non-residential road transport</label>
        <br />
        <label>Freight transport by road</label>
        <br />
        <label>Freight transport by rail</label>
        <br />
        <label>Freight transport by inland waterways</label>
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
