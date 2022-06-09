import React, { useState, useEffect } from "react";
import "../css/startpage.css";
import Divider from "@mui/material/Divider";
import "../css/u1planner.css";
import {
  XYPlot,
  VerticalGridLines,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
} from "react-vis";

import urlPrefix from "../Config";
import CircularProgress from "@mui/material/CircularProgress";
import { LineLegendConsumption } from "./LineLegendConsumption";
import { hseHoldEmissions } from "../reducers/Consumption";
import axios from "axios";
import { Button } from "./Button";
import Alert from "@mui/material/Alert";
import { Container } from "@mui/material";
import { useStorageFloat } from "../reducers/useStorage";
import { useNavigate } from "react-router-dom";

const BarSeries = VerticalBarSeries;

/**
 * Consumption baseline charts UI component
 * @return {}
 */

export const ConsumptionBaselineResults = () => {
  const navigate = useNavigate();
  const country = localStorage.getItem("country");
  const localDataset = localStorage.getItem("localDataset");
  const year = parseInt(localStorage.getItem("year"));
  const region = localStorage.getItem("country");
  const popSize = parseInt(localStorage.getItem("population"));

  const areaType = localStorage.getItem("areaType");
  const houseSize = parseInt(localStorage.getItem("houseSize"));
  const incomeChoice = parseInt(localStorage.getItem("incomeChoice"));
  const effScalerInitial = localStorage.getItem("effScalerInitial");

  const [districtProp, setDistrictProp] = useStorageFloat(
    "districtProp",
    parseFloat(0)
  );
  const [electricityHeatProp, setElectricityHeatProp] = useStorageFloat(
    "electricityHeatProp",
    parseFloat(0)
  );
  const [combustableFuelsProp, setCombustableFuelsProp] = useStorageFloat(
    "combustableFuelsProp",
    parseFloat(0)
  );
  const [liquidsProp, setLiquidProp] = useStorageFloat(
    "liquidsProp",
    parseFloat(0)
  );
  const [solidsProp, setSolidsProp] = useStorageFloat(
    "solidsProp",
    parseFloat(0)
  );
  const [gasesProp, setGasesProp] = useStorageFloat("gasesProp", parseFloat(0));
  const [districtValue, setDistrictValue] = useStorageFloat(
    "districtValue",
    parseFloat(0)
  );
  const [isBaselineLoading, setIsLoadingBaseline] = useState(true);
  const [isResponseError, setIsResponseError] = useState(false);
  const [consumptionBlStatus, setConsumptionBlStatus] = useState("");
  const [errorBlConsumption, setBlConsumptionError] = useState("");

  const [bL, setBL] = useState(() => {
    const savedBase = localStorage.getItem("bL");
    const initialValue = JSON.parse(savedBase);
    return initialValue || {};
  });

  const [bLTotalEmissions, setBLTotalEmissions] = useState(() => {
    const savedBase = localStorage.getItem("bLTotalEmissions");
    const initialValue = JSON.parse(savedBase);
    return initialValue || {};
  });

  const dataBlHousingEnergy = [];

  const dataBlHousingOther = [];
  const dataBlTransportFuels = [];
  const dataBlTransportOther = [];
  const dataBlAirTravel = [];
  const dataBlFood = [];
  const dataBlTangiblegoods = [];
  const dataBlServices = [];

  // const [nextCBQuantification, setCbq] = useState(false);
  const fetchConsumptionBaseline = () => {
    const rawData = {
      country,
      localDataset,
      year,
      popSize,
      region,
      areaType,
      houseSize,
      incomeChoice,
      effScalerInitial,
    };
    const headers = {
      "Content-type": "application/json",
    };
    axios
      .post(urlPrefix + "/api/v1/calculate/consumption", rawData, headers)
      .then((response) => {
        setConsumptionBlStatus(response.data.status);
        setBL(response.data.data.consumption.BL);
        setBLTotalEmissions(response.data.data.consumption.BLTotalEmissions);
        setDistrictProp(response.data.data.consumption.districtProp);
        setElectricityHeatProp(
          response.data.data.consumption.electricityHeatProp
        );
        setCombustableFuelsProp(
          response.data.data.consumption.combustableFuelsProp
        );
        setLiquidProp(response.data.data.consumption.liquidsProp);
        setSolidsProp(response.data.data.consumption.solidsProp);
        setGasesProp(response.data.data.consumption.gasesProp);
        setDistrictValue(response.data.data.consumption.districtValue);
        setIsLoadingBaseline(false);
      })
      .catch((error) => {
        setIsLoadingBaseline(false);
        setIsResponseError(true);
        if (error.response) {
          setBlConsumptionError("network error");
          // eslint-disable-next-line no-console
          console.error(error, error.data);
        } else {
          setBLTotalEmissions(error.message);
          // eslint-disable-next-line no-console
          console.error(error);
        }
        setBlConsumptionError(error.message);
        // eslint-disable-next-line no-console
        console.error("There was an error!", error.message);
      });
  };

  useEffect(async () => {
    fetchConsumptionBaseline();
  }, []);

  useEffect(() => {
    localStorage.setItem("bL", JSON.stringify(bL));
  }, [bL]);

  useEffect(() => {
    localStorage.setItem("bLTotalEmissions", JSON.stringify(bLTotalEmissions));
  }, [bLTotalEmissions]);

  const showConsumptionHseEnergy = () => {
    navigate("../consumptionHseEnergy", {
      replace: true,
    });
  };

  if (isBaselineLoading) {
    return <CircularProgress color="success" />;
  }

  for (let i = year; i < 2051; i++) {
    dataBlHousingEnergy.push({ x: i, y: bL.housingEnergy[i] });
    dataBlHousingOther.push({ x: i, y: bL.housingOther[i] });
    dataBlTransportFuels.push({ x: i, y: bL.transportFuels[i] });
    dataBlTransportOther.push({ x: i, y: bL.transportOther[i] });
    dataBlAirTravel.push({ x: i, y: bL.airTravel[i] });
    dataBlFood.push({ x: i, y: bL.food[i] });
    dataBlTangiblegoods.push({ x: i, y: bL.tangibleGoods[i] });
    dataBlServices.push({ x: i, y: bL.services[i] });
  }

  return (
    <Container maxWidth="xl">
      {consumptionBlStatus !== "success" && <div>{errorBlConsumption}</div>}
      <br />
      <Divider textAlign="left" flexItem>
        {" "}
        <b>{country}: Annual household emissions </b>
      </Divider>
      <div>
        <div className="luc_alert_container">
          <Alert severity="info">
            The first graph shows a projection of annual emissions under the
            baseline scenario for each resident for every year until 2050. Each
            bar is subdivided into emissions from each sector.
          </Alert>
        </div>
        <div className="settlementDiv">
          <LineLegendConsumption
            colorItems={hseHoldEmissions}
            orientation="horizontal"
          />
        </div>

        <XYPlot width={1100} height={550} margin={{left: 100}} stackBy="y" xType="ordinal">
          <HorizontalGridLines />
          <VerticalGridLines />
          <VerticalBarSeries className="StackedBarchart" />
          <XAxis title="Year"/>
          <YAxis title="Emissions/ kG C02 eq" />
          <BarSeries color="#3d58a3" data={dataBlHousingEnergy} opacity={0.6} />
          <BarSeries color="#ef7d00" data={dataBlHousingOther} opacity={0.6} />
          <BarSeries
            color="#95c11f"
            data={dataBlTransportFuels}
            opacity={0.6}
          />
          <BarSeries
            color="#ce143d"
            data={dataBlTransportOther}
            opacity={0.6}
          />
          <BarSeries color="#845f9e" data={dataBlAirTravel} opacity={0.6} />
          <BarSeries color="#996e35" data={dataBlFood} opacity={0.6} />

          <BarSeries color="#e1719a" data={dataBlTangiblegoods} opacity={0.6} />

          <BarSeries color="#76918e" data={dataBlServices} opacity={0.6} />
        </XYPlot>
      </div>
      <Divider textAlign="left" flexItem>
        {" "}
        <b> {country}: Total emissions of area based on year</b>
      </Divider>

      <br />
      <div className="consumptionTableDiv">
        <Alert severity="info">
          The second graph is a bar chart showing the breakdown of per capita
          emissions by sector for the baseline year.
        </Alert>
        <div className="luc_alert_container">
          <table className="table-results">
            <thead className="tableHeader">
              <tr>
                <th className="tableTotalEmissions">Year</th>
                {Object.keys(bLTotalEmissions).map((key, i) => (
                  <th key={i} className="tableTotalEmissions">
                    <b>{key}</b>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tableTotalEmissions">Total emissions</td>
                {Object.keys(bLTotalEmissions).map((key, i) => (
                  <td key={i} className="tableTotalEmissions">
                    {Math.round(bLTotalEmissions[key])}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="backButtonNew">
        <Button
          size="small"
          value="backProjections"
          onClick={() => navigate("../consumptionBaseline", { replace: true })}
          label="&laquo; Previous"
          secondary
        />
      </div>

      <div className="nextCBQ">
        <Button
          size="small"
          value="charts"
          onClick={showConsumptionHseEnergy}
          label="Next &raquo;"
          primary
        />
      </div>
    </Container>
  );
};
