import React, { useState } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Button } from "./Button";
import "../css/u2planner.css";
import { U2planner } from "./U2planner";

/**
 * U1 Planner user input form for baseline
 * @return {}
 */

export const NewResidents = ({
  country,
  year,
  population,
  settlementDistribution,
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  const [metropolitanCenter, setNsMetropolitan] = useState(parseFloat(0));
  const [urban, setNsUrban] = useState(parseFloat(0));
  const [suburban, setNsSubUrban] = useState(parseFloat(0));
  const [town, setNsTown] = useState(parseFloat(0));
  const [rural, setNsRural] = useState(parseFloat(0));
  const [newResidents, setNewResidents] = useState("");
  const [yearStart, setYearStart] = useState(0);
  const [yearFinish, setYearFinish] = useState(0);
  const [baseline, setBaseline] = useState("");
  const [newDevelopment, setNewDevelopment] = useState("");
  const [updateU2charts, setU2charts] = useState(false);
  const [totalNewResidents, setTotalNewResidents] = useState(0.0);
  const optionsNew = [];
  for (let i = 2022; i < 2051; i++) optionsNew.push(i);

  const handleNsMetropolitanCenter = (e) => {
    setNsMetropolitan(parseFloat(e.target.value));
  };
  const handleNsUrban = (e) => {
    setNsUrban(parseFloat(e.target.value));
  };
  const handleNsSuburban = (e) => {
    setNsSubUrban(parseFloat(e.target.value));
  };
  const handleNsTown = (e) => {
    setNsTown(parseFloat(e.target.value));
  };
  const handleNsRural = (e) => {
    setNsRural(parseFloat(e.target.value));
  };
  const handleStartYear = (e) => {
    setYearStart(Number(e.target.value));
  };
  const handleYearFinish = (e) => {
    e.preventDefault();
    setYearFinish(Number(e.target.value));
  };
  const handleNewResident = (e) => {
    e.preventDefault();
    setNewResidents(Number(e.target.value));
  };

  const updateU2Planner = () => {
    const baselineSettlement = {
      country,
      year,
      population,
      settlementDistribution,
    };
    setBaseline(baselineSettlement);

    const newSettlementDistribution = {
      metropolitanCenter,
      urban,
      suburban,
      town,
      rural,
    };
    const newDevelopmentU2 = {
      newResidents,
      yearStart,
      yearFinish,
      newSettlementDistribution,
    };
    setNewDevelopment(newDevelopmentU2);
    setTotalNewResidents(metropolitanCenter + urban + suburban + town + rural);
    setU2charts(true);
  };

  if (updateU2charts === false && totalNewResidents !== 100) {
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
          <form onSubmit={updateU2Planner}>
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
                onChange={handleNewResident}
                required
              />
              <label>
                &nbsp;&nbsp;0 = no new developments to be quantified
              </label>
            </div>
            <div>
              <label htmlFor="start_year"> Start</label>
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
            </div>

            <div>
              <label htmlFor="finish_year"> End</label>
              <select
                className="finish_year"
                id="finish_year"
                name="finish_year"
                onChange={handleYearFinish}
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
            </div>
            <br />
            <label>
              <b>U2.2 Settlement type</b>
            </label>
            <label>
              <b>Existing environment</b>
            </label>
            <label>
              <b>New development (%)</b>
            </label>
            <div>
              <label htmlFor="nsMetropolitan">Metropolitan Area</label>
              <label>{settlementDistribution.metropolitanCenter}</label>
              <input
                type="number"
                step="0.1"
                id="nsMetropolitan"
                min="0"
                max="100"
                onChange={handleNsMetropolitanCenter}
                required
              />
            </div>
            <div>
              <label htmlFor="nsUrban">Urban</label>
              <label>{settlementDistribution.urban}</label>
              <input
                type="number"
                step="0.1"
                id="nsUrban"
                min="0"
                max="100"
                onChange={handleNsUrban}
                required
              />
            </div>
            <div>
              <label htmlFor="nsSuburban"> Suburban</label>
              <label>{settlementDistribution.suburban}</label>
              <input
                type="number"
                id="nsSuburban"
                step="any"
                min="0.0"
                max="100.0"
                onChange={handleNsSuburban}
                required
              />
            </div>
            <div>
              <label htmlFor="nsTown">Town</label>
              <label>{settlementDistribution.town}</label>
              <input
                type="number"
                id="nsTown"
                step="0.1"
                min="0.0"
                max="100.0"
                onChange={handleNsTown}
                required
              />
            </div>
            <div>
              <label htmlFor="nsRural">Rural</label>
              <label>{settlementDistribution.rural}</label>
              <input
                type="number"
                id="nsRural"
                step="0.1"
                min="0"
                max="100"
                onChange={handleNsRural}
                required
              />
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
  } else {
    return (
      <U2planner
        country={country}
        year={year}
        population={population}
        baseline={baseline}
        newDevelopment={newDevelopment}
      />
    );
  }
};

NewResidents.propTypes = {
  settlementDistribution: PropTypes.array.isRequired,
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

NewResidents.defaultProps = {
  user: null,
};