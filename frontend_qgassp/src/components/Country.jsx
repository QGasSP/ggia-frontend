import React from "react";

export const Country = () => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="eu_countries" className="intro_label">
          Country
        </label>
        <select
          className="baseline_select"
          id="eu_countries"
          name="eu_countries"
          defaultValue="Select country"
          required
        >
          <option value="DefaultOption">Select country</option>
          <option value="Austria">Austria</option>
          <option value="Belgium">Belgium</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Croatia">Croatia</option>
          <option value="Cyprus">Cyprus</option>
          <option value="Czechia">Czechia</option>
          <option value="Denmark">Denmark</option>
          <option value="Estonia">Estonia</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
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
          <option value="Norway">Norway</option>
          <option value="Poland">Poland</option>
          <option value="Portugal">Portugal</option>
          <option value="Romania">Romania</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Spain">Spain</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerlans">Switzerland</option>
          <option value="Uk">Uk</option>
        </select>
      </div>
    </>
  );
};
