import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "../css/u1planner.css";
import Alert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { RadialChart, DiscreteColorLegend } from "react-vis";
import {
  useLocalStorageBoolean,
  useStorageFloat,
  useStorageInt,
  useStorageString,
} from "../reducers/useStorage";
import { useNavigate } from "react-router-dom";
import { StartPage } from "./StartPage";
import { country, year, population } from "../reducers/GetStorageItem";
import { Container } from "@mui/material";
/**
 * Transport baseline user input form
 * @return {}
 */

const settlementLabels = [
  { title: "urban", color: "#164059" },
  { title: "suburban", color: "#F25F29" },
  { title: "town", color: "#F23A29" },
  { title: "rural", color: "#D9D9D9" },
  { title: "Metropolitan center", color: "#730E16" },
];

export const TransportBaseline = () => {
  const navigate = useNavigate();
  const [metropolitanCenter, setMetropolitan] = useStorageFloat(
    "metropolitanCenter",
    parseFloat(0)
  );
  const [urban, setUrban] = useStorageFloat("urban", parseFloat(0));
  const [suburban, setSubUrban] = useStorageFloat("suburban", parseFloat(0));
  const [town, setTown] = useStorageFloat("town", parseFloat(0));
  const [rural, setRural] = useStorageFloat("rural", parseFloat(0));
  const [total, setTotal] = useStorageFloat(
    "total",
    parseFloat(metropolitanCenter) +
      parseFloat(urban) +
      parseFloat(suburban) +
      parseFloat(town) +
      parseFloat(rural)
  );

  const [settlementDistribution, setSettlementDistribution] = useState({});
  const [nsArea, setNsArea] = useStorageInt("nsArea", 0);
  const [ewArea, setEwArea] = useStorageInt("ewArea", 0);
  const [nonResidentialRoad, setNonResidentialRoad] = useStorageString(
    "nonResidentialRoad",
    ""
  );
  const [freightRoad, setFreightRoad] = useStorageString("freightRoad", "");
  const [freightRail, setFreightRail] = useStorageString("freightRail", "");
  const [freightInlandWaterway, setFreightInlandWaterway] = useStorageString(
    "freightInlandWaterway",
    ""
  );

  const handleNsArea = (e) => {
    e.preventDefault();
    setNsArea(Number(e.target.value));
  };
  const handleEwArea = (e) => {
    e.preventDefault();
    setEwArea(Number(e.target.value));
  };

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



  const [metroSystem, setMetroSystem] = useLocalStorageBoolean("metroSystem", "false")
  const handleMetro = (e) => {
    e.target.checked;
    setMetroSystem(!metroSystem)
  }

  const [tramSystem, setTramSystem] = useLocalStorageBoolean("tramSystem", "false")
  const handleTram = (e) => {
    e.target.checked;
    setTramSystem(!tramSystem)
  }

  const setSettlementType = () => {
    const settlementDist = {
      metropolitanCenter,
      urban,
      suburban,
      town,
      rural,
    };

    localStorage.setItem("settlementDist", JSON.stringify(settlementDist));
    setSettlementDistribution(settlementDist);
    // setU1Charts(true);
    if (Object.keys(settlementDistribution).length !== 0) {
      navigate("../u1planner", {
        replace: true,
       /*  state: {
          settlementDistribution: settlementDist,
        }, */
      });
    };
  };

  const getCurrentTotal = () => {
    setTotal(
      parseFloat(metropolitanCenter) +
        parseFloat(urban) +
        parseFloat(suburban) +
        parseFloat(town) +
        parseFloat(rural)
    );
  };

  useEffect(() => {
    localStorage.setItem(
      "settlementDistribution",
      JSON.stringify(settlementDistribution)
    );
  }, [settlementDistribution]);

  if (population === 0 && year === 0 && country === "" ||
  window.localStorage === null
  ) {
  return <StartPage/>;
  };

  return (
    <Container maxWidth="xl">
    <div className="div_transport">
      <article>
        <div className="headerSettlement">
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="TRANSPORT BASELINE" />
          </Divider>
        </div>
        <Alert severity="info">
          This section creates a baseline scenario until 2050 for the
          transport-related greenhouse gas emissions in the assessment area.
        </Alert>
        <section className="section-transport">
          <div className="settlementDiv">
            <div className="row">
              <div className="column">
                <div className="settlement_headers">
                  <label className="shareInfo">
                    <b>Settlement type </b>
                  </label>
                  <label>Share ({total}%)</label>
                </div>
                <Tooltip title="Urban settlement characterized by superb provision of public transportation including metro and/or tram, large pedestrian zones and high density of population.">
                  <div className="div_transport">
                    <Alert severity="info">
                      Describe below the settlement types that the assessment
                      area consists of. Insert approximate percentages that
                      present the shares of the assessment area population
                      living in various types of settlements. The percentages
                      shall total 100.
                    </Alert>
                    <label htmlFor="metropolitan" className="settle_label">
                      Metropolitan area
                    </label>
                    <input
                      className="input_transport"
                      type="number"
                      pattern="[0-9]*"
                      step="0.01"
                      id="metropolitan"
                      min="0"
                      max="100"
                      value={metropolitanCenter}
                      onChange={handleMetropolitanCenter}
                      onMouseLeave={getCurrentTotal}
                      required
                    />
                  </div>
                </Tooltip>

                <Tooltip title="Urban settlement characterized by excellent provision of public transportation and high density of population.">
                  <div className="div_transport">
                    <label htmlFor="urban" className="settle_label">
                      Urban area
                    </label>
                    <input
                      className="input_transport"
                      type="number"
                      pattern="[0-9]*"
                      step="0.01"
                      id="urban"
                      min="0"
                      max="100"
                      // placeholder={urban}
                      value={urban}
                      onChange={handleUrban}
                      onMouseLeave={getCurrentTotal}
                      required
                    />
                  </div>
                </Tooltip>

                <Tooltip title="Settlement dominated by private car transport and residential buildings; bus and train transportation available.">
                  <div className="div_transport">
                    <label htmlFor="suburban" className="settle_label">
                      {" "}
                      Suburban area
                    </label>
                    <input
                      className="input_transport"
                      type="number"
                      pattern="[0-9]*"
                      id="suburban"
                      step="any"
                      min="0.01"
                      max="100.0"
                      value={suburban}
                      onChange={handleSuburban}
                      onMouseLeave={getCurrentTotal}
                      required
                    />
                  </div>
                </Tooltip>

                <Tooltip title="A local center that is smaller than a city, providing commercial services to a larger area as well as public transportation (bus, train).">
                  <div className="div_transport">
                    <label htmlFor="town" className="settle_label">
                      Town
                    </label>
                    <input
                      className="input_transport"
                      type="number"
                      pattern="[0-9]*"
                      id="town"
                      step="0.01"
                      min="0.0"
                      max="100.0"
                      value={town}
                      onChange={handleTown}
                      onMouseLeave={getCurrentTotal}
                      required
                    />
                  </div>
                </Tooltip>

                <Tooltip title="Sparsely populated area with limited provision of public transportation (some bus connections only).">
                  <div className="div_transport">
                    <label htmlFor="rural" className="settle_label">
                      Rural
                    </label>
                    <input
                      className="input_transport"
                      type="number"
                      pattern="[0-9]*"
                      id="rural"
                      step="0.01"
                      min="0"
                      max="100"
                      placeholder={rural}
                      value={rural}
                      onChange={handleRural}
                      onMouseLeave={getCurrentTotal}
                      required
                    />
                  </div>
                </Tooltip>
              </div>

              <div className="column">
                <div className="div_transport">
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

            <div className="div_transport2">
              <label>
                <b>Area</b>{" "}
              </label>
              <label>Km</label>
              <Alert severity="info">
                Estimate the maximum dimensions of the assessment area in
                North-South and East-West directions.
              </Alert>
              <Tooltip title="The estimate is applied to specify the annual transport activity within the assessment area.">
                <div className="div_transport">
                  <label htmlFor="ns_measure">N-S Measurement (km)</label>
                  <input
                    className="input_transport"
                    type="text"
                    id="ns_measure"
                    min="0"
                    onChange={handleNsArea}
                    placeholder={nsArea}
                    value={nsArea}
                    required
                  />
                </div>
              </Tooltip>

              <Tooltip title="The estimate is applied to specify the annual transport activity within the assessment area.">
                <div className="div_transport">
                  <label htmlFor="ew_measure">E-W Measurement (km)</label>
                  <input
                    className="input_transport"
                    type="text"
                    id="ew_measure"
                    min="0"
                    onChange={handleEwArea}
                    value={ewArea}
                    placeholder={ewArea}
                    required
                  />
                </div>
              </Tooltip>
            </div>
            <br />
            <div className="div_transport2">
              <label>
                <b>Non-residential and freight</b>
              </label>
              <label>Transport intensity</label>
              <Alert severity="info">
                Describe the intensity of non-residential passenger road
                transport and freight transport within the assessment area.
              </Alert>
            </div>

            <Tooltip title=" Select the closest option.">
              <div className="div_transport">
                <label htmlFor="non_resident_road">
                  {" "}
                  Non-residential road transport
                </label>
                <select
                  className="select_transport"
                  id="non_resident_road"
                  onChange={(e) => setNonResidentialRoad(e.target.value)}
                  defaultValue={nonResidentialRoad}
                >
                  <option value="DefaultOption">Select intensity</option>
                  <optgroup label="Select transport intensity">
                    <option value="non">non-existent: 0</option>
                    <option value="low">low: 0.3</option>
                    <option value="medium">medium-intensity: 2.0</option>
                    <option value="high">high-intensity: 2.50</option>
                  </optgroup>
                </select>
              </div>
            </Tooltip>

            <Tooltip title=" Select the closest option.">
              <div className="div_transport">
                <label htmlFor="freight=road">Freight transport by road</label>
                <select
                  className="select_transport"
                  id="freight_road"
                  name="freight_road"
                  onChange={(e) => setFreightRoad(e.target.value)}
                  value={freightRoad}
                  placeholder={freightRoad}
                >
                  <option value="DefaultOption">Select intensity</option>
                  <optgroup label="Select road transport intensity">
                    <option value="non">non-existent: 0</option>
                    <option value="low">low: 0.3</option>
                    <option value="medium">medium-intensity: 2.0</option>
                    <option value="high">high-intensity: 2.50</option>
                  </optgroup>
                </select>
              </div>
            </Tooltip>

            <Tooltip title=" Select the closest option.">
              <div>
                <label htmlFor="freight_rail">Freight transport by rail</label>
                <select
                  className="select_transport"
                  id="freight_rail"
                  name="freight_rail"
                  onChange={(e) => setFreightRail(e.target.value)}
                  value={freightRail}
                  placeholder={freightRail}
                >
                  <option value="DefaultOption">Select intensity</option>
                  <optgroup label="Select road transport intensity">
                    <option value="non">non-existent: 0</option>
                    <option value="low">low: 0.3</option>
                    <option value="medium">medium-intensity: 2.0</option>
                    <option value="high">high-intensity: 2.50</option>
                  </optgroup>
                </select>
              </div>
            </Tooltip>

            <Tooltip title=" Select the closest option.">
              <div className="div_transport">
                <label htmlFor="freight_waterway">
                  Freight transport by inland waterways
                </label>
                <select
                  className="select_transport"
                  id="freight_waterway"
                  name="freight_waterway"
                  onChange={(e) => setFreightInlandWaterway(e.target.value)}
                  value={freightInlandWaterway}
                  placeholder={freightInlandWaterway}
                >
                  <option value="DefaultOption">Select intensity</option>
                  <optgroup label="Select road transport intensity">
                    <option value="non">non-existent: 0</option>
                    <option value="low">low: 0.3</option>
                    <option value="medium">medium-intensity: 2.0</option>
                    <option value="high">high-intensity: 2.50</option>
                  </optgroup>
                </select>
              </div>
            </Tooltip>
          </div>

          {total === 100.0 && (
            <div className="nextU2Button">
              <Button
                size="small"
                value="charts"
                onClick={setSettlementType}
                label="Next &raquo;"
                primary
              />
            </div>
          )}
        </section>
      </article>
    </div>
    </Container>
  );
};
