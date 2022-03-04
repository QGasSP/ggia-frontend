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
  const [setPieError, setPieChartErrorMessage] = useState("");

  const handleMetropolitanCenter = (e) => {
    setPieChartErrorMessage("")
    e.preventDefault();
    setMetropolitan(parseFloat(e.target.value));
  };
  const handleUrban = (e) => {
    setPieChartErrorMessage("")
    e.preventDefault();
    setUrban(parseFloat(e.target.value));
  };
  const handleSuburban = (e) => {
    setPieChartErrorMessage("")
    e.preventDefault();
    setSubUrban(parseFloat(e.target.value));
  };
  const handleTown = (e) => {
    setPieChartErrorMessage("")
    e.preventDefault();
    setTown(parseFloat(e.target.value));
  };
  const handleRural = (e) => {
    setPieChartErrorMessage("")
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
    setNextEmissions(true); 
  };

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
                  <label>
                    <b>U1.1 Settlement type </b>
                  </label>
                  <label>Share ({total}%) :  {setPieError}</label>
                </div>
              <div>
                <label htmlFor="metropolitan" className="settle_label">Metropolitan center</label>
                <input
                  type="number"
                  step="0.01"
                  id="metropolitan"
                  min="0"
                  max="100"
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
                  step="0.01"
                  id="urban"
                  min="0"
                  max="100"
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
                  min="0.01"
                  max="100.0"
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
                  step="0.01"
                  min="0.0"
                  max="100.0"
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
                  step="0.01"
                  min="0"
                  max="100"
                  /*   value={rural} */
                  onChange={handleRural}
                  required
                />
              </div>
              <div className="save_piechart">
            <Button
              size="small"
              value="nextU2"
              onClick={setSettlementType}
              label="Save"
              primary
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
                />
              </div>
              <DiscreteColorLegend
                items={settlementLabels}
                orientation="horizontal"
                strokeWidth="40"
              />
            </div>
          </div>

          {nextEmissions===true && total===100.00 &&
          <U1planner country={country} year={year} population={population} settlementDistribution={settlementDistribution}/>
          }

        </section>
      </article>
    </div>
  );
};

TransportBaseline.propTypes = {
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
};
