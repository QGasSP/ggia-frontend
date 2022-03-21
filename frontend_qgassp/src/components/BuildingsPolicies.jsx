import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/u2planner.css";
import "../css/newbuildings.css";
import { U2planner } from "./U2planner";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

/**
 * BuildingsPolicies user input form
 * @return {}
 */

 export const BuildingsPolicies = ({
     //
    year,
  }) => {
      year = 2022;
    const [nsMetropolitanCenter, setNsMetropolitan] = useState(parseFloat(0));
    const [nsUrban, setNsUrban] = useState(parseFloat(0));
    const [nsSuburban, setNsSubUrban] = useState(parseFloat(0));
    const [nsTown, setNsTown] = useState(parseFloat(0));
    const [nsRural, setNsRural] = useState(parseFloat(0));

    const [newResidents, setNewResidents] = useState("");
    const [yearStart, setYearStart] = useState(year);
    const [yearFinish, setYearFinish] = useState(2050);

    const [newDevelopment, setNewDevelopment] = useState({});
    const [updateU2charts, setU2charts] = useState(false);
    const [totalNewUnits, setTotalNewResidents] = useState(0.0);
  
    const optionsIndicators = ['A', 'B','C','D','E','F','G'];
  
    const optionsResidents = ['Apartment', 'Terraced', 'Semi-detached', 'Detached'];
    const optionsBuildings = ['Retail', 'Health', 'Hospitality', 'Offices', 'Industrail', 'Warehouses'];
  
    const handleNsMetropolitanCenter = (e) => {
      setNsMetropolitan(parseFloat(e.target.value));
    };
    const handleNsUrban = (e) => {
      setNsUrban(parseFloat(e.target.value));
    };
    const handleNsSuburban = (e) => {
      setNsSubUrban(parseFloat(e.target.value));
    };
    const handleNsTown = (e) => {
      setNsTown(parseFloat(e.target.value));
    };
    const handleNsRural = (e) => {
      setNsRural(parseFloat(e.target.value));
    };
    const handleStartYear = (e) => {
      setYearStart(Number(e.target.value));
    };
    const handleYearFinish = (e) => {
      setYearFinish(Number(e.target.value));
    };
    const handleNewResident = (e) => {
      setNewResidents(Number(e.target.value));
    };
  
    const updateU2Planner = () => {
      const newSettlementDistribution = {
        metropolitanCenter: nsMetropolitanCenter,
        urban: nsUrban,
        suburban: nsSuburban,
        town: nsTown,
        rural: nsRural,
      };
      const newDevelopmentU2 = {
        newResidents,
        yearStart,
        yearFinish,
        newSettlementDistribution,
      };
      setNewDevelopment(newDevelopmentU2);
      setTotalNewResidents(
        nsMetropolitanCenter + nsUrban + nsSuburban + nsTown + nsRural
      );
    //   setU2charts(true);
    };
  
    if (updateU2charts === false && totalNewUnits !== 100) {
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
                                // id="apartment"
                                min="0"
                                // value={apartmentNumber}
                                // onChange={handleApartmentNumber}
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
        <U2planner
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
    projections: PropTypes.object.isRequired,
  };
  