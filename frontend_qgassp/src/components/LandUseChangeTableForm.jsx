import React, { useState, useEffect } from "react";
import { LUCBarChart } from "./LUCBarChart";
import { Button } from "./Button";
import "../css/landusechange.css";
import axios from "axios";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { CircularProgress } from "@mui/material";
import urlPrefix from "../Config";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import {
  useStorageFloat,
  useStorageInt,
  useStorageBool
} from "../reducers/useStorage";

/**
 * LUC inputs table from to
 * @return {}
 */

export const LandUseChangeTableForm = () => {
  const country = localStorage.getItem("country");
  const year = parseInt(localStorage.getItem("year"));
  // to Forest vars
  // #region
  const [cropToForest, setCropToForest] = useStorageFloat("cropToForest", 0);
  const [cropToForestMineral, setCropToForestMineral] = useStorageFloat("cropToForestMineral", 0);
  const [cropToForestOrganic, setCropToForestOrganic] = useStorageFloat("cropToForestOrganic", 0);
  const [cropToForestYear, setCropToForestYear] = useStorageInt("cropToForestYear", year);

  const [grassToForest, setGrassToForest] = useStorageFloat("grassToForest", 0);
  const [grassToForestMineral, setGrassToForestMineral] = useStorageFloat("grassToForestMineral", 0);
  const [grassToForestOrganic, setGrassToForestOrganic] = useStorageFloat("grassToForestOrganic", 0);
  const [grassToForestYear, setGrassToForestYear] = useStorageInt("grassToForestYear", year);

  const [wetToForest, setWetToForest] = useStorageFloat("wetToForest", 0);
  const [wetToForestMineral, setWetToForestMineral] = useStorageFloat("wetToForestMineral", 0);
  const [wetToForestOrganic, setWetToForestOrganic] = useStorageFloat("wetToForestOrganic", 0);
  const [wetToForestYear, setWetToForestYear] = useStorageInt("wetToForestYear", year);

  const [settlementsToForest, setSettlementsToForest] = useStorageFloat("settlementsToForest", 0);
  const [settlementsToForestMineral, setSettlementsToForestMineral] =
    useStorageFloat("settlementsToForestMineral", 0);
  const [settlementsToForestOrganic, setSettlementsToForestOrganic] =
    useStorageFloat("settlementsToForestOrganic", 0);
  const [settlementsToForestYear, setSettlementsToForestYear] = useStorageInt("settlementsToForestYear", year);

  const [otherToForest, setOtherToForest] = useStorageFloat("otherToForest", 0);
  const [otherToForestMineral, setOtherToForestMineral] = useStorageFloat("otherToForestMineral", 0);
  const [otherToForestOrganic, setOtherToForestOrganic] = useStorageFloat("otherToForestOrganic", 0);
  const [otherToForestYear, setOtherToForestYear] = useStorageInt("otherToForestYear", year);
  // #endregion

  // to Crop vars
  // #region
  const [forestToCrop, setForestToCrop] = useStorageFloat("forestToCrop", 0);
  const [forestToCropMineral, setForestToCropMineral] = useStorageFloat("forestToCropMineral", 0);
  const [forestToCropOrganic, setForestToCropOrganic] = useStorageFloat("forestToCropOrganic", 0);
  const [forestToCropYear, setForestToCropYear] = useStorageInt("forestToCropYear", year);

  const [grassToCrop, setGrassToCrop] = useStorageFloat("grassToCrop", 0);
  const [grassToCropMineral, setGrassToCropMineral] = useStorageFloat("grassToCropMineral", 0);
  const [grassToCropOrganic, setGrassToCropOrganic] = useStorageFloat("grassToCropOrganic", 0);
  const [grassToCropYear, setGrassToCropYear] = useStorageInt("grassToCropYear", year);

  const [wetToCrop, setWetToCrop] = useStorageFloat("wetToCrop", 0);
  const [wetToCropMineral, setWetToCropMineral] = useStorageFloat("wetToCropMineral", 0);
  const [wetToCropOrganic, setWetToCropOrganic] = useStorageFloat("wetToCropOrganic", 0);
  const [wetToCropYear, setWetToCropYear] = useStorageInt("wetToCropYear", year);

  const [settlementsToCrop, setSettlementsToCrop] = useStorageFloat("settlementsToCrop", 0);
  const [settlementsToCropMineral, setSettlementsToCropMineral] = useStorageFloat("settlementsToCropMineral", 0);
  const [settlementsToCropOrganic, setSettlementsToCropOrganic] = useStorageFloat("settlementsToCropOrganic", 0);
  const [settlementsToCropYear, setSettlementsToCropYear] = useStorageInt("settlementsToCropYear", year);

  const [otherToCrop, setOtherToCrop] = useStorageFloat("otherToCrop", 0);
  const [otherToCropMineral, setOtherToCropMineral] = useStorageFloat("otherToCropMineral", 0);
  const [otherToCropOrganic, setOtherToCropOrganic] = useStorageFloat("otherToCropOrganic", 0);
  const [otherToCropYear, setOtherToCropYear] = useStorageInt("otherToCropYear", year);
  // #endregion

  // to Grass vars
  // #region
  const [forestToGrass, setForestToGrass] = useStorageFloat("forestToGrass", 0);
  const [forestToGrassMineral, setForestToGrassMineral] = useStorageFloat("forestToGrassMineral", 0);
  const [forestToGrassOrganic, setForestToGrassOrganic] = useStorageFloat("forestToGrassOrganic", 0);
  const [forestToGrassYear, setForestToGrassYear] = useStorageInt("forestToGrassYear", year);

  const [cropToGrass, setCropToGrass] = useStorageFloat("cropToGrass", 0);
  const [cropToGrassMineral, setCropToGrassMineral] = useStorageFloat("cropToGrassMineral", 0);
  const [cropToGrassOrganic, setCropToGrassOrganic] = useStorageFloat("cropToGrassOrganic", 0);
  const [cropToGrassYear, setCropToGrassYear] = useStorageInt("cropToGrassYear", year);

  const [wetToGrass, setWetToGrass] = useStorageFloat("wetToGrass", 0);
  const [wetToGrassMineral, setWetToGrassMineral] = useStorageFloat("wetToGrassMineral", 0);
  const [wetToGrassOrganic, setWetToGrassOrganic] = useStorageFloat("wetToGrassOrganic", 0);
  const [wetToGrassYear, setWetToGrassYear] = useStorageInt("wetToGrassYear", year);

  const [settlementsToGrass, setSettlementsToGrass] = useStorageFloat("settlementsToGrass", 0);
  const [settlementsToGrassMineral, setSettlementsToGrassMineral] = useStorageFloat("settlementsToGrassMineral", 0);
  const [settlementsToGrassOrganic, setSettlementsToGrassOrganic] = useStorageFloat("settlementsToGrassOrganic", 0);
  const [settlementsToGrassYear, setSettlementsToGrassYear] = useStorageInt("settlementsToGrassYear", year);

  const [otherToGrass, setOtherToGrass] = useStorageFloat("otherToGrass", 0);
  const [otherToGrassMineral, setOtherToGrassMineral] = useStorageFloat("otherToGrassMineral", 0);
  const [otherToGrassOrganic, setOtherToGrassOrganic] = useStorageFloat("otherToGrassOrganic", 0);
  const [otherToGrassYear, setOtherToGrassYear] = useStorageInt("otherToGrassYear", year);
  // #endregion

  // to other wetlands/flooded land vars
  // #region
  const [landConvertedToPeat, setLandConvertedToPeat] = useStorageFloat("landConvertedToPeat", 0);
  const [landConvertedToPeatMineral, setLandConvertedToPeatMineral] =
    useStorageFloat("landConvertedToPeatMineral", 0);
  const [landConvertedToPeatOrganic, setLandConvertedToPeatOrganic] =
    useStorageFloat("landConvertedToPeatOrganic", 0);
  const [landConvertedToPeatYear, setLandConvertedToPeatYear] = useStorageInt("landConvertedToPeatYear", year);

  const [peatLandRestore, setPeatLandRestore] = useStorageFloat("peatLandRestore", 0);
  const [peatLandRestoreMineral, setPeatLandRestoreMineral] = useStorageFloat("peatLandRestoreMineral", 0);
  const [peatLandRestoreOrganic, setPeatLandRestoreOrganic] = useStorageFloat("peatLandRestoreOrganic", 0);
  const [peatLandRestoreYear, setPeatLandRestoreYear] = useStorageInt("peatLandRestoreYear", year);

  const [forestToWetland, setForestToWetland] = useStorageFloat("forestToWetland", 0);
  const [forestToWetlandMineral, setForestToWetlandMineral] = useStorageFloat("forestToWetlandMineral", 0);
  const [forestToWetlandOrganic, setForestToWetlandOrganic] = useStorageFloat("forestToWetlandOrganic", 0);
  const [forestToWetlandYear, setForestToWetlandYear] = useStorageInt("forestToWetlandYear", year);

  const [cropToWet, setCropToWet] = useStorageFloat("cropToWet", 0);
  const [cropToWetMineral, setCropToWetMineral] = useStorageFloat("cropToWetMineral", 0);
  const [cropToWetOrganic, setCropToWetOrganic] = useStorageFloat("cropToWetOrganic", 0);
  const [cropToWetYear, setCropToWetYear] = useStorageInt("cropToWetYear", year);

  const [grassToWet, setGrassToWet] = useStorageFloat("grassToWet", 0);
  const [grassToWetMineral, setGrassToWetMineral] = useStorageFloat("grassToWetMineral", 0);
  const [grassToWetOrganic, setGrassToWetOrganic] = useStorageFloat("grassToWetOrganic", 0);
  const [grassToWetYear, setGrassToWetYear] = useStorageInt("grassToWetYear", year);
  // #endregion

  // to Settlements vars
  // #region
  const [forestToSettlements, setForestToSettlements] = useStorageFloat("forestToSettlements", 0);
  const [forestToSettlementsMineral, setForestToSettlementsMineral] =
    useStorageFloat("forestToSettlementsMineral", 0);
  const [forestToSettlementsOrganic, setForestToSettlementsOrganic] =
    useStorageFloat("forestToSettlementsOrganic", 0);
  const [forestToSettlementsYear, setForestToSettlementsYear] = useStorageInt("forestToSettlementsYear", year);

  const [cropToSettlements, setCropToSettlements] = useStorageFloat("cropToSettlements", 0);
  const [cropToSettlementsMineral, setCropToSettlementsMineral] = useStorageFloat("cropToSettlementsMineral", 0);
  const [cropToSettlementsOrganic, setCropToSettlementsOrganic] = useStorageFloat("cropToSettlementsOrganic", 0);
  const [cropToSettlementsYear, setCropToSettlementsYear] = useStorageInt("cropToSettlementsYear", year);

  const [grassToSettlements, setGrassToSettlements] = useStorageFloat("grassToSettlements", 0);
  const [grassToSettlementsMineral, setGrassToSettlementsMineral] = useStorageFloat("grassToSettlementsMineral", 0);
  const [grassToSettlementsOrganic, setGrassToSettlementsOrganic] = useStorageFloat("grassToSettlementsOrganic", 0);
  const [grassToSettlementsYear, setGrassToSettlementsYear] = useStorageInt("grassToSettlementsYear", year);

  const [wetToSettlements, setWetToSettlements] = useStorageFloat("wetToSettlements", 0);
  const [wetToSettlementsMineral, setWetToSettlementsMineral] = useStorageFloat("wetToSettlementsMineral", 0);
  const [wetToSettlementsOrganic, setWetToSettlementsOrganic] = useStorageFloat("wetToSettlementsOrganic", 0);
  const [wetToSettlementsYear, setWetToSettlementsYear] = useStorageInt("wetToSettlementsYear", year);

  const [otherToSettlements, setOtherToSettlements] = useStorageFloat("otherToSettlements", 0);
  const [otherToSettlementsMineral, setOtherToSettlementsMineral] = useStorageFloat("otherToSettlementsMineral", 0);
  const [otherToSettlementsOrganic, setOtherToSettlementsOrganic] = useStorageFloat("otherToSettlementsOrganic", 0);
  const [otherToSettlementsYear, setOtherToSettlementsYear] = useStorageInt("otherToSettlementsYear", year);
  // #endregion

  // to other land vars
  // #region
  const [forestToOther, setForestToOther] = useStorageFloat("forestToOther", 0);
  const [forestToOtherMineral, setForestToOtherMineral] = useStorageFloat("forestToOtherMineral", 0);
  const [forestToOtherOrganic, setForestToOtherOrganic] = useStorageFloat("forestToOtherOrganic", 0);
  const [forestToOtherYear, setForestToOtherYear] = useStorageInt("forestToOtherYear", year);

  const [cropToOther, setCropToOther] = useStorageFloat("cropToOther", 0);
  const [cropToOtherMineral, setCropToOtherMineral] = useStorageFloat("cropToOtherMineral", 0);
  const [cropToOtherOrganic, setCropToOtherOrganic] = useStorageFloat("cropToOtherOrganic", 0);
  const [cropToOtherYear, setCropToOtherYear] = useStorageInt("cropToOtherYear", year);

  const [grassToOther, setGrassToOther] = useStorageFloat("grassToOther", 0);
  const [grassToOtherMineral, setGrassToOtherMineral] = useStorageFloat("grassToOtherMineral", 0);
  const [grassToOtherOrganic, setGrassToOtherOrganic] = useStorageFloat("grassToOtherOrganic", 0);
  const [grassToOtherYear, setGrassToOtherYear] = useStorageInt("grassToOtherYear", year);

  const [wetToOther, setWetToOther] = useStorageFloat("wetToOther", 0);
  const [wetToOtherMineral, setWetToOtherMineral] = useStorageFloat("wetToOtherMineral", 0);
  const [wetToOtherOrganic, setWetToOtherOrganic] = useStorageFloat("wetToOtherOrganic", 0);
  const [wetToOtherYear, setWetToOtherYear] = useStorageInt("wetToOtherYear", year);

  const [settlementsToOther, setSettlementsToOther] = useStorageFloat("settlementsToOther", 0);
  const [settlementsToOtherMineral, setSettlementsToOtherMineral] = useStorageFloat("settlementsToOtherMineral", 0);
  const [settlementsToOtherOrganic, setSettlementsToOtherOrganic] = useStorageFloat("settlementsToOtherOrganic", 0);
  const [settlementsToOtherYear, setSettlementsToOtherYear] = useStorageInt("settlementsToOtherYear", year);
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
  const [landUseChangeResponse, setLandUseChangeResponse] = useState(() => {
    const savedLuc = localStorage.getItem("landUseChangeResponse");
    const initialValue = JSON.parse(savedLuc);
    return initialValue || {};
  });
  const [loadingStyles, setLoadingStyle] = useState({
    display: "none",
  });
  const [errorLuc, setLucError] = useState("");
  const options = [];
  for (let i = year; i < 2051; i++) options.push(i);

  const goToLandUseChangeBaseline = () => {
    setLUCBarChart(true);
  };

  const setLandUseChangeChart = async () => {
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
      croplandToSettlement: cropToSettlements,
      grasslandToSettlement: grassToSettlements,
      wetlandToSettlement: wetToSettlements,
      otherlandToSettlement: otherToSettlements,
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
      croplandToSettlement: cropToSettlementsMineral,
      grasslandToSettlement: grassToSettlementsMineral,
      wetlandToSettlement: wetToSettlementsMineral,
      otherlandToSettlement: otherToSettlementsMineral,
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
      croplandToSettlement: cropToSettlementsOrganic,
      grasslandToSettlement: grassToSettlementsOrganic,
      wetlandToSettlement: wetToSettlementsOrganic,
      otherlandToSettlement: otherToSettlementsOrganic,
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
      croplandToSettlement: cropToSettlementsYear,
      grasslandToSettlement: grassToSettlementsYear,
      wetlandToSettlement: wetToSettlementsYear,
      otherlandToSettlement: otherToSettlementsYear,
      forestlandToOtherland: forestToOtherYear,
      croplandToOtherland: cropToOtherYear,
      grasslandToOtherland: grassToOtherYear,
      wetlandToOtherland: wetToOtherYear,
      settlementToOtherland: settlementsToOtherYear,
    };
    const landUseChange = {
      totalArea: totalArea,
      mineral: mineral,
      organic: organic,
    };
    const rawData = {
      country: country,
      year: year,
      landUseChange,
      policyStartYear,
    };

    localStorage.setItem("landUseChangeRequest", JSON.stringify(rawData));
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    };
    setLoadingStyle({
      display: "block",
    });
    axios
      .post(urlPrefix + "/api/v1/calculate/land-use-change", rawData, headers)
      .then((response) => setResponse(response.data))
      .then(() => {
        setLoadingStyle({
          display: "none",
        });
      })
      .catch((error) => {
        setLucError({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("There was an error!", errorLuc);
      });
  };

  const setTotal = () => {
    setTotalArea((
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
    ).toFixed(2));
    setTotalMineral((
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
    ).toFixed(2));
    setTotalOrganic((
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
    ).toFixed(2));
  };
  // toForest handlers
  // #region
  // crop
  const handleCropToForest = (e) => {
    e.preventDefault();
    setCropToForest(parseFloat(e.target.value));
  };

  const handleCropToForestMineral = (e) => {
    e.preventDefault();
    setCropToForestMineral(parseFloat(e.target.value));
  };

  const handleCropToForestOrganic = (e) => {
    e.preventDefault();
    setCropToForestOrganic(parseFloat(e.target.value));
  };

  const handleCropToForestYear = (e) => {
    e.preventDefault();
    setCropToForestYear(Number(e.target.value));
  };
  // grass
  const handleGrassToForest = (e) => {
    e.preventDefault();
    setGrassToForest(parseFloat(e.target.value));
  };

  const handleGrassToForestMineral = (e) => {
    e.preventDefault();
    setGrassToForestMineral(parseFloat(e.target.value));
  };

  const handleGrassToForestOrganic = (e) => {
    e.preventDefault();
    setGrassToForestOrganic(parseFloat(e.target.value));
  };

  const handleGrassToForestYear = (e) => {
    e.preventDefault();
    setGrassToForestYear(Number(e.target.value));
  };
  // wet
  const handleWetToForest = (e) => {
    e.preventDefault();
    setWetToForest(parseFloat(e.target.value));
  };

  const handleWetToForestMineral = (e) => {
    e.preventDefault();
    setWetToForestMineral(parseFloat(e.target.value));
  };

  const handleWetToForestOrganic = (e) => {
    e.preventDefault();
    setWetToForestOrganic(parseFloat(e.target.value));
  };

  const handleWetToForestYear = (e) => {
    e.preventDefault();
    setWetToForestYear(Number(e.target.value));
  };
  // settlements
  const handleSettlementsToForest = (e) => {
    e.preventDefault();
    setSettlementsToForest(parseFloat(e.target.value));
  };

  const handleSettlementsToForestMineral = (e) => {
    e.preventDefault();
    setSettlementsToForestMineral(parseFloat(e.target.value));
  };
  const handleSettlementsToForestOrganic = (e) => {
    e.preventDefault();
    setSettlementsToForestOrganic(parseFloat(e.target.value));
  };

  const handleSettlementsToForestYear = (e) => {
    e.preventDefault();
    setSettlementsToForestYear(Number(e.target.value));
  };
  // other
  const handleOtherToForest = (e) => {
    e.preventDefault();
    setOtherToForest(parseFloat(e.target.value));
  };

  const handleOtherToForestMineral = (e) => {
    e.preventDefault();
    setOtherToForestMineral(parseFloat(e.target.value));
  };

  const handleOtherToForestOrganic = (e) => {
    e.preventDefault();
    setOtherToForestOrganic(parseFloat(e.target.value));
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
    e.preventDefault();
    setForestToCrop(parseFloat(e.target.value));
  };

  const handleForestToCropMineral = (e) => {
    e.preventDefault();
    setForestToCropMineral(parseFloat(e.target.value));
  };

  const handleForestToCropOrganic = (e) => {
    e.preventDefault();
    setForestToCropOrganic(parseFloat(e.target.value));
  };

  const handleForestToCropYear = (e) => {
    e.preventDefault();
    setForestToCropYear(Number(e.target.value));
  };
  // grass
  const handleGrassToCrop = (e) => {
    e.preventDefault();
    setGrassToCrop(parseFloat(e.target.value));
  };

  const handleGrassToCropMineral = (e) => {
    e.preventDefault();
    setGrassToCropMineral(parseFloat(e.target.value));
  };

  const handleGrassToCropOrganic = (e) => {
    e.preventDefault();
    setGrassToCropOrganic(parseFloat(e.target.value));
  };

  const handleGrassToCropYear = (e) => {
    e.preventDefault();
    setGrassToCropYear(Number(e.target.value));
  };
  // wetland
  const handleWetToCrop = (e) => {
    e.preventDefault();
    setWetToCrop(parseFloat(e.target.value));
  };

  const handleWetToCropMineral = (e) => {
    e.preventDefault();
    setWetToCropMineral(parseFloat(e.target.value));
  };

  const handleWetToCropOrganic = (e) => {
    e.preventDefault();
    setWetToCropOrganic(parseFloat(e.target.value));
  };
  const handleWetToCropYear = (e) => {
    e.preventDefault();
    setWetToCropYear(Number(e.target.value));
  };
  // settlements
  const handleSettlementsToCrop = (e) => {
    e.preventDefault();
    setSettlementsToCrop(parseFloat(e.target.value));
  };

  const handleSettlementsToCropMineral = (e) => {
    e.preventDefault();
    setSettlementsToCropMineral(parseFloat(e.target.value));
  };

  const handleSettlementsToCropOrganic = (e) => {
    e.preventDefault();
    setSettlementsToCropOrganic(parseFloat(e.target.value));
  };
  const handleSettlementsToCropYear = (e) => {
    e.preventDefault();
    setSettlementsToCropYear(Number(e.target.value));
  };
  // other land
  const handleOtherToCrop = (e) => {
    e.preventDefault();
    setOtherToCrop(parseFloat(e.target.value));
  };

  const handleOtherToCropMineral = (e) => {
    e.preventDefault();
    setOtherToCropMineral(parseFloat(e.target.value));
  };

  const handleOtherToCropOrganic = (e) => {
    e.preventDefault();
    setOtherToCropOrganic(parseFloat(e.target.value));
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
    e.preventDefault();
    setForestToGrass(parseFloat(e.target.value));
  };

  const handleForestToGrassMineral = (e) => {
    e.preventDefault();
    setForestToGrassMineral(parseFloat(e.target.value));
  };

  const handleForestToGrassOrganic = (e) => {
    e.preventDefault();
    setForestToGrassOrganic(parseFloat(e.target.value));
  };

  const handleForestToGrassYear = (e) => {
    e.preventDefault();
    setForestToGrassYear(Number(e.target.value));
  };
  // crop
  const handleCropToGrass = (e) => {
    e.preventDefault();
    setCropToGrass(parseFloat(e.target.value));
  };

  const handleCropToGrassMineral = (e) => {
    e.preventDefault();
    setCropToGrassMineral(parseFloat(e.target.value));
  };

  const handleCropToGrassOrganic = (e) => {
    e.preventDefault();
    setCropToGrassOrganic(parseFloat(e.target.value));
  };

  const handleCropToGrassYear = (e) => {
    e.preventDefault();
    setCropToGrassYear(Number(e.target.value));
  };
  // wetlands
  const handleWetToGrass = (e) => {
    e.preventDefault();
    setWetToGrass(parseFloat(e.target.value));
  };

  const handleWetToGrassMineral = (e) => {
    e.preventDefault();
    setWetToGrassMineral(parseFloat(e.target.value));
  };

  const handleWetToGrassOrganic = (e) => {
    e.preventDefault();
    setWetToGrassOrganic(parseFloat(e.target.value));
  };

  const handleWetToGrassYear = (e) => {
    e.preventDefault();
    setWetToGrassYear(Number(e.target.value));
  };
  // settlements
  const handleSettlementsToGrass = (e) => {
    e.preventDefault();
    setSettlementsToGrass(parseFloat(e.target.value));
  };

  const handleSettlementsToGrassMineral = (e) => {
    e.preventDefault();
    setSettlementsToGrassMineral(parseFloat(e.target.value));
  };

  const handleSettlementsToGrassOrganic = (e) => {
    e.preventDefault();
    setSettlementsToGrassOrganic(parseFloat(e.target.value));
  };

  const handleSettlementsToGrassYear = (e) => {
    e.preventDefault();
    setSettlementsToGrassYear(Number(e.target.value));
  };
  // other land
  const handleOtherToGrass = (e) => {
    e.preventDefault();
    setOtherToGrass(parseFloat(e.target.value));
  };

  const handleOtherToGrassMineral = (e) => {
    e.preventDefault();
    setOtherToGrassMineral(parseFloat(e.target.value));
  };

  const handleOtherToGrassOrganic = (e) => {
    e.preventDefault();
    setOtherToGrassOrganic(parseFloat(e.target.value));
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
    e.preventDefault();
    setLandConvertedToPeat(parseFloat(e.target.value));
  };

  const handleLandConvertedToPeatMineral = (e) => {
    e.preventDefault();
    setLandConvertedToPeatMineral(parseFloat(e.target.value));
  };

  const handleLandConvertedToPeatOrganic = (e) => {
    e.preventDefault();
    setLandConvertedToPeatOrganic(parseFloat(e.target.value));
  };

  const handleLandConvertedToPeatYear = (e) => {
    e.preventDefault();
    setLandConvertedToPeatYear(Number(e.target.value));
  };

  // to peatland restore
  const handlePeatLandRestore = (e) => {
    e.preventDefault();
    setPeatLandRestore(parseFloat(e.target.value));
  };

  const handlePeatLandRestoreMineral = (e) => {
    e.preventDefault();
    setPeatLandRestoreMineral(parseFloat(e.target.value));
  };

  const handlePeatLandRestoreOrganic = (e) => {
    e.preventDefault();
    setPeatLandRestoreOrganic(parseFloat(e.target.value));
  };

  const handlePeatLandRestoreYear = (e) => {
    e.preventDefault();
    setPeatLandRestoreYear(Number(e.target.value));
  };

  // forest to
  const handleForestToWetland = (e) => {
    e.preventDefault();
    setForestToWetland(parseFloat(e.target.value));
  };

  const handleForestToWetlandMineral = (e) => {
    e.preventDefault();
    setForestToWetlandMineral(parseFloat(e.target.value));
  };

  const handleForestToWetlandOrganic = (e) => {
    e.preventDefault();
    setForestToWetlandOrganic(parseFloat(e.target.value));
  };

  const handleForestToWetlandYear = (e) => {
    e.preventDefault();
    setForestToWetlandYear(Number(e.target.value));
  };

  // cropland to
  const handleCropToWet = (e) => {
    e.preventDefault();
    setCropToWet(parseFloat(e.target.value));
  };

  const handleCropToWetMineral = (e) => {
    e.preventDefault();
    setCropToWetMineral(parseFloat(e.target.value));
  };

  const handleCropToWetOrganic = (e) => {
    e.preventDefault();
    setCropToWetOrganic(parseFloat(e.target.value));
  };

  const handleCropToWetYear = (e) => {
    e.preventDefault();
    setCropToWetYear(Number(e.target.value));
  };

  // grassland to
  const handleGrassToWet = (e) => {
    e.preventDefault();
    setGrassToWet(parseFloat(e.target.value));
  };

  const handleGrassToWetMineral = (e) => {
    e.preventDefault();
    setGrassToWetMineral(parseFloat(e.target.value));
  };

  const handleGrassToWetOrganic = (e) => {
    e.preventDefault();
    setGrassToWetOrganic(parseFloat(e.target.value));
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
    e.preventDefault();
    setForestToSettlements(parseFloat(e.target.value));
  };

  const handleForestToSettlementsMineral = (e) => {
    e.preventDefault();
    setForestToSettlementsMineral(parseFloat(e.target.value));
  };

  const handleForestToSettlementsOrganic = (e) => {
    e.preventDefault();
    setForestToSettlementsOrganic(parseFloat(e.target.value));
  };

  const handleForestToSettlementsYear = (e) => {
    e.preventDefault();
    setForestToSettlementsYear(Number(e.target.value));
  };
  // crop
  const handleCropToSettlements = (e) => {
    e.preventDefault();
    setCropToSettlements(parseFloat(e.target.value));
  };

  const handleCropToSettlementsMineral = (e) => {
    e.preventDefault();
    setCropToSettlementsMineral(parseFloat(e.target.value));
  };

  const handleCropToSettlementsOrganic = (e) => {
    e.preventDefault();
    setCropToSettlementsOrganic(parseFloat(e.target.value));
  };

  const handleCropToSettlementsYear = (e) => {
    e.preventDefault();
    setCropToSettlementsYear(Number(e.target.value));
  };
  // grass
  const handleGrassToSettlements = (e) => {
    e.preventDefault();
    setGrassToSettlements(parseFloat(e.target.value));
  };

  const handleGrassToSettlementsMineral = (e) => {
    e.preventDefault();
    setGrassToSettlementsMineral(parseFloat(e.target.value));
  };

  const handleGrassToSettlementsOrganic = (e) => {
    e.preventDefault();
    setGrassToSettlementsOrganic(parseFloat(e.target.value));
  };

  const handleGrassToSettlementsYear = (e) => {
    e.preventDefault();
    setGrassToSettlementsYear(Number(e.target.value));
  };
  // wet
  const handleWetToSettlements = (e) => {
    e.preventDefault();
    setWetToSettlements(parseFloat(e.target.value));
  };

  const handleWetToSettlementsMineral = (e) => {
    e.preventDefault();
    setWetToSettlementsMineral(parseFloat(e.target.value));
  };

  const handleWetToSettlementsOrganic = (e) => {
    e.preventDefault();
    setWetToSettlementsOrganic(parseFloat(e.target.value));
  };

  const handleWetToSettlementsYear = (e) => {
    e.preventDefault();
    setWetToSettlementsYear(Number(e.target.value));
  };
  // other
  const handleOtherToSettlements = (e) => {
    e.preventDefault();
    setOtherToSettlements(parseFloat(e.target.value));
  };

  const handleOtherToSettlementsMineral = (e) => {
    e.preventDefault();
    setOtherToSettlementsMineral(parseFloat(e.target.value));
  };

  const handleOtherToSettlementsOrganic = (e) => {
    e.preventDefault();
    setOtherToSettlementsOrganic(parseFloat(e.target.value));
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
    e.preventDefault();
    setForestToOther(parseFloat(e.target.value));
  };

  const handleForestToOtherMineral = (e) => {
    e.preventDefault();
    setForestToOtherMineral(parseFloat(e.target.value));
  };

  const handleForestToOtherOrganic = (e) => {
    e.preventDefault();
    setForestToOtherOrganic(parseFloat(e.target.value));
  };

  const handleForestToOtherYear = (e) => {
    e.preventDefault();
    setForestToOtherYear(Number(e.target.value));
  };

  // crop
  const handleCropToOther = (e) => {
    e.preventDefault();
    setCropToOther(parseFloat(e.target.value));
  };

  const handleCropToOtherMineral = (e) => {
    e.preventDefault();
    setCropToOtherMineral(parseFloat(e.target.value));
  };

  const handleCropToOtherOrganic = (e) => {
    e.preventDefault();
    setCropToOtherOrganic(parseFloat(e.target.value));
  };

  const handleCropToOtherYear = (e) => {
    e.preventDefault();
    setCropToOtherYear(Number(e.target.value));
  };

  // grass
  const handleGrassToOther = (e) => {
    e.preventDefault();
    setGrassToOther(parseFloat(e.target.value));
  };

  const handleGrassToOtherMineral = (e) => {
    e.preventDefault();
    setGrassToOtherMineral(parseFloat(e.target.value));
  };

  const handleGrassToOtherOrganic = (e) => {
    e.preventDefault();
    setGrassToOtherOrganic(parseFloat(e.target.value));
  };

  const handleGrassToOtherYear = (e) => {
    e.preventDefault();
    setGrassToOtherYear(Number(e.target.value));
  };

  // wet
  const handleWetToOther = (e) => {
    e.preventDefault();
    setWetToOther(parseFloat(e.target.value));
  };

  const handleWetToOtherMineral = (e) => {
    e.preventDefault();
    setWetToOtherMineral(parseFloat(e.target.value));
  };

  const handleWetToOtherOrganic = (e) => {
    e.preventDefault();
    setWetToOtherOrganic(parseFloat(e.target.value));
  };

  const handleWetToOtherYear = (e) => {
    e.preventDefault();
    setWetToOtherYear(Number(e.target.value));
  };
  // settlements
  const handleSettlementsToOther = (e) => {
    e.preventDefault();
    setSettlementsToOther(parseFloat(e.target.value));
  };

  const handleSettlementsToOtherMineral = (e) => {
    e.preventDefault();
    setSettlementsToOtherMineral(parseFloat(e.target.value));
  };

  const handleSettlementsToOtherOrganic = (e) => {
    e.preventDefault();
    setSettlementsToOtherOrganic(parseFloat(e.target.value));
  };

  const handleSettlementsToOtherYear = (e) => {
    e.preventDefault();
    setSettlementsToOtherYear(Number(e.target.value));
  };
  // #endregion

  const handleResetValues = (e) => {
    e.preventDefault();
    // crop
    // #region
    setCropToForest(0);
    setCropToForestMineral(0);
    setCropToForestOrganic(0);
    setCropToForestYear(year);

    setCropToGrass(0);
    setCropToGrassMineral(0);
    setCropToGrassOrganic(0);
    setCropToGrassYear(year);

    setCropToOther(0);
    setCropToOtherMineral(0);
    setCropToOtherOrganic(0);
    setCropToOtherYear(year);

    setCropToSettlements(0);
    setCropToSettlementsMineral(0);
    setCropToSettlementsOrganic(0);
    setCropToSettlementsYear(year);

    setCropToWet(0);
    setCropToWetMineral(0);
    setCropToWetOrganic(0);
    setCropToWetYear(year);
    // #endregion

    // grass
    // #region
    setGrassToCrop(0);
    setGrassToCropMineral(0);
    setGrassToCropOrganic(0);
    setGrassToCropYear(year);

    setGrassToForest(0);
    setGrassToForestMineral(0);
    setGrassToForestOrganic(0);
    setGrassToForestYear(year);

    setGrassToOther(0);
    setGrassToOtherMineral(0);
    setGrassToOtherOrganic(0);
    setGrassToOtherYear(year);

    setGrassToSettlements(0);
    setGrassToSettlementsMineral(0);
    setGrassToSettlementsOrganic(0);
    setGrassToSettlementsYear(year);

    setGrassToWet(0);
    setGrassToWetMineral(0);
    setGrassToWetOrganic(0);
    setGrassToWetYear(year);
    // #endregion

    // forest
    // #region
    setForestToCrop(0);
    setForestToCropMineral(0);
    setForestToCropOrganic(0);
    setForestToCropYear(year);

    setForestToGrass(0);
    setForestToGrassMineral(0);
    setForestToGrassOrganic(0);
    setForestToGrassYear(year);

    setForestToSettlements(0);
    setForestToSettlementsMineral(0);
    setForestToSettlementsOrganic(0);
    setForestToSettlementsYear(year);

    setForestToOther(0);
    setForestToOtherMineral(0);
    setForestToOtherOrganic(0);
    setForestToOtherYear(year);

    setForestToWetland(0);
    setForestToWetlandMineral(0);
    setForestToWetlandOrganic(0);
    setForestToWetlandYear(year);
    // #endregion

    // other
    // #region
    setOtherToCrop(0);
    setOtherToCropMineral(0);
    setOtherToCropOrganic(0);
    setOtherToCropYear(year);

    setOtherToGrass(0);
    setOtherToGrassMineral(0);
    setOtherToGrassOrganic(0);
    setOtherToGrassYear(year);

    setOtherToForest(0);
    setOtherToForestMineral(0);
    setOtherToForestOrganic(0);
    setOtherToForestYear(year);

    setOtherToSettlements(0);
    setOtherToSettlementsMineral(0);
    setOtherToSettlementsOrganic(0);
    setOtherToSettlementsYear(year);

    setLandConvertedToPeat(0);
    setLandConvertedToPeatMineral(0);
    setLandConvertedToPeatOrganic(0);
    setLandConvertedToPeatYear(year);

    setPeatLandRestore(0);
    setPeatLandRestoreMineral(0);
    setPeatLandRestoreOrganic(0);
    setPeatLandRestoreYear(year);
    // #endregion

    // settlements
    // #region
    setSettlementsToCrop(0);
    setSettlementsToCropMineral(0);
    setSettlementsToCropOrganic(0);
    setSettlementsToCropYear(year);

    setSettlementsToGrass(0);
    setSettlementsToGrassMineral(0);
    setSettlementsToGrassOrganic(0);
    setSettlementsToGrassYear(year);

    setSettlementsToForest(0);
    setSettlementsToForestMineral(0);
    setSettlementsToForestOrganic(0);
    setSettlementsToForestYear(year);

    setSettlementsToOther(0);
    setSettlementsToOtherMineral(0);
    setSettlementsToOtherOrganic(0);
    setSettlementsToOtherYear(year);
    // #endregion

    // wetlands
    // #region
    setWetToCrop(0);
    setWetToCropMineral(0);
    setWetToCropOrganic(0);
    setWetToCropYear(year);

    setWetToGrass(0);
    setWetToGrassMineral(0);
    setWetToGrassOrganic(0);
    setWetToGrassYear(year);

    setWetToForest(0);
    setWetToForestMineral(0);
    setWetToForestOrganic(0);
    setWetToForestYear(year);

    setWetToOther(0);
    setWetToOtherMineral(0);
    setWetToOtherOrganic(0);
    setWetToOtherYear(year);

    setWetToSettlements(0);
    setWetToSettlementsMineral(0);
    setWetToSettlementsOrganic(0);
    setWetToSettlementsYear(year);
    // #endregion
  };
  const setResponse = (response) => {
    setLandUseChangeResponse(response.data);
  };
  useEffect(() => {
    localStorage.setItem(
      "landUseChangeResponse",
      JSON.stringify(landUseChangeResponse)
    );
  }, [landUseChangeResponse]);


  const [lucToForest, setLucToForest] = useStorageBool("lucToForest", false);
  const handleLucToForest = (e) => {
      setLucToForest(!lucToForest);
  };

  const [lucToCrop, setLucToCrop] = useStorageBool("lucToCrop", false);
  const handleLucToCrop = (e) => {
      e.target.checked;
      setLucToCrop(!lucToCrop);
  };

  const [lucToGrass, setLucToGrass] = useStorageBool("lucToGrass", false);
  const handleLucToGrass = (e) => {
    e.target.checked;
    setLucToGrass(!lucToGrass);
  };

  const [lucToWet, setLucToWet] = useStorageBool("lucToWet", false);
  const handleLucToWet = (e) => {
    e.target.checked;
    setLucToWet(!lucToWet);
  };

  const [lucToSettlements, setLucToSettlements] = useStorageBool("lucToSettlements",false);
  const handleLucToSettlements = (e) => {
    e.target.checked;
    setLucToSettlements(!lucToSettlements);
  };

  const [lucToOther, setLucToOther] = useStorageBool("lucToOther",false);
  const handleLucToOther = (e) => {
    e.target.checked;
    setLucToOther(!lucToOther);
  };

  if (lucBarChart === false) {
    return (
      <div>
        <article>
          <div className="headerSettlement">
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="LAND-USE CHANGE" />
            </Divider>
          </div>
          <div className="luc_main">
            <div className="luc_alert_container">
              <Alert severity="info">
                This section estimates the greenhouse gas emissions from the
                land-use changes of a plan or a planning policy. The
                quantification is based on the six IPCC land use categories.
                <br />
                <br />
                First You need to specify the land use types of the areas that
                will change when the plan or the policy in concern is implemented.
                GIS tools and databases such as Corine Land Cover and European
                soil database can be applied to define the land use categories and
                their surface areas.
                <br />
                <br />
                Find the relevant land-use changes in the tables below. Then
                insert three values per each change to calculate the impact: total
                land area converted from one category to another in hectares, and
                the shares of mineral and organic soils within this land area.
                Other rows and tables can be left empty.
                <br />
                <br />
                All built environment belongs to the category settlement.
              </Alert>
            </div>
            <section>
              <form id="from_landusechange_type">
                <div className="luc_row">
                <div className="tbl-container">
                  <div className="">
                  <input
                      className="checkbox_luc"
                      type="checkbox"
                      id="luc_tf"
                      checked={lucToForest}
                      defaultValue={lucToForest}
                      onClick={handleLucToForest}
                    />
                    <label htmlFor="local_electricity">
                      Land-Use Change to Forest Land
                    </label>
                  </div>
                  {lucToForest && (
                    <>
                    <table className="toForest tbl">
                      <thead>
                        <tr>
                          <th className="row-title">Land-Use Change</th>
                          <th>Total area, ha</th>
                          <th>Soil area (mineral), ha</th>
                          <th>Soil area (organic), ha</th>
                          <Tooltip title="Select the year when the land-use change is expected to happen.">
                            <th>Year of implementation</th>
                          </Tooltip>
                        </tr>
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
                    </>
                  )}
                </div>


                  <div className="tbl-container">
                    <div className="">
                      <input
                          className="checkbox_luc"
                          type="checkbox"
                          id="luc_tc"
                          checked={lucToCrop}
                          defaultValue={lucToCrop}
                          onClick={handleLucToCrop}
                      />
                    <label htmlFor="local_electricity">
                    Land-Use Change to Crop Land
                    </label>
                  </div>
                    {lucToCrop && (
                      <>
                    <table className="toCrop tbl">
                      <thead>
                        <tr>
                          <th className="row-title">Land-Use Change</th>
                          <th>Total area, ha</th>
                          <th>Soil area (mineral), ha</th>
                          <th>Soil area (organic), ha</th>
                          <Tooltip title="Select the year when the land-use change is expected to happen.">
                            <th>Year of implementation</th>
                          </Tooltip>
                        </tr>
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
                    </>
                    )}
                  </div>
                </div>

                <div className="luc_row">
                  <div className="tbl-container">
                    <div className="">
                      <input
                        className="checkbox_luc"
                        type="checkbox"
                        id="luc_"
                        checked={lucToGrass}
                        defaultValue={lucToGrass}
                        onClick={handleLucToGrass}
                        />
                      <label htmlFor="local_electricity">
                        Land-Use Change to Grassland
                      </label>
                    </div>
                    {lucToGrass && (
                      <>
                    <table className="toGrass tbl">
                      <thead>
                        <tr>
                          <th className="row-title">Land-Use Change</th>
                          <th>Total area, ha</th>
                          <th>Soil area (mineral), ha</th>
                          <th>Soil area (organic), ha</th>
                          <Tooltip title="Select the year when the land-use change is expected to happen.">
                            <th>Year of implementation</th>
                          </Tooltip>
                        </tr>
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
                      </>
                    )}
                  </div>

                  <div className="tbl-container">
                    <div className="">
                      <input
                          className="checkbox_luc"
                          type="checkbox"
                          id="luc_"
                          checked={lucToWet}
                          defaultValue={lucToWet}
                          onClick={handleLucToWet}
                      />
                      <label htmlFor="local_electricity">
                        Land-Use Change to Wetland
                      </label>
                    </div>
                    {lucToWet && (
                      <>
                    <table className="toWet tbl">
                      <thead>
                        <tr>
                          <th className="row-title">Land-Use Change</th>
                          <th>Total area, ha</th>
                          <th>Soil area (mineral), ha</th>
                          <th>Soil area (organic), ha</th>
                          <Tooltip title="Select the year when the land-use change is expected to happen.">
                            <th>Year of implementation</th>
                          </Tooltip>
                        </tr>
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
                    </>
                    )}
                  </div>
                </div>

                <div className="luc_row">
                  <div className="tbl-container">
                    <div className="">
                      <input
                        className="checkbox_luc"
                        type="checkbox"
                        id="luc_"
                        checked={lucToSettlements}
                        defaultValue={lucToSettlements}
                        onClick={handleLucToSettlements}
                      />
                      <label htmlFor="local_electricity">
                        Land-Use Change to Settlements
                      </label>
                    </div>
                  {lucToSettlements && (
                      <>
                    <table className="toSettlements tbl">
                      <thead>
                        <tr>
                          <th className="row-title">Land-Use Change</th>
                          <th>Total area, ha</th>
                          <th>Soil area (mineral), ha</th>
                          <th>Soil area (organic), ha</th>
                          <Tooltip title="Select the year when the land-use change is expected to happen.">
                            <th>Year of implementation</th>
                          </Tooltip>
                        </tr>
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
                    </>
                  )}
                  </div>

                  <div className="tbl-container">
                    <div className="">
                      <input
                            className="checkbox_luc"
                            type="checkbox"
                            id="luc_"
                            checked={lucToOther}
                            defaultValue={lucToOther}
                            onClick={handleLucToOther}
                      />
                      <label htmlFor="local_electricity">
                        Land-Use Change to Other Land
                      </label>
                    </div>
                    {lucToOther && (
                      <>
                        <table className="toOther tbl">
                          <thead>
                            <tr>
                              <th className="row-title">Land-Use Change</th>
                              <th>Total area, ha</th>
                              <th>Soil area (mineral), ha</th>
                              <th>Soil area (organic), ha</th>
                              <Tooltip title="Select the year when the land-use change is expected to happen.">
                                <th>Year of implementation</th>
                              </Tooltip>
                            </tr>
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
                      </>
                    )}
                  </div>
                </div>

                <div className="luc_row">
                  <table className="table-totals">
                    <thead>
                      <tr>
                        <Tooltip title="Definitions of the national land-use categories can be found in National Inventory Reports (NIR) created for the annual greenhouse gas inventories.">
                          <th className="row-title">Land-Use Change</th>
                        </Tooltip>
                        <th>Total area, ha</th>
                        <th>Soil area (mineral), ha</th>
                        <th>Soil area (organic), ha</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="row-title">Total area (ha)</td>
                        <td>
                          <input
                            className="table-cell total-cell"
                            type="number"
                            id="totalArea"
                            value={totalArea_}
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell total-cell"
                            type="number"
                            id="totalMineral"
                            value={totalMineral}
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell total-cell"
                            type="number"
                            id="totalOrganic"
                            value={totalOrganic}
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell btn-luc-submit"
                            type="button"
                            id="btn"
                            value="Calculate and save emissions"
                            onClick={setLandUseChangeChart}
                            primary
                          />
                        </td>
                        <td>
                          <input
                            className="table-cell btn-luc-reset"
                            type="button"
                            id="btn-reset"
                            value="Reset"
                            onClick={handleResetValues}
                            secondary
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="nextU1Button">
                  {Object.keys(landUseChangeResponse).length !== 0 && (<Button
                    id="btn-next"
                    size="small"
                    type="submit"
                    value="Submit"
                    onClick={goToLandUseChangeBaseline}
                    label="Next &raquo;"
                    primary="true"
                  />
                  )}
                  <CircularProgress label="loading" style={loadingStyles} />
                </div>
              </form>
            </section>
          </div>
        </article>
      </div>
    );
  } else {
    return (
      <LUCBarChart landUseChangeResponse={landUseChangeResponse} year={year} />
    );
  }
};
