import React, { useState, useEffect } from "react";
import "../css/startpage.css";
import Divider from "@mui/material/Divider";
import "../css/u1planner.css";
import PropTypes from "prop-types";
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
import { ConsumptionHseEnergy } from "./ConsumptionHseEnergy";

const BarSeries = VerticalBarSeries;

export const ConsumptionBaselineResults = ({
  areaType,
  houseSize,
  incomeChoice,
  effScalerInitial,
}) => {
  const country = localStorage.getItem("country");
  const localDataset = localStorage.getItem("localDataset");
  const year = parseInt(localStorage.getItem("year"));
  const region = localStorage.getItem("country");
  const popSize = parseInt(localStorage.getItem("population"));
  const [bL, setBL] = useState({});
  const [bLTotalEmissions, setBLTotalEmissions] = useState({});

  const [districtProp, setDistrictProp] = useState(0);
  const [electricityHeatProp, setElectricityHeatProp] = useState(0);
  const [combustableFuelsProp, setCombustableFuelsProp] = useState(0);
  const [liquidsProp, setLiquidProp] = useState(0);
  const [solidsProp, setSolidsProp] = useState(0);
  const [gasesProp, setGasesProp] = useState(0);
  const [districtValue, setDistrictValue] = useState(0);
  const [isBaselineLoading, setIsLoadingBaseline] = useState(true);
  const [isResponseError, setIsResponseError] = useState(false);
  const [consumptionBlStatus, setConsumptionBlStatus] = useState("");
  const [errorBlConsumption, setBlConsumptionError] = useState("");

  const dataBlHousingEnergy = [];

  const dataBlHousingOther = [];
  const dataBlTransportFuels = [];
  const dataBlTransportOther = [];
  const dataBlAirTravel = [];
  const dataBlFood = [];
  const dataBlTangiblegoods = [];
  const dataBlServices = [];

  const [nextCBQuantification, setCbq] = useState(false);
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
        setElectricityHeatProp(response.data.data.consumption.electricityHeatProp);
        setCombustableFuelsProp(response.data.data.consumption.combustableFuelsProp);
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

  if (nextCBQuantification === false) {
    return (
      <>
        {consumptionBlStatus !== "success" && <div>{errorBlConsumption}</div>}
        <br />
        <Divider textAlign="left" flexItem>
          {" "}
          <b>{country}: Annual household emissions </b>
        </Divider>
        <div>
          <div className="settlementDiv">
            <LineLegendConsumption
              colorItems={hseHoldEmissions}
              orientation="horizontal"
            />
          </div>

          <XYPlot width={1000} height={500} stackBy="y" xType="ordinal">
            <HorizontalGridLines />
            <VerticalGridLines />
            <VerticalBarSeries className="StackedBarchart" />
            <XAxis title="Year" />
            <YAxis title="Emissions/ kG C02 eq" />
            <BarSeries
              color="#3d58a3"
              data={dataBlHousingEnergy}
              opacity={0.6}
            />
            <BarSeries
              color="#ef7d00"
              data={dataBlHousingOther}
              opacity={0.6}
            />
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

            <BarSeries
              color="#e1719a"
              data={dataBlTangiblegoods}
              opacity={0.6}
            />

            <BarSeries color="#76918e" data={dataBlServices} opacity={0.6} />
          </XYPlot>
        </div>
        <Divider textAlign="left" flexItem>
          {" "}
          <b> {country}: Total emissions of area based on year</b>
        </Divider>

        <br />
        <div className="consumptionTableDiv">
          <table>
            <thead className="tableHeader">
              <tr>
                <th className="tableTotalEmissions">Year</th>
                <th className="tableTotalEmissions">Total emissions</th>
              </tr>
            </thead>
            {Object.keys(bLTotalEmissions).map((key, i) => (
              <tbody key={i}>
                <tr>
                  <td className="tableTotalEmissions">
                    <b>{key}</b>
                  </td>
                  <td className="tableTotalEmissions">
                    {bLTotalEmissions[key]}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className="nextCBQ">
          <Button
            size="small"
            value="charts"
            onClick={() => setCbq(true)}
            label="Next &raquo;"
            primary
          />
        </div>
      </>
    );
  } else {
    return (
      <ConsumptionHseEnergy
        districtProp={districtProp}
        electricityHeatProp={electricityHeatProp}
        combustableFuelsProp={combustableFuelsProp}
        liquidsProp={liquidsProp}
        solidsProp={solidsProp}
        gasesProp={gasesProp}
        districtValue={districtValue}
      />
    );
  }
};

ConsumptionBaselineResults.propTypes = {
  areaType: PropTypes.string.isRequired,
  houseSize: PropTypes.number.isRequired,
  incomeChoice: PropTypes.number.isRequired,
  effScalerInitial: PropTypes.string.isRequired,
};
