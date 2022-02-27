import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Button } from "./Button";
import { LUCBaseline } from "./LUCBaseline";
import "../css/landusechange.css";
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
    population
  }) => {
    // to Forest vars
    // #region 
    const [cropToForest, setCropToForest] = useState(0);
    const [cropToForestMineral, setCropToForestMineral] = useState(0);
    const [cropToForestOrganic, setCropToForestOrganic] = useState(0);
    const [cropToForestYear, setCropToForestYear] = useState(2022);

    const [grassToForest, setGrassToForest] = useState(0);
    const [grassToForestMineral, setGrassToForestMineral] = useState(0);
    const [grassToForestOrganic, setGrassToForestOrganic] = useState(0);
    const [grassToForestYear, setGrassToForestYear] = useState(2022);


    const [wetToForest, setWetToForest] = useState(0);
    const [wetToForestMineral, setWetToForestMineral] = useState(0);
    const [wetToForestOrganic, setWetToForestOrganic] = useState(0);
    const [wetToForestYear, setWetToForestYear] = useState(2022);

    const [settlementsToForest, setSettlementsToForest] = useState(0);
    const [settlementsToForestMineral, setSettlementsToForestMineral] = useState(0);
    const [settlementsToForestOrganic, setSettlementsToForestOrganic] = useState(0);
    const [settlementsToForestYear, setSettlementsToForestYear] = useState(2022);


    const [otherToForest, setOtherToForest] = useState(0);
    const [otherToForestMineral, setOtherToForestMineral] = useState(0);
    const [otherToForestOrganic, setOtherToForestOrganic] = useState(0);
    const [otherToForestYear, setOtherToForestYear] = useState(2022);
    // #endregion

    // to Crop vars
    // #region 
    const [forestToCrop, setForestToCrop] = useState(0);
    const [forestToCropMineral, setForestToCropMineral] = useState(0);
    const [forestToCropOrganic, setForestToCropOrganic] = useState(0);
    const [forestToCropYear, setForestToCropYear] = useState(2022);

    const [grassToCrop, setGrassToCrop] = useState(0);
    const [grassToCropMineral, setGrassToCropMineral] = useState(0);
    const [grassToCropOrganic, setGrassToCropOrganic] = useState(0);
    const [grassToCropYear, setGrassToCropYear] = useState(2022);

    const [wetToCrop, setWetToCrop] = useState(0);
    const [wetToCropMineral, setWetToCropMineral] = useState(0);
    const [wetToCropOrganic, setWetToCropOrganic] = useState(0);
    const [wetToCropYear, setWetToCropYear] = useState(2022);

    const [settlementsToCrop, setSettlementsToCrop] = useState(0);
    const [settlementsToCropMineral, setSettlementsToCropMineral] = useState(0);
    const [settlementsToCropOrganic, setSettlementsToCropOrganic] = useState(0);
    const [settlementsToCropYear, setSettlementsToCropYear] = useState(2022);

    const [otherToCrop, setOtherToCrop] = useState(0);
    const [otherToCropMineral, setOtherToCropMineral] = useState(0);
    const [otherToCropOrganic, setOtherToCropOrganic] = useState(0);
    const [otherToCropYear, setOtherToCropYear] = useState(2022);
    // #endregion

    // to Grass vars
    // #region 
    const [forestToGrass, setForestToGrass] = useState(0);
    const [forestToGrassMineral, setForestToGrassMineral] = useState(0);
    const [forestToGrassOrganic, setForestToGrassOrganic] = useState(0);
    const [forestToGrassYear, setForestToGrassYear] = useState(2022);

    const [cropToGrass, setCropToGrass] = useState(0);
    const [cropToGrassMineral, setCropToGrassMineral] = useState(0);
    const [cropToGrassOrganic, setCropToGrassOrganic] = useState(0);
    const [cropToGrassYear, setCropToGrassYear] = useState(2022);

    const [wetToGrass, setWetToGrass] = useState(0);
    const [wetToGrassMineral, setWetToGrassMineral] = useState(0);
    const [wetToGrassOrganic, setWetToGrassOrganic] = useState(0);
    const [wetToGrassYear, setWetToGrassYear] = useState(2022);

    const [settlementsToGrass, setSettlementsToGrass] = useState(0);
    const [settlementsToGrassMineral, setSettlementsToGrassMineral] = useState(0);
    const [settlementsToGrassOrganic, setSettlementsToGrassOrganic] = useState(0);
    const [settlementsToGrassYear, setSettlementsToGrassYear] = useState(2022);

    const [otherToGrass, setOtherToGrass] = useState(0);
    const [otherToGrassMineral, setOtherToGrassMineral] = useState(0);
    const [otherToGrassOrganic, setOtherToGrassOrganic] = useState(0);
    const [otherToGrassYear, setOtherToGrassYear] = useState(2022);
    // #endregion
    
     // to other wetlands/flooded land vars
     // #region 
     const [landConvertedToPeat, setLandConvertedToPeat] = useState(0);
     const [landConvertedToPeatMineral, setLandConvertedToPeatMineral] = useState(0);
     const [landConvertedToPeatOrganic, setLandConvertedToPeatOrganic] = useState(0);
     const [landConvertedToPeatYear, setLandConvertedToPeatYear] = useState(2022);

     const [peatLandRestore, setPeatLandRestore] = useState(0);
     const [peatLandRestoreMineral, setPeatLandRestoreMineral] = useState(0);
     const [peatLandRestoreOrganic, setPeatLandRestoreOrganic] = useState(0);
     const [peatLandRestoreYear, setPeatLandRestoreYear] = useState(2022);

     const [forestToWetland, setForestToWetland] = useState(0);
     const [forestToWetlandMineral, setForestToWetlandMineral] = useState(0);
     const [forestToWetlandOrganic, setForestToWetlandOrganic] = useState(0);
     const [forestToWetlandYear, setForestToWetlandYear] = useState(2022);

     const [cropToWet, setCropToWet] = useState(0);
     const [cropToWetMineral, setCropToWetMineral] = useState(0);
     const [cropToWetOrganic, setCropToWetOrganic] = useState(0);
     const [cropToWetYear, setCropToWetYear] = useState(2022);

     const [grassToWet, setGrassToWet] = useState(0);
     const [grassToWetMineral, setGrassToWetMineral] = useState(0);
     const [grassToWetOrganic, setGrassToWetOrganic] = useState(0);
     const [grassToWetYear, setGrassToWetYear] = useState(2022);
    // #endregion

    // to Settlements vars
    // #region 
    const [forestToSettlements, setForestToSettlements] = useState(0);
    const [cropToSettlements, setCropToSettlements] = useState(0);
    const [grassToSettlements, setGrassToSettlements] = useState(0);
    const [wetToSettlements, setWetToSettlements] = useState(0);
    const [otherToSettlements, setOtherToSettlements] = useState(0);
    // #endregion

    // to other land vars
    // #region 
    const [forestToOther, setForestToOther] = useState(0);
    const [cropToOther, setCropToOther] = useState(0);
    const [grassToOther, setGrassToOther] = useState(0);
    const [wetToOther, setWetToOther] = useState(0);
    const [settlementsToOther, setSettlementsToOther] = useState(0);
    // #endregion

    const [totalArea, setTotalArea] = useState(0); // add values
    const [totalMineral, setTotalMineral] = useState(0); // add values
    const [totalOrganic, setTotalOrganic] = useState(0); // add values
    const [LUCbaseline, setLUCbaseline] = useState(false);
    const navigate = useNavigate();

    const options = [];
    for (let i = 2022; i < 2051; i++) options.push(i);

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
    

    // functions for baseline generation
    const setLandUseChange = () => {
        // ?
        setLUCbaseline(true);
    };

    if (LUCbaseline === false) {
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
                  <form id="from_landusechange_type" onSubmit={setLandUseChange}>                   
                    <div className="row">
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
                                  <td className="row-title">
                                      Cropland to Forest Land
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToForest"
                                          min="0"
                                          value={cropToForest}
                                          onChange={handleCropToForest}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToForestMineral"
                                          min="0"
                                          value={cropToForestMineral}
                                          onChange={handleCropToForestMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToForestOrganic"
                                          min="0"
                                          value={cropToForestOrganic}
                                          onChange={handleCropToForestOrganic}
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
                                  <td className="row-title">
                                      Grassland to Forest Land
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToForest"
                                          min="0"
                                          value={grassToForest}
                                          onChange={handleGrassToForest}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToForestMineral"
                                          min="0"
                                          value={grassToForestMineral}
                                          onChange={handleGrassToForestMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToForestOrganic"
                                          min="0"
                                          value={grassToForestOrganic}
                                          onChange={handleGrassToForestOrganic}
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
                                  <td className="row-title">
                                      Wetlands to Forest Land
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToForest"
                                          min="0"
                                          value={wetToForest}
                                          onChange={handleWetToForest}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToForestMineral"
                                          min="0"
                                          value={wetToForestMineral}
                                          onChange={handleWetToForestMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToForestOrganic"
                                          min="0"
                                          value={wetToForestOrganic}
                                          onChange={handleWetToForestOrganic}
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
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToForest"
                                          min="0"
                                          value={settlementsToForest}
                                          onChange={handleSettlementsToForest}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToForestMineral"
                                          min="0"
                                          value={settlementsToForestMineral}
                                          onChange={handleSettlementsToForestMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToForestOrganic"
                                          min="0"
                                          value={settlementsToForestOrganic}
                                          onChange={handleSettlementsToForestOrganic}
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
                                      Other land to Forest Land
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToForest"
                                          min="0"
                                          value={otherToForest}
                                          onChange={handleOtherToForest}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToForestMineral"
                                          min="0"
                                          value={otherToForestMineral}
                                          onChange={handleOtherToForestMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToForestOrganic"
                                          min="0"
                                          value={otherToForestOrganic}
                                          onChange={handleOtherToForestOrganic}
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
                                  <td className="row-title">
                                      Forest Land to Cropland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="forestToCrop"
                                          min="0"
                                          value={forestToCrop}
                                          onChange={handleForestToCrop}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="forestToCropMineral"
                                          min="0"
                                          value={forestToCropMineral}
                                          onChange={handleForestToCropMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="forestToCropOrganic"
                                          min="0"
                                          value={forestToCropOrganic}
                                          onChange={handleForestToCropOrganic}
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
                                      Grassland to Cropland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToCrop"
                                          min="0"
                                          value={grassToCrop}
                                          onChange={handleGrassToCrop}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToCropMineral"
                                          min="0"
                                          value={grassToCropMineral}
                                          onChange={handleGrassToCropMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToCropOrganic"
                                          min="0"
                                          value={grassToCropOrganic}
                                          onChange={handleGrassToCropOrganic}
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
                                  <td className="row-title">
                                      Wetlands to Cropland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToCrop"
                                          min="0"
                                          value={wetToCrop}
                                          onChange={handleWetToCrop}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToCropMineral"
                                          min="0"
                                          value={wetToCropMineral}
                                          onChange={handleWetToCropMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToCropOrganic"
                                          min="0"
                                          value={wetToCropOrganic}
                                          onChange={handleWetToCropOrganic}
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
                                  <td className="row-title">
                                      Settlements to Cropland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToCrop"
                                          min="0"
                                          value={settlementsToCrop}
                                          onChange={handleSettlementsToCrop}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToCropMineral"
                                          min="0"
                                          value={settlementsToCropMineral}
                                          onChange={handleSettlementsToCropMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToCropOrganic"
                                          min="0"
                                          value={settlementsToCropOrganic}
                                          onChange={handleSettlementsToCropOrganic}
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
                                  <td className="row-title">
                                      Other land to Cropland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToCrop"
                                          min="0"
                                          value={otherToCrop}
                                          onChange={handleOtherToCrop}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToCropMineral"
                                          min="0"
                                          value={otherToCropMineral}
                                          onChange={handleOtherToCropMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToCropOrganic"
                                          min="0"
                                          value={otherToCropOrganic}
                                          onChange={handleOtherToCropOrganic}
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

                    <div className="row">
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
                                  <td className="row-title">
                                      Forest Land to GrassLand
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="forestToGrass"
                                          min="0"
                                          value={forestToGrass}
                                          onChange={handleForestToGrass}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="forestToGrassMineral"
                                          min="0"
                                          value={forestToGrassMineral}
                                          onChange={handleForestToGrassMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="forestToGrassOrganic"
                                          min="0"
                                          value={forestToGrassOrganic}
                                          onChange={handleForestToGrassOrganic}
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
                                  <td className="row-title">
                                      Cropland to Grassland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToGrass"
                                          min="0"
                                          value={cropToGrass}
                                          onChange={handleCropToGrass}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToGrassMineral"
                                          min="0"
                                          value={cropToGrassMineral}
                                          onChange={handleCropToGrassMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToGrassOrganic"
                                          min="0"
                                          value={cropToGrassOrganic}
                                          onChange={handleCropToGrassOrganic}
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
                                  <td className="row-title">
                                      Wetlands to Grassland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToGrass"
                                          min="0"
                                          value={wetToGrass}
                                          onChange={handleWetToGrass}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToGrassMineral"
                                          min="0"
                                          value={wetToGrassMineral}
                                          onChange={handleWetToGrassMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToGrassOrganic"
                                          min="0"
                                          value={wetToGrassOrganic}
                                          onChange={handleWetToGrassOrganic}
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
                                  <td className="row-title">
                                      Settlements to Grassland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToGrass"
                                          min="0"
                                          value={settlementsToGrass}
                                          onChange={handleSettlementsToGrass}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToGrassMineral"
                                          min="0"
                                          value={settlementsToGrassMineral}
                                          onChange={handleSettlementsToGrassMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToGrassOrganic"
                                          min="0"
                                          value={settlementsToGrassOrganic}
                                          onChange={handleSettlementsToGrassOrganic}
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
                                  <td className="row-title">
                                      Other land to Grassland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToGrass"
                                          min="0"
                                          value={otherToGrass}
                                          onChange={handleOtherToGrass}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToCropMineral"
                                          min="0"
                                          value={otherToGrassMineral}
                                          onChange={handleOtherToGrassMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToCropOrganic"
                                          min="0"
                                          value={otherToGrassOrganic}
                                          onChange={handleOtherToGrassOrganic}
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
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="landConvertedToPeat"
                                          min="0"
                                          value={landConvertedToPeat}
                                          onChange={handleLandConvertedToPeat}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="landConvertedToPeatMineral"
                                          min="0"
                                          value={landConvertedToPeatMineral}
                                          onChange={handleLandConvertedToPeatMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="landConvertedToPeatOrganic"
                                          min="0"
                                          value={forestToGrassOrganic}
                                          onChange={handleLandConvertedToPeatOrganic}
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
                                      Peatland restoration (rewriting)
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="peatLandRestore"
                                          min="0"
                                          value={peatLandRestore}
                                          onChange={handlePeatLandRestore}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="peatLandRestoreMineral"
                                          min="0"
                                          value={peatLandRestoreMineral}
                                          onChange={handlePeatLandRestoreMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="peatLandRestoreOrganic"
                                          min="0"
                                          value={peatLandRestoreOrganic}
                                          onChange={handlePeatLandRestoreOrganic}
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
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="forestToWetland"
                                          min="0"
                                          value={forestToWetland}
                                          onChange={handleForestToWetland}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="forestToWetlandMineral"
                                          min="0"
                                          value={forestToWetlandMineral}
                                          onChange={handleForestToWetlandMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToGrassOrganic"
                                          min="0"
                                          value={forestToWetlandOrganic}
                                          onChange={handleForestToWetlandOrganic}
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
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToWet"
                                          min="0"
                                          value={cropToWet}
                                          onChange={handleCropToWet}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToWetMineral"
                                          min="0"
                                          value={cropToWetMineral}
                                          onChange={handleCropToWetMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToWetOrganic"
                                          min="0"
                                          value={cropToWetOrganic}
                                          onChange={handleCropToWetOrganic}
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
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToWet"
                                          min="0"
                                          value={grassToWet}
                                          onChange={handleGrassToWet}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToWetMineral"
                                          min="0"
                                          value={grassToWetMineral}
                                          onChange={handleGrassToWetMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToWetOrganic"
                                          min="0"
                                          value={grassToWetOrganic}
                                          onChange={handleGrassToWetOrganic}
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
          <LUCBaseline
            country={country}
            year={year}
            population={population}
                    
          />
        );
      }
  };

  

  LandUseChangeTableForm.propTypes = {
    population: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    user: PropTypes.shape({}),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired,
  };
  
  LandUseChangeTableForm.defaultProps = {
    user: null,
  };