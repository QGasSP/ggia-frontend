import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/u2planner.css";
import "../css/newbuildings.css";
import { BuildingsPolicies } from "./BuildingsPolicies";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import axios from "axios";
import urlPrefix from "../Config";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import {
  useStorageFloat,
  useStorageInt,
  useStorageString,
} from "../reducers/useStorage";

/**
 * BuildingsNewUnits user input form
 * @return {}
 */

export const BuildingsNewUnits = ({
  population,
  year,
  country,
  baseline
}) => {
  country = country ? country : localStorage.getItem("country");
  year = year ? year : parseInt(localStorage.getItem("year"));
  population = population ? population : parseInt(localStorage.getItem("population"));
  baseline = baseline ? baseline : JSON.parse(localStorage.buildingsBaselineResponse); 
  // resiedntial
  // apartment
  // #region
  const [apartmentUnits, setApartmentUnits] = useStorageInt("apartmentUnits", 0);
  const [apartmentStartYear, setApartmentStartYear] = useStorageInt("apartmentStartYear", year);
  const [apartmentEndYear, setApartmentEndYear] = useStorageInt("apartmentEndYear", year);
  const [apartmentEnergy, setApartmentEnergy] = useStorageInt("apartmentEnergy", 0);
  // #endregion

  // terraced
  // #region
  const [terracedUnits, setTerracedUnits] = useStorageInt("terracedUnits", 0);
  const [terracedStartYear, setTerracedStartYear] = useStorageInt("terracedStartYear", year);
  const [terracedEndYear, setTerracedEndYear] = useStorageInt("terracedEndYear", year);
  const [terracedEnergy, setTerracedEnergy] = useStorageInt("terracedEnergy", 0);
  // #endregion

  // semiDetached
  // #region
  const [semiDetachedUnits, setSemiDetachedUnits] = useStorageInt("semiDetachedUnits", 0);
  const [semiDetachedStartYear, setSemiDetachedStartYear] = useStorageInt("semiDetachedStartYear", year);
  const [semiDetachedEndYear, setSemiDetachedEndYear] = useStorageInt("semiDetachedEndYear", year);
  const [semiDetachedEnergy, setSemiDetachedEnergy] = useStorageInt("semiDetachedEnergy", 0);
  // #endregion

  // detached
  // #region
  const [detachedUnits, setDetachedUnits] = useStorageInt("detachedUnits", 0);
  const [detachedStartYear, setDetachedStartYear] = useStorageInt("detachedStartYear", year);
  const [detachedEndYear, setDetachedEndYear] = useStorageInt("detachedEndYear", year);
  const [detachedEnergy, setDetachedEnergy] = useStorageInt("detachedEnergy", 0);
  // #endregion

  // apartment handlers
  // #region
  const handleApartmentUnits = (e) => {
    e.preventDefault();
    setApartmentUnits(parseInt(e.target.value));
  };
  const handleApartmentStartYear = (e) => {
    e.preventDefault();
    setApartmentStartYear(parseInt(e.target.value));
  };
  const handleApartmentEndYear = (e) => {
    e.preventDefault();
    setApartmentEndYear(parseInt(e.target.value));
  };
  const handleApartmentEnergy = (e) => {
    e.preventDefault();
    setApartmentEnergy(parseInt(e.target.value));
  };
  // #endregion

  // terraced handlers
  // #region
  const handleTerracedUnits = (e) => {
    e.preventDefault();
    setTerracedUnits(parseInt(e.target.value));
  };
  const handleTerracedStartYear = (e) => {
    e.preventDefault();
    setTerracedStartYear(parseInt(e.target.value));
  };
  const handleTerracedEndYear = (e) => {
    e.preventDefault();
    setTerracedEndYear(parseInt(e.target.value));
  };
  const handleTerracedEnergy = (e) => {
    e.preventDefault();
    setTerracedEnergy(parseInt(e.target.value));
  };
  // #endregion

  // semi-detached handlers
  // #region
  const handleSemiDetachedUnits = (e) => {
    e.preventDefault();
    setSemiDetachedUnits(parseInt(e.target.value));
  };
  const handleSemiDetachedStartYear = (e) => {
    e.preventDefault();
    setSemiDetachedStartYear(parseInt(e.target.value));
  };
  const handleSemiDetachedEndYear = (e) => {
    e.preventDefault();
    setSemiDetachedEndYear(parseInt(e.target.value));
  };
  const handleSemiDetachedEnergy = (e) => {
    e.preventDefault();
    setSemiDetachedEnergy(parseInt(e.target.value));
  };
  // #endregion

  // apartment handlers
  // #region
  const handleDetachedUnits = (e) => {
    e.preventDefault();
    setDetachedUnits(parseInt(e.target.value));
  };
  const handleDetachedStartYear = (e) => {
    e.preventDefault();
    setDetachedStartYear(parseInt(e.target.value));
  };
  const handleDetachedEndYear = (e) => {
    e.preventDefault();
    setDetachedEndYear(parseInt(e.target.value));
  };
  const handleDetachedEnergy = (e) => {
    e.preventDefault();
    setDetachedEnergy(parseInt(e.target.value));
  };
  // #endregion

  // commercials
  // retail
  // #region
  const [retailArea, setRetailArea] = useStorageInt("retailArea", 0);
  const [retailStartYear, setRetailStartYear] = useStorageInt("retailStartYear", year);
  const [retailEndYear, setRetailEndYear] = useStorageInt("retailEndYear", year);
  const [retailEnergy, setRetailEnergy] = useStorageInt("retailEnergy", 0);
  // #endregion

  // health
  // #region
  const [healthArea, setHealthArea] = useStorageInt("healthArea", 0);
  const [healthStartYear, setHealthStartYear] = useStorageInt("healthStartYear", year);
  const [healthEndYear, setHealthEndYear] = useStorageInt("healthEndYear", year);
  const [healthEnergy, setHealthEnergy] = useStorageInt("healthEnergy", 0);
  // #endregion

  // hospitality
  // #region
  const [hospitalityArea, setHospitalityArea] = useStorageInt("hospitalityArea", 0);
  const [hospitalityStartYear, setHospitalityStartYear] = useStorageInt("hospitalityStartYear", year);
  const [hospitalityEndYear, setHospitalityEndYear] = useStorageInt("hospitalityEndYear", year);
  const [hospitalityEnergy, setHospitalityEnergy] = useStorageInt("hospitalityEnergy", 0);
  // #endregion

  // offices
  // #region
  const [officesArea, setOfficesArea] = useStorageInt("officesArea", 0);
  const [officesStartYear, setOfficesStartYear] = useStorageInt("officesStartYear", year);
  const [officesEndYear, setOfficesEndYear] = useStorageInt("officesEndYear", year);
  const [officesEnergy, setOfficesEnergy] = useStorageInt("officesEnergy", 0);
  // #endregion

  // industrial
  // #region
  const [industrialArea, setIndustrialArea] = useStorageInt("industrialArea", 0);
  const [industrialStartYear, setIndustrialStartYear] = useStorageInt("industrialStartYear", year);
  const [industrialEndYear, setIndustrialEndYear] = useStorageInt("industrialEndYear", year);
  const [industrialEnergy, setIndustrialEnergy] = useStorageInt("industrialEnergy", 0);
  // #endregion

  // warehouses
  // #region
  const [warehousesArea, setWarehousesArea] = useStorageInt("warehousesArea", 0);
  const [warehousesStartYear, setWarehousesStartYear] = useStorageInt("warehousesStartYear", year);
  const [warehousesEndYear, setWarehousesEndYear] = useStorageInt("warehousesEndYear", year);
  const [warehousesEnergy, setWarehousesEnergy] = useStorageInt("warehousesEnergy", 0);
  // #endregion

  // retail handlers
  // #region
  const handleRetailArea = (e) => {
    e.preventDefault();
    setRetailArea(parseInt(e.target.value));
  };
  const handleRetailStartYear = (e) => {
    e.preventDefault();
    setRetailStartYear(parseInt(e.target.value));
  };
  const handleRetailEndYear = (e) => {
    e.preventDefault();
    setRetailEndYear(parseInt(e.target.value));
  };
  const handleRetailEnergy = (e) => {
    e.preventDefault();
    setRetailEnergy(parseInt(e.target.value));
  };
  // #endregion

  // health handlers
  // #region
  const handleHealthArea = (e) => {
    e.preventDefault();
    setHealthArea(parseInt(e.target.value));
  };
  const handleHealthStartYear = (e) => {
    e.preventDefault();
    setHealthStartYear(parseInt(e.target.value));
  };
  const handleHealthEndYear = (e) => {
    e.preventDefault();
    setHealthEndYear(parseInt(e.target.value));
  };
  const handleHealthEnergy = (e) => {
    e.preventDefault();
    setHealthEnergy(parseInt(e.target.value));
  };
  // #endregion

  // hospitality handlers
  // #region
  const handleHospitalityArea = (e) => {
    e.preventDefault();
    setHospitalityArea(parseInt(e.target.value));
  };
  const handleHospitalityStartYear = (e) => {
    e.preventDefault();
    setHospitalityStartYear(parseInt(e.target.value));
  };
  const handleHospitalityEndYear = (e) => {
    e.preventDefault();
    setHospitalityEndYear(parseInt(e.target.value));
  };
  const handleHospitalityEnergy = (e) => {
    e.preventDefault();
    setHospitalityEnergy(parseInt(e.target.value));
  };
  // #endregion

  // offices handlers
  // #region
  const handleOfficesArea = (e) => {
    e.preventDefault();
    setOfficesArea(parseInt(e.target.value));
  };
  const handleOfficesStartYear = (e) => {
    e.preventDefault();
    setOfficesStartYear(parseInt(e.target.value));
  };
  const handleOfficesEndYear = (e) => {
    e.preventDefault();
    setOfficesEndYear(parseInt(e.target.value));
  };
  const handleOfficesEnergy = (e) => {
    e.preventDefault();
    setOfficesEnergy(parseInt(e.target.value));
  };
  // #endregion

  // industrial handlers
  // #region
  const handleIndustrialArea = (e) => {
    e.preventDefault();
    setIndustrialArea(parseInt(e.target.value));
  };
  const handleIndustrialStartYear = (e) => {
    e.preventDefault();
    setIndustrialStartYear(parseInt(e.target.value));
  };
  const handleIndustrialEndYear = (e) => {
    e.preventDefault();
    setIndustrialEndYear(parseInt(e.target.value));
  };
  const handleIndustrialEnergy = (e) => {
    e.preventDefault();
    setIndustrialEnergy(parseInt(e.target.value));
  };
  // #endregion

  // warehouses handlers
  // #region
  const handleWarehousesArea = (e) => {
    e.preventDefault();
    setWarehousesArea(parseInt(e.target.value));
  };
  const handleWarehousesStartYear = (e) => {
    e.preventDefault();
    setWarehousesStartYear(parseInt(e.target.value));
  };
  const handleWarehousesEndYear = (e) => {
    e.preventDefault();
    setWarehousesEndYear(parseInt(e.target.value));
  };
  const handleWarehousesEnergy = (e) => {
    e.preventDefault();
    setWarehousesEnergy(parseInt(e.target.value));
  };
  // #endregion

  // densification of residentials
  // apartment
  // #region densification
  const [apartmentUnitsDensificated, setApartmentUnitsDensificated] = useStorageInt("apartmentUnitsDensificated", 0);
  const [apartmentStartYearDensificated, setApartmentStartYearDensificated] =
    useStorageInt("apartmentStartYearDensificated", year);
  const [apartmentEndYearDensificated, setApartmentEndYearDensificated] =
    useStorageInt("apartmentEndYearDensificated", year);
  const [apartmentEnergyDensificated, setApartmentEnergyDensificated] =
    useStorageInt("apartmentEnergyDensificated", 0);
  const [apartmentDensUnitsAfter, setApartmentDensUnitsAfter] = useStorageInt("apartmentDensUnitsAfter", 0);
  const [apartmentDensRate, setApartmentDensRate] = useStorageInt("apartmentDensRate", 0);
  // #endregion densification

  // terraced
  // #region densification
  const [terracedUnitsDensificated, setTerracedUnitsDensificated] = useStorageInt("terracedUnitsDensificated", 0);
  const [terracedStartYearDensificated, setTerracedStartYearDensificated] =
    useStorageInt("terracedStartYearDensificated", year);
  const [terracedEndYearDensificated, setTerracedEndYearDensificated] =
    useStorageInt("terracedEndYearDensificated", year);
  const [terracedEnergyDensificated, setTerracedEnergyDensificated] = useStorageInt("terracedEnergyDensificated", 0);
  const [terracedDensUnitsAfter, setTerracedDensUnitsAfter] = useStorageInt("terracedDensUnitsAfter", 0);
  const [terracedDensRate, setTerracedDensRate] = useStorageInt("terracedDensRate", 0);
  // #endregion densification

  // semiDetached
  // #region densification
  const [semiDetachedUnitsDensificated, setSemiDetachedUnitsDensificated] =
    useStorageInt("semiDetachedUnitsDensificated", 0);
  const [
    semiDetachedStartYearDensificated,
    setSemiDetachedStartYearDensificated,
  ] = useStorageInt("semiDetachedStartYearDensificated", year);
  const [semiDetachedEndYearDensificated, setSemiDetachedEndYearDensificated] =
    useStorageInt("semiDetachedEndYearDensificated", year);
  const [semiDetachedEnergyDensificated, setSemiDetachedEnergyDensificated] =
    useStorageInt("semiDetachedEnergyDensificated", 0);
  const [semiDetachedDensUnitsAfter, setSemiDetachedDensUnitsAfter] = useStorageInt("semiDetachedDensUnitsAfter", 0);
  const [semiDetachedDensRate, setSemiDetachedDensRate] = useStorageInt("semiDetachedDensRate", 0);
  // #endregion densification

  // detached
  // #region densification
  const [detachedUnitsDensificated, setDetachedUnitsDensificated] = useStorageInt("detachedUnitsDensificated", 0);
  const [detachedStartYearDensificated, setDetachedStartYearDensificated] =
    useStorageInt("detachedStartYearDensificated", year);
  const [detachedEndYearDensificated, setDetachedEndYearDensificated] =
    useStorageInt("detachedEndYearDensificated", year);
  const [detachedEnergyDensificated, setDetachedEnergyDensificated] = useStorageInt("detachedEnergyDensificated", 0);
  const [detachedDensUnitsAfter, setDetachedDensUnitsAfter] = useStorageInt("detachedDensUnitsAfter", 0);
  const [detachedDensRate, setDetachedDensRate] = useStorageInt("detachedDensRate", 0);
  // #endregion densification

  // apartment handlers
  // #region densification
  const handleApartmentUnitsDensificated = (e) => {
    e.preventDefault();
    setApartmentUnitsDensificated(parseInt(e.target.value));
  };
  const handleApartmentStartYearDensificated = (e) => {
    e.preventDefault();
    setApartmentStartYearDensificated(parseInt(e.target.value));
  };
  const handleApartmentEndYearDensificated = (e) => {
    e.preventDefault();
    setApartmentEndYearDensificated(parseInt(e.target.value));
  };
  const handleApartmentEnergyDensificated = (e) => {
    e.preventDefault();
    setApartmentEnergyDensificated(parseInt(e.target.value));
  };
  const handleApartmentDensRate = (e) => {
    e.preventDefault();
    setApartmentDensRate(parseInt(e.target.value));
  };
  const handleApartmentDensUnitsAfter = (e) => {
    e.preventDefault();
    setApartmentDensUnitsAfter(parseInt(apartmentUnitsDensificated + (apartmentUnitsDensificated * apartmentDensRate / 100)));
  };
  // #endregion densification

  // terraced handlers
  // #region densification
  const handleTerracedUnitsDensificated = (e) => {
    e.preventDefault();
    setTerracedUnitsDensificated(parseInt(e.target.value));
  };
  const handleTerracedStartYearDensificated = (e) => {
    e.preventDefault();
    setTerracedStartYearDensificated(parseInt(e.target.value));
  };
  const handleTerracedEndYearDensificated = (e) => {
    e.preventDefault();
    setTerracedEndYearDensificated(parseInt(e.target.value));
  };
  const handleTerracedEnergyDensificated = (e) => {
    e.preventDefault();
    setTerracedEnergyDensificated(parseInt(e.target.value));
  };
  const handleTerracedDensRate = (e) => {
    e.preventDefault();
    setTerracedDensRate(parseInt(e.target.value));
  };
  const handleTerracedDensUnitsAfter = (e) => {
    e.preventDefault();
    setTerracedDensUnitsAfter(parseInt(terracedUnitsDensificated + (terracedUnitsDensificated * terracedDensRate / 100)));
  };
  // #endregion densification

  // semi-detached handlers
  // #region densification
  const handleSemiDetachedUnitsDensificated = (e) => {
    e.preventDefault();
    setSemiDetachedUnitsDensificated(parseInt(e.target.value));
  };
  const handleSemiDetachedStartYearDensificated = (e) => {
    e.preventDefault();
    setSemiDetachedStartYearDensificated(parseInt(e.target.value));
  };
  const handleSemiDetachedEndYearDensificated = (e) => {
    e.preventDefault();
    setSemiDetachedEndYearDensificated(parseInt(e.target.value));
  };
  const handleSemiDetachedEnergyDensificated = (e) => {
    e.preventDefault();
    setSemiDetachedEnergyDensificated(parseInt(e.target.value));
  };
  const handleSemiDetachedDensRate = (e) => {
    e.preventDefault();
    setSemiDetachedDensRate(parseInt(e.target.value));
  };
  const handleSemiDetachedDensUnitsAfter = (e) => {
    e.preventDefault();
    setSemiDetachedDensUnitsAfter(parseInt(semiDetachedUnitsDensificated + (semiDetachedUnitsDensificated * semiDetachedDensRate / 100)));
  };
  // #endregion densification

  // detached handlers
  // #region densification
  const handleDetachedUnitsDensificated = (e) => {
    e.preventDefault();
    setDetachedUnitsDensificated(parseInt(e.target.value));
  };
  const handleDetachedStartYearDensificated = (e) => {
    e.preventDefault();
    setDetachedStartYearDensificated(parseInt(e.target.value));
  };
  const handleDetachedEndYearDensificated = (e) => {
    e.preventDefault();
    setDetachedEndYearDensificated(parseInt(e.target.value));
  };
  const handleDetachedEnergyDensificated = (e) => {
    e.preventDefault();
    setDetachedEnergyDensificated(parseInt(e.target.value));
  };
  const handleDetachedDensRate = (e) => {
    e.preventDefault();
    setDetachedDensRate(parseInt(e.target.value));
  };
  const handleDetachedDensUnitsAfter = (e) => {
    e.preventDefault();
    setDetachedDensUnitsAfter(parseInt(detachedUnitsDensificated + (detachedUnitsDensificated * detachedDensRate / 100)));
  };
  // #endregion densification

  // densification of commercials
  // retail
  // #region
  const [retailAreaDensificated, setRetailAreaDensificated] = useStorageInt("retailAreaDensificated", 0);
  const [retailStartYearDensificated, setRetailStartYearDensificated] =
    useStorageInt("retailStartYearDensificated", year);
  const [retailEndYearDensificated, setRetailEndYearDensificated] = useStorageInt("retailEndYearDensificated", year);
  const [retailEnergyDensificated, setRetailEnergyDensificated] = useStorageInt("retailEnergyDensificated", 0);
  const [retailDensAreaAfter, setRetailDensAreaAfter] = useStorageInt("retailDensAreaAfter", 0);
  const [retailDensRate, setRetailDensRate] = useStorageInt("retailDensRate", 0);
  // #endregion

  // health
  // #region
  const [healthAreaDensificated, setHealthAreaDensificated] = useStorageInt("healthAreaDensificated", 0);
  const [healthStartYearDensificated, setHealthStartYearDensificated] =
    useStorageInt("healthStartYearDensificated", year);
  const [healthEndYearDensificated, setHealthEndYearDensificated] = useStorageInt("healthEndYearDensificated", year);
  const [healthEnergyDensificated, setHealthEnergyDensificated] = useStorageInt("healthEnergyDensificated", 0);
  const [healthDensAreaAfter, setHealthDensAreaAfter] = useStorageInt("healthDensAreaAfter", 0);
  const [healthDensRate, setHealthDensRate] = useStorageInt("healthDensRate", 0);
  // #endregion

  // hospitality
  // #region
  const [hospitalityAreaDensificated, setHospitalityAreaDensificated] =
    useStorageInt("hospitalityAreaDensificated", 0);
  const [
    hospitalityStartYearDensificated,
    setHospitalityStartYearDensificated,
  ] = useStorageInt("hospitalityStartYearDensificated", year);
  const [hospitalityEndYearDensificated, setHospitalityEndYearDensificated] =
    useStorageInt("hospitalityEndYearDensificated", year);
  const [hospitalityEnergyDensificated, setHospitalityEnergyDensificated] =
    useStorageInt("hospitalityEnergyDensificated", 0);
  const [hospitalityDensAreaAfter, setHospitalityDensAreaAfter] = useStorageInt("hospitalityDensAreaAfter", 0);
  const [hospitalityDensRate, setHospitalityDensRate] = useStorageInt("hospitalityDensRate", 0);
  // #endregion

  // offices
  // #region
  const [officesAreaDensificated, setOfficesAreaDensificated] = useStorageInt("officesAreaDensificated", 0);
  const [officesStartYearDensificated, setOfficesStartYearDensificated] =
    useStorageInt("officesStartYearDensificated", year);
  const [officesEndYearDensificated, setOfficesEndYearDensificated] = useStorageInt("officesEndYearDensificated", year);
  const [officesEnergyDensificated, setOfficesEnergyDensificated] = useStorageInt("officesEnergyDensificated", 0);
  const [officesDensAreaAfter, setOfficesDensAreaAfter] = useStorageInt("officesDensAreaAfter", 0);
  const [officesDensRate, setOfficesDensRate] = useStorageInt("officesDensRate", 0);
  // #endregion

  // industrial
  // #region
  const [industrialAreaDensificated, setIndustrialAreaDensificated] = useStorageInt("industrialAreaDensificated", 0);
  const [industrialStartYearDensificated, setIndustrialStartYearDensificated] =
    useStorageInt("industrialStartYearDensificated", year);
  const [industrialEndYearDensificated, setIndustrialEndYearDensificated] =
    useStorageInt("industrialEndYearDensificated", year);
  const [industrialEnergyDensificated, setIndustrialEnergyDensificated] =
    useStorageInt("industrialEnergyDensificated", 0);
  const [industrialDensAreaAfter, setIndustrialDensAreaAfter] = useStorageInt("industrialDensAreaAfter", 0);
  const [industrialDensRate, setIndustrialDensRate] = useStorageInt("industrialDensRate", 0);
  // #endregion

  // warehouses
  // #region
  const [warehousesAreaDensificated, setWarehousesAreaDensificated] = useStorageInt("warehousesAreaDensificated", 0);
  const [warehousesStartYearDensificated, setWarehousesStartYearDensificated] =
    useStorageInt("warehousesStartYearDensificated", year);
  const [warehousesEndYearDensificated, setWarehousesEndYearDensificated] =
    useStorageInt("warehousesEndYearDensificated", year);
  const [warehousesEnergyDensificated, setWarehousesEnergyDensificated] =
    useStorageInt("warehousesEnergyDensificated", 0);
  const [warehousesDensAreaAfter, setWarehousesDensAreaAfter] = useStorageInt("warehousesDensAreaAfter", 0);
  const [warehousesDensRate, setWarehousesDensRate] = useStorageInt("warehousesDensRate", 0);
  // #endregion

  // retail handlers
  // #region
  const handleRetailAreaDensificated = (e) => {
    e.preventDefault();
    setRetailAreaDensificated(parseInt(e.target.value));
  };
  const handleRetailStartYearDensificated = (e) => {
    e.preventDefault();
    setRetailStartYearDensificated(parseInt(e.target.value));
  };
  const handleRetailEndYearDensificated = (e) => {
    e.preventDefault();
    setRetailEndYearDensificated(parseInt(e.target.value));
  };
  const handleRetailEnergyDensificated = (e) => {
    e.preventDefault();
    setRetailEnergyDensificated(parseInt(e.target.value));
  };
  const handleRetailDensRate = (e) => {
    e.preventDefault();
    setRetailDensRate(parseInt(e.target.value));
  };
  const handleRetailDensAreaAfter = (e) => {
    e.preventDefault();
    setRetailDensAreaAfter(parseInt(retailAreaDensificated + (retailAreaDensificated * retailDensRate / 100)));
  };
  // #endregion

  // health handlers
  // #region
  const handleHealthAreaDensificated = (e) => {
    e.preventDefault();
    setHealthAreaDensificated(parseInt(e.target.value));
  };
  const handleHealthStartYearDensificated = (e) => {
    e.preventDefault();
    setHealthStartYearDensificated(parseInt(e.target.value));
  };
  const handleHealthEndYearDensificated = (e) => {
    e.preventDefault();
    setHealthEndYearDensificated(parseInt(e.target.value));
  };
  const handleHealthEnergyDensificated = (e) => {
    e.preventDefault();
    setHealthEnergyDensificated(parseInt(e.target.value));
  };
  const handleHealthDensRate = (e) => {
    e.preventDefault();
    setHealthDensRate(parseInt(e.target.value));
  };
  const handleHealthDensAreaAfter = (e) => {
    e.preventDefault();
    setHealthDensAreaAfter(parseInt(healthAreaDensificated + (healthAreaDensificated * healthDensRate / 100)));
  };
  // #endregion

  // hospitality handlers
  // #region
  const handleHospitalityAreaDensificated = (e) => {
    e.preventDefault();
    setHospitalityAreaDensificated(parseInt(e.target.value));
  };
  const handleHospitalityStartYearDensificated = (e) => {
    e.preventDefault();
    setHospitalityStartYearDensificated(parseInt(e.target.value));
  };
  const handleHospitalityEndYearDensificated = (e) => {
    e.preventDefault();
    setHospitalityEndYearDensificated(parseInt(e.target.value));
  };
  const handleHospitalityEnergyDensificated = (e) => {
    e.preventDefault();
    setHospitalityEnergyDensificated(parseInt(e.target.value));
  };
  const handleHospitalityDensRate = (e) => {
    e.preventDefault();
    setHospitalityDensRate(parseInt(e.target.value));
  };
  const handleHospitalityDensAreaAfter = (e) => {
    e.preventDefault();
    setHospitalityDensAreaAfter(parseInt(hospitalityAreaDensificated + (hospitalityAreaDensificated * hospitalityDensRate / 100)));
  };
  // #endregion

  // offices handlers
  // #region
  const handleOfficesAreaDensificated = (e) => {
    e.preventDefault();
    setOfficesAreaDensificated(parseInt(e.target.value));
  };
  const handleOfficesStartYearDensificated = (e) => {
    e.preventDefault();
    setOfficesStartYearDensificated(parseInt(e.target.value));
  };
  const handleOfficesEndYearDensificated = (e) => {
    e.preventDefault();
    setOfficesEndYearDensificated(parseInt(e.target.value));
  };
  const handleOfficesEnergyDensificated = (e) => {
    e.preventDefault();
    setOfficesEnergyDensificated(parseInt(e.target.value));
  };
  const handleOfficesDensRate = (e) => {
    e.preventDefault();
    setOfficesDensRate(parseInt(e.target.value));
  };
  const handleOfficesDensAreaAfter = (e) => {
    e.preventDefault();
    setOfficesDensAreaAfter(parseInt(officesAreaDensificated + (officesAreaDensificated * officesDensRate / 100)));
  };
  // #endregion

  // industrial handlers
  // #region
  const handleIndustrialAreaDensificated = (e) => {
    e.preventDefault();
    setIndustrialAreaDensificated(parseInt(e.target.value));
  };
  const handleIndustrialStartYearDensificated = (e) => {
    e.preventDefault();
    setIndustrialStartYearDensificated(parseInt(e.target.value));
  };
  const handleIndustrialEndYearDensificated = (e) => {
    e.preventDefault();
    setIndustrialEndYearDensificated(parseInt(e.target.value));
  };
  const handleIndustrialEnergyDensificated = (e) => {
    e.preventDefault();
    setIndustrialEnergyDensificated(parseInt(e.target.value));
  };
  const handleIndustrialDensRate = (e) => {
    e.preventDefault();
    setIndustrialDensRate(parseInt(e.target.value));
  };
  const handleIndustrialDensAreaAfter = (e) => {
    e.preventDefault();
    setIndustrialDensAreaAfter(parseInt(industrialAreaDensificated + (industrialAreaDensificated * industrialDensRate / 100)));
  };
  // #endregion

  // warehouses handlers
  // #region
  const handleWarehousesAreaDensificated = (e) => {
    e.preventDefault();
    setWarehousesAreaDensificated(parseInt(e.target.value));
  };
  const handleWarehousesStartYearDensificated = (e) => {
    e.preventDefault();
    setWarehousesStartYearDensificated(parseInt(e.target.value));
  };
  const handleWarehousesEndYearDensificated = (e) => {
    e.preventDefault();
    setWarehousesEndYearDensificated(parseInt(e.target.value));
  };
  const handleWarehousesEnergyDensificated = (e) => {
    e.preventDefault();
    setWarehousesEnergyDensificated(parseInt(e.target.value));
  };
  const handleWarehousesDensRate = (e) => {
    e.preventDefault();
    setWarehousesDensRate(parseInt(e.target.value));
  };
  const handleWarehousesDensAreaAfter = (e) => {
    e.preventDefault();
    setWarehousesDensAreaAfter(parseInt(warehousesAreaDensificated + (warehousesAreaDensificated * warehousesDensRate / 100)));
  };
  // #endregion
  
  const navigate = useNavigate();
  const [errorBuildNewUnits, setErrorBuildNewUnits] = useState("");
  const [newConstructionRequest, setNewConstructionRequest] = useState(() => {
    const savedNew = localStorage.getItem("newConstructionResponse");
    const initialValue = JSON.parse(savedNew);
    return initialValue || {};
  });
  const [moveToPolicies, setMoveToPolicies] = useState(false);
  const optionsNewStart = [];
  const optionsNew = [];
  for (let i = year; i < 2051; i++) {
    optionsNewStart.push(i);
    optionsNew.push(i)
  }
  
  const submitNewConstruction = () => {
    // #region residentials
    const apartment = {
      "numberOfUnits": parseInt(apartmentUnits),
      "startYear": parseInt(apartmentStartYear),
      "endYear": parseInt(apartmentEndYear),
      "renewableEnergyPercent": parseInt(apartmentEnergy)
    };
    const terraced = {
      "numberOfUnits": parseInt(terracedUnits),
      "startYear": parseInt(terracedStartYear),
      "endYear": parseInt(terracedEndYear),
      "renewableEnergyPercent": parseInt(terracedEnergy)
    };
    const semiDetached = {
      "numberOfUnits": parseInt(semiDetachedUnits),
      "startYear": parseInt(semiDetachedStartYear),
      "endYear": parseInt(semiDetachedEndYear),
      "renewableEnergyPercent": parseInt(semiDetachedEnergy)
    };
    const detached = {
      "numberOfUnits": parseInt(detachedUnits),
      "startYear": parseInt(detachedStartYear),
      "endYear": parseInt(detachedEndYear),
      "renewableEnergyPercent": parseInt(detachedEnergy)
    };
    // #endregion
    // #region commercials
    const retail = {
      "floorArea": parseInt(retailArea),
      "renewableEnergyPercent": parseInt(retailEnergy),
      "startYear": parseInt(retailEndYear),
      "endYear": parseInt(retailEndYear)
    };
    const health = {
      "floorArea": parseInt(healthArea),
      "renewableEnergyPercent": parseInt(healthEnergy),
      "startYear": parseInt(healthStartYear),
      "endYear": parseInt(healthEndYear)
    };
    const hospitality = {
      "floorArea": parseInt(hospitalityArea),
      "renewableEnergyPercent": parseInt(hospitalityEnergy),
      "startYear": parseInt(hospitalityStartYear),
      "endYear": parseInt(hospitalityEndYear)
    };
    const offices = {
      "floorArea": parseInt(officesArea),
      "renewableEnergyPercent": parseInt(hospitalityEnergy),
      "startYear": parseInt(officesStartYear),
      "endYear": parseInt(officesEndYear)
    };
    const industrial = {
      "floorArea": parseInt(industrialArea),
      "renewableEnergyPercent": parseInt(industrialEnergy),
      "startYear": parseInt(industrialStartYear),
      "endYear": parseInt(industrialEndYear)
    };
    const warehouses = {
      "floorArea": parseInt(warehousesArea),
      "renewableEnergyPercent": parseInt(warehousesEnergy),
      "startYear": parseInt(warehousesStartYear),
      "endYear": parseInt(warehousesEndYear)
    };
    // #endregion
    
    const construction = {
      "residential":{
        "apartment": apartment,
        "terraced": terraced,
        "semiDetached": semiDetached,
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
    const densification = {
      "residential": {
          "apartment": {
              "numberOfExistingUnits": apartmentUnitsDensificated,
              "densificationRate": apartmentDensRate,
              "startYear": apartmentStartYearDensificated,
              "endYear": apartmentEndYearDensificated,
              "renewableEnergyPercent": apartmentEnergyDensificated
          },
          "terraced": {
              "numberOfExistingUnits": terracedUnitsDensificated,
              "densificationRate": terracedDensRate,
              "startYear": terracedStartYearDensificated,
              "endYear": terracedEndYearDensificated,
              "renewableEnergyPercent": terracedEnergyDensificated
          },
          "semiDetached": {
              "numberOfExistingUnits": semiDetachedUnitsDensificated,
              "densificationRate": semiDetachedDensRate,
              "startYear": semiDetachedStartYearDensificated,
              "endYear": semiDetachedEndYearDensificated,
              "renewableEnergyPercent": semiDetachedEnergyDensificated
          },
          "detached": {
              "numberOfExistingUnits": detachedUnitsDensificated,
              "densificationRate": detachedDensRate,
              "startYear": detachedStartYearDensificated,
              "endYear": detachedEndYearDensificated,
              "renewableEnergyPercent": detachedEnergyDensificated
          }
      },
      "commercial": {
          "retail": {
              "floorArea": retailAreaDensificated,
              "densificationRate": retailDensRate,
              "startYear": retailStartYearDensificated,
              "endYear": retailEndYearDensificated,
              "renewableEnergyPercent": retailEnergyDensificated
          },
          "health": {
              "floorArea": healthAreaDensificated,
              "densificationRate": healthDensRate,
              "startYear": healthStartYearDensificated,
              "endYear": healthEndYearDensificated,
              "renewableEnergyPercent": healthEnergyDensificated
          },
          "hospitality": {
            "floorArea": hospitalityAreaDensificated,
            "densificationRate": hospitalityDensRate,
            "startYear": hospitalityStartYearDensificated,
            "endYear": hospitalityEndYearDensificated,
            "renewableEnergyPercent": hospitalityEnergyDensificated
          },
          "offices": {
            "floorArea": officesAreaDensificated,
            "densificationRate": officesDensRate,
            "startYear": officesStartYearDensificated,
            "endYear": officesEndYearDensificated,
            "renewableEnergyPercent": officesEnergyDensificated
          },
          "industrial": {
            "floorArea": industrialAreaDensificated,
            "densificationRate": industrialDensRate,
            "startYear": industrialStartYearDensificated,
            "endYear": industrialEndYearDensificated,
            "renewableEnergyPercent": industrialEnergyDensificated
          },
          "warehouses": {
            "floorArea": warehousesAreaDensificated,
            "densificationRate": warehousesDensRate,
            "startYear": warehousesStartYearDensificated,
            "endYear": warehousesEndYearDensificated,
            "renewableEnergyPercent": warehousesEnergyDensificated
          }
      }
    };
    const settlements = {
      construction,
      densification
    }
    localStorage.setItem(
      "newConstructionRequest",
      JSON.stringify(newConstructionRequest)
    );
    setNewConstructionRequest(settlements);
   
  };

  const moveToPoliciesForms = () => {
    navigate("../buildingsPolicies", { replace: true });
    setMoveToPolicies(true);
  };

  useEffect(() => {
    localStorage.setItem(
      "newConstructionRequest",
      JSON.stringify(newConstructionRequest)
    );
  }, [newConstructionRequest]);

  if (moveToPolicies === false) {
    return (
      <section>
        <div className="headerSettlement">
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="U7 NEW SETTLEMENT / DENSIFICATION" />
          </Divider>
          <div className="luc_alert_container">
            <Alert severity="info">
              This section estimates the greenhouse gas emissions from the energy
              use in new buildings that are constructed according to the plan that
              is assessed.
            </Alert>
          </div>
        </div>

        <section>
            <Divider textAlign="left" flexItem>
              {" "}
              <b>U7.1 New residential units</b>
            </Divider>
            <div className="luc_alert_container">
              <Alert severity="info">
                Insert the total number of new residential units according to the
                plan or policy that is assessed.
              </Alert>
            </div>
          <div className="newResidentDiv">
            <form>
              <table className="buildings-tbl">
                <thead>
                  <tr>
                    <th className="row-title">Residential unit type</th>
                    <th>Number of units</th>
                    <Tooltip title="The first and the last year during which the new residents are moving in.">
                      <th colSpan={2}>New units completed between</th>
                    </Tooltip>
                    <Tooltip title=" Estimate the percentage of delivered energy that will be covered by local production of renewable energies. Renewable energy production for grid electricity is excluded.">
                      <th>% of energy from renewables</th>
                    </Tooltip>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Tooltip title="One apartment in a residential multi-storey building is one unit.">
                      <td className="row-title">Apartment</td>
                    </Tooltip>
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
                    <Tooltip title="One apartment in a residential terraced building is one unit.">
                      <td className="row-title">Terraced</td>
                    </Tooltip>
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
                    <Tooltip title="One apartment in a semi-detached house is one unit.">
                      <td className="row-title">Semi-Detached</td>
                    </Tooltip>
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
                    <Tooltip title="One detached house is one unit.">
                      <td className="row-title">Detached</td>
                    </Tooltip>
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
            <Divider textAlign="left" flexItem>
              {" "}
              <b>U7.2 New commercial buildings</b>
            </Divider>
            <div className="luc_alert_container">
              <Alert severity="info">
                Insert the total gross floor area of the new commercial buildings
                according to the plan or policy that is assessed.
              </Alert>
            </div>
          <div className="newResidentDiv">
            <form>
              <table className="buildings-tbl">
                <thead>
                  <tr>
                    <th className="row-title">Commercial building type</th>
                    <th>Total floor area</th>
                    <Tooltip title="The first and the last year during which these new buildings are taken in use.">
                      <th colSpan={2}>New buildings completed between</th>
                    </Tooltip>
                    <Tooltip title="Estimate the percentage of delivered electricity that will be covered by local production of renewable energies. Renewable energy production for grid electricity is excluded.">
                      <th>% of energy from renewables</th>
                    </Tooltip>
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
            <Divider textAlign="left" flexItem>
              {" "}
              <b>U7.3 Densification</b>
            </Divider>
            <div className="luc_alert_container">
              <Alert severity="info">
                In this section, the impact of planned new construction can be
                quantified through a densification rate of one specific part of
                the assessment area.
              </Alert>
            </div>
          <div className="newResidentDiv">
            <form>
                <table className="buildings-tbl">
                  <thead>
                    <tr>
                      <th className="row-title">Residential buildings</th>
                      <Tooltip title="Specify the number of the existing residential units in the area that will be densified. This may be one specific part of the entire assessment area.">
                        <th>Number of existing units</th>
                      </Tooltip>
                      <Tooltip title="Insert the volume of new construction as a percentage of existing units.">
                        <th>Densification rate (%)</th>
                      </Tooltip>
                      <Tooltip title="The first and the last year during which the new residents are moving in.">
                        <th colSpan={2}>
                          New residential units completed between
                        </th>
                      </Tooltip>
                      <Tooltip title="Estimate the percentage of delivered energy that will be covered by local production of renewable energies. Renewable energy production for grid electricity is excluded.">
                        <th>% energy from renewables</th>
                      </Tooltip>
                      <th className="row-title">
                        Number of units after densification
                      </th>
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
                          id="apartment-units-dens"
                          name="apartment-units-dens"
                          min="0"
                          value={apartmentUnitsDensificated}
                          onChange={handleApartmentUnitsDensificated}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="apartment-rate-dens"
                          name="apartment-rate-dens"
                          min="0"
                          value={apartmentDensRate}
                          onChange={handleApartmentDensRate}
                          onMouseLeave={handleApartmentDensUnitsAfter}
                          required
                        />
                      </td>
                      <td>
                        <select
                          className="table-cell"
                          id="apartment-start-year-dens"
                          name="apartment-start-year-dens"
                          value={apartmentStartYearDensificated}
                          onChange={handleApartmentStartYearDensificated}
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
                          id="apartment-end-year-dens"
                          name="apartment-end-year-dens"
                          value={apartmentEndYearDensificated}
                          onChange={handleApartmentEndYearDensificated}
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
                          id="apartment-energy-dens"
                          min="0"
                          value={apartmentEnergyDensificated}
                          onChange={handleApartmentEnergyDensificated}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell total-cell"
                          type="number"
                          step="1"
                          id="apartment-units-after"
                          min="0"
                          value={apartmentDensUnitsAfter}
                          disabled
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
                          id="terraced-units-dens"
                          name="terraced-units-dens"
                          min="0"
                          value={terracedUnitsDensificated}
                          onChange={handleTerracedUnitsDensificated}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="terraced-rate-dens"
                          name="terraced-rate-dens"
                          min="0"
                          value={terracedDensRate}
                          onChange={handleTerracedDensRate}
                          onMouseLeave={handleTerracedDensUnitsAfter}
                          required
                        />
                      </td>
                      <td>
                        <select
                          className="table-cell"
                          id="terraced-start-year-dens"
                          name="terraced-start-year-dens"
                          value={terracedStartYearDensificated}
                          onChange={handleTerracedStartYearDensificated}
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
                          id="terraced-end-year-dens"
                          name="terraced-end-year-dens"
                          value={terracedEndYearDensificated}
                          onChange={handleTerracedEndYearDensificated}
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
                          id="terraced-energy-dens"
                          min="0"
                          value={terracedEnergyDensificated}
                          onChange={handleTerracedEnergyDensificated}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell total-cell"
                          type="number"
                          step="1"
                          id="terraced-units-after"
                          min="0"
                          value={terracedDensUnitsAfter}
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
                          id="semiDetached-units-dens"
                          name="semiDetached-units-dens"
                          min="0"
                          value={semiDetachedUnitsDensificated}
                          onChange={handleSemiDetachedUnitsDensificated}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="semiDetached-rate-dens"
                          name="semiDetached-rate-dens"
                          min="0"
                          value={semiDetachedDensRate}
                          onChange={handleSemiDetachedDensRate}
                          onMouseLeave={handleSemiDetachedDensUnitsAfter}
                          required
                        />
                      </td>
                      <td>
                        <select
                          className="table-cell"
                          id="semiDetached-start-year-dens"
                          name="semiDetached-start-year-dens"
                          value={semiDetachedStartYearDensificated}
                          onChange={handleSemiDetachedStartYearDensificated}
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
                          id="semiDetached-end-year-dens"
                          name="semiDetached-end-year-dens"
                          value={semiDetachedEndYearDensificated}
                          onChange={handleSemiDetachedEndYearDensificated}
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
                          id="semiDetached-energy-dens"
                          min="0"
                          value={semiDetachedEnergyDensificated}
                          onChange={handleSemiDetachedEnergyDensificated}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell total-cell"
                          type="number"
                          step="1"
                          id="semiDetached-units-after"
                          min="0"
                          value={semiDetachedDensUnitsAfter}
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
                          id="detached-units-dens"
                          name="detached-units-dens"
                          min="0"
                          value={detachedUnitsDensificated}
                          onChange={handleDetachedUnitsDensificated}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="detached-rate-dens"
                          name="detached-rate-dens"
                          min="0"
                          value={detachedDensRate}
                          onChange={handleDetachedDensRate}
                          onMouseLeave={handleDetachedDensUnitsAfter}
                          required
                        />
                      </td>
                      <td>
                        <select
                          className="table-cell"
                          id="detached-start-year-dens"
                          name="detached-start-year-dens"
                          value={detachedStartYearDensificated}
                          onChange={handleDetachedStartYearDensificated}
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
                          id="detached-end-year-dens"
                          name="detached-end-year-dens"
                          value={detachedEndYearDensificated}
                          onChange={handleDetachedEndYearDensificated}
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
                          id="detached-energy-dens"
                          min="0"
                          value={detachedEnergyDensificated}
                          onChange={handleDetachedEnergyDensificated}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell total-cell"
                          type="number"
                          step="1"
                          id="detached-units-after"
                          min="0"
                          value={detachedDensUnitsAfter}
                          required
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="luc_alert_container">
                  <table className="buildings-tbl">
                    <thead>
                      <tr>
                        <th className="row-title">Commercial buildings</th>
                        <Tooltip title="Insert the existing floor area of commercial buildings in the area that is densified.">
                          <th>Existing floor area</th>
                        </Tooltip>
                        <Tooltip title="Insert the volume of new construction as a percentage of existing floor area.">
                          <th>Densification rate (%)</th>
                        </Tooltip>
                        <Tooltip title="The first and the last year during which these new buildings are taken in use.">
                          <th colSpan={2}>New buildings completed between</th>
                        </Tooltip>
                        <Tooltip title="Estimate the percentage of delivered electricity that will be covered by local production of renewable energies. Renewable energy production for grid electricity is excluded.">
                          <th>% energy from renewables</th>
                        </Tooltip>
                        <th className="row-title">
                          Floor area after densification
                        </th>
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
                            id="retail-area-dens"
                            name="retail-area-dens"
                            min="0"
                            value={retailAreaDensificated}
                            onChange={handleRetailAreaDensificated}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="retail-rate-dens"
                            name="retail-rate-dens"
                            min="0"
                            value={retailDensRate}
                            onChange={handleRetailDensRate}
                            onMouseLeave={handleRetailDensAreaAfter}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="retail-start-year-dens"
                            name="retail-start-year-dens"
                            value={retailStartYearDensificated}
                            onChange={handleRetailStartYearDensificated}
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
                            id="retail-end-year-dens"
                            name="retail-end-year-dens"
                            value={retailEndYearDensificated}
                            onChange={handleRetailEndYearDensificated}
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
                            id="retail-energy-dens"
                            min="0"
                            value={retailEnergyDensificated}
                            onChange={handleRetailEnergyDensificated}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell total-cell"
                            type="number"
                            step="1"
                            id="retail-area-after"
                            min="0"
                            value={retailDensAreaAfter}
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
                            id="health-area-dens"
                            name="health-area-dens"
                            min="0"
                            value={healthAreaDensificated}
                            onChange={handleHealthAreaDensificated}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="health-rate-dens"
                            name="health-rate-dens"
                            min="0"
                            value={healthDensRate}
                            onChange={handleHealthDensRate}
                            onMouseLeave={handleHealthDensAreaAfter}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="health-start-year-dens"
                            name="health-start-year-dens"
                            value={healthStartYearDensificated}
                            onChange={handleHealthStartYearDensificated}
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
                            id="health-end-year-dens"
                            name="health-end-year-dens"
                            value={healthEndYearDensificated}
                            onChange={handleHealthEndYearDensificated}
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
                            id="health-energy-dens"
                            min="0"
                            value={healthEnergyDensificated}
                            onChange={handleHealthEnergyDensificated}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell total-cell"
                            type="number"
                            step="1"
                            id="health-area-after"
                            min="0"
                            value={healthDensAreaAfter}
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
                            id="hospitality-area-dens"
                            name="hospitality-area-dens"
                            min="0"
                            value={hospitalityAreaDensificated}
                            onChange={handleHospitalityAreaDensificated}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="hospitality-rate-dens"
                            name="hospitality-rate-dens"
                            min="0"
                            value={hospitalityDensRate}
                            onChange={handleHospitalityDensRate}
                            onMouseLeave={handleHospitalityDensAreaAfter}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="hospitality-start-year-dens"
                            name="hospitality-start-year-dens"
                            value={hospitalityStartYearDensificated}
                            onChange={handleHospitalityStartYearDensificated}
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
                            id="hospitality-end-year-dens"
                            name="hospitality-end-year-dens"
                            value={hospitalityEndYearDensificated}
                            onChange={handleHospitalityEndYearDensificated}
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
                            id="hospitality-energy-dens"
                            min="0"
                            value={hospitalityEnergyDensificated}
                            onChange={handleHospitalityEnergyDensificated}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell total-cell"
                            type="number"
                            step="1"
                            id="hospitality-area-after"
                            min="0"
                            value={hospitalityDensAreaAfter}
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
                            id="offices-area-dens"
                            name="offices-area-dens"
                            min="0"
                            value={officesAreaDensificated}
                            onChange={handleOfficesAreaDensificated}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="offices-rate-dens"
                            name="offices-rate-dens"
                            min="0"
                            value={officesDensRate}
                            onChange={handleOfficesDensRate}
                            onMouseLeave={handleOfficesDensAreaAfter}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="offices-start-year-dens"
                            name="offices-start-year-dens"
                            value={officesStartYearDensificated}
                            onChange={handleOfficesStartYearDensificated}
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
                            id="offices-end-year-dens"
                            name="offices-end-year-dens"
                            value={officesEndYearDensificated}
                            onChange={handleOfficesEndYearDensificated}
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
                            id="offices-energy-dens"
                            min="0"
                            value={officesEnergyDensificated}
                            onChange={handleOfficesEnergyDensificated}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell total-cell"
                            type="number"
                            step="1"
                            id="offices-area-after"
                            min="0"
                            value={officesDensAreaAfter}
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
                            id="industrial-area-dens"
                            name="industrial-area-dens"
                            min="0"
                            value={industrialAreaDensificated}
                            onChange={handleIndustrialAreaDensificated}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="industrial-rate-dens"
                            name="industrial-rate-dens"
                            min="0"
                            value={industrialDensRate}
                            onChange={handleIndustrialDensRate}
                            onMouseLeave={handleIndustrialDensAreaAfter}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="industrial-start-year-dens"
                            name="industrial-start-year-dens"
                            value={industrialStartYearDensificated}
                            onChange={handleIndustrialStartYearDensificated}
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
                            id="industrial-end-year-dens"
                            name="industrial-end-year-dens"
                            value={industrialEndYearDensificated}
                            onChange={handleIndustrialEndYearDensificated}
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
                            id="industrial-energy-dens"
                            min="0"
                            value={industrialEnergyDensificated}
                            onChange={handleIndustrialEnergyDensificated}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell total-cell"
                            type="number"
                            step="1"
                            id="industrial-area-after"
                            min="0"
                            value={industrialDensAreaAfter}
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
                            id="warehouses-area-dens"
                            name="warehouses-area-dens"
                            min="0"
                            value={warehousesAreaDensificated}
                            onChange={handleWarehousesAreaDensificated}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="warehouses-rate-dens"
                            name="warehouses-rate-dens"
                            min="0"
                            value={warehousesDensRate}
                            onChange={handleWarehousesDensRate}
                            onMouseLeave={handleWarehousesDensAreaAfter}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="warehouses-start-year-dens"
                            name="warehouses-start-year-dens"
                            value={warehousesStartYearDensificated}
                            onChange={handleWarehousesStartYearDensificated}
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
                            id="warehouses-end-year-dens"
                            name="warehouses-end-year-dens"
                            value={warehousesEndYearDensificated}
                            onChange={handleWarehousesEndYearDensificated}
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
                            id="warehouses-energy-dens"
                            min="0"
                            value={warehousesEnergyDensificated}
                            onChange={handleWarehousesEnergyDensificated}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell total-cell"
                            type="number"
                            step="1"
                            id="warehouses-area-after"
                            min="0"
                            value={warehousesDensAreaAfter}
                            required
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </form>
          </div>
        </section>
          <div className="buildings-buttons">
            <div className="">
              <Button
                size="small"
                value="backProjections"
                onClick={() => navigate("../buildingBaselineCharts", { replace: true })}
                label="&laquo; Previous"
                secondary
              />
            </div>
            <div className="nextU2Button">
                <div className="">
                  <Button
                    size="small"
                    value="charts"
                    onClick={moveToPoliciesForms}
                    label="Next &raquo;"
                    primary
                  />
                </div>
                <div className="">
                  <Button
                    id="btn-next"
                    size="small"
                    type="submit"
                    value="Submit"
                    onClick={submitNewConstruction}
                    label="Submit"
                    primary="true"
                  />
                </div>
            </div>
        </div>
      </section>
    );
  } else {
    return (
      <BuildingsPolicies
        newConstructionRequest={newConstructionRequest}
        country={country}
        year={year}
        population={population}
        baseline={baseline}
      />
    );
  }
};

BuildingsNewUnits.propTypes = {
  year: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  newConstruction: PropTypes.object.isRequired,
  baseline: PropTypes.object.isRequired
};
