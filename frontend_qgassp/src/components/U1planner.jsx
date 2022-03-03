import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/u1planner.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
// import { NewResidents } from "./NewResidents";

import { RadialChart, DiscreteColorLegend } from "react-vis";
// import { LineLegend } from "./LineLegend";
import { StackedBarchart } from "./StackedBarchart";

/**
 * U1 Planner baseline user input form
 * @return {}
 */
// const BarSeries = VerticalBarSeries;
export const U1planner = ({ country, year, population }) => {
  const [metropolitanCenter, setMetropolitan] = useState(parseFloat(0));
  const [urban, setUrban] = useState(parseFloat(0));
  const [suburban, setSubUrban] = useState(parseFloat(0));
  const [town, setTown] = useState(parseFloat(0));
  const [rural, setRural] = useState(parseFloat(0));

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [nextU2view, setU2View] = useState(false);
  const [emission, setEmissionData] = useState("");
  const [projections, setProjections] = useState("");
  const [baseline, setBaseline] = useState({});

  const [nsArea, setNsArea] = useState(0);
  const [ewArea, setEwArea] = useState(0);

  const [nonResidentialRoad, setNonResidentialRoad] = useState(0);
  const [freightRoad, setFreightRoad] = useState(0);
  const [freightRail, setFreightRail] = useState(0);
  const [freightInlandWaterway, setFreightInlandWaterway] = useState(0);

  const [total, setTotal] = useState(
    metropolitanCenter + urban + suburban + town + rural
  );
  const [settlementDistribution, setSettlementDistribution] = useState("");

  const settlementLabels = [
    { title: "urban", color: "#164059" },
    { title: "suburban", color: "#F25F29" },
    { title: "town", color: "#F23A29" },
    { title: "rural", color: "#D9D9D9" },
    { title: "Metropolitan center", color: "#730E16" },
  ];

  const handleMetropolitanCenter = (e) => {
    e.preventDefault();
    setMetropolitan(parseFloat(e.target.value));
  };
  const handleUrban = (e) => {
    e.preventDefault();
    setUrban(parseFloat(e.target.value));
  };
  const handleSuburban = (e) => {
    e.preventDefault();
    setSubUrban(parseFloat(e.target.value));
  };
  const handleTown = (e) => {
    e.preventDefault();
    setTown(parseFloat(e.target.value));
  };
  const handleRural = (e) => {
    e.preventDefault();
    setRural(parseFloat(e.target.value));
  };

  const setSettlementType = () => {
    const settlementDist = {
      metropolitanCenter,
      urban,
      suburban,
      town,
      rural,
    };
    setSettlementDistribution(settlementDist);
    setTotal(metropolitanCenter + urban + suburban + town + rural);
  };

  const handleNsArea = (e) => {
    setSettlementDistribution;
    e.preventDefault();
    setNsArea(e.target.value);
  };

  const handleEWArea = (e) => {
    e.preventDefault();
    setEwArea(e.target.value);
  };

  useEffect(async () => {
    const baseline = {
      country,
      year,
      population,
      settlementDistribution,
    };
    setBaseline({ baseline });
    const raw = { baseline };

    const headers = {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .post(
        "https://ggia-dev.ulno.net/api/v1/calculate/transport/baseline",
        raw,
        headers
      )
      .then((response) => setResponse(response.data))
      .catch((error) => {
        setError({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("There was an error!", error);
      });
  }, []);

  const setResponse = (response) => {
    setEmissionData(response.data.baseline.emissions);
    setProjections(response.data.baseline.projections);
  };

  if (nextU2view === false) {
    return (
      <div>
        <article>
          <div className="headerSettlement">
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="TRANSPORT BASELINE" />
            </Divider>
          </div>

          <section id="u1_section">
            <div className="column">
              <div className="settlement_headers">
                <label>
                  <b>Settlement type </b>
                </label>
                <label>Share ({total}%)</label>
              </div>
              <div>
                <label htmlFor="metropolitan" className="settle_label">
                  Metropolitan center
                </label>
                <input
                  type="number"
                  step="0.1"
                  id="metropolitan"
                  min="0"
                  max="100"
                  placeholder="0.00"
                  /*  defaultValue={metropolitanCenter} */
                  onChange={handleMetropolitanCenter}
                  required
                />
              </div>
              <div>
                <label htmlFor="urban" className="settle_label">
                  Urban
                </label>
                <input
                  type="number"
                  step="0.1"
                  id="urban"
                  min="0"
                  max="100"
                  placeholder="0.00"
                  /*   value={urban} */
                  onChange={handleUrban}
                  required
                />
              </div>
              <div>
                <label htmlFor="suburban" className="settle_label">
                  {" "}
                  Suburban
                </label>
                <input
                  type="number"
                  id="suburban"
                  step="any"
                  min="0.0"
                  max="100.0"
                  placeholder="0.00"
                  /*   defaultValue={suburban} */
                  onChange={handleSuburban}
                  required
                />
              </div>
              <div>
                <label htmlFor="town" className="settle_label">
                  Town
                </label>
                <input
                  type="number"
                  id="town"
                  step="0.1"
                  min="0.0"
                  max="100.0"
                  placeholder="0.00"
                  /*   value={town} */
                  onChange={handleTown}
                  required
                />
              </div>
              <div>
                <label htmlFor="rural" className="settle_label">
                  Rural
                </label>
                <input
                  type="number"
                  id="rural"
                  step="0.1"
                  min="0"
                  max="100"
                  /*   value={rural} */
                  placeholder="0.00"
                  onChange={handleRural}
                  required
                />
              </div>
            </div>
            <div className="column">
              <div>
                <RadialChart
                  type="piechart"
                  data={[
                    {
                      angle: urban,
                      label: "Urban",
                      color: "#164059",
                    },
                    {
                      angle: suburban,
                      label: "Suburban",
                      color: "#F25F29",
                    },
                    {
                      angle: town,
                      label: "Town",
                      color: "#F23A29",
                    },
                    {
                      angle: rural,
                      label: "Rural",
                      color: "#D9D9D9",
                    },
                    {
                      angle: metropolitanCenter,
                      label: "Metropolitan center",
                      color: "#730E16",
                    },
                  ]}
                  width={180}
                  height={180}
                  colorType="literal"
                  // labelsAboveChildren={true}
                  /* labelsRadiusMultiplier={0.8}
                    labelsStyle={{
                      fontSize: 8,
                      fontWeight: 900,
                    }} */
                  //  showLabels
                />
              </div>
              <DiscreteColorLegend
                items={settlementLabels}
                orientation="horizontal"
                strokeWidth="40"
              />
            </div>

            <div className="settlementDiv">
              <label>
                <b>Area</b>
              </label>
              <label>Km</label>

              <div>
                <label htmlFor="ns_measure">N-S Measurement (km)</label>
                <input
                  type="text"
                  id="ns_measure"
                  min="0"
                  onChange={handleNsArea}
                  // onChange={(e) => setNsArea(e.target.value)}
                  placeholder={nsArea}
                  /*   value={nsArea} */
                />
              </div>
              <div>
                <label htmlFor="ew_measure">E-W Measurement (km)</label>
                <input
                  type="text"
                  id="ew_measure"
                  min="0"
                  onChange={handleEWArea}
                  placeholder={ewArea}
                  /*  value={ewArea} */
                />
              </div>

              <br />
              <form>
                <div>
                  <label>
                    <b>Non-residential and freight</b>
                  </label>
                  <label></label>
                </div>
                <div>
                  <label htmlFor="non_resident_road">
                    {" "}
                    Non-residential road transport
                  </label>
                  <select
                    id="non_resident_road"
                    onChange={(e) => setNonResidentialRoad(e.target.value)}
                    defaultValue={nonResidentialRoad}
                  >
                    <optgroup label="Select road transport intensity">
                      <option value="non-existent">0</option>
                      <option value="low">0.3</option>
                      <option value="medium_intensity">2.0</option>
                      <option value="high_intensity">2.50</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label htmlFor="freight=road">
                    Freight transport by road
                  </label>
                  <select
                    id="freight_road"
                    name="freight_road"
                    onChange={(e) => setFreightRoad(e.target.value)}
                    defaultValue={freightRoad}
                  >
                    <optgroup label="Select road transport intensity">
                      <option value="non-existent">0</option>
                      <option value="low">0.3</option>
                      <option value="medium_intensity">2.0</option>
                      <option value="high_intensity">2.50</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label htmlFor="freight_rail">
                    Freight transport by rail
                  </label>
                  <select
                    id="freight_rail"
                    name="freight_rail"
                    onChange={(e) => setFreightRail(e.target.value)}
                    defaultValue={freightRail}
                  >
                    <optgroup label="Select road transport intensity">
                      <option value="non-existent">0</option>
                      <option value="low">0.3</option>
                      <option value="medium_intensity">2.0</option>
                      <option value="high_intensity">2.50</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label htmlFor="freight_waterway">
                    Freight transport by inland waterways
                  </label>
                  <select
                    id="freight_waterway"
                    name="freight_waterway"
                    onChange={(e) => setFreightInlandWaterway(e.target.value)}
                    defaultValue={freightInlandWaterway}
                  >
                    <optgroup label="Select road transport intensity">
                      <option value="non-existent">0</option>
                      <option value="low">0.3</option>
                      <option value="medium_intensity">2.0</option>
                      <option value="high_intensity">2.50</option>
                    </optgroup>
                  </select>
                </div>
              </form>
              <div className="nextU2Button">
                <Button
                  size="small"
                  value="nextU2"
                  type="submit"
                  onClick={() => setU2View(true)}
                  label="Next &raquo;"
                  primary
                />
              </div>
            </div>
          </section>
        </article>
      </div>
    );
  } else {
    return (
      <StackedBarchart
        projections={projections}
        settlementDistribution={settlementDistribution}
        baseline={baseline}
        emission={emission}
      />
    );
  }
};

U1planner.propTypes = {
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
