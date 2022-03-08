import React, { useState, useEffect } from "react";
import { LUCBarChart } from "./LUCBarChart";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Button } from "./Button";
import "../css/landusechange.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

/**
 * LUC inputs table from to
 * @return {}
 */

export const LandUseChangeTableForm = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  country,
  year,
}) => {
  // to Forest vars
  // #region
  const [cropToForest, setCropToForest] = useState(1);
  const [cropToForestMineral, setCropToForestMineral] = useState(1);
  const [cropToForestOrganic, setCropToForestOrganic] = useState(1);
  const [cropToForestYear, setCropToForestYear] = useState(2022);

  const [grassToForest, setGrassToForest] = useState(1);
  const [grassToForestMineral, setGrassToForestMineral] = useState(1);
  const [grassToForestOrganic, setGrassToForestOrganic] = useState(1);
  const [grassToForestYear, setGrassToForestYear] = useState(2022);

  const [wetToForest, setWetToForest] = useState(1);
  const [wetToForestMineral, setWetToForestMineral] = useState(1);
  const [wetToForestOrganic, setWetToForestOrganic] = useState(1);
  const [wetToForestYear, setWetToForestYear] = useState(2022);

  const [settlementsToForest, setSettlementsToForest] = useState(1);
  const [settlementsToForestMineral, setSettlementsToForestMineral] =
    useState(1);
  const [settlementsToForestOrganic, setSettlementsToForestOrganic] =
    useState(1);
  const [settlementsToForestYear, setSettlementsToForestYear] = useState(2022);

  const [otherToForest, setOtherToForest] = useState(1);
  const [otherToForestMineral, setOtherToForestMineral] = useState(1);
  const [otherToForestOrganic, setOtherToForestOrganic] = useState(1);
  const [otherToForestYear, setOtherToForestYear] = useState(2022);
  // #endregion

  // to Crop vars
  // #region
  const [forestToCrop, setForestToCrop] = useState(1);
  const [forestToCropMineral, setForestToCropMineral] = useState(1);
  const [forestToCropOrganic, setForestToCropOrganic] = useState(1);
  const [forestToCropYear, setForestToCropYear] = useState(2022);

  const [grassToCrop, setGrassToCrop] = useState(1);
  const [grassToCropMineral, setGrassToCropMineral] = useState(1);
  const [grassToCropOrganic, setGrassToCropOrganic] = useState(1);
  const [grassToCropYear, setGrassToCropYear] = useState(2022);

  const [wetToCrop, setWetToCrop] = useState(1);
  const [wetToCropMineral, setWetToCropMineral] = useState(1);
  const [wetToCropOrganic, setWetToCropOrganic] = useState(1);
  const [wetToCropYear, setWetToCropYear] = useState(2022);

  const [settlementsToCrop, setSettlementsToCrop] = useState(1);
  const [settlementsToCropMineral, setSettlementsToCropMineral] = useState(1);
  const [settlementsToCropOrganic, setSettlementsToCropOrganic] = useState(1);
  const [settlementsToCropYear, setSettlementsToCropYear] = useState(2022);

  const [otherToCrop, setOtherToCrop] = useState(1);
  const [otherToCropMineral, setOtherToCropMineral] = useState(1);
  const [otherToCropOrganic, setOtherToCropOrganic] = useState(1);
  const [otherToCropYear, setOtherToCropYear] = useState(2022);
  // #endregion

  // to Grass vars
  // #region
  const [forestToGrass, setForestToGrass] = useState(1);
  const [forestToGrassMineral, setForestToGrassMineral] = useState(1);
  const [forestToGrassOrganic, setForestToGrassOrganic] = useState(1);
  const [forestToGrassYear, setForestToGrassYear] = useState(2022);

  const [cropToGrass, setCropToGrass] = useState(1);
  const [cropToGrassMineral, setCropToGrassMineral] = useState(1);
  const [cropToGrassOrganic, setCropToGrassOrganic] = useState(1);
  const [cropToGrassYear, setCropToGrassYear] = useState(2022);

  const [wetToGrass, setWetToGrass] = useState(1);
  const [wetToGrassMineral, setWetToGrassMineral] = useState(1);
  const [wetToGrassOrganic, setWetToGrassOrganic] = useState(1);
  const [wetToGrassYear, setWetToGrassYear] = useState(2022);

  const [settlementsToGrass, setSettlementsToGrass] = useState(1);
  const [settlementsToGrassMineral, setSettlementsToGrassMineral] = useState(1);
  const [settlementsToGrassOrganic, setSettlementsToGrassOrganic] = useState(1);
  const [settlementsToGrassYear, setSettlementsToGrassYear] = useState(2022);

  const [otherToGrass, setOtherToGrass] = useState(1);
  const [otherToGrassMineral, setOtherToGrassMineral] = useState(1);
  const [otherToGrassOrganic, setOtherToGrassOrganic] = useState(1);
  const [otherToGrassYear, setOtherToGrassYear] = useState(2022);
  // #endregion

  // to other wetlands/flooded land vars
  // #region
  const [landConvertedToPeat, setLandConvertedToPeat] = useState(1);
  const [landConvertedToPeatMineral, setLandConvertedToPeatMineral] =
    useState(1);
  const [landConvertedToPeatOrganic, setLandConvertedToPeatOrganic] =
    useState(1);
  const [landConvertedToPeatYear, setLandConvertedToPeatYear] = useState(2022);

  const [peatLandRestore, setPeatLandRestore] = useState(1);
  const [peatLandRestoreMineral, setPeatLandRestoreMineral] = useState(1);
  const [peatLandRestoreOrganic, setPeatLandRestoreOrganic] = useState(1);
  const [peatLandRestoreYear, setPeatLandRestoreYear] = useState(2022);

  const [forestToWetland, setForestToWetland] = useState(1);
  const [forestToWetlandMineral, setForestToWetlandMineral] = useState(1);
  const [forestToWetlandOrganic, setForestToWetlandOrganic] = useState(1);
  const [forestToWetlandYear, setForestToWetlandYear] = useState(2022);

  const [cropToWet, setCropToWet] = useState(1);
  const [cropToWetMineral, setCropToWetMineral] = useState(1);
  const [cropToWetOrganic, setCropToWetOrganic] = useState(1);
  const [cropToWetYear, setCropToWetYear] = useState(2022);

  const [grassToWet, setGrassToWet] = useState(1);
  const [grassToWetMineral, setGrassToWetMineral] = useState(1);
  const [grassToWetOrganic, setGrassToWetOrganic] = useState(1);
  const [grassToWetYear, setGrassToWetYear] = useState(2022);
  // #endregion

  // to Settlements vars
  // #region
  const [forestToSettlements, setForestToSettlements] = useState(1);
  const [forestToSettlementsMineral, setForestToSettlementsMineral] =
    useState(1);
  const [forestToSettlementsOrganic, setForestToSettlementsOrganic] =
    useState(1);
  const [forestToSettlementsYear, setForestToSettlementsYear] = useState(2022);

  const [cropToSettlements, setCropToSettlements] = useState(1);
  const [cropToSettlementsMineral, setCropToSettlementsMineral] = useState(1);
  const [cropToSettlementsOrganic, setCropToSettlementsOrganic] = useState(1);
  const [cropToSettlementsYear, setCropToSettlementsYear] = useState(2022);

  const [grassToSettlements, setGrassToSettlements] = useState(1);
  const [grassToSettlementsMineral, setGrassToSettlementsMineral] = useState(1);
  const [grassToSettlementsOrganic, setGrassToSettlementsOrganic] = useState(1);
  const [grassToSettlementsYear, setGrassToSettlementsYear] = useState(2022);

  const [wetToSettlements, setWetToSettlements] = useState(1);
  const [wetToSettlementsMineral, setWetToSettlementsMineral] = useState(1);
  const [wetToSettlementsOrganic, setWetToSettlementsOrganic] = useState(1);
  const [wetToSettlementsYear, setWetToSettlementsYear] = useState(2022);

  const [otherToSettlements, setOtherToSettlements] = useState(1);
  const [otherToSettlementsMineral, setOtherToSettlementsMineral] = useState(1);
  const [otherToSettlementsOrganic, setOtherToSettlementsOrganic] = useState(1);
  const [otherToSettlementsYear, setOtherToSettlementsYear] = useState(2022);
  // #endregion

  // to other land vars
  // #region
  const [forestToOther, setForestToOther] = useState(1);
  const [forestToOtherMineral, setForestToOtherMineral] = useState(1);
  const [forestToOtherOrganic, setForestToOtherOrganic] = useState(1);
  const [forestToOtherYear, setForestToOtherYear] = useState(2022);

  const [cropToOther, setCropToOther] = useState(1);
  const [cropToOtherMineral, setCropToOtherMineral] = useState(1);
  const [cropToOtherOrganic, setCropToOtherOrganic] = useState(1);
  const [cropToOtherYear, setCropToOtherYear] = useState(2022);

  const [grassToOther, setGrassToOther] = useState(1);
  const [grassToOtherMineral, setGrassToOtherMineral] = useState(1);
  const [grassToOtherOrganic, setGrassToOtherOrganic] = useState(1);
  const [grassToOtherYear, setGrassToOtherYear] = useState(2022);

  const [wetToOther, setWetToOther] = useState(1);
  const [wetToOtherMineral, setWetToOtherMineral] = useState(1);
  const [wetToOtherOrganic, setWetToOtherOrganic] = useState(1);
  const [wetToOtherYear, setWetToOtherYear] = useState(2022);

  const [settlementsToOther, setSettlementsToOther] = useState(1);
  const [settlementsToOtherMineral, setSettlementsToOtherMineral] = useState(1);
  const [settlementsToOtherOrganic, setSettlementsToOtherOrganic] = useState(1);
  const [settlementsToOtherYear, setSettlementsToOtherYear] = useState(2022);
  // #endregion

  const [totalArea_, setTotalArea] = useState(
    cropToForest +
      grassToForest +
      wetToForest +
      settlementsToForest +
      otherToForest +
      forestToCrop +
      grassToCrop +
      wetToCrop +
      settlementsToCrop +
      otherToCrop +
      forestToGrass +
      cropToGrass +
      wetToGrass +
      settlementsToGrass +
      otherToGrass +
      landConvertedToPeat +
      peatLandRestore +
      forestToWetland +
      cropToWet +
      grassToWet +
      forestToOther +
      wetToOther +
      grassToOther +
      cropToOther +
      settlementsToOther
  );
  const [totalMineral, setTotalMineral] = useState(
    cropToForestMineral +
      grassToForestMineral +
      wetToForestMineral +
      settlementsToForestMineral +
      otherToForestMineral +
      forestToCropMineral +
      grassToCropMineral +
      wetToCropMineral +
      settlementsToCropMineral +
      otherToCropMineral +
      forestToGrassMineral +
      cropToGrassMineral +
      wetToGrassMineral +
      settlementsToGrassMineral +
      otherToGrassMineral +
      landConvertedToPeatMineral +
      peatLandRestoreMineral +
      forestToWetlandMineral +
      cropToWetMineral +
      grassToWetMineral +
      forestToOtherMineral +
      wetToOtherMineral +
      grassToOtherMineral +
      cropToOtherMineral +
      settlementsToOtherMineral
  );
  const [totalOrganic, setTotalOrganic] = useState(
    cropToForestOrganic +
      grassToForestOrganic +
      wetToForestOrganic +
      settlementsToForestOrganic +
      otherToForestOrganic +
      forestToCropOrganic +
      grassToCropOrganic +
      wetToCropOrganic +
      settlementsToCropOrganic +
      otherToCropOrganic +
      forestToGrassOrganic +
      cropToGrassOrganic +
      wetToGrassOrganic +
      settlementsToGrassOrganic +
      otherToGrassOrganic +
      landConvertedToPeatOrganic +
      peatLandRestoreOrganic +
      forestToWetlandOrganic +
      cropToWetOrganic +
      grassToWetOrganic +
      forestToOtherOrganic +
      wetToOtherOrganic +
      grassToOtherOrganic +
      cropToOtherOrganic +
      settlementsToOtherOrganic
  );
  const [lucBarChart, setLUCBarChart] = useState(false);
  const [landUseChangeResponse, setLandUseChangeResponse] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const options = [];
  for (let i = 2022; i < 2051; i++) options.push(i);

  const goToLandUseChangeBaseline = () => {
    // ?
    setLUCBarChart(true);
  };

  const goBack = () => {
    // ?
    navigate("/", { replace: true });
  };

  const setTotal = () => {
    setTotalArea(
      cropToForest +
        grassToForest +
        wetToForest +
        settlementsToForest +
        otherToForest +
        forestToCrop +
        grassToCrop +
        wetToCrop +
        settlementsToCrop +
        otherToCrop +
        forestToGrass +
        cropToGrass +
        wetToGrass +
        settlementsToGrass +
        otherToGrass +
        landConvertedToPeat +
        peatLandRestore +
        forestToWetland +
        cropToWet +
        grassToWet +
        forestToOther +
        wetToOther +
        grassToOther +
        cropToOther +
        settlementsToOther +
        forestToSettlements +
        cropToSettlements +
        grassToSettlements +
        wetToSettlements +
        otherToSettlements
    );
    setTotalMineral(
      cropToForestMineral +
        grassToForestMineral +
        wetToForestMineral +
        settlementsToForestMineral +
        otherToForestMineral +
        forestToCropMineral +
        grassToCropMineral +
        wetToCropMineral +
        settlementsToCropMineral +
        otherToCropMineral +
        forestToGrassMineral +
        cropToGrassMineral +
        wetToGrassMineral +
        settlementsToGrassMineral +
        otherToGrassMineral +
        landConvertedToPeatMineral +
        peatLandRestoreMineral +
        forestToWetlandMineral +
        cropToWetMineral +
        grassToWetMineral +
        forestToOtherMineral +
        wetToOtherMineral +
        grassToOtherMineral +
        cropToOtherMineral +
        settlementsToOtherMineral +
        forestToSettlementsMineral +
        cropToSettlementsMineral +
        grassToSettlementsMineral +
        wetToSettlementsMineral +
        otherToSettlementsMineral
    );
    setTotalOrganic(
      cropToForestOrganic +
        grassToForestOrganic +
        wetToForestOrganic +
        settlementsToForestOrganic +
        otherToForestOrganic +
        forestToCropOrganic +
        grassToCropOrganic +
        wetToCropOrganic +
        settlementsToCropOrganic +
        otherToCropOrganic +
        forestToGrassOrganic +
        cropToGrassOrganic +
        wetToGrassOrganic +
        settlementsToGrassOrganic +
        otherToGrassOrganic +
        landConvertedToPeatOrganic +
        peatLandRestoreOrganic +
        forestToWetlandOrganic +
        cropToWetOrganic +
        grassToWetOrganic +
        forestToOtherOrganic +
        wetToOtherOrganic +
        grassToOtherOrganic +
        cropToOtherOrganic +
        settlementsToOtherOrganic +
        forestToSettlementsOrganic +
        cropToSettlementsOrganic +
        grassToSettlementsOrganic +
        wetToSettlementsOrganic +
        otherToSettlementsOrganic
    );
  };
  // toForest handlers
  // #region
  // crop
  const handleCropToForest = (e) => {
    setCropToForest(parseInt(e.target.value));
  };

  const handleCropToForestMineral = (e) => {
    setCropToForestMineral(parseInt(e.target.value));
  };

  const handleCropToForestOrganic = (e) => {
    setCropToForestOrganic(parseInt(e.target.value));
  };

  const handleCropToForestYear = (e) => {
    e.preventDefault();
    setCropToForestYear(Number(e.target.value));
  };
  // grass
  const handleGrassToForest = (e) => {
    setGrassToForest(parseInt(e.target.value));
  };

  const handleGrassToForestMineral = (e) => {
    setGrassToForestMineral(parseInt(e.target.value));
  };

  const handleGrassToForestOrganic = (e) => {
    setGrassToForestOrganic(parseInt(e.target.value));
  };

  const handleGrassToForestYear = (e) => {
    e.preventDefault();
    setGrassToForestYear(Number(e.target.value));
  };
  // wet
  const handleWetToForest = (e) => {
    setWetToForest(parseInt(e.target.value));
  };

  const handleWetToForestMineral = (e) => {
    setWetToForestMineral(parseInt(e.target.value));
  };

  const handleWetToForestOrganic = (e) => {
    setWetToForestOrganic(parseInt(e.target.value));
  };

  const handleWetToForestYear = (e) => {
    e.preventDefault();
    setWetToForestYear(Number(e.target.value));
  };
  // settlements
  const handleSettlementsToForest = (e) => {
    setSettlementsToForest(parseInt(e.target.value));
  };

  const handleSettlementsToForestMineral = (e) => {
    setSettlementsToForestMineral(parseInt(e.target.value));
  };
  const handleSettlementsToForestOrganic = (e) => {
    setSettlementsToForestOrganic(parseInt(e.target.value));
  };

  const handleSettlementsToForestYear = (e) => {
    e.preventDefault();
    setSettlementsToForestYear(Number(e.target.value));
  };
  // other
  const handleOtherToForest = (e) => {
    setOtherToForest(parseInt(e.target.value));
  };

  const handleOtherToForestMineral = (e) => {
    setOtherToForestMineral(parseInt(e.target.value));
  };

  const handleOtherToForestOrganic = (e) => {
    setOtherToForestOrganic(parseInt(e.target.value));
  };

  const handleOtherToForestYear = (e) => {
    e.preventDefault();
    setOtherToForestYear(Number(e.target.value));
  };
  // #endregion

  // to Crop handlers
  // #region
  // forest
  const handleForestToCrop = (e) => {
    setForestToCrop(parseInt(e.target.value));
  };

  const handleForestToCropMineral = (e) => {
    setForestToCropMineral(parseInt(e.target.value));
  };

  const handleForestToCropOrganic = (e) => {
    setForestToCropOrganic(parseInt(e.target.value));
  };

  const handleForestToCropYear = (e) => {
    e.preventDefault();
    setForestToCropYear(Number(e.target.value));
  };
  // grass
  const handleGrassToCrop = (e) => {
    setGrassToCrop(parseInt(e.target.value));
  };

  const handleGrassToCropMineral = (e) => {
    setGrassToCropMineral(parseInt(e.target.value));
  };

  const handleGrassToCropOrganic = (e) => {
    setGrassToCropOrganic(parseInt(e.target.value));
  };

  const handleGrassToCropYear = (e) => {
    e.preventDefault();
    setGrassToCropYear(Number(e.target.value));
  };
  // wetland
  const handleWetToCrop = (e) => {
    setWetToCrop(parseInt(e.target.value));
  };

  const handleWetToCropMineral = (e) => {
    setWetToCropMineral(parseInt(e.target.value));
  };

  const handleWetToCropOrganic = (e) => {
    setWetToCropOrganic(parseInt(e.target.value));
  };
  const handleWetToCropYear = (e) => {
    e.preventDefault();
    setWetToCropYear(Number(e.target.value));
  };
  // settlements
  const handleSettlementsToCrop = (e) => {
    setSettlementsToCrop(parseInt(e.target.value));
  };

  const handleSettlementsToCropMineral = (e) => {
    setSettlementsToCropMineral(parseInt(e.target.value));
  };

  const handleSettlementsToCropOrganic = (e) => {
    setSettlementsToCropOrganic(parseInt(e.target.value));
  };
  const handleSettlementsToCropYear = (e) => {
    e.preventDefault();
    setSettlementsToCropYear(Number(e.target.value));
  };
  // other land
  const handleOtherToCrop = (e) => {
    setOtherToCrop(parseInt(e.target.value));
  };

  const handleOtherToCropMineral = (e) => {
    setOtherToCropMineral(parseInt(e.target.value));
  };

  const handleOtherToCropOrganic = (e) => {
    setOtherToCropOrganic(parseInt(e.target.value));
  };
  const handleOtherToCropYear = (e) => {
    e.preventDefault();
    setOtherToCropYear(Number(e.target.value));
  };
  // #endregion

  // to Grass handlers
  // #region
  // forest
  const handleForestToGrass = (e) => {
    setForestToGrass(parseInt(e.target.value));
  };

  const handleForestToGrassMineral = (e) => {
    setForestToGrassMineral(parseInt(e.target.value));
  };

  const handleForestToGrassOrganic = (e) => {
    setForestToGrassOrganic(parseInt(e.target.value));
  };

  const handleForestToGrassYear = (e) => {
    e.preventDefault();
    setForestToGrassYear(Number(e.target.value));
  };
  // crop
  const handleCropToGrass = (e) => {
    setCropToGrass(parseInt(e.target.value));
  };

  const handleCropToGrassMineral = (e) => {
    setCropToGrassMineral(parseInt(e.target.value));
  };

  const handleCropToGrassOrganic = (e) => {
    setCropToGrassOrganic(parseInt(e.target.value));
  };

  const handleCropToGrassYear = (e) => {
    e.preventDefault();
    setCropToGrassYear(Number(e.target.value));
  };
  // wetlands
  const handleWetToGrass = (e) => {
    setWetToGrass(parseInt(e.target.value));
  };

  const handleWetToGrassMineral = (e) => {
    setWetToGrassMineral(parseInt(e.target.value));
  };

  const handleWetToGrassOrganic = (e) => {
    setWetToGrassOrganic(parseInt(e.target.value));
  };

  const handleWetToGrassYear = (e) => {
    e.preventDefault();
    setWetToGrassYear(Number(e.target.value));
  };
  // settlements
  const handleSettlementsToGrass = (e) => {
    setSettlementsToGrass(parseInt(e.target.value));
  };

  const handleSettlementsToGrassMineral = (e) => {
    setSettlementsToGrassMineral(parseInt(e.target.value));
  };

  const handleSettlementsToGrassOrganic = (e) => {
    setSettlementsToGrassOrganic(parseInt(e.target.value));
  };

  const handleSettlementsToGrassYear = (e) => {
    e.preventDefault();
    setSettlementsToGrassYear(Number(e.target.value));
  };
  // other land
  const handleOtherToGrass = (e) => {
    setOtherToGrass(parseInt(e.target.value));
  };

  const handleOtherToGrassMineral = (e) => {
    setOtherToGrassMineral(parseInt(e.target.value));
  };

  const handleOtherToGrassOrganic = (e) => {
    setOtherToGrassOrganic(parseInt(e.target.value));
  };

  const handleOtherToGrassYear = (e) => {
    e.preventDefault();
    setOtherToGrassYear(Number(e.target.value));
  };
  // #endregion

  // to other wetlands/flooded land handlers
  // #region
  // to peat extraction
  const handleLandConvertedToPeat = (e) => {
    setLandConvertedToPeat(parseInt(e.target.value));
  };

  const handleLandConvertedToPeatMineral = (e) => {
    setLandConvertedToPeatMineral(parseInt(e.target.value));
  };

  const handleLandConvertedToPeatOrganic = (e) => {
    setLandConvertedToPeatOrganic(parseInt(e.target.value));
  };

  const handleLandConvertedToPeatYear = (e) => {
    e.preventDefault();
    setLandConvertedToPeatYear(Number(e.target.value));
  };

  // to peatland restore
  const handlePeatLandRestore = (e) => {
    setPeatLandRestore(parseInt(e.target.value));
  };

  const handlePeatLandRestoreMineral = (e) => {
    setPeatLandRestoreMineral(parseInt(e.target.value));
  };

  const handlePeatLandRestoreOrganic = (e) => {
    setPeatLandRestoreOrganic(parseInt(e.target.value));
  };

  const handlePeatLandRestoreYear = (e) => {
    e.preventDefault();
    setPeatLandRestoreYear(Number(e.target.value));
  };

  // forest to
  const handleForestToWetland = (e) => {
    setForestToWetland(parseInt(e.target.value));
  };

  const handleForestToWetlandMineral = (e) => {
    setForestToWetlandMineral(parseInt(e.target.value));
  };

  const handleForestToWetlandOrganic = (e) => {
    setForestToWetlandOrganic(parseInt(e.target.value));
  };

  const handleForestToWetlandYear = (e) => {
    e.preventDefault();
    setForestToWetlandYear(Number(e.target.value));
  };

  // cropland to
  const handleCropToWet = (e) => {
    setCropToWet(parseInt(e.target.value));
  };

  const handleCropToWetMineral = (e) => {
    setCropToWetMineral(parseInt(e.target.value));
  };

  const handleCropToWetOrganic = (e) => {
    setCropToWetOrganic(parseInt(e.target.value));
  };

  const handleCropToWetYear = (e) => {
    e.preventDefault();
    setCropToWetYear(Number(e.target.value));
  };

  // grassland to
  const handleGrassToWet = (e) => {
    setGrassToWet(parseInt(e.target.value));
  };

  const handleGrassToWetMineral = (e) => {
    setGrassToWetMineral(parseInt(e.target.value));
  };

  const handleGrassToWetOrganic = (e) => {
    setGrassToWetOrganic(parseInt(e.target.value));
  };

  const handleGrassToWetYear = (e) => {
    e.preventDefault();
    setGrassToWetYear(Number(e.target.value));
  };
  // #endregion

  // to Settlements handlers
  // #region
  // forest
  const handleForestToSettlements = (e) => {
    setForestToSettlements(parseInt(e.target.value));
  };

  const handleForestToSettlementsMineral = (e) => {
    setForestToSettlementsMineral(parseInt(e.target.value));
  };

  const handleForestToSettlementsOrganic = (e) => {
    setForestToSettlementsOrganic(parseInt(e.target.value));
  };

  const handleForestToSettlementsYear = (e) => {
    e.preventDefault();
    setForestToSettlementsYear(Number(e.target.value));
  };
  // crop
  const handleCropToSettlements = (e) => {
    setCropToSettlements(parseInt(e.target.value));
  };

  const handleCropToSettlementsMineral = (e) => {
    setCropToSettlementsMineral(parseInt(e.target.value));
  };

  const handleCropToSettlementsOrganic = (e) => {
    setCropToSettlementsOrganic(parseInt(e.target.value));
  };

  const handleCropToSettlementsYear = (e) => {
    e.preventDefault();
    setCropToSettlementsYear(Number(e.target.value));
  };
  // grass
  const handleGrassToSettlements = (e) => {
    setGrassToSettlements(parseInt(e.target.value));
  };

  const handleGrassToSettlementsMineral = (e) => {
    setGrassToSettlementsMineral(parseInt(e.target.value));
  };

  const handleGrassToSettlementsOrganic = (e) => {
    setGrassToSettlementsOrganic(parseInt(e.target.value));
  };

  const handleGrassToSettlementsYear = (e) => {
    e.preventDefault();
    setGrassToSettlementsYear(Number(e.target.value));
  };
  // wet
  const handleWetToSettlements = (e) => {
    setWetToSettlements(parseInt(e.target.value));
  };

  const handleWetToSettlementsMineral = (e) => {
    setWetToSettlementsMineral(parseInt(e.target.value));
  };

  const handleWetToSettlementsOrganic = (e) => {
    setWetToSettlementsOrganic(parseInt(e.target.value));
  };

  const handleWetToSettlementsYear = (e) => {
    e.preventDefault();
    setWetToSettlementsYear(Number(e.target.value));
  };
  // other
  const handleOtherToSettlements = (e) => {
    setOtherToSettlements(parseInt(e.target.value));
  };

  const handleOtherToSettlementsMineral = (e) => {
    setOtherToSettlementsMineral(parseInt(e.target.value));
  };

  const handleOtherToSettlementsOrganic = (e) => {
    setOtherToSettlementsOrganic(parseInt(e.target.value));
  };

  const handleOtherToSettlementsYear = (e) => {
    e.preventDefault();
    setOtherToSettlementsYear(Number(e.target.value));
  };
  // #endregion

  // to other handlers
  // #region
  // forest
  const handleForestToOther = (e) => {
    setForestToOther(parseInt(e.target.value));
  };

  const handleForestToOtherMineral = (e) => {
    setForestToOtherMineral(parseInt(e.target.value));
  };

  const handleForestToOtherOrganic = (e) => {
    setForestToOtherOrganic(parseInt(e.target.value));
  };

  const handleForestToOtherYear = (e) => {
    e.preventDefault();
    setForestToOtherYear(Number(e.target.value));
  };

  // crop
  const handleCropToOther = (e) => {
    setCropToOther(parseInt(e.target.value));
  };

  const handleCropToOtherMineral = (e) => {
    setCropToOtherMineral(parseInt(e.target.value));
  };

  const handleCropToOtherOrganic = (e) => {
    setCropToOtherOrganic(parseInt(e.target.value));
  };

  const handleCropToOtherYear = (e) => {
    e.preventDefault();
    setCropToOtherYear(Number(e.target.value));
  };

  // grass
  const handleGrassToOther = (e) => {
    setGrassToOther(parseInt(e.target.value));
  };

  const handleGrassToOtherMineral = (e) => {
    setGrassToOtherMineral(parseInt(e.target.value));
  };

  const handleGrassToOtherOrganic = (e) => {
    setGrassToOtherOrganic(parseInt(e.target.value));
  };

  const handleGrassToOtherYear = (e) => {
    e.preventDefault();
    setGrassToOtherYear(Number(e.target.value));
  };

  // wet
  const handleWetToOther = (e) => {
    setWetToOther(parseInt(e.target.value));
  };

  const handleWetToOtherMineral = (e) => {
    setWetToOtherMineral(parseInt(e.target.value));
  };

  const handleWetToOtherOrganic = (e) => {
    setWetToOtherOrganic(parseInt(e.target.value));
  };

  const handleWetToOtherYear = (e) => {
    e.preventDefault();
    setWetToOtherYear(Number(e.target.value));
  };
  // settlements
  const handleSettlementsToOther = (e) => {
    setSettlementsToOther(parseInt(e.target.value));
  };

  const handleSettlementsToOtherMineral = (e) => {
    setSettlementsToOtherMineral(parseInt(e.target.value));
  };

  const handleSettlementsToOtherOrganic = (e) => {
    setSettlementsToOtherOrganic(parseInt(e.target.value));
  };

  const handleSettlementsToOtherYear = (e) => {
    e.preventDefault();
    setSettlementsToOtherYear(Number(e.target.value));
  };
  // #endregion

  const totalArea = {
    croplandToForestland: cropToForest,
    grasslandToForestland: grassToForest,
    wetlandToForestland: wetToForest,
    settlementToForestland: settlementsToForest,
    otherlandToForestland: otherToForest,
    forestlandToCropland: forestToCrop,
    grasslandToCropland: grassToCrop,
    wetlandToCropland: wetToCrop,
    settlementToCropland: settlementsToCrop,
    otherlandToCropland: otherToCrop,
    forestlandToGrassland: forestToGrass,
    croplandToGrassland: cropToGrass,
    wetlandToGrassland: wetToGrass,
    settlementToGrassland: settlementsToGrass,
    otherlandToGrassland: otherToGrass,
    forestlandToWetland: forestToWetland,
    croplandToWetland: cropToWet,
    grasslandToWetland: grassToWet,
    LandToPeatExtraction: landConvertedToPeat,
    PeatlandRestoration: peatLandRestore,
    forestlandToSettlement: forestToSettlements,
    croplandToSettlement: forestToSettlements,
    grasslandToSettlement: forestToSettlements,
    wetlandToSettlement: forestToSettlements,
    otherlandToSettlement: forestToSettlements,
    forestlandToOtherland: forestToOther,
    croplandToOtherland: cropToOther,
    grasslandToOtherland: grassToOther,
    wetlandToOtherland: wetToOther,
    settlementToOtherland: settlementsToOther,
  };
  const mineral = {
    croplandToForestland: cropToForestMineral,
    grasslandToForestland: grassToForestMineral,
    wetlandToForestland: wetToForestMineral,
    settlementToForestland: settlementsToForestMineral,
    otherlandToForestland: otherToForestMineral,
    forestlandToCropland: forestToCropMineral,
    grasslandToCropland: grassToCropMineral,
    wetlandToCropland: wetToCropMineral,
    settlementToCropland: settlementsToCropMineral,
    otherlandToCropland: otherToCropMineral,
    forestlandToGrassland: forestToGrassMineral,
    croplandToGrassland: cropToGrassMineral,
    wetlandToGrassland: wetToGrassMineral,
    settlementToGrassland: settlementsToGrassMineral,
    otherlandToGrassland: otherToGrassMineral,
    forestlandToWetland: forestToWetlandMineral,
    croplandToWetland: cropToWetMineral,
    grasslandToWetland: grassToWetMineral,
    LandToPeatExtraction: landConvertedToPeatMineral,
    PeatlandRestoration: peatLandRestoreMineral,
    forestlandToSettlement: forestToSettlementsMineral,
    croplandToSettlement: forestToSettlementsMineral,
    grasslandToSettlement: forestToSettlementsMineral,
    wetlandToSettlement: forestToSettlementsMineral,
    otherlandToSettlement: forestToSettlementsMineral,
    forestlandToOtherland: forestToOtherMineral,
    croplandToOtherland: cropToOtherMineral,
    grasslandToOtherland: grassToOtherMineral,
    wetlandToOtherland: wetToOtherMineral,
    settlementToOtherland: settlementsToOtherMineral,
  };
  const organic = {
    croplandToForestland: cropToForestOrganic,
    grasslandToForestland: grassToForestOrganic,
    wetlandToForestland: wetToForestOrganic,
    settlementToForestland: settlementsToForestOrganic,
    otherlandToForestland: otherToForestOrganic,
    forestlandToCropland: forestToCropOrganic,
    grasslandToCropland: grassToCropOrganic,
    wetlandToCropland: wetToCropOrganic,
    settlementToCropland: settlementsToCropOrganic,
    otherlandToCropland: otherToCropOrganic,
    forestlandToGrassland: forestToGrassOrganic,
    croplandToGrassland: cropToGrassOrganic,
    wetlandToGrassland: wetToGrassOrganic,
    settlementToGrassland: settlementsToGrassOrganic,
    otherlandToGrassland: otherToGrassOrganic,
    forestlandToWetland: forestToWetlandOrganic,
    croplandToWetland: cropToWetOrganic,
    grasslandToWetland: grassToWetOrganic,
    LandToPeatExtraction: landConvertedToPeatOrganic,
    PeatlandRestoration: peatLandRestoreOrganic,
    forestlandToSettlement: forestToSettlementsOrganic,
    croplandToSettlement: forestToSettlementsOrganic,
    grasslandToSettlement: forestToSettlementsOrganic,
    wetlandToSettlement: forestToSettlementsOrganic,
    otherlandToSettlement: forestToSettlementsOrganic,
    forestlandToOtherland: forestToOtherOrganic,
    croplandToOtherland: cropToOtherOrganic,
    grasslandToOtherland: grassToOtherOrganic,
    wetlandToOtherland: wetToOtherOrganic,
    settlementToOtherland: settlementsToOtherOrganic,
  };
  const policyStartYear = {
    croplandToForestland: cropToForestYear,
    grasslandToForestland: grassToForestYear,
    wetlandToForestland: wetToForestYear,
    settlementToForestland: settlementsToForestYear,
    otherlandToForestland: otherToForestYear,
    forestlandToCropland: forestToCropYear,
    grasslandToCropland: grassToCropYear,
    wetlandToCropland: wetToCropYear,
    settlementToCropland: settlementsToCropYear,
    otherlandToCropland: otherToCropYear,
    forestlandToGrassland: forestToGrassYear,
    croplandToGrassland: cropToGrassYear,
    wetlandToGrassland: wetToGrassYear,
    settlementToGrassland: settlementsToGrassYear,
    otherlandToGrassland: otherToGrassYear,
    forestlandToWetland: forestToWetlandYear,
    croplandToWetland: cropToWetYear,
    grasslandToWetland: grassToWetYear,
    LandToPeatExtraction: landConvertedToPeatYear,
    PeatlandRestoration: peatLandRestoreYear,
    forestlandToSettlement: forestToSettlementsYear,
    croplandToSettlement: forestToSettlementsYear,
    grasslandToSettlement: forestToSettlementsYear,
    wetlandToSettlement: forestToSettlementsYear,
    otherlandToSettlement: forestToSettlementsYear,
    forestlandToOtherland: forestToOtherYear,
    croplandToOtherland: cropToOtherYear,
    grasslandToOtherland: grassToOtherYear,
    wetlandToOtherland: wetToOtherYear,
    settlementToOtherland: settlementsToOtherYear,
  };

  const setResponse = (response) => {
    setLandUseChangeResponse(response);
  };

  useEffect(async () => {
    const landUseChange = {
      totalArea: totalArea,
      mineral: mineral,
      organic: organic,
      policyStartYear: policyStartYear,
    };
    const rawData = {
        country,
        year,
        landUseChange
    };
    const headers = {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    };
    axios
      .post(
        "https://ggia.ulno.net/api/v1/calculate/land-use-change",
        rawData,
        headers
      )
      .then((response) => setResponse(response.data))
      .catch((error) => {
        setError({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("There was an error!", error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("landUseChange", landUseChangeResponse);
  }, [landUseChangeResponse]);

  if (lucBarChart === false) {
    return (
      <div>
        <article>
          {
            <Header
              user={user}
              onLogin={onLogin}
              onLogout={onLogout}
              onCreateAccount={onCreateAccount}
            />
          }
          <div className="headerSettlement">
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="U5 LAND-USE CHANGE" />
            </Divider>
          </div>
          <div className="luc_main">
            <section>
              <form id="from_landusechange_type">
                <div className="luc_row">
                  <table className="toForest tbl">
                    <thead>
                      <th className="row-title">Land-Use Change</th>
                      <th>Total area, ha</th>
                      <th>Soil area (mineral), ha</th>
                      <th>Soil area (organic), ha</th>
                      <th>Year of implementation</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="row-title">Cropland to Forest Land</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToForest"
                            min="0"
                            value={cropToForest}
                            onChange={handleCropToForest}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToForestMineral"
                            min="0"
                            value={cropToForestMineral}
                            onChange={handleCropToForestMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToForestOrganic"
                            min="0"
                            value={cropToForestOrganic}
                            onChange={handleCropToForestOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="cropToForestYear"
                            name="cropToForestYear"
                            onChange={handleCropToForestYear}
                            value={cropToForestYear}
                            defaultValue="Select year"
                            required
                          >
                            <option value="DefaultOption">Select year</option>

                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Grassland to Forest Land</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="grassToForest"
                            min="0"
                            value={grassToForest}
                            onChange={handleGrassToForest}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="grassToForestMineral"
                            min="0"
                            value={grassToForestMineral}
                            onChange={handleGrassToForestMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="grassToForestOrganic"
                            min="0"
                            value={grassToForestOrganic}
                            onChange={handleGrassToForestOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="grassToForestYear"
                            name="grassToForestYear"
                            onChange={handleGrassToForestYear}
                            value={grassToForestYear}
                            defaultValue="Select year"
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Wetlands to Forest Land</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="wetToForest"
                            min="0"
                            value={wetToForest}
                            onChange={handleWetToForest}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="wetToForestMineral"
                            min="0"
                            value={wetToForestMineral}
                            onChange={handleWetToForestMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="wetToForestOrganic"
                            min="0"
                            value={wetToForestOrganic}
                            onChange={handleWetToForestOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="wetToForestYear"
                            name="wetToForestYear"
                            onChange={handleWetToForestYear}
                            value={wetToForestYear}
                            defaultValue="Select year"
                            onMouseLeave={setTotal}
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">
                          Settlements to Forest Land
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="settlementsToForest"
                            min="0"
                            value={settlementsToForest}
                            onChange={handleSettlementsToForest}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="settlementsToForestMineral"
                            min="0"
                            value={settlementsToForestMineral}
                            onChange={handleSettlementsToForestMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="settlementsToForestOrganic"
                            min="0"
                            value={settlementsToForestOrganic}
                            onChange={handleSettlementsToForestOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="settlementsToForestYear"
                            name="settlementsToForestYear"
                            onChange={handleSettlementsToForestYear}
                            value={settlementsToForestYear}
                            defaultValue="Select year"
                            onMouseLeave={setTotal}
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Other land to Forest Land</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="otherToForest"
                            min="0"
                            value={otherToForest}
                            onChange={handleOtherToForest}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="otherToForestMineral"
                            min="0"
                            value={otherToForestMineral}
                            onChange={handleOtherToForestMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="otherToForestOrganic"
                            min="0"
                            value={otherToForestOrganic}
                            onChange={handleOtherToForestOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="otherToForestYear"
                            name="otherToForestYear"
                            onChange={handleOtherToForestYear}
                            value={otherToForestYear}
                            defaultValue="Select year"
                            onMouseLeave={setTotal}
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="toCrop tbl">
                    <thead>
                      <th className="row-title">Land-Use Change</th>
                      <th>Total area, ha</th>
                      <th>Soil area (mineral), ha</th>
                      <th>Soil area (organic), ha</th>
                      <th>Year of implementation</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="row-title">Forest Land to Cropland</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="forestToCrop"
                            min="0"
                            value={forestToCrop}
                            onChange={handleForestToCrop}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="forestToCropMineral"
                            min="0"
                            value={forestToCropMineral}
                            onChange={handleForestToCropMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="forestToCropOrganic"
                            min="0"
                            value={forestToCropOrganic}
                            onChange={handleForestToCropOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="forestToCropYear"
                            name="forestToCropYear"
                            onChange={handleForestToCropYear}
                            value={forestToCropYear}
                            defaultValue="Select year"
                            onMouseLeave={setTotal}
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Grassland to Cropland</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="grassToCrop"
                            min="0"
                            value={grassToCrop}
                            onChange={handleGrassToCrop}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="grassToCropMineral"
                            min="0"
                            value={grassToCropMineral}
                            onChange={handleGrassToCropMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="grassToCropOrganic"
                            min="0"
                            value={grassToCropOrganic}
                            onChange={handleGrassToCropOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="grassToCropYear"
                            name="grassToCropYear"
                            onChange={handleGrassToCropYear}
                            value={grassToCropYear}
                            defaultValue="Select year"
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Wetlands to Cropland</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="wetToCrop"
                            min="0"
                            value={wetToCrop}
                            onChange={handleWetToCrop}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="wetToCropMineral"
                            min="0"
                            value={wetToCropMineral}
                            onChange={handleWetToCropMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="wetToCropOrganic"
                            min="0"
                            value={wetToCropOrganic}
                            onChange={handleWetToCropOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="wetToCropYear"
                            name="wetToCropYear"
                            onChange={handleWetToCropYear}
                            value={wetToCropYear}
                            defaultValue="Select year"
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Settlements to Cropland</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="settlementsToCrop"
                            min="0"
                            value={settlementsToCrop}
                            onChange={handleSettlementsToCrop}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="settlementsToCropMineral"
                            min="0"
                            value={settlementsToCropMineral}
                            onChange={handleSettlementsToCropMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="settlementsToCropOrganic"
                            min="0"
                            value={settlementsToCropOrganic}
                            onChange={handleSettlementsToCropOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="settlementsToCropYear"
                            name="settlementsToCropYear"
                            onChange={handleSettlementsToCropYear}
                            value={settlementsToCropYear}
                            defaultValue="Select year"
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Other land to Cropland</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="otherToCrop"
                            min="0"
                            value={otherToCrop}
                            onChange={handleOtherToCrop}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="otherToCropMineral"
                            min="0"
                            value={otherToCropMineral}
                            onChange={handleOtherToCropMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="otherToCropOrganic"
                            min="0"
                            value={otherToCropOrganic}
                            onChange={handleOtherToCropOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="otherToCropYear"
                            name="otherToCropYear"
                            onChange={handleOtherToCropYear}
                            value={otherToCropYear}
                            defaultValue="Select year"
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="luc_row">
                  <table className="toGrass tbl">
                    <thead>
                      <th className="row-title">Land-Use Change</th>
                      <th>Total area, ha</th>
                      <th>Soil area (mineral), ha</th>
                      <th>Soil area (organic), ha</th>
                      <th>Year of implementation</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="row-title">Forest Land to GrassLand</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="forestToGrass"
                            min="0"
                            value={forestToGrass}
                            onChange={handleForestToGrass}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="forestToGrassMineral"
                            min="0"
                            value={forestToGrassMineral}
                            onChange={handleForestToGrassMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="forestToGrassOrganic"
                            min="0"
                            value={forestToGrassOrganic}
                            onChange={handleForestToGrassOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="forestToGrassYear"
                            name="forestToGrassYear"
                            onChange={handleForestToGrassYear}
                            value={forestToGrassYear}
                            defaultValue="Select year"
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Cropland to Grassland</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToGrass"
                            min="0"
                            value={cropToGrass}
                            onChange={handleCropToGrass}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToGrassMineral"
                            min="0"
                            value={cropToGrassMineral}
                            onChange={handleCropToGrassMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToGrassOrganic"
                            min="0"
                            value={cropToGrassOrganic}
                            onChange={handleCropToGrassOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="cropToGrassYear"
                            name="cropToGrassYear"
                            onChange={handleCropToGrassYear}
                            value={cropToGrassYear}
                            defaultValue="Select year"
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Wetlands to Grassland</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="wetToGrass"
                            min="0"
                            value={wetToGrass}
                            onChange={handleWetToGrass}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="wetToGrassMineral"
                            min="0"
                            value={wetToGrassMineral}
                            onChange={handleWetToGrassMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="wetToGrassOrganic"
                            min="0"
                            value={wetToGrassOrganic}
                            onChange={handleWetToGrassOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="wetToGrassYear"
                            name="wetToGrassYear"
                            onChange={handleWetToGrassYear}
                            value={wetToGrassYear}
                            defaultValue="Select year"
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Settlements to Grassland</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="settlementsToGrass"
                            min="0"
                            value={settlementsToGrass}
                            onChange={handleSettlementsToGrass}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="settlementsToGrassMineral"
                            min="0"
                            value={settlementsToGrassMineral}
                            onChange={handleSettlementsToGrassMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="settlementsToGrassOrganic"
                            min="0"
                            value={settlementsToGrassOrganic}
                            onChange={handleSettlementsToGrassOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="settlementsToGrassYear"
                            name="settlementsToGrassYear"
                            onChange={handleSettlementsToGrassYear}
                            value={settlementsToGrassYear}
                            defaultValue="Select year"
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Other land to Grassland</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="otherToGrass"
                            min="0"
                            value={otherToGrass}
                            onChange={handleOtherToGrass}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="otherToCropMineral"
                            min="0"
                            value={otherToGrassMineral}
                            onChange={handleOtherToGrassMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="otherToCropOrganic"
                            min="0"
                            value={otherToGrassOrganic}
                            onChange={handleOtherToGrassOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="otherToGrassYear"
                            name="otherToGrassYear"
                            onChange={handleOtherToGrassYear}
                            value={otherToGrassYear}
                            defaultValue="Select year"
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="toWet tbl">
                    <thead>
                      <th className="row-title">Land-Use Change</th>
                      <th>Total area, ha</th>
                      <th>Soil area (mineral), ha</th>
                      <th>Soil area (organic), ha</th>
                      <th>Year of implementation</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="row-title">
                          Land converted to peat extraction (combined)
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="landConvertedToPeat"
                            min="0"
                            value={landConvertedToPeat}
                            onChange={handleLandConvertedToPeat}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="landConvertedToPeatMineral"
                            min="0"
                            value={landConvertedToPeatMineral}
                            onChange={handleLandConvertedToPeatMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="landConvertedToPeatOrganic"
                            min="0"
                            value={landConvertedToPeatOrganic}
                            onChange={handleLandConvertedToPeatOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="landConvertedToPeatYear"
                            name="landConvertedToPeatYear"
                            onChange={handleLandConvertedToPeatYear}
                            value={landConvertedToPeatYear}
                            defaultValue="Select year"
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">
                          Peatland restoration (rewetting)
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="peatLandRestore"
                            min="0"
                            value={peatLandRestore}
                            onChange={handlePeatLandRestore}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="peatLandRestoreMineral"
                            min="0"
                            value={peatLandRestoreMineral}
                            onChange={handlePeatLandRestoreMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="peatLandRestoreOrganic"
                            min="0"
                            value={peatLandRestoreOrganic}
                            onChange={handlePeatLandRestoreOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="peatLandRestoreYear"
                            name="peatLandRestoreYear"
                            onChange={handlePeatLandRestoreYear}
                            value={peatLandRestoreYear}
                            defaultValue="Select year"
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">
                          Forest land to other wetlands/ flooded land
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="forestToWetland"
                            min="0"
                            value={forestToWetland}
                            onChange={handleForestToWetland}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="forestToWetlandMineral"
                            min="0"
                            value={forestToWetlandMineral}
                            onChange={handleForestToWetlandMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="wetToGrassOrganic"
                            min="0"
                            value={forestToWetlandOrganic}
                            onChange={handleForestToWetlandOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="wetToGrassYear"
                            name="forestToWetland"
                            onChange={handleForestToWetlandYear}
                            value={forestToWetlandYear}
                            defaultValue="Select year"
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">
                          Cropland to other wetlands/ flooded land
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToWet"
                            min="0"
                            value={cropToWet}
                            onChange={handleCropToWet}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToWetMineral"
                            min="0"
                            value={cropToWetMineral}
                            onChange={handleCropToWetMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToWetOrganic"
                            min="0"
                            value={cropToWetOrganic}
                            onChange={handleCropToWetOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="cropToWetYear"
                            name="cropToWetYear"
                            onChange={handleCropToWetYear}
                            value={cropToWetYear}
                            defaultValue="Select year"
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">
                          Grassland to other wetlands/ flooded land
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="grassToWet"
                            min="0"
                            value={grassToWet}
                            onChange={handleGrassToWet}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="grassToWetMineral"
                            min="0"
                            value={grassToWetMineral}
                            onChange={handleGrassToWetMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="grassToWetOrganic"
                            min="0"
                            value={grassToWetOrganic}
                            onChange={handleGrassToWetOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="grassToWetYear"
                            name="grassToWetYear"
                            onChange={handleGrassToWetYear}
                            value={grassToWetYear}
                            defaultValue="Select year"
                            onMouseLeave={setTotal}
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="luc_row">
                  <table className="toSettlements tbl">
                    <thead>
                      <th className="row-title">Land-Use Change</th>
                      <th>Total area, ha</th>
                      <th>Soil area (mineral), ha</th>
                      <th>Soil area (organic), ha</th>
                      <th>Year of implementation</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="row-title">
                          Forest land to Settlements
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="forestToSettlements"
                            min="0"
                            value={forestToSettlements}
                            onChange={handleForestToSettlements}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="forestToSettlementsMineral"
                            min="0"
                            value={forestToSettlementsMineral}
                            onChange={handleForestToSettlementsMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="forestToSettlementsOrganic"
                            min="0"
                            value={forestToSettlementsOrganic}
                            onChange={handleForestToSettlementsOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="forestToSettlementsYear"
                            name="forestToSettlementsYear"
                            onChange={handleForestToSettlementsYear}
                            value={forestToSettlementsYear}
                            defaultValue="Select year"
                            onMouseLeave={setTotal}
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Cropland to Settlements</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToSettlements"
                            min="0"
                            value={cropToSettlements}
                            onChange={handleCropToSettlements}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToSettlementsMineral"
                            min="0"
                            value={cropToSettlementsMineral}
                            onChange={handleCropToSettlementsMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToSettlementsOrganic"
                            min="0"
                            value={cropToSettlementsOrganic}
                            onChange={handleCropToSettlementsOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="cropToSettlementsYear"
                            name="cropToSettlementsYear"
                            onChange={handleCropToSettlementsYear}
                            value={cropToSettlementsYear}
                            defaultValue="Select year"
                            onMouseLeave={setTotal}
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Grass to Settlements</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="grassToSettlements"
                            min="0"
                            value={grassToSettlements}
                            onChange={handleGrassToSettlements}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="grassToSettlementsMineral"
                            min="0"
                            value={grassToSettlementsMineral}
                            onChange={handleGrassToSettlementsMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="grassToSettlementsOrganic"
                            min="0"
                            value={grassToSettlementsOrganic}
                            onChange={handleGrassToSettlementsOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="wetToGrassYear"
                            name="forestToWetland"
                            onChange={handleGrassToSettlementsYear}
                            value={grassToSettlementsYear}
                            defaultValue="Select year"
                            onMouseLeave={setTotal}
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Wetlands to Settlements</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="wetToSettlements"
                            min="0"
                            value={wetToSettlements}
                            onChange={handleWetToSettlements}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="wetToSettlementsMineral"
                            min="0"
                            value={wetToSettlementsMineral}
                            onChange={handleWetToSettlementsMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="wetToSettlementsOrganic"
                            min="0"
                            value={wetToSettlementsOrganic}
                            onChange={handleWetToSettlementsOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="wetToSettlementsYear"
                            name="wetToSettlementsYear"
                            onChange={handleWetToSettlementsYear}
                            value={wetToSettlementsYear}
                            defaultValue="Select year"
                            onMouseLeave={setTotal}
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Other to Settlements</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="otherToSettlements"
                            min="0"
                            value={otherToSettlements}
                            onChange={handleOtherToSettlements}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="otherToSettlementsMineral"
                            min="0"
                            value={otherToSettlementsMineral}
                            onChange={handleOtherToSettlementsMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="otherToSettlementsOrganic"
                            min="0"
                            value={otherToSettlementsOrganic}
                            onChange={handleOtherToSettlementsOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="otherToSettlementsYear"
                            name="otherToSettlementsYear"
                            onChange={handleOtherToSettlementsYear}
                            value={otherToSettlementsYear}
                            defaultValue="Select year"
                            onMouseLeave={setTotal}
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="toOther tbl">
                    <thead>
                      <th className="row-title">Land-Use Change</th>
                      <th>Total area, ha</th>
                      <th>Soil area (mineral), ha</th>
                      <th>Soil area (organic), ha</th>
                      <th>Year of implementation</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="row-title">Forest land to other land</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="forestToOther"
                            min="0"
                            value={forestToOther}
                            onChange={handleForestToOther}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="forestToOtherMineral"
                            min="0"
                            value={forestToOtherMineral}
                            onChange={handleForestToOtherMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="forestToOtherOrganic"
                            min="0"
                            value={forestToOtherOrganic}
                            onChange={handleForestToOtherOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="forestToOtherYear"
                            name="forestToOtherYear"
                            onChange={handleForestToOtherYear}
                            value={forestToOtherYear}
                            defaultValue="Select year"
                            onMouseLeave={setTotal}
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">
                          Cropland land to other land
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToOther"
                            min="0"
                            value={cropToOther}
                            onChange={handleCropToOther}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToOtherMineral"
                            min="0"
                            value={cropToOtherMineral}
                            onChange={handleCropToOtherMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToOtherOrganic"
                            min="0"
                            value={cropToOtherOrganic}
                            onChange={handleCropToOtherOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="cropToOtherYear"
                            name="cropToOtherYear"
                            onChange={handleCropToOtherYear}
                            value={cropToOtherYear}
                            defaultValue="Select year"
                            onMouseLeave={setTotal}
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Grassland to other land</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="grassToOther"
                            min="0"
                            value={grassToOther}
                            onChange={handleGrassToOther}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToOtherMineral"
                            min="0"
                            value={grassToOtherMineral}
                            onChange={handleGrassToOtherMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="cropToOtherOrganic"
                            min="0"
                            value={grassToOtherOrganic}
                            onChange={handleGrassToOtherOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="cropToOtherYear"
                            name="cropToOtherYear"
                            onChange={handleGrassToOtherYear}
                            value={grassToOtherYear}
                            defaultValue="Select year"
                            onMouseLeave={setTotal}
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Wetlands to other land</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="wetToOther"
                            min="0"
                            value={wetToOther}
                            onChange={handleWetToOther}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="wetToOtherMineral"
                            min="0"
                            value={wetToOtherMineral}
                            onChange={handleWetToOtherMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="wetToOtherOrganic"
                            min="0"
                            value={wetToOtherOrganic}
                            onChange={handleWetToOtherOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="wetToOtherYear"
                            name="wetToOtherYear"
                            onChange={handleWetToOtherYear}
                            value={wetToOtherYear}
                            defaultValue="Select year"
                            onMouseLeave={setTotal}
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="row-title">Settlements to other land</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="settlementsToOther"
                            min="0"
                            value={settlementsToOther}
                            onChange={handleSettlementsToOther}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="settlementsToOtherMineral"
                            min="0"
                            value={settlementsToOtherMineral}
                            onChange={handleSettlementsToOtherMineral}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            step="1"
                            id="settlementsToOtherOrganic"
                            min="0"
                            value={settlementsToOtherOrganic}
                            onChange={handleSettlementsToOtherOrganic}
                            onMouseLeave={setTotal}
                            required
                          />
                        </td>
                        <td>
                          <select
                            className="table-cell"
                            id="settlementsToOtherYear"
                            name="settlementsToOtherYear"
                            onChange={handleSettlementsToOtherYear}
                            value={settlementsToOtherYear}
                            defaultValue="Select year"
                            onMouseLeave={setTotal}
                            required
                          >
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}{" "}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="luc_row">
                  <table>
                    <thead>
                      <th className="row-title">Land-Use Change</th>
                      <th>Total area, ha</th>
                      <th>Soil area (mineral), ha</th>
                      <th>Soil area (organic), ha</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="row-title">Total area (ha)</td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            id="totalArea"
                            value={totalArea_}
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            id="totalMineral"
                            value={totalMineral}
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell"
                            type="number"
                            id="totalOrganic"
                            value={totalOrganic}
                            disabled
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="backStart">
                  <Button
                    size="small"
                    value="backStartPage"
                    onClick={() => navigate("/startPage", { replace: true })}
                    label="&laquo; Previous"
                    secondary
                  />
                </div>

                <div className="nextU1Button">
                  <Button
                    size="small"
                    type="submit"
                    value="Submit"
                    onClick={goToLandUseChangeBaseline}
                    label="Next &raquo;"
                    primary
                  />
                </div>
              </form>
            </section>
          </div>
        </article>
      </div>
    );
  } else {
    return (
      <LUCBarChart
      />
    );
  }
};

LandUseChangeTableForm.propTypes = {
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

LandUseChangeTableForm.defaultProps = {
  user: null,
  country: 'Estonia',
  year: 2023
};
