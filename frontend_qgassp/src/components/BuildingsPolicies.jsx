import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/u2planner.css";
import "../css/newbuildings.css";
import { BuildingsPoliciesCharts } from "./BuildingsPoliciesCharts";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

/**
 * BuildingsPolicies user input form
 * @return {}
 */

 export const BuildingsPolicies = ({
    baseline,
    year,
  }) => {
      year = 2022;
     
  // firstSelector
  // #region 
    const [firstSelectorUnits, setFirstSelectorUnits] = useState(parseInt(0));
    const [firstSelectorArea, setFirstSelectorArea] = useState(parseInt(0));
    const [firstSelectorStartYear, setFirstSelectorStartYear] = useState(Number(year));
    const [firstSelectorEndYear, setFirstSelectorEndYear] = useState(Number(year));
    const [firstSelectorEnergy, setFirstSelectorEnergy] = useState(parseInt(0));
  // #endregion

  // secondSelector
  // #region 
    const [secondSelectorUnits, setSecondSelectorUnits] = useState(parseInt(0));
    const [secondSelectorArea, setSecondSelectorArea] = useState(parseInt(0));
    const [secondSelectorStartYear, setSecondSelectorStartYear] = useState(Number(year));
    const [secondSelectorEndYear, setSecondSelectorEndYear] = useState(Number(year));
    const [secondSelectorEnergy, setSecondSelectorEnergy] = useState(parseInt(0));
  // #endregion

  // thirdSelector
  // #region 
    const [thirdSelectorUnits, setThirdSelectorUnits] = useState(parseInt(0));
    const [thirdSelectorArea, setThirdSelectorArea] = useState(parseInt(0));
    const [thirdSelectorStartYear, setThirdSelectorStartYear] = useState(Number(year));
    const [thirdSelectorEndYear, setThirdSelectorEndYear] = useState(Number(year));
    const [thirdSelectorEnergy, setThirdSelectorEnergy] = useState(parseInt(0));
  // #endregion

  // forthSelector
  // #region 
    const [forthSelectorUnits, setForthSelectorUnits] = useState(parseInt(0));
    const [forthSelectorArea, setForthSelectorArea] = useState(parseInt(0));
    const [forthSelectorStartYear, setForthSelectorStartYear] = useState(Number(year));
    const [forthSelectorEndYear, setForthSelectorEndYear] = useState(Number(year));
    const [forthSelectorEnergy, setForthSelectorEnergy] = useState(parseInt(0));
  // #endregion

  // fifthSelector
  // #region 
    const [fifthSelectorUnits, setFifthSelectorUnits] = useState(parseInt(0));
    const [fifthSelectorArea, setFifthSelectorArea] = useState(parseInt(0));
    const [fifthSelectorStartYear, setFifthSelectorStartYear] = useState(Number(year));
    const [fifthSelectorEndYear, setFifthSelectorEndYear] = useState(Number(year));
    const [fifthSelectorEnergy, setFifthSelectorEnergy] = useState(parseInt(0));
  // #endregion

  // sixthSelector
  // #region 
    const [sixthSelectorUnits, setSixthSelectorUnits] = useState(parseInt(0));
    const [sixthSelectorArea, setSixthSelectorArea] = useState(parseInt(0));
    const [sixthSelectorStartYear, setSixthSelectorStartYear] = useState(Number(year));
    const [sixthSelectorEndYear, setSixthSelectorEndYear] = useState(Number(year));
    const [sixthSelectorEnergy, setSixthSelectorEnergy] = useState(parseInt(0));
  // #endregion

    const [updateU2charts, setU2charts] = useState(false);
  
    const optionsIndicators = ['A', 'B','C','D','E','F','G'];
  
    const optionsResidents = ['Apartment', 'Terraced', 'Semi-detached', 'Detached'];
    const optionsBuildings = ['Retail', 'Health', 'Hospitality', 'Offices', 'Industrail', 'Warehouses'];
  
    // FirstSelector handlers
    // #region 
    const handleFirstSelectorUnits = (e) => {
      setFirstSelectorUnits(parseInt(e.target.value));
    };
    const handleFirstSelectorArea = (e) => {
      setFirstSelectorArea(parseInt(e.target.value));
    };
    const handleFirstSelectorStartYear = (e) => {
      setFirstSelectorStartYear(parseInt(e.target.value));
    };
    const handleFirstSelectorEndYear = (e) => {
      setFirstSelectorEndYear(parseInt(e.target.value));
    };
    const handleFirstSelectorEnergy = (e) => {
      setFirstSelectorEnergy(parseInt(e.target.value));
    };
    // #endregion
    
    // SecondSelector handlers
    // #region 
    const handleSecondSelectorUnits = (e) => {
      setSecondSelectorUnits(parseInt(e.target.value));
    };
    const handleSecondSelectorArea = (e) => {
      setSecondSelectorArea(parseInt(e.target.value));
    };
    const handleSecondSelectorStartYear = (e) => {
      setSecondSelectorStartYear(parseInt(e.target.value));
    };
    const handleSecondSelectorEndYear = (e) => {
      setSecondSelectorEndYear(parseInt(e.target.value));
    };
    const handleSecondSelectorEnergy = (e) => {
      setSecondSelectorEnergy(parseInt(e.target.value));
    };
    // #endregion
  
    // ThirdSelector handlers
    // #region 
    const handleThirdSelectorUnits = (e) => {
      setThirdSelectorUnits(parseInt(e.target.value));
    };
    const handleThirdSelectorArea = (e) => {
      setThirdSelectorArea(parseInt(e.target.value));
    };
    const handleThirdSelectorStartYear = (e) => {
      setThirdSelectorStartYear(parseInt(e.target.value));
    };
    const handleThirdSelectorEndYear = (e) => {
      setThirdSelectorEndYear(parseInt(e.target.value));
    };
    const handleThirdSelectorEnergy = (e) => {
      setThirdSelectorEnergy(parseInt(e.target.value));
    };
    // #endregion

    // ForthSelector handlers
    // #region 
    const handleForthSelectorUnits = (e) => {
      setForthSelectorUnits(parseInt(e.target.value));
    };
    const handleForthSelectorArea = (e) => {
      setForthSelectorArea(parseInt(e.target.value));
    };
    const handleForthSelectorStartYear = (e) => {
      setForthSelectorStartYear(parseInt(e.target.value));
    };
    const handleForthSelectorEndYear = (e) => {
      setForthSelectorEndYear(parseInt(e.target.value));
    };
    const handleForthSelectorEnergy = (e) => {
      setForthSelectorEnergy(parseInt(e.target.value));
    };
    // #endregion

    // FifthSelector handlers
    // #region 
    const handleFifthSelectorUnits = (e) => {
      setFifthSelectorUnits(parseInt(e.target.value));
    };
    const handleFifthSelectorArea = (e) => {
      setFifthSelectorArea(parseInt(e.target.value));
    };
    const handleFifthSelectorStartYear = (e) => {
      setFifthSelectorStartYear(parseInt(e.target.value));
    };
    const handleFifthSelectorEndYear = (e) => {
      setFifthSelectorEndYear(parseInt(e.target.value));
    };
    const handleFifthSelectorEnergy = (e) => {
      setFifthSelectorEnergy(parseInt(e.target.value));
    };
    // #endregion

    // SixthSelector handlers
    // #region 
    const handleSixthSelectorUnits = (e) => {
      setSixthSelectorUnits(parseInt(e.target.value));
    };
    const handleSixthSelectorArea = (e) => {
      setSixthSelectorArea(parseInt(e.target.value));
    };
    const handleSixthSelectorStartYear = (e) => {
      setSixthSelectorStartYear(parseInt(e.target.value));
    };
    const handleSixthSelectorEndYear = (e) => {
      setSixthSelectorEndYear(parseInt(e.target.value));
    };
    const handleSixthSelectorEnergy = (e) => {
      setSixthSelectorEnergy(parseInt(e.target.value));
    };
    // #endregion

    const updateU2Planner = () => {
      
      setU2charts(true);
    };
  
    if (updateU2charts === false) {
      return (
        <article>
          <div className="headerSettlement">
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="U8 POLICY QUANTIFICATION" />
            </Divider>
          </div>
          <section>
            <section>
                <Divider textAlign="left" flexItem>
                    {" "}
                    <b>U8.1 Retrofits of residental buildings</b>
                </Divider>
                <div className="newResidentDiv">
                  <form>
                  <table className="buildings-policy-tbl buildings-tbl">
                        <thead>
                          <th className="row-title">Select residential unit</th>
                          <th>Total floor area</th>
                          <th colSpan={2}>
                            Indicative energy use
                          <th>before</th>
                          <th>after</th>
                          </th>
                          <th>% of energy from renewables</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                            <select
                                className="table-cell first-cell"
                                id=""
                                name=""
                                // onChange={handleForestToCropYear}
                                // value={forestToCropYear}
                                defaultValue="Select unit type"
                                required
                                >
                                {optionsResidents.map((option) => (
                                <option key={option} value={option}>
                                    {option}{" "}
                                </option>
                                ))}
                            </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select
                                    className="table-cell first-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select unit type"
                                    required
                                    >
                                    {optionsResidents.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select
                                  className="table-cell first-cell"
                                  id=""
                                  name=""
                                  // onChange={handleForestToCropYear}
                                  // value={forestToCropYear}
                                  defaultValue="Select unit type"
                                  required
                                  >
                                  {optionsResidents.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select
                                  className="table-cell first-cell"
                                  id=""
                                  name=""
                                  // onChange={handleForestToCropYear}
                                  // value={forestToCropYear}
                                  defaultValue="Select unit type"
                                  required
                                  >
                                  {optionsResidents.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select
                                  className="table-cell first-cell"
                                  id=""
                                  name=""
                                  // onChange={handleForestToCropYear}
                                  // value={forestToCropYear}
                                  defaultValue="Select unit type"
                                  required
                                  >
                                  {optionsResidents.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select
                                  className="table-cell first-cell"
                                  id=""
                                  name=""
                                  // onChange={handleForestToCropYear}
                                  // value={forestToCropYear}
                                  defaultValue="Select unit type"
                                  required
                                  >
                                  {optionsResidents.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                  </form>
                </div>
            </section>
            <section>
                <Divider textAlign="left" flexItem>
                    {" "}
                    <b>U8.2 Retrofits of commercial buildings</b>
                </Divider>
                <div className="newResidentDiv">
                  <form>
                  <table className="buildings-policy-tbl buildings-tbl">
                        <thead>
                          <th className="row-title">Select building type</th>
                          <th>Total floor area</th>
                          <th colSpan={2}>
                            Indicative energy use kWh/(m<sup>2</sup>a)
                          <th>before</th>
                          <th>after</th>
                          </th>
                          <th>% of energy from renewables</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                            <select
                                className="table-cell first-cell"
                                id=""
                                name=""
                                // onChange={handleForestToCropYear}
                                // value={forestToCropYear}
                                defaultValue="Select unit type"
                                required
                                >
                                {optionsBuildings.map((option) => (
                                <option key={option} value={option}>
                                    {option}{" "}
                                </option>
                                ))}
                            </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select
                                    className="table-cell first-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select unit type"
                                    required
                                    >
                                    {optionsBuildings.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select
                                  className="table-cell first-cell"
                                  id=""
                                  name=""
                                  // onChange={handleForestToCropYear}
                                  // value={forestToCropYear}
                                  defaultValue="Select unit type"
                                  required
                                  >
                                  {optionsBuildings.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select
                                  className="table-cell first-cell"
                                  id=""
                                  name=""
                                  // onChange={handleForestToCropYear}
                                  // value={forestToCropYear}
                                  defaultValue="Select unit type"
                                  required
                                  >
                                  {optionsBuildings.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select
                                  className="table-cell first-cell"
                                  id=""
                                  name=""
                                  // onChange={handleForestToCropYear}
                                  // value={forestToCropYear}
                                  defaultValue="Select unit type"
                                  required
                                  >
                                  {optionsBuildings.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select
                                  className="table-cell first-cell"
                                  id=""
                                  name=""
                                  // onChange={handleForestToCropYear}
                                  // value={forestToCropYear}
                                  defaultValue="Select unit type"
                                  required
                                  >
                                  {optionsBuildings.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select
                                    className="table-cell"
                                    id=""
                                    name=""
                                    // onChange={handleForestToCropYear}
                                    // value={forestToCropYear}
                                    defaultValue="Select indicator"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsIndicators.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                // id="firstSelector"
                                min="0"
                                // value={firstSelectorNumber}
                                // onChange={handleFirstSelectorNumber}
                                // onMouseLeave={setTotal}
                                required
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                  </form>
                </div>
            </section>
          </section>
          <section>
                {(
                <div className="nextU2Button">
                    <Button
                    size="small"
                    value="charts"
                    // onClick={setBuildingTypes}
                    label="Next &raquo;"
                    primary
                    />
                </div>
                )}
            </section>
        </article>
      );
    } else {
      return (
        <BuildingsPoliciesCharts
          // baseline={baseline.baseline}
          // newDevelopment={newDevelopment}
          // settlementDistribution={settlementDistribution}
          // emission={emission}
          // projections={projections}
        />
      );
    }
  };
  
  BuildingsPolicies.propTypes = {
    year: PropTypes.number.isRequired,
    baseline: PropTypes.object.isRequired,
    settlementDistribution: PropTypes.object.isRequired,
    emission: PropTypes.object.isRequired,
    projections: PropTypes.object.isRequired
  };
  