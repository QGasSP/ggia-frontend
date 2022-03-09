import { useState } from "react";
import "../css/tabs.css";
import { ModuleHeader } from "./ModuleHeader";
import { StartPage} from "./StartPage";


export const TabModules = () => {
  const [toggleState, setToggleState] = useState(1);
  const [ggiaGuideUrl, setGgiaGuideUrl] = useState(
    "https://github.com/QGasSP/ggia/wiki"
  );

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const openGuide = () => {
    toggleTab(7);
    window.open(ggiaGuideUrl, "_blank");
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
          >
            Start{" "}
          </button>

          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
            id="territorial"
          >
            Transport
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
            id="territorial"
          >
            Land-use change
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
            id="territorial"
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
            onClick={() => toggleTab(6)}
            id="local_data"
          >
            Create local data-set
          </button>
          <button
            className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
            // onClick={() => toggleTab(7)}
            onClick={openGuide}
            id="user_guide"
          >
            User-guide
          </button>
        </div>
      </div>
    </>
  );
};
