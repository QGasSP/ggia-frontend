import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Button } from "./Button";
import "../css/u1planner.css";
import { U4landuse } from "./U4landuse";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

/**
 * U4 Land Use baseline user input form
 * @return {}
 */

export const LandUse = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  country,
  year,
  population,
}) => {
  const [settlements, setSettlements] = useState(() => {
    const savedSettlements = window.localStorage.getItem("settlements");
    return savedSettlements !== null
      ? JSON.parse(savedSettlements)
      : parseFloat(0);
  });
  const [cropLand, setCropLand] = useState(() => {
    const savedCropLand = window.localStorage.getItem("cropLand");
    return savedCropLand !== null ? JSON.parse(savedCropLand) : parseFloat(0);
  });
  const [grassLand, setGrassLand] = useState(() => {
    const savedGrassLand = window.localStorage.getItem("grassLand");
    return savedGrassLand !== null ? JSON.parse(savedGrassLand) : parseFloat(0);
  });
  const [forestLand, setForestLand] = useState(() => {
    const savedForestLand = window.localStorage.getItem("forestLand");
    return savedForestLand !== null
      ? JSON.parse(savedForestLand)
      : parseFloat(0);
  });
  const [wetLand, setwetLand] = useState(() => {
    const savedWetLand = window.localStorage.getItem("wetLand");
    return savedWetLand !== null ? JSON.parse(savedWetLand) : parseFloat(0);
  });
  const [otherLand, setOtherLand] = useState(() => {
    const savedOtherLand = window.localStorage.getItem("otherLand");
    return savedOtherLand !== null ? JSON.parse(savedOtherLand) : parseFloat(0);
  });

  // CHANGE PARAMS
  useEffect(() => {
    localStorage.setItem("settlements", settlements);
  }, [settlements]);

  useEffect(() => {
    localStorage.setItem("cropLand", cropLand);
  }, [cropLand]);

  useEffect(() => {
    localStorage.setItem("grassLand", grassLand);
  }, [grassLand]);

  useEffect(() => {
    localStorage.setItem("forestLand", forestLand);
  }, [forestLand]);

  useEffect(() => {
    localStorage.setItem("wetLand", wetLand);
  }, [wetLand]);

  useEffect(() => {
    localStorage.setItem("otherLand", otherLand);
  }, [otherLand]);

  // CHANGE PARAMS
  const [total, setTotal] = useState(
    settlements + cropLand + grassLand + forestLand + wetLand + otherLand
  );
  // ?
  const [nextEmissions, setNextEmissions] = useState(false);

  const navigate = useNavigate();

  // RENAME FUNCTIONS ACCORDING TO PARAMS
  const handleSettlements = (e) => {
    e.preventDefault();
    setSettlements(parseFloat(e.target.value));
  };
  const handleCropLand = (e) => {
    e.preventDefault();
    setCropLand(parseFloat(e.target.value));
  };
  const handleGrassLand = (e) => {
    e.preventDefault();
    setGrassLand(parseFloat(e.target.value));
  };
  const handleForestLand = (e) => {
    e.preventDefault();
    setForestLand(parseFloat(e.target.value));
  };
  const handleWetLand = (e) => {
    e.preventDefault();
    setwetLand(parseFloat(e.target.value));
  };
  const handleOtherLand = (e) => {
    e.preventDefault();
    setOtherLand(parseFloat(e.target.value));
  };

  // Correct naming?
  const setLandUseChange = () => {
    setTotal(
      settlements + cropLand + grassLand + forestLand + wetLand + otherLand
    );
    setNextEmissions(true);
  };

  if (nextEmissions === false) {
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
              <Chip label="U4 LAND USE CHANGE INPUT: BASELINE" />
            </Divider>
          </div>
          <div className="settlement_main">
            <section>
              <form id="form_settlement_type" onSubmit={setLandUseChange}>
                <div className="settlement_headers">
                  <label className="settle_label">
                    <b>U4.1 Land Use Change</b>
                  </label>
                  <label className="settle_label">
                    <b>Land area (ha)</b>{" "}
                  </label>
                </div>

                <div>
                  <label htmlFor="settlements" className="settle_label">
                    Settlements
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    id="settlements"
                    min="0"
                    value={settlements}
                    onChange={handleSettlements}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cropLand" className="settle_label">
                    CropLand
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    id="cropLand"
                    min="0"
                    value={cropLand}
                    onChange={handleCropLand}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="grassLand" className="settle_label">
                    {" "}
                    GrassLand
                  </label>
                  <input
                    type="number"
                    id="grassLand"
                    step="any"
                    min="0"
                    value={grassLand}
                    onChange={handleGrassLand}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="forestLand" className="settle_label">
                    Forest Land
                  </label>
                  <input
                    type="number"
                    id="forestLand"
                    step="0.1"
                    min="0.0"
                    value={forestLand}
                    onChange={handleForestLand}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="wetLand" className="settle_label">
                    Wetland
                  </label>
                  <input
                    type="number"
                    id="wetLand"
                    step="0.1"
                    min="0"
                    value={wetLand}
                    onChange={handleWetLand}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="otherLand" className="settle_label">
                    Other Land
                  </label>
                  <input
                    type="number"
                    id="otherLand"
                    step="0.1"
                    min="0"
                    value={otherLand}
                    onChange={handleOtherLand}
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
      <U4landuse
        country={country}
        year={year}
        population={population}
        settlements={settlements}
        cropLand={cropLand}
        grassLand={grassLand}
        forestLand={forestLand}
        wetLand={wetLand}
        otherLand={otherLand}
        total={total}
        nextEmissions={nextEmissions}
      />
    );
  }
};

LandUse.propTypes = {
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

LandUse.defaultProps = {
  user: null,
};
