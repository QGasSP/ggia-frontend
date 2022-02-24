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
      // add 3 vars (mineral, organic) to each var
      // to Forest
    const [cropToForest, setCropToForest] = useState(0);
    const [cropToForestMineral, setCropToForestMineral] = useState(0);
    const [cropToForestOrganic, setCropToForestOrganic] = useState(0);
    const [cropToForestYear, setCropToForestYear] = useState(2022);

    const [grassToForest, setGrassToForest] = useState(0);
    const [grassToForestMineral, setGrassToForestMineral] = useState(0);
    const [grassToForestOrganic, setGrassToForestOrganic] = useState(0);

    const [wetToForest, setWetToForest] = useState(0);
    const [wetToForestMineral, setWetToForestMineral] = useState(0);
    const [wetToForestOrganic, setWetToForestOrganic] = useState(0);

    const [settlementsToForest, setSettlementsToForest] = useState(0);
    const [settlementsToForestMineral, setSettlementsToForestMineral] = useState(0);
    const [settlementsToForestOrganic, setSettlementsToForestOrganic] = useState(0);

    const [otherToForest, setOtherToForest] = useState(0);
    const [otherToForestMineral, setOtherToForestMineral] = useState(0);
    const [otherToForestOrganic, setOtherToForestOrganic] = useState(0);

      // to Crop
    const [forestToCrop, setForestToCrop] = useState(0);
    const [grassToCrop, setGrassToCrop] = useState(0);
    const [wetToCrop, setWetToCrop] = useState(0);
    const [settlementsToCrop, setSettlementsToCrop] = useState(0);
    const [otherToCrop, setotherToCrop] = useState(0);
    
     // to Grass
    const [forestToGrass, setForestToGrass] = useState(0);
    const [cropToGrass, setCropToGrass] = useState(0);
    const [wetToGrass, setWetToGrass] = useState(0);
    const [settlementsToGrass, setSettlementsToGrass] = useState(0);
    const [otherToGrass, setOtherToGrass] = useState(0);

     // to other wetlands/flooded land
     const [ladnConvertedToPeat, setLadnConvertedToPeat] = useState(0);
     const [peatLandRestore, setPeatLandRestore] = useState(0);
     const [forestToWetland, setForestToWetland] = useState(0);
     const [cropToWet, setCropToWet] = useState(0);
     const [grassToWet, setGrassToWet] = useState(0);

     // to Settlements
    const [forestToSettlements, setForestToSettlements] = useState(0);
    const [cropToSettlements, setCropToSettlements] = useState(0);
    const [grassToSettlements, setGrassToSettlements] = useState(0);
    const [wetToSettlements, setWetToSettlements] = useState(0);
    const [otherToSettlements, setOtherToSettlements] = useState(0);

     // to other land
    // const [forestToOther, setForestToOther] = useState(0);
    const [cropToOther, setCropToOther] = useState(0);
    const [grassToOther, setGrassToOther] = useState(0);
    const [wetToOther, setWetToOther] = useState(0);
    const [settlementsToOther, setSettlementsToOther] = useState(0);
    

    const [startYear, setStartYear] = useState(2022);
    const [totalArea, setTotalArea] = useState(0); // add values
    const [totalMineral, setTotalMineral] = useState(0); // add values
    const [totalOrganic, setTotalOrganic] = useState(0); // add values
    const [LUCbaseline, setLUCbaseline] = useState(false);
    const navigate = useNavigate();

    // toForest handlers
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

    // to Crop handlers


   
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
                  <Chip label="U4 LAND USE CHANGE" />
                </Divider>
              </div>
              <div className="luc_main">
                <section>
                  <form id="from_landusechange_type" onSubmit={setLandUseChange}>                   
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
                                  <select id="cropToForestYear" className="table-cell">
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
                                    <option value="2034">2034</option>
                                    <option value="2035">2035</option>
                                    <option value="2036">2036</option>
                                    <option value="2037">2037</option>
                                    <option value="2038">2038</option>
                                    <option value="2039">2039</option>
                                    <option value="2040">2040</option>
                                    <option value="2041">2041</option>
                                    <option value="2042">2042</option>
                                    <option value="2043">2043</option>
                                    <option value="2044">2044</option>
                                    <option value="2045">2045</option>
                                    <option value="2046">2046</option>
                                    <option value="2047">2047</option>
                                    <option value="2048">2048</option>
                                    <option value="2049">2049</option>
                                    <option value="2050">2050</option>
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
                                  <select id="grassToForestYear" className="table-cell">
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
                                    <option value="2034">2034</option>
                                    <option value="2035">2035</option>
                                    <option value="2036">2036</option>
                                    <option value="2037">2037</option>
                                    <option value="2038">2038</option>
                                    <option value="2039">2039</option>
                                    <option value="2040">2040</option>
                                    <option value="2041">2041</option>
                                    <option value="2042">2042</option>
                                    <option value="2043">2043</option>
                                    <option value="2044">2044</option>
                                    <option value="2045">2045</option>
                                    <option value="2046">2046</option>
                                    <option value="2047">2047</option>
                                    <option value="2048">2048</option>
                                    <option value="2049">2049</option>
                                    <option value="2050">2050</option>
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
                                  <select id="wetToForestYear" className="table-cell">
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
                                    <option value="2034">2034</option>
                                    <option value="2035">2035</option>
                                    <option value="2036">2036</option>
                                    <option value="2037">2037</option>
                                    <option value="2038">2038</option>
                                    <option value="2039">2039</option>
                                    <option value="2040">2040</option>
                                    <option value="2041">2041</option>
                                    <option value="2042">2042</option>
                                    <option value="2043">2043</option>
                                    <option value="2044">2044</option>
                                    <option value="2045">2045</option>
                                    <option value="2046">2046</option>
                                    <option value="2047">2047</option>
                                    <option value="2048">2048</option>
                                    <option value="2049">2049</option>
                                    <option value="2050">2050</option>
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
                                  <select id="settlementsToForestYear" className="table-cell">
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
                                    <option value="2034">2034</option>
                                    <option value="2035">2035</option>
                                    <option value="2036">2036</option>
                                    <option value="2037">2037</option>
                                    <option value="2038">2038</option>
                                    <option value="2039">2039</option>
                                    <option value="2040">2040</option>
                                    <option value="2041">2041</option>
                                    <option value="2042">2042</option>
                                    <option value="2043">2043</option>
                                    <option value="2044">2044</option>
                                    <option value="2045">2045</option>
                                    <option value="2046">2046</option>
                                    <option value="2047">2047</option>
                                    <option value="2048">2048</option>
                                    <option value="2049">2049</option>
                                    <option value="2050">2050</option>
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
                                  <select id="otherToForestYear" className="table-cell">
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
                                    <option value="2034">2034</option>
                                    <option value="2035">2035</option>
                                    <option value="2036">2036</option>
                                    <option value="2037">2037</option>
                                    <option value="2038">2038</option>
                                    <option value="2039">2039</option>
                                    <option value="2040">2040</option>
                                    <option value="2041">2041</option>
                                    <option value="2042">2042</option>
                                    <option value="2043">2043</option>
                                    <option value="2044">2044</option>
                                    <option value="2045">2045</option>
                                    <option value="2046">2046</option>
                                    <option value="2047">2047</option>
                                    <option value="2048">2048</option>
                                    <option value="2049">2049</option>
                                    <option value="2050">2050</option>
                                  </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
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