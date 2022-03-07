import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/u1planner.css";
import axios from "axios";
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
  const [nextU1Charts, setU1Charts] = useState(false);
  const [emission, setEmissionData] = useState("");
  const [projections, setProjections] = useState("");
  const [baseline, setBaseline] = useState({});

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

  if (nextU1Charts === false) {
    return (
      <>
        <div className="nextU2Button">
          <Button
            size="small"
            value="visualize_u1"
            onClick={() => setU1Charts(true)}
            label="Next &raquo;"
            primary
          />
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
