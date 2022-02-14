import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import { Header } from "./Header";
import "../css/startpage.css";
import { Settlement } from "./Settlement";

export const StartPage = ({ user, onLogin, onLogout, onCreateAccount }) => {
  const [country, setCountry] = useState("");
  const [year, setYear] = useState(0);
  const [population, setPopulation] = useState(0);
  const [next, setNext] = useState(false);
  const options = [];
  for (let i = 2022; i < 2051; i++) options.push(i);

  const handleSelected = (e) => {
    setCountry(e.target.value);
  };

  const handlePopulation = (e) => {
    setPopulation(Number(e.target.value));
  };

  const handleSelectedYear = (e) => {
    e.preventDefault();
    setYear(Number(e.target.value));
  };

  const startBaseline = () => {
    setNext(true);
  };

  if (next === false) {
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
        <div className="intro_main">
          <section>
            <header className="intro_header">
              <h1 id="title" className="intro_h1">
                <b>Select country for assessment</b>
              </h1>
            </header>

            <form id="impact_start_form" onSubmit={startBaseline}>
              <div className="form-group">
                <label htmlFor="year_selection" className="intro_label">
                  Year
                </label>
                <select
                  className="intro_select"
                  id="year_selection"
                  name="year_selection"
                  onChange={handleSelectedYear}
                  defaultValue="Select year"
                  required
                >
                  <option value="DefaultOption">Select year</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="eu_countries" className="intro_label">
                  Country
                </label>
                <select
                  className="intro_select"
                  id="eu_countries"
                  name="eu_countries"
                  onChange={handleSelected}
                  defaultValue="Select country"
                  required
                >
                  <option value="DefaultOption">Select country</option>
                  <option value="Austria">Austria</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czechia">Czechia</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Greece">Greece</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Italy">Italy</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Malta">Malta</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Norway">Norway</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="population_assessment" className="intro_label">
                  Population of the assessment area
                </label>
                <input
                  type="text"
                  pattern="[0-9]*"
                  id="population_assessment"
                  className="form-input"
                  onChange={handlePopulation}
                  required
                />
              </div>
              <div className="nextButton">
                <Button
                  size="small"
                  type="submit"
                  value="Submit"
                  label="Next &raquo;"
                  primary
                />
              </div>
            </form>
          </section>
        </div>
      </article>
    );
  } else {
    return <Settlement country={country} year={year} population={population} />;
  }
};

StartPage.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

StartPage.defaultProps = {
  user: null,
};
