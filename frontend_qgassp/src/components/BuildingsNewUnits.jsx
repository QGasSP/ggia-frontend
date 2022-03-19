// BuildingsNewUnits
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/u2planner.css";
import "../css/newbuildings.css";
import { U2planner } from "./U2planner";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

/**
 * BuildingsNewUnits user input form
 * @return {}
 */

 export const BuildingsNewUnits = ({
    settlementDistribution,
    baseline,
    emission,
    projections,
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
  
    const optionsNewStart = [];
    for (let i = year; i < 2051; i++) optionsNewStart.push(i);
  
    const optionsNew = [];
    for (let i = year; i < 2051; i++) optionsNew.push(i);
  
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
              <Chip label="NEW SETTLEMENT / DENSIFICATION" />
            </Divider>
          </div>
  
          <section>
            <section>
                <Divider textAlign="left" flexItem>
                    {" "}
                    <b>New residential units</b>
                </Divider>
                <div className="newResidentDiv">
                  <form>
                  <table className="buildings-tbl">
                        <thead>
                          <th className="row-title">Residential unit type</th>
                          <th>Number of units</th>
                          <th>Total floor area</th>
                          <th colSpan={2}>New units completed between</th>
                          <th>% of energy from renewables</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="row-title">Apartment</td>
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
                                    defaultValue="Select year"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsNewStart.map((option) => (
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
                                    defaultValue="Select year"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsNewStart.map((option) => (
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
                            <td className="row-title">Terraced</td>
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
                                    defaultValue="Select year"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsNewStart.map((option) => (
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
                                    defaultValue="Select year"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsNewStart.map((option) => (
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
                            <td className="row-title">Semi-detached</td>
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
                                    defaultValue="Select year"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsNewStart.map((option) => (
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
                                    defaultValue="Select year"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsNewStart.map((option) => (
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
                            <td className="row-title">Detached</td>
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
                                    defaultValue="Select year"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsNewStart.map((option) => (
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
                                    defaultValue="Select year"
                                    // onMouseLeave={setTotal}
                                    required
                                >
                                    {optionsNewStart.map((option) => (
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
                    <b>New commercial buildings</b>
                </Divider>
                <div className="newResidentDiv">
                    <form>
                      <table className="buildings-tbl">
                            <thead>
                              <th className="row-title">Commercial building type</th>
                              <th>Number of units</th>
                              <th>Total floor area</th>
                              <th colSpan={2}>New units completed between</th>
                              <th>% of energy from renewables</th>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="row-title">Retail</td>
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
                                        defaultValue="Select year"
                                        // onMouseLeave={setTotal}
                                        required
                                    >
                                        {optionsNewStart.map((option) => (
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
                                        defaultValue="Select year"
                                        // onMouseLeave={setTotal}
                                        required
                                    >
                                        {optionsNewStart.map((option) => (
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
                                <td className="row-title">Health</td>
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
                                        defaultValue="Select year"
                                        // onMouseLeave={setTotal}
                                        required
                                    >
                                        {optionsNewStart.map((option) => (
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
                                        defaultValue="Select year"
                                        // onMouseLeave={setTotal}
                                        required
                                    >
                                        {optionsNewStart.map((option) => (
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
                                <td className="row-title">Hospitality</td>
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
                                        defaultValue="Select year"
                                        // onMouseLeave={setTotal}
                                        required
                                    >
                                        {optionsNewStart.map((option) => (
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
                                        defaultValue="Select year"
                                        // onMouseLeave={setTotal}
                                        required
                                    >
                                        {optionsNewStart.map((option) => (
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
                                <td className="row-title">Offices</td>
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
                                        defaultValue="Select year"
                                        // onMouseLeave={setTotal}
                                        required
                                    >
                                        {optionsNewStart.map((option) => (
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
                                        defaultValue="Select year"
                                        // onMouseLeave={setTotal}
                                        required
                                    >
                                        {optionsNewStart.map((option) => (
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
                                <td className="row-title">Industrial</td>
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
                                        defaultValue="Select year"
                                        // onMouseLeave={setTotal}
                                        required
                                    >
                                        {optionsNewStart.map((option) => (
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
                                        defaultValue="Select year"
                                        // onMouseLeave={setTotal}
                                        required
                                    >
                                        {optionsNewStart.map((option) => (
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
                                <td className="row-title">Warehouses</td>
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
                                        defaultValue="Select year"
                                        // onMouseLeave={setTotal}
                                        required
                                    >
                                        {optionsNewStart.map((option) => (
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
                                        defaultValue="Select year"
                                        // onMouseLeave={setTotal}
                                        required
                                    >
                                        {optionsNewStart.map((option) => (
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
          baseline={baseline.baseline}
          newDevelopment={newDevelopment}
          settlementDistribution={settlementDistribution}
          emission={emission}
          projections={projections}
        />
      );
    }
  };
  
  BuildingsNewUnits.propTypes = {
    year: PropTypes.number.isRequired,
    baseline: PropTypes.object.isRequired,
    settlementDistribution: PropTypes.object.isRequired,
    emission: PropTypes.object.isRequired,
    projections: PropTypes.object.isRequired,
  };
  