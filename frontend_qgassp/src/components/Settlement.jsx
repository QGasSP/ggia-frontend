import React, { useState} from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Button } from "./Button";
import "../css/u1planner.css";
import { U1planner } from "./U1planner";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

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
  const [settlementDistribution, setSettlementDistribution] = useState("");

  const navigate = useNavigate();

  const handleMetropolitanCenter = (e) => {
    e.preventDefault();
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
    const settlementDist = {
      metropolitanCenter,
      urban,
      suburban,
      town,
      rural,
    };
    setSettlementDistribution(settlementDist);
    setTotal(metropolitanCenter + urban + suburban + town + rural);
    setNextEmissions(true);
  };

  if (nextEmissions === false) {
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
          <div className="headerSettlement">
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="U1 PLANNER USER INPUT: BASELINE" />
            </Divider>
          </div>
          {/*     <label className="countryData">{country}({year})-{population}</label> */}
          <div className="settlement_main">
            <section>
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
                    value={metropolitanCenter}
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
                    value={urban}
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
                    value={suburban}
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
                    value={town}
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
                    value={rural}
                    onChange={handleRural}
                    required
                  />
                </div>

                <div className="backStart">
                  <Button
                    size="small"
                    value="backStartPage"
                    onClick={() => navigate("/", { replace: true })}
                    label="&laquo; Previous"
                    secondary
                  />
                </div>

                <div className="nextU1Button">
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
      </div>
    );
  } else {
    return (
      <U1planner
        country={country}
        year={year}
        population={population}
        settlementDistribution={settlementDistribution}
        total={total}
        nextEmissions={nextEmissions}
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
