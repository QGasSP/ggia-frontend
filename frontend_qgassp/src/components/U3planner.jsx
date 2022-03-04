import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Button } from "./Button";
import "../css/u3planner.css";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import axios from "axios";

/**
 * U3 user input
 * @return {}
 */


export const U3planner = ({
  baseline,
  newDevelopment,
  policyQuantification,
  // emissions,
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  const [yearStart, setYearStart] = useState(0);
  const [yearFinish, setYearFinish] = useState(0);
  const [nextU3policies, setU3policies] = useState(false);
  const [emission, setEmissionData] = useState("");
  const [errorU3, setU3Error] = useState("");
  const [shares, setModalPassShares] = useState(0);
  const [expectedPassChange, setExpectedPassChange] = useState(0);
  const [affectedPassArea, setAffectedPassArea] = useState(0);
  const [expectedFreChange, setExpectedFreChange] = useState(0);
  const [passTransPolicyTarget, setPassTransPolicyTarget] = useState(0);
  const [freTransPolicyTarget, setFreTransPolicyTarget] = useState(0);
  const [expectedChange, setExpectedChange] = useState(0);
  const [affectedArea, setAffectedArea] = useState(0);
  const [passengerMob, setPassengerMobility] = useState("");
  const [freightTrans, setFreightTransport] = useState("");
  const [modalSplitPass, setModalSplitPass] = useState("");
  const [modalFreShares, setModalFreightShares] = useState("");
  const [modalSplitFre, setModalSplitFre] = useState("");
  const [bus, setBus] = useState(0);
  const [metro, setMetro] = useState(0);
  const [tram, setTram] = useState(0);
  const [train, setTrain] = useState(0);
  const [car, setCar] = useState(0);
  const [affectedPopulation, setAffectedPopulation] = useState(0);
  const [railTransport, setRailTransport] = useState(0);
  const [waterwaysTransport, setWaterwaysTransport] = useState(0);
  const [roadTransport, setRoadTransport] = useState(0);
  const [policyQuant, setPolicyQuantification] = useState("");
  const navigate = useNavigate();

  const optionsNew = [];
  for (let i = 2022; i < 2051; i++) optionsNew.push(i);
  const handleStartYear = (e) => {
    setYearStart(Number(e.target.value));
  };
  const handleYearFinish = (e) => {
    e.preventDefault();
    setYearFinish(Number(e.target.value));
  };
  const handleExpectedPassChange = (e) => {
    e.preventDefault();
    setExpectedPassChange(Number(e.target.value));
  };
  const handleAffectedPassArea = (e) => {
    e.preventDefault();
    setAffectedPassArea(Number(e.target.value));
  };
  const handleExpectedFreChange = (e) => {
    e.preventDefault();
    setExpectedFreChange(Number(e.target.value));
  };
  const handlePassTransPolicyTarget = (e) => {
    e.preventDefault();
    setPassTransPolicyTarget(Number(e.target.value));
  };
  const handleFreTransPolicyTarget = (e) => {
    e.preventDefault();
    setFreTransPolicyTarget(Number(e.target.value));
  };
  const handleBus = (e) => {
    e.preventDefault();
    setBus(Number(e.target.value));
  };
  const handleMetro = (e) => {
    e.preventDefault();
    setMetro(Number(e.target.value));
  };
  const handleTram = (e) => {
    e.preventDefault();
    setTram(Number(e.target.value));
  };
  const handleTrain = (e) => {
    e.preventDefault();
    setTrain(Number(e.target.value));
  };
  const handleCar = (e) => {
    e.preventDefault();
    setCar(Number(e.target.value));
  };
  const handleAffectedPopulation = (e) => {
    e.preventDefault();
    setAffectedPopulation(Number(e.target.value));
  };
  const handleRailTransport = (e) => {
    e.preventDefault();
    setRailTransport(Number(e.target.value));
  };
  const handleWaterwaysTransport = (e) => {
    e.preventDefault();
    setWaterwaysTransport(Number(e.target.value));
  };
  const handleRoadTransport = (e) => {
    e.preventDefault();
    setRoadTransport(Number(e.target.value));
  };

  const createPolicyQuantification = () => {
    const passengerMob = {
      expectedChange,
      affectedArea,
      yearStart,
      yearFinish,
    };
    setPassengerMobility(passengerMob);

    const freightTrans = {
      expectedChange,
      yearStart,
      yearFinish,
    };
    setFreightTransport(freightTrans);

    const modalPassShares = {
      bus,
      metro,
      tram,
      train,
      car,
    };
    setModalPassShares(modalPassShares);

    const modalSplitPass = {
      shares,
      affectedPopulation,
      yearStart,
      yearFinish,
    };
    setModalSplitPass(modalSplitPass);

    const modalFreShares = {
      railTransport,
      waterwaysTransport,
      roadTransport,
    };
    setModalFreightShares(modalFreShares);

    const modalSplitFre = {
      shares,
      yearStart,
      yearFinish,
    };
    setModalSplitFre(modalSplitFre);

    const policyQuant = {
      passengerMob,
      freightTrans,
      modalSplitPass,
      modalSplitFre,
    };
    setPolicyQuantification(policyQuant);
  };
  const raw = { baseline };
  const headers = {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  axios
    .post(
      "https://ggia-dev.ulno.net/api/v1/calculate/transport/baseline",
      raw,
      headers
    )
    .then((response) => setResponse(response.data))
    .catch((error) => {
      setU3Error({ errorMessage: error.message });
      // eslint-disable-next-line no-console
      console.error("There was an error!", error);
    });
  const setResponse = (response) => {
    setEmissionData(response.data.baseline.emissions);
    // setProjections(response.data.baseline.projections);
  };

  // const policyQuant = {
  //   passengerMob,
  //   freightTrans,
  //   modalSplitPass,
  //   modalSplitFre,
  // };
  // setPolicyQuantification(policyQuant);
  // setPolicyQuantification({policyQuant});

  const gotoU3policies = () => {
    setU3policies(true);
  };

  // const setResponse = (response) => {
  //   setEmissionData(response.data.baseline.emissions);
  //   setProjections(response.data.baseline.projections);
  // };

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
      <div className="headerSettlement">
        <Divider textAlign="left" flexItem>
          {" "}
          <Chip label="U3 POLICY QUANTIFICATION" />
        </Divider>
      </div>

      <section>
        <form onSubmit={createPolicyQuantification}>
          <label>
            <b>U3.1 Passenger mobility (resident and non-residential)</b>
          </label>
          <label>expected change %</label>
          <label></label>
          <label>% of the area affected</label>
          <div>
            <label>change in mobility %</label>
            <input
              id="inputspace"
              type="number"
              step="0.1"
              // id="pass_expected_change"
              placeholder="0"
              onChange={handleExpectedPassChange}
              required
            />
            <label></label>
            <input
              type="number"
              step="0.1"
              id="pass_affected_area"
              placeholder="0"
              min="0"
              max="100"
              onChange={handleAffectedPassArea}
              required
            />
          </div>
          <div>
            <label>Policy period</label>
            <div id="divspace">
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
            <label></label>
            <label>% of the area affected</label>
            <div>
              <label>change in freight transport %</label>
              <input
                id="inputspace"
                type="number"
                step="0.1"
                // id="freight_expected_change"
                placeholder="0"
                onChange={handleExpectedFreChange}
                required
              />
              <label></label>
              {/* <input
                type="number"
                step="0.1"
                id="freight_affected_area"
                placeholder="0.00"
                min="0"
                max="100"
                onChange={handleAffectedFreArea}
                required
              /> */}
            </div>
            <div>
              <label>Policy period</label>
              <div id="divspace">
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
          </div>
          <br />
          <div>
            <label>
              <b>U3.3 Modal split/Passenger transport</b>
            </label>
            <label>without policy</label>
            <label>policy target %</label>
            <label>% of the area affeccted</label>
            <div>
              <label>Share for bus</label>
              <label>{emission.bus}</label>
              <input
                id="inputspace"
                type="number"
                step="0.1"
                // id="pass_policy_target"
                placeholder="0"
                min="0"
                max="100"
                onChange={handlePassTransPolicyTarget}
                required
              />
              <input
                type="number"
                step="0.1"
                id="pass_affected_area"
                placeholder="0"
                min="0"
                max="100"
                onChange={handleAffectedPassArea}
                required
              />
            </div>
            <div>
              <label>Share for metro</label>
              <label>{emission.metro}</label>
              <input
                type="number"
                step="0.1"
                id="pass_policy_target"
                placeholder="0"
                min="0"
                max="100"
                onChange={handlePassTransPolicyTarget}
                required
              />
            </div>
            <div>
              <label>Share for tram</label>
              <label>{emission.tram}</label>
              <input
                type="number"
                step="0.1"
                id="pass_policy_target"
                placeholder="0"
                min="0"
                max="100"
                onChange={handlePassTransPolicyTarget}
                required
              />
            </div>
            <div>
              <label>Share for train</label>
              <label>{emission.train}</label>
              <input
                type="number"
                step="0.1"
                id="pass_policy_target"
                placeholder="0"
                min="0"
                max="100"
                onChange={handlePassTransPolicyTarget}
                required
              />
            </div>
            <div>
              <label>Car passenger</label>
              <label>{emission.car}</label>
              <label>This is calculated automatically</label>
            </div>
            {/* <div>
              <label>
                <b>Total</b>
              </label>
              <label></label>
              <label>This is calculated automatically</label>
            </div> */}
            <div>
              <label>Policy period</label>
              <div id="divspace">
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
              <label>{emission.rail_transport}</label>
              <input
                type="number"
                step="0.1"
                id="fre_policy_target"
                placeholder="0"
                min="0"
                max="100"
                onChange={handleFreTransPolicyTarget}
                required
              />
            </div>
            <div>
              <label>Share for inland waterways</label>
              <label>{emission.waterways_transport}</label>
              <input
                type="number"
                step="0.1"
                id="fre_policy_target"
                placeholder="0"
                min="0"
                max="100"
                onChange={handleFreTransPolicyTarget}
                required
              />
            </div>
            <div>
              <label>Share for road freight</label>
              <label>{emission.road_transport}</label>
              <label>This is calculated automatically</label>
            </div>
            {/* <div>
              <label>
                <b>Total</b>
              </label>
              <label></label>
              <label></label>
            </div> */}
            <div>
              <label>Policy period</label>
              <div id="divspace">
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
          </div>
          {/* <br />
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
              <input id="inputspace" />
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
            <div>
              <label>Policy period</label>
              <div id="divspace">
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
              <input id="inputspace" />
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
            <div>
              <label>Policy period</label>
              <div id="divspace">
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
              <input id="inputspace" />
              <input id="inputspace" />
              <input />
            </div>
            <div>
              <label>Policy period</label>
              <div id="divspace">
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
          </div> */}
          <br />
          <div>
            <div className="backButton">
              <Button
                size="small"
                value="backNewResidents"
                onClick={() => navigate("/newresidents", { replace: true })}
                label="&laquo; Previous"
                secondary
              />
            </div>
            <div className="nextButtonNew">
              <Button
                size="small"
                value="nextU3"
                onClick={gotoU3policies}
                // onClick={() => navigate("/u3policies", { replace: true })}
                label="Next &raquo;"
                primary
              />
            </div>
          </div>
        </form>
      </section>
    </article>
  );
};

U3planner.propTypes = {
  policyQuantification: PropTypes.object.isRequired,
  baseline: PropTypes.object.isRequired,
  newDevelopment: PropTypes.object.isRequired,
  country: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

U3planner.defaultProps = {
  user: null,
};
