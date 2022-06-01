import React from "react";
import "../css/startpage.css";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import "../css/u1planner.css";
import { Button } from "./Button";
import { useStorageInt, useStorageString } from "../reducers/useStorage";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import { useNavigate} from "react-router-dom";

/**
 * Consumption baseline input form UI component
 * @return {}
 */

export const ConsumptionBaseline = () => {
  const navigate = useNavigate();
  const [areaType, setAreaType] = useStorageString("areaType", "");
  const [houseSize, setHouseSize] = useStorageInt("houseSize", 0);
  const [incomeChoice, setIncomeChoice] = useStorageInt("incomeChoice", 0);
  const [effScalerInitial, setEffScalerInitial] = useStorageString(
    "effScalerInitial",
    "normal"
  );

  const handleHouseSize = (e) => {
    e.preventDefault();
    setHouseSize(Number(e.target.value));
  };

  const handleIncomeChoice = (e) => {
    e.preventDefault();
    setIncomeChoice(Number(e.target.value));
  };
  const handleAreaType = (e) => {
    e.preventDefault();
    setAreaType(e.target.value);
  };

  const showConsumptionBaseline = () => {
    navigate("../consumptionBaselineResults", {
      replace: true,
    });
  };


    return (
      <>
        <br />
        <article>
          <br />
          <div>
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="Area and type population" />
            </Divider>
            <Alert severity="info">
              This section is used to create a baseline for the
              consumption-based quantification. The consumption calculation
              accounts for the emissions caused by the residents of the area, no
              matter where those emissions occur. The tool allocates emissions
              using data on the annual expenditure of households across a wide
              range of products.
            </Alert>
          </div>
          <section>
            <form onSubmit={showConsumptionBaseline}>
              <div className="settlementDiv">
                <div className="div_transport">
                  <label>
                    <b>Area type</b>
                  </label>
                  <label></label>
                </div>
                <Tooltip title="Please provide a basic description of the area. There are four options for the type of urban area.">
                  <div className="div_transport">
                    <label htmlFor="select_planned_area">
                      {" "}
                      Planned area type
                    </label>
                    <select
                      className="select_planned_area"
                      id="select_planned_area"
                      onChange={handleAreaType}
                      defaultValue={areaType}
                    >
                      <option value="DefaultOption">Select area type</option>
                      <optgroup label="Planned area types">
                        <option value="average">Average/mix</option>
                        <option value="city">City</option>
                        <option value="town">Town</option>
                        <option value="rural">Rural</option>
                      </optgroup>
                    </select>
                  </div>
                </Tooltip>
                <Tooltip title="The household occupancy level refers to the average number of people per household, including dependants.">
                  <div className="div_transport">
                    <label htmlFor="house_size" className="settle_label">
                      Average house occupancy level
                    </label>
                    <input
                      className="input_occupancy"
                      type="number"
                      min="0"
                      id="house_size"
                      onChange={handleHouseSize}
                      defaultValue={houseSize}
                      placeholder={houseSize}
                      required
                    />
                  </div>
                </Tooltip>
                <Tooltip title="If the average income level of the residents is not known, please choose average/unknown.">
                  <div className="div_transport">
                    <label htmlFor="income_choice">
                      Average income level of households
                    </label>
                    <select
                      className="select_transport"
                      id="income_choice"
                      name="income_choice"
                      onChange={handleIncomeChoice}
                      defaultValue={incomeChoice}
                      required
                    >
                      <option value="DefaultOption">Select Income </option>
                      <optgroup label="Household income levels">
                        <option value="0">3rd_household</option>
                        <option value="1">Bottom 20%</option>
                        <option value="5">Top 20 %</option>
                        <option value="2">20-40 %</option>
                        <option value="3">40-60%</option>
                        <option value="4">60-80 %</option>
                        <option value="3">Average/unknown</option>
                      </optgroup>
                    </select>
                  </div>
                </Tooltip>

                <div className="div_transport">
                  <label
                    htmlFor="decarbonization_percent"
                    className="settle_label"
                  >
                    Expected rate of global decarbonisation? (%)
                  </label>
                  <select
                    className="select_transport"
                    id="decarbonization_percent"
                    name="decarbonization_percent"
                    onChange={(e) => setEffScalerInitial(e.target.value)}
                    defaultValue={effScalerInitial}
                    required
                  >
                    <option value="DefaultOption">Select rate %</option>
                    <optgroup label="Global decarbonisation %">
                      <option value="normal">Normal</option>
                      <option value="fast">Fast</option>
                      <option value="slow">Slow</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div className="nextCBQ">
                <Button
                  size="small"
                  value="charts"
                  onClick={showConsumptionBaseline}
                  label="Next &raquo;"
                  primary
                />
              </div>
            </form>
            <br />
          </section>
        </article>
      </>
    );
};
