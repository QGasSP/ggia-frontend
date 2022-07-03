import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "../css/u1planner.css";
import Alert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import { RadialChart, DiscreteColorLegend } from "react-vis";
import {
  useStorageBool,
  useStorageFloat,
  useStorageInt,
  useStorageString,
  useLocalStorageBoolean
} from "../reducers/useStorage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StartPage } from "./StartPage";
import { country, year, population } from "../reducers/GetStorageItem";
import urlPrefix from "../Config";
import { Container, Box, Grid } from "@mui/material"; 
import RefreshIcon from '@mui/icons-material/Refresh';
/**
 * Transport baseline user input form
 * @return {}
 */

const settlementLabels = [
  { title: "urban", color: "#164059", strokeWidth: 10 },
  { title: "suburban", color: "#F25F29", strokeWidth: 10 },
  { title: "town", color: "#F23A29", strokeWidth: 10 },
  { title: "rural", color: "#D9D9D9", strokeWidth: 10 },
  { title: "Metropolitan center", color: "#730E16", strokeWidth: 10 },
];

export const TransportBaseline = () => {
  const navigate = useNavigate();

  const [metropolitanCenter, setMetropolitan] = useStorageFloat("metropolitanCenter", parseFloat(0) );
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

  const [error, setError] = useState("");

  const [settlementDistribution, setSettlementDistribution] = useState({});
  const [nsArea, setNsArea] = useStorageInt("nsArea", 0);
  const [ewArea, setEwArea] = useStorageInt("ewArea", 0);

  const [intensityNonResAndFt, setIntensityNonResAndFt] = useState({})
  const [nonResidentialRoad, setNonResidentialRoad] = useStorageString("nonResidentialRoad", "");
  const [freightRoad, setFreightRoad] = useStorageString("freightRoad", "");
  const [freightRail, setFreightRail] = useStorageString("freightRail", "");
  const [freightInlandWaterway, setFreightInlandWaterway] = useStorageString("freightInlandWaterway", "");

  const [metroAndTramSystems, setMetroAndTramSystems] = useState({});
  const [metroAndTramSystemCheck, setMetroAndTramSystemCheck] = useLocalStorageBoolean("metroAndTramSystemCheck", "false")
  const [metroSplit, setMetroSplit] = useState({})
  const [tramSplit, setTramSplit] = useState({})

  const [metroInput, setMetroInput] = useState(() => {
    const savedBasline = localStorage.getItem("metroInput");
    const initialValue = JSON.parse(savedBasline);
    return initialValue || {};
  });
  const [tramInput, setTramInput] = useState(() => {
    const savedBasline = localStorage.getItem("tramInput");
    const initialValue = JSON.parse(savedBasline);
    return initialValue || {};
  });

  const getMetroTramSystemResponse = async() => {      
    const raw = {
    "metroTramList": {
        "country": country
        }
    };

    const headers = {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    axios
    .post( urlPrefix + "/api/v1/calculate/transport/metro-tram-list", raw, headers )
    .then((response) => {
       setMetroAndTramSystems(response.data)
      })
    .catch((error) => {
        setError({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("There was an error!", error);
      });
  }

  useEffect(async() => {
      getMetroTramSystemResponse();
  }, [])

  useEffect(async()=> {
    localStorage.setItem("metroAndTramSystems", JSON.stringify(metroAndTramSystems))
    localStorage.setItem("metroCity", JSON.stringify((Object.values(metroAndTramSystems.data.metro_tram_list.metro_list))))
    localStorage.setItem("tramCity", JSON.stringify((Object.values(metroAndTramSystems.data.metro_tram_list.tram_list))))
  }, [metroAndTramSystems])

  const getMetroCity = JSON.parse(localStorage.getItem("metroCity")) || [];
  const getTramCity = JSON.parse(localStorage.getItem("tramCity")) || [];

  const handleMetroAndTram = async(e) => {
   e.target.checked;
   await setMetroAndTramSystemCheck(!metroAndTramSystemCheck);
   await getMetroTramSystemResponse(e.preventDefault());
  }

  // handlers 
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

  const setSettlementType = async(e) => {
    e.preventDefault();

    const settlementDist = {
      metropolitanCenter,
      urban,
      suburban,
      town,
      rural,
    };

    const intensityNonResAndFt = {
      "non_res_pt": nonResidentialRoad,
      "ft_road": freightRoad,
      "ft_rail": freightRail,
      "ft_water": freightInlandWaterway
    }

    const cityMetro = getMetroCity.map(city => ({[city]: 0}))
    const noInputMetro = Object.assign({}, ...cityMetro);

    const cityTram = getTramCity.map(city => ({[city]: 0}))
    const noInputTram = Object.assign({}, ...cityTram);

    const metroSplit = metroInput === 0 ? noInputMetro : metroInput
    const tramSplit = tramInput === 0 ? noInputTram : tramInput

    localStorage.setItem("settlementDist", JSON.stringify(settlementDist));
    setSettlementDistribution(settlementDist);

    localStorage.setItem("intensity_non_res_and_ft", JSON.stringify(intensityNonResAndFt));
    setIntensityNonResAndFt(intensityNonResAndFt);

    localStorage.setItem("metroSplit", JSON.stringify(metroSplit));
    setMetroSplit(metroSplit);

    localStorage.setItem("tramSplit", JSON.stringify(tramSplit));
    setTramSplit(tramSplit);

    localStorage.setItem("metroInput", JSON.stringify(metroInput));
    setMetroSplit(metroInput);

    localStorage.setItem("tramInput", JSON.stringify(tramInput));
    setTramSplit(tramInput);

    if (Object.keys(settlementDistribution).length !== 0) {
      return navigate("/u1planner", {
        replace: true
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

  useEffect(async() => {
    await localStorage.setItem(
      "settlementDistribution",
      JSON.stringify(settlementDistribution)
    );

    await localStorage.setItem(
      "intensityNonResAndFt",
      JSON.stringify(intensityNonResAndFt)
    );

    await localStorage.setItem
    (
      "metroSplit",
      JSON.stringify(metroSplit)
    );

    await localStorage.setItem
    (
      "tramSplit",
      JSON.stringify(tramSplit)
    );
    await localStorage.setItem
    (
      "metroInput",
      JSON.stringify(metroInput)
    );

    await localStorage.setItem
    (
      "tramInput",
      JSON.stringify(tramInput)
    );
  }, [settlementDistribution, intensityNonResAndFt, tramSplit, metroSplit, tramInput, metroInput]);

  if (population === 0 && year === 0 && country === "" ||
  window.localStorage === null
  ) {
  return <StartPage/>;
  };

  return (
    <Container maxWidth="xl">
    <div className="div_transport">
      <article>
        <div className="heading">
          <h2>Transport baseline</h2>
        </div>
        <Box mt={5}>
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
                  <label><b>Share</b></label>
                </div>
                <Tooltip title="Urban settlement characterized by superb provision of public transportation including metro and/or tram, large pedestrian zones and high density of population." placement="left">
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

                <Tooltip title="Urban settlement characterized by excellent provision of public transportation and high density of population." placement="left">
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

                <Tooltip title="Settlement dominated by private car transport and residential buildings; bus and train transportation available." placement="left">
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

                <Tooltip title="A local center that is smaller than a city, providing commercial services to a larger area as well as public transportation (bus, train)." placement="left">
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

                <Tooltip title="Sparsely populated area with limited provision of public transportation (some bus connections only)." placement="left">
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
                  <div className="div_transport">
                    <label htmlFor="rural" className="settle_label">
                     <b>Total</b>
                    </label>
                    {total === 100 ? <label>{total}%</label> : <label><b>Error: Total value needs to equal to 100%</b></label>}
                  </div>
              </div>

              <div className="column">
                <div className="div_transport">
                  <div className="pieChart">
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
            </div>

            {/* <div className="div_transport2">
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
            </div> */}
            <br />
            <div className="div_transport2">
              <label>
                <b>Non-residential and freight</b>
              </label>
              <label><b>Transport intensity</b></label>
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
                    <option value="none">none</option>
                    <option value="low_intensity">low intensity</option>
                    <option value="average_intensity">average intensity</option>
                    <option value="high_intensity">high intensity</option>
                 
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
                    <option value="none">none</option>
                    <option value="low_intensity">low intensity</option>
                    <option value="average_intensity">average intensity</option>
                    <option value="high_intensity">high intensity</option>
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
                    <option value="none">none</option>
                    <option value="low_intensity">low intensity</option>
                    <option value="average_intensity">average intensity</option>
                    <option value="high_intensity">high intensity</option>
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
                    <option value="none">none</option>
                    <option value="low_intensity">low intensity</option>
                    <option value="average_intensity">average intensity</option>
                    <option value="high_intensity">high intensity</option>
                </select>
              </div>
            </Tooltip>


            <Box style={{marginTop: "50px"}}>
               <Alert severity="info" style={{width: "50%"}}>
                Select the metro and tram systems that operate in the assessment area and are included in the study.
                100% = included entirely, 0% = excluded.“
              </Alert>

            <div style={{display: "flex"}}>
            <label>
            <b>Metro and tram systems in {country}</b>
            </label>
            <input
            type="checkbox"
            name="metroTramCheckbox"
            onChange={handleMetroAndTram}
            checked={metroAndTramSystemCheck}
            />
            <br/>
             {metroAndTramSystemCheck && 
                <span>
                <RefreshIcon
                sx={{ "&:hover": { color: "gray" }}}
                />
                {"  "}Refresh
                </span>
              }
            </div>    
          

            {metroAndTramSystemCheck && Object.values(metroAndTramSystems) !== 0 &&
            <Grid container spacing={2} style={{marginTop:"10px"}}>
              <Grid item xs={6}>
              <table style={{width:"100%"}}>
                <thead>
                  <tr>
                    <th>Metro systems included</th>
                    <th>%</th>
                  </tr>
                  </thead>
                  <tbody>
                    { getMetroCity.length === 0 ? <tr><td>Nothing to display here</td></tr> : getMetroCity.map(metro => <tr key={metro}><td>{metro}</td>
                    <td>
                    <input
                    onChange={(e) =>
                      setMetroInput((metroInput) => {
                      return { ...metroInput, [metro]: Number(e.target.value) };
                      })}
                    value={metroInput.metro}
                    placeholder="0"
                    name="metroInput"
                    />
                    </td>
                    
                    </tr>
                    )}
              </tbody>
            </table>
            </Grid>

            <Grid item xs={6}>
            <table style={{width:"100%"}}>
              <thead>
                <tr>
                  <th>Tram systems included</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                {getTramCity.length === 0 ? <tr><td>Nothing to display here</td></tr> : getTramCity.map(tram => <tr key={tram}><td>{tram}</td>
                  <td>
                  <input
                  onChange={(e) =>
                  setTramInput((tramInput) => {
                  return { ...tramInput, [tram]: Number(e.target.value) };
                  })}
                  value={tramInput.tram}
                  placeholder="0"
                  name="tramInput"
                  />
                  </td>
                </tr>
              )}
              </tbody>
            </table>
            </Grid>
          </Grid>
            }
          </Box>
            
          </div>

          <div>
          {total === 100.0 &&
            <div className="nextU2Button">
              <div id="nextU2button">
              <Button
                size="small"
                value="charts"
                type="submit"
                onClick={setSettlementType}
                label="Next &raquo;"
                primary
              />
              </div>
            </div>
          }
          </div>
        </section>
        </Box>
      </article>
    </div>
    </Container>
  );
};
