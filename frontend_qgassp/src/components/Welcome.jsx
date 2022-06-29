import React from "react";
import { Button } from "./Button";
import Divider from "@mui/material/Divider";
import "../css/welcome.css";
import { useNavigate } from "react-router-dom";

/**
 * Welcome page UI component
 * @return {}
 */

export const Welcome = () => {
  const navigate = useNavigate();
  
  return (
    <article>
      <section className="section_welcome">
        <div className="row_welcome">
          <div className="column_welcome">
            <h2>Welcome to the GGIA tool</h2>
            <br />
            <p className="welcome-paragraph">The ESPON GGIA tool is designed to quantify the greenhouse gas emissions in spatial planning.
               It has two quantification modes: territorial mode and consumption-based mode.</p>
            <p className="welcome-paragraph">The first step is to estimate the baseline CO2 emissions.
              After that the CO2 emissions of new settlements and/or various planning policies can be quantified.</p>
            <p className="welcome-paragraph">When using the default values, GGIA down-scales country-level European data and creates future projections based on the EU Reference Scenario 2016.
              Consumption-based quantification applies the Exiobase matrix and the data from Household Budget Surveys (HBS).</p>
            <p className="welcome-paragraph">
              For more accurate results, local experts can create a local dataset and upload it into the GGIA tool in csv format.
              This way the most accurate data available can be applied in the quantification.
            </p>
            <p className="welcome-paragraph">
              As the quantification results depend on the input values, ESPON EGTC cannot guarantee the authenticity of results and cannot be held responsible
              for any decisions taken based on the results or indications from the GGIA tool.
            </p>
            <p className="welcome-paragraph">
             GGIA is an open-source application. The source code in Python is available in
              <a href="https://github.com/QGasSP/ggia"
              target="_blank"
              className="link"
              rel="noreferrer"> GitHub </a>. <a className="link" href="https://www.espon.eu/" target="_blank" rel="noreferrer">ESPON EGTC</a> welcomes
            all new hard-coded proposals on additional quantification modules or module versions that improve the current calculation methodology. 
            </p>
            <br />
            <div className="start_button">
              <Button
                size="small"
                label="Start"
                type="submit"
                onClick={() => navigate("startPage", { replace: true })}
                primary
              />
            </div>
            </div>
            <Divider orientation="vertical" flexItem></Divider>
            <div className="column_welcome2">
              <br />
              <iframe width="560" height="315" src="https://www.youtube.com/embed/DIwmF1K4tjI"
              title="YouTube video player" allowFullScreen></iframe>
            </div>
        </div>
      </section>
    </article>
  );
};
