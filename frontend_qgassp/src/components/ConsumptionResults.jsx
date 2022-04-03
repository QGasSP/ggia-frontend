import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import "../css/u1planner.css";
import Chip from "@mui/material/Chip";
import axios from "axios";

import { LineLegendConsumption } from "./LineLegendConsumption";
import PropTypes from "prop-types";
import { ConsumptionSummary } from "./ConsumptionSummary";

/**
 * Consumption Results
 * @return {}
 */

export const ConsumptionResults = ({ consumptionRequest }) => {
  const [blTransport, setBlTransport] = useState({});
  const [blTotalEmmissions, setBlTotalEmissions] = useState({});
  const [p1, setP1] = useState({});
  const [p1TotalEmissions, setP1totalEmissions] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const resultsLegend = [
    { title: "RF", color: "#3d58a3", strokeWidth: 13 },
    { title: "BL", color: "#ef7d00", strokeWidth: 13 },
  ];

  const fetchConsumptionData = () => {
    const headers = { "Content-type": "application/json" };

    axios
      .post(
        "https://ggia-dev.ulno.net/api/v1/calculate/consumption",
        consumptionRequest,
        headers
      )
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log()
        setBlTransport(response.data.data.consumption.BL);
        setBlTotalEmissions(response.data.data.consumption.BLTotalEmissions);
        setP1(response.data.data.consumption.P1);
        setP1totalEmissions(response.data.data.consumption.P1TotalEmissions);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        // eslint-disable-next-line no-console
        console.error("There was an error!", error);
      });
  };

  useEffect(async () => {
    fetchConsumptionData();
  }, []);

  useEffect(() => {
    localStorage.setItem("p1", JSON.stringify(p1));
  }, [p1]);
  useEffect(() => {
    localStorage.setItem("blTransport", JSON.stringify(blTransport));
  }, [blTransport]);
  useEffect(() => {
    localStorage.setItem("p1TotalEmissions", JSON.stringify(p1TotalEmissions));
  }, [p1TotalEmissions]);
  useEffect(() => {
    localStorage.setItem(
      "blTotalEmmissions",
      JSON.stringify(blTotalEmmissions)
    );
  }, [blTotalEmmissions]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <section>
        <Divider textAlign="left" flexItem>
          {" "}
          <Chip label="Results" />
        </Divider>
        <>
          <ConsumptionSummary
            blTransport={blTransport}
            blTotalEmmissions={blTotalEmmissions}
            p1={p1}
            p1TotalEmissions={p1TotalEmissions}
          />
        </>
        {isError && <div>Error fetching data.</div>}
      </section>
    </article>
  );
};

ConsumptionResults.propTypes = {
  consumptionRequest: PropTypes.object.isRequired,
};
