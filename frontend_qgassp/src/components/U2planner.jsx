import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Linechart } from "./Linechart";
import { LineLegend } from "./LineLegend";
import axios from "axios";
import "../css/u2planner.css";

/**
 * U1 Planner user input form for baseline
 * @return {}
 */

export const U2planner = ({
  baseline,
  newDevelopment,
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  const [errorU2, setU2Error] = useState("");
  const [responseData, setResponseData] = useState("");

  useEffect(async () => {
    const rawData = { baseline, newDevelopment };
    const headers = {
      "Content-type": "application/json",
    };
    axios
      .post(
        "https://ggia-dev.ulno.net//api/v1/calculate/transport",
        rawData,
        headers
      )
      .then((response) => setU2Response(response))
      .catch((error) => {
        setU2Error({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("U2 Response data error---", errorU2);
      });
  }, []);

  const setU2Response = (response) => {
    setResponseData(response.data);
  };
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
          <h3>{responseData}</h3>
        </div>
        <form>
          <label>
            <b>U2.1 New residents</b>
          </label>
          <div>
            <label htmlFor="new_residents">
              Number of new residents moving in
            </label>
            <input
              type="text"
              pattern="[0-9]*"
              id="new_residents"
              value={newDevelopment.newResidents}
              readOnly
            />
            <label>0 = no new developments to be quantified</label>
          </div>
          <div>
            <label htmlFor="start_year_selection"> Start</label>
            <select
              id="start_year_selection"
              name="start_year_selection"
              defaultValue={newDevelopment.yearStart}
              readOnly
            >
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
            <select
              id="end_year_selection"
              name="end_year_selection"
              defaultValue={newDevelopment.yearFinish}
              readOnly
            >
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
          <label>
            <b>Existing environment</b>
          </label>
          <label>
            <b>New development</b>
          </label>
          <div>
            {/* I just placed the first label there as placeholder, but it needs to be the user inputs from U1 */}
            <label htmlFor="city">Metropolitan Area</label>
            <label htmlFor="city">Metropolitan Area</label>
            <input
              type="number"
              step="0.1"
              id="nsMetropolitan"
              min="0"
              max="100"
              value={
                newDevelopment.newSettlementDistribution.metropolitanCenter
              }
              readOnly
            />
          </div>
          <div>
            {/* I just placed the first label there as placeholder, but it needs to be the user inputs from U1 */}
            <label htmlFor="city">Urban</label>
            <label htmlFor="city">Urban</label>
            <input
              type="number"
              step="0.1"
              id="nsUrban"
              min="0"
              max="100"
              value={newDevelopment.newSettlementDistribution.urban}
              readOnly
            />
          </div>
          <div>
            {/* I just placed the first label there as placeholder, but it needs to be the user inputs from U1 */}
            <label htmlFor="suburban"> Suburban</label>
            <label htmlFor="suburban"> Suburban</label>
            <input
              type="number"
              id="nsSuburban"
              step="any"
              min="0.0"
              max="100.0"
              value={newDevelopment.newSettlementDistribution.suburban}
              readOnly
            />
          </div>
          <div>
            {/* I just placed the first label there as placeholder, but it needs to be the user inputs from U1 */}
            <label htmlFor="town">Town</label>
            <label htmlFor="town">Town</label>
            <input
              type="number"
              id="nsTown"
              step="0.1"
              min="0.0"
              max="100.0"
              value={newDevelopment.newSettlementDistribution.town}
              readOnly
            />
          </div>
          <div>
            {/* I just placed the first label there as placeholder, but it needs to be the user inputs from U1 */}
            <label htmlFor="rural">Rural</label>
            <label htmlFor="rural">Rural</label>
            <input
              type="number"
              id="nsRural"
              step="0.1"
              min="0"
              max="100"
              value={newDevelopment.newSettlementDistribution.rural}
              readOnly
            />
          </div>
          <br />
          <Linechart />
          <LineLegend />
        </form>
      </section>
    </article>
  );
};

U2planner.propTypes = {
  baseline: PropTypes.array.isRequired,
  newDevelopment: PropTypes.array.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

U2planner.defaultProps = {
  user: null,
};
