import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/u1planner.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StackedBarchart } from "./StackedBarchart";

/**
 * U1 Planner baseline user input form
 * @return {}
 */
// const BarSeries = VerticalBarSeries;
export const U1planner = ({
  country,
  year,
  population,
  settlementDistribution,
}) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [nextU1Charts, setU1Charts] = useState(false);
  const [emission, setEmissionData] = useState("");
  const [projections, setProjections] = useState("");
  const [baseline, setBaseline] = useState({});

  const [nsArea, setNsArea] = useState(0);
  const [ewArea, setEwArea] = useState(0);
  const [nonResidentialRoad, setNonResidentialRoad] = useState(0);
  const [freightRoad, setFreightRoad] = useState(0);
  const [freightRail, setFreightRail] = useState(0);
  const [freightInlandWaterway, setFreightInlandWaterway] = useState(0);

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

  if (nextU1Charts=== false) {

  return (
    <>
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
          />
        </div>

        <br />

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
          <label htmlFor="freight=road">Freight transport by road</label>
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
          <label htmlFor="freight_rail">Freight transport by rail</label>
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


        <div className="nextU2Button">
          <Button
            size="small"
            value="visualize_u1"
            onClick={() => setU1Charts(true)}
            label="Next &raquo;"
            primary
          />
        </div>
      </div>
    </>
  );
} else {
  return (
    <StackedBarchart
      projections={projections}
      settlementDistribution={settlementDistribution}
      baseline={baseline}
      emission={emission}
    />
   
  );
}
};

U1planner.propTypes = {
  settlementDistribution: PropTypes.object.isRequired,
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
};
