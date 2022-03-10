import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/u3planner.css";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import axios from "axios";
import { U3policies } from "./U3policies";

/**
 * U3 planner component for user inputs for policy quantification
 * @return {}
 */

export const U3planner = ({ emission, baseline, newDevelopment }) => {
  const [policyQuantification, setPolicyQuantification] = useState("");
  const [yearStart, setYearStart] = useState(0);
  const [yearFinish, setYearFinish] = useState(0);
  const [nextU3policies, setU3policies] = useState(false);
  const [errorU3, setU3Error] = useState("");
  const [modalPassShares, setModalPassShares] = useState("");
  const [shares, setShares] = useState("");
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
  // const [modalPassShares, setModalPassShares] = useState("");
  const [modalFreShares, setModalFreightShares] = useState("");
  const [modalSplitFre, setModalSplitFre] = useState("");
  const [buses, setBus] = useState(0);
  const [metros, setMetro] = useState(0);
  const [trams, setTram] = useState(0);
  const [trains, setTrain] = useState(0);
  const [cars, setCar] = useState(0);
  const [affectedPopulation, setAffectedPopulation] = useState(0);
  const [railTransport, setRailTransport] = useState(0);
  const [waterwaysTransport, setWaterwaysTransport] = useState(0);
  const [roadTransport, setRoadTransport] = useState(0);
  const [lpg, setLpg] = useState(0);
  const [cng, setCng] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [petrol, setPetrol] = useState(0);
  const [diesel, setDiesel] = useState(0);
  const [fuelSharesBusTypes, setFuelSharesBusTypes] = useState("");
  const [fuelSharesBus, setFuelSharesBus] = useState("");
  const [types, setTypes] = useState("");
  const [ngv, setNgv] = useState(0);
  const [hep, setHep] = useState(0);
  const [phev, setPhev] = useState(0);
  const [hydrogenfuel, setHydrogenfuel] = useState(0);
  const [bioethanol, setBioethanol] = useState(0);
  const [biodiesel, setBiodiesel] = useState(0);
  const [bifuel, setBifuel] = useState(0);
  const [other, setOther] = useState(0);
  const [fuelSharesCarTypes, setFuelSharesCarTypes] = useState("");
  const [fuelSharesCar, setFuelSharesCar] = useState("");
  const [renewables, setRenewables] = useState(0);
  const [electricityTransTypes, setElectricityTransTypes] = useState("");
  const [electricityTrans, setElectricityTrans] = useState("");

  // const [policyQuant, setPolicyQuantification] = useState("");

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

  const handleLpg = (e) => {
    e.preventDefault();
    setLpg(Number(e.target.value));
  };
  const handleCng = (e) => {
    e.preventDefault();
    setCng(Number(e.target.value));
  };
  const handleElectricity = (e) => {
    e.preventDefault();
    setElectricity(Number(e.target.value));
  };
  const handlePetrol = (e) => {
    e.preventDefault();
    setPetrol(Number(e.target.value));
  };
  const handleDiesel = (e) => {
    e.preventDefault();
    setDiesel(Number(e.target.value));
  };

  const handleNgv = (e) => {
    e.preventDefault();
    setNgv(Number(e.target.value));
  };
  const handleHep = (e) => {
    e.preventDefault();
    setHep(Number(e.target.value));
  };
  const handlePhev = (e) => {
    e.preventDefault();
    setPhev(Number(e.target.value));
  };
  const handleHydrogenfuel = (e) => {
    e.preventDefault();
    setHydrogenfuel(Number(e.target.value));
  };
  const handleBioethanol = (e) => {
    e.preventDefault();
    setBioethanol(Number(e.target.value));
  };
  const handleBiodiesel = (e) => {
    e.preventDefault();
    setBiodiesel(Number(e.target.value));
  };
  const handleBifuel = (e) => {
    e.preventDefault();
    setBifuel(Number(e.target.value));
  };
  const handleOther = (e) => {
    e.preventDefault();
    setOther(Number(e.target.value));
  };
  const handleRenewables = (e) => {
    e.preventDefault();
    setRenewables(Number(e.target.value));
  };
  const handleAffectedArea = (e) => {
    e.preventDefault();
    setAffectedArea(Number(e.target.value));
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
      buses,
      metros,
      trams,
      trains,
      cars,
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

    const fuelSharesBusTypes = {
      lpg,
      cng,
      electricity,
      petrol,
      diesel,
    };
    setFuelSharesBusTypes(fuelSharesBusTypes);

    const fuelSharesBus = {
      types,
      yearStart,
      yearFinish,
      affectedArea,
    };
    setFuelSharesBus(fuelSharesBus);

    const fuelSharesCarTypes = {
      lpg,
      cng,
      ngv,
      hep,
      phev,
      hydrogenfuel,
      bioethanol,
      biodiesel,
      bifuel,
      other,
      electricity,
      petrol,
      diesel,
    };
    setFuelSharesCarTypes(fuelSharesCarTypes);

    const fuelSharesCar = {
      types,
      yearStart,
      yearFinish,
      affectedArea,
    };
    setFuelSharesCar(fuelSharesCar);

    const electricityTransTypes = {
      renewables,
    };
    setElectricityTransTypes(electricityTransTypes);

    const electricityTrans = {
      types,
      yearStart,
      yearFinish,
      affectedArea,
    };
    setElectricityTrans(electricityTrans);

    const policyQuant = {
      passengerMob,
      freightTrans,
      modalSplitPass,
      modalSplitFre,
      fuelSharesBus,
      fuelSharesCar,
      electricityTrans,
    };
    setPolicyQuantification(policyQuant);
  };
  useEffect(async () => {
    const raw = { baseline, newDevelopment, policyQuantification };
    const headers = {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .post(
        "https://ggia-dev.ulno.net/api/v1/calculate/transport",
        raw,
        headers
      )
      .then((response) => setU3Response(response.data.json))
      .catch((error) => {
        setU3Error({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("There was an error!", error);
      });
  }, []);
  const setU3Response = (response) => {
    setPolicyQuantification(response.data.policy_quantification);
  };

  const gotoU3policies = () => {
    setU3policies(true);
  };

  if (nextU3policies === false) {
    return (
      <article>
        <div className="headerSettlement">
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="POLICY QUANTIFICATION" />
          </Divider>
        </div>

        <section className="section-u3">
          <form onSubmit={createPolicyQuantification}>
            <div className="row_u3">
              {/*  passenger mobility section start */}
              <div className="column_u3">
                <div>
                  {" "}
                  <label>
                    <b>Passenger mobility (Residential and Non)</b>
                  </label>
                </div>
                <div>
                  {" "}
                  <label>Change in mobility %</label>
                </div>
                <div>
                  <label>Policy period</label>
                  <div className="divspace">
                    <select
                      className="select_u3"
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
                  <select
                    className="select_u3"
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
              <div className="column_u3">
                <div>
                  {" "}
                  <label>Expected change %</label>
                </div>
                <div>
                  {" "}
                  <input
                    id="inputspace"
                    type="number"
                    step="0.1"
                    // id="pass_expected_change"
                    placeholder="0"
                    onChange={handleExpectedPassChange}
                    required
                  />
                </div>
              </div>
              <div className="column_u3">
                {/* <label className="space_holder"></label> */}
                <label>% of the area affected</label>
                <input
                  className="input_affected_area"
                  type="number"
                  step="0.1"
                  placeholder="0"
                  min="0"
                  max="100"
                  onChange={handleAffectedPassArea}
                  required
                />
              </div>
              <div className="column_u3"></div>
            </div>
            {/*  passenger mobility section end*/}

            {/*  freight transport section */}
            <div className="row_u3">
              <div className="column_u3">
                <div>
                  <label>
                    <b>Freight transport</b>
                  </label>
                </div>
                <div>
                  {" "}
                  <label>Change in freight transport %</label>
                </div>
                <div>
                  <div>
                    {" "}
                    <label>Policy period</label>
                  </div>

                  <div className="divspace">
                    <select
                      className="select_u3"
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
                  <div className="divspace">
                    <select
                      className="select_u3"
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
              <div className="column_u3">
                <label>Expected change %</label>
                <input
                  className="input_freight_change"
                  type="number"
                  step="0.1"
                  placeholder="0"
                  onChange={handleExpectedFreChange}
                  required
                />
              </div>
              <div className="column_u3"></div>
              <div className="column_u3"></div>
            </div>
            {/*  freight transport section end */}

            <br />

            {/* modal split-passenger transport section start */}
            <div className="row_u3">
              <div className="column_u3">
                <div>
                  <label>
                    <b>Modal split/Passenger transport</b>
                  </label>
                </div>
                <div>
                  <label>Share for bus</label>
                </div>
                <div>
                  <label>Share for metro</label>
                </div>
                <div>
                  <label>Share for tram</label>
                </div>
                <div>
                  <label>Share for train</label>
                </div>
                <div>
                  <label>CarPassenger</label>
                </div>
                <div>
                  <label>Policy period</label>
                  <div className="divspace">
                    <select
                      className="select_u3"
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
                  <div className="divspace">
                    <select
                      className="select_u3"
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

              <div className="column_u3">
                <div>
                  {" "}
                  <label>Without policy</label>
                </div>
                <div>
                  <label>{emission.bus}</label>
                </div>
                <div>
                  <label>{emission.metro}</label>
                </div>
                <div>
                  <label>{emission.tram}</label>
                </div>
                <div>
                  <label>{emission.train}</label>
                </div>
                <div>
                  <label>{emission.car}</label>
                </div>
              </div>

              <div className="column_u3">
                <label>Policy target %</label>
                {/*  bus */}
                <input
                  className="input_u3_planner"
                  type="number"
                  step="0.1"
                  // id="pass_policy_target"
                  placeholder="0"
                  min="0"
                  max="100"
                  // onChange={handlePassTransPolicyTarget}
                  onChange={handleBus}
                  required
                />
                {/*  metro */}
                <div>
                  {" "}
                  <input
                    type="number"
                    step="0.1"
                    className="input_u3_planner"
                    placeholder="0"
                    min="0"
                    max="100"
                    onChange={handleMetro}
                    required
                  />
                </div>

                {/*   tram */}
                <div>
                  {" "}
                  <input
                    type="number"
                    step="0.1"
                    id="inputspace"
                    placeholder="0"
                    min="0"
                    max="100"
                    onChange={handleTram}
                    required
                  />
                </div>

                {/*  train */}
                <div>
                  {" "}
                  <input
                    type="number"
                    step="0.1"
                    className="input_u3_planner"
                    placeholder="0"
                    min="0"
                    max="100"
                    onChange={handleTrain}
                    required
                  />
                </div>

                {/*    car */}
                <div>This is calculated automatically</div>
              </div>
              <div className="column_u3">
                <label>% of the area affeccted</label>
                <input
                  type="number"
                  step="0.1"
                  className="input_u3_planner"
                  placeholder="0"
                  min="0"
                  max="100"
                  onChange={handleAffectedPassArea}
                  required
                />
              </div>
            </div>
            {/* modal split-passenger transport section end */}

            <br />
            <div>
              <label>
                <b>Modal split/Freight transport</b>
              </label>
              <label>without policy</label>
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
                <div className="divspace">
                  <select
                     className="select_freight"
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
                <div className="divspace">
                  <select
                     className="select_freight"
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

            {/* fuel-bus transport section start*/}
            <div className="row_u3">
              <div className="column_u3">
                <div>
                  {" "}
                  <label>
                    <b>Shares of fuel types/Bus transport</b>{" "}
                  </label>
                </div>
                <div>
                  {" "}
                  <label>Petroleum products</label>
                </div>
                <div>
                  {" "}
                  <label>Liquified Petroleum Gas (LPG)</label>
                </div>
                <div>
                  {" "}
                  <label>Natural Gas (CNG)</label>
                </div>
                <div>
                  <label>Electricty</label>
                </div>
                <div>
                  {" "}
                  <label>Diesel</label>
                </div>
                <div>
                  <label>Policy period</label>
                  <div className="divspace">
                    <select
                      className="select_u3"
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
                  <div className="divspace">
                    <select
                      className="select_u3"
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

              <div className="column_u3">
                <div> <label>Without policy</label></div>
                <div> <label></label></div>
                <div> <label></label></div>
                <div> <label></label></div>
                <div> <label></label></div>
                <div> <label></label></div>
              </div>

              <div className="column_u3">
                <div>
                  <label>Policy target %</label>
                </div>
                <div>
                  {" "}
                  <input
                  className="input_u3_planner "
                  /*   id="inputspace" */
                    type="number"
                    step="0.1"
                    // id="fre_policy_target"
                    placeholder="0.0"
                    min="0"
                    max="100"
                    onChange={handlePetrol}
                    required
                  />
                </div>
                <div>
                  {" "}
                  <input
                    // id="inputspace"
                    type="number"
                    step="0.1"
                    className="input_u3_planner "
                    id="bus_fuel_policy_target"
                    placeholder="0.0"
                    min="0"
                    max="100"
                    onChange={handleLpg}
                    required
                  />
                </div>
                <div>
                  {" "}
                  <input
                   className="input_u3_planner "
                    type="number"
                    step="0.1"
                    id="bus_fuel_policy_target"
                    placeholder="0.0"
                    min="0"
                    max="100"
                    onChange={handleCng}
                    required
                  />
                </div>
                <div>
                  <input
                   className="input_u3_planner "
                    type="number"
                    step="0.1"
                    id="bus_fuel_policy_target"
                    placeholder="0.0"
                    min="0"
                    max="100"
                    onChange={handleElectricity}
                    required
                  />
                </div>
                <div>
                  <input
                   className="input_u3_planner "
                    type="number"
                    step="0.1"
                    id="bus_fuel_policy_target"
                    placeholder="0.0"
                    min="0"
                    max="100"
                    onChange={handleDiesel}
                    required
                  />
                </div>
              </div>
              <div className="column_u3">
                <label>% of the area affeccted</label>
                <input
                 className="input_u3_planner "
                  type="number"
                  step="0.1"
                  placeholder="0"
                  // onChange={}
                  required
                />
              </div>
            </div>
            {/* fuel-bus transport section end */}

         
            <br />
            <div>
              <label>
                <b>Shares of fuel types/Cars</b>
              </label>
              <label>without policy</label>
              <label>policy target %</label>
              <label>% of the area affeccted</label>
              <div>
                <label>Liquified Petroleum Gas (LPG)</label>
                <label></label>
                <input
                 className="input_fuel_shares"
                  type="number"
                  step="0.1"
                  // id="bus_fuel_policy_target"
                  placeholder="0.0"
                  min="0"
                  max="100"
                  onChange={handleLpg}
                  required
                />
                <input  className="input_fuel_shares"/>
              </div>
              <div>
                <label>Natural Gas (CNG)</label>
                <label></label>
                <input
                 className="input_fuel_shares"
                  type="number"
                  step="0.1"
                  id="car_fuel_policy_target"
                  placeholder="0.0"
                  min="0"
                  max="100"
                  onChange={handleCng}
                  required
                />
              </div>
              <div>
                <label>Alternative Energy/biomethane NGV</label>
                <label></label>
                <input
                  className="input_fuel_shares"
                  type="number"
                  step="0.1"
                  id="car_fuel_policy_target"
                  placeholder="0.0"
                  min="0"
                  max="100"
                  onChange={handleNgv}
                  required
                />
              </div>
              <div>
                <label>Hybrid electric-petrol</label>
                <label></label>
                <input
                  className="input_fuel_shares"
                  type="number"
                  step="0.1"
                  id="car_fuel_policy_target"
                  placeholder="0.0"
                  min="0"
                  max="100"
                  onChange={handleHep}
                  required
                />
              </div>
              <div>
                <label>Plug-in hybrid petrol-electric PHEV</label>
                <label></label>
                <input
                  className="input_fuel_shares"
                  type="number"
                  step="0.1"
                  id="car_fuel_policy_target"
                  placeholder="0.0"
                  min="0"
                  max="100"
                  onChange={handlePhev}
                  required
                />
              </div>
              {/* <div>
              <label>Hybrid diesel-electric</label>
              <label></label>
              <input />
            </div>
            <div>
              <label>Plug-in hybrid diesel-electric PHEV</label>
              <label></label>
              <input />
            </div> */}
              <div>
                <label>Hydrogen and fuel cells</label>
                <label></label>
                <input
                  className="input_fuel_shares"
                  type="number"
                  step="0.1"
                  id="car_fuel_policy_target"
                  placeholder="0.0"
                  min="0"
                  max="100"
                  onChange={handleHydrogenfuel}
                  required
                />
              </div>
              <div>
                <label>Bioethanol</label>
                <label></label>
                <input
                  className="input_fuel_shares"
                  type="number"
                  step="0.1"
                  id="car_fuel_policy_target"
                  placeholder="0.0"
                  min="0"
                  max="100"
                  onChange={handleBioethanol}
                  required
                />
              </div>
              <div>
                <label>Bio-diesel</label>
                <label></label>
                <input
                  className="input_fuel_shares"
                  type="number"
                  step="0.1"
                  id="car_fuel_policy_target"
                  placeholder="0.0"
                  min="0"
                  max="100"
                  onChange={handleBiodiesel}
                  required
                />
              </div>
              <div>
                <label>Bi-fuel</label>
                <label></label>
                <input
                 className="input_fuel_shares"
                  type="number"
                  step="0.1"
                  id="car_fuel_policy_target"
                  placeholder="0.0"
                  min="0"
                  max="100"
                  onChange={handleBifuel}
                  required
                />
              </div>
              <div>
                <label>Other (unknown)</label>
                <label></label>
                <input
                  className="input_fuel_shares"
                  type="number"
                  step="0.1"
                  id="car_fuel_policy_target"
                  placeholder="0.0"
                  min="0"
                  max="100"
                  onChange={handleOther}
                  required
                />
              </div>
              <div>
                <label>Electricity BEV</label>
                <label></label>
                <input
                  className="input_fuel_shares"
                  type="number"
                  step="0.1"
                  id="car_fuel_policy_target"
                  placeholder="0.0"
                  min="0"
                  max="100"
                  onChange={handleElectricity}
                  required
                />
              </div>
              <div>
                <label>Petrol, according to country selection</label>
                <label></label>
                <input
                  className="input_fuel_shares"
                  type="number"
                  step="0.1"
                  id="car_fuel_policy_target"
                  placeholder="0.0"
                  min="0"
                  max="100"
                  onChange={handlePetrol}
                  required
                />
              </div>
              <div>
                <label>Diesel, according to country selection</label>
                <label></label>
                <input
                  className="input_fuel_shares"
                  type="number"
                  step="0.1"
                  id="car_fuel_policy_target"
                  placeholder="0.0"
                  min="0"
                  max="100"
                  onChange={handleDiesel}
                  required
                />
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
                <div className="divspace">
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
                <div className="divspace">
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
           {/*  electricity for transport start */}
           <div className="row_u3">
              <div className="column_u3" >
              <div><label>
                <b>Electricity for transport</b>
              </label></div>
              <div><label>Increase in the share of renewables</label></div>
            
              <div>
                <label>Policy period</label>
                <div className="divspace">
                  <select
                    className="select_u3"
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
                <div className="divspace">
                  <select
                    className="select_u3"
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
              <div className="column_u3" >
                <label>gCO2e/kWh without policy</label>
           
              </div>
              <div className="column_u3">
                
                <label>Policy target %</label>
                <input
                 className="input_u3_planner"
                  type="number"
                  step="0.1"
                  // id="car_fuel_policy_target"
                  placeholder="0"
                  onChange={handleRenewables}
                  required
                />
              
              </div>
              <div className="column_u3">
                <label>% of the area affected</label>
                <input
                  // id="inputspace"
                  type="number"
                  step="0.1"
                  id="electricity_trans_affected_area"
                  placeholder="0"
                  min="0"
                  max="100"
                  onChange={handleAffectedArea}
                  required
                />
              </div>
            </div>
          {/*  electricity for transport end */}

    
            <br />
            <div className="nextU3Button">
              <Button
                size="small"
                value="nextU3policies"
                onClick={gotoU3policies}
                // onClick={() => navigate("/u3policies", { replace: true })}
                label="Next &raquo;"
                primary
              />
            </div>
          </form>
        </section>
      </article>
    );
  } else {
    return (
      <U3policies
        emission={emission}
        policyQuantification={policyQuantification}
        passengerMob={passengerMob}
        freightTrans={freightTrans}
        modalPassShares={modalPassShares}
        modalSplitPass={modalSplitPass}
        modalFreShares={modalFreShares}
        modalSplitFre={modalSplitFre}
        fuelSharesBusTypes={fuelSharesBusTypes}
        fuelSharesBus={fuelSharesBus}
        fuelSharesCarTypes={fuelSharesCarTypes}
        fuelSharesCar={fuelSharesCar}
        electricityTransTypes={electricityTransTypes}
        electricityTrans={electricityTrans}
        newDevelopment={newDevelopment}
        baseline={baseline}
        // projections={projections}
      />
    );
  }
};

U3planner.propTypes = {
  baseline: PropTypes.object.isRequired,
  emission: PropTypes.object.isRequired,
  newDevelopment: PropTypes.object.isRequired,
  // projections: PropTypes.object.isRequired,
};
