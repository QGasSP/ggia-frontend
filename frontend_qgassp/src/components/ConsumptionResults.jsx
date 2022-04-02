import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import "../css/u1planner.css";
import Chip from "@mui/material/Chip";
import axios from "axios";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  // AreaSeries,
  LineSeries,
  VerticalBarSeries,
} from "react-vis";
import { LineLegendConsumption } from "./LineLegendConsumption";
import PropTypes from "prop-types";

/**
 * Consumption Results
 * @return {}
 */
const BarSeries = VerticalBarSeries;
export const ConsumptionResults = ({ consumptionRequest }) => {
  const [blTransport, setBlTransport] = useState({});
  const [blTotalEmmissions, setBlTotalEmissions] = useState({});
  const [p1, setP1] = useState({});
  const [p1TotalEmissions, setP1totalEmissions] = useState({});

  const resultsLegend = [
    { title: "RF", color: "#3d58a3", strokeWidth: 13 },
    { title: "BL", color: "#ef7d00", strokeWidth: 13 },
    { title: "PN", color: "#52974c", strokeWidth: 13 },
    { title: "NA", color: "#ce143d", strokeWidth: 13 },
  ];

  const RfBaseline = [
    { x: "Housing_energy", y: 2 },
    { x: "Housing_other", y: 4 },
    { x: "Transport_fuels", y: 10 },
    { x: "Transport_other", y: 20 },
    { x: "Air_travel", y: 18 },
    { x: "Food", y: 50 },
    { x: "Tabgible_goods", y: 3 },
    { x: "Services", y: 4 },
    { x: "Total_emissions", y: 80 },
  ];

  const RfData = [
    { x: "Housing_energy", y: 10 },
    { x: "Housing_other", y: 5 },
    { x: "Transport_fuels", y: 15 },
    { x: "Transport_other", y: 40 },
    { x: "Air_travel", y: 8 },
    { x: "Food", y: 50 },
    { x: "Tabgible_goods", y: 3 },
    { x: "Services", y: 4 },
    { x: "Total_emissions", y: 100 },
  ];

  const BlData = [
    { x: "Housing_energy", y: 4 },
    { x: "Housing_other", y: 21 },
    { x: "Transport_fuels", y: 15 },
    { x: "Transport_other", y: 10 },
    { x: "Air_travel", y: 5 },
    { x: "Food", y: 5 },
    { x: "Tabgible_goods", y: 3 },
    { x: "Services", y: 2 },
    { x: "Total_emissions", y: 75 },
  ];

  const PnData = [
    { x: "Housing_energy", y: 2 },
    { x: "Housing_other", y: 5 },
    { x: "Transport_fuels", y: 1 },
    { x: "Transport_other", y: 13 },
    { x: "Air_travel", y: 6 },
    { x: "Food", y: 3 },
    { x: "Tabgible_goods", y: 1 },
    { x: "Services", y: 15 },
    { x: "Total_emissions", y: 1 },
  ];

  const NaData = [
    { x: "Housing_energy", y: 10 },
    { x: "Housing_other", y: 5 },
    { x: "Transport_fuels", y: 15 },
    { x: "Transport_other", y: 15 },
    { x: "Air_travel", y: 10 },
    { x: "Food", y: 5 },
    { x: "Tabgible_goods", y: 15 },
    { x: "Services", y: 15 },
    { x: "Total_emissions", y: 15 },
  ];

  useEffect(async () => {
    const headers = {
      "Content-type": "application/json",
    };
    await axios
      .post(
        "https://ggia-dev.ulno.net/api/v1/calculate/consumption",
        consumptionRequest,
        headers
      )
      .then((response) => {
        // eslint-disable-next-line no-console
        setBlTransport(response.data.data.consumption.BL);
        setBlTotalEmissions(response.data.data.consumption.BLTotalEmissions);
        setP1(response.data.data.consumption.P1);
        setP1totalEmissions(response.data.data.consumption.P1TotalEmissions);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <article>
      <section>
        <Divider textAlign="left" flexItem>
          {" "}
          <Chip label="Results" />
        </Divider>
        <p>{JSON.stringify(consumptionRequest)}</p>

        <Divider textAlign="left" flexItem>
          {" "}
          <b>Baseline vs annual household emissions</b>
        </Divider>
        <XYPlot width={1000} height={500} stackBy="y" xType="ordinal">
          <HorizontalGridLines />
          <VerticalGridLines />
          <VerticalBarSeries className="StackedBarchart" />
          <XAxis title="Year" />
          <YAxis title="Emissions/ kG C02 eq" />
          {/* <LineSeries
            color="#000000"
            curve="curveNatural"
            strokeWidth="4"
            data={[
              { x: 2020, y: blTotalEmmissions["2020"] },
              { x: 2021, y: blTotalEmmissions["2021"] },
              { x: 2022, y: blTotalEmmissions["2022"] },
              { x: 2023, y: blTotalEmmissions["2023"] },
              { x: 2024, y: blTotalEmmissions["2024"] },
              { x: 2025, y: blTotalEmmissions["2025"] },
              { x: 2026, y: blTotalEmmissions["2026"] },
              { x: 2027, y: blTotalEmmissions["2027"] },
              { x: 2028, y: blTotalEmmissions["2028"] },
              { x: 2029, y: blTotalEmmissions["2029"] },
              { x: 2030, y: blTotalEmmissions["2030"] },
              { x: 2031, y: blTotalEmmissions["2031"] },
              { x: 2032, y: blTotalEmmissions["2032"] },
              { x: 2033, y: blTotalEmmissions["2033"] },
              { x: 2034, y: blTotalEmmissions["2034"] },
              { x: 2035, y: blTotalEmmissions["2035"] },
              { x: 2036, y: blTotalEmmissions["2036"] },
              { x: 2037, y: blTotalEmmissions["2037"] },
              { x: 2038, y: blTotalEmmissions["2038"] },
              { x: 2039, y: blTotalEmmissions["2039"] },
              { x: 2040, y: blTotalEmmissions["2040"] },
              { x: 2041, y: blTotalEmmissions["2041"] },
              { x: 2042, y: blTotalEmmissions["2042"] },
              { x: 2043, y: blTotalEmmissions["2043"] },
              { x: 2044, y: blTotalEmmissions["2044"] },
              { x: 2045, y: blTotalEmmissions["2045"] },
              { x: 2046, y: blTotalEmmissions["2046"] },
              { x: 2047, y: blTotalEmmissions["2047"] },
              { x: 2048, y: blTotalEmmissions["2048"] },
              { x: 2049, y: blTotalEmmissions["2049"] },
              { x: 2050, y: blTotalEmmissions["2050"] },
            ]}
          /> */}
          {/*  <BarSeries
            color="#3d58a3"
            opacity={0.31}
            data={[
              { x: 2020, y: blTransport.housingEnergy["2020"] },
              { x: 2021, y: blTransport.housingEnergy["2021"] },
              { x: 2022, y: blTransport.housingEnergy["2022"] },
              { x: 2023, y: blTransport.housingEnergy["2023"] },
              { x: 2024, y: blTransport.housingEnergy["2024"] },
              { x: 2025, y: blTransport.housingEnergy["2025"] },
              { x: 2026, y: blTransport.housingEnergy["2026"] },
              { x: 2027, y: blTransport.housingEnergy["2027"] },
              { x: 2028, y: blTransport.housingEnergy["2028"] },
              { x: 2029, y: blTransport.housingEnergy["2029"] },
              { x: 2030, y: blTransport.housingEnergy["2030"] },
              { x: 2031, y: blTransport.housingEnergy["2031"] },
              { x: 2032, y: blTransport.housingEnergy["2032"] },
              { x: 2033, y: blTransport.housingEnergy["2033"] },
              { x: 2034, y: blTransport.housingEnergy["2034"] },
              { x: 2035, y: blTransport.housingEnergy["2035"] },
              { x: 2036, y: blTransport.housingEnergy["2036"] },
              { x: 2037, y: blTransport.housingEnergy["2037"] },
              { x: 2038, y: blTransport.housingEnergy["2038"] },
              { x: 2039, y: blTransport.housingEnergy["2039"] },
              { x: 2040, y: blTransport.housingEnergy["2040"] },
              { x: 2041, y: blTransport.housingEnergy["2041"] },
              { x: 2042, y: blTransport.housingEnergy["2042"] },
              { x: 2043, y: blTransport.housingEnergy["2043"] },
              { x: 2044, y: blTransport.housingEnergy["2044"] },
              { x: 2045, y: blTransport.housingEnergy["2045"] },
              { x: 2046, y: blTransport.housingEnergy["2046"] },
              { x: 2047, y: blTransport.housingEnergy["2047"] },
              { x: 2048, y: blTransport.housingEnergy["2048"] },
              { x: 2049, y: blTransport.housingEnergy["2049"] },
              { x: 2050, y: blTransport.housingEnergy["2050"] },
            ]}
          />
          <BarSeries
            color="#ef7d00"
            opacity={0.31}
            data={[
              { x: 2020, y: blTransport.housingOther["2020"] },
              { x: 2021, y: blTransport.housingOther["2021"] },
              { x: 2022, y: blTransport.housingOther["2022"] },
              { x: 2023, y: blTransport.housingOther["2023"] },
              { x: 2024, y: blTransport.housingOther["2024"] },
              { x: 2025, y: blTransport.housingOther["2025"] },
              { x: 2026, y: blTransport.housingOther["2026"] },
              { x: 2027, y: blTransport.housingOther["2027"] },
              { x: 2028, y: blTransport.housingOther["2028"] },
              { x: 2029, y: blTransport.housingOther["2029"] },
              { x: 2030, y: blTransport.housingOther["2030"] },
              { x: 2031, y: blTransport.housingOther["2031"] },
              { x: 2032, y: blTransport.housingOther["2032"] },
              { x: 2033, y: blTransport.housingOther["2033"] },
              { x: 2034, y: blTransport.housingOther["2034"] },
              { x: 2035, y: blTransport.housingOther["2035"] },
              { x: 2036, y: blTransport.housingOther["2036"] },
              { x: 2037, y: blTransport.housingOther["2037"] },
              { x: 2038, y: blTransport.housingOther["2038"] },
              { x: 2039, y: blTransport.housingOther["2039"] },
              { x: 2040, y: blTransport.housingOther["2040"] },
              { x: 2041, y: blTransport.housingOther["2041"] },
              { x: 2042, y: blTransport.housingOther["2042"] },
              { x: 2043, y: blTransport.housingOther["2043"] },
              { x: 2044, y: blTransport.housingOther["2044"] },
              { x: 2045, y: blTransport.housingOther["2045"] },
              { x: 2046, y: blTransport.housingOther["2046"] },
              { x: 2047, y: blTransport.housingOther["2047"] },
              { x: 2048, y: blTransport.housingOther["2048"] },
              { x: 2049, y: blTransport.housingOther["2049"] },
              { x: 2050, y: blTransport.housingOther["2050"] },
            ]}
          />
          <BarSeries
            color="#95c11f"
            opacity={0.31}
            data={[
              { x: 2020, y: blTransport.transportFuels["2020"] },
              { x: 2021, y: blTransport.transportFuels["2021"] },
              { x: 2022, y: blTransport.transportFuels["2022"] },
              { x: 2023, y: blTransport.transportFuels["2023"] },
              { x: 2024, y: blTransport.transportFuels["2024"] },
              { x: 2025, y: blTransport.transportFuels["2025"] },
              { x: 2026, y: blTransport.transportFuels["2026"] },
              { x: 2027, y: blTransport.transportFuels["2027"] },
              { x: 2028, y: blTransport.transportFuels["2028"] },
              { x: 2029, y: blTransport.transportFuels["2029"] },
              { x: 2030, y: blTransport.transportFuels["2030"] },
              { x: 2031, y: blTransport.transportFuels["2031"] },
              { x: 2032, y: blTransport.transportFuels["2032"] },
              { x: 2033, y: blTransport.transportFuels["2033"] },
              { x: 2034, y: blTransport.transportFuels["2034"] },
              { x: 2035, y: blTransport.transportFuels["2035"] },
              { x: 2036, y: blTransport.transportFuels["2036"] },
              { x: 2037, y: blTransport.transportFuels["2037"] },
              { x: 2038, y: blTransport.transportFuels["2038"] },
              { x: 2039, y: blTransport.transportFuels["2039"] },
              { x: 2040, y: blTransport.transportFuels["2040"] },
              { x: 2041, y: blTransport.transportFuels["2041"] },
              { x: 2042, y: blTransport.transportFuels["2042"] },
              { x: 2043, y: blTransport.transportFuels["2043"] },
              { x: 2044, y: blTransport.transportFuels["2044"] },
              { x: 2045, y: blTransport.transportFuels["2045"] },
              { x: 2046, y: blTransport.transportFuels["2046"] },
              { x: 2047, y: blTransport.transportFuels["2047"] },
              { x: 2048, y: blTransport.transportFuels["2048"] },
              { x: 2049, y: blTransport.transportFuels["2049"] },
              { x: 2050, y: blTransport.transportFuels["2050"] },
            ]}
          />
          <BarSeries
            color="#ce143d"
            opacity={0.31}
            data={[
              { x: 2020, y: blTransport.transportOther["2020"] },
              { x: 2021, y: blTransport.transportOther["2021"] },
              { x: 2022, y: blTransport.transportOther["2022"] },
              { x: 2023, y: blTransport.transportOther["2023"] },
              { x: 2024, y: blTransport.transportOther["2024"] },
              { x: 2025, y: blTransport.transportOther["2025"] },
              { x: 2026, y: blTransport.transportOther["2026"] },
              { x: 2027, y: blTransport.transportOther["2027"] },
              { x: 2028, y: blTransport.transportOther["2028"] },
              { x: 2029, y: blTransport.transportOther["2029"] },
              { x: 2030, y: blTransport.transportOther["2030"] },
              { x: 2031, y: blTransport.transportOther["2031"] },
              { x: 2032, y: blTransport.transportOther["2032"] },
              { x: 2033, y: blTransport.transportOther["2033"] },
              { x: 2034, y: blTransport.transportOther["2034"] },
              { x: 2035, y: blTransport.transportOther["2035"] },
              { x: 2036, y: blTransport.transportOther["2036"] },
              { x: 2037, y: blTransport.transportOther["2037"] },
              { x: 2038, y: blTransport.transportOther["2038"] },
              { x: 2039, y: blTransport.transportOther["2039"] },
              { x: 2040, y: blTransport.transportOther["2040"] },
              { x: 2041, y: blTransport.transportOther["2041"] },
              { x: 2042, y: blTransport.transportOther["2042"] },
              { x: 2043, y: blTransport.transportOther["2043"] },
              { x: 2044, y: blTransport.transportOther["2044"] },
              { x: 2045, y: blTransport.transportOther["2045"] },
              { x: 2046, y: blTransport.transportOther["2046"] },
              { x: 2047, y: blTransport.transportOther["2047"] },
              { x: 2048, y: blTransport.transportOther["2048"] },
              { x: 2049, y: blTransport.transportOther["2049"] },
              { x: 2050, y: blTransport.transportOther["2050"] },
            ]}
          />
          <BarSeries
            color="#845f9e"
            opacity={0.31}
            data={[
              { x: 2020, y: blTransport.airTravel["2020"] },
              { x: 2021, y: blTransport.airTravel["2021"] },
              { x: 2022, y: blTransport.airTravel["2022"] },
              { x: 2023, y: blTransport.airTravel["2023"] },
              { x: 2024, y: blTransport.airTravel["2024"] },
              { x: 2025, y: blTransport.airTravel["2025"] },
              { x: 2026, y: blTransport.airTravel["2026"] },
              { x: 2027, y: blTransport.airTravel["2027"] },
              { x: 2028, y: blTransport.airTravel["2028"] },
              { x: 2029, y: blTransport.airTravel["2029"] },
              { x: 2030, y: blTransport.airTravel["2030"] },
              { x: 2031, y: blTransport.airTravel["2031"] },
              { x: 2032, y: blTransport.airTravel["2032"] },
              { x: 2033, y: blTransport.airTravel["2033"] },
              { x: 2034, y: blTransport.airTravel["2034"] },
              { x: 2035, y: blTransport.airTravel["2035"] },
              { x: 2036, y: blTransport.airTravel["2036"] },
              { x: 2037, y: blTransport.airTravel["2037"] },
              { x: 2038, y: blTransport.airTravel["2038"] },
              { x: 2039, y: blTransport.airTravel["2039"] },
              { x: 2040, y: blTransport.airTravel["2040"] },
              { x: 2041, y: blTransport.airTravel["2041"] },
              { x: 2042, y: blTransport.airTravel["2042"] },
              { x: 2043, y: blTransport.airTravel["2043"] },
              { x: 2044, y: blTransport.airTravel["2044"] },
              { x: 2045, y: blTransport.airTravel["2045"] },
              { x: 2046, y: blTransport.airTravel["2046"] },
              { x: 2047, y: blTransport.airTravel["2047"] },
              { x: 2048, y: blTransport.airTravel["2048"] },
              { x: 2049, y: blTransport.airTravel["2049"] },
              { x: 2050, y: blTransport.airTravel["2050"] },
            ]}
          />
          <BarSeries
            color="#996e35"
            opacity={0.31}
            data={[
              { x: 2020, y: blTransport.food["2020"] },
              { x: 2021, y: blTransport.food["2021"] },
              { x: 2022, y: blTransport.food["2022"] },
              { x: 2023, y: blTransport.food["2023"] },
              { x: 2024, y: blTransport.food["2024"] },
              { x: 2025, y: blTransport.food["2025"] },
              { x: 2026, y: blTransport.food["2026"] },
              { x: 2027, y: blTransport.food["2027"] },
              { x: 2028, y: blTransport.food["2028"] },
              { x: 2029, y: blTransport.food["2029"] },
              { x: 2030, y: blTransport.food["2030"] },
              { x: 2031, y: blTransport.food["2031"] },
              { x: 2032, y: blTransport.food["2032"] },
              { x: 2033, y: blTransport.food["2033"] },
              { x: 2034, y: blTransport.food["2034"] },
              { x: 2035, y: blTransport.food["2035"] },
              { x: 2036, y: blTransport.food["2036"] },
              { x: 2037, y: blTransport.food["2037"] },
              { x: 2038, y: blTransport.food["2038"] },
              { x: 2039, y: blTransport.food["2039"] },
              { x: 2040, y: blTransport.food["2040"] },
              { x: 2041, y: blTransport.food["2041"] },
              { x: 2042, y: blTransport.food["2042"] },
              { x: 2043, y: blTransport.food["2043"] },
              { x: 2044, y: blTransport.food["2044"] },
              { x: 2045, y: blTransport.food["2045"] },
              { x: 2046, y: blTransport.food["2046"] },
              { x: 2047, y: blTransport.food["2047"] },
              { x: 2048, y: blTransport.food["2048"] },
              { x: 2049, y: blTransport.food["2049"] },
              { x: 2050, y: blTransport.food["2050"] },
            ]}
          />
          <BarSeries
            color="#e1719a"
            opacity={0.31}
            data={[
              { x: 2020, y: blTransport.tangibleGoods["2020"] },
              { x: 2021, y: blTransport.tangibleGoods["2021"] },
              { x: 2022, y: blTransport.tangibleGoods["2022"] },
              { x: 2023, y: blTransport.tangibleGoods["2023"] },
              { x: 2024, y: blTransport.tangibleGoods["2024"] },
              { x: 2025, y: blTransport.tangibleGoods["2025"] },
              { x: 2026, y: blTransport.tangibleGoods["2026"] },
              { x: 2027, y: blTransport.tangibleGoods["2027"] },
              { x: 2028, y: blTransport.tangibleGoods["2028"] },
              { x: 2029, y: blTransport.tangibleGoods["2029"] },
              { x: 2030, y: blTransport.tangibleGoods["2030"] },
              { x: 2031, y: blTransport.tangibleGoods["2031"] },
              { x: 2032, y: blTransport.tangibleGoods["2032"] },
              { x: 2033, y: blTransport.tangibleGoods["2033"] },
              { x: 2034, y: blTransport.tangibleGoods["2034"] },
              { x: 2035, y: blTransport.tangibleGoods["2035"] },
              { x: 2036, y: blTransport.tangibleGoods["2036"] },
              { x: 2037, y: blTransport.tangibleGoods["2037"] },
              { x: 2038, y: blTransport.tangibleGoods["2038"] },
              { x: 2039, y: blTransport.tangibleGoods["2039"] },
              { x: 2040, y: blTransport.tangibleGoods["2040"] },
              { x: 2041, y: blTransport.tangibleGoods["2041"] },
              { x: 2042, y: blTransport.tangibleGoods["2042"] },
              { x: 2043, y: blTransport.tangibleGoods["2043"] },
              { x: 2044, y: blTransport.tangibleGoods["2044"] },
              { x: 2045, y: blTransport.tangibleGoods["2045"] },
              { x: 2046, y: blTransport.tangibleGoods["2046"] },
              { x: 2047, y: blTransport.tangibleGoods["2047"] },
              { x: 2048, y: blTransport.tangibleGoods["2048"] },
              { x: 2049, y: blTransport.tangibleGoods["2049"] },
              { x: 2050, y: blTransport.tangibleGoods["2050"] },
            ]}
          />
          <BarSeries
            color="#76918e"
            opacity={0.31}
            data={[
              { x: 2020, y: blTransport.services["2020"] },
              { x: 2021, y: blTransport.services["2021"] },
              { x: 2022, y: blTransport.services["2022"] },
              { x: 2023, y: blTransport.services["2023"] },
              { x: 2024, y: blTransport.services["2024"] },
              { x: 2025, y: blTransport.services["2025"] },
              { x: 2026, y: blTransport.services["2026"] },
              { x: 2027, y: blTransport.services["2027"] },
              { x: 2028, y: blTransport.services["2028"] },
              { x: 2029, y: blTransport.services["2029"] },
              { x: 2030, y: blTransport.services["2030"] },
              { x: 2031, y: blTransport.services["2031"] },
              { x: 2032, y: blTransport.services["2032"] },
              { x: 2033, y: blTransport.services["2033"] },
              { x: 2034, y: blTransport.services["2034"] },
              { x: 2035, y: blTransport.services["2035"] },
              { x: 2036, y: blTransport.services["2036"] },
              { x: 2037, y: blTransport.services["2037"] },
              { x: 2038, y: blTransport.services["2038"] },
              { x: 2039, y: blTransport.services["2039"] },
              { x: 2040, y: blTransport.services["2040"] },
              { x: 2041, y: blTransport.services["2041"] },
              { x: 2042, y: blTransport.services["2042"] },
              { x: 2043, y: blTransport.services["2043"] },
              { x: 2044, y: blTransport.services["2044"] },
              { x: 2045, y: blTransport.services["2045"] },
              { x: 2046, y: blTransport.services["2046"] },
              { x: 2047, y: blTransport.services["2047"] },
              { x: 2048, y: blTransport.services["2048"] },
              { x: 2049, y: blTransport.services["2049"] },
              { x: 2050, y: blTransport.services["2050"] },
            ]}
          /> */}
        </XYPlot>
        <br />

        <Divider textAlign="left" flexItem>
          {" "}
          <b>Baseline vs Policy</b>
        </Divider>
        <XYPlot xType="ordinal" width={1000} height={400} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis title="Emissions/ kG C02 eq" />
          <LineSeries data={RfBaseline} color="#000" />
          <BarSeries
            className="vertical-bar-series-example"
            opacity={0.55}
            data={RfData}
            color="#3d58a3"
          />
          <BarSeries data={BlData} color="#ef7d00" opacity={0.55} />
          <BarSeries
            color="#52974c"
            opacity={0.55}
            className="vertical-bar-series-example"
            data={PnData}
          />
          <BarSeries color="#ce143d" data={NaData} opacity={0.55} />
        </XYPlot>

        <div className="settlementDiv">
          <LineLegendConsumption
            colorItems={resultsLegend}
            orientation="horizontal"
          />
        </div>

        <Divider textAlign="left" flexItem>
          {" "}
          <b>Aggregated per capital emissions for country 2020-2050</b>
        </Divider>
        <br />
        <XYPlot xType="ordinal" width={1000} height={400}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Year" />
          <YAxis />
          <LineSeries
            /*  rf */
            color="#3d58a3"
            curve="curveNatural"
            strokeWidth="2"
            data={[
              { x: 2022, y: 0 },
              { x: 2023, y: 100 },
              { x: 2024, y: 15 },
              { x: 2025, y: 200 },
              { x: 2026, y: 250 },
              { x: 2027, y: 350 },
              { x: 2028, y: 340 },
              { x: 2029, y: 500 },
              { x: 2030, y: 840 },
              { x: 2031, y: 820 },
              { x: 2032, y: 800 },
              { x: 2033, y: 780 },
              { x: 2034, y: 760 },
              { x: 2035, y: 740 },
              { x: 2036, y: 720 },
              { x: 2037, y: 700 },
              { x: 2038, y: 680 },
              { x: 2039, y: 660 },
              { x: 2040, y: 640 },
              { x: 2041, y: 620 },
              { x: 2042, y: 600 },
              { x: 2043, y: 580 },
              { x: 2044, y: 560 },
              { x: 2045, y: 540 },
              { x: 2046, y: 520 },
              { x: 2047, y: 500 },
              { x: 2048, y: 480 },
              { x: 2049, y: 460 },
              { x: 2050, y: 440 },
            ]}
          />
          <LineSeries
            /*  BL */
            color="#ef7d00"
            curve="curveNatural"
            strokeWidth="2"
            data={[
              { x: 2022, y: 0 },
              { x: 2023, y: 980 },
              { x: 2024, y: 960 },
              { x: 2025, y: 940 },
              { x: 2026, y: 920 },
              { x: 2027, y: 900 },
              { x: 2028, y: 880 },
              { x: 2029, y: 860 },
              { x: 2030, y: 840 },
              { x: 2031, y: 820 },
              { x: 2032, y: 800 },
              { x: 2033, y: 780 },
              { x: 2034, y: 760 },
              { x: 2035, y: 740 },
              { x: 2036, y: 20 },
              { x: 2037, y: 700 },
              { x: 2038, y: 68 },
              { x: 2039, y: 66 },
              { x: 2040, y: 64 },
              { x: 2041, y: 620 },
              { x: 2042, y: 600 },
              { x: 2043, y: 580 },
              { x: 2044, y: 56 },
              { x: 2045, y: 540 },
              { x: 2046, y: 520 },
              { x: 2047, y: 500 },
              { x: 2048, y: 480 },
              { x: 2049, y: 460 },
              { x: 2050, y: 440 },
            ]}
          />
          <LineSeries
            /*   PN */
            color="#52974c"
            curve="curveNatural"
            strokeWidth="1.5"
            data={[
              { x: 2022, y: 1000 },
              { x: 2023, y: 980 },
              { x: 2024, y: 960 },
              { x: 2025, y: 940 },
              { x: 2026, y: 920 },
              { x: 2027, y: 900 },
              { x: 2028, y: 880 },
              { x: 2029, y: 8 },
              { x: 2030, y: 840 },
              { x: 2031, y: 820 },
              { x: 2032, y: 800 },
              { x: 2033, y: 780 },
              { x: 2034, y: 76 },
              { x: 2035, y: 740 },
              { x: 2036, y: 720 },
              { x: 2037, y: 700 },
              { x: 2038, y: 680 },
              { x: 2039, y: 660 },
              { x: 2040, y: 64 },
              { x: 2041, y: 620 },
              { x: 2042, y: 600 },
              { x: 2043, y: 580 },
              { x: 2044, y: 560 },
              { x: 2045, y: 540 },
              { x: 2046, y: 520 },
              { x: 2047, y: 500 },
              { x: 2048, y: 480 },
              { x: 2049, y: 460 },
              { x: 2050, y: 440 },
            ]}
          />
          <LineSeries
            /*   NA */
            color="#ce143d"
            curve="curveNatural"
            strokeWidth="2"
            data={[
              { x: 2022, y: 0 },
              { x: 2023, y: 980 },
              { x: 2024, y: 960 },
              { x: 2025, y: 940 },
              { x: 2026, y: 920 },
              { x: 2027, y: 900 },
              { x: 2028, y: 880 },
              { x: 2029, y: 860 },
              { x: 2030, y: 840 },
              { x: 2031, y: 820 },
              { x: 2032, y: 800 },
              { x: 2033, y: 780 },
              { x: 2034, y: 760 },
              { x: 2035, y: 740 },
              { x: 2036, y: 720 },
              { x: 2037, y: 700 },
              { x: 2038, y: 680 },
              { x: 2039, y: 660 },
              { x: 2040, y: 640 },
              { x: 2041, y: 620 },
              { x: 2042, y: 600 },
              { x: 2043, y: 580 },
              { x: 2044, y: 560 },
              { x: 2045, y: 540 },
              { x: 2046, y: 520 },
              { x: 2047, y: 500 },
              { x: 2048, y: 480 },
              { x: 2049, y: 460 },
              { x: 2050, y: 440 },
            ]}
          />
        </XYPlot>
      </section>
    </article>
  );
};

ConsumptionResults.propTypes = {
  consumptionRequest: PropTypes.object.isRequired,
};
