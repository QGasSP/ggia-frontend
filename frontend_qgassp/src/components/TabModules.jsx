import { useState } from "react";
import "../css/tabs.css";

function TabModules() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
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
          Consumption-based quantification
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
          onClick={() => toggleTab(7)}
          id="user_guide"
        >
          User-guide
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Start</h2>
          <hr />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2> Transport</h2>
          <hr />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2> Land-use change</h2>
          <hr />
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2> Buildings</h2>
          <hr />
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <h2> Consumption-based quantification</h2>
          <hr />
        </div>
        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          <h2>Create local data-set</h2>
          <hr />
        </div>
        <div
          className={toggleState === 7 ? "content  active-content" : "content"}
        >
          <h2> User-guide</h2>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default TabModules;
