import React from "react";
import Divider from "@mui/material/Divider";
import "../css/u1planner.css";
import Chip from "@mui/material/Chip";
// import { Button } from "./Button";

/**
 * Consumption transport UI
 * @return {}
 */

export const ConsumptionTransport = () => {
  return (
    <article>
      <section>
        <div>
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="Transportation" />
          </Divider>
        </div>
        <br />
      </section>
    </article>
  );
};
