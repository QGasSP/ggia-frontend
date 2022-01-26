import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Linechart } from "./Linechart";
import { LineLegend } from "./LineLegend";
import "../css/u2planner.css";
import axios from "axios";

/**
 * U1 Planner user input form for baseline
 * @return {}
 */

export const U2planner = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  country,
  year,
  population,
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
          <h2>U2 NEW DEVELOPMENT</h2>
        </div>
        <form>
          <label>
            <b>U2.1 New residents</b>
          </label>
          <div>
            <label htmlFor="new_residents">
              Number of new residents moving in
            </label>
            <input type="text" id="new_residents" />{" "}
            <label>0 = no new developments to be quantified</label>
          </div>
          <div>
            <label htmlFor="start_year_selection"> Start</label>
            <select id="start_year_selection" name="start_year_selection">
              <optgroup label="Select year"></optgroup>
              <option value="year">2021</option>
              <option value="year">2022</option>
              <option value="year">2023</option>
              <option value="year">2024</option>
              <option value="year">2024</option>
              <option value="year">2025</option>
              <option value="year">2026</option>
              <option value="year">2027</option>
              <option value="year">2028</option>
              <option value="year">2029</option>
              <option value="year">2030</option>
              <option value="year">2031</option>
              <option value="year">2032</option>
              <option value="year">2033</option>
              <option value="year">2034</option>
              <option value="year">2035</option>
              <option value="year">2036</option>
              <option value="year">2037</option>
              <option value="year">2038</option>
              <option value="year">2039</option>
              <option value="year">2040</option>
              <option value="year">2041</option>
              <option value="year">2042</option>
              <option value="year">2043</option>
              <option value="year">2044</option>
              <option value="year">2045</option>
              <option value="year">2046</option>
              <option value="year">2047</option>
              <option value="year">2049</option>
              <option value="year">2050</option>
            </select>
          </div>

          <div>
            <label htmlFor="end_year_selection"> End</label>
            <select id="end_year_selection" name="end_year_selection">
              <optgroup label="Select year"></optgroup>
              <option value="year">2021</option>
              <option value="year">2022</option>
              <option value="year">2023</option>
              <option value="year">2024</option>
              <option value="year">2024</option>
              <option value="year">2025</option>
              <option value="year">2026</option>
              <option value="year">2027</option>
              <option value="year">2028</option>
              <option value="year">2029</option>
              <option value="year">2030</option>
              <option value="year">2031</option>
              <option value="year">2032</option>
              <option value="year">2033</option>
              <option value="year">2034</option>
              <option value="year">2035</option>
              <option value="year">2036</option>
              <option value="year">2037</option>
              <option value="year">2038</option>
              <option value="year">2039</option>
              <option value="year">2040</option>
              <option value="year">2041</option>
              <option value="year">2042</option>
              <option value="year">2043</option>
              <option value="year">2044</option>
              <option value="year">2045</option>
              <option value="year">2046</option>
              <option value="year">2047</option>
              <option value="year">2049</option>
              <option value="year">2050</option>
            </select>
          </div>
          <br />
          <label>
            <b>U2.2 Settlement type</b>
          </label>
          <label>Existing environment</label>
          <label>New development</label>
          <div>
            {/* I just placed the first label there as placeholder, but it needs to be the user inputs from U1 */}
            <label htmlFor="city">Metropolitan Area</label>
            <label htmlFor="city">Metropolitan Area</label>
            <input type="text" id="city" />
          </div>
          <div>
            {/* I just placed the first label there as placeholder, but it needs to be the user inputs from U1 */}
            <label htmlFor="city">Urban</label>
            <label htmlFor="city">Urban</label>
            <input type="text" id="city" />
          </div>
          <div>
            {/* I just placed the first label there as placeholder, but it needs to be the user inputs from U1 */}
            <label htmlFor="suburban"> Suburban</label>
            <label htmlFor="suburban"> Suburban</label>
            <input type="text" id="suburban" />
          </div>
          <div>
            {/* I just placed the first label there as placeholder, but it needs to be the user inputs from U1 */}
            <label htmlFor="town">Town</label>
            <label htmlFor="town">Town</label>
            <input type="text" id="town" />
          </div>
          <div>
            {/* I just placed the first label there as placeholder, but it needs to be the user inputs from U1 */}
            <label htmlFor="rural">Rural</label>
            <label htmlFor="rural">Rural</label>
            <input type="text" id="rural" />
          </div>
          <br />
          <Linechart data={data} />
          <LineLegend />
        </form>
      </section>
    </article>
  );
};

U2planner.propTypes = {
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

U2planner.defaultProps = {
  user: null,
};
