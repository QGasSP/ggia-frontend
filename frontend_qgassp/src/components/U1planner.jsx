import React, { useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Piechart } from "./Piechart";
import { BaselinePiechart } from "./BaselinePiechart";
import { Barchart } from "./Barchart";
import { Legend } from "./Legend";
import "../css/u1planner.css";
import axios from "axios";


/**
 * U1 Planner user input form for baseline
 * @return {}
 */

// const baseURL = "http://localhost:5000";

export const U1planner = ({ user, onLogin, onLogout, onCreateAccount }) => {
  const [eucountry, setCountry] = useState("");
  // const [responseData, setResponseData] = useState("");
  const [emission, setEmissionData] = useState("");
  
/* 
  const retrieveEmissionData= (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    setCountry(e.target.value)
  }; */


  // const countrySelected = useRef();
  useEffect(() => {
    const jsonRaw = { country: "Finland"};
    const headers = {
      "Content-type": "application/json",
    };

  axios
      .post("http://localhost:5000/calc/emission", jsonRaw, headers)
      .then(function (response) {
        // eslint-disable-next-line no-console
        console.log(response);
        setEmissionData(response.data);
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  return (
    <article>
      <Header
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      />
      <section>
        <div>
          <h2>U1 PLANNER USER INPUT 1: BASELINE</h2>
        </div>
        <form>
          <div>
            <label htmlFor="year_selection"> Year</label>
            <select id="year_selection" name="year_selection">
              <optgroup label="Select year"></optgroup>
              <option value="year">2021</option>
            </select>
          </div>
          <div>
            <label htmlFor="eu_countries">Country</label>
            <select id="eu_countries" name="eu_countries"
              onChange={(e) => setCountry(e.target.value)} defaultValue={eucountry} value={eucountry}
            >
              <optgroup label="Select country"></optgroup>
              <option value="Austria">Austria</option>
              <option value="Belgium">Belgium</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Croatia">Croatia</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czechia">Czechia</option>
              <option value="Denmark">Denmark</option>
              <option value="Estonia">Estonia</option>
              <option value="Finland">Finland</option>
              <option value="France">Austria</option>
              <option value="Germany">Germany</option>
              <option value="Greece">Greece</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="Ireland">Ireland</option>
              <option value="Italy">Italy</option>
              <option value="Latvia">Latvia</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Malta">Malta</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Norway">Malta</option>
            </select>
          </div>
          <div>
            <label htmlFor="population_assessment">Population of the assessment area</label>
            <input type="text" id="population_assessment" />
          </div>
          <br />

          <label>
            <b>U1.1 Settlement type</b>
          </label>
          <label>Share (%)</label>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>
          <div>
            <label htmlFor="suburban"> Suburban</label>
            <input type="text" id="suburban" />
          </div>
          <div>
            <label htmlFor="town">Town</label>
            <input type="text" id="town" />
          </div>
          <div>
            <label htmlFor="rural">Rural</label>
            <input type="text" id="rural" />
          </div>
          <Piechart />
          <br />
          <label>
            <b>U1.2 Area</b>
          </label>
          <label>Km</label>
          <div>
            <label htmlFor="ns_measure">N-S Measurement (km)</label>
            <input type="text" id="ns_measure" />
          </div>
          <div>
            <label htmlFor="ew_measure">E-W Measurement (km)</label>
            <input type="text" id="ew_measure" />
          </div>
          <br />
          <div>
            <label>
              <b>U1.2 Non-residential and freight</b>
            </label>
            <label></label>
          </div>
          <div>
            <label htmlFor="non_resident_road"> Non-residential road transport</label>
            <select id="non_resident_road">
              <optgroup label="Select road transport intensity"></optgroup>
              <option value="very_limited">0.25</option>
              <option value="national_average_intensity" selected>
                1.0
              </option>
              <option value="very_intensive">2.50</option>
            </select>
          </div>

          <div>
            <label htmlFor="freight=road">Freight transport by road</label>
            <select id="freight_road" name="freight_road">
              <optgroup label="Select freight road intensity"></optgroup>
              <option value="very_limited">0.25</option>
              <option value="national_average_intensity" selected>
                1.0
              </option>
              <option value="very_intensive">2.50</option>
            </select>
          </div>
          <div>
            <label htmlFor="freight_rail">Freight transport by rail</label>
            <select id="freight_rail" name="freight_rail">
              <option value="very_limited">0.25</option>
              <option value="national_average_intensity" selected>
                1.0
              </option>
              <option value="very_intensive">2.50</option>
            </select>
          </div>

          <div>
            <label htmlFor="freight_waterway">Freight transport by inland waterways</label>
            <select id="freight_waterway" name="freight_waterway" >
              <option value="very_limited">0.25</option>
              <option value="national_average_intensity" selected>
                1.0
              </option>
              <option value="very_intensive">2.50</option>
            </select>
          </div>

          <label>
          <b>Baseline - Transport CO2e emission 2021</b>
        </label>
        <div className="container">
          <div id="first">
            <BaselinePiechart/>
          </div>
          <div id="second">
            <Legend />
          </div>
          <div id="clear"></div>
        </div>
        <label>
          <b>Baseline - Transport CO2e emission/resident</b>
        </label>
        <Barchart
          /*  inlandWaterwaysFreightEm={emission.inland_waterways_freight}
           metroEm={emission.metro} 
           busesEm={emission.motor_coaches_buses_and_trolley_buses}
           passengerCarsEm={emission.passenger_cars}
           passengerTrainsEm= {emission.passenger_trains}
           railFreightEm= {emission.rail_freight}
           roadFreightEm={emission.road_freight}
           tramLightTrainEm={emission.tram_light_train} */
        />
      </form>
    </section>
  </article>
);
};

U1planner.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

U1planner.defaultProps = {
  user: null,
};
