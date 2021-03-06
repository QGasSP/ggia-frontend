import { useState, useEffect } from "react";
import "../css/tabs.css";
import { ModuleHeader } from "./ModuleHeader";
import { useNavigate } from "react-router-dom";

/**
 * TabModules for application tabs navigation
 * @return {}
 */

export const TabModules = () => {
  const [toggleState, setToggleState] = useState(1);
  const navigate = useNavigate();
  const ggiaGuideUrl = "https://drive.google.com/file/d/1kz9lxrfJqlT1X0dXDyw8kD1OmkTkzYme";
  const country = localStorage.getItem("country");
  const year = parseInt(localStorage.getItem("year"));
  const population = parseInt(localStorage.getItem("population"));

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const openWelcomePage = () => {
    toggleTab(1);
    navigate("/", { replace: true });
  };

  const openTransportModule = () => {
    toggleTab(2);
    navigate("transportBaseline", { replace: true });
  };

  const openLandUseChange = () => {
    toggleTab(3);
    navigate("landUseChangeTableForm", { replace: true });
  };

  const openBuildings = () => {
    toggleTab(4);
    navigate("buildingBaseline", { replace: true });
  };
  const openConsumption = () => {
    toggleTab(5);
    navigate("consumptionBaseline", { replace: true });
  };
  const openGenerateReport = () => {
    toggleTab(7);
    navigate("generateReport", { replace: true });
  };
  
  useEffect(() => {
    localStorage.setItem("toggleState", JSON.stringify(toggleState));
  }, [toggleState]);


  const openGuide = () => {
    window.open(ggiaGuideUrl, "_blank");
  };

  if (population === 0 && year === 0 &&  country === "" ||
    window.localStorage === null
  ) {
    return (
      <>
        <ModuleHeader />
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={openWelcomePage}
              id="start"
            >
              Start{" "}
            </button>

            <button
             className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              id="transport"
              onClick={() => navigate("transportBaseline", { replace: true })}
            >
              Transport
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              id="luc"
              onClick={() => navigate("landUseChangeTableForm", { replace: true })}
            >
              Land-use change
            </button>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => navigate("buildingBaseline", { replace: true })}
              id="buildings"
            >
              Buildings
            </button>
            <button
              className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
              id="consumption"
              onClick={() => navigate("consumptionBaseline", { replace: true })}
            >
              Consumption-based
              <br />
              quantification
            </button>
            <button
              className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
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
      </>
    );
  }else{

  return (
    <>
      <ModuleHeader />
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={openWelcomePage}
            id="start"
          >
            START
          </button>

          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={openTransportModule}
            id="transport"
          >
            TRANSPORT
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={openLandUseChange}
            id="luc"
          >
            LAND-USE CHANGE
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={openBuildings}
            id="buildings"
          >
            BUILDINGS
          </button>
          <button
            className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
            onClick={openConsumption}
            id="consumption"
          >
            CONSUMPTION-BASED
            <br />
            QUANTIFICATION
          </button>
          <button
            className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
            onClick={openGuide}
            id="user_guide"
          >
            USER-GUIDE
          </button>
          <button
            className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
            onClick={openGenerateReport}
            id="generate_report"
          >
            GENERATE REPORT
          </button>
        </div>
      </div>
    </>
  );
};
};
