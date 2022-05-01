import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/u2planner.css";
import "../css/newbuildings.css";
import { BuildingsPoliciesCharts } from "./BuildingsPoliciesCharts";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import axios from "axios";
import urlPrefix from "../Config";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

/**
 * BuildingsPolicies user input form
 * @return {}
 */

export const BuildingsPolicies = ({newConstructionResponse, country, year, population }) => {
  // RESIDENTIAL units

  // firstResidentSelector
  // #region
  const [
    firstResidentSelectorResidentialUnit,
    setFirstResidentSelectorResidentialUnit,
  ] = useState("");
  const [firstResidentSelectorUnits, setFirstResidentSelectorUnits] = useState(
    parseInt(0)
  );
  const [
    firstResidentSelectorIndicativeBefore,
    setFirstResidentSelectorIndicativeBefore,
  ] = useState("");
  const [
    firstResidentSelectorIndicativeAfter,
    setFirstResidentSelectorIndicativeAfter,
  ] = useState("");
  const [firstResidentSelectorStartYear, setFirstResidentSelectorStartYear] =
    useState(Number(year));
  const [firstResidentSelectorEndYear, setFirstResidentSelectorEndYear] =
    useState(Number(year));
  const [firstResidentSelectorEnergy, setFirstResidentSelectorEnergy] =
    useState(parseInt(0));
  // #endregion

  // secondResidentSelector
  // #region
  const [
    secondResidentSelectorResidentialUnit,
    setSecondResidentSelectorResidentialUnit,
  ] = useState("");
  const [secondResidentSelectorUnits, setSecondResidentSelectorUnits] =
    useState(parseInt(0));
  const [
    secondResidentSelectorIndicativeBefore,
    setSecondResidentSelectorIndicativeBefore,
  ] = useState("");
  const [
    secondResidentSelectorIndicativeAfter,
    setSecondResidentSelectorIndicativeAfter,
  ] = useState("");
  const [secondResidentSelectorStartYear, setSecondResidentSelectorStartYear] =
    useState(Number(year));
  const [secondResidentSelectorEndYear, setSecondResidentSelectorEndYear] =
    useState(Number(year));
  const [secondResidentSelectorEnergy, setSecondResidentSelectorEnergy] =
    useState(parseInt(0));
  // #endregion

  // thirdResidentSelector
  // #region
  const [
    thirdResidentSelectorResidentialUnit,
    setThirdResidentSelectorResidentialUnit,
  ] = useState("");
  const [thirdResidentSelectorUnits, setThirdResidentSelectorUnits] = useState(
    parseInt(0)
  );
  const [
    thirdResidentSelectorIndicativeBefore,
    setThirdResidentSelectorIndicativeBefore,
  ] = useState("");
  const [
    thirdResidentSelectorIndicativeAfter,
    setThirdResidentSelectorIndicativeAfter,
  ] = useState("");
  const [thirdResidentSelectorStartYear, setThirdResidentSelectorStartYear] =
    useState(Number(year));
  const [thirdResidentSelectorEndYear, setThirdResidentSelectorEndYear] =
    useState(Number(year));
  const [thirdResidentSelectorEnergy, setThirdResidentSelectorEnergy] =
    useState(parseInt(0));
  // #endregion

  // fourthResidentSelector
  // #region
  const [
    fourthResidentSelectorResidentialUnit,
    setFourthResidentSelectorResidentialUnit,
  ] = useState("");
  const [fourthResidentSelectorUnits, setFourthResidentSelectorUnits] =
    useState(parseInt(0));
  const [
    fourthResidentSelectorIndicativeBefore,
    setFourthResidentSelectorIndicativeBefore,
  ] = useState("");
  const [
    fourthResidentSelectorIndicativeAfter,
    setFourthResidentSelectorIndicativeAfter,
  ] = useState("");
  const [fourthResidentSelectorStartYear, setFourthResidentSelectorStartYear] =
    useState(Number(year));
  const [fourthResidentSelectorEndYear, setFourthResidentSelectorEndYear] =
    useState(Number(year));
  const [fourthResidentSelectorEnergy, setFourthResidentSelectorEnergy] =
    useState(parseInt(0));
  // #endregion

  // fifthResidentSelector
  // #region
  const [
    fifthResidentSelectorResidentialUnit,
    setFifthResidentSelectorResidentialUnit,
  ] = useState("");
  const [fifthResidentSelectorUnits, setFifthResidentSelectorUnits] = useState(
    parseInt(0)
  );
  const [
    fifthResidentSelectorIndicativeBefore,
    setFifthResidentSelectorIndicativeBefore,
  ] = useState("");
  const [
    fifthResidentSelectorIndicativeAfter,
    setFifthResidentSelectorIndicativeAfter,
  ] = useState("");
  const [fifthResidentSelectorStartYear, setFifthResidentSelectorStartYear] =
    useState(Number(year));
  const [fifthResidentSelectorEndYear, setFifthResidentSelectorEndYear] =
    useState(Number(year));
  const [fifthResidentSelectorEnergy, setFifthResidentSelectorEnergy] =
    useState(parseInt(0));
  // #endregion

  // sixthResidentSelector
  // #region
  const [
    sixthResidentSelectorResidentialUnit,
    setSixthResidentSelectorResidentialUnit,
  ] = useState("");
  const [sixthResidentSelectorUnits, setSixthResidentSelectorUnits] = useState(
    parseInt(0)
  );
  const [
    sixthResidentSelectorIndicativeBefore,
    setSixthResidentSelectorIndicativeBefore,
  ] = useState("");
  const [
    sixthResidentSelectorIndicativeAfter,
    setSixthResidentSelectorIndicativeAfter,
  ] = useState("");
  const [sixthResidentSelectorStartYear, setSixthResidentSelectorStartYear] =
    useState(Number(year));
  const [sixthResidentSelectorEndYear, setSixthResidentSelectorEndYear] =
    useState(Number(year));
  const [sixthResidentSelectorEnergy, setSixthResidentSelectorEnergy] =
    useState(parseInt(0));
  // #endregion

  // FirstResidentSelector handlers
  // #region
  const handleFirstResidentSelectorResidentialUnit = (e) => {
 e.preventDefault();
    setFirstResidentSelectorResidentialUnit(e.target.value);
  };
  const handleFirstResidentSelectorUnits = (e) => {
 e.preventDefault();
    setFirstResidentSelectorUnits(parseInt(e.target.value));
  };
  const handleFirstResidentSelectorIndicativeBefore = (e) => {
 e.preventDefault();
    setFirstResidentSelectorIndicativeBefore(e.target.value);
  };
  const handleFirstResidentSelectorIndicativeAfter = (e) => {
 e.preventDefault();
    setFirstResidentSelectorIndicativeAfter(e.target.value);
  };
  const handleFirstResidentSelectorStartYear = (e) => {
 e.preventDefault();
    setFirstResidentSelectorStartYear(Number(e.target.value));
  };
  const handleFirstResidentSelectorEndYear = (e) => {
 e.preventDefault();
    setFirstResidentSelectorEndYear(Number(e.target.value));
  };
  const handleFirstResidentSelectorEnergy = (e) => {
 e.preventDefault();
    setFirstResidentSelectorEnergy(parseInt(e.target.value));
  };
  // #endregion

  // SecondResidentSelector handlers
  // #region
  const handleSecondResidentSelectorResidentialUnit = (e) => {
 e.preventDefault();
    setSecondResidentSelectorResidentialUnit(e.target.value);
  };
  const handleSecondResidentSelectorUnits = (e) => {
 e.preventDefault();
    setSecondResidentSelectorUnits(parseInt(e.target.value));
  };
  const handleSecondResidentSelectorIndicativeBefore = (e) => {
 e.preventDefault();
    setSecondResidentSelectorIndicativeBefore(e.target.value);
  };
  const handleSecondResidentSelectorIndicativeAfter = (e) => {
 e.preventDefault();
    setSecondResidentSelectorIndicativeAfter(e.target.value);
  };
  const handleSecondResidentSelectorStartYear = (e) => {
 e.preventDefault();
    setSecondResidentSelectorStartYear(Number(e.target.value));
  };
  const handleSecondResidentSelectorEndYear = (e) => {
 e.preventDefault();
    setSecondResidentSelectorEndYear(Number(e.target.value));
  };
  const handleSecondResidentSelectorEnergy = (e) => {
 e.preventDefault();
    setSecondResidentSelectorEnergy(parseInt(e.target.value));
  };
  // #endregion

  // ThirdResidentSelector handlers
  // #region
  const handleThirdResidentSelectorResidentialUnit = (e) => {
 e.preventDefault();
    setThirdResidentSelectorResidentialUnit(e.target.value);
  };
  const handleThirdResidentSelectorUnits = (e) => {
 e.preventDefault();
    setThirdResidentSelectorUnits(parseInt(e.target.value));
  };
  const handleThirdResidentSelectorIndicativeBefore = (e) => {
 e.preventDefault();
    setThirdResidentSelectorIndicativeBefore(e.target.value);
  };
  const handleThirdResidentSelectorIndicativeAfter = (e) => {
 e.preventDefault();
    setThirdResidentSelectorIndicativeAfter(e.target.value);
  };
  const handleThirdResidentSelectorStartYear = (e) => {
 e.preventDefault();
    setThirdResidentSelectorStartYear(Number(e.target.value));
  };
  const handleThirdResidentSelectorEndYear = (e) => {
 e.preventDefault();
    setThirdResidentSelectorEndYear(Number(e.target.value));
  };
  const handleThirdResidentSelectorEnergy = (e) => {
 e.preventDefault();
    setThirdResidentSelectorEnergy(parseInt(e.target.value));
  };
  // #endregion

  // FourthResidentSelector handlers
  // #region
  const handleFourthResidentSelectorResidentialUnit = (e) => {
 e.preventDefault();
    setFourthResidentSelectorResidentialUnit(e.target.value);
  };
  const handleFourthResidentSelectorUnits = (e) => {
 e.preventDefault();
    setFourthResidentSelectorUnits(parseInt(e.target.value));
  };
  const handleFourthResidentSelectorIndicativeBefore = (e) => {
 e.preventDefault();
    setFourthResidentSelectorIndicativeBefore(e.target.value);
  };
  const handleFourthResidentSelectorIndicativeAfter = (e) => {
 e.preventDefault();
    setFourthResidentSelectorIndicativeAfter(e.target.value);
  };
  const handleFourthResidentSelectorStartYear = (e) => {
 e.preventDefault();
    setFourthResidentSelectorStartYear(Number(e.target.value));
  };
  const handleFourthResidentSelectorEndYear = (e) => {
 e.preventDefault();
    setFourthResidentSelectorEndYear(Number(e.target.value));
  };
  const handleFourthResidentSelectorEnergy = (e) => {
 e.preventDefault();
    setFourthResidentSelectorEnergy(parseInt(e.target.value));
  };
  // #endregion

  // FifthResidentSelector handlers
  // #region
  const handleFifthResidentSelectorResidentialUnit = (e) => {
 e.preventDefault();
    setFifthResidentSelectorResidentialUnit(e.target.value);
  };
  const handleFifthResidentSelectorUnits = (e) => {
 e.preventDefault();
    setFifthResidentSelectorUnits(parseInt(e.target.value));
  };
  const handleFifthResidentSelectorIndicativeBefore = (e) => {
 e.preventDefault();
    setFifthResidentSelectorIndicativeBefore(e.target.value);
  };
  const handleFifthResidentSelectorIndicativeAfter = (e) => {
 e.preventDefault();
    setFifthResidentSelectorIndicativeAfter(e.target.value);
  };
  const handleFifthResidentSelectorStartYear = (e) => {
 e.preventDefault();
    setFifthResidentSelectorStartYear(Number(e.target.value));
  };
  const handleFifthResidentSelectorEndYear = (e) => {
 e.preventDefault();
    setFifthResidentSelectorEndYear(Number(e.target.value));
  };
  const handleFifthResidentSelectorEnergy = (e) => {
 e.preventDefault();
    setFifthResidentSelectorEnergy(parseInt(e.target.value));
  };
  // #endregion

  // SixthResidentSelector handlers
  // #region
  const handleSixthResidentSelectorResidentialUnit = (e) => {
 e.preventDefault();
    setSixthResidentSelectorResidentialUnit(e.target.value);
  };
  const handleSixthResidentSelectorUnits = (e) => {
 e.preventDefault();
    setSixthResidentSelectorUnits(parseInt(e.target.value));
  };
  const handleSixthResidentSelectorIndicativeBefore = (e) => {
 e.preventDefault();
    setSixthResidentSelectorIndicativeBefore(e.target.value);
  };
  const handleSixthResidentSelectorIndicativeAfter = (e) => {
 e.preventDefault();
    setSixthResidentSelectorIndicativeAfter(e.target.value);
  };
  const handleSixthResidentSelectorStartYear = (e) => {
 e.preventDefault();
    setSixthResidentSelectorStartYear(Number(e.target.value));
  };
  const handleSixthResidentSelectorEndYear = (e) => {
 e.preventDefault();
    setSixthResidentSelectorEndYear(Number(e.target.value));
  };
  const handleSixthResidentSelectorEnergy = (e) => {
 e.preventDefault();
    setSixthResidentSelectorEnergy(parseInt(e.target.value));
  };
  // #endregion

  // COMMERCIAL buildings

  // firstCommercialSelector
  // #region
  const [
    firstCommercialSelectorBuildingType,
    setFirstCommercialSelectorBuildingType,
  ] = useState("");
  const [firstCommercialSelectorArea, setFirstCommercialSelectorArea] =
    useState(parseInt(0));
  const [
    firstCommercialSelectorReduction,
    setFirstCommercialSelectorReduction,
  ] = useState(parseInt(0));
  const [
    firstCommercialSelectorStartYear,
    setFirstCommercialSelectorStartYear,
  ] = useState(Number(year));
  const [firstCommercialSelectorEndYear, setFirstCommercialSelectorEndYear] =
    useState(Number(year));
  const [firstCommercialSelectorEnergy, setFirstCommercialSelectorEnergy] =
    useState(parseInt(0));
  // #endregion

  // secondCommercialSelector
  // #region
  const [
    secondCommercialSelectorBuildingType,
    setSecondCommercialSelectorBuildingType,
  ] = useState("");
  const [secondCommercialSelectorArea, setSecondCommercialSelectorArea] =
    useState(parseInt(0));
  const [
    secondCommercialSelectorReduction,
    setSecondCommercialSelectorReduction,
  ] = useState(parseInt(0));
  const [
    secondCommercialSelectorStartYear,
    setSecondCommercialSelectorStartYear,
  ] = useState(Number(year));
  const [secondCommercialSelectorEndYear, setSecondCommercialSelectorEndYear] =
    useState(Number(year));
  const [secondCommercialSelectorEnergy, setSecondCommercialSelectorEnergy] =
    useState(parseInt(0));
  // #endregion

  // thirdCommercialSelector
  // #region
  const [
    thirdCommercialSelectorBuildingType,
    setThirdCommercialSelectorBuildingType,
  ] = useState("");
  const [thirdCommercialSelectorArea, setThirdCommercialSelectorArea] =
    useState(parseInt(0));
  const [
    thirdCommercialSelectorReduction,
    setThirdCommercialSelectorReduction,
  ] = useState(parseInt(0));
  const [
    thirdCommercialSelectorStartYear,
    setThirdCommercialSelectorStartYear,
  ] = useState(Number(year));
  const [thirdCommercialSelectorEndYear, setThirdCommercialSelectorEndYear] =
    useState(Number(year));
  const [thirdCommercialSelectorEnergy, setThirdCommercialSelectorEnergy] =
    useState(parseInt(0));
  // #endregion

  // fourthCommercialSelector
  // #region
  const [
    fourthCommercialSelectorBuildingType,
    setFourthCommercialSelectorBuildingType,
  ] = useState("");
  const [fourthCommercialSelectorArea, setFourthCommercialSelectorArea] =
    useState(parseInt(0));
  const [
    fourthCommercialSelectorReduction,
    setFourthCommercialSelectorReduction,
  ] = useState(parseInt(0));
  const [
    fourthCommercialSelectorStartYear,
    setFourthCommercialSelectorStartYear,
  ] = useState(Number(year));
  const [fourthCommercialSelectorEndYear, setFourthCommercialSelectorEndYear] =
    useState(Number(year));
  const [fourthCommercialSelectorEnergy, setFourthCommercialSelectorEnergy] =
    useState(parseInt(0));
  // #endregion

  // fifthCommercialSelector
  // #region
  const [
    fifthCommercialSelectorBuildingType,
    setFifthCommercialSelectorBuildingType,
  ] = useState("");
  const [fifthCommercialSelectorArea, setFifthCommercialSelectorArea] =
    useState(parseInt(0));
  const [
    fifthCommercialSelectorReduction,
    setFifthCommercialSelectorReduction,
  ] = useState(parseInt(0));
  const [
    fifthCommercialSelectorStartYear,
    setFifthCommercialSelectorStartYear,
  ] = useState(Number(year));
  const [fifthCommercialSelectorEndYear, setFifthCommercialSelectorEndYear] =
    useState(Number(year));
  const [fifthCommercialSelectorEnergy, setFifthCommercialSelectorEnergy] =
    useState(parseInt(0));
  // #endregion

  // sixthCommercialSelector
  // #region
  const [
    sixthCommercialSelectorBuildingType,
    setSixthCommercialSelectorBuildingType,
  ] = useState("");
  const [sixthCommercialSelectorArea, setSixthCommercialSelectorArea] =
    useState(parseInt(0));
  const [
    sixthCommercialSelectorReduction,
    setSixthCommercialSelectorReduction,
  ] = useState(parseInt(0));
  const [
    sixthCommercialSelectorStartYear,
    setSixthCommercialSelectorStartYear,
  ] = useState(Number(year));
  const [sixthCommercialSelectorEndYear, setSixthCommercialSelectorEndYear] =
    useState(Number(year));
  const [sixthCommercialSelectorEnergy, setSixthCommercialSelectorEnergy] =
    useState(parseInt(0));
  // #endregion

  // FirstCommercialSelector handlers
  // #region
  const handleFirstCommercialSelectorBuildingType = (e) => {
 e.preventDefault();
    setFirstCommercialSelectorBuildingType(e.target.value);
  };
  const handleFirstCommercialSelectorArea = (e) => {
 e.preventDefault();
    setFirstCommercialSelectorArea(parseInt(e.target.value));
  };
  const handleFirstCommercialSelectorReduction = (e) => {
 e.preventDefault();
    setFirstCommercialSelectorReduction(parseInt(e.target.value));
  };
  const handleFirstCommercialSelectorStartYear = (e) => {
 e.preventDefault();
    setFirstCommercialSelectorStartYear(Number(e.target.value));
  };
  const handleFirstCommercialSelectorEndYear = (e) => {
 e.preventDefault();
    setFirstCommercialSelectorEndYear(Number(e.target.value));
  };
  const handleFirstCommercialSelectorEnergy = (e) => {
 e.preventDefault();
    setFirstCommercialSelectorEnergy(parseInt(e.target.value));
  };
  // #endregion

  // SecondCommercialSelector handlers
  // #region
  const handleSecondCommercialSelectorBuildingType = (e) => {
 e.preventDefault();
    setSecondCommercialSelectorBuildingType(e.target.value);
  };
  const handleSecondCommercialSelectorArea = (e) => {
 e.preventDefault();
    setSecondCommercialSelectorArea(parseInt(e.target.value));
  };
  const handleSecondCommercialSelectorReduction = (e) => {
 e.preventDefault();
    setSecondCommercialSelectorReduction(parseInt(e.target.value));
  };
  const handleSecondCommercialSelectorStartYear = (e) => {
 e.preventDefault();
    setSecondCommercialSelectorStartYear(Number(e.target.value));
  };
  const handleSecondCommercialSelectorEndYear = (e) => {
 e.preventDefault();
    setSecondCommercialSelectorEndYear(Number(e.target.value));
  };
  const handleSecondCommercialSelectorEnergy = (e) => {
 e.preventDefault();
    setSecondCommercialSelectorEnergy(parseInt(e.target.value));
  };
  // #endregion

  // ThirdCommercialSelector handlers
  // #region
  const handleThirdCommercialSelectorBuildingType = (e) => {
 e.preventDefault();
    setThirdCommercialSelectorBuildingType(e.target.value);
  };
  const handleThirdCommercialSelectorArea = (e) => {
 e.preventDefault();
    setThirdCommercialSelectorArea(parseInt(e.target.value));
  };
  const handleThirdCommercialSelectorReduction = (e) => {
 e.preventDefault();
    setThirdCommercialSelectorReduction(parseInt(e.target.value));
  };
  const handleThirdCommercialSelectorStartYear = (e) => {
 e.preventDefault();
    setThirdCommercialSelectorStartYear(Number(e.target.value));
  };
  const handleThirdCommercialSelectorEndYear = (e) => {
 e.preventDefault();
    setThirdCommercialSelectorEndYear(Number(e.target.value));
  };
  const handleThirdCommercialSelectorEnergy = (e) => {
 e.preventDefault();
    setThirdCommercialSelectorEnergy(parseInt(e.target.value));
  };
  // #endregion

  // FourthCommercialSelector handlers
  // #region
  const handleFourthCommercialSelectorBuildingType = (e) => {
 e.preventDefault();
    setFourthCommercialSelectorBuildingType(e.target.value);
  };
  const handleFourthCommercialSelectorArea = (e) => {
 e.preventDefault();
    setFourthCommercialSelectorArea(parseInt(e.target.value));
  };
  const handleFourthCommercialSelectorReduction = (e) => {
 e.preventDefault();
    setFourthCommercialSelectorReduction(parseInt(e.target.value));
  };
  const handleFourthCommercialSelectorStartYear = (e) => {
 e.preventDefault();
    setFourthCommercialSelectorStartYear(Number(e.target.value));
  };
  const handleFourthCommercialSelectorEndYear = (e) => {
 e.preventDefault();
    setFourthCommercialSelectorEndYear(Number(e.target.value));
  };
  const handleFourthCommercialSelectorEnergy = (e) => {
 e.preventDefault();
    setFourthCommercialSelectorEnergy(parseInt(e.target.value));
  };
  // #endregion

  // FifthCommercialSelector handlers
  // #region
  const handleFifthCommercialSelectorBuildingType = (e) => {
 e.preventDefault();
    setFifthCommercialSelectorBuildingType(e.target.value);
  };
  const handleFifthCommercialSelectorArea = (e) => {
 e.preventDefault();
    setFifthCommercialSelectorArea(parseInt(e.target.value));
  };
  const handleFifthCommercialSelectorReduction = (e) => {
 e.preventDefault();
    setFifthCommercialSelectorReduction(parseInt(e.target.value));
  };
  const handleFifthCommercialSelectorStartYear = (e) => {
 e.preventDefault();
    setFifthCommercialSelectorStartYear(Number(e.target.value));
  };
  const handleFifthCommercialSelectorEndYear = (e) => {
 e.preventDefault();
    setFifthCommercialSelectorEndYear(Number(e.target.value));
  };
  const handleFifthCommercialSelectorEnergy = (e) => {
 e.preventDefault();
    setFifthCommercialSelectorEnergy(parseInt(e.target.value));
  };
  // #endregion

  // SixthCommercialSelector handlers
  // #region
  const handleSixthCommercialSelectorBuildingType = (e) => {
 e.preventDefault();
    setSixthCommercialSelectorBuildingType(e.target.value);
  };
  const handleSixthCommercialSelectorArea = (e) => {
 e.preventDefault();
    setSixthCommercialSelectorArea(parseInt(e.target.value));
  };
  const handleSixthCommercialSelectorReduction = (e) => {
 e.preventDefault();
    setSixthCommercialSelectorReduction(parseInt(e.target.value));
  };
  const handleSixthCommercialSelectorStartYear = (e) => {
 e.preventDefault();
    setSixthCommercialSelectorStartYear(Number(e.target.value));
  };
  const handleSixthCommercialSelectorEndYear = (e) => {
 e.preventDefault();
    setSixthCommercialSelectorEndYear(Number(e.target.value));
  };
  const handleSixthCommercialSelectorEnergy = (e) => {
 e.preventDefault();
    setSixthCommercialSelectorEnergy(parseInt(e.target.value));
  };
  // #endregion

  // Change of building use
  // firstSelector
  // #region
  const [firstSelectorBuildingTypeFrom, setFirstSelectorBuildingTypeFrom] =
    useState("");
  const [firstSelectorBuildingTypeTo, setFirstSelectorBuildingTypeTo] =
    useState("");
  const [firstSelectorArea, setFirstSelectorArea] = useState(parseInt(0));
  const [firstSelectorStartYear, setFirstSelectorStartYear] = useState(
    Number(year)
  );
  const [firstSelectorEndYear, setFirstSelectorEndYear] = useState(
    Number(year)
  );
  // #endregion

  // secondSelector
  // #region
  const [secondSelectorBuildingTypeFrom, setSecondSelectorBuildingTypeFrom] =
    useState("");
  const [secondSelectorBuildingTypeTo, setSecondSelectorBuildingTypeTo] =
    useState("");
  const [secondSelectorArea, setSecondSelectorArea] = useState(parseInt(0));
  const [secondSelectorStartYear, setSecondSelectorStartYear] = useState(
    Number(year)
  );
  const [secondSelectorEndYear, setSecondSelectorEndYear] = useState(
    Number(year)
  );
  // #endregion

  // thirdSelector
  // #region
  const [thirdSelectorBuildingTypeFrom, setThirdSelectorBuildingTypeFrom] =
    useState("");
  const [thirdSelectorBuildingTypeTo, setThirdSelectorBuildingTypeTo] =
    useState("");
  const [thirdSelectorArea, setThirdSelectorArea] = useState(parseInt(0));
  const [thirdSelectorStartYear, setThirdSelectorStartYear] = useState(
    Number(year)
  );
  const [thirdSelectorEndYear, setThirdSelectorEndYear] = useState(
    Number(year)
  );
  // #endregion

  // fourthSelector
  // #region
  const [fourthSelectorBuildingTypeFrom, setFourthSelectorBuildingTypeFrom] =
    useState("");
  const [fourthSelectorBuildingTypeTo, setFourthSelectorBuildingTypeTo] =
    useState("");
  const [fourthSelectorArea, setFourthSelectorArea] = useState(parseInt(0));
  const [fourthSelectorStartYear, setFourthSelectorStartYear] = useState(
    Number(year)
  );
  const [fourthSelectorEndYear, setFourthSelectorEndYear] = useState(
    Number(year)
  );
  // #endregion

  // fifthSelector
  // #region
  const [fifthSelectorBuildingTypeFrom, setFifthSelectorBuildingTypeFrom] =
    useState("");
  const [fifthSelectorBuildingTypeTo, setFifthSelectorBuildingTypeTo] =
    useState("");
  const [fifthSelectorArea, setFifthSelectorArea] = useState(parseInt(0));
  const [fifthSelectorStartYear, setFifthSelectorStartYear] = useState(
    Number(year)
  );
  const [fifthSelectorEndYear, setFifthSelectorEndYear] = useState(
    Number(year)
  );
  // #endregion

  // sixthSelector
  // #region
  const [sixthSelectorBuildingTypeFrom, setSixthSelectorBuildingTypeFrom] =
    useState("");
  const [sixthSelectorBuildingTypeTo, setSixthSelectorBuildingTypeTo] =
    useState("");
  const [sixthSelectorArea, setSixthSelectorArea] = useState(parseInt(0));
  const [sixthSelectorStartYear, setSixthSelectorStartYear] = useState(
    Number(year)
  );
  const [sixthSelectorEndYear, setSixthSelectorEndYear] = useState(
    Number(year)
  );
  // #endregion

  // FirstSelector handlers
  // #region
  const handleFirstSelectorBuildingTypeFrom = (e) => {
 e.preventDefault();
    setFirstSelectorBuildingTypeFrom(e.target.value);
  };
  const handleFirstSelectorBuildingTypeTo = (e) => {
 e.preventDefault();
    setFirstSelectorBuildingTypeTo(e.target.value);
  };
  const handleFirstSelectorArea = (e) => {
 e.preventDefault();
    setFirstSelectorArea(parseInt(e.target.value));
  };
  const handleFirstSelectorStartYear = (e) => {
 e.preventDefault();
    setFirstSelectorStartYear(Number(e.target.value));
  };
  const handleFirstSelectorEndYear = (e) => {
 e.preventDefault();
    setFirstSelectorEndYear(Number(e.target.value));
  };
  // #endregion

  // SecondSelector handlers
  // #region
  const handleSecondSelectorBuildingTypeFrom = (e) => {
 e.preventDefault();
    setSecondSelectorBuildingTypeFrom(e.target.value);
  };
  const handleSecondSelectorBuildingTypeTo = (e) => {
 e.preventDefault();
    setSecondSelectorBuildingTypeTo(e.target.value);
  };
  const handleSecondSelectorArea = (e) => {
 e.preventDefault();
    setSecondSelectorArea(parseInt(e.target.value));
  };
  const handleSecondSelectorStartYear = (e) => {
 e.preventDefault();
    setSecondSelectorStartYear(Number(e.target.value));
  };
  const handleSecondSelectorEndYear = (e) => {
 e.preventDefault();
    setSecondSelectorEndYear(Number(e.target.value));
  };
  // #endregion

  // ThirdSelector handlers
  // #region
  const handleThirdSelectorBuildingTypeFrom = (e) => {
 e.preventDefault();
    setThirdSelectorBuildingTypeFrom(e.target.value);
  };
  const handleThirdSelectorBuildingTypeTo = (e) => {
 e.preventDefault();
    setThirdSelectorBuildingTypeTo(e.target.value);
  };
  const handleThirdSelectorArea = (e) => {
 e.preventDefault();
    setThirdSelectorArea(parseInt(e.target.value));
  };
  const handleThirdSelectorStartYear = (e) => {
 e.preventDefault();
    setThirdSelectorStartYear(Number(e.target.value));
  };
  const handleThirdSelectorEndYear = (e) => {
 e.preventDefault();
    setThirdSelectorEndYear(Number(e.target.value));
  };
  // #endregion

  // FourthSelector handlers
  // #region
  const handleFourthSelectorBuildingTypeFrom = (e) => {
 e.preventDefault();
    setFourthSelectorBuildingTypeFrom(e.target.value);
  };
  const handleFourthSelectorBuildingTypeTo = (e) => {
 e.preventDefault();
    setFourthSelectorBuildingTypeTo(e.target.value);
  };
  const handleFourthSelectorArea = (e) => {
 e.preventDefault();
    setFourthSelectorArea(parseInt(e.target.value));
  };
  const handleFourthSelectorStartYear = (e) => {
 e.preventDefault();
    setFourthSelectorStartYear(Number(e.target.value));
  };
  const handleFourthSelectorEndYear = (e) => {
 e.preventDefault();
    setFourthSelectorEndYear(Number(e.target.value));
  };
  // #endregion

  // FifthSelector handlers
  // #region
  const handleFifthSelectorBuildingTypeFrom = (e) => {
 e.preventDefault();
    setFifthSelectorBuildingTypeFrom(e.target.value);
  };
  const handleFifthSelectorBuildingTypeTo = (e) => {
 e.preventDefault();
    setFifthSelectorBuildingTypeTo(e.target.value);
  };
  const handleFifthSelectorArea = (e) => {
 e.preventDefault();
    setFifthSelectorArea(parseInt(e.target.value));
  };
  const handleFifthSelectorStartYear = (e) => {
 e.preventDefault();
    setFifthSelectorStartYear(Number(e.target.value));
  };
  const handleFifthSelectorEndYear = (e) => {
 e.preventDefault();
    setFifthSelectorEndYear(Number(e.target.value));
  };
  // #endregion

  // SixthSelector handlers
  // #region
  const handleSixthSelectorBuildingTypeFrom = (e) => {
 e.preventDefault();
    setSixthSelectorBuildingTypeFrom(e.target.value);
  };
  const handleSixthSelectorBuildingTypeTo = (e) => {
 e.preventDefault();
    setSixthSelectorBuildingTypeTo(e.target.value);
  };
  const handleSixthSelectorArea = (e) => {
 e.preventDefault();
    setSixthSelectorArea(parseInt(e.target.value));
  };
  const handleSixthSelectorStartYear = (e) => {
 e.preventDefault();
    setSixthSelectorStartYear(Number(e.target.value));
  };
  const handleSixthSelectorEndYear = (e) => {
 e.preventDefault();
    setSixthSelectorEndYear(Number(e.target.value));
  };
  // #endregion
  const navigate = useNavigate();
  const [errorBuildPolicies, setErrorBuildPolicies] = useState("");
  const [policiesCharts, setPoliciesCharts] = useState(false);

  const [nextBtnStyles, setNextBtnStyle] = useState({
    display: "none",
  });
  const [loadingStyles, setLoadingStyle] = useState({
    display: "none",
  });

  const [policyQuantificationResponse, setPolicyQuantificationResponse] = useState(() => {
    const savedBasline = localStorage.getItem("policyQuantificationResponse");
    const initialValue = JSON.parse(savedBasline);
    return initialValue || {};
  });
  const optionsIndicators = ["A", "B", "C", "D", "E", "F", "G"];
  const optionsYear = [];
  for (let i = year; i < 2051; i++) optionsYear.push(i);

  const optionsResidents = [
    "Apartment",
    "Terraced",
    "Semi-detached",
    "Detached",
  ];
  const optionsCommercials = [
    "Retail",
    "Health",
    "Hospitality",
    "Offices",
    "Industrail",
    "Warehouses",
  ];
  const optionsBuildings = optionsResidents.concat(optionsCommercials);

  const setBuildinbgsPolicyQuantification = () => {
    // #region residentials
    const retrofit1 = {
        "unitType": firstResidentSelectorResidentialUnit,
        "numberOfUnits": firstResidentSelectorUnits,
        "energyUseBefore": firstResidentSelectorIndicativeBefore,
        "energyUseAfter": firstResidentSelectorIndicativeAfter,
        "renewableEnergyPercent": firstResidentSelectorEnergy,
        "startYear": firstResidentSelectorStartYear,
        "endYear": firstResidentSelectorEndYear
    };
    const retrofit2 = {
      "unitType": secondResidentSelectorResidentialUnit,
      "numberOfUnits": secondResidentSelectorUnits,
      "energyUseBefore": secondResidentSelectorIndicativeBefore,
      "energyUseAfter": secondResidentSelectorIndicativeAfter,
      "renewableEnergyPercent": secondResidentSelectorEnergy,
      "startYear": secondResidentSelectorStartYear,
      "endYear": secondResidentSelectorEndYear
    };
    const retrofit3 = {
      "unitType": thirdResidentSelectorResidentialUnit,
      "numberOfUnits": thirdResidentSelectorUnits,
      "energyUseBefore": thirdResidentSelectorIndicativeBefore,
      "energyUseAfter": thirdResidentSelectorIndicativeAfter,
      "renewableEnergyPercent": thirdResidentSelectorEnergy,
      "startYear": thirdResidentSelectorStartYear,
      "endYear": thirdResidentSelectorEndYear
    };
    const retrofit4 = {
      "unitType": fourthResidentSelectorResidentialUnit,
      "numberOfUnits": fourthResidentSelectorUnits,
      "energyUseBefore": fourthResidentSelectorIndicativeBefore,
      "energyUseAfter": fourthResidentSelectorIndicativeAfter,
      "renewableEnergyPercent": fourthResidentSelectorEnergy,
      "startYear": fourthResidentSelectorStartYear,
      "endYear": fourthResidentSelectorEndYear
    };
    const retrofit5 = {
      "unitType": fifthResidentSelectorResidentialUnit,
      "numberOfUnits": fifthResidentSelectorUnits,
      "energyUseBefore": fifthResidentSelectorIndicativeBefore,
      "energyUseAfter": fifthResidentSelectorIndicativeAfter,
      "renewableEnergyPercent": fifthResidentSelectorEnergy,
      "startYear": fifthResidentSelectorStartYear,
      "endYear": fifthResidentSelectorEndYear
    };
    const retrofit6 = {
      "unitType": sixthResidentSelectorResidentialUnit,
      "numberOfUnits": sixthResidentSelectorUnits,
      "energyUseBefore": sixthResidentSelectorIndicativeBefore,
      "energyUseAfter": sixthResidentSelectorIndicativeAfter,
      "renewableEnergyPercent": sixthResidentSelectorEnergy,
      "startYear": sixthResidentSelectorStartYear,
      "endYear": sixthResidentSelectorEndYear
    };
    // #endregion
    const policyQuantification = {
      "residentialRetrofit": {
          retrofit1,
          retrofit2,
          retrofit3,
          retrofit4,
          retrofit5,
          retrofit6
      },
      "commercialRetrofit": {
          "retrofit1": {
              "buildingType": firstCommercialSelectorBuildingType,
              "totalFloorArea": firstCommercialSelectorArea,
              "energyDemandReductionPercent": firstCommercialSelectorReduction,
              "renewableEnergyPercent": firstCommercialSelectorEnergy,
              "startYear": firstCommercialSelectorStartYear,
              "endYear": firstCommercialSelectorEndYear
          },
          "retrofit2": {
            "buildingType": secondCommercialSelectorBuildingType,
            "totalFloorArea": secondCommercialSelectorArea,
            "energyDemandReductionPercent": secondCommercialSelectorReduction,
            "renewableEnergyPercent": secondCommercialSelectorEnergy,
            "startYear": secondCommercialSelectorStartYear,
            "endYear": secondCommercialSelectorEndYear
          },
          "retrofit3": {
            "buildingType": thirdCommercialSelectorBuildingType,
            "totalFloorArea": thirdCommercialSelectorArea,
            "energyDemandReductionPercent": thirdCommercialSelectorReduction,
            "renewableEnergyPercent": thirdCommercialSelectorEnergy,
            "startYear": thirdCommercialSelectorStartYear,
            "endYear": thirdCommercialSelectorEndYear
          },
          "retrofit4": {
            "buildingType": fourthCommercialSelectorBuildingType,
            "totalFloorArea": fourthCommercialSelectorArea,
            "energyDemandReductionPercent": fourthCommercialSelectorReduction,
            "renewableEnergyPercent": fourthCommercialSelectorEnergy,
            "startYear": fourthCommercialSelectorStartYear,
            "endYear": fourthCommercialSelectorEndYear
          },
          "retrofit5": {
            "buildingType": fifthCommercialSelectorBuildingType,
            "totalFloorArea": fifthCommercialSelectorArea,
            "energyDemandReductionPercent": fifthCommercialSelectorReduction,
            "renewableEnergyPercent": fifthCommercialSelectorEnergy,
            "startYear": fifthCommercialSelectorStartYear,
            "endYear": fifthCommercialSelectorEndYear
          },
          "retrofit6": {
            "buildingType": sixthCommercialSelectorBuildingType,
            "totalFloorArea": sixthCommercialSelectorArea,
            "energyDemandReductionPercent": sixthCommercialSelectorReduction,
            "renewableEnergyPercent": sixthCommercialSelectorEnergy,
            "startYear": sixthCommercialSelectorStartYear,
            "endYear": sixthCommercialSelectorEndYear
          }
      }
    };
    const rawData = {
      country,
      year,
      population,
      policyQuantification
    };
    localStorage.setItem(
      "policyQuantificationRequest",
      JSON.stringify(rawData)
    );
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    };
    axios
    .post(
      urlPrefix + "/api/v1/calculate/buildings/policy",
      rawData,
      headers
    )
    .then((response) => setPolicyQuantificationResponse(response.data.data))
    .then(() => {
      setNextBtnStyle({
        display: "block",
      });
      setLoadingStyle({
        display: "none",
      });
    })
    .catch((error) => {
      setErrorBuildPolicies({ errorMessage: error.message });
      // eslint-disable-next-line no-console
      console.error("There was an error!", errorBuildPolicies);
    });
  };

  const moveToPoliciesResults = () => {
    setPoliciesCharts(true);
  }
  useEffect(() => {
    localStorage.setItem(
      "policyQuantificationResponse",
      JSON.stringify(policyQuantificationResponse)
    );
  }, [policyQuantificationResponse]);

  if (policiesCharts === false) {
    return (
      <section>
        <div className="headerSettlement">
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="U8 POLICY QUANTIFICATION" />
          </Divider>
          <Alert severity="info">
            This section quantifies the impact of retrofit and renovation
            policies on the greenhouse gas emissions.
          </Alert>
        </div>
        <section>
            <Divider textAlign="left" flexItem>
              {" "}
              <b>U8.1 Retrofits of residental buildings</b>
            </Divider>
          <div className="newResidentDiv">
            <div className="luc_alert_container">
              <Alert severity="info">
                This section quantifies the greenhouse gas impact of residential
                building retrofits/renovations.
              </Alert>
            </div>
            <form>
              <table className="buildings-policy-tbl buildings-tbl">
                <thead>
                  <tr>
                    <th className="row-title">Select residential unit</th>
                    <Tooltip title="Insert the number of residential units that are retrofitted/renovated according to the plan/policy in assessment.">
                      <th>Number of units</th>
                    </Tooltip>
                    <th colSpan={2}>
                      Indicative energy use
                      <Tooltip title="Estimate the energy consumption of existing residential buildings before retrofitting using the national energy certificate rating.">
                        <th>before</th>
                      </Tooltip>
                      <Tooltip title="Estimate the energy consumption of existing residential buildings after retrofitting using the national energy certificate rating.">
                        <th>after</th>
                      </Tooltip>
                    </th>
                    <Tooltip title="Estimate the percentage of delivered energy that will be covered by local production of renewable energies. Renewable energy production for grid electricity is excluded.">
                      <th>% of energy from renewables</th>
                    </Tooltip>
                    <Tooltip title="Insert the first and the last year of retrofitting.">
                      <th colSpan={2}>Retrofits completed between</th>
                    </Tooltip>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select
                        className="table-cell first-cell"
                        id="firstResidentSelectorResidentialUnit"
                        name="firstResidentSelectorResidentialUnit"
                        onChange={handleFirstResidentSelectorResidentialUnit}
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
                        id="firstResidentSelectorUnits"
                        name="firstResidentSelectorUnits"
                        min="0"
                        value={firstResidentSelectorUnits}
                        onChange={handleFirstResidentSelectorUnits}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="firstResidentSelectorIndicativeBefore"
                        name="firstResidentSelectorIndicativeBefore"
                        onChange={handleFirstResidentSelectorIndicativeBefore}
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
                        id="firstResidentSelectorIndicativeAfter"
                        name="firstResidentSelectorIndicativeAfter"
                        onChange={handleFirstResidentSelectorIndicativeAfter}
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
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="firstResidentSelectorEnergy"
                        name="firstResidentSelectorEnergy"
                        min="0"
                        value={firstResidentSelectorEnergy}
                        onChange={handleFirstResidentSelectorEnergy}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="firstResidentSelectorStartYear"
                        name="firstResidentSelectorStartYear"
                        onChange={handleFirstResidentSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="firstResidentSelectorEndYear"
                        name="firstResidentSelectorEndYear"
                        onChange={handleFirstResidentSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        className="table-cell first-cell"
                        id="secondResidentSelectorResidentialUnit"
                        name="secondResidentSelectorResidentialUnit"
                        onChange={handleSecondResidentSelectorResidentialUnit}
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
                        id="secondResidentSelectorUnits"
                        name="secondResidentSelectorUnits"
                        min="0"
                        value={secondResidentSelectorUnits}
                        onChange={handleSecondResidentSelectorUnits}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="secondResidentSelectorIndicativeBefore"
                        name="secondResidentSelectorIndicativeBefore"
                        onChange={handleSecondResidentSelectorIndicativeBefore}
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
                        id="secondResidentSelectorIndicativeAfter"
                        name="secondResidentSelectorIndicativeAfter"
                        onChange={handleSecondResidentSelectorIndicativeAfter}
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
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="secondResidentSelectorEnergy"
                        name="secondResidentSelectorEnergy"
                        min="0"
                        value={secondResidentSelectorEnergy}
                        onChange={handleSecondResidentSelectorEnergy}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="secondResidentSelectorStartYear"
                        name="secondResidentSelectorStartYear"
                        onChange={handleSecondResidentSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="secondResidentSelectorEndYear"
                        name="secondResidentSelectorEndYear"
                        onChange={handleSecondResidentSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        className="table-cell first-cell"
                        id="thirdResidentSelectorResidentialUnit"
                        name="thirdResidentSelectorResidentialUnit"
                        onChange={handleThirdResidentSelectorResidentialUnit}
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
                        id="thirdResidentSelectorUnits"
                        name="thirdResidentSelectorUnits"
                        min="0"
                        value={thirdResidentSelectorUnits}
                        onChange={handleThirdResidentSelectorUnits}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="thirdResidentSelectorIndicativeBefore"
                        name="thirdResidentSelectorIndicativeBefore"
                        onChange={handleThirdResidentSelectorIndicativeBefore}
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
                        id="thirdResidentSelectorIndicativeAfter"
                        name="thirdResidentSelectorIndicativeAfter"
                        onChange={handleThirdResidentSelectorIndicativeAfter}
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
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="thirdResidentSelectorEnergy"
                        name="thirdResidentSelectorEnergy"
                        min="0"
                        value={thirdResidentSelectorEnergy}
                        onChange={handleThirdResidentSelectorEnergy}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="thirdResidentSelectorStartYear"
                        name="thirdResidentSelectorStartYear"
                        onChange={handleThirdResidentSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="thirdResidentSelectorEndYear"
                        name="thirdResidentSelectorEndYear"
                        onChange={handleThirdResidentSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        className="table-cell first-cell"
                        id="fourthResidentSelectorResidentialUnit"
                        name="fourthResidentSelectorResidentialUnit"
                        onChange={handleFourthResidentSelectorResidentialUnit}
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
                        id="fourthResidentSelectorUnits"
                        name="fourthResidentSelectorUnits"
                        min="0"
                        value={fourthResidentSelectorUnits}
                        onChange={handleFourthResidentSelectorUnits}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="fourthResidentSelectorIndicativeBefore"
                        name="fourthResidentSelectorIndicativeBefore"
                        onChange={handleFourthResidentSelectorIndicativeBefore}
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
                        id="fourthResidentSelectorIndicativeAfter"
                        name="fourthResidentSelectorIndicativeAfter"
                        onChange={handleFourthResidentSelectorIndicativeAfter}
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
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="fourthResidentSelectorEnergy"
                        name="fourthResidentSelectorEnergy"
                        min="0"
                        value={fourthResidentSelectorEnergy}
                        onChange={handleFourthResidentSelectorEnergy}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="fourthResidentSelectorStartYear"
                        name="fourthResidentSelectorStartYear"
                        onChange={handleFourthResidentSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="fourthResidentSelectorEndYear"
                        name="fourthResidentSelectorEndYear"
                        onChange={handleFourthResidentSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        className="table-cell first-cell"
                        id="fifthResidentSelectorResidentialUnit"
                        name="fifthResidentSelectorResidentialUnit"
                        onChange={handleFifthResidentSelectorResidentialUnit}
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
                        id="fifthResidentSelectorUnits"
                        name="fifthResidentSelectorUnits"
                        min="0"
                        value={fifthResidentSelectorUnits}
                        onChange={handleFifthResidentSelectorUnits}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="fifthResidentSelectorIndicativeBefore"
                        name="fifthResidentSelectorIndicativeBefore"
                        onChange={handleFifthResidentSelectorIndicativeBefore}
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
                        id="fifthResidentSelectorIndicativeAfter"
                        name="fifthResidentSelectorIndicativeAfter"
                        onChange={handleFifthResidentSelectorIndicativeAfter}
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
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="fifthResidentSelectorEnergy"
                        name="fifthResidentSelectorEnergy"
                        min="0"
                        value={fifthResidentSelectorEnergy}
                        onChange={handleFifthResidentSelectorEnergy}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="fifthResidentSelectorStartYear"
                        name="fifthResidentSelectorStartYear"
                        onChange={handleFifthResidentSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="fifthResidentSelectorEndYear"
                        name="fifthResidentSelectorEndYear"
                        onChange={handleFifthResidentSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        className="table-cell first-cell"
                        id="sixthResidentSelectorResidentialUnit"
                        name="sixthResidentSelectorResidentialUnit"
                        onChange={handleSixthResidentSelectorResidentialUnit}
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
                        id="sixthResidentSelectorUnits"
                        name="sixthResidentSelectorUnits"
                        min="0"
                        value={sixthResidentSelectorUnits}
                        onChange={handleSixthResidentSelectorUnits}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="sixthResidentSelectorIndicativeBefore"
                        name="sixthResidentSelectorIndicativeBefore"
                        onChange={handleSixthResidentSelectorIndicativeBefore}
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
                        id="sixthResidentSelectorIndicativeAfter"
                        name="sixthResidentSelectorIndicativeAfter"
                        onChange={handleSixthResidentSelectorIndicativeAfter}
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
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="sixthResidentSelectorEnergy"
                        name="sixthResidentSelectorEnergy"
                        min="0"
                        value={sixthResidentSelectorEnergy}
                        onChange={handleSixthResidentSelectorEnergy}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="sixthResidentSelectorStartYear"
                        name="sixthResidentSelectorStartYear"
                        onChange={handleSixthResidentSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="sixthResidentSelectorEndYear"
                        name="sixthResidentSelectorEndYear"
                        onChange={handleSixthResidentSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
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
            <div className="luc_alert_container">
              <Alert severity="info">
                This section quantifies the greenhouse gas impact of commercial
                building retrofits/renovations.
              </Alert>
            </div>
            <form>
              <table className="buildings-policy-tbl buildings-tbl">
                <thead>
                  <tr>
                    <th className="row-title">Select building type</th>
                    <Tooltip title="Insert the total floor area of the commercial buildings that are retrofitted/renovated according to the plan/policy in assessment.">
                      <th>Total floor area</th>
                    </Tooltip>
                    <Tooltip title="Estimate the reduction in energy demand as a percentage. Positive percentage means an improvement of energy efficiency through retrofitting/renovation.">
                      <th>Expected reduction in energy demand (%)</th>
                    </Tooltip>
                    <Tooltip title="Estimate the percentage of delivered energy that will be covered by local production of renewable energies. Renewable energy production for grid electricity is excluded.">
                      <th>% of energy from renewables</th>
                    </Tooltip>
                    <Tooltip title="Insert the first and the last year of these retrofits.">
                      <th colSpan={2}>Retrofits completed between</th>
                    </Tooltip>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select
                        className="table-cell first-cell"
                        id="firstCommercialSelectorBuildingType"
                        name="firstCommercialSelectorBuildingType"
                        onChange={handleFirstCommercialSelectorBuildingType}
                        defaultValue="Select building type"
                        required
                      >
                        {optionsCommercials.map((option) => (
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
                        id="firstCommercialSelectorArea"
                        name="firstCommercialSelectorArea"
                        min="0"
                        value={firstCommercialSelectorArea}
                        onChange={handleFirstCommercialSelectorArea}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="firstCommercialSelectorReduction"
                        name="firstCommercialSelectorReduction"
                        min="0"
                        max="100"
                        value={firstCommercialSelectorReduction}
                        onChange={handleFirstCommercialSelectorReduction}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="firstCommercialSelectorEnergy"
                        name="firstCommercialSelectorEnergy"
                        min="0"
                        value={firstCommercialSelectorEnergy}
                        onChange={handleFirstCommercialSelectorEnergy}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="firstCommercialSelectorStartYear"
                        name="firstCommercialSelectorStartYear"
                        onChange={handleFirstCommercialSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="firstCommercialSelectorEndYear"
                        name="firstCommercialSelectorEndYear"
                        onChange={handleFirstCommercialSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        className="table-cell first-cell"
                        id="secondCommercialSelectorBuildingType"
                        name="secondCommercialSelectorBuildingType"
                        onChange={handleSecondCommercialSelectorBuildingType}
                        defaultValue="Select building type"
                        required
                      >
                        {optionsCommercials.map((option) => (
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
                        id="secondCommercialSelectorArea"
                        name="secondCommercialSelectorArea"
                        min="0"
                        value={secondCommercialSelectorArea}
                        onChange={handleSecondCommercialSelectorArea}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="secondCommercialSelectorReduction"
                        name="secondCommercialSelectorReduction"
                        min="0"
                        max="100"
                        value={secondCommercialSelectorReduction}
                        onChange={handleSecondCommercialSelectorReduction}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="secondCommercialSelectorEnergy"
                        name="secondCommercialSelectorEnergy"
                        min="0"
                        value={secondCommercialSelectorEnergy}
                        onChange={handleSecondCommercialSelectorEnergy}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="secondCommercialSelectorStartYear"
                        name="secondCommercialSelectorStartYear"
                        onChange={handleSecondCommercialSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="secondCommercialSelectorEndYear"
                        name="secondCommercialSelectorEndYear"
                        onChange={handleSecondCommercialSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        className="table-cell first-cell"
                        id="thirdCommercialSelectorBuildingType"
                        name="thirdCommercialSelectorBuildingType"
                        onChange={handleThirdCommercialSelectorBuildingType}
                        defaultValue="Select building type"
                        required
                      >
                        {optionsCommercials.map((option) => (
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
                        id="thirdCommercialSelectorArea"
                        name="thirdCommercialSelectorArea"
                        min="0"
                        value={thirdCommercialSelectorArea}
                        onChange={handleThirdCommercialSelectorArea}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="thirdCommercialSelectorReduction"
                        name="thirdCommercialSelectorReduction"
                        min="0"
                        max="100"
                        value={thirdCommercialSelectorReduction}
                        onChange={handleThirdCommercialSelectorReduction}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="thirdCommercialSelectorEnergy"
                        name="thirdCommercialSelectorEnergy"
                        min="0"
                        value={thirdCommercialSelectorEnergy}
                        onChange={handleThirdCommercialSelectorEnergy}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="thirdCommercialSelectorStartYear"
                        name="thirdCommercialSelectorStartYear"
                        onChange={handleThirdCommercialSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="thirdCommercialSelectorEndYear"
                        name="thirdCommercialSelectorEndYear"
                        onChange={handleThirdCommercialSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        className="table-cell first-cell"
                        id="fourthCommercialSelectorBuildingType"
                        name="fourthCommercialSelectorBuildingType"
                        onChange={handleFourthCommercialSelectorBuildingType}
                        defaultValue="Select building type"
                        required
                      >
                        {optionsCommercials.map((option) => (
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
                        id="fourthCommercialSelectorArea"
                        name="fourthCommercialSelectorArea"
                        min="0"
                        value={fourthCommercialSelectorArea}
                        onChange={handleFourthCommercialSelectorArea}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="fourthCommercialSelectorReduction"
                        name="fourthCommercialSelectorReduction"
                        min="0"
                        max="100"
                        value={fourthCommercialSelectorReduction}
                        onChange={handleFourthCommercialSelectorReduction}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="fourthCommercialSelectorEnergy"
                        name="fourthCommercialSelectorEnergy"
                        min="0"
                        value={fourthCommercialSelectorEnergy}
                        onChange={handleFourthCommercialSelectorEnergy}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="fourthCommercialSelectorStartYear"
                        name="fourthCommercialSelectorStartYear"
                        onChange={handleFourthCommercialSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="fourthCommercialSelectorEndYear"
                        name="fourthCommercialSelectorEndYear"
                        onChange={handleFourthCommercialSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        className="table-cell first-cell"
                        id="fifthCommercialSelectorBuildingType"
                        name="fifthCommercialSelectorBuildingType"
                        onChange={handleFifthCommercialSelectorBuildingType}
                        defaultValue="Select building type"
                        required
                      >
                        {optionsCommercials.map((option) => (
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
                        id="fifthCommercialSelectorArea"
                        name="fifthCommercialSelectorArea"
                        min="0"
                        value={fifthCommercialSelectorArea}
                        onChange={handleFifthCommercialSelectorArea}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="fifthCommercialSelectorReduction"
                        name="fifthCommercialSelectorReduction"
                        min="0"
                        max="100"
                        value={fifthCommercialSelectorReduction}
                        onChange={handleFifthCommercialSelectorReduction}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="fifthCommercialSelectorEnergy"
                        name="fifthCommercialSelectorEnergy"
                        min="0"
                        value={fifthCommercialSelectorEnergy}
                        onChange={handleFifthCommercialSelectorEnergy}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="fifthCommercialSelectorStartYear"
                        name="fifthCommercialSelectorStartYear"
                        onChange={handleFifthCommercialSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="fifthCommercialSelectorEndYear"
                        name="fifthCommercialSelectorEndYear"
                        onChange={handleFifthCommercialSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        className="table-cell first-cell"
                        id="sixthCommercialSelectorBuildingType"
                        name="sixthCommercialSelectorBuildingType"
                        onChange={handleSixthCommercialSelectorBuildingType}
                        defaultValue="Select building type"
                        required
                      >
                        {optionsCommercials.map((option) => (
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
                        id="sixthCommercialSelectorArea"
                        name="sixthCommercialSelectorArea"
                        min="0"
                        value={sixthCommercialSelectorArea}
                        onChange={handleSixthCommercialSelectorArea}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="sixthCommercialSelectorReduction"
                        name="sixthCommercialSelectorReduction"
                        min="0"
                        max="100"
                        value={sixthCommercialSelectorReduction}
                        onChange={handleSixthCommercialSelectorReduction}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="table-cell"
                        type="number"
                        step="1"
                        id="sixthCommercialSelectorEnergy"
                        name="sixthCommercialSelectorEnergy"
                        min="0"
                        value={sixthCommercialSelectorEnergy}
                        onChange={handleSixthCommercialSelectorEnergy}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="sixthCommercialSelectorStartYear"
                        name="sixthCommercialSelectorStartYear"
                        onChange={handleSixthCommercialSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="sixthCommercialSelectorEndYear"
                        name="sixthCommercialSelectorEndYear"
                        onChange={handleSixthCommercialSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
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
              <b>U8.3 Change of building use</b>
            </Divider>
          <div className="newResidentDiv">
            <div className="luc_alert_container">
              <Alert severity="info">
                This section quantifies the greenhouse gas impact caused by the
                changes of building use.
              </Alert>
            </div>
            <form>
              <table className="buildings-policy-tbl buildings-tbl">
                <thead>
                  <tr>
                    {/* <th className="row-title">Select building type</th> */}
                    <th>From</th>
                    <th>To</th>
                    <Tooltip title="Insert the total gross floor area for conversions.">
                      <th>Floor Area</th>
                    </Tooltip>
                    <Tooltip title="Insert the first and the last year when these changes in building use are carried out.">
                      <th colSpan={2}>Conversions implemented between</th>
                    </Tooltip>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select
                        className="table-cell"
                        id="firstSelectorBuildingTypeFrom"
                        name="firstSelectorBuildingTypeFrom"
                        onChange={handleFirstSelectorBuildingTypeFrom}
                        defaultValue="Select building type"
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
                      <select
                        className="table-cell"
                        id="firstSelectorBuildingTypeTo"
                        name="firstSelectorBuildingTypeTo"
                        onChange={handleFirstSelectorBuildingTypeTo}
                        defaultValue="Select building type"
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
                        id="firstSelectorArea"
                        name="firstSelectorArea"
                        min="0"
                        value={firstSelectorArea}
                        onChange={handleFirstSelectorArea}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="firstSelectorStartYear"
                        name="firstSelectorStartYear"
                        onChange={handleFirstSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="firstSelectorEndYear"
                        name="firstSelectorEndYear"
                        onChange={handleFirstSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        className="table-cell"
                        id="secondSelectorBuildingTypeFrom"
                        name="secondSelectorBuildingTypeFrom"
                        onChange={handleSecondSelectorBuildingTypeFrom}
                        defaultValue="Select building type"
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
                      <select
                        className="table-cell"
                        id="secondSelectorBuildingTypeTo"
                        name="secondSelectorBuildingTypeTo"
                        onChange={handleSecondSelectorBuildingTypeTo}
                        defaultValue="Select building type"
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
                        id="secondSelectorArea"
                        name="secondSelectorArea"
                        min="0"
                        value={secondSelectorArea}
                        onChange={handleSecondSelectorArea}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="secondSelectorStartYear"
                        name="secondSelectorStartYear"
                        onChange={handleSecondSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="secondSelectorEndYear"
                        name="secondSelectorEndYear"
                        onChange={handleSecondSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        className="table-cell"
                        id="thirdSelectorBuildingTypeFrom"
                        name="thirdSelectorBuildingTypeFrom"
                        onChange={handleThirdSelectorBuildingTypeFrom}
                        defaultValue="Select building type"
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
                      <select
                        className="table-cell"
                        id="thirdSelectorBuildingTypeTo"
                        name="thirdSelectorBuildingTypeTo"
                        onChange={handleThirdSelectorBuildingTypeTo}
                        defaultValue="Select building type"
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
                        id="thirdSelectorArea"
                        name="thirdSelectorArea"
                        min="0"
                        value={thirdSelectorArea}
                        onChange={handleThirdSelectorArea}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="thirdSelectorStartYear"
                        name="thirdSelectorStartYear"
                        onChange={handleThirdSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="thirdSelectorEndYear"
                        name="thirdSelectorEndYear"
                        onChange={handleThirdSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        className="table-cell"
                        id="fourthSelectorBuildingTypeFrom"
                        name="fourthSelectorBuildingTypeFrom"
                        onChange={handleFourthSelectorBuildingTypeFrom}
                        defaultValue="Select building type"
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
                      <select
                        className="table-cell"
                        id="fourthSelectorBuildingTypeTo"
                        name="fourthSelectorBuildingTypeTo"
                        onChange={handleFourthSelectorBuildingTypeTo}
                        defaultValue="Select building type"
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
                        id="fourthSelectorArea"
                        name="fourthSelectorArea"
                        min="0"
                        value={fourthSelectorArea}
                        onChange={handleFourthSelectorArea}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="fourthSelectorStartYear"
                        name="fourthSelectorStartYear"
                        onChange={handleFourthSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="fourthSelectorEndYear"
                        name="fourthSelectorEndYear"
                        onChange={handleFourthSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        className="table-cell"
                        id="fifthSelectorBuildingTypeFrom"
                        name="fifthSelectorBuildingTypeFrom"
                        onChange={handleFifthSelectorBuildingTypeFrom}
                        defaultValue="Select building type"
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
                      <select
                        className="table-cell"
                        id="fifthSelectorBuildingTypeTo"
                        name="fifthSelectorBuildingTypeTo"
                        onChange={handleFifthSelectorBuildingTypeTo}
                        defaultValue="Select building type"
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
                        id="fifthSelectorArea"
                        name="fifthSelectorArea"
                        min="0"
                        value={fifthSelectorArea}
                        onChange={handleFifthSelectorArea}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="fifthSelectorStartYear"
                        name="fifthSelectorStartYear"
                        onChange={handleFifthSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="fifthSelectorEndYear"
                        name="fifthSelectorEndYear"
                        onChange={handleFifthSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        className="table-cell"
                        id="sixthSelectorBuildingTypeFrom"
                        name="sixthSelectorBuildingTypeFrom"
                        onChange={handleSixthSelectorBuildingTypeFrom}
                        defaultValue="Select building type"
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
                      <select
                        className="table-cell"
                        id="sixthSelectorBuildingTypeTo"
                        name="sixthSelectorBuildingTypeTo"
                        onChange={handleSixthSelectorBuildingTypeTo}
                        defaultValue="Select building type"
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
                        id="sixthSelectorArea"
                        name="sixthSelectorArea"
                        min="0"
                        value={sixthSelectorArea}
                        onChange={handleSixthSelectorArea}
                        required
                      />
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="sixthSelectorStartYear"
                        name="sixthSelectorStartYear"
                        onChange={handleSixthSelectorStartYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="table-cell"
                        id="sixthSelectorEndYear"
                        name="sixthSelectorEndYear"
                        onChange={handleSixthSelectorEndYear}
                        defaultValue="Select indicator"
                        required
                      >
                        {optionsYear.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </section>
            
        <div className="buildings-buttons">
          <div className="luc_alert_container">
            <Button
              size="small"
              value="backProjections"
              onClick={() => navigate("../buildingsNewUnits", { replace: true })}
              label="&laquo; Previous"
              secondary
            />
          </div>
          <div className="nextU2Button">
                <div className="luc_alert_container">
                  <Button
                    size="small"
                    value="charts"
                    onClick={setBuildinbgsPolicyQuantification}
                    label="Submit"
                    primary
                  />
                </div>
              <Button
                id="btn-next"
                size="small"
                type="submit"
                value="Submit"
                onClick={moveToPoliciesResults}
                label="Next &raquo;"
                primary="true"
                style={nextBtnStyles}
              />
              <CircularProgress label="loading" style={loadingStyles} />
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <BuildingsPoliciesCharts
        year={year}
        newConstructionResponse={newConstructionResponse}
        policyQuantificationResponse={policyQuantificationResponse}
      />
    );
  }
};

BuildingsPolicies.propTypes = {
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  newConstructionResponse: PropTypes.object.isRequired,
  population: PropTypes.number.isRequired,
};

// BuildingsPolicies.defaultProps = {
//   year: 2030,
//   country: "Estonia",
// };
