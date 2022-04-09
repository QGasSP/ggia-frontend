import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import "../css/u1planner.css";
import Chip from "@mui/material/Chip";
import axios from "axios";
import PropTypes from "prop-types";
import { ConsumptionSummary } from "./ConsumptionSummary";
import CircularProgress from "@mui/material/CircularProgress";
import urlPrefix from "../Config";

/**
 * Consumption Results
 * @return {}
 */

export const ConsumptionResults = ({ consumptionRequest }) => {
  const [blTransport, setBlTransport] = useState({});
  const [blTotalEmmissions, setBlTotalEmissions] = useState({});
  const [bLTotalAreaEmissions, setBlTotalAreaEmissions] = useState({});
  const [p1, setP1] = useState({});
  const [p1TotalEmissions, setP1totalEmissions] = useState({});
  const [p1TotalAreaEmissions, setP1totalAreaEmissions] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [bLMax, setBlYMax] = useState(false);
  const [p1TotalAreaEmissionsMax, setP1YMax] = useState(false);

  const fetchConsumptionData = () => {
    const headers = { "Content-type": "application/json" };

    axios
      .post(
        urlPrefix + "/api/v1/calculate/consumption",
        consumptionRequest,
        headers
      )
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
        setBlTransport(response.data.data.consumption.BL);
        setBlTotalEmissions(response.data.data.consumption.BLTotalEmissions);
        setP1totalAreaEmissions(
          response.data.data.consumption.P1TotalAreaEmissions
        );
        setP1(response.data.data.consumption.P1);
        setP1totalEmissions(response.data.data.consumption.P1TotalEmissions);
        setBlTotalAreaEmissions(
          response.data.data.consumption.BLTotalAreaEmissions
        );
        setP1YMax(response.data.data.consumption.P1TotalAreaEmissionsMax);
        setBlYMax(response.data.data.consumption.BLMax);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        // eslint-disable-next-line no-console
        console.error("There was an error!", error.message);
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
    return <CircularProgress color="success" />;
  }

  return (
    <article>
      <section>
        <Divider textAlign="left" flexItem>
          {" "}
          <Chip label="Results" />
        </Divider>
        <>
          {/*    {consumptionStatus === "sucess" && ( )} */}
          <ConsumptionSummary
            yAxisValue={Math.max(p1TotalAreaEmissionsMax, bLMax)}
            p1TotalEmissions={p1TotalEmissions}
            blTotalEmmissions={blTotalEmmissions}
            bLTotalAreaEmissions={bLTotalAreaEmissions}
            p1TotalAreaEmissions={p1TotalAreaEmissions}
            blTransport={blTransport}
            p1={p1}
          />
        </>
      </section>
    </article>
  );
};

ConsumptionResults.propTypes = {
  consumptionRequest: PropTypes.object.isRequired,
};
