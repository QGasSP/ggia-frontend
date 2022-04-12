import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import "../css/u1planner.css";
import Chip from "@mui/material/Chip";
import { Button } from "./Button";
import { ConsumptionTransport } from "./ConsumptionTransport";
import { useStorageBool, useStorageFloat, useStorageInt, useStorageString } from "../reducers/useStorage";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";

/**
 * Consumption house energy UI component
 * @return {}
 */
const ceYes = true;
const ceNo = false;
export const ConsumptionHseEnergy = ({
  districtProp,
  electricityHeatProp,
  combustableFuelsProp,
  liquidsProp,
  solidsProp,
  gasesProp,
  districtValue,
}) => {
  const [nextCBTransport, setCbTransport] = useState(false);

  const [policyYear, setPolicyYear] = useState(0);
  const [newFloorArea, setNewFloorArea] = useState(0);
  const [popSizePolicy, setPopulationSizePolicy] = useState(0);

  const [effGain, setEffGain] = useState(false);
  const handleEffGain = (e) => {
    e.target.checked;
    setEffGain(!effGain);
  };
  const [effScaler, setEffScaler] = useState(0);

  const [localElectricity, setLocalElectricity] = useState(false);
  const handleLocalElectricity = (e) => {
    e.target.checked;
    setLocalElectricity(!localElectricity);
  };
  const [elType, setElectricityType] = useState(
    "Electricity by solar photovoltaic"
  );
  const [elScaler, setElectricityScaler] = useState(0);

  const [sHeating, setHeatingShare] = useState(false);
  const handleHeatingShare = (e) => {
    e.target.checked;
    setHeatingShare(!sHeating);
  };
  const [districtPropLocal, setDistrictProp] = useState(
    Math.round((districtProp + Number.EPSILON) * 100) / 100
  );
  const [electricityHeatPropLocal, setElectricityHeatProp] = useState(
    Math.round((electricityHeatProp + Number.EPSILON) * 100) / 100
  );
  const [combustableFuelsPropLocal, setCombustableFuelsProp] = useState(
    Math.round((combustableFuelsProp + Number.EPSILON) * 100) / 100
  );
  const [liquidsPropLocal, setLiquidsProp] = useState(
    Math.round((liquidsProp + Number.EPSILON) * 100) / 100
  );
  const [solidsPropLocal, setSolidsProp] = useState(
    Math.round((solidsProp + Number.EPSILON) * 100) / 100
  );
  const [gasesPropLocal, setGasesProp] = useState(
    Math.round((gasesProp + Number.EPSILON) * 100) / 100
  );
  const [districtValueLocal, setDistrictValue] = useState(
    Math.round((districtValue + Number.EPSILON) * 100) / 100
  );

  const optionsCb = [];
  for (let i = 2022; i < 2051; i++) optionsCb.push(i);

  const handlePolicyYear = (e) => {
    e.preventDefault();
    setPolicyYear(Number(e.target.value));
  };

  const handleNewFloorArea = (e) => {
    e.preventDefault();
    setNewFloorArea(Number(e.target.value));
  };

  const handlePopSizePolicy = (e) => {
    e.preventDefault();
    setPopulationSizePolicy(Number(e.target.value));
  };

  const handleEffScaler = (e) => {
    e.preventDefault();
    setEffScaler(Number(e.target.value));
  };

  const handleElScaler = (e) => {
    e.preventDefault();
    setElectricityScaler(Number(e.target.value));
  };

  const handleDistrictProp = (e) => {
    e.preventDefault();
    districtProp = Number(e.target.value);
    setDistrictProp(Number(e.target.value));
  };

  const handleElectricityHeatProp = (e) => {
    e.preventDefault();
    electricityHeatProp = Number(e.target.value);
    setElectricityHeatProp(Number(e.target.value));
  };

  const handleCombustableFuelsProp = (e) => {
    e.preventDefault();
    combustableFuelsProp = Number(e.target.value);
    setCombustableFuelsProp(Number(e.target.value));
  };

  const handleLiquidsProp = (e) => {
    e.preventDefault();
    // liquidsProp = Number(e.target.value);
    setLiquidsProp(Number(e.target.value));
  };

  const handleSolidProp = (e) => {
    e.preventDefault();
    // solidsProp = Number(e.target.value);
    setSolidsProp(Number(e.target.value));
  };

  const handleGasesProp = (e) => {
    e.preventDefault();
    // gasesProp = Number(e.target.value);
    setGasesProp(Number(e.target.value));
  };

  const handleDistrictValue = (e) => {
    e.preventDefault();
    // districtValue = Number(e.target.value);
    setDistrictValue(Number(e.target.value));
  };

  if (nextCBTransport === false) {
    return (
      <article>
        <section>
          <div>
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="Household energy" />
            </Divider>
          </div>

          <div className="settlementDiv">
            <div className="div_transport">
              <Alert severity="info">
                This section looks at basic changes to the area following the
                introduction of a policy, as well as those to do with the energy
                use of residents.Please enter the year the policy is implemented
                and the total number of residents in the area in this year.
                Please enter the same value as on the start page if no new
                residents are expected.
              </Alert>
              <label htmlFor="policy_year"> Policy implementation year</label>
              <select
                className="select_policy_start"
                id="policy_year"
                onChange={handlePolicyYear}
                defaultValue={policyYear}
                required
              >
                <option value="DefaultOption">Select year</option>

                {optionsCb.map((option) => (
                  <option key={option} value={option}>
                    {option}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div className="div_transport">
              <label htmlFor="population_size" className="settle_label">
                Total new population size
              </label>
              <input
                className="input_occupancy"
                type="number"
                id="population_size"
                onChange={handlePopSizePolicy}
                defaultValue={popSizePolicy}
                required
              />
            </div>

            <div className="div_transport">
              <label>
                <b>Construction</b>
              </label>
              <label></label>
            </div>

            <Tooltip title="Enter the expected construction of new residential floor area. If no new residential buildings are planned, leave the value as zero.">
              <div className="div_transport">
                <label htmlFor="new_floor_area" className="settle_label">
                  Size of new residential buildings (gross SQM)
                </label>
                <input
                  className="input_occupancy"
                  type="number"
                  id="new_floor_area"
                  name="new_floor_area"
                  onChange={handleNewFloorArea}
                  defaultValue={newFloorArea}
                  required
                />
              </div>
            </Tooltip>
            <Tooltip title="If you would like to consider changes in household energy use for heating, for example through retrofitting, please enter the expected percentage savings in energy use.">
              <div className="div_transport">
                <label>
                  <b>Household heating energy efficiency</b>
                </label>
                <label></label>
              </div>
            </Tooltip>
            {/* <div className="div_transport">
              <label htmlFor="eff_gain">
                Do you want “Household energy efficiency”?
              </label>
              <select
                className="hse_energy options"
                id="eff_gain"
                onChange={(e) => setEffGain(e.target.value)}
                defaultValue={effGain}
              >
                <option value="DefaultOption">Select an option</option>
                <option value={ceYes}>Yes</option>
                <option value={ceNo}>No</option>
              </select>
            </div> */}

            <div className="div_breakdown">
              <label htmlFor="local_electricity">
                Consider “Household energy efficiency”:
              </label>
              <input
                className="checkbox_cb"
                type="checkbox"
                id="eff_gain"
                checked={effGain}
                defaultValue={effGain}
                onChange={handleEffGain}
              />
            </div>

            {effGain && (
              <>
                <div className="div_transport">
                  <label htmlFor="eff_scaler" className="settle_label">
                    <b>% </b>energy reduction of household heating &#38; cooling
                  </label>
                  <input
                    className="input_occupancy"
                    type="number"
                    id="eff_scaler"
                    onChange={handleEffScaler}
                    defaultValue={effScaler}
                    min="0"
                    max="100"
                    required
                  />
                </div>
                <div className="div_transport">
                  <label>
                    <b>Energy production</b>
                  </label>
                  <label></label>
                </div>
              </>
            )}

            <div className="div_breakdown">
              <label htmlFor="local_electricity">
                Consider local electricity production:
              </label>
              <input
                className="checkbox_cb"
                type="checkbox"
                id="local_electricity"
                checked={localElectricity}
                defaultValue={localElectricity}
                onChange={handleLocalElectricity}
              />
            </div>

            {localElectricity && (
              <>
                <div className="div_transport">
                  <label htmlFor="el_type">
                    What is the source of local electricity production?
                  </label>
                  <select
                    className="local_energy_elec"
                    id="el_type"
                    onChange={(e) => setElectricityType(e.target.value)}
                    defaultValue={elType}
                  >
                    <option value="DefaultOption">Select source</option>
                    <option value="Electricity by coal">
                      Electricity by coal
                    </option>
                    <option value="Electricity by gas">
                      Electricity by gas
                    </option>
                    <option value="Electricity by nuclear">
                      Electricity by nuclear
                    </option>
                    <option value="Electricity by hydro">
                      Electricity by hydro
                    </option>
                    <option value="Electricity by wind">
                      Electricity by wind
                    </option>
                    <option value="Electricity by petroleum and other oil derivatives">
                      Electricity by petroleum and other oil derivatives
                    </option>
                    <option value="Electricity by biomass and waste">
                      Electricity by biomass and waste
                    </option>
                    <option value="Electricity by solar photovoltaic">
                      Electricity by solar photovoltaic
                    </option>
                    <option value="Electricity by solar thermal">
                      Electricity by solar thermal
                    </option>
                    <option value="Electricity by tide, wave, ocean">
                      Electricity by tide, wave, ocean
                    </option>
                    <option value="Electricity by Geothermal">
                      Electricity by Geothermal
                    </option>
                    <option value="Electricity nec">No Electricity</option>
                  </select>
                </div>

                <div className="div_transport">
                  <label htmlFor="electricity_scaler" className="settle_label">
                    What % of demand is covered by this new source?
                  </label>
                  <input
                    className="input_occupancy"
                    type="number"
                    id="electricity_scaler"
                    onChange={handleElScaler}
                    defaultValue={elScaler}
                    min="0"
                    max="100"
                    placeholder="0-100 %"
                    required
                  />
                </div>
              </>
            )}

            <div className="div_transport">
              <label>
                <b>Sustainable Heating</b>
              </label>
              <label></label>
            </div>

            <div className="div_breakdown">
              <label htmlFor="s_heating">
                Consider changes in the heating share:
              </label>
              <input
                className="checkbox_cb"
                type="checkbox"
                id="s_heating"
                checked={sHeating}
                defaultValue={sHeating}
                onChange={handleHeatingShare}
              />
            </div>

            {sHeating && (
              <>
                <div className="div_heating">
                  <label htmlFor="district_heating" className="settle_label">
                    District heating
                  </label>
                  <input
                    className="input_occupancy"
                    type="number"
                    id="district_heating"
                    onChange={handleDistrictProp}
                    defaultValue={districtPropLocal}
                  />
                </div>

                <div className="div_heating">
                  <label htmlFor="electric_heating" className="settle_label">
                    Electricity heating
                  </label>
                  <input
                    className="input_occupancy"
                    type="number"
                    id="electric_heating"
                    onChange={handleElectricityHeatProp}
                    defaultValue={electricityHeatPropLocal}
                  />
                </div>

                <div className="div_heating">
                  <label htmlFor="combustable_fuels" className="settle_label">
                    Combustable fuels
                  </label>
                  <input
                    className="input_occupancy"
                    type="number"
                    id="electric_heating"
                    onChange={handleCombustableFuelsProp}
                    defaultValue={combustableFuelsPropLocal}
                  />
                </div>

                <div className="div_heating">
                  <label htmlFor="liquid_heating" className="settle_label">
                    - Liquid heating (combustable fuel)
                  </label>
                  <input
                    className="input_occupancy"
                    type="number"
                    id="liquid_heating"
                    onChange={handleLiquidsProp}
                    defaultValue={liquidsPropLocal}
                  />
                </div>
                <div className="div_heating">
                  <label htmlFor="solid_heating" className="settle_label">
                    - Solid heating (combustable fuel)
                  </label>
                  <input
                    className="input_occupancy"
                    type="number"
                    id="solid_heating"
                    onChange={handleSolidProp}
                    defaultValue={solidsPropLocal}
                  />
                </div>

                <div className="div_heating">
                  <label htmlFor="gas_heating" className="settle_label">
                    - Gasses heating (combustable fuel)
                  </label>
                  <input
                    className="input_occupancy"
                    type="number"
                    id="gas_heating"
                    onChange={handleGasesProp}
                    defaultValue={gasesPropLocal}
                  />
                </div>
                <div className="div_heating">
                  <label htmlFor="district_value" className="settle_label">
                    District heating direct emission factor
                  </label>
                  <input
                    className="input_occupancy"
                    type="number"
                    id="district_value"
                    onChange={handleDistrictValue}
                    defaultValue={districtValueLocal}
                  />
                </div>
              </>
            )}
          </div>

          {policyYear > 0 && popSizePolicy > 0 && newFloorArea > 0 && (
            <div className="nextCBQ">
              <Button
                size="small"
                value="charts"
                onClick={() => setCbTransport(true)}
                label="Next &raquo;"
                primary
              />
            </div>
          )}
        </section>
      </article>
    );
  } else {
    return (
      <ConsumptionTransport
        policyYear={policyYear}
        newFloorArea={newFloorArea}
        popSizePolicy={popSizePolicy}
        effGain={effGain}
        effScaler={effScaler}
        localElectricity={localElectricity}
        elType={elType}
        elScaler={elScaler}
        sHeating={sHeating}
        districtProp={parseFloat(districtPropLocal)}
        electricityHeatProp={parseFloat(electricityHeatPropLocal)}
        combustableFuelsProp={parseFloat(combustableFuelsPropLocal)}
        liquidsProp={parseFloat(liquidsPropLocal)}
        solidsProp={parseFloat(solidsPropLocal)}
        gasesProp={parseFloat(gasesPropLocal)}
        districtValue={parseFloat(districtValueLocal)}
      />
    );
  }
};

ConsumptionHseEnergy.propTypes = {
  districtProp: PropTypes.number.isRequired,
  electricityHeatProp: PropTypes.number.isRequired,
  combustableFuelsProp: PropTypes.number.isRequired,
  liquidsProp: PropTypes.number.isRequired,
  solidsProp: PropTypes.number.isRequired,
  gasesProp: PropTypes.number.isRequired,
  districtValue: PropTypes.number.isRequired,
};
