import React from "react";
import PropTypes from "prop-types";
import { Header } from "./Header"; 



export const StartPage = ({ user, onLogin, onLogout, onCreateAccount }) => {
  return (
    <article>
         {<Header
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      /> }
      <section>
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
            <select id="eu_countries" name="eu_countries">
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
            <label htmlFor="population_assessment">
              Population of the assessment area
            </label>
            <input type="text" id="population_assessment" />
          </div>
        </form>
      </section>
    </article>
  );
};

StartPage.propTypes = {
    user: PropTypes.shape({}),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired,
  };
  
StartPage.defaultProps = {
    user: null,
  };
  