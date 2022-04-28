import { useState, useEffect } from "react";
import "../css/tabs.css";
import { ModuleHeader } from "./ModuleHeader";
import { LandUseChangeTableForm } from "./LandUseChangeTableForm";
import { Welcome } from "./Welcome";
import { BuildingBaseline } from "./BuildingBaseline";
import { ConsumptionBaseline } from "./ConsumptionBaseline";
import { TransportBaseline } from "./TransportBaseline";
import { GenerateReport } from "./GenerateReport";
import { StartPage } from "./StartPage";
/* import { TransportBaseline } from "./TransportBaseline";
 */
export const TabModules = () => {
  const [toggleState, setToggleState] = useState(1);
  const ggiaGuideUrl = "https://github.com/QGasSP/ggia/wiki";
  const country = localStorage.getItem("country");
  const year = parseInt(localStorage.getItem("year"));
  const population = parseInt(localStorage.getItem("population"));

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    localStorage.setItem("toggleState", JSON.stringify(toggleState));
  }, [toggleState]);

  const openGuide = () => {
    window.open(ggiaGuideUrl, "_blank");
  };

  if (population === 0 && year === 0 && country === "" || window.localStorage === null) {
    return (
      <>
        <ModuleHeader />
        <div className="container">
          <div id="territorial_category"></div>

          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
              id="start"
            >
              Start{" "}
            </button>

            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              id="transport"
            >
              Transport
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              id="luc"
            >
              Land-use change
            </button>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
              id="buildings"
            >
              Buildings
            </button>
            <button
              className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
              id="consumption"
            >
              Consumption-based
              <br />
              quantification
            </button>
            <button
              className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
              /* onClick={() => toggleTab(6)} */
              onClick={openGuide}
              id="user_guide"
            >
              User-guide
            </button>
            <button
              className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(7)}
              id="generate_report"
            >
              Generate report
            </button>
          </div>
        </div>
        <div className="content-tabs">
          <>
            {toggleState == 1 && <Welcome />}
          {/*   {toggleState == 2 && <StartPage />} */}
          {/*   {toggleState == 3 && <StartPage />} */}
            {toggleState == 4 && <BuildingBaseline />}
          {/*   {toggleState == 5 && <StartPage />} */}
            {/*   {toggleState == 6 && <Report />} */}
            {toggleState == 7 && <GenerateReport />}
          </>
        </div>
      </>
    );
  };


  return (
    <>
      <ModuleHeader />
      <div className="container">
        <div id="territorial_category"></div>

        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
            id="start"
          >
            Start{" "}
          </button>

          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
            id="transport"
          >
            Transport
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
            id="luc"
          >
            Land-use change
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
            id="buildings"
          >
            Buildings
          </button>
          <button
            className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(5)}
            id="consumption"
          >
            Consumption-based
            <br />
            quantification
          </button>
          <button
            className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
            /*  onClick={() => toggleTab(6)} */
            onClick={openGuide}
            id="user_guide"
          >
            User-guide
          </button>
          <button
            className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(7)}
            id="generate_report"
          >
            Generate report
          </button>
        </div>
      </div>
      <div className="content-tabs">
        <>
          {toggleState == 1 && <Welcome />}
          {toggleState == 2 && <TransportBaseline />}
          {toggleState == 3 && <LandUseChangeTableForm />}
          {toggleState == 4 && <BuildingBaseline />}
          {toggleState == 5 && <ConsumptionBaseline />}
          {/*  {toggleState == 6 && <StartPage />} */}
          {toggleState == 7 && <GenerateReport />}
        </>
      </div>
    </>
  );
};
