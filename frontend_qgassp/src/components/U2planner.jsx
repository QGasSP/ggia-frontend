import React ,{useState, useEffect}from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Linechart } from "./Linechart";
import { LineLegend } from "./LineLegend";
import { Button } from "./Button";
import axios from "axios";
import "../css/u2planner.css";

/**
 * U1 Planner user input form for baseline
 * @return {}
 */

export const U2planner = ({
  country,
  year,
  population,
  settlementDistribution,
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  const [metropolitanCenter, setNsMetropolitan] = useState(parseFloat(0));
  const [urban, setNsUrban] = useState(parseFloat(0));
  const [suburban, setNsSubUrban] = useState(parseFloat(0));
  const [town, setNsTown] = useState(parseFloat(0));
  const [rural, setNsRural] = useState(parseFloat(0));
  const [errorU2, setU2Error] = useState("");
  const [impact, setNewDevelopmentImpact] = useState("");
  const [newResidents, setNewResidents] = useState("");
  const [yearStart, setYearStart] = useState("");
  const [yearFinish, setYearFinish] = useState("");
  const [totalNewResidents, setTotalNewResidents] = useState();

  useEffect(async () => {
    const baseline={
      country,
      year,
      population,
      settlementDistribution
    }
   
    const newSettlementDistribution = {
      metropolitanCenter,
      urban,
      suburban,
      town,
      rural,
    };
    const newDevelopment = {
      newResidents,
      yearStart,
      yearFinish,
      newSettlementDistribution
    }
    const rawData = { country, year, population, baseline,newDevelopment};
    const headers = {
      "Content-type": "application/json",
      "Cache-Control": "no-cache"
    };
    axios
      .post(
        "https://ggia-dev.ulno.net/api/v1/calculate/transport",
        rawData,
        headers
      )
      .then((response) => setU2Response(response))
      .catch((error) => {
        setU2Error({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("There was an error!", errorU2);
      });
  }, []);

  const setU2Response = (response) => {
    setNewDevelopmentImpact(response.data.new_development.impact);
  
  };
  const handleNsMetropolitanCenter = (e) => {
    setNsMetropolitan(parseFloat(e.target.value));
  };
  const handleNsUrban = (e) => {
    setNsUrban(parseFloat(e.target.value));
  };
  const handleNsSuburban = (e) => {
    setNsSubUrban(parseFloat(e.target.value));
  };
  const handleNsTown = (e) => {
    setNsTown(parseFloat(e.target.value));
  };
  const handleNsRural = (e) => {
    setNsRural(parseFloat(e.target.value));
  };
  const handleStartYear = (e) => {
    e.preventDefault();
    setYearStart(Number(e.target.value));
  };
  const handleYearFinish = (e) => {
    e.preventDefault();
    setYearFinish(Number(e.target.value));
  };
  const handleNewResident= (e) => {
    e.preventDefault();
    setNewResidents(Number(e.target.value));
  };

  

  return (
    <article>
      {
        <Header
          user={user}
          onLogin={onLogin}
          onLogout={onLogout}
          onCreateAccount={onCreateAccount}
        />
      }

      <section>
        <div>
          <h2>U2 NEW DEVELOPMENT</h2>
          <h3>{impact}</h3>
        </div>
        <form>
          <label>
            <b>U2.1 New residents</b>
          </label>
          <div>
            <label htmlFor="new_residents">
              Number of new residents moving in
            </label>
            <input
                  type="text"
                  pattern="[0-9]*"
                  id="new_residents"
                  onChange={handleNewResident}
                  required
                />
            <label>0 = no new developments to be quantified</label>
          </div>
          <div>
            <label htmlFor="start_year_selection"> Start</label>
            <select
                  id="start_year_selection"
                  name="start_year_selection"
                  onChange={handleStartYear}
                  defaultValue="Select country"
                  required
                >

              <optgroup label="Select year"></optgroup>
              <option value="year">2021</option>
              <option value="year">2022</option>
              <option value="year">2023</option>
              <option value="year">2024</option>
              <option value="year">2024</option>
              <option value="year">2025</option>
              <option value="year">2026</option>
              <option value="year">2027</option>
              <option value="year">2028</option>
              <option value="year">2029</option>
              <option value="year">2030</option>
              <option value="year">2031</option>
              <option value="year">2032</option>
              <option value="year">2033</option>
              <option value="year">2034</option>
              <option value="year">2035</option>
              <option value="year">2036</option>
              <option value="year">2037</option>
              <option value="year">2038</option>
              <option value="year">2039</option>
              <option value="year">2040</option>
              <option value="year">2041</option>
              <option value="year">2042</option>
              <option value="year">2043</option>
              <option value="year">2044</option>
              <option value="year">2045</option>
              <option value="year">2046</option>
              <option value="year">2047</option>
              <option value="year">2049</option>
              <option value="year">2050</option>
            </select>
          </div>

          <div>
            <label htmlFor="end_year_selection"> End</label>
            <select
                  id="end_year_selection"
                  name="end_year_selection"
                  onChange={handleYearFinish}
                  defaultValue="Select year"
                  required
                >
              <optgroup label="Select year"></optgroup>
              <option value="year">2021</option>
              <option value="year">2022</option>
              <option value="year">2023</option>
              <option value="year">2024</option>
              <option value="year">2024</option>
              <option value="year">2025</option>
              <option value="year">2026</option>
              <option value="year">2027</option>
              <option value="year">2028</option>
              <option value="year">2029</option>
              <option value="year">2030</option>
              <option value="year">2031</option>
              <option value="year">2032</option>
              <option value="year">2033</option>
              <option value="year">2034</option>
              <option value="year">2035</option>
              <option value="year">2036</option>
              <option value="year">2037</option>
              <option value="year">2038</option>
              <option value="year">2039</option>
              <option value="year">2040</option>
              <option value="year">2041</option>
              <option value="year">2042</option>
              <option value="year">2043</option>
              <option value="year">2044</option>
              <option value="year">2045</option>
              <option value="year">2046</option>
              <option value="year">2047</option>
              <option value="year">2049</option>
              <option value="year">2050</option>
            </select>
          </div>
          <br />
          <label>
            <b>U2.2 Settlement type</b>
          </label>
          <label><b>Existing environment</b></label>
          <label><b>New development</b></label>
          <div>
            {/* I just placed the first label there as placeholder, but it needs to be the user inputs from U1 */}
            <label htmlFor="city">Metropolitan Area</label>
            <label htmlFor="city">Metropolitan Area</label>
            <input
                    type="number"
                    step="0.1"
                    id="nsMetropolitan"
                    min="0"
                    max="100"
                    onChange={handleNsMetropolitanCenter}
                    required
                  />
          </div>
          <div>
            {/* I just placed the first label there as placeholder, but it needs to be the user inputs from U1 */}
            <label htmlFor="city">Urban</label>
            <label htmlFor="city">Urban</label>
            <input
                    type="number"
                    step="0.1"
                    id="nsUrban"
                    min="0"
                    max="100"
                    onChange={handleNsUrban}
                    required
                  />
          </div>
          <div>
            {/* I just placed the first label there as placeholder, but it needs to be the user inputs from U1 */}
            <label htmlFor="suburban"> Suburban</label>
            <label htmlFor="suburban"> Suburban</label>
            <input
                    type="number"
                    id="nsSuburban"
                    step="any"
                    min="0.0"
                    max="100.0"
                    onChange={handleNsSuburban}
                    required
                  />
          </div>
          <div>
            {/* I just placed the first label there as placeholder, but it needs to be the user inputs from U1 */}
            <label htmlFor="town">Town</label>
            <label htmlFor="town">Town</label>
            <input
                    type="number"
                    id="nsTown"
                    step="0.1"
                    min="0.0"
                    max="100.0"
                    onChange={handleNsTown}
                    required
                  />
          </div>
          <div>
            {/* I just placed the first label there as placeholder, but it needs to be the user inputs from U1 */}
            <label htmlFor="rural">Rural</label>
            <label htmlFor="rural">Rural</label>
            <input
                    type="number"
                    id="nsRural"
                    step="0.1"
                    min="0"
                    max="100"
                    onChange={handleNsRural}
                    required
                  />
          </div>
          <h>{totalNewResidents}</h>
          <div>
                  <Button
                    size="small"
                    type="submit"
                    value="Submit"
                    label="Save"
                    primary
                  />
                </div>
          <br />
          <Linechart />
          <LineLegend />
        </form>
      </section>
    </article>
  );
};

U2planner.propTypes = {
  settlementDistribution: PropTypes.array.isRequired,
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

U2planner.defaultProps = {
  user: null,
};
