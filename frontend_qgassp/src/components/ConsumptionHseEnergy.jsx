import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import "../css/u1planner.css";
import Chip from "@mui/material/Chip";
import { Button } from "./Button";
import { ConsumptionTransport } from "./ConsumptionTransport";

/**
 * Welcome page UI component
 * @return {}
 */

export const ConsumptionHseEnergy = () => {
  const [nextCBTransport, setCbTransport] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleBreakdownChange = (e) => {
    e.target.checked;
    setChecked(!checked);
  };

  const optionsCb = [];
  for (let i = 2022; i < 2051; i++) optionsCb.push(i);

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
          <br />

          <div className="settlementDiv">
            <div className="div_transport">
              <label htmlFor="policy_year"> Policy implementation year</label>
              <select
                className="select_policy_year"
                id="policy_year"
                defaultValue=""
              >
                <option value="DefaultOption">Select year</option>
                <optgroup label="Policy implementation year">
                  {optionsCb.map((option) => (
                    <option key={option} value={option}>
                      {option}{" "}
                    </option>
                  ))}
                </optgroup>
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
                min="0"
                placeholder="0"
                required
              />
            </div>
            <div className="div_transport">
              <label>
                <b>Construction</b>
              </label>
              <label></label>
            </div>

            <div className="div_transport">
              <label htmlFor="new_residence_building" className="settle_label">
                Size of new residential buildings (gross SQM)
              </label>
              <input
                className="input_occupancy"
                type="number"
                id="new_residence_building"
                min="0"
                placeholder="0"
                required
              />
            </div>
          </div>

          <div className="settlementDiv">
            <div className="div_transport">
              <label>
                <b>Household heating energy efficiency</b>
              </label>
              <label></label>
            </div>
            <div className="div_transport">
              <label htmlFor="energy_yes_no">
                Do you want “Household energy efficiency”?
              </label>
              <select
                className="hse_energy options"
                id="energy_yes_no"
                // onChange={(e) => setEnergy options(e.target.value)}
                defaultValue=""
              >
                <option value="DefaultOption">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="div_transport">
              <label htmlFor="energy_reduction" className="settle_label">
                <b>% </b>energy reduction of household heating &#38; cooling
              </label>
              <input
                className="input_occupancy"
                type="number"
                id="energy_reduction"
                min="0"
                max="100"
                placeholder="0-100 %"
                required
              />
            </div>
            <div className="div_transport">
              <label>
                <b>Energy production</b>
              </label>
              <label></label>
            </div>

            <div className="div_transport">
              <label htmlFor="energy_prd">
                Consider local electricity production?
              </label>
              <select
                className="prod_energy_options"
                id="energy_prod"
                // onChange={(e) => setEnergy options(e.target.value)}
                defaultValue=""
              >
                <option value="DefaultOption">Select an option</option>
                <option value="yes_prod">Yes</option>
                <option value="no_prod">No</option>
              </select>
            </div>

            <div className="div_transport">
              <label htmlFor="energy_prd_elec">
                What is the source of local electricity production?
              </label>
              <select
                className="local_energy_elec"
                id="energy_prod_elec"
                // onChange={(e) => setEnergy options(e.target.value)}
                defaultValue=""
              >
                <option value="DefaultOption">Select source</option>
                <option value="solar">solar pvc</option>
                <option value="missing">missing options-todo</option>
              </select>
            </div>

            <div className="div_transport">
              <label htmlFor="energy_demand_percent" className="settle_label">
                What % of demand is covered by this new source?
              </label>
              <input
                className="input_occupancy"
                type="number"
                id="energy_demand_percent"
                min="0"
                max="100"
                placeholder="0-100 %"
                required
              />
            </div>

            <div className="div_transport">
              <label htmlFor="heat_share">
                Consider changes in the heating share?
              </label>
              <select
                className="heat_share_options"
                id="heat_share"
                // onChange={(e) => setEnergy options(e.target.value)}
                defaultValue=""
              >
                <option value="DefaultOption">Select an option</option>
                <option value="yes_share">Yes</option>
                <option value="no_share">No</option>
              </select>
            </div>
            <br />
            <Divider textAlign="left" flexItem>
              {" "}
              <b>Sustainable heating </b>
            </Divider>
            <br/>
            <div className="div_transport">
              <label htmlFor="source_breakdown">
                <b>Select to view breakdown of heating sources in the area</b>
              </label>
              <input
              className="checkbox_cb"
                type="checkbox"
                id="source_breakdown"
                checked={checked}
                onChange={handleBreakdownChange}
              />
            </div>

            {checked === true && (
              <div className="div_transport">
                <label>District heating</label>
                <label>0.3 %</label>
                <br />
                <label>Electricity</label>
                <label>13 %</label>
                <br />
                <label>Combustible fuels</label>
                <label>28 %</label>
                <br />
                <label>
                  <b>Combustible fuels</b>
                </label>
                <label></label>
                <br />
                <label>Solid heating</label>
                <label>28 %</label>
                <br />
                <label>Liquid heating</label>
                <label>28 %</label>
                <br />
                <label>Gas heating</label>
                <label>44 %</label>
                <br />
                <label>
                  <b>household fuel combustion</b>
                </label>
                <label></label>
                <br />
                <label>Solid </label>
                <label>28 %</label>
                <br />
                <label>Liquid </label>
                <label>28 %</label>
                <br />
                <label>Gas </label>
                <label>44 %</label>
              </div>
            )}
          </div>

          <div className="nextCBQ">
            <Button
              size="small"
              value="charts"
              onClick={() => setCbTransport(true)}
              label="Next &raquo;"
              primary
            />
          </div>
        </section>
      </article>
    );
  } else {
    return <ConsumptionTransport />;
  }
};
