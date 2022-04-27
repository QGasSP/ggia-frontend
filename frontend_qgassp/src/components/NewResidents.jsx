import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "../css/u2planner.css";
// import { U2planner } from "./U2planner";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import { useStorageFloat, useStorageInt } from "../reducers/useStorage";

/**
 * New resident user input form
 * @return {}
 */

export const NewResidents = () => {
  const navigate = useNavigate();

  const settlementDistribution = JSON.parse(
    localStorage.getItem("settlementDistribution")
  );
  
  const year = parseInt(localStorage.getItem("year"));

  const [nsMetropolitanCenter, setNsMetropolitan] = useStorageFloat(
    "nsMetropolitanCenter",
    parseFloat(0)
  );
  const [nsUrban, setNsUrban] = useStorageFloat("nsUrban", parseFloat(0));
  const [nsSuburban, setNsSubUrban] = useStorageFloat(
    "nsSuburban",
    parseFloat(0)
  );
  const [nsTown, setNsTown] = useStorageFloat("nsTown", parseFloat(0));
  const [nsRural, setNsRural] = useStorageFloat("nsRural", parseFloat(0));
  const [totalNewResidents, setTotalNewResidents] = useStorageFloat(
    "totalNewResidents",
    parseFloat(nsMetropolitanCenter) +
      parseFloat(nsUrban) +
      parseFloat(nsSuburban) +
      parseFloat(nsTown) +
      parseFloat(nsRural)
  );

  const [newResidents, setNewResidents] = useStorageInt("newResidents", 0);
  const [yearStart, setYearStart] = useStorageInt("yearStart", year);
  const [yearFinish, setYearFinish] = useStorageInt("yearFinish", 2050);

  const newSettlementDistribution = {};

  const newDevelopment = {};

  const optionsNewStart = [];
  for (let i = year; i < 2051; i++) optionsNewStart.push(i);

  const optionsNew = [];
  for (let i = 2022; i < 2051; i++) optionsNew.push(i);

  const handleNsMetropolitanCenter = (e) => {
    e.preventDefault();
    setNsMetropolitan(parseFloat(e.target.value));
  };
  const handleNsUrban = (e) => {
    e.preventDefault();
    setNsUrban(parseFloat(e.target.value));
  };
  const handleNsSuburban = (e) => {
    e.preventDefault();
    setNsSubUrban(parseFloat(e.target.value));
  };
  const handleNsTown = (e) => {
    e.preventDefault();
    setNsTown(parseFloat(e.target.value));
  };
  const handleNsRural = (e) => {
    e.preventDefault();
    setNsRural(parseFloat(e.target.value));
  };
  const handleStartYear = (e) => {
    e.preventDefault();
    setYearStart(Number(e.target.value));
  };
  const handleYearFinish = (e) => {
    e.preventDefault();
    setYearFinish(Number(e.target.value));
  };
  const handleNewResident = (e) => {
    e.preventDefault();
    setNewResidents(Number(e.target.value));
  };

  const getNewResidentsTotal = () => {
    setTotalNewResidents(
      parseFloat(nsMetropolitanCenter) +
        parseFloat(nsUrban) +
        parseFloat(nsSuburban) +
        parseFloat(nsTown) +
        parseFloat(nsRural)
    );
  };

  const updateU2Planner = () => {
    const newSettlementDistribution = {
      metropolitanCenter: nsMetropolitanCenter,
      urban: nsUrban,
      suburban: nsSuburban,
      town: nsTown,
      rural: nsRural,
    };
    localStorage.setItem(
      "newSettlementDistribution",
      JSON.stringify(newSettlementDistribution)
    );
    const newDevelopment = {
      newResidents,
      yearStart,
      yearFinish,
      newSettlementDistribution,
    };
    localStorage.setItem("newDevelopment", JSON.stringify(newDevelopment));
    goToU2();
  };

  useEffect(() => {
    localStorage.setItem(
      "newSettlementDistribution",
      JSON.stringify(newSettlementDistribution)
    );
  }, [newSettlementDistribution]);

  useEffect(() => {
    localStorage.setItem("newDevelopment", JSON.stringify(newDevelopment));
  }, [newDevelopment]);

  useEffect(() => {
    localStorage.setItem(
      "totalNewResidents",
      JSON.stringify(totalNewResidents)
    );
  }, [totalNewResidents]);

  const goToU2 = () => {
    navigate("/u2planner", {
      replace: true,
      /* state: {
          newDevelopment: newDevelopment,
        },  */
    });
  };

  useEffect(() => {
    localStorage.setItem("newDevelopment", JSON.stringify(newDevelopment));
  }, [newDevelopment]);

  return (
    <article>
      <div className="headerSettlement">
        <Divider textAlign="left" flexItem>
          {" "}
          <Chip label="U2 NEW DEVELOPMENT INPUT" />
        </Divider>
        <Alert severity="info">
          This section estimates new residents’ impact on the transport-related
          greenhouse gas emissions.
        </Alert>
      </div>

      <section className="sectionNewDev">
        <div className="newResidentDiv">
          <form onSubmit={updateU2Planner}>
            <label>
              <b>New residents</b>
            </label>
            <div className="div2">
              <Alert severity="info">
                Insert the total number of new residents moving in as a
                consequence of the plan/policy that is assessed.
              </Alert>
            </div>
            <Tooltip title="If the plan/policy will not increase the number of residents within the area, insert zero.">
              <div>
                <label htmlFor="new_residents">Number of new residents</label>
                <input
                  className="input_transport"
                  type="number"
                  pattern="[0-9]*"
                  min="0"
                  id="new_residents"
                  value={newResidents}
                  onChange={handleNewResident}
                  required
                />
                <label>&nbsp;&nbsp;&nbsp;</label>
              </div>
            </Tooltip>

            <Tooltip
              title="Start year is the first year during which new residents are moving in."
              placement="bottom"
            >
              <div>
                <label htmlFor="start_year"> Start</label>
                <select
                  className="ns_select"
                  id="start_year"
                  name="start_year"
                  onChange={handleStartYear}
                  defaultValue={yearStart}
                  required
                >
                  <option value="DefaultOption">Select start year</option>
                  {optionsNewStart.map((option) => (
                    <option key={option} value={option}>
                      {option}{" "}
                    </option>
                  ))}
                </select>
              </div>
            </Tooltip>
            <Tooltip
              title="End year is the last year during which  new residents are moving in."
              placement="bottom"
            >
              <div>
                <label htmlFor="finish_year"> End</label>
                <select
                  className="ns_select"
                  id="finish_year"
                  name="finish_year"
                  onChange={handleYearFinish}
                  defaultValue={yearFinish}
                  required
                >
                  <option value="DefaultOption">Select end year</option>
                  {optionsNew.map((option) => (
                    <option key={option} value={option}>
                      {option}{" "}
                    </option>
                  ))}
                </select>
              </div>
            </Tooltip>
            <br />
            <Tooltip title="These inputs are applied to scale down the statistical transport data from the national level to the assessment area.">
              <label>
                <b>Settlement type</b>
              </label>
            </Tooltip>
            <label>
              <b>Existing environment</b>
            </label>
            <label>
              <b>New development ({totalNewResidents}%)</b>
            </label>
            <div className="div2">
              <Alert severity="info">
                Describe below the new settlements. Allocate approximate
                percentages of new population to various types of new
                settlements to indicate where the new residents will reside. The
                percentages shall total 100.
              </Alert>
            </div>
            <Tooltip title="Urban settlement characterized by superb provision of public transportation including metro and/or tram, large pedestrian zones and high density of population.">
              <div>
                <label htmlFor="nsMetropolitan">Metropolitan area</label>
                <label>{settlementDistribution.metropolitanCenter}</label>
                <input
                  className="input_transport"
                  type="number"
                  pattern="[0-9]*"
                  step="0.1"
                  id="nsMetropolitan"
                  min="0"
                  max="100"
                  value={nsMetropolitanCenter}
                  onChange={handleNsMetropolitanCenter}
                  onMouseLeave={getNewResidentsTotal}
                  required
                />
              </div>
            </Tooltip>
            <Tooltip title="Urban settlement characterized by excellent provision of public tranportation and high density of population.">
              <div>
                <label htmlFor="nsUrban">Urban area</label>
                <label>{settlementDistribution.urban}</label>
                <input
                  className="input_transport"
                  type="number"
                  pattern="[0-9]*"
                  step="0.1"
                  id="nsUrban"
                  min="0"
                  max="100"
                  value={nsUrban}
                  onChange={handleNsUrban}
                  onMouseLeave={getNewResidentsTotal}
                  required
                />
              </div>
            </Tooltip>
            <Tooltip title="Settlement dominated by private car transport and residential buildings; bus and train transportation available.">
              <div>
                <label htmlFor="nsSuburban"> Suburban area</label>
                <label>{settlementDistribution.suburban}</label>
                <input
                  className="input_transport"
                  type="number"
                  pattern="[0-9]*"
                  id="nsSuburban"
                  step="0.1"
                  min="0.0"
                  max="100.0"
                  value={nsSuburban}
                  onChange={handleNsSuburban}
                  onMouseLeave={getNewResidentsTotal}
                  required
                />
              </div>
            </Tooltip>
            <Tooltip title="A local center that is smaller than a city, providing commercial services to a largera area as well as public transportation (bus, train).">
              <div>
                <label htmlFor="nsTown">Town</label>
                <label>{settlementDistribution.town}</label>
                <input
                  className="input_transport"
                  type="number"
                  pattern="[0-9]*"
                  id="nsTown"
                  step="0.1"
                  min="0.0"
                  max="100.0"
                  value={nsTown}
                  onChange={handleNsTown}
                  onMouseLeave={getNewResidentsTotal}
                  required
                />
              </div>
            </Tooltip>
            <Tooltip title="Sparsely populated area with limited provision of public transportation (some bus connections only).">
              <div>
                <label htmlFor="nsRural">Rural</label>
                <label>{settlementDistribution.rural}</label>
                <input
                  className="input_transport"
                  type="number"
                  pattern="[0-9]*"
                  id="nsRural"
                  step="0.1"
                  min="0"
                  max="100"
                  value={nsRural}
                  onChange={handleNsRural}
                  onMouseLeave={getNewResidentsTotal}
                  required
                />
              </div>
            </Tooltip>
            <div className="backButtonNew">
              <Button
                size="small"
                value="backProjections"
                onClick={() =>
                  navigate("../u1planner", { replace: true })
                }
                label="&laquo; Previous"
                secondary
              />
            </div>
            <div className="nextButtonNew">
              <Button
                size="small"
                type="submit"
                value="Submit"
                label="Next &raquo;"
                primary
              />
            </div>
          </form>
        </div>
      </section>
    </article>
  );
};
