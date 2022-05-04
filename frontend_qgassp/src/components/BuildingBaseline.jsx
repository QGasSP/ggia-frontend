import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { BuildingBaselineCharts } from "./BuildingBaselineCharts";
import "../css/buildingbaseline.css";
import axios from "axios";

import urlPrefix from "../Config";
import { CircularProgress } from "@mui/material";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import { RadialChart, DiscreteColorLegend } from "react-vis";
import {
  useStorageFloat
} from "../reducers/useStorage";

/**
 * BuildingsBaseline user input form
 * @return {}
 */

const residentialLabels = [
  { title: "apartment", color: "#164059" },
  { title: "terraced", color: "#F25F29" },
  { title: "semi-detached", color: "#F23A29" },
  { title: "detached", color: "#D9D9D9" },
];
const buildingLabels = [
  { title: "retail", color: "#164059" },
  { title: "health", color: "#F25F29" },
  { title: "hospitality", color: "#F23A29" },
  { title: "offices", color: "#D9D9D9" },
  { title: "industrial", color: "ffcc00" },
  { title: "warehouses", color: "#008f75" },
];
export const BuildingBaseline = () => {
  const country = localStorage.getItem("country");
  const year = parseInt(localStorage.getItem("year"));
  const population = parseInt(localStorage.getItem("population"));

  // residential units
  // #region
  const [apartment, setApartment] = useStorageFloat("apartment", 0);
  const [terraced, setTerraced] = useStorageFloat("terraced", 0);
  const [semiDetached, setSemiDetached] = useStorageFloat("semiDetached", 0);
  const [detached, setDetached] = useStorageFloat("detached", 0);
  const [residentialTotal, setResidentialTotal] = useStorageFloat("residentialTotal", 0);

  const getCurrentResidentTotal = () => {
    setResidentialTotal(apartment  + terraced + semiDetached + detached);
  };
  // #endregion

  // commercuial buildings
  // #region
  const [retail, setRetail] = useStorageFloat("retail", 0);
  const [health, setHealth] = useStorageFloat("health", 0);
  const [hospitality, setHospitality] = useStorageFloat("hospitality", 0);
  const [offices, setOffices] = useStorageFloat("offices", 0);
  const [industrial, setIndustrial] = useStorageFloat("industrial", 0);
  const [warehouses, setWarehouses] = useStorageFloat("warehouses", 0);
  const [commTotal, setCommTotal] =  useStorageFloat("commTotal", 0);

  const getCurrentCommTotal = () => {
    setCommTotal(
      retail + health + hospitality + offices + industrial + warehouses
    );
  };
  // #endregion

  const [buildingsBaselineCharts, setBuildingsBaselineCharts] = useState(false);
  const [errorBuildBaseline, setErrorBuildBaseline] = useState("");
  const [buildingsBaselineResponse, setBuildingsBaselineResponse] = useState(() => {
    const savedBasline = localStorage.getItem("buildingsBaselineResponse");
    const initialValue = JSON.parse(savedBasline);
    return initialValue || {};
  });
  const setBuildingsResponse = (response) => {
    setBuildingsBaselineResponse(response.data);
  };

  // handlers for residential units
  // #region
  const handleApartment = (e) => {
    e.preventDefault();
    setApartment(parseFloat(e.target.value));
  };
  const handleTerraced = (e) => {
    e.preventDefault();
    setTerraced(parseFloat(e.target.value));
  };
  const handleSemiDetached = (e) => {
    e.preventDefault();
    setSemiDetached(parseFloat(e.target.value));
  };
  const handleDetached = (e) => {
    e.preventDefault();
    setDetached(parseFloat(e.target.value));
  };
  // #endregion

  // handlers for commercial buildings
  // #region
  const handleRetail = (e) => {
    e.preventDefault();
    setRetail(parseFloat(e.target.value));
  };
  const handleHealth = (e) => {
    e.preventDefault();
    setHealth(parseFloat(e.target.value));
  };
  const handleHospitality = (e) => {
    e.preventDefault();
    setHospitality(parseFloat(e.target.value));
  };
  const handleOffices = (e) => {
    e.preventDefault();
    setOffices(parseFloat(e.target.value));
  };
  const handleIndustrial = (e) => {
    e.preventDefault();
    setIndustrial(parseFloat(e.target.value));
  };
  const handleWarehouses = (e) => {
    e.preventDefault();
    setWarehouses(parseFloat(e.target.value));
  };
  // #endregion

  const [loadingStyles, setLoadingStyle] = useState({
    display: "none",
  });
  // render next page
  const setBuildingTypes = () => {
    const residential = {
      apartment: parseFloat(apartment),
      terraced: parseFloat(terraced),
      semiDetached: parseFloat(semiDetached),
      detached: parseFloat(detached)
    };
    const commercial = {
      retail: parseFloat(retail),
      health: parseFloat(health),
      hospitality: parseFloat(hospitality),
      offices: parseFloat(offices),
      industrial: parseFloat(industrial),
      warehouses: parseFloat(warehouses),
    }; 
    const request = {
      country,
      year,
      population,
      baseline: {
        residential,
        commercial,
      }
    };
    localStorage.setItem(
      "buildingsBaselineRequest",
      JSON.stringify(request)
    );
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    };
    setLoadingStyle({
      display: "block",
    });
    axios
    .post(
      urlPrefix + "/api/v1/calculate/buildings/baseline",
      request,
      headers
    )
    .then((response) => setBuildingsResponse(response.data))
    .then(() => {
      setLoadingStyle({
        display: "none",
      });
    })
    .catch((error) => {
      setErrorBuildBaseline({ errorMessage: error.message });
      // eslint-disable-next-line no-console
      console.error("There was an error!", errorBuildBaseline);
    });

  };

  const moveToBuildingsBaselineResults = () => {
    setBuildingsBaselineCharts(true);
  }

  useEffect(() => {
    localStorage.setItem(
      "buildingsBaselineResponse",
      JSON.stringify(buildingsBaselineResponse)
    );
  }, [buildingsBaselineResponse]);

  if (buildingsBaselineCharts === false) {
    return (
      <div className="div_transport">
        <article>
          <div className="headerSettlement">
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="BUILDINGS BASELINE" />
            </Divider>
          </div>

          <section className="section-transport">
            <Alert severity="info">
              This section creates a baseline scenario until 2050 for the
              greenhouse gas emissions caused by the energy use in buildings in
              the assessment area.
            </Alert>
            <section>
              <Divider textAlign="left" flexItem>
                {" "}
                <b>U6.1 Number of residential units</b>
              </Divider>
            </section>
            <div className="settlementDiv">
              <div className="row">
                <div className="column">
                  <Alert severity="info">
                    Specify the total number of the existing residential units
                    within the assessment area.
                  </Alert>
                  <div className="settlement_headers">
                    <label className="shareInfo">
                      <b>Residential Units </b>
                    </label>
                  </div>
                  <Tooltip title="One apartment in a residential multi-storey building is one unit.">
                    <div className="div_transport">
                      <label htmlFor="apartment" className="settle_label">
                        Apartment
                      </label>
                      <input
                        className="input_transport"
                        type="number"
                        step="1"
                        id="apartment"
                        min="0"
                        placeholder={apartment}
                        onChange={handleApartment}
                        onMouseLeave={getCurrentResidentTotal}
                        required
                      />
                    </div>
                  </Tooltip>
                  <Tooltip title="One apartment in a residential terraced building is one unit.">
                    <div className="div_transport">
                      <label htmlFor="terraced" className="settle_label">
                        Terraced
                      </label>
                      <input
                        className="input_transport"
                        type="number"
                        step="1"
                        id="terraced"
                        min="0"
                        placeholder={terraced}
                        onChange={handleTerraced}
                        onMouseLeave={getCurrentResidentTotal}
                        required
                      />
                    </div>
                  </Tooltip>
                  <Tooltip title="One apartment in a semi-detached house is one unit.">
                    <div className="div_transport">
                      <label htmlFor="semiDetached" className="settle_label">
                        {" "}
                        Semi-detached
                      </label>
                      <input
                        className="input_transport"
                        type="number"
                        id="semiDetached"
                        step="any"
                        min="1"
                        placeholder={semiDetached}
                        onChange={handleSemiDetached}
                        onMouseLeave={getCurrentResidentTotal}
                        required
                      />
                    </div>
                  </Tooltip>
                  <Tooltip title="One detached house is one unit.">
                    <div className="div_transport">
                      <label htmlFor="detached" className="settle_label">
                        Detached
                      </label>
                      <input
                        className="input_transport"
                        type="number"
                        id="detached"
                        step="1"
                        min="0.0"
                        placeholder={detached}
                        onChange={handleDetached}
                        onMouseLeave={getCurrentResidentTotal}
                        required
                      />
                    </div>
                  </Tooltip>
                  <div className="div_transport">
                    <label htmlFor="detached" className="settle_label">
                      Total
                    </label>
                    <label className="bb-lbl">{residentialTotal}</label>
                  </div>
                </div>

                <div className="column">
                  <div className="div_transport">
                    {residentialTotal > 0 && (
                      <RadialChart
                        type="piechart"
                        data={[
                          {
                            angle: terraced,
                            label: "Terraced",
                            color: "#164059",
                          },
                          {
                            angle: semiDetached,
                            label: "Semi-detached",
                            color: "#F25F29",
                          },
                          {
                            angle: detached,
                            label: "Town",
                            color: "#F23A29",
                          },
                          {
                            angle: apartment,
                            label: "Apartment",
                            color: "#730E16",
                          },
                        ]}
                        width={180}
                        height={180}
                        colorType="literal"
                      />
                    )}
                  </div>
                  {residentialTotal > 0 && (
                    <DiscreteColorLegend
                      items={residentialLabels}
                      orientation="horizontal"
                      strokeWidth="40"
                    />
                  )}
                </div>
              </div>
            </div>
            <section>
              <Divider textAlign="left" flexItem>
                {" "}
                <b>U6.2 Floor area of commercial buildings</b>
              </Divider>
            </section>
            <div className="settlementDiv">
              <div className="row">
                <div className="column">
                  <Alert severity="info">
                    Specify the total gross floor area of the existing
                    commercial buildings within the assessment area.
                  </Alert>
                  <div className="settlement_headers">
                    <label className="shareInfo">
                      <b>
                        Buildings (m<sup>2</sup>)
                      </b>
                    </label>
                  </div>
                  <div className="div_transport">
                    <label htmlFor="retail" className="settle_label">
                      Retail
                    </label>
                    <input
                      className="input_transport"
                      type="number"
                      step="1"
                      id="retail"
                      min="0"
                      placeholder={retail}
                      onChange={handleRetail}
                      onMouseLeave={getCurrentCommTotal}
                      required
                    />
                  </div>

                  <div className="div_transport">
                    <label htmlFor="health" className="settle_label">
                      Health
                    </label>
                    <input
                      className="input_transport"
                      type="number"
                      step="1"
                      id="health"
                      min="0"
                      placeholder={health}
                      onChange={handleHealth}
                      onMouseLeave={getCurrentCommTotal}
                      required
                    />
                  </div>

                  <div className="div_transport">
                    <label htmlFor="hospitality" className="settle_label">
                      {" "}
                      Hospitality
                    </label>
                    <input
                      className="input_transport"
                      type="number"
                      id="hospitality"
                      step="any"
                      min="1"
                      placeholder={hospitality}
                      onChange={handleHospitality}
                      onMouseLeave={getCurrentCommTotal}
                      required
                    />
                  </div>

                  <div className="div_transport">
                    <label htmlFor="offices" className="settle_label">
                      Offices
                    </label>
                    <input
                      className="input_transport"
                      type="number"
                      id="offices"
                      step="1"
                      min="0.0"
                      placeholder={offices}
                      onChange={handleOffices}
                      onMouseLeave={getCurrentCommTotal}
                      required
                    />
                  </div>
                  <div className="div_transport">
                    <label htmlFor="industrial" className="settle_label">
                      Industrial
                    </label>
                    <input
                      className="input_transport"
                      type="number"
                      id="industrial"
                      step="1"
                      min="0.0"
                      placeholder={industrial}
                      onChange={handleIndustrial}
                      onMouseLeave={getCurrentCommTotal}
                      required
                    />
                  </div>
                  <div className="div_transport">
                    <label htmlFor="warehouses" className="settle_label">
                      Warehouses
                    </label>
                    <input
                      className="input_transport"
                      type="number"
                      id="warehouses"
                      step="1"
                      min="0.0"
                      placeholder={warehouses}
                      onChange={handleWarehouses}
                      onMouseLeave={getCurrentCommTotal}
                      required
                    />
                  </div>
                  <div className="div_transport">
                    <label htmlFor="offices" className="settle_label">
                      Total
                    </label>
                    <label className="bb-lbl">{commTotal}</label>
                  </div>
                </div>

                <div className="column">
                  <div className="div_transport">
                    {commTotal > 0 && (
                      <RadialChart
                        type="piechart"
                        data={[
                          {
                            angle: health,
                            label: "Health",
                            color: "#164059",
                          },
                          {
                            angle: hospitality,
                            label: "Hospitality",
                            color: "#F25F29",
                          },
                          {
                            angle: offices,
                            label: "Offices",
                            color: "#F23A29",
                          },
                          {
                            angle: retail,
                            label: "Retail",
                            color: "#730E16",
                          },
                          {
                            angle: industrial,
                            label: "Industrial",
                            color: "#ffcc00",
                          },
                          {
                            angle: warehouses,
                            label: "Warehouses",
                            color: "#008f75",
                          },
                        ]}
                        width={180}
                        height={180}
                        colorType="literal"
                      />
                    )}
                  </div>
                  {commTotal > 0 && (
                    <DiscreteColorLegend
                      items={buildingLabels}
                      orientation="horizontal"
                      strokeWidth="40"
                    />
                  )}
                </div>
              </div>
            </div>
                <div className="nextU2Button luc_alert_container">
                   {country && population && year && (
                  <div className="luc_alert_container">
                    <Button
                      size="small"
                      value="charts"
                      onClick={setBuildingTypes}
                      label="Submit"
                      primary
                    />
                  </div>
                   )}
                   {Object.keys(buildingsBaselineResponse).length !== 0 && (
                  <Button
                    id="btn-next"
                    size="small"
                    type="submit"
                    value="Submit"
                    onClick={moveToBuildingsBaselineResults}
                    label="Next &raquo;"
                    primary="true"
                  />
                  )}
                  <CircularProgress label="loading" style={loadingStyles} />
                </div>
          </section>
        </article>
      </div>
    );
  } else if (buildingsBaselineCharts !== false) {
    return (
      <BuildingBaselineCharts
        country={country}
        year={year}
        population={population}
        buildingsBaselineResponse={buildingsBaselineResponse}
      />
    );
  }
};
