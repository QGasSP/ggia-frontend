import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/u1planner.css";

import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import { RadialChart, DiscreteColorLegend } from "react-vis";
import { U1planner } from "./U1planner";

const settlementLabels = [
  { title: "urban", color: "#164059" },
  { title: "suburban", color: "#F25F29" },
  { title: "town", color: "#F23A29" },
  { title: "rural", color: "#D9D9D9" },
  { title: "Metropolitan center", color: "#730E16" },
];
export const TransportBaseline = ({ country, year, population }) => {
  const [metropolitanCenter, setMetropolitan] = useState(parseFloat(0));
  const [urban, setUrban] = useState(parseFloat(0));
  const [suburban, setSubUrban] = useState(parseFloat(0));
  const [town, setTown] = useState(parseFloat(0));
  const [rural, setRural] = useState(parseFloat(0));
  const [total, setTotal] = useState(parseFloat(0));
  const [nextEmissions, setNextEmissions] = useState(false);
  const [settlementDistribution, setSettlementDistribution] = useState("");
  const [nextU1Charts, setU1Charts] = useState(false);

  const [nsArea, setNsArea] = useState(0);
  const [ewArea, setEwArea] = useState(0);
  const [nonResidentialRoad, setNonResidentialRoad] = useState(0);
  const [freightRoad, setFreightRoad] = useState(0);
  const [freightRail, setFreightRail] = useState(0);
  const [freightInlandWaterway, setFreightInlandWaterway] = useState(0);
  const [baseline, setBaseline] = useState({});

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
    const baseline = {
      country,
      year,
      population,
      settlementDistribution,
    };
    setBaseline({ baseline });
    setNextEmissions(true);
  }; 

  const getCurrentTotal = () => {
    setTotal(metropolitanCenter + urban + suburban + town + rural);
  };


  if (nextU1Charts === false ) {
  return (
    <div>
      <article>
        <div className="headerSettlement">
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="TRANSPORT BASELINE" />
          </Divider>
        </div>

        <section>
          <div className="row">
            <div className="column">
              <div className="settlement_headers">
                <label className="shareInfo">
                  <b>Settlement type </b>
                </label>
                <label>
                  Share ({total}%)
                </label>
              </div>
              <div >
                <label htmlFor="metropolitan" className="settle_label">
                  Metropolitan center
                </label>
                <input
                  type="number"
                  step="0.01"
                  id="metropolitan"
                  min="0"
                  max="100"
                  /*  defaultValue={metropolitanCenter} */
                  onChange={handleMetropolitanCenter}
                  onMouseLeave={getCurrentTotal}
                  required
                />
              </div>

              <div >
                <label htmlFor="urban" className="settle_label">
                  Urban
                </label>
                <input
                  type="number"
                  step="0.01"
                  id="urban"
                  min="0"
                  max="100"
                  /*   value={urban} */
                  onChange={handleUrban}
                  onMouseLeave={getCurrentTotal}
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
                  min="0.01"
                  max="100.0"
                  /*   defaultValue={suburban} */
                  onChange={handleSuburban}
                  onMouseLeave={getCurrentTotal}
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
                  step="0.01"
                  min="0.0"
                  max="100.0"
                  /*   value={town} */
                  onChange={handleTown}
                  onMouseLeave={getCurrentTotal}
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
                  step="0.01"
                  min="0"
                  max="100"
                  /*   value={rural} */
                  onChange={handleRural}
                  onMouseLeave={getCurrentTotal}
                  required />
              </div>
              <div className="save_piechart">
                <Button
                  size="small"
                  value="save_settlement"
                  onClick={setSettlementType}
                  label="Save"
                  primary
                />
              </div>
              <br/>
            </div>

            <div className="column">
            <label className="hide">Total shares should be 100%</label>
              <div>
                {total > 0 && total < 101 && (
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
                  />
                )}
              </div>
              {total > 0 && total < 101 && (
                <DiscreteColorLegend
                  items={settlementLabels}
                  orientation="horizontal"
                  strokeWidth="40"
                />
              )}
            </div>
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
                onChange={(e) => setNsArea(e.target.value)}
                placeholder={nsArea}
              />
            </div>

            <div>
              <label htmlFor="ew_measure">E-W Measurement (km)</label>
              <input
                type="text"
                id="ew_measure"
                min="0"
                onChange={(e) => setEwArea(e.target.value)}
                placeholder={ewArea}
              />
            </div>

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
              <label htmlFor="freight=road">Freight transport by road</label>
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
              <label htmlFor="freight_rail">Freight transport by rail</label>
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
          </div>
          <div className="nextU2Button">
          <Button
            size="small"
            value="charts"
            onClick={() => setU1Charts(true)}
            label="Next &raquo;"
            primary
          />
        </div>
        </section>
      </article>
    </div>
  );
} else if(nextU1Charts !== false ) {
  return  <U1planner
  country={country}
  year={year}
  population={population}
  settlementDistribution={settlementDistribution}
  baseline={baseline}
/>;
}
};

TransportBaseline.propTypes = {
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
};
