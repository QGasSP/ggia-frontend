import React, { useState } from "react";
import { Button } from "./Button";
import { StartPage } from "./StartPage";
import "../css/welcome.css";

/**
 * Welcome page UI component
 * @return {}
 */

export const Welcome = () => {
  const [startGGIA, setStartPage] = useState(false);

  const showStartPage = () => {
    setStartPage(true);
  };

  if (startGGIA === false) {
    return (
      <article>
        <section className="section_welcome">
          <div className="row_welcome">
            <div className="column_welcome">
              <h2>Welcome to GGIA tool</h2>
              <br />
              The ESPON GGIA tool is designed to quantify the greenhouse gas
              emissions in spatial planning. It has two calculation modes: The
              territorial mode consists of sectoral calculation modules, which
              can quantify the direct greenhouse gas emissions within the
              borders of the area in concern. The consumption-based mode
              quantifies the global greenhouse gas emissions caused by the
              consumption of the residents in the area. The first step is to
              calculate the baseline emissions (absolute CO2e emissions). The
              second step is to quantify the impact of a plan or a policy
              (relative CO2e emissions). You can start the calculation without
              any expert knowledge on greenhouse gas quantification. For more
              accurate results, the experts in Your organisation can create a
              local dataset and upload it into the GGIA tool. This way the
              quantification applies the most accurate source data available and
              it can be aligned with the previous greenhouse gas analyses of
              Your area. GGIA enables the comparison of climate policies across
              the territories and cities of Europe. As the quantification
              results depend on the input values, ESPON EGTC cannot quarantee
              the authenticity of the results and cannot be held responsible for
              any decisions taken based on the results from the GGIA tool. GGIA
              is an open-source application. The source code is available in
              GitHub and ESPON EGTC welcomes all proposals on additional
              quantification modules and the proposals to improve the current
              calculation methods.
              <br />
              <div className="start_button">
                <Button
                  size="small"
                  label="Start"
                  type="submit"
                  onClick={showStartPage}
                  primary="true"
                />
              </div>
            </div>
            <div className="column_welcome">
              <br />

              <iframe
                width="90%"
                height="360"
                src="https://www.youtube.com/embed/BcMUDxOC5Tg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </section>
      </article>
    );
  } else {
    return <StartPage />;
  }
};