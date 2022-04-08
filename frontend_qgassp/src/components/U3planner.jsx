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
  const [policyQuantification, setPolicyQuantification] = useState({});
  const [yearStart, setYearStart] = useState(0);
  const [yearFinish, setYearFinish] = useState(0);
  const [nextU3policies, setU3policies] = useState(false);
  const [errorU3, setU3Error] = useState("");
  const [modalPassShares, setModalPassShares] = useState("");
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
  const [policyQuant, setPolicyQuant] = useState("");

  const [passengerMobYearStart, setPassengerMobYearStart] = useState(0);
  const [passengerMobYearFinish, setPassengerMobYearFinish] = useState(0);
  const [passengerMobExpectedChange, setPassengerMobExpectedChange] =
    useState(0);
  const [passengerMobAffectedArea, setPassengerMobAffectedArea] = useState(0);

  const [freightTransYearStart, setFreightTransYearStart] = useState(0);
  const [freightTransYearFinish, setFreightTransYearFinish] = useState(0);
  const [freightTransExpectedChange, setFreightTransExpectedChange] =
    useState(0);

  const [
    modalSplitPassAffectedPopulation,
    setModalSplitPassAffectedPopulation,
  ] = useState(0);

  const [modalSplitPassYearStart, setModalSplitPassYearStart] = useState(0);
  const [modalSplitPassYearFinish, setModalSplitPassYearFinish] = useState(0);

  const [modalSplitFreYearStart, setModalSplitFreYearStart] = useState(0);
  const [modalSplitFreYearFinish, setModalSplitFreYearFinish] = useState(0);

  const [fuelSharesBusYearStart, setFuelSharesBusYearStart] = useState(0);
  const [fuelSharesBusYearFinish, setFuelSharesBusYearFinish] = useState(0);
  const [fuelSharesBusAffectedArea, setFuelSharesBusAffectedArea] = useState(0);

  const [fuelSharesCarYearStart, setFuelSharesCarYearStart] = useState(0);
  const [fuelSharesCarYearFinish, setFuelSharesCarYearFinish] = useState(0);
  const [fuelSharesCarAffectedArea, setFuelSharesCarAffectedArea] = useState(0);

  const [electricityTransYearStart, setElectricityTransYearStart] = useState(0);
  const [electricityTransYearFinish, setElectricityTransYearFinish] =
    useState(0);
  const [electricityTransAffectedArea, setElectricityTransAffectedArea] =
    useState(0);

  const optionsNewStart = [];
  for (let i = 2022; i < 2051; i++) optionsNewStart.push(i);

  const optionsNew = [];
  for (let i = 2022; i < 2051; i++) optionsNew.push(i);
  // const optionsNew = [];
  // for (let i = 2022; i < 2051; i++) optionsNew.push(i);
  const handleStartYear = (e) => {
    setYearStart(Number(e.target.value));
  };
  const handleYearFinish = (e) => {
    e.preventDefault();
    setYearFinish(Number(e.target.value));
  };
  const handleExpectedChange = (e) => {
    e.preventDefault();
    setExpectedChange(Number(e.target.value));
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
  // new stuff
  const handlePassengerMobExpectedChange = (e) => {
    e.preventDefault();
    setPassengerMobExpectedChange(Number(e.target.value));
  };
  const handlePassengerMobAffectedArea = (e) => {
    e.preventDefault();
    setPassengerMobAffectedArea(Number(e.target.value));
  };
  const handleFreightTransExpectedChange = (e) => {
    e.preventDefault();
    setFreightTransExpectedChange(Number(e.target.value));
  };
  const handleModalSplitPassAffectedPopulation = (e) => {
    e.preventDefault();
    setModalSplitPassAffectedPopulation(Number(e.target.value));
  };
  const handleFuelSharesBusAffectedArea = (e) => {
    e.preventDefault();
    setFuelSharesBusAffectedArea(Number(e.target.value));
  };
  const handleFuelSharesCarAffectedArea = (e) => {
    e.preventDefault();
    setFuelSharesCarAffectedArea(Number(e.target.value));
  };
  const handleElectricityTransAffectedArea = (e) => {
    e.preventDefault();
    setElectricityTransAffectedArea(Number(e.target.value));
  };
  const handlePassengerMobYearStart = (e) => {
    e.preventDefault();
    setPassengerMobYearStart(Number(e.target.value));
  };
  const handlePassengerMobYearFinish = (e) => {
    e.preventDefault();
    setPassengerMobYearFinish(Number(e.target.value));
  };
  const handleFreightTransYearStart = (e) => {
    e.preventDefault();
    setFreightTransYearStart(Number(e.target.value));
  };
  const handleFreightTransYearFinish = (e) => {
    e.preventDefault();
    setFreightTransYearFinish(Number(e.target.value));
  };
  const handleModalSplitPassYearStart = (e) => {
    e.preventDefault();
    setModalSplitPassYearStart(Number(e.target.value));
  };
  const handleModalSplitPassYearFinish = (e) => {
    e.preventDefault();
    setModalSplitPassYearFinish(Number(e.target.value));
  };
  const handletModalSplitFreYearStart = (e) => {
    e.preventDefault();
    setModalSplitFreYearStart(Number(e.target.value));
  };
  const handleModalSplitFreYearFinish = (e) => {
    e.preventDefault();
    setModalSplitFreYearFinish(Number(e.target.value));
  };
  const handletFuelSharesBusYearStart = (e) => {
    e.preventDefault();
    setFuelSharesBusYearStart(Number(e.target.value));
  };
  const handleFuelSharesBusYearFinish = (e) => {
    e.preventDefault();
    setFuelSharesBusYearFinish(Number(e.target.value));
  };
  const handletFuelSharesCarYearStart = (e) => {
    e.preventDefault();
    setFuelSharesCarYearStart(Number(e.target.value));
  };
  const handleFuelSharesCarYearFinish = (e) => {
    e.preventDefault();
    setFuelSharesCarYearFinish(Number(e.target.value));
  };
  const handletElectricityTransYearStart = (e) => {
    e.preventDefault();
    setElectricityTransYearStart(Number(e.target.value));
  };
  const handleElectricityTransYearFinish = (e) => {
    e.preventDefault();
    setElectricityTransYearFinish(Number(e.target.value));
  };

  const createPolicyQuantification = () => {
    const passengerMob = {
      expectedChange: passengerMobExpectedChange,
      affectedArea: passengerMobAffectedArea,
      yearStart: passengerMobYearStart,
      yearFinish: passengerMobYearFinish,
    };
    setPassengerMobility(passengerMob);

    const freightTrans = {
      expectedChange: freightTransExpectedChange,
      yearStart: freightTransYearStart,
      yearFinish: freightTransYearFinish,
    };
    setFreightTransport(freightTrans);

    const modalPassShares = {
      bus: bus,
      metro: metro,
      tram: tram,
      train: train,
      car: car,
    };
    setModalPassShares(modalPassShares);

    const modalSplitPass = {
      modalPassShares: modalPassShares,
      affectedPopulation: modalSplitPassAffectedPopulation,
      yearStart: modalSplitPassYearStart,
      yearFinish: modalSplitPassYearFinish,
    };
    setModalSplitPass(modalSplitPass);

    const modalFreShares = {
      railTransport: railTransport,
      waterwaysTransport: waterwaysTransport,
      roadTransport: roadTransport,
    };
    setModalFreightShares(modalFreShares);

    const modalSplitFre = {
      modalFreShares: modalFreShares,
      yearStart: modalSplitFreYearStart,
      yearFinish: modalSplitFreYearFinish,
    };
    setModalSplitFre(modalSplitFre);

    const fuelSharesBusTypes = {
      lpg: lpg,
      cng: cng,
      electricity: electricity,
      petrol: petrol,
      diesel: diesel,
    };
    setFuelSharesBusTypes(fuelSharesBusTypes);

    const fuelSharesBus = {
      fuelSharesBusTypes: fuelSharesBusTypes,
      yearStart: fuelSharesBusYearStart,
      yearFinish: fuelSharesBusYearFinish,
      affectedArea: fuelSharesBusAffectedArea,
    };
    setFuelSharesBus(fuelSharesBus);

    const fuelSharesCarTypes = {
      lpg: lpg,
      cng: cng,
      ngv: ngv,
      hep: hep,
      phev: phev,
      hydrogenfuel: hydrogenfuel,
      bioethanol: bioethanol,
      biodiesel: biodiesel,
      bifuel: bifuel,
      other: other,
      electricity: electricity,
      petrol: petrol,
      diesel: diesel,
    };
    setFuelSharesCarTypes(fuelSharesCarTypes);

    const fuelSharesCar = {
      fuelSharesCarTypes: fuelSharesCarTypes,
      yearStart: fuelSharesCarYearStart,
      yearFinish: fuelSharesCarYearFinish,
      affectedArea: fuelSharesCarAffectedArea,
    };
    setFuelSharesCar(fuelSharesCar);

    const electricityTransTypes = {
      renewables: renewables,
    };
    setElectricityTransTypes(electricityTransTypes);

    const electricityTrans = {
      types: electricityTransTypes,
      yearStart: electricityTransYearStart,
      yearFinish: electricityTransYearFinish,
      affectedArea: electricityTransAffectedArea,
    };
    setElectricityTrans(electricityTrans);

    const policyQuant = {
      passengerMob: passengerMob,
      freightTrans: freightTrans,
      modalSplitPass: modalSplitPass,
      modalSplitFre: modalSplitFre,
      fuelSharesBus: fuelSharesBus,
      fuelSharesCar: fuelSharesCar,
      electricityTrans: electricityTrans,
    };
    setPolicyQuant(policyQuant);
  };
  // useEffect(async () => {
  //   const raw = { baseline, newDevelopment, policyQuantification };
  //   const headers = {
  //     "Content-type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //   };
  //   axios
  //     .post(
  //       "https://ggia-dev.ulno.net/api/v1/calculate/transport",
  //       raw,
  //       headers
  //     )
  //     .then((response) => setU3Response(response.data.json))
  //     .catch((error) => {
  //       setU3Error({ errorMessage: error.message });
  //       // eslint-disable-next-line no-console
  //       console.error("There was an error!", errorU3);
  //     });
  // }, []);
  // const setU3Response = (response) => {
  //   setPolicyQuantification(response.data.policy_quantification);
  // };

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
                      onChange={handlePassengerMobYearStart}
                      // defaultValue="2022"
                      defaultValue={yearStart}
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
                    onChange={handlePassengerMobYearFinish}
                    defaultValue={yearFinish}
                    // defaultValue="2022"
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
                    // onChange={handleExpectedChange}
                    onChange={handlePassengerMobExpectedChange}
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
                  // onChange={handleAffectedArea}
                  onChange={handlePassengerMobAffectedArea}
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
                      onChange={handleFreightTransYearStart}
                      // defaultValue="2022"
                      defaultValue={yearStart}
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
                      onChange={handleFreightTransYearFinish}
                      defaultValue={yearFinish}
                      // defaultValue="2022"
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
                  // onChange={handleExpectedChange}
                  onChange={handleFreightTransExpectedChange}
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
                      onChange={handleModalSplitPassYearStart}
                      // defaultValue="2022"
                      defaultValue={yearStart}
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
                      onChange={handleModalSplitPassYearFinish}
                      defaultValue={yearFinish}
                      // defaultValue="2022"
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
                  // onChange={handleAffectedPopulation}
                  onChange={handleModalSplitPassAffectedPopulation}
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
                  onChange={handleRailTransport}
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
                  onChange={handleWaterwaysTransport}
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
                    onChange={handletModalSplitFreYearStart}
                    defaultValue={yearStart}
                    // defaultValue="2022"
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
                    onChange={handleModalSplitFreYearFinish}
                    defaultValue={yearFinish}
                    // defaultValue="2022"
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
                      onChange={handletFuelSharesBusYearStart}
                      defaultValue={yearStart}
                      // defaultValue="2022"
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
                      onChange={handleFuelSharesBusYearFinish}
                      defaultValue={yearFinish}
                      // defaultValue="2022"
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
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
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
                  onChange={handleFuelSharesBusAffectedArea}
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
                <input className="input_fuel_shares" />
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
                    onChange={handletFuelSharesCarYearStart}
                    defaultValue={yearStart}
                    // defaultValue="2022"
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
                    onChange={handleFuelSharesCarYearFinish}
                    defaultValue={yearFinish}
                    // defaultValue="2022"
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
              <div className="column_u3">
                <div>
                  <label>
                    <b>Electricity for transport</b>
                  </label>
                </div>
                <div>
                  <label>Increase in the share of renewables</label>
                </div>

                <div>
                  <label>Policy period</label>
                  <div className="divspace">
                    <select
                      className="select_u3"
                      id="start_year"
                      name="start_year"
                      onChange={handletElectricityTransYearStart}
                      defaultValue={yearStart}
                      // defaultValue="2022"
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
                      onChange={handleElectricityTransYearFinish}
                      defaultValue={yearFinish}
                      // defaultValue="2022"
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
                  onChange={handleElectricityTransAffectedArea}
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
        policyQuant={policyQuant}
        expectedChange={expectedChange}
        yearStart={yearStart}
        yearFinish={yearFinish}
        affectedArea={affectedArea}
        bus={bus}
        metro={metro}
        car={car}
        tram={tram}
        train={train}
        affectedPopulation={affectedPopulation}
        railTransport={railTransport}
        waterwaysTransport={waterwaysTransport}
        roadTransport={roadTransport}
        lpg={lpg}
        cng={cng}
        electricity={electricity}
        petrol={petrol}
        diesel={diesel}
        ngv={ngv}
        phev={phev}
        hep={hep}
        hydrogenfuel={hydrogenfuel}
        bioethanol={bioethanol}
        biodiesel={biodiesel}
        bifuel={bifuel}
        other={other}
        renewables={renewables}

        // projections={projections}
      />
    );
  }
};

U3planner.propTypes = {
  baseline: PropTypes.object.isRequired,
  emission: PropTypes.object.isRequired,
  newDevelopment: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired,
  // projections: PropTypes.object.isRequired,
};
