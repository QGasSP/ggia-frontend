import React, { useState } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Button } from "./Button";
import "../css/u2planner.css";

/**
 * U3 user input
 * @return {}
 */

export const U3planner = ({
  year,
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  const [yearStart, setYearStart] = useState(0);
  const [yearFinish, setYearFinish] = useState(0);
  // const [baseline, setBaseline] = useState("");
  //   const [newDevelopment, setNewDevelopment] = useState("");
  //   const [updateU2charts, setU2charts] = useState(false);
  //   const [totalNewResidents, setTotalNewResidents] = useState(0.0);
  const optionsNew = [];
  for (let i = 2022; i < 2051; i++) optionsNew.push(i);
  const handleStartYear = (e) => {
    setYearStart(Number(e.target.value));
  };
  const handleYearFinish = (e) => {
    e.preventDefault();
    setYearFinish(Number(e.target.value));
  };
  //   const updateU2Planner = () => {
  //     const baselineSettlement = {
  //       country,
  //       year,
  //       population,
  //       settlementDistribution,
  //     };
  //     setBaseline(baselineSettlement);
  //     const newSettlementDistribution = {
  //       metropolitanCenter,
  //       urban,
  //       suburban,
  //       town,
  //       rural,
  //     };
  //   const newDevelopmentU2 = {
  //     newResidents,
  //     yearStart,
  //     yearFinish,
  //     newSettlementDistribution,
  //   };
  //     setNewDevelopment(newDevelopmentU2);
  //     setTotalNewResidents(metropolitanCenter + urban + suburban + town + rural);
  //     setU2charts(true);

  // if (updateU2charts === false && totalNewResidents !== 100) {
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
          <h2>U3 POLICY QUANTIFICATION</h2>
        </div>
        {/* <form onSubmit={updateU2Planner}> */}
        <form>
          <div>
            <label>
              <b>U3.1 Passenger mobility (resident and non-residential)</b>
            </label>
            <label>expected change %</label>
            <label>% of the area affected</label>
            <div>
              <label>change in mobility %</label>
              <input />
              <input />
            </div>
            <div>
              <label>Policy period</label>
              <select
              className="start_year"
              id="start_year"
              name="start_year"
              onChange={handleStartYear}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select start year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
            <select
              className="finish_year"
              id="finish_year"
              name="finish_year"
              onChange={handleYearFinish}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select end year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
            </div>
          </div>
          <br />
          <div>
            <label>
              <b>U3.2 Freight transport</b>
            </label>
            <label>expected change %</label>
            <label>% of the area affected</label>
            <div>
              <label>change in freight transport %</label>
              <input />
              <input />
            </div>
            <div>
              <label>Policy period</label>
              <select
              className="start_year"
              id="start_year"
              name="start_year"
              onChange={handleStartYear}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select start year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
            <select
              className="finish_year"
              id="finish_year"
              name="finish_year"
              onChange={handleYearFinish}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select end year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
            </div>
          </div>
          <br />
          <div>
            <label>
              <b>U3.3 Modal split/Passenger transport</b>
            </label>
            <label>withouth policy</label>
            <label>policy target %</label>
            <label>% of the area affeccted</label>
            <div>
              <label>Share for bus</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Share for tram and metro</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Share for train</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Car passenger</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>
                <b>Total</b>
              </label>
              <label></label>
              <label></label>
            </div>
            <label>Policy period</label>
            <select
              className="start_year"
              id="start_year"
              name="start_year"
              onChange={handleStartYear}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select start year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
            <select
              className="finish_year"
              id="finish_year"
              name="finish_year"
              onChange={handleYearFinish}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select end year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div>
            <label>
              <b>U3.4 Modal split/Freight transport</b>
            </label>
            <label>withouth policy</label>
            <label>policy target %</label>
            {/* <label>% of the area affeccted</label> */}
            <div>
              <label>Share for rail</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Share for inland waterways</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Share for road freight</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>
                <b>Total</b>
              </label>
              <label></label>
              <label></label>
            </div>
            <label>Policy period</label>
            <select
              className="start_year"
              id="start_year"
              name="start_year"
              onChange={handleStartYear}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select start year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
            <select
              className="finish_year"
              id="finish_year"
              name="finish_year"
              onChange={handleYearFinish}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select end year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div>
            <label>
              <b>U3.5 Shares of fuel types/Bus transport</b>
            </label>
            <label>withouth policy</label>
            <label>policy target %</label>
            <label>% of the area affeccted</label>
            <div>
              <label>Petroleum products</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Liquified Petroleum Gas (LPG)</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Natural Gas (CNG)</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Electricty</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Diesel</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>
                <b>Total</b>
              </label>
              <label></label>
              <label></label>
            </div>
            <label>Policy period</label>
            <select
              className="start_year"
              id="start_year"
              name="start_year"
              onChange={handleStartYear}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select start year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
            <select
              className="finish_year"
              id="finish_year"
              name="finish_year"
              onChange={handleYearFinish}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select end year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div>
            <label>
              <b>U3.6 Shares of fuel types/Cars</b>
            </label>
            <label>withouth policy</label>
            <label>policy target %</label>
            <label>% of the area affeccted</label>
            <div>
              <label>Liquified Petroleum Gas (LPG)</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Natural Gas (CNG)</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Alternative Energy/biomethane NGV</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Hybrid electric-petrol</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Plug-in hybrid petrol-electric PHEV</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Hybrid diesel-electric</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Plug-in hybrid diesel-electric PHEV</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Hydrogen and fuel cells</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Bioethanol</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Bio-diesel</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Bi-fuel</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Other (unknown)</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Electricity BEV</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Petrol, according to country selection</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Diesel, according to country selection</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>
                <b>Total</b>
              </label>
              <label></label>
              <label></label>
            </div>
            <label>Policy period</label>
            <select
              className="start_year"
              id="start_year"
              name="start_year"
              onChange={handleStartYear}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select start year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
            <select
              className="finish_year"
              id="finish_year"
              name="finish_year"
              onChange={handleYearFinish}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select end year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div>
            <label>
              <b>U3.7 Electricity for transport</b>
            </label>
            <label>gCO2e/kWh without policy</label>
            <label>policy target %</label>
            <label>% of the area affected</label>
            <div>
              <label>Increase in the share of renewables</label>
              <input />
              <input />
            </div>
            <div>
              <label>Policy period</label>
              <select
              className="start_year"
              id="start_year"
              name="start_year"
              onChange={handleStartYear}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select start year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
            <select
              className="finish_year"
              id="finish_year"
              name="finish_year"
              onChange={handleYearFinish}
              defaultValue="2022"
              required
            >
              <option value="DefaultOption">Select end year</option>
              {optionsNew.map((option) => (
                <option key={option} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
            </div>
          </div>

          <div>
            <Button
              size="small"
              type="submit"
              value="Submit"
              label="Next"
              primary
            />
          </div>
        </form>
      </section>
    </article>
  );
};

U3planner.propTypes = {
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

U3planner.defaultProps = {
  user: null,
};
