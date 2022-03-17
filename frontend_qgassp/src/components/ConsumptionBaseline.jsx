import React from "react";
import "../css/startpage.css";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

export const ConsumptionBaseline= () => {
 
    return (
      <>
        <article>
          <br />
          <div>
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="Area and type population" />
            </Divider>
          </div>

      
        </article>
      </>
    );
};
