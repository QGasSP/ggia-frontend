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
  const year = parseInt(localStorage.getItem("year"));
  const region = localStorage.getItem("country");
  const popSize = parseInt(localStorage.getItem("population"));
  const [bL, setBL] = useState({});
  const [bLTotalEmissions, setBLTotalEmissions] = useState({});

  const [districtProp, setDistrictProp] = useState(0);
  const [liquidsProp, setLiquidProp] = useState(0);
  const [solidsProp, setSolidsProp] = useState(0);
  const [gasesProp, setGasesProp] = useState(0);
  const [districtValue, setDistrictValue] = useState(0);
  const [isBaselineLoading, setIsLoadingBaseline] = useState(true);
  const [isResponseError, setIsResponseError] = useState(false);
  const [consumptionBlStatus, setConsumptionBlStatus] = useState("");
  const [errorBlConsumption, setBlConsumptionError] = useState("");

  const [nextCBQuantification, setCbq] = useState(false);
  const fetchConsumptionBaseline = () => {
    const rawData = {
      country,
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
        setLiquidProp(response.data.data.consumption.liquidsProp);
        setSolidsProp(response.data.data.consumption.solidsProp);
        setGasesProp(response.data.data.consumption.gasesProp);
        setDistrictValue(response.data.data.consumption.districtValue);
        setIsLoadingBaseline(false);
      })
      .catch((error) => {
        setIsLoadingBaseline(false);
        setIsResponseError(true);
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
    return <div>Loading...</div>;
  } 

  if (nextCBQuantification === false) {
    return (
      <>
      {consumptionBlStatus !== "success"&& <div>{errorBlConsumption}</div>}
        <br />
        <Divider textAlign="left" flexItem>
          {" "}
          <b>Annual household emissions {country}</b>
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
              data={[
                { x: 2020, y: bL.housingEnergy["2020"] },
                { x: 2021, y: bL.housingEnergy["2021"] },
                { x: 2022, y: bL.housingEnergy["2022"] },
                { x: 2023, y: bL.housingEnergy["2023"] },
                { x: 2024, y: bL.housingEnergy["2024"] },
                { x: 2025, y: bL.housingEnergy["2025"] },
                { x: 2026, y: bL.housingEnergy["2026"] },
                { x: 2027, y: bL.housingEnergy["2027"] },
                { x: 2028, y: bL.housingEnergy["2028"] },
                { x: 2029, y: bL.housingEnergy["2029"] },
                { x: 2030, y: bL.housingEnergy["2030"] },
                { x: 2031, y: bL.housingEnergy["2031"] },
                { x: 2032, y: bL.housingEnergy["2032"] },
                { x: 2033, y: bL.housingEnergy["2033"] },
                { x: 2034, y: bL.housingEnergy["2034"] },
                { x: 2035, y: bL.housingEnergy["2035"] },
                { x: 2036, y: bL.housingEnergy["2036"] },
                { x: 2037, y: bL.housingEnergy["2037"] },
                { x: 2038, y: bL.housingEnergy["2038"] },
                { x: 2039, y: bL.housingEnergy["2039"] },
                { x: 2040, y: bL.housingEnergy["2040"] },
                { x: 2041, y: bL.housingEnergy["2041"] },
                { x: 2042, y: bL.housingEnergy["2042"] },
                { x: 2043, y: bL.housingEnergy["2043"] },
                { x: 2044, y: bL.housingEnergy["2044"] },
                { x: 2045, y: bL.housingEnergy["2045"] },
                { x: 2046, y: bL.housingEnergy["2046"] },
                { x: 2047, y: bL.housingEnergy["2047"] },
                { x: 2048, y: bL.housingEnergy["2048"] },
                { x: 2049, y: bL.housingEnergy["2049"] },
                { x: 2050, y: bL.housingEnergy["2050"] },
              ]}
            />
            <BarSeries
              color="#ef7d00"
              data={[
                { x: 2020, y: bL.housingOther["2020"] },
                { x: 2021, y: bL.housingOther["2021"] },
                { x: 2022, y: bL.housingOther["2022"] },
                { x: 2023, y: bL.housingOther["2023"] },
                { x: 2024, y: bL.housingOther["2024"] },
                { x: 2025, y: bL.housingOther["2025"] },
                { x: 2026, y: bL.housingOther["2026"] },
                { x: 2027, y: bL.housingOther["2027"] },
                { x: 2028, y: bL.housingOther["2028"] },
                { x: 2029, y: bL.housingOther["2029"] },
                { x: 2030, y: bL.housingOther["2030"] },
                { x: 2031, y: bL.housingOther["2031"] },
                { x: 2032, y: bL.housingOther["2032"] },
                { x: 2033, y: bL.housingOther["2033"] },
                { x: 2034, y: bL.housingOther["2034"] },
                { x: 2035, y: bL.housingOther["2035"] },
                { x: 2036, y: bL.housingOther["2036"] },
                { x: 2037, y: bL.housingOther["2037"] },
                { x: 2038, y: bL.housingOther["2038"] },
                { x: 2039, y: bL.housingOther["2039"] },
                { x: 2040, y: bL.housingOther["2040"] },
                { x: 2041, y: bL.housingOther["2041"] },
                { x: 2042, y: bL.housingOther["2042"] },
                { x: 2043, y: bL.housingOther["2043"] },
                { x: 2044, y: bL.housingOther["2044"] },
                { x: 2045, y: bL.housingOther["2045"] },
                { x: 2046, y: bL.housingOther["2046"] },
                { x: 2047, y: bL.housingOther["2047"] },
                { x: 2048, y: bL.housingOther["2048"] },
                { x: 2049, y: bL.housingOther["2049"] },
                { x: 2050, y: bL.housingOther["2050"] },
              ]}
            />
            <BarSeries
              color="#95c11f"
              data={[
                { x: 2020, y: bL.transportFuels["2020"] },
                { x: 2021, y: bL.transportFuels["2021"] },
                { x: 2022, y: bL.transportFuels["2022"] },
                { x: 2023, y: bL.transportFuels["2023"] },
                { x: 2024, y: bL.transportFuels["2024"] },
                { x: 2025, y: bL.transportFuels["2025"] },
                { x: 2026, y: bL.transportFuels["2026"] },
                { x: 2027, y: bL.transportFuels["2027"] },
                { x: 2028, y: bL.transportFuels["2028"] },
                { x: 2029, y: bL.transportFuels["2029"] },
                { x: 2030, y: bL.transportFuels["2030"] },
                { x: 2031, y: bL.transportFuels["2031"] },
                { x: 2032, y: bL.transportFuels["2032"] },
                { x: 2033, y: bL.transportFuels["2033"] },
                { x: 2034, y: bL.transportFuels["2034"] },
                { x: 2035, y: bL.transportFuels["2035"] },
                { x: 2036, y: bL.transportFuels["2036"] },
                { x: 2037, y: bL.transportFuels["2037"] },
                { x: 2038, y: bL.transportFuels["2038"] },
                { x: 2039, y: bL.transportFuels["2039"] },
                { x: 2040, y: bL.transportFuels["2040"] },
                { x: 2041, y: bL.transportFuels["2041"] },
                { x: 2042, y: bL.transportFuels["2042"] },
                { x: 2043, y: bL.transportFuels["2043"] },
                { x: 2044, y: bL.transportFuels["2044"] },
                { x: 2045, y: bL.transportFuels["2045"] },
                { x: 2046, y: bL.transportFuels["2046"] },
                { x: 2047, y: bL.transportFuels["2047"] },
                { x: 2048, y: bL.transportFuels["2048"] },
                { x: 2049, y: bL.transportFuels["2049"] },
                { x: 2050, y: bL.transportFuels["2050"] },
              ]}
            />
            <BarSeries
              color="#ce143d"
              data={[
                { x: 2020, y: bL.transportOther["2020"] },
                { x: 2021, y: bL.transportOther["2021"] },
                { x: 2022, y: bL.transportOther["2022"] },
                { x: 2023, y: bL.transportOther["2023"] },
                { x: 2024, y: bL.transportOther["2024"] },
                { x: 2025, y: bL.transportOther["2025"] },
                { x: 2026, y: bL.transportOther["2026"] },
                { x: 2027, y: bL.transportOther["2027"] },
                { x: 2028, y: bL.transportOther["2028"] },
                { x: 2029, y: bL.transportOther["2029"] },
                { x: 2030, y: bL.transportOther["2030"] },
                { x: 2031, y: bL.transportOther["2031"] },
                { x: 2032, y: bL.transportOther["2032"] },
                { x: 2033, y: bL.transportOther["2033"] },
                { x: 2034, y: bL.transportOther["2034"] },
                { x: 2035, y: bL.transportOther["2035"] },
                { x: 2036, y: bL.transportOther["2036"] },
                { x: 2037, y: bL.transportOther["2037"] },
                { x: 2038, y: bL.transportOther["2038"] },
                { x: 2039, y: bL.transportOther["2039"] },
                { x: 2040, y: bL.transportOther["2040"] },
                { x: 2041, y: bL.transportOther["2041"] },
                { x: 2042, y: bL.transportOther["2042"] },
                { x: 2043, y: bL.transportOther["2043"] },
                { x: 2044, y: bL.transportOther["2044"] },
                { x: 2045, y: bL.transportOther["2045"] },
                { x: 2046, y: bL.transportOther["2046"] },
                { x: 2047, y: bL.transportOther["2047"] },
                { x: 2048, y: bL.transportOther["2048"] },
                { x: 2049, y: bL.transportOther["2049"] },
                { x: 2050, y: bL.transportOther["2050"] },
              ]}
            />
            <BarSeries
              color="#845f9e"
              data={[
                { x: 2020, y: bL.airTravel["2020"] },
                { x: 2021, y: bL.airTravel["2021"] },
                { x: 2022, y: bL.airTravel["2022"] },
                { x: 2023, y: bL.airTravel["2023"] },
                { x: 2024, y: bL.airTravel["2024"] },
                { x: 2025, y: bL.airTravel["2025"] },
                { x: 2026, y: bL.airTravel["2026"] },
                { x: 2027, y: bL.airTravel["2027"] },
                { x: 2028, y: bL.airTravel["2028"] },
                { x: 2029, y: bL.airTravel["2029"] },
                { x: 2030, y: bL.airTravel["2030"] },
                { x: 2031, y: bL.airTravel["2031"] },
                { x: 2032, y: bL.airTravel["2032"] },
                { x: 2033, y: bL.airTravel["2033"] },
                { x: 2034, y: bL.airTravel["2034"] },
                { x: 2035, y: bL.airTravel["2035"] },
                { x: 2036, y: bL.airTravel["2036"] },
                { x: 2037, y: bL.airTravel["2037"] },
                { x: 2038, y: bL.airTravel["2038"] },
                { x: 2039, y: bL.airTravel["2039"] },
                { x: 2040, y: bL.airTravel["2040"] },
                { x: 2041, y: bL.airTravel["2041"] },
                { x: 2042, y: bL.airTravel["2042"] },
                { x: 2043, y: bL.airTravel["2043"] },
                { x: 2044, y: bL.airTravel["2044"] },
                { x: 2045, y: bL.airTravel["2045"] },
                { x: 2046, y: bL.airTravel["2046"] },
                { x: 2047, y: bL.airTravel["2047"] },
                { x: 2048, y: bL.airTravel["2048"] },
                { x: 2049, y: bL.airTravel["2049"] },
                { x: 2050, y: bL.airTravel["2050"] },
              ]}
            />
            <BarSeries
              color="#996e35"
              data={[
                { x: 2020, y: bL.food["2020"] },
                { x: 2021, y: bL.food["2021"] },
                { x: 2022, y: bL.food["2022"] },
                { x: 2023, y: bL.food["2023"] },
                { x: 2024, y: bL.food["2024"] },
                { x: 2025, y: bL.food["2025"] },
                { x: 2026, y: bL.food["2026"] },
                { x: 2027, y: bL.food["2027"] },
                { x: 2028, y: bL.food["2028"] },
                { x: 2029, y: bL.food["2029"] },
                { x: 2030, y: bL.food["2030"] },
                { x: 2031, y: bL.food["2031"] },
                { x: 2032, y: bL.food["2032"] },
                { x: 2033, y: bL.food["2033"] },
                { x: 2034, y: bL.food["2034"] },
                { x: 2035, y: bL.food["2035"] },
                { x: 2036, y: bL.food["2036"] },
                { x: 2037, y: bL.food["2037"] },
                { x: 2038, y: bL.food["2038"] },
                { x: 2039, y: bL.food["2039"] },
                { x: 2040, y: bL.food["2040"] },
                { x: 2041, y: bL.food["2041"] },
                { x: 2042, y: bL.food["2042"] },
                { x: 2043, y: bL.food["2043"] },
                { x: 2044, y: bL.food["2044"] },
                { x: 2045, y: bL.food["2045"] },
                { x: 2046, y: bL.food["2046"] },
                { x: 2047, y: bL.food["2047"] },
                { x: 2048, y: bL.food["2048"] },
                { x: 2049, y: bL.food["2049"] },
                { x: 2050, y: bL.food["2050"] },
              ]}
            />

            <BarSeries
              color="#e1719a"
              data={[
                { x: 2020, y: bL.tangibleGoods["2020"] },
                { x: 2021, y: bL.tangibleGoods["2021"] },
                { x: 2022, y: bL.tangibleGoods["2022"] },
                { x: 2023, y: bL.tangibleGoods["2023"] },
                { x: 2024, y: bL.tangibleGoods["2024"] },
                { x: 2025, y: bL.tangibleGoods["2025"] },
                { x: 2026, y: bL.tangibleGoods["2026"] },
                { x: 2027, y: bL.tangibleGoods["2027"] },
                { x: 2028, y: bL.tangibleGoods["2028"] },
                { x: 2029, y: bL.tangibleGoods["2029"] },
                { x: 2030, y: bL.tangibleGoods["2030"] },
                { x: 2031, y: bL.tangibleGoods["2031"] },
                { x: 2032, y: bL.tangibleGoods["2032"] },
                { x: 2033, y: bL.tangibleGoods["2033"] },
                { x: 2034, y: bL.tangibleGoods["2034"] },
                { x: 2035, y: bL.tangibleGoods["2035"] },
                { x: 2036, y: bL.tangibleGoods["2036"] },
                { x: 2037, y: bL.tangibleGoods["2037"] },
                { x: 2038, y: bL.tangibleGoods["2038"] },
                { x: 2039, y: bL.tangibleGoods["2039"] },
                { x: 2040, y: bL.tangibleGoods["2040"] },
                { x: 2041, y: bL.tangibleGoods["2041"] },
                { x: 2042, y: bL.tangibleGoods["2042"] },
                { x: 2043, y: bL.tangibleGoods["2043"] },
                { x: 2044, y: bL.tangibleGoods["2044"] },
                { x: 2045, y: bL.tangibleGoods["2045"] },
                { x: 2046, y: bL.tangibleGoods["2046"] },
                { x: 2047, y: bL.tangibleGoods["2047"] },
                { x: 2048, y: bL.tangibleGoods["2048"] },
                { x: 2049, y: bL.tangibleGoods["2049"] },
                { x: 2050, y: bL.tangibleGoods["2050"] },
              ]}
            />

            <BarSeries
              color="#76918e"
              data={[
                { x: 2020, y: bL.services["2020"] },
                { x: 2021, y: bL.services["2021"] },
                { x: 2022, y: bL.services["2022"] },
                { x: 2023, y: bL.services["2023"] },
                { x: 2024, y: bL.services["2024"] },
                { x: 2025, y: bL.services["2025"] },
                { x: 2026, y: bL.services["2026"] },
                { x: 2027, y: bL.services["2027"] },
                { x: 2028, y: bL.services["2028"] },
                { x: 2029, y: bL.services["2029"] },
                { x: 2030, y: bL.services["2030"] },
                { x: 2031, y: bL.services["2031"] },
                { x: 2032, y: bL.services["2032"] },
                { x: 2033, y: bL.services["2033"] },
                { x: 2034, y: bL.services["2034"] },
                { x: 2035, y: bL.services["2035"] },
                { x: 2036, y: bL.services["2036"] },
                { x: 2037, y: bL.services["2037"] },
                { x: 2038, y: bL.services["2038"] },
                { x: 2039, y: bL.services["2039"] },
                { x: 2040, y: bL.services["2040"] },
                { x: 2041, y: bL.services["2041"] },
                { x: 2042, y: bL.services["2042"] },
                { x: 2043, y: bL.services["2043"] },
                { x: 2044, y: bL.services["2044"] },
                { x: 2045, y: bL.services["2045"] },
                { x: 2046, y: bL.services["2046"] },
                { x: 2047, y: bL.services["2047"] },
                { x: 2048, y: bL.services["2048"] },
                { x: 2049, y: bL.services["2049"] },
                { x: 2050, y: bL.services["2050"] },
              ]}
            />
          </XYPlot>
        </div>
        <Divider textAlign="left" flexItem>
          {" "}
          <b>Total emissions of area based on year for {country}</b>
        </Divider>

        <br />
        <div className="settlementDiv">
          <table>
            <thead>
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
