import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "../css/u1planner.css";
import Alert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { RadialChart, DiscreteColorLegend } from "react-vis";
import {
  useStorageBool,
  useStorageFloat,
  useStorageInt,
  useStorageString,
} from "../reducers/useStorage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StartPage } from "./StartPage";
import { country, year, population } from "../reducers/GetStorageItem";
import urlPrefix from "../Config";
import { Container, Box, Paper, Grid } from "@mui/material"; 
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

  const [error, setError] = useState("");

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

  const [metroAndTramSystems, setMetroAndTramSystems] = useState({});
  const [metroAndTramSystemCheck, setMetroAndTramSystemCheck] = useStorageBool("metroAndTramSystemCheck", false)
  const [metroSplit, setMetroSplit] = useState({})
  const [tramSplit, setTramSplit] = useState({})
  
  const [metroInput, seMetroInput] = useStorageInt("metroInput", 0);
  const [tramInput, setTramInput] = useStorageInt("tramInput", 0)

   // eslint-disable-next-line no-console
    console.log("Tram input!", tramInput);


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
    .then(()=> {
      localStorage.setItem("metroCity", JSON.stringify((Object.values(metroAndTramSystems.data.metro_tram_list.metro_list))))
    })
     .then(()=> {
      localStorage.setItem("tramCity", JSON.stringify((Object.values(metroAndTramSystems.data.metro_tram_list.tram_list))))
    })
    .catch((error) => {
        setError({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("There was an error!", error);
      });
  }

  useEffect(() => {
    getMetroTramSystemResponse();
  }, [])

  const handleMetroAndTram = async(e) => {
    e.target.checked;
    await setMetroAndTramSystemCheck(!metroAndTramSystemCheck);
    await getMetroTramSystemResponse();
  }
  // eslint-disable-next-line no-console

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

  const handleMetroInput = (e) => {
    e.preventDefault();
    seMetroInput(Number(e.target.value));
  };

  const handleTramInput = (e) => {
    e.preventDefault();
    setTramInput(Number(e.target.value))
  }



  const setSettlementType = () => {
  
    const settlementDist = {
      metropolitanCenter,
      urban,
      suburban,
      town,
      rural,
    };

   const getMetroCity = JSON.parse(localStorage.getItem("metroCity"));
   const cityMetro = getMetroCity.map(city => ({[city]: metroInput}))

   const metroSplit = Object.assign({}, ...cityMetro);

   const getTramCity = JSON.parse(localStorage.getItem("tramCity"))
   const cityTram = getTramCity.map(city => ({[city]: tramInput}))

   const tramSplit = Object.assign({}, ...cityTram);
  
    
    // eslint-disable-next-line no-console
        console.log("Tram splitt", tramSplit);

        // eslint-disable-next-line no-console
       // console.log("city tram", cityTram);


    localStorage.setItem("settlementDist", JSON.stringify(settlementDist));
    setSettlementDistribution(settlementDist);

    localStorage.setItem("metroSplit", JSON.stringify(metroSplit));
    setMetroSplit(metroSplit);

    localStorage.setItem("tramSplit", JSON.stringify(tramSplit));
    setTramSplit(tramSplit);
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


  useEffect(() => {
    localStorage.setItem
    (
      "metroSplit",
      JSON.stringify(metroSplit)
    )
  },[metroSplit])

   useEffect(() => {
    localStorage.setItem
    (
      "tramSplit",
      JSON.stringify(tramSplit)
    )
  },[tramSplit])


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


            <Box style={{margin: "40px"}}>
             
              <h4>
                  Include metro and tram systems in {country}
                   <input
                    className="checkbox"
                    type="checkbox"
                    onChange={handleMetroAndTram}
                    checked={metroAndTramSystemCheck}
                  />
              </h4>
          

            {metroAndTramSystemCheck && Object.keys(metroAndTramSystems).length !== 0 &&

            <Grid container spacing={2}>
              <Grid item xs={6}>

                 <Paper>
            <table style={{width:"100%"}}>
              <thead>
                <tr>
                  <th>Use of metro in {country}</th>
                </tr>

                 {Object.values(metroAndTramSystems.data.metro_tram_list.metro_list).map(metro => <tr  key={metro}><td>{metro}</td>
                 <td>
                <input
                onChange={handleMetroInput}
                value={metroInput.metro}
                placeholder={metroInput.metro}
                name="metroInput"
                />
                </td>
                </tr>
                )}
              </thead>
            </table>
            </Paper>


              </Grid>
              <Grid item xs={6}>

                  <Paper>
            <table style={{width:"100%"}}>
              <thead>
                <tr>
                  <th>Use of tram in {country}</th>
                </tr>

                
              {Object.values(metroAndTramSystems.data.metro_tram_list.tram_list).map(tram => <tr key={tram}><td>{tram} </td>
              <td>
                  <input
                  onChange={handleTramInput}
                  value={tramInput.tram}
                  placeholder={tramInput.tram}
                  name="tramInput"
                  />
                  </td>
                
                </tr>
                
                )}
                

              </thead>
            </table>
            </Paper>
              </Grid>
            </Grid>
           
            }
            </Box>
            
          </div>

          <div>
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
          </div>
        </section>
      </article>
    </div>
    </Container>
  );
};
