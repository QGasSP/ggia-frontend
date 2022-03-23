import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import "../css/u1planner.css";
import Chip from "@mui/material/Chip";
import { Button } from "./Button";
import { ConsumptionResults } from "./ConsumptionResults";

/**
 * Consumption transport UI
 * @return {}
 */

export const ConsumptionTransport = () => {
  const [nextCBResults, setCbResults] = useState(false);

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
              <label htmlFor="energy_prd">Consider biofuel in transport?</label>
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
              <label htmlFor="energy_reduction" className="settle_label">
                Proportion of biofuels in transport?
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
            <br />

            <div className="div_transport">
              <label>
                <b>Electric vehicles</b>
              </label>
              <label></label>
            </div>
            <div className="div_transport">
              <label htmlFor="energy_reduction" className="settle_label">
                Proportion of electric vehicles in private transport
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
                <b>Modal shift</b>
              </label>
              <label></label>
            </div>
            <div className="div_transport">
              <label htmlFor="energy_reduction" className="settle_label">
                Relative decrease in private transport fuel use
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
              <label htmlFor="energy_reduction" className="settle_label">
                Relative decrease in private transport ownership
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
              <label htmlFor="energy_reduction" className="settle_label">
                Relative increase in public transport
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
       
          </div>
          <div className="nextCBQ">
            <Button
              size="small"
              value="charts"
              onClick={() => setCbResults(true)}
              label="Next &raquo;"
              primary
            />
          </div>
        
        <br />
      </section>
    </article>
   );
  } else {
    return <ConsumptionResults />;
  }
};
