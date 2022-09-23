import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import "../css/u1planner.css";
import Chip from "@mui/material/Chip";
import axios from "axios";
import { ConsumptionSummary } from "./ConsumptionSummary"; 
import CircularProgress from "@mui/material/CircularProgress";
import urlPrefix from "../Config";
import { Button } from "./Button";
import { useNavigate} from "react-router-dom";
/**
 * Consumption Results
 * @return {}
 */

export const ConsumptionResults = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
 

  const [bl, setBlConsumption]= useState(() => {
    const savedBaselineConsumption = localStorage.getItem("bl");
    const initialValue = JSON.parse(savedBaselineConsumption);
    return initialValue || {};
  });

  const [blTotalEmmissions, setBlTotalEmissions]= useState(() => {
    const savedTotalEm = localStorage.getItem("blTotalEmmissions");
    const initialValue = JSON.parse(savedTotalEm);
    return initialValue || {};
  });

  const [bLTotalAreaEmissions, setBlTotalAreaEmissions]= useState(() => {
    const savedBaselineTae = localStorage.getItem("bLTotalAreaEmissions");
    const initialValue = JSON.parse(savedBaselineTae);
    return initialValue || {};
  });

  const [blSummedEmissions, setBlSummedEmissions]= useState(() => {
    const savedBlSummedEmissions = localStorage.getItem("blSummedEmissions");
    const initialValue = JSON.parse(savedBlSummedEmissions);
    return initialValue || {};
  });

  const [p1SummedEmissions, setP1SummedEmissions]= useState(() => {
    const savedP1SummedEmissions = localStorage.getItem("p1SummedEmissions");
    const initialValue = JSON.parse(savedP1SummedEmissions);
    return initialValue || {};
  });

  const [p1, setP1] = useState(() => {
    const savedPolicy = localStorage.getItem("p1");
    const initialValue = JSON.parse(savedPolicy);
    return initialValue || {};
  });
 
  const  [p1TotalEmissions, setP1totalEmissions] = useState(() => {
    const savedPolicyTotalEmissions = localStorage.getItem("p1TotalEmissions");
    const initialValue = JSON.parse(savedPolicyTotalEmissions);
    return initialValue || {};
  });

  const   [p1TotalAreaEmissions, setP1totalAreaEmissions]  = useState(() => {
    const savedBase = localStorage.getItem("p1TotalAreaEmissions");
    const initialValue = JSON.parse(savedBase);
    return initialValue || {};
  });


  const fetchConsumptionData = () => {
    const consumptionRequest = JSON.parse(localStorage.getItem("consumptionRequest"));
    const headers = { "Content-type": "application/json" };

    axios
      .post(
        urlPrefix + "/api/v1/calculate/consumption",
        consumptionRequest,
        headers
      )
      .then((response) => {
        setBlConsumption(response.data.data.consumption.BL);
        setBlTotalEmissions(response.data.data.consumption.BLTotalEmissions);
        setP1totalAreaEmissions(
          response.data.data.consumption.P1TotalAreaEmissions
        );
        setP1(response.data.data.consumption.P1);
        setP1totalEmissions(response.data.data.consumption.P1TotalEmissions);
        setBlTotalAreaEmissions(
          response.data.data.consumption.BLTotalAreaEmissions
        );
        /*   setP1YMax(response.data.data.consumption.P1TotalAreaEmissionsMax);
        setBlYMax(response.data.data.consumption.BLMax); */
        setBlSummedEmissions(response.data.data.consumption.BLSummedEmissions);
        setP1SummedEmissions(response.data.data.consumption.P1SummedEmissions);
          // eslint-disable-next-line no-console
          console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        // eslint-disable-next-line no-console
        console.error("There was an error!", error.message);
      });
  };

  useEffect(async () => {
    // fetchConsumptionData();
    const consumptionRequest = JSON.parse(localStorage.getItem("consumptionRequest"));
    const headers = { "Content-type": "application/json" };

    axios
      .post(
        urlPrefix + "/api/v1/calculate/consumption",
        consumptionRequest,
        headers
      )
      .then((response) => {
        setBlConsumption(response.data.data.consumption.BL);
        setBlTotalEmissions(response.data.data.consumption.BLTotalEmissions);
        setP1totalAreaEmissions(
          response.data.data.consumption.P1TotalAreaEmissions
        );
        setP1(response.data.data.consumption.P1);
        setP1totalEmissions(response.data.data.consumption.P1TotalEmissions);
        setBlTotalAreaEmissions(
          response.data.data.consumption.BLTotalAreaEmissions
        );
        /*   setP1YMax(response.data.data.consumption.P1TotalAreaEmissionsMax);
        setBlYMax(response.data.data.consumption.BLMax); */
        setBlSummedEmissions(response.data.data.consumption.BLSummedEmissions);
        setP1SummedEmissions(response.data.data.consumption.P1SummedEmissions);
          // eslint-disable-next-line no-console
          console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        // eslint-disable-next-line no-console
        console.error("There was an error!", error.message);
      });
  }, []);



  useEffect(() => {
    localStorage.setItem(
      "blTotalEmmissions",
      JSON.stringify(blTotalEmmissions)
    );
  }, [blTotalEmmissions]);
  
  useEffect(() => {
    localStorage.setItem(
      "bLTotalAreaEmissions",
      JSON.stringify(bLTotalAreaEmissions)
    );
  }, [bLTotalAreaEmissions]);

  useEffect(() => {
    localStorage.setItem(
      "blSummedEmissions",
      JSON.stringify(blSummedEmissions)
    );
  }, [blSummedEmissions]);

  useEffect(() => {
    localStorage.setItem("bl", JSON.stringify(bl));
  }, [bl]);


  useEffect(() => {
    localStorage.setItem("p1", JSON.stringify(p1));
  }, [p1]);

  useEffect(() => {
    localStorage.setItem(
      "p1TotalAreaEmissions",
      JSON.stringify(p1TotalAreaEmissions)
    );
  }, [p1TotalAreaEmissions]);

  useEffect(() => {
    localStorage.setItem(
      "p1SummedEmissions",
      JSON.stringify(p1SummedEmissions)
    );
  }, [p1SummedEmissions]);

 
  useEffect(() => {
    localStorage.setItem("p1TotalEmissions", JSON.stringify(p1TotalEmissions));
  }, [p1TotalEmissions]);

 

  if (isLoading) {
    return <CircularProgress color="success" />;
  }

  return (
    <article>
      <div className="heading">
        <h2>Results</h2>
      </div>
      <section>
        <>
        {bl !== undefined &&(
          <ConsumptionSummary
            p1TotalEmissions={p1TotalEmissions}
            blTotalEmmissions={blTotalEmmissions}
            bLTotalAreaEmissions={bLTotalAreaEmissions}
            p1TotalAreaEmissions={p1TotalAreaEmissions}
            blSummedEmissions={blSummedEmissions}
            p1SummedEmissions={p1SummedEmissions}
            bl={bl}
            p1={p1}
          />
          )}
        </>
        <div className="backButtonNew">
            <Button
              size="small"
              value="backProjections"
              onClick={() => navigate("../consumptionTransport", { replace: true })}
              label="&laquo; Previous"
              secondary="true"
            />
          </div>
      </section>
    </article>
  );
};
