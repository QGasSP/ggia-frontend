import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/u2planner.css";
import { U2planner } from "./U2planner";
import { useNavigate } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

/**
 * U1 Planner user input form for baseline
 * @return {}
 */

export const NewResidents = ({
  settlementDistribution,
  baseline,
 
}) => {
  const [nsMetropolitanCenter, setNsMetropolitan] = useState(parseFloat(0));
  const [nsUrban, setNsUrban] = useState(parseFloat(0));
  const [nsSuburban, setNsSubUrban] = useState(parseFloat(0));
  const [nsTown, setNsTown] = useState(parseFloat(0));
  const [nsRural, setNsRural] = useState(parseFloat(0));
  const [newResidents, setNewResidents] = useState("");
  const [yearStart, setYearStart] = useState(0);
  const [yearFinish, setYearFinish] = useState(0);

  const [newDevelopment, setNewDevelopment] = useState({});
  const [updateU2charts, setU2charts] = useState(false);
  const [totalNewResidents, setTotalNewResidents] = useState(0.0);
  const navigate = useNavigate();
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
    setYearFinish(Number(e.target.value));
  };
  const handleNewResident = (e) => {
    setNewResidents(Number(e.target.value));
  };

  const updateU2Planner = () => {
    const newSettlementDistribution = {
      metropolitanCenter:nsMetropolitanCenter,
      urban:nsUrban,
      suburban:nsSuburban,
      town:nsTown,
      rural:nsRural,
    };
    const newDevelopmentU2 = {
      newResidents,
      yearStart,
      yearFinish,
      newSettlementDistribution,
    };
    setNewDevelopment(newDevelopmentU2);
   // setTotalNewResidents(metropolitanCenter + urban + suburban + town + rural);
    setU2charts(true);
  };

  if (updateU2charts === false && totalNewResidents !== 100) {
    return (
      <article>
        <div className="headerSettlement">
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="U2 NEW DEVELOPMENT INPUT" />
          </Divider>
        </div>

        <section>
          {/*    <div>
            <h2>U2 NEW DEVELOPMENT</h2>
          </div> */}
          <div className="newResidentDiv">
            <form onSubmit={updateU2Planner}>
              <label>
                <b>New residents</b>
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
                <b>Settlement type</b>
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
              {/* <div className="backButtonNew">
                <Button
                  size="small"
                  value="backProjections"
                  onClick={() => navigate("/u1planner", { replace: true })}
                  label="&laquo; Previous"
                  secondary
                />
              </div> */}

              <div className="nextButtonNew">
                <Button
                  size="small"
                  type="submit"
                  value="Submit"
                  label="Next &raquo;"
                  primary
                />
              </div>
            </form>
          </div>
        </section>
      </article>
    );
  } else {
    return (
      <U2planner
        baseline={baseline.baseline}
        newDevelopment={newDevelopment}
        settlementDistribution={settlementDistribution}
      />
    );
  }
};

NewResidents.propTypes = {
  baseline: PropTypes.object.isRequired,
  settlementDistribution: PropTypes.object.isRequired, 
};
