import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/u2planner.css";
import "../css/newbuildings.css";
import { BuldingsNewUnitsCharts } from "./BuldingsNewUnitsCharts";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import axios from "axios";
import urlPrefix from "../Config";


/**
 * BuildingsNewUnits user input form
 * @return {}
 */

 export const BuildingsNewUnits = ({
    baseline,
    emissionResidential,
    emissionCommercial,
    year,
    country
  }) => {
      year = 2022;
    // apartment
    // #region 
    const [apartmentUnits, setApartmentUnits] = useState(parseInt(0));
    const [apartmentStartYear, setApartmentStartYear] = useState(Number(year));
    const [apartmentEndYear, setApartmentEndYear] = useState(Number(year));
    const [apartmentEnergy, setApartmentEnergy] = useState(parseInt(0));
    // #endregion

    // terraced
    // #region 
    const [terracedUnits, setTerracedUnits] = useState(parseInt(0));
    const [terracedStartYear, setTerracedStartYear] = useState(Number(year));
    const [terracedEndYear, setTerracedEndYear] = useState(Number(year));
    const [terracedEnergy, setTerracedEnergy] = useState(parseInt(0));
    // #endregion

    // semiDetached
    // #region 
    const [semiDetachedUnits, setSemiDetachedUnits] = useState(parseInt(0));
    const [semiDetachedStartYear, setSemiDetachedStartYear] = useState(Number(year));
    const [semiDetachedEndYear, setSemiDetachedEndYear] = useState(Number(year));
    const [semiDetachedEnergy, setSemiDetachedEnergy] = useState(parseInt(0));
    // #endregion

    // detached
    // #region 
    const [detachedUnits, setDetachedUnits] = useState(parseInt(0));
    const [detachedStartYear, setDetachedStartYear] = useState(Number(year));
    const [detachedEndYear, setDetachedEndYear] = useState(Number(year));
    const [detachedEnergy, setDetachedEnergy] = useState(parseInt(0));
    // #endregion



    // retail
    // #region 
    const [retailArea, setRetailArea] = useState(parseInt(0));
    const [retailStartYear, setRetailStartYear] = useState(Number(year));
    const [retailEndYear, setRetailEndYear] = useState(Number(year));
    const [retailEnergy, setRetailEnergy] = useState(parseInt(0));
    // #endregion

    // health
    // #region 
    const [healthArea, setHealthArea] = useState(parseInt(0));
    const [healthStartYear, setHealthStartYear] = useState(Number(year));
    const [healthEndYear, setHealthEndYear] = useState(Number(year));
    const [healthEnergy, setHealthEnergy] = useState(parseInt(0));
    // #endregion

    // hospitality
    // #region 
    const [hospitalityArea, setHospitalityArea] = useState(parseInt(0));
    const [hospitalityStartYear, setHospitalityStartYear] = useState(Number(year));
    const [hospitalityEndYear, setHospitalityEndYear] = useState(Number(year));
    const [hospitalityEnergy, setHospitalityEnergy] = useState(parseInt(0));
    // #endregion

    // offices
    // #region 
    const [officesArea, setOfficesArea] = useState(parseInt(0));
    const [officesStartYear, setOfficesStartYear] = useState(Number(year));
    const [officesEndYear, setOfficesEndYear] = useState(Number(year));
    const [officesEnergy, setOfficesEnergy] = useState(parseInt(0));
    // #endregion

    // industrial
    // #region 
    const [industrialArea, setIndustrialArea] = useState(parseInt(0));
    const [industrialStartYear, setIndustrialStartYear] = useState(Number(year));
    const [industrialEndYear, setIndustrialEndYear] = useState(Number(year));
    const [industrialEnergy, setIndustrialEnergy] = useState(parseInt(0));
    // #endregion

    // warehouses
    // #region 
    const [warehousesArea, setWarehousesArea] = useState(parseInt(0));
    const [warehousesStartYear, setWarehousesStartYear] = useState(Number(year));
    const [warehousesEndYear, setWarehousesEndYear] = useState(Number(year));
    const [warehousesEnergy, setWarehousesEnergy] = useState(parseInt(0));
    // #endregion

    // const [newSettlementCommercial, setNewSettlementCommercial] = useState({});
    // const [newSettlementResidental, setNewSettlementResidental] = useState({});
    const [updateU2charts, setU2charts] = useState(false);
    const [errorBuildNewUnits, setErrorBuildNewUnits] = useState("");
    const [newSettlementBuildingsResponse, setNewSettlementBuildingsResponse] = useState({});
    const setBuildingsNewUnitsResponse = (response) => {
      setNewSettlementBuildingsResponse(response.data);
    };

    const optionsNewStart = [];
    for (let i = year; i < 2051; i++) optionsNewStart.push(i);
  
    const optionsNew = [];
    for (let i = year; i < 2051; i++) optionsNew.push(i);
  
    // apartment handlers
    // #region 
    const handleApartmentUnits = (e) => {
      setApartmentUnits(parseInt(e.target.value));
    };
    const handleApartmentStartYear = (e) => {
      setApartmentStartYear(parseInt(e.target.value));
    };
    const handleApartmentEndYear = (e) => {
      setApartmentEndYear(parseInt(e.target.value));
    };
    const handleApartmentEnergy = (e) => {
      setApartmentEnergy(parseInt(e.target.value));
    };
    // #endregion
    
    // terraced handlers
    // #region 
    const handleTerracedUnits = (e) => {
      setTerracedUnits(parseInt(e.target.value));
    };
    const handleTerracedStartYear = (e) => {
      setTerracedStartYear(parseInt(e.target.value));
    };
    const handleTerracedEndYear = (e) => {
      setTerracedEndYear(parseInt(e.target.value));
    };
    const handleTerracedEnergy = (e) => {
      setTerracedEnergy(parseInt(e.target.value));
    };
    // #endregion

    // semi-detached handlers
    // #region 
    const handleSemiDetachedUnits = (e) => {
      setSemiDetachedUnits(parseInt(e.target.value));
    };
    const handleSemiDetachedStartYear = (e) => {
      setSemiDetachedStartYear(parseInt(e.target.value));
    };
    const handleSemiDetachedEndYear = (e) => {
      setSemiDetachedEndYear(parseInt(e.target.value));
    };
    const handleSemiDetachedEnergy = (e) => {
      setSemiDetachedEnergy(parseInt(e.target.value));
    };
    // #endregion

    // apartment handlers
    // #region 
    const handleDetachedUnits = (e) => {
      setDetachedUnits(parseInt(e.target.value));
    };
    const handleDetachedStartYear = (e) => {
      setDetachedStartYear(parseInt(e.target.value));
    };
    const handleDetachedEndYear = (e) => {
      setDetachedEndYear(parseInt(e.target.value));
    };
    const handleDetachedEnergy = (e) => {
      setDetachedEnergy(parseInt(e.target.value));
    };
    // #endregion


    // retail handlers
    // #region 
    const handleRetailArea = (e) => {
      setRetailArea(parseInt(e.target.value));
    };
    const handleRetailStartYear = (e) => {
      setRetailStartYear(parseInt(e.target.value));
    };
    const handleRetailEndYear = (e) => {
      setRetailEndYear(parseInt(e.target.value));
    };
    const handleRetailEnergy = (e) => {
      setRetailEnergy(parseInt(e.target.value));
    };
    // #endregion

    // health handlers
    // #region 
    const handleHealthArea = (e) => {
      setHealthArea(parseInt(e.target.value));
    };
    const handleHealthStartYear = (e) => {
      setHealthStartYear(parseInt(e.target.value));
    };
    const handleHealthEndYear = (e) => {
      setHealthEndYear(parseInt(e.target.value));
    };
    const handleHealthEnergy = (e) => {
      setHealthEnergy(parseInt(e.target.value));
    };
    // #endregion

    // hospitality handlers
    // #region 
    const handleHospitalityArea = (e) => {
      setHospitalityArea(parseInt(e.target.value));
    };
    const handleHospitalityStartYear = (e) => {
      setHospitalityStartYear(parseInt(e.target.value));
    };
    const handleHospitalityEndYear = (e) => {
      setHospitalityEndYear(parseInt(e.target.value));
    };
    const handleHospitalityEnergy = (e) => {
      setHospitalityEnergy(parseInt(e.target.value));
    };
    // #endregion
    
    // offices handlers
    // #region 
    const handleOfficesArea = (e) => {
      setOfficesArea(parseInt(e.target.value));
    };
    const handleOfficesStartYear = (e) => {
      setOfficesStartYear(parseInt(e.target.value));
    };
    const handleOfficesEndYear = (e) => {
      setOfficesEndYear(parseInt(e.target.value));
    };
    const handleOfficesEnergy = (e) => {
      setOfficesEnergy(parseInt(e.target.value));
    };
    // #endregion
    
    // industrial handlers
    // #region 
    const handleIndustrialArea = (e) => {
      setIndustrialArea(parseInt(e.target.value));
    };
    const handleIndustrialStartYear = (e) => {
      setIndustrialStartYear(parseInt(e.target.value));
    };
    const handleIndustrialEndYear = (e) => {
      setIndustrialEndYear(parseInt(e.target.value));
    };
    const handleIndustrialEnergy = (e) => {
      setIndustrialEnergy(parseInt(e.target.value));
    };
    // #endregion

    // warehouses handlers
    // #region 
    const handleWarehousesArea = (e) => {
      setWarehousesArea(parseInt(e.target.value));
    };
    const handleWarehousesStartYear = (e) => {
      setWarehousesStartYear(parseInt(e.target.value));
    };
    const handleWarehousesEndYear = (e) => {
      setWarehousesEndYear(parseInt(e.target.value));
    };
    const handleWarehousesEnergy = (e) => {
      setWarehousesEnergy(parseInt(e.target.value));
    };
    // #endregion


    // const handleNewResident = (e) => {
    //   setNewResidents(Number(e.target.value));
    // };
  
    const updateU2Planner = () => {

      const apartment = {
        "numberOfUnits": apartmentUnits,
        "startYear": apartmentStartYear,
        "endYear": apartmentEndYear,
        "renewableEnergyPercent": apartmentEnergy
      };
      const terraced = {
        "numberOfUnits": terracedUnits,
        "startYear": terracedStartYear,
        "endYear": terracedEndYear,
        "renewableEnergyPercent": terracedEnergy
      };
      const semiDetached = {
        "numberOfUnits": semiDetachedUnits,
        "startYear": semiDetachedStartYear,
        "endYear": semiDetachedEndYear,
        "renewableEnergyPercent": semiDetachedEnergy
      };
      const detached = {
        "numberOfUnits": detachedUnits,
        "startYear": detachedStartYear,
        "endYear": detachedEndYear,
        "renewableEnergyPercent": detachedEnergy
      };
      const retail = {
        "floorArea": retailArea,
        "renewableEnergyPercent": retailEnergy,
        "startYear": retailEndYear,
        "endYear": retailEndYear
      };
      const health = {
        "floorArea": healthArea,
        "renewableEnergyPercent": healthEnergy,
        "startYear": healthStartYear,
        "endYear": healthEndYear
      };
      const hospitality = {
        "floorArea": hospitalityArea,
        "renewableEnergyPercent": hospitalityEnergy,
        "startYear": hospitalityStartYear,
        "endYear": hospitalityEndYear
      };
      const offices = {
        "floorArea": officesArea,
        "renewableEnergyPercent": hospitalityEnergy,
        "startYear": officesStartYear,
        "endYear": officesEndYear
      };
      const industrial = {
        "floorArea": industrialArea,
        "renewableEnergyPercent": industrialEnergy,
        "startYear": industrialStartYear,
        "endYear": industrialEndYear
      };
      const warehouses = {
        "floorArea": warehousesArea,
        "renewableEnergyPercent": warehousesEnergy,
        "startYear": warehousesStartYear,
        "endYear": warehousesEndYear
      };

      const newSettlement = {
        "residential":{
          "apartment": apartment,
          "terraced": terraced,
          "semidetached": semiDetached,
          "detached": detached
        },
        "commercial":{
            retail,
            health,
            hospitality,
            offices,
            industrial,
            warehouses
        }
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      };
      // axios
      // .post(
      //   urlPrefix + "/api/v1/calculate/buildings",
      //   newSettlement,
      //   headers
      // )
      // .then((response) => setBuildingsNewUnitsResponse(response.data))    
      // .catch((error) => {
      //   setErrorBuildNewUnits({ errorMessage: error.message });
      //   // eslint-disable-next-line no-console
      //   console.error("There was an error!", errorBuildNewUnits);
      // });

      // const newSettlementResidentals = {
      //   "apartment":apartment,
      //   "terraced":terraced,
      //   "semi_detached":semiDetached,
      //   "detached":detached
      // };
      // const newSettlementCommercials = {
      //   "retail":retail,
      //   "health":health,
      //   "hospitality":hospitality,
      //   "offices":offices,
      //   "industrial":industrial,
      //   "warehouses":warehouses,
      // };

      // setNewSettlementResidental(newSettlementResidentals);
      // setNewSettlementCommercial(newSettlementCommercials);
      
      setU2charts(true);
    };
  
    if (updateU2charts === false) {
      return (
        <article>
          <div className="headerSettlement">
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="U7 NEW SETTLEMENT / DENSIFICATION" />
            </Divider>
          </div>
  
            <section>
                <section>
                  <Divider textAlign="left" flexItem>
                      {" "}
                      <b>U7.1 New residential units</b>
                  </Divider>
                </section>
                <div className="newResidentDiv">
                  <form>
                    <table className="buildings-tbl">
                          <thead>
                            <tr>
                              <th className="row-title">Residential unit type</th>
                              <th>Number of units</th>
                              <th colSpan={2}>New units completed between</th>
                              <th>% of energy from renewables</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="row-title">Apartment</td>
                              <td>
                                <input
                                  className="table-cell"
                                  type="number"
                                  step="1"
                                  id="apartment-units"
                                  name="apartment-units"
                                  min="0"
                                  value={apartmentUnits}
                                  onChange={handleApartmentUnits}
                                  
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                      className="table-cell"
                                      id="apartment-start-year"
                                      name="apartment-start-year"
                                      value={apartmentStartYear}
                                      onChange={handleApartmentStartYear}
                                      
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
                                      id="apartment-end-year"
                                      name="apartment-end-year"
                                      value={apartmentEndYear}
                                      onChange={handleApartmentEndYear}
                                      
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
                                  id="apartment-energy"
                                  min="0"
                                  value={apartmentEnergy}
                                  onChange={handleApartmentEnergy}
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
                                  id="terraced-units"
                                  name="terraced-units"
                                  min="0"
                                  value={terracedUnits}
                                  onChange={handleTerracedUnits}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                      className="table-cell"
                                      id="terraced-start-year"
                                      name="terraced-start-year"
                                      onChange={handleTerracedStartYear}
                                      value={terracedStartYear}
                                      
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
                                      id="terraced-end-year"
                                      name="terraced-end-year"
                                      onChange={handleTerracedEndYear}
                                      value={terracedEndYear}
                                      
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
                                  id="terraced-energy"
                                  name="terraced-energy"
                                  min="0"
                                  value={terracedEnergy}
                                  onChange={handleTerracedEnergy}
                                  required
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="row-title">Semi-Detached</td>
                              <td>
                                <input
                                  className="table-cell"
                                  type="number"
                                  step="1"
                                  id="semiDetached-units"
                                  name="semiDetached-units"
                                  min="0"
                                  value={semiDetachedUnits}
                                  onChange={handleSemiDetachedUnits}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                      className="table-cell"
                                      id="semiDetached-start-year"
                                      name="semiDetached-start-year"
                                      onChange={handleSemiDetachedStartYear}
                                      value={semiDetachedStartYear}
                                      
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
                                      id="semiDetached-end-year"
                                      name="semiDetached-end-year"
                                      onChange={handleSemiDetachedEndYear}
                                      value={semiDetachedEndYear}
                                      
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
                                  id="semiDetached-energy"
                                  name="semiDetached-energy"
                                  min="0"
                                  value={semiDetachedEnergy}
                                  onChange={handleSemiDetachedEnergy}
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
                                  id="detached-units"
                                  name="detached-units"
                                  min="0"
                                  value={detachedUnits}
                                  onChange={handleDetachedUnits}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                      className="table-cell"
                                      id="detached-start-year"
                                      name="detached-start-year"
                                      onChange={handleDetachedStartYear}
                                      value={detachedStartYear}
                                      
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
                                      id="detached-end-year"
                                      name="detached-end-year"
                                      onChange={handleDetachedEndYear}
                                      value={detachedEndYear}
                                      
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
                                  id="detached-energy"
                                  name="detached-energy"
                                  min="0"
                                  value={detachedEnergy}
                                  onChange={handleDetachedEnergy}
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
                <section>
                  <Divider textAlign="left" flexItem>
                      {" "}
                      <b>U7.2 New commercial buildings</b>
                  </Divider>
                </section>
                <div className="newResidentDiv">
                    <form>
                      <table className="buildings-tbl">
                            <thead>
                              <tr>
                                <th className="row-title">Commercial building type</th>
                                <th>Total floor area</th>
                                <th colSpan={2}>New buildings completed between</th>
                                <th>% of electricty from renewables</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="row-title">Retail</td>
                                <td>
                                  <input
                                    className="table-cell"
                                    type="number"
                                    step="1"
                                    id="retail-area"
                                    name="retail-area"
                                    min="0"
                                    value={retailArea}
                                    onChange={handleRetailArea}
                                    required
                                  />
                                </td>
                                <td>
                                    <select
                                        className="table-cell"
                                        id="retail-start-year"
                                        name="retail-start-year"
                                        onChange={handleRetailStartYear}
                                        value={retailStartYear}
                                        
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
                                        id="retail-end-year"
                                        name="retail-end-year"
                                        onChange={handleRetailEndYear}
                                        value={retailEndYear}
                                        
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
                                    id="retail-energy"
                                    name="retail-energy"
                                    min="0"
                                    value={retailEnergy}
                                    onChange={handleRetailEnergy}
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
                                        id="health-area"
                                        name="health-area"
                                        min="0"
                                        value={healthArea}
                                        onChange={handleHealthArea}
                                        required
                                    />
                                </td>
                                <td>
                                    <select
                                        className="table-cell"
                                        id="health-start-year"
                                        name="health-start-year"
                                        onChange={handleHealthStartYear}
                                        value={healthStartYear}
                                        
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
                                        id="health-end-year"
                                        name="health-end-year"
                                        onChange={handleHealthEndYear}
                                        value={healthEndYear}
                                        
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
                                      id="health-energy"
                                      name="health-energy"
                                      min="0"
                                      value={healthEnergy}
                                      onChange={handleHealthEnergy}
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
                                  id="hospitality-area"
                                  name="hospitality-area"
                                  min="0"
                                  value={hospitalityArea}
                                  onChange={handleHospitalityArea}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                      className="table-cell"
                                      id="hospitality-start-year"
                                      name="hospitality-start-year"
                                      onChange={handleHospitalityStartYear}
                                      value={hospitalityStartYear}
                                      
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
                                      id="hospitality-end-year"
                                      name="hospitality-end-year"
                                      onChange={handleHospitalityEndYear}
                                      value={hospitalityEndYear}
                                      
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
                                  id="hospitality-energy"
                                  name="hospitality-energy"
                                  min="0"
                                  value={hospitalityEnergy}
                                  onChange={handleHospitalityEnergy}
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
                                  id="offices-area"
                                  name="offices-area"
                                  min="0"
                                  value={officesArea}
                                  onChange={handleOfficesArea}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                      className="table-cell"
                                      id="offices-start-year"
                                      name="offices-start-year"
                                      onChange={handleOfficesStartYear}
                                      value={officesStartYear}
                                      
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
                                      id="offices-end-year"
                                      name="offices-end-year"
                                      onChange={handleOfficesEndYear}
                                      value={officesEndYear}
                                      
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
                                  id="offices-energy"
                                  name="offices-energy"
                                  min="0"
                                  value={officesEnergy}
                                  onChange={handleOfficesEnergy}
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
                                  id="industrial-area"
                                  name="industrial-area"
                                  min="0"
                                  value={industrialArea}
                                  onChange={handleIndustrialArea}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                      className="table-cell"
                                      id="industrial-start-year"
                                      name="industrial-start-year"
                                      onChange={handleIndustrialStartYear}
                                      value={industrialStartYear}
                                      
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
                                      id="industrial-end-year"
                                      name="industrial-end-year"
                                      onChange={handleIndustrialEndYear}
                                      value={industrialEndYear}
                                      
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
                                  id="industrial-energy"
                                  name="industrial-energy"
                                  min="0"
                                  value={industrialEnergy}
                                  onChange={handleIndustrialEnergy}
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
                                  id="warehouses-area"
                                  name="warehouses-area"
                                  min="0"
                                  value={warehousesArea}
                                  onChange={handleWarehousesArea}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                      className="table-cell"
                                      id="warehouses-start-year"
                                      name="warehouses-start-year"
                                      onChange={handleWarehousesStartYear}
                                      value={warehousesStartYear}
                                      
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
                                      id="warehouses-end-year"
                                      name="warehouses-end-year"
                                      onChange={handleWarehousesEndYear}
                                      value={warehousesEndYear}
                                      
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
                                  id="warehouses-energy"
                                  name="warehouses-energy"
                                  min="0"
                                  value={warehousesEnergy}
                                  onChange={handleWarehousesEnergy}
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
                {(
                <div className="nextU2Button">
                    <Button
                    size="small"
                    value="charts"
                    onClick={updateU2Planner}
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
        <BuldingsNewUnitsCharts
          newSettlementBuildingsResponse={newSettlementBuildingsResponse}
          // newSettlementCommercial={newSettlementCommercial}
          // newSettlementResidental={newSettlementResidental}
          country={country}
          year={year}
        />
      );
    }
  };
  
  BuildingsNewUnits.propTypes = {
    year: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    baseline: PropTypes.object.isRequired,
    emissionCommercial: PropTypes.object.isRequired,
    emissionResidential: PropTypes.object.isRequired
  };
  