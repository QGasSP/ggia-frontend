import React, { useEffect } from "react";
import Divider from "@mui/material/Divider";
import "../css/u1planner.css";
import Chip from "@mui/material/Chip";
import { Button } from "./Button";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import { useStorageBool, useStorageInt } from "../reducers/useStorage";
import { useNavigate} from "react-router-dom";
/**
 * Consumption transport UI
 * @return {}
 */

export const ConsumptionTransport = () =>{
   const navigate = useNavigate();
    const policyYear = parseInt(localStorage.getItem("policyYear"));
    const newFloorArea = parseInt(localStorage.getItem("newFloorArea"));
    const popSizePolicy = parseInt(localStorage.getItem("popSizePolicy"));

    const effGain = localStorage.getItem("effGain");
    const effScaler = parseInt(localStorage.getItem("effScaler"));

    const localElectricity = localStorage.getItem("localElectricity");
    const elType = localStorage.getItem("elType");
    const elScaler = parseInt(localStorage.getItem("elScaler"));

    const sHeating = localStorage.getItem("sHeating");
    const districtProp = parseFloat(localStorage.getItem("districtProp"));
    const electricityHeatProp = parseFloat(localStorage.getItem("electricityHeatPropLocal"));
    const combustableFuelsProp = parseFloat(localStorage.getItem("combustableFuelsPropLocal"));
    const liquidsProp = parseFloat(localStorage.getItem("liquidsPropLocal"));
    const solidsProp = parseFloat(localStorage.getItem("solidsPropLocal"));
    const gasesProp = parseFloat(localStorage.getItem("gasesPropLocal"));
    const districtValue = parseFloat(localStorage.getItem("districtValueLocal"));

    const [biofuelTakeup, setBiofuelTakeup] = useStorageBool(
      "biofuelTakeup",
      false
    );
    const handleBiofuelTakeup = (e) => {
      e.target.checked;
      setBiofuelTakeup(!biofuelTakeup);
    };
    const [bioScaler, setBioScaler] = useStorageInt("bioScaler", 0);

    const [evTakeup, setEvTakeup] = useStorageBool("evTakeup", false);
    const handleEvTakeup = (e) => {
      e.target.checked;
      setEvTakeup(!evTakeup);
    };
    const [evScaler, setEvScaler] = useStorageInt("evScaler", 0);

    const [modalShift, setModalShift] = useStorageBool("modalShift", false);
    const handleModalShift = (e) => {
      e.target.checked;
      setModalShift(!modalShift);
    };
    const [msFuelScaler, setMsFuelScaler] = useStorageInt("msFuelScaler", 0);
    const [msVehScaler, setMsVehScaler] = useStorageInt("msVehScaler", 0);
    const [msPtScaler, setMsPtScaler] = useStorageInt("msPtScaler", 0);

    const country = localStorage.getItem("country");
    const year = parseInt(localStorage.getItem("year"));
    const region = localStorage.getItem("country");
    const popSize = parseInt(localStorage.getItem("population"));
    const areaType = localStorage.getItem("areaType");
    const houseSize = parseInt(localStorage.getItem("houseSize"));
    const incomeChoice = parseInt(localStorage.getItem("incomeChoice"));
    const effScalerInitial = localStorage.getItem("effScalerInitial");

   const consumptionRequest = {};

   /*  const [consumptionRequest, setConsumptionRequest] = useState(() => {
      const savedCrequest = localStorage.getItem("consumptionRequest");
      const valueStart = JSON.parse(savedCrequest);
      return valueStart || {};
    }); */

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

   
    const handleRequestObject = () => {
      const consumptionRequest ={
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
        electricityHeatProp,
        combustableFuelsProp,
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
      };

      localStorage.setItem(
        "consumptionRequest",
        JSON.stringify(consumptionRequest)
      );
     
      navigate("../consumptionResults", {
        replace: true,
      });
    };

    useEffect(() => {
      localStorage.setItem(
        "consumptionRequest",
        JSON.stringify(consumptionRequest)
      );
    }, [consumptionRequest]);


      return (
        <article>
          <section>
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="Transportation" />
            </Divider>
            <Alert severity="info">
              This section looks at policies affecting transport related
              emissions by residents.
            </Alert>
            <div className="settlementDiv">
              <div className="div_transport">
                <label>
                  <b>Biofuel in transport</b>
                </label>
                <label></label>
              </div>
              {/* <div className="div_transport">
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
            </div> */}
              <Tooltip title="If you would like to consider the use of biofuels in personal transport, please enter the percentage of fuel use that will be covered by biofuels.">
                <div className="div_breakdown">
                  <label htmlFor="local_electricity">
                    Consider biofuel in transport:
                  </label>
                  <input
                    className="checkbox_cb"
                    type="checkbox"
                    id="eff_gain"
                    checked={biofuelTakeup}
                    defaultValue={biofuelTakeup}
                    onChange={handleBiofuelTakeup}
                  />
                </div>
              </Tooltip>
              {biofuelTakeup && (
                <>
                  <div className="div_transport">
                    <label htmlFor="bioScaler" className="settle_label">
                      What percentage of transport fuels are covered by
                      biofuels?
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
                </>
              )}

              <br />
              <div className="div_transport">
                <label>
                  <b>Electric vehicles</b>
                </label>
                <label></label>
              </div>
              {/* <div className="div_transport">
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
            </div> */}
              <Tooltip title="If you would like to consider the use of electric vehicles, please enter what percentage of private vehicles will be electric.">
                <div className="div_breakdown">
                  <label htmlFor="evTakeUp">
                    Consider introduction of electric vehicles:
                  </label>
                  <input
                    className="checkbox_cb"
                    type="checkbox"
                    id="evTakeup"
                    checked={evTakeup}
                    defaultValue={evTakeup}
                    onChange={handleEvTakeup}
                  />
                </div>
              </Tooltip>
              {evTakeup && (
                <>
                  <div className="div_transport">
                    <label htmlFor="evScaler" className="settle_label">
                      What percentage of private vehicles are electric?
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
                </>
              )}

              {/*  ------------------------------------------------- */}

              <div className="div_transport">
                <label>
                  <b>Modal shift</b>
                </label>
                <label></label>
              </div>

              {/* <div className="div_transport">
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
            </div> */}
              <Tooltip title="If you would like to consider changes in modal shift, please select the percentage by which expenditure on fuels for transport is reduced, the percentage that private vehicle ownership is reduced, and the percentage that public transport use is increased.">
                <div className="div_breakdown">
                  <label htmlFor="modalShift">
                    Consider transport modal shift:
                  </label>
                  <input
                    className="checkbox_cb"
                    type="checkbox"
                    id="modalShift"
                    checked={modalShift}
                    defaultValue={modalShift}
                    onChange={handleModalShift}
                  />
                </div>
              </Tooltip>
              {modalShift && (
                <>
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
                </>
              )}
            </div>
            <div className="backButtonNew">
            <Button
              size="small"
              value="backProjections"
              onClick={() => navigate("../consumptionHseEnergy", { replace: true })}
              label="&laquo; Previous"
              secondary
            />
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
   /*  } else {
      return <ConsumptionResults consumptionRequest={consumptionRequest} />;
    } */
  };

