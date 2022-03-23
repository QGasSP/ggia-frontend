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
  // apartment
  // #region
  const [apartmentUnits, setApartmentUnits] = useState(parseInt(0));
  const [apartmentArea, setApartmentArea] = useState(parseInt(0));
  const [apartmentStartYear, setApartmentStartYear] = useState(Number(year));
  const [apartmentEndYear, setApartmentEndYear] = useState(Number(year));
  const [apartmentEnergy, setApartmentEnergy] = useState(parseInt(0));
  // #endregion

  // terraced
  // #region
  const [terracedUnits, setTerracedUnits] = useState(parseInt(0));
  const [terracedArea, setTerracedArea] = useState(parseInt(0));
  const [terracedStartYear, setTerracedStartYear] = useState(Number(year));
  const [terracedEndYear, setTerracedEndYear] = useState(Number(year));
  const [terracedEnergy, setTerracedEnergy] = useState(parseInt(0));
  // #endregion

  // semiDetached
  // #region
  const [semiDetachedUnits, setSemiDetachedUnits] = useState(parseInt(0));
  const [semiDetachedArea, setSemiDetachedArea] = useState(parseInt(0));
  const [semiDetachedStartYear, setSemiDetachedStartYear] = useState(
    Number(year)
  );
  const [semiDetachedEndYear, setSemiDetachedEndYear] = useState(Number(year));
  const [semiDetachedEnergy, setSemiDetachedEnergy] = useState(parseInt(0));
  // #endregion

  // detached
  // #region
  const [detachedUnits, setDetachedUnits] = useState(parseInt(0));
  const [detachedArea, setDetachedArea] = useState(parseInt(0));
  const [detachedStartYear, setDetachedStartYear] = useState(Number(year));
  const [detachedEndYear, setDetachedEndYear] = useState(Number(year));
  const [detachedEnergy, setDetachedEnergy] = useState(parseInt(0));
  // #endregion

  // retail
  // #region
  const [retailUnits, setRetailUnits] = useState(parseInt(0));
  const [retailArea, setRetailArea] = useState(parseInt(0));
  const [retailStartYear, setRetailStartYear] = useState(Number(year));
  const [retailEndYear, setRetailEndYear] = useState(Number(year));
  const [retailEnergy, setRetailEnergy] = useState(parseInt(0));
  // #endregion

  // health
  // #region
  const [healthUnits, setHealthUnits] = useState(parseInt(0));
  const [healthArea, setHealthArea] = useState(parseInt(0));
  const [healthStartYear, setHealthStartYear] = useState(Number(year));
  const [healthEndYear, setHealthEndYear] = useState(Number(year));
  const [healthEnergy, setHealthEnergy] = useState(parseInt(0));
  // #endregion

  // hospitality
  // #region
  const [hospitalityUnits, setHospitalityUnits] = useState(parseInt(0));
  const [hospitalityArea, setHospitalityArea] = useState(parseInt(0));
  const [hospitalityStartYear, setHospitalityStartYear] = useState(
    Number(year)
  );
  const [hospitalityEndYear, setHospitalityEndYear] = useState(Number(year));
  const [hospitalityEnergy, setHospitalityEnergy] = useState(parseInt(0));
  // #endregion

  // offices
  // #region
  const [officesUnits, setOfficesUnits] = useState(parseInt(0));
  const [officesArea, setOfficesArea] = useState(parseInt(0));
  const [officesStartYear, setOfficesStartYear] = useState(Number(year));
  const [officesEndYear, setOfficesEndYear] = useState(Number(year));
  const [officesEnergy, setOfficesEnergy] = useState(parseInt(0));
  // #endregion

  // industrial
  // #region
  const [industrialUnits, setIndustrialUnits] = useState(parseInt(0));
  const [industrialArea, setIndustrialArea] = useState(parseInt(0));
  const [industrialStartYear, setIndustrialStartYear] = useState(Number(year));
  const [industrialEndYear, setIndustrialEndYear] = useState(Number(year));
  const [industrialEnergy, setIndustrialEnergy] = useState(parseInt(0));
  // #endregion

  // warehouses
  // #region
  const [warehousesUnits, setWarehousesUnits] = useState(parseInt(0));
  const [warehousesArea, setWarehousesArea] = useState(parseInt(0));
  const [warehousesStartYear, setWarehousesStartYear] = useState(Number(year));
  const [warehousesEndYear, setWarehousesEndYear] = useState(Number(year));
  const [warehousesEnergy, setWarehousesEnergy] = useState(parseInt(0));
  // #endregion

  const [newResidents, setNewResidents] = useState("");

  const [newSettlementCommercial, setNewSettlementCommercial] = useState({});
  const [newSettlementResidental, setNewSettlementResidental] = useState({});
  const [updateU2charts, setU2charts] = useState(false);

  const optionsNewStart = [];
  for (let i = year; i < 2051; i++) optionsNewStart.push(i);

  const optionsNew = [];
  for (let i = year; i < 2051; i++) optionsNew.push(i);

  // apartment handlers
  // #region
  const handleApartmentUnits = (e) => {
    setApartmentUnits(parseInt(e.target.value));
  };
  const handleApartmentArea = (e) => {
    setApartmentArea(parseInt(e.target.value));
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
  const handleTerracedArea = (e) => {
    setTerracedArea(parseInt(e.target.value));
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
  const handleSemiDetachedArea = (e) => {
    setSemiDetachedArea(parseInt(e.target.value));
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
  const handleDetachedArea = (e) => {
    setDetachedArea(parseInt(e.target.value));
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
  const handleRetailUnits = (e) => {
    setRetailUnits(parseInt(e.target.value));
  };
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
  const handleHealthUnits = (e) => {
    setHealthUnits(parseInt(e.target.value));
  };
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
  const handleHospitalityUnits = (e) => {
    setHospitalityUnits(parseInt(e.target.value));
  };
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
  const handleOfficesUnits = (e) => {
    setOfficesUnits(parseInt(e.target.value));
  };
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
  const handleIndustrialUnits = (e) => {
    setIndustrialUnits(parseInt(e.target.value));
  };
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
  const handleWarehousesUnits = (e) => {
    setWarehousesUnits(parseInt(e.target.value));
  };
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
      floor_area: apartmentArea,
      num_of_units: apartmentUnits,
      start_year: apartmentStartYear,
      end_year: apartmentEndYear,
    };
    const terraced = {
      floor_area: terracedArea,
      num_of_units: terracedUnits,
      start_year: terracedStartYear,
      end_year: terracedEndYear,
    };
    const semiDetached = {
      floor_area: semiDetachedArea,
      num_of_units: semiDetachedUnits,
      start_year: semiDetachedStartYear,
      end_year: semiDetachedEndYear,
    };
    const detached = {
      floor_area: detachedArea,
      num_of_units: detachedUnits,
      start_year: detachedStartYear,
      end_year: detachedEndYear,
    };
    const newSettlementResidentals = {
      apartment: apartment,
      terraced: terraced,
      semi_detached: semiDetached,
      detached: detached,
    };
    const retail = {
      floor_area: retailArea,
      num_of_units: retailUnits,
      start_year: retailEndYear,
      end_year: retailEndYear,
    };
    const health = {
      floor_area: healthArea,
      num_of_units: healthUnits,
      start_year: healthStartYear,
      end_year: healthEndYear,
    };
    const hospitality = {
      floor_area: hospitalitydArea,
      num_of_units: hospitalitydUnits,
      start_year: hospitalitydStartYear,
      end_year: hospitalitydEndYear,
    };
    const offices = {
      floor_area: officesArea,
      num_of_units: officesUnits,
      start_year: officesStartYear,
      end_year: officesEndYear,
    };
    const industrial = {
      floor_area: industrialdArea,
      num_of_units: industrialdUnits,
      start_year: industrialdStartYear,
      end_year: industrialdEndYear,
    };
    const warehouses = {
      floor_area: warehousesArea,
      num_of_units: warehousesUnits,
      start_year: warehousesStartYear,
      end_year: warehousesEndYear,
    };
    const newSettlementCommercials = {
      retail: retail,
      health: health,
      hospitality: hospitality,
      offices: offices,
      industrial: industrial,
      warehouses: warehouses,
    };

    setNewSettlementResidental(newSettlementResidentals);
    setNewSettlementCommercial(newSettlementCommercials);

    setU2charts(true);
  };

  if (updateU2charts === false) {
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
                          id="apartment-units"
                          name="apartment-units"
                          min="0"
                          value={apartmentUnits}
                          onChange={handleApartmentUnits}
                          defaultValue="Select year"
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="apartment-area"
                          name="apartment-area"
                          min="0"
                          value={apartmentArea}
                          onChange={handleApartmentArea}
                          defaultValue="Select year"
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
                          defaultValue="Select year"
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
                          defaultValue="Select year"
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
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="terraced-area"
                          name="terraced-area"
                          min="0"
                          value={terracedArea}
                          onChange={handleTerracedArea}
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
                          defaultValue="Select year"
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
                          defaultValue="Select year"
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
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="semiDetached-area"
                          name="semiDetached-area"
                          min="0"
                          value={semiDetachedArea}
                          onChange={handleSemiDetachedArea}
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
                          defaultValue="Select year"
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
                          defaultValue="Select year"
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
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="detached-area"
                          name="detached-area"
                          min="0"
                          value={detachedArea}
                          onChange={handleDetachedArea}
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
                          defaultValue="Select year"
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
                          defaultValue="Select year"
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
                          id="retail-units"
                          name="retail-units"
                          min="0"
                          value={retailUnits}
                          onChange={handleRetailUnits}
                          required
                        />
                      </td>
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
                          defaultValue="Select year"
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
                          defaultValue="Select year"
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
                          id="health-units"
                          name="health-units"
                          min="0"
                          value={healthUnits}
                          onChange={handleHealthUnits}
                          required
                        />
                      </td>
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
                          defaultValue="Select year"
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
                          defaultValue="Select year"
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
                          id="hospitality-units"
                          name="hospitality-units"
                          min="0"
                          value={hospitalityUnits}
                          onChange={handleHospitalityUnits}
                          required
                        />
                      </td>
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
                          defaultValue="Select year"
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
                          defaultValue="Select year"
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
                          id="offices-units"
                          name="offices-units"
                          min="0"
                          value={officesUnits}
                          onChange={handleOfficesUnits}
                          required
                        />
                      </td>
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
                          defaultValue="Select year"
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
                          defaultValue="Select year"
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
                          id="industrial-units"
                          name="industrial-units"
                          min="0"
                          value={industrialUnits}
                          onChange={handleIndustrialUnits}
                          required
                        />
                      </td>
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
                          defaultValue="Select year"
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
                          defaultValue="Select year"
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
                          id="warehouses-units"
                          name="warehouses-units"
                          min="0"
                          value={warehousesUnits}
                          onChange={handleWarehousesUnits}
                          required
                        />
                      </td>
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
                          defaultValue="Select year"
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
                          defaultValue="Select year"
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
        </section>
        <section>
          {
            <div className="nextU2Button">
              <Button
                size="small"
                value="charts"
                // onClick={setBuildingTypes}
                label="Next &raquo;"
                primary
              />
            </div>
          }
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
