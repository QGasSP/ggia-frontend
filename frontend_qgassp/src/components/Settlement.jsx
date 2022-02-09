import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Button } from "./Button";
import "../css/u1planner.css";
import { U1planner } from "./U1planner";

/**
 * U1 Planner baseline user input form
 * @return {}
 */

export const Settlement = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  country,
  year,
  population,
}) => {
  const [metropolitanCenter, setMetropolitan] = useState(parseFloat(0));
  const [urban, setUrban] = useState(parseFloat(0));
  const [suburban, setSubUrban] = useState(parseFloat(0));
  const [town, setTown] = useState(parseFloat(0));
  const [rural, setRural] = useState(parseFloat(0));
  const [total, setTotal] = useState(
    metropolitanCenter + urban + suburban + town + rural
  );
  const [nextEmissions, setNextEmissions] = useState(false);

  useEffect(() => {
    setTotal(
      parseFloat(metropolitanCenter) +
        parseFloat(urban) +
        parseFloat(suburban) +
        parseFloat(town) +
        parseFloat(rural)
    );
  }, []);

  const handleMetropolitanCenter = (e) => {
    e.preventDefault();
    // const newMC = parseFloat(parseFloat(e.target.value).toFixed(1));
    setMetropolitan(parseFloat(e.target.value));
  };
  const handleUrban = (e) => {
    e.preventDefault();
    setUrban(parseFloat(e.target.value));
  };
  const handleSuburban = (e) => {
    e.preventDefault();
    setSubUrban(parseFloat(e.target.value));
  };
  const handleTown = (e) => {
    e.preventDefault();
    setTown(parseFloat(e.target.value));
  };
  const handleRural = (e) => {
    e.preventDefault();
    setRural(parseFloat(e.target.value));
  };

  const setSettlementType = () => {
    setTotal(metropolitanCenter + urban + suburban + town + rural);
    setNextEmissions(true);
  };

  if (nextEmissions === false && (total > 100 || total < 100)) {
    return (
      <div>
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
            <div className="settlement_main">
              <div>
                <h2>U1 PLANNER : BASELINE </h2>
              </div>

              <form id="form_settlement_type" onSubmit={setSettlementType}>
                <div className="settlement_headers">
                  <label className="settle_label">
                    <b>U1.1 Settlement type </b>
                  </label>
                  <label className="settle_label">
                    <b>Share (%)</b>{" "}
                  </label>
                  {/* <label>Total={total}</label> */}
                </div>

                <div>
                  <label htmlFor="metropolitan" className="settle_label">
                    Metropolitan center
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    id="metropolitan"
                    min="0"
                    max="100"
                    /*  defaultValue={metropolitanCenter} */
                    onChange={handleMetropolitanCenter}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="urban" className="settle_label">
                    Urban
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    id="urban"
                    min="0"
                    max="100"
                    /*   defaultValue={urban} */
                    onChange={handleUrban}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="suburban" className="settle_label">
                    {" "}
                    Suburban
                  </label>
                  <input
                    type="number"
                    id="suburban"
                    step="any"
                    min="0.0"
                    max="100.0"
                    /*   defaultValue={suburban} */
                    onChange={handleSuburban}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="town" className="settle_label">
                    Town
                  </label>
                  <input
                    type="number"
                    id="town"
                    step="0.1"
                    min="0.0"
                    max="100.0"
                    // defaultValue={town}
                    onChange={handleTown}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="rural" className="settle_label">
                    Rural
                  </label>
                  <input
                    type="number"
                    id="rural"
                    step="0.1"
                    min="0"
                    max="100"
                    /* defaultValue={rural} */
                    onChange={handleRural}
                    required
                  />
                </div>

                <div className="nextU1Button">
                  <Button
                    size="small"
                    type="submit"
                    value="Submit"
                    label="Next"
                    primary
                  />
                </div>
              </form>
            </div>

            <br></br>
            {/*  <div className="backButton">
            <Button
              size="large"
              type="submit"
              value="Submit"
              label="Back"
              primary
            />
          </div> */}
          </section>
        </article>
      </div>
    );
  } else {
    return (
      <U1planner
        country={country}
        year={year}
        population={population}
        metropolitanCenter={metropolitanCenter}
        urban={urban}
        suburban={suburban}
        town={town}
        rural={rural}
      />
    );
  }
};

Settlement.propTypes = {
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Settlement.defaultProps = {
  user: null,
};
