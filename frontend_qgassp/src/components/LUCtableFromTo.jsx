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

export const LUCtableFromTo = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  country,
  year,
  population,
}) => {
  // int or float
  const [fromForestLand, setFromForestLand] = useState(0);
  const [fromCropLand, setFromCropLand] = useState(0);
  const [fromGrassLand, setFromGrassLand] = useState(0);
  const [fromWetLand, setFromWetLand] = useState(0);
  const [fromSettlements, setFromSettlements] = useState(0);
  const [fromOtherLand, setFromOtherLand] = useState(0);
  const [toForestLand, setToForestLand] = useState(0);
  const [toCropLand, setToCropLand] = useState(0);
  const [toGrassLand, setToGrassLand] = useState(0);
  const [toWetLand, setToWetLand] = useState(0);
  const [toSettlements, setToSettlements] = useState(0);
  const [toOtherLand, setToOtherLand] = useState(0);
  const [startYear, setStartYear] = useState(2022);
  const [LUCbaseline, setLUCbaseline] = useState(false);
  const navigate = useNavigate();

  const handleFromForestLand = (e) => {
    setFromForestLand(parseFloat(e.target.value));
  };
  const handleFromCropLand = (e) => {
    setFromCropLand(parseFloat(e.target.value));
  };
  const handleFromGrassLand = (e) => {
    setFromGrassLand(parseFloat(e.target.value));
  };
  const handleFromOtherLand = (e) => {
    setFromOtherLand(parseFloat(e.target.value));
  };
  const handleFromWetLand = (e) => {
    setFromWetLand(parseFloat(e.target.value));
  };
  const handleFromSettlementsLand = (e) => {
    setFromSettlements(parseFloat(e.target.value));
  };
  const handleToForestLand = (e) => {
    setToForestLand(parseFloat(e.target.value));
  };
  const handleToCropLand = (e) => {
    setToCropLand(parseFloat(e.target.value));
  };
  const handleToGrassLand = (e) => {
    setToGrassLand(parseFloat(e.target.value));
  };
  const handleToOtherLand = (e) => {
    setToOtherLand(parseFloat(e.target.value));
  };
  const handleToWetLand = (e) => {
    setToWetLand(parseFloat(e.target.value));
  };
  const handleToSettlementsLand = (e) => {
    setToSettlements(parseFloat(e.target.value));
  };
  const handleStartYear = (e) => {
    setStartYear(Number(e.target.value));
  };

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
          <div className="settlement_main">
            <section>
              <form id="from_landusechange_type" onSubmit={setLandUseChange}>
                {/* <div className="settlement_headers">
                      <label className="settle_label">
                        <b>U1.1 Settlement type </b>
                      </label>
                      <label className="settle_label">
                        <b>Share (%)</b>{" "}
                      </label>
                    </div> */}

                <table>
                  <thead>
                    <th className="row-title">Land Use Change (ha)</th>
                    <th>To Forest Land</th>
                    <th>To Cropland</th>
                    <th>To Grassland</th>
                    <th>To Wetlands</th>
                    <th>To Settlements</th>
                    <th>To Other Land</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="row-title">From Forest Land</td>
                      <td>
                        <input
                          className="table-cell"
                          type="text"
                          placeholder="no change"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="forestToCrop"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="forestToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="forestToWetland"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="forestToSettlemets"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="forestToOtherland"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="row-title">From Cropland</td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToforest"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="text"
                          placeholder="no change"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="row-title">From Grassland</td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="text"
                          placeholder="no change"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="row-title">From Wetland</td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="text"
                          placeholder="no change"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="row-title">From Settlements</td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="text"
                          placeholder="empty"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="text"
                          placeholder="no change"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="row-title">From Other land</td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="text"
                          placeholder="empty"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="number"
                          step="1"
                          id="cropToGrass"
                          min="0"
                          // value={metropolitanCenter}
                          // onChange={handleMetropolitanCenter}
                          required
                        />
                      </td>
                      <td>
                        <input
                          className="table-cell"
                          type="text"
                          placeholder="no change"
                          disabled
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div>
                  <label
                    htmlFor="landToPeatExtraction"
                    className="settle_label"
                  >
                    Land Converted to Peat Extraction (combined)
                  </label>
                  <input
                    className="inp"
                    type="number"
                    step="0.1"
                    id="ladnConvertedToPeat"
                    min="0"
                    // value={metropolitanCenter}
                    // onChange={handleMetropolitanCenter}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="landToPeatExtraction"
                    className="settle_label"
                  >
                    Peatland restoration (rewriting)
                  </label>
                  <input
                    className="inp"
                    type="number"
                    step="1"
                    id="peatlandRestore"
                    min="0"
                    // value={metropolitanCenter}
                    // onChange={handleMetropolitanCenter}
                    required
                  />
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
      <LUCBaseline country={country} year={year} population={population} />
    );
  }
};

LUCtableFromTo.propTypes = {
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

LUCtableFromTo.defaultProps = {
  user: null,
};
