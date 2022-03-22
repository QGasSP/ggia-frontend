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
  const optionsCb = [];
  for (let i = 2022; i < 2051; i++) optionsCb.push(i);

  if (nextCBTransport === false) {
    return (
      <article>
        <section>
          <div>
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="Policy quantification" />
            </Divider>
          </div>
          <br />

          <div className="settlementDiv">
            <div className="div_transport">
              <label htmlFor="policy_year">
                {" "}
                What year is the policy implemented?
              </label>
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
              <label htmlFor="new_residence_building" className="settle_label">
                New residential buildings (gross SQM)
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
