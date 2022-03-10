import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "../css/startpage.css";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { TransportBaseline } from "./TransportBaseline";

export const StartPage = () => {
  /*  const [country, setCountry] = useState("");
  const [year, setYear] = useState(0);
  const [population, setPopulation] = useState(0);
 */
  const [country, setCountry] = useState("");
  const [year, setYear] = useState(0);
  const [population, setPopulation] = useState(0);
  const [next, setNext] = useState(false);
  const [euCountries, setEuCountries] = useState("");
  const [errorStartPage, setCountriesError] = useState("");

  const options = [];
  for (let i = 2022; i < 2051; i++) options.push(i);

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
  const startBaseline = () => {
    setNext(true);
  };

  useEffect(async () => {
    await axios
      .get("https://ggia-dev.ulno.net/api/v1/countries")
      .then((response) => setEuCountries(response.data.data.countries))
      .catch((error) => {
        setCountriesError({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("Eu countries Response data error---", error);
      });
  }, []);

  if (next === false) {
    return (
      <>
        <article>
          <br />
          <div>
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="ASSESEMENT AREA INFORMATION" />
            </Divider>
          </div>

          <div className="row_start">
            <div className="column_start">
              <header className="intro_header">
                <h1 id="title" className="header_start">
                  Fill in the basic information
                </h1>
              </header>

              <form onSubmit={startBaseline}>
                <div className="form-group">
                  <label htmlFor="year_selection" className="intro_label">
                    Year
                  </label>
                  <select
                    id="year_selection"
                    name="year_selection"
                    className="baseline_select"
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
                    className="baseline_select"
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
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Romania">Romania</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Spain">Spain</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerlans">Switzerland</option>
                    <option value="Uk">Uk</option>
                  </select>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="population_assessment"
                    className="intro_label"
                  >
                    Assessment area population
                  </label>
                  <input
                    type="number"
                    pattern="[0-9]*"
                    id="population_assessment"
                    className="population"
                    min="0"
                    onChange={handlePopulation}
                    required
                  />
                </div>
                <div className="next_u1">
                  <Button
                    size="small"
                    type="submit"
                    value="Submit"
                    label="Next &raquo;"
                    primary="true"
                  />
                </div>
              </form>
            </div>
            <Divider orientation="vertical" flexItem></Divider>

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
                      id="eu_countries"
                      name="eu_countries"
                      defaultValue="Select country"
                      required
                    >
                      <option value="DefaultOption">Select country</option>
                      <option value="Austria">Austria</option>
                    </select>
                  </div>
                  <div className="local_dataset">
                    <Button size="small" label="Next &raquo;" primary="true" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </article>
      </>
    );
  } else {
    return (
      <TransportBaseline
        country={country}
        year={year}
        population={population}
      />
    );
  }
};
