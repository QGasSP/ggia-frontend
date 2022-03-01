import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Button } from "./Button";
import "../css/u1planner.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
// import { NewResidents } from "./NewResidents";

import {
  
  RadialChart,
  DiscreteColorLegend,
} from "react-vis";
// import { LineLegend } from "./LineLegend";
import { StackedBarchart } from "./StackedBarchart";

/**
 * U1 Planner baseline user input form
 * @return {}
 */
// const BarSeries = VerticalBarSeries;
export const U1planner = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  country,
  year,
  population,
  settlementDistribution,
  /*  metropolitanCenter,
  urban,
  suburban,
  town,
  rural, */
  total,
}) => {
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

  const settlementLabels = [
    { title: "urban", color: "#164059" },
    { title: "suburban", color: "#F25F29" },
    { title: "town", color: "#F23A29" },
    { title: "rural", color: "#D9D9D9" },
    { title: "Metropolitan center", color: "#730E16" },
  ];

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
              <Chip label="U1 PLANNER : BASELINE" />
            </Divider>
          </div>

          <section>
            {/*   <div>
              <h1 className="settlement_header">U1 PLANNER : BASELINE </h1>{" "}
            </div> */}
            {/*  <div>{JSON.stringify(emission.car)} </div>
            <div>{error.errorMessage} </div> */}

            <div className="row">
              <div className="column">
                <div className="settlement_headers">
                  <label>
                    <b>U1.1 Settlement type </b>
                  </label>
                  <label>Share ({total}%)</label>
                </div>
                <div>
                  <label htmlFor="metropolitan">Metropolitan center</label>
                  <input
                    type="number"
                    id="metropolitan"
                    min="0"
                    max="100"
                    value={settlementDistribution.metropolitanCenter}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="urban">Urban</label>
                  <input
                    type="number"
                    id="urban"
                    min="0"
                    max="100"
                    value={settlementDistribution.urban}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="suburban"> Suburban</label>
                  <input
                    type="number"
                    id="suburban"
                    min="0"
                    max="100"
                    value={settlementDistribution.suburban}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="town">Town</label>
                  <input
                    type="number"
                    id="town"
                    min="0"
                    max="100"
                    value={settlementDistribution.town}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="rural">Rural</label>
                  <input
                    type="number"
                    id="rural"
                    min="0"
                    max="100"
                    value={settlementDistribution.rural}
                    readOnly
                  />
                </div>
              </div>
              <div className="column">
                <div>
                  <RadialChart
                    type="piechart"
                    data={[
                      {
                        angle: settlementDistribution.urban,
                        label: "Urban",
                        color: "#164059",
                      },
                      {
                        angle: settlementDistribution.suburban,
                        label: "Suburban",
                        color: "#F25F29",
                      },
                      {
                        angle: settlementDistribution.town,
                        label: "Town",
                        color: "#F23A29",
                      },
                      {
                        angle: settlementDistribution.rural,
                        label: "Rural",
                        color: "#D9D9D9",
                      },
                      {
                        angle: settlementDistribution.metropolitanCenter,
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
            </div>
            <div className="settlementDiv">
              <label>
                <b>U1.2 Area</b>
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
                  /*   value={nsArea} */
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
                  /*  value={ewArea} */
                />
              </div>

              <br />
              <form>
                <div>
                  <label>
                    <b>U1.3 Non-residential and freight</b>
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

            
              {/* 
              <Divider textAlign="left" flexItem>
                <b>Projections: CO2e emissions per capita 2022-2050</b>
              </Divider> */}

              <div className="backButton">
                <Button
                  size="small"
                  value="backSettlement"
                  onClick={() => navigate("settlement", { replace: true })}
                  label="&laquo; Previous"
                  secondary
                />
              </div>
              <div className="nextU2Button">
                <Button
                  size="small"
                  value="nextU2"
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
      /*  <NewResidents
        country={country}
        year={year}
        settlementDistribution={settlementDistribution}
        population={population}
      /> */
    );
  }
};

U1planner.propTypes = {
  settlementDistribution: PropTypes.object.isRequired,
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

U1planner.defaultProps = {
  user: null,
};
