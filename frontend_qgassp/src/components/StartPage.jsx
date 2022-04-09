import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "../css/startpage.css";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { useStorageInt, useStorageString } from "../reducers/useStorage";
import urlPrefix from "../Config";
import Tooltip from "@mui/material/Tooltip";

export const StartPage = () => {
  /*  const toggleState = localStorage.getItem("toggleState"); */
  const [country, setCountry] = useStorageString("country", "");
  const [year, setYear] = useStorageInt("year", 0);
  const [population, setPopulation] = useStorageInt("population", 0);
  const [nextModule, setNextModule] = useState(false);
  const [allFields, setFillFields] = useState(false);
  const [euCountries, setEuCountries] = useState([]);
  const [errorStartPage, setCountriesError] = useState("");

  const options = [];
  for (let i = 2022; i < 2051; i++) options.push(i);

  useEffect(() => {
    localStorage.setItem("nextModule", nextModule);
  }, [nextModule]);

  const handleSelected = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };

  const handlePopulation = (e) => {
    e.preventDefault();
    setPopulation(Number(e.target.value));
  };

  const handleSelectedYear = (e) => {
    e.preventDefault();
    setYear(Number(e.target.value));
  };
  const clearLocalStorage = (e) => {
    e.preventDefault();
    setNextModule(false);
    setFillFields(false);
    window.localStorage.clear();
    setCountry("");
    setPopulation(0);
    setYear(0);
  };

  const startBaseline = () => {
    if (population > 0 && country !== "" && year > 0) {
      setNextModule(true);
    } else {
      setFillFields(true);
    }
  };

  useEffect(async () => {
    axios
      .get(urlPrefix + "/api/v1/countries")
      .then((response) => setEuCountries(response.data.data.countries))
      .catch((error) => {
        setCountriesError({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error(
          "Eu countries Response data error - url " + urlPrefix + "---",
          errorStartPage
        );
      });
  }, []);

  return (
    <>
      <article>
        <br />
        <div>
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="ASSESSMENT AREA INFORMATION" />
          </Divider>
        </div>

        <div className="row_start">
          <div className="column_start">
            <header className="intro_header">
              <h1 id="title" className="header_start">
                Please fill in the required basic information
              </h1>
            </header>
            <Alert severity="info">
              Provide the basic information on the assessment area.
            </Alert>
            {nextModule && (
              <Alert severity="success">
                You can proceed to either Transport, Land-use change or
                Consumption-based module
              </Alert>
            )}

            {allFields && nextModule === false && (
              <Alert severity="warning">
                Please fill the year, population and country and save
              </Alert>
            )}
            <Tooltip title="Select the first year of the assessment period.">
              <div className="form-group">
                <label htmlFor="year" className="intro_label">
                  Year
                </label>
                <select
                  id="year"
                  name="year"
                  className="baseline_select"
                  onChange={handleSelectedYear}
                  value={year}
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
            </Tooltip>
            <Tooltip title="Select the location of the assessment area.">
              <div className="form-group">
                <label htmlFor="country" className="intro_label">
                  Country
                </label>
                <select
                  className="baseline_select"
                  id="country"
                  name="country"
                  onChange={handleSelected}
                  value={country}
                  defaultValue="Select country"
                  required
                >
                  <option value="DefaultOption">Select country</option>
                  {euCountries.map((country) => (
                    <option key={country} value={country}>
                      {country}{" "}
                    </option>
                  ))}
                </select>
              </div>
            </Tooltip>
            <Tooltip title="Insert the total population of the assessment area in the end of the year that You selected above.">
              <div className="form-group">
                <label htmlFor="population_assessment" className="intro_label">
                  Population
                </label>
                <input
                  type="number"
                  pattern="[0-9]*"
                  id="population_assessment"
                  className="population"
                  placeholder={population}
                  min="0"
                  onChange={handlePopulation}
                  required
                />
              </div>
            </Tooltip>
            <div className="btns-sections">
              <div className="next_u1 btn-start">
                <Button
                  size="small"
                  id="baseline_save"
                  label="Save"
                  onClick={startBaseline}
                  primary="true"
                />
              </div>
              <div className="reset_button btn-start">
                <Button
                  size="small"
                  onClick={clearLocalStorage}
                  label="Reset"
                  primary="true"
                />
              </div>
            </div>
          </div>
          <Divider orientation="vertical" flexItem></Divider>
          <div className="column_start"></div>

          {/*  <Divider orientation="vertical" flexItem></Divider>
          <div className="column_start">
            <header className="intro_header">
              <h1 id="title" className="header_start">
                Create local data-set
              </h1>
            </header>
            <div>
              <form>
                <div className="form-group">
                  <label htmlFor="eu_countries" className="intro_label">
                    Country&apos;s local data-set
                  </label>
                  <select
                    className="baseline_select"
                    id="eu_countries_dataset"
                    name="eu_countries_dataset"
                    defaultValue="Select country"
                    required
                  >
                    <option value="DefaultOption">Select country</option>
                    {euCountries.map((country) => (
                      <option key={country} value={country}>
                        {country}{" "}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="local_dataset">
                  <Button size="small" label="Set baseline" primary="true" />
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </article>
    </>
  );
};
