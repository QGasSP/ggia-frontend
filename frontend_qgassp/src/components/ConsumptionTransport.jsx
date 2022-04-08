import React, { useState ,useEffect} from "react";
import Divider from "@mui/material/Divider";
import "../css/u1planner.css";
import Chip from "@mui/material/Chip";
import { Button } from "./Button";
import { ConsumptionResults } from "./ConsumptionResults";
import PropTypes from "prop-types";
/**
 * Consumption transport UI
 * @return {}
 */

export const ConsumptionTransport = ({
  policyYear,
  newFloorArea,
  popSizePolicy,
  effGain,
  effScaler,
  localElectricity,
  elType,
  elScaler,
  sHeating,
  districtProp,
  liquidsProp,
  solidsProp,
  gasesProp,
  districtValue,
}) => {
  
  
  const [nextCBResults, setCbResults] = useState(false);

  const [biofuelTakeup, setBioFuelTakeup] = useState(false);
  const [bioScaler, setBioScaler] = useState(0);

  const [evTakeup, setEvTakeup] = useState(false);
  const [evScaler, setEvScaler] = useState(0);

  const [modalShift, setModalShift] = useState(false);

  const [msFuelScaler, setMsFuelScaler] = useState(0);
  const [msVehScaler, setMsVehScaler] = useState(0);
  const [msPtScaler, setMsPtScaler] = useState(0);

  const country = localStorage.getItem("country");
  const year = parseInt(localStorage.getItem("year"));
  const region = localStorage.getItem("country");
  const popSize = parseInt(localStorage.getItem("population"));
  const areaType = localStorage.getItem("areaType");
  const houseSize = parseInt(localStorage.getItem("houseSize"));
  const incomeChoice = parseInt(localStorage.getItem("incomeChoice"));
  const effScalerInitial = localStorage.getItem("effScalerInitial");

  const [consumptionRequest, setConsumptionRequest] = useState({});

  const handleBioScaler = (e) => {
    e.preventDefault();
    setBioScaler(Number(e.target.value));
  };

  const handleEvScaler = (e) => {
    e.preventDefault();
    setEvScaler(Number(e.target.value));
  };

  const handleMsFuelScaler = (e) => {
    e.preventDefault();
    setMsFuelScaler(Number(e.target.value));
  };

  const handleMsVehScaler = (e) => {
    e.preventDefault();
    setMsVehScaler(Number(e.target.value));
  };

  const handleMsPtScaler = (e) => {
    e.preventDefault();
    setMsPtScaler(Number(e.target.value));
  };

  useEffect(() => {
    localStorage.setItem("districtProp", districtProp);
  }, [districtProp]);


  const handleRequestObject = (e) => {
    e.preventDefault();
    setCbResults(true);

    setConsumptionRequest({
      country,
      year,
      popSize,
      region,
      areaType,
      houseSize,
      incomeChoice,
      effScalerInitial,
      policyYear,
      popSizePolicy,
      newFloorArea,
      effGain,
      effScaler,
      localElectricity,
      elType,
      elScaler,
      sHeating,
      districtProp,
      solidsProp,
      liquidsProp,
      gasesProp,
      districtValue,
      biofuelTakeup,
      bioScaler,
      evTakeup,
      evScaler,
      modalShift,
      msFuelScaler,
      msVehScaler,
      msPtScaler,
    });
  };

  if (nextCBResults === false) {
    return (
      <article>
        <section>
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="Transportation" />
          </Divider>
          <div className="settlementDiv">
            <div className="div_transport">
              <label>
                <b>Biofuel in transport</b>
              </label>
              <label></label>
            </div>
            <div className="div_transport">
              <label htmlFor="biofuelTakeup">
                Consider biofuel in transport?
              </label>
              <select
                className="prod_energy_options"
                id="energy_prod"
                onChange={(e) => setBioFuelTakeup(e.target.value)}
                defaultValue={biofuelTakeup}
              >
                <option value="DefaultOption">Select an option</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>

            <div className="div_transport">
              <label htmlFor="bioScaler" className="settle_label">
                what percentage of transport fuels are covered by biofuels?
              </label>
              <input
                className="input_occupancy"
                type="number"
                id="bioScaler"
                min="0"
                max="100"
                defaultValue={bioScaler}
                onChange={handleBioScaler}
                required
              />
            </div>

            <br />
            <div className="div_transport">
              <label>
                <b>Electric vehicles</b>
              </label>
              <label></label>
            </div>
            <div className="div_transport">
              <label htmlFor="evTakeUp">
                {" "}
                Consider introduction of electric vehicles?
              </label>
              <select
                className="prod_energy_options"
                id="evTakeup"
                onChange={(e) => setEvTakeup(e.target.value)}
                defaultValue={evTakeup}
              >
                <option value="DefaultOption">Select an option</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>

            <div className="div_transport">
              <label htmlFor="evScaler" className="settle_label">
                what percentage of private vehicles are electric?
              </label>
              <input
                className="input_occupancy"
                type="number"
                id="evScaler"
                onChange={handleEvScaler}
                min="0"
                max="100"
                defaultValue={evScaler}
                required
              />
            </div>

            {/*  ------------------------------------------------- */}

            <div className="div_transport">
              <label>
                <b>Modal shift</b>
              </label>
              <label></label>
            </div>

            <div className="div_transport">
              <label htmlFor="modalShift">
                Consider transport modal shift?
              </label>
              <select
                className="prod_energy_options"
                id="modalShift"
                onChange={(e) => setModalShift(e.target.value)}
                defaultValue={modalShift}
              >
                <option value="DefaultOption">Select an option</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>

            <div className="div_transport">
              <label htmlFor="msFuelScaler" className="settle_label">
                what percentage of private vehicle use is reduced?
              </label>
              <input
                className="input_occupancy"
                type="number"
                id="msFuelScaler"
                onChange={handleMsFuelScaler}
                defaultValue={msFuelScaler}
                min="0"
                max="100"
                required
              />
            </div>
            <div className="div_transport">
              <label htmlFor="msVehScaler" className="settle_label">
                what percentage of private vehicle ownership is reduced?
              </label>
              <input
                className="input_occupancy"
                type="number"
                id="msVehScaler"
                onChange={handleMsVehScaler}
                defaultValue={msVehScaler}
                min="0"
                max="100"
                required
              />
            </div>
            <div className="div_transport">
              <label htmlFor="msPtScaler" className="settle_label">
                what percentage is public transport use increased?
              </label>
              <input
                className="input_occupancy"
                type="number"
                id="msPtScaler"
                onChange={handleMsPtScaler}
                defaultValue={msPtScaler}
                min="0"
                max="100"
                required
              />
            </div>
          </div>
          <div className="nextCBQ">
            <Button
              size="small"
              value="charts"
              onClick={handleRequestObject}
              label="Next &raquo;"
              primary
            />
          </div>

          <br />
        </section>
      </article>
    );
  } else {
    return <ConsumptionResults consumptionRequest={consumptionRequest} />;
  }
};

ConsumptionTransport.propTypes = {
  policyYear: PropTypes.number.isRequired,
  newFloorArea: PropTypes.number.isRequired,
  popSizePolicy: PropTypes.number.isRequired,
  effGain: PropTypes.bool.isRequired,
  effScaler: PropTypes.number.isRequired,
  localElectricity: PropTypes.bool.isRequired,
  elType: PropTypes.string.isRequired,
  elScaler: PropTypes.number.isRequired,
  sHeating: PropTypes.bool.isRequired,
  districtProp: PropTypes.number.isRequired,
  liquidsProp: PropTypes.number.isRequired,
  solidsProp: PropTypes.number.isRequired,
  gasesProp: PropTypes.number.isRequired,
  districtValue: PropTypes.number.isRequired,
};
