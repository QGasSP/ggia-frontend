import React from "react";
import Divider from "@mui/material/Divider";
import "../css/u1planner.css";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  VerticalBarSeries,
} from "react-vis";

import PropTypes from "prop-types";

/**
 * Consumption Results
 * @return {}
 */
const BarSeries = VerticalBarSeries;
export const ConsumptionSummary = ({
  blTransport,
  blTotalEmmissions,
  p1,
  p1TotalEmissions,
}) => {
  const country = localStorage.getItem("country");
  const resultsLegend = [
    { title: "Baseline total emissions", color: "#3d58a3", strokeWidth: 13 },
    { title: "Policy total emissions", color: "#ef7d00", strokeWidth: 13 },
   
  ];


  return (
    <>
      <Divider textAlign="left" flexItem>
        {" "}
        <b> {country}: Baseline vs annual household emissions</b>
      </Divider>
      <XYPlot
        margin={{ left: 80 }}
        width={1000}
        height={500}
        stackBy="y"
        xType="ordinal"
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="Year" />
        <YAxis title="Emissions/ kG C02 eq" />
        <BarSeries
          color="#3d58a3"
          opacity={0.45}
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
          stack
        />
        <BarSeries
          color="#ef7d00"
          opacity={0.45}
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
          stack
        />
        <BarSeries
          color="#95c11f"
          opacity={0.45}
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
          stack
        />
        <BarSeries
          color="#ce143d"
          opacity={0.45}
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
          stack
        />
        <BarSeries
          color="#845f9e"
          opacity={0.45}
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
          stack
        />
        <BarSeries
          color="#996e35"
          opacity={0.45}
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
          stack
        />
        <BarSeries
          color="#e1719a"
          opacity={0.45}
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
          stack
        />
        <BarSeries
          color="#76918e"
          opacity={0.45}
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
          stack
        />
        <LineSeries
          className="fourth-series"
          color="#000000"
          strokeWidth="1"
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
        />
      </XYPlot>
      <br />
      <Divider textAlign="left" flexItem>
        {" "}
        <b> {country}: Policy vs annual household emissions</b>
      </Divider>
      <XYPlot
        xType="ordinal"
        margin={{ left: 80 }}
        width={1000}
        height={500}
        stackBy="y"
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="Year" />
        <YAxis title="Emissions/ kG C02 eq" />
        <BarSeries
          color="#3d58a3"
          opacity={0.45}
          data={[
            { x: 2020, y: p1.housingEnergy["2020"] },
            { x: 2021, y: p1.housingEnergy["2021"] },
            { x: 2022, y: p1.housingEnergy["2022"] },
            { x: 2023, y: p1.housingEnergy["2023"] },
            { x: 2024, y: p1.housingEnergy["2024"] },
            { x: 2025, y: p1.housingEnergy["2025"] },
            { x: 2026, y: p1.housingEnergy["2026"] },
            { x: 2027, y: p1.housingEnergy["2027"] },
            { x: 2028, y: p1.housingEnergy["2028"] },
            { x: 2029, y: p1.housingEnergy["2029"] },
            { x: 2030, y: p1.housingEnergy["2030"] },
            { x: 2031, y: p1.housingEnergy["2031"] },
            { x: 2032, y: p1.housingEnergy["2032"] },
            { x: 2033, y: p1.housingEnergy["2033"] },
            { x: 2034, y: p1.housingEnergy["2034"] },
            { x: 2035, y: p1.housingEnergy["2035"] },
            { x: 2036, y: p1.housingEnergy["2036"] },
            { x: 2037, y: p1.housingEnergy["2037"] },
            { x: 2038, y: p1.housingEnergy["2038"] },
            { x: 2039, y: p1.housingEnergy["2039"] },
            { x: 2040, y: p1.housingEnergy["2040"] },
            { x: 2041, y: p1.housingEnergy["2041"] },
            { x: 2042, y: p1.housingEnergy["2042"] },
            { x: 2043, y: p1.housingEnergy["2043"] },
            { x: 2044, y: p1.housingEnergy["2044"] },
            { x: 2045, y: p1.housingEnergy["2045"] },
            { x: 2046, y: p1.housingEnergy["2046"] },
            { x: 2047, y: p1.housingEnergy["2047"] },
            { x: 2048, y: p1.housingEnergy["2048"] },
            { x: 2049, y: p1.housingEnergy["2049"] },
            { x: 2050, y: p1.housingEnergy["2050"] },
          ]}
          stack
        />
        <BarSeries
          color="#ef7d00"
          opacity={0.45}
          data={[
            { x: 2020, y: p1.housingOther["2020"] },
            { x: 2021, y: p1.housingOther["2021"] },
            { x: 2022, y: p1.housingOther["2022"] },
            { x: 2023, y: p1.housingOther["2023"] },
            { x: 2024, y: p1.housingOther["2024"] },
            { x: 2025, y: p1.housingOther["2025"] },
            { x: 2026, y: p1.housingOther["2026"] },
            { x: 2027, y: p1.housingOther["2027"] },
            { x: 2028, y: p1.housingOther["2028"] },
            { x: 2029, y: p1.housingOther["2029"] },
            { x: 2030, y: p1.housingOther["2030"] },
            { x: 2031, y: p1.housingOther["2031"] },
            { x: 2032, y: p1.housingOther["2032"] },
            { x: 2033, y: p1.housingOther["2033"] },
            { x: 2034, y: p1.housingOther["2034"] },
            { x: 2035, y: p1.housingOther["2035"] },
            { x: 2036, y: p1.housingOther["2036"] },
            { x: 2037, y: p1.housingOther["2037"] },
            { x: 2038, y: p1.housingOther["2038"] },
            { x: 2039, y: p1.housingOther["2039"] },
            { x: 2040, y: p1.housingOther["2040"] },
            { x: 2041, y: p1.housingOther["2041"] },
            { x: 2042, y: p1.housingOther["2042"] },
            { x: 2043, y: p1.housingOther["2043"] },
            { x: 2044, y: p1.housingOther["2044"] },
            { x: 2045, y: p1.housingOther["2045"] },
            { x: 2046, y: p1.housingOther["2046"] },
            { x: 2047, y: p1.housingOther["2047"] },
            { x: 2048, y: p1.housingOther["2048"] },
            { x: 2049, y: p1.housingOther["2049"] },
            { x: 2050, y: p1.housingOther["2050"] },
          ]}
          stack
        />
        <BarSeries
          color="#95c11f"
          opacity={0.45}
          data={[
            { x: 2020, y: p1.transportFuels["2020"] },
            { x: 2021, y: p1.transportFuels["2021"] },
            { x: 2022, y: p1.transportFuels["2022"] },
            { x: 2023, y: p1.transportFuels["2023"] },
            { x: 2024, y: p1.transportFuels["2024"] },
            { x: 2025, y: p1.transportFuels["2025"] },
            { x: 2026, y: p1.transportFuels["2026"] },
            { x: 2027, y: p1.transportFuels["2027"] },
            { x: 2028, y: p1.transportFuels["2028"] },
            { x: 2029, y: p1.transportFuels["2029"] },
            { x: 2030, y: p1.transportFuels["2030"] },
            { x: 2031, y: p1.transportFuels["2031"] },
            { x: 2032, y: p1.transportFuels["2032"] },
            { x: 2033, y: p1.transportFuels["2033"] },
            { x: 2034, y: p1.transportFuels["2034"] },
            { x: 2035, y: p1.transportFuels["2035"] },
            { x: 2036, y: p1.transportFuels["2036"] },
            { x: 2037, y: p1.transportFuels["2037"] },
            { x: 2038, y: p1.transportFuels["2038"] },
            { x: 2039, y: p1.transportFuels["2039"] },
            { x: 2040, y: p1.transportFuels["2040"] },
            { x: 2041, y: p1.transportFuels["2041"] },
            { x: 2042, y: p1.transportFuels["2042"] },
            { x: 2043, y: p1.transportFuels["2043"] },
            { x: 2044, y: p1.transportFuels["2044"] },
            { x: 2045, y: p1.transportFuels["2045"] },
            { x: 2046, y: p1.transportFuels["2046"] },
            { x: 2047, y: p1.transportFuels["2047"] },
            { x: 2048, y: p1.transportFuels["2048"] },
            { x: 2049, y: p1.transportFuels["2049"] },
            { x: 2050, y: p1.transportFuels["2050"] },
          ]}
          stack
        />
        <BarSeries
          color="#ce143d"
          opacity={0.45}
          data={[
            { x: 2020, y: p1.transportOther["2020"] },
            { x: 2021, y: p1.transportOther["2021"] },
            { x: 2022, y: p1.transportOther["2022"] },
            { x: 2023, y: p1.transportOther["2023"] },
            { x: 2024, y: p1.transportOther["2024"] },
            { x: 2025, y: p1.transportOther["2025"] },
            { x: 2026, y: p1.transportOther["2026"] },
            { x: 2027, y: p1.transportOther["2027"] },
            { x: 2028, y: p1.transportOther["2028"] },
            { x: 2029, y: p1.transportOther["2029"] },
            { x: 2030, y: p1.transportOther["2030"] },
            { x: 2031, y: p1.transportOther["2031"] },
            { x: 2032, y: p1.transportOther["2032"] },
            { x: 2033, y: p1.transportOther["2033"] },
            { x: 2034, y: p1.transportOther["2034"] },
            { x: 2035, y: p1.transportOther["2035"] },
            { x: 2036, y: p1.transportOther["2036"] },
            { x: 2037, y: p1.transportOther["2037"] },
            { x: 2038, y: p1.transportOther["2038"] },
            { x: 2039, y: p1.transportOther["2039"] },
            { x: 2040, y: p1.transportOther["2040"] },
            { x: 2041, y: p1.transportOther["2041"] },
            { x: 2042, y: p1.transportOther["2042"] },
            { x: 2043, y: p1.transportOther["2043"] },
            { x: 2044, y: p1.transportOther["2044"] },
            { x: 2045, y: p1.transportOther["2045"] },
            { x: 2046, y: p1.transportOther["2046"] },
            { x: 2047, y: p1.transportOther["2047"] },
            { x: 2048, y: p1.transportOther["2048"] },
            { x: 2049, y: p1.transportOther["2049"] },
            { x: 2050, y: p1.transportOther["2050"] },
          ]}
          stack
        />
        <BarSeries
          color="#845f9e"
          opacity={0.45}
          data={[
            { x: 2020, y: p1.airTravel["2020"] },
            { x: 2021, y: p1.airTravel["2021"] },
            { x: 2022, y: p1.airTravel["2022"] },
            { x: 2023, y: p1.airTravel["2023"] },
            { x: 2024, y: p1.airTravel["2024"] },
            { x: 2025, y: p1.airTravel["2025"] },
            { x: 2026, y: p1.airTravel["2026"] },
            { x: 2027, y: p1.airTravel["2027"] },
            { x: 2028, y: p1.airTravel["2028"] },
            { x: 2029, y: p1.airTravel["2029"] },
            { x: 2030, y: p1.airTravel["2030"] },
            { x: 2031, y: p1.airTravel["2031"] },
            { x: 2032, y: p1.airTravel["2032"] },
            { x: 2033, y: p1.airTravel["2033"] },
            { x: 2034, y: p1.airTravel["2034"] },
            { x: 2035, y: p1.airTravel["2035"] },
            { x: 2036, y: p1.airTravel["2036"] },
            { x: 2037, y: p1.airTravel["2037"] },
            { x: 2038, y: p1.airTravel["2038"] },
            { x: 2039, y: p1.airTravel["2039"] },
            { x: 2040, y: p1.airTravel["2040"] },
            { x: 2041, y: p1.airTravel["2041"] },
            { x: 2042, y: p1.airTravel["2042"] },
            { x: 2043, y: p1.airTravel["2043"] },
            { x: 2044, y: p1.airTravel["2044"] },
            { x: 2045, y: p1.airTravel["2045"] },
            { x: 2046, y: p1.airTravel["2046"] },
            { x: 2047, y: p1.airTravel["2047"] },
            { x: 2048, y: p1.airTravel["2048"] },
            { x: 2049, y: p1.airTravel["2049"] },
            { x: 2050, y: p1.airTravel["2050"] },
          ]}
          stack
        />
        <BarSeries
          color="#996e35"
          opacity={0.45}
          data={[
            { x: 2020, y: p1.food["2020"] },
            { x: 2021, y: p1.food["2021"] },
            { x: 2022, y: p1.food["2022"] },
            { x: 2023, y: p1.food["2023"] },
            { x: 2024, y: p1.food["2024"] },
            { x: 2025, y: p1.food["2025"] },
            { x: 2026, y: p1.food["2026"] },
            { x: 2027, y: p1.food["2027"] },
            { x: 2028, y: p1.food["2028"] },
            { x: 2029, y: p1.food["2029"] },
            { x: 2030, y: p1.food["2030"] },
            { x: 2031, y: p1.food["2031"] },
            { x: 2032, y: p1.food["2032"] },
            { x: 2033, y: p1.food["2033"] },
            { x: 2034, y: p1.food["2034"] },
            { x: 2035, y: p1.food["2035"] },
            { x: 2036, y: p1.food["2036"] },
            { x: 2037, y: p1.food["2037"] },
            { x: 2038, y: p1.food["2038"] },
            { x: 2039, y: p1.food["2039"] },
            { x: 2040, y: p1.food["2040"] },
            { x: 2041, y: p1.food["2041"] },
            { x: 2042, y: p1.food["2042"] },
            { x: 2043, y: p1.food["2043"] },
            { x: 2044, y: p1.food["2044"] },
            { x: 2045, y: p1.food["2045"] },
            { x: 2046, y: p1.food["2046"] },
            { x: 2047, y: p1.food["2047"] },
            { x: 2048, y: p1.food["2048"] },
            { x: 2049, y: p1.food["2049"] },
            { x: 2050, y: p1.food["2050"] },
          ]}
          stack
        />
        <BarSeries
          color="#e1719a"
          opacity={0.45}
          data={[
            { x: 2020, y: p1.tangibleGoods["2020"] },
            { x: 2021, y: p1.tangibleGoods["2021"] },
            { x: 2022, y: p1.tangibleGoods["2022"] },
            { x: 2023, y: p1.tangibleGoods["2023"] },
            { x: 2024, y: p1.tangibleGoods["2024"] },
            { x: 2025, y: p1.tangibleGoods["2025"] },
            { x: 2026, y: p1.tangibleGoods["2026"] },
            { x: 2027, y: p1.tangibleGoods["2027"] },
            { x: 2028, y: p1.tangibleGoods["2028"] },
            { x: 2029, y: p1.tangibleGoods["2029"] },
            { x: 2030, y: p1.tangibleGoods["2030"] },
            { x: 2031, y: p1.tangibleGoods["2031"] },
            { x: 2032, y: p1.tangibleGoods["2032"] },
            { x: 2033, y: p1.tangibleGoods["2033"] },
            { x: 2034, y: p1.tangibleGoods["2034"] },
            { x: 2035, y: p1.tangibleGoods["2035"] },
            { x: 2036, y: p1.tangibleGoods["2036"] },
            { x: 2037, y: p1.tangibleGoods["2037"] },
            { x: 2038, y: p1.tangibleGoods["2038"] },
            { x: 2039, y: p1.tangibleGoods["2039"] },
            { x: 2040, y: p1.tangibleGoods["2040"] },
            { x: 2041, y: p1.tangibleGoods["2041"] },
            { x: 2042, y: p1.tangibleGoods["2042"] },
            { x: 2043, y: p1.tangibleGoods["2043"] },
            { x: 2044, y: p1.tangibleGoods["2044"] },
            { x: 2045, y: p1.tangibleGoods["2045"] },
            { x: 2046, y: p1.tangibleGoods["2046"] },
            { x: 2047, y: p1.tangibleGoods["2047"] },
            { x: 2048, y: p1.tangibleGoods["2048"] },
            { x: 2049, y: p1.tangibleGoods["2049"] },
            { x: 2050, y: p1.tangibleGoods["2050"] },
          ]}
          stack
        />
        <BarSeries
          color="#76918e"
          opacity={0.45}
          data={[
            { x: 2020, y: p1.services["2020"] },
            { x: 2021, y: p1.services["2021"] },
            { x: 2022, y: p1.services["2022"] },
            { x: 2023, y: p1.services["2023"] },
            { x: 2024, y: p1.services["2024"] },
            { x: 2025, y: p1.services["2025"] },
            { x: 2026, y: p1.services["2026"] },
            { x: 2027, y: p1.services["2027"] },
            { x: 2028, y: p1.services["2028"] },
            { x: 2029, y: p1.services["2029"] },
            { x: 2030, y: p1.services["2030"] },
            { x: 2031, y: p1.services["2031"] },
            { x: 2032, y: p1.services["2032"] },
            { x: 2033, y: p1.services["2033"] },
            { x: 2034, y: p1.services["2034"] },
            { x: 2035, y: p1.services["2035"] },
            { x: 2036, y: p1.services["2036"] },
            { x: 2037, y: p1.services["2037"] },
            { x: 2038, y: p1.services["2038"] },
            { x: 2039, y: p1.services["2039"] },
            { x: 2040, y: p1.services["2040"] },
            { x: 2041, y: p1.services["2041"] },
            { x: 2042, y: p1.services["2042"] },
            { x: 2043, y: p1.services["2043"] },
            { x: 2044, y: p1.services["2044"] },
            { x: 2045, y: p1.services["2045"] },
            { x: 2046, y: p1.services["2046"] },
            { x: 2047, y: p1.services["2047"] },
            { x: 2048, y: p1.services["2048"] },
            { x: 2049, y: p1.services["2049"] },
            { x: 2050, y: p1.services["2050"] },
          ]}
          stack
        />
        <LineSeries
          className="fourth-series"
          color="#000000"
          strokeWidth="1"
          data={[
            { x: 2020, y: p1TotalEmissions["2020"] },
            { x: 2021, y: p1TotalEmissions["2021"] },
            { x: 2022, y: p1TotalEmissions["2022"] },
            { x: 2023, y: p1TotalEmissions["2023"] },
            { x: 2024, y: p1TotalEmissions["2024"] },
            { x: 2025, y: p1TotalEmissions["2025"] },
            { x: 2026, y: p1TotalEmissions["2026"] },
            { x: 2027, y: p1TotalEmissions["2027"] },
            { x: 2028, y: p1TotalEmissions["2028"] },
            { x: 2029, y: p1TotalEmissions["2029"] },
            { x: 2030, y: p1TotalEmissions["2030"] },
            { x: 2031, y: p1TotalEmissions["2031"] },
            { x: 2032, y: p1TotalEmissions["2032"] },
            { x: 2033, y: p1TotalEmissions["2033"] },
            { x: 2034, y: p1TotalEmissions["2034"] },
            { x: 2035, y: p1TotalEmissions["2035"] },
            { x: 2036, y: p1TotalEmissions["2036"] },
            { x: 2037, y: p1TotalEmissions["2037"] },
            { x: 2038, y: p1TotalEmissions["2038"] },
            { x: 2039, y: p1TotalEmissions["2039"] },
            { x: 2040, y: p1TotalEmissions["2040"] },
            { x: 2041, y: p1TotalEmissions["2041"] },
            { x: 2042, y: p1TotalEmissions["2042"] },
            { x: 2043, y: p1TotalEmissions["2043"] },
            { x: 2044, y: p1TotalEmissions["2044"] },
            { x: 2045, y: p1TotalEmissions["2045"] },
            { x: 2046, y: p1TotalEmissions["2046"] },
            { x: 2047, y: p1TotalEmissions["2047"] },
            { x: 2048, y: p1TotalEmissions["2048"] },
            { x: 2049, y: p1TotalEmissions["2049"] },
            { x: 2050, y: ["2050"] },
          ]}
        />
      </XYPlot>
      <br />

      <Divider textAlign="left" flexItem>
        {" "}
        <b> {country}: Baseline total emissions vs Policy total emissions</b>
      </Divider>
      <br />
      <XYPlot xType="ordinal" width={1000} height={400} margin={{ left: 80 }} yDomain={[0, 1500]}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="Year" />
        <YAxis />
        <LineSeries
          className="linemark-series-example-2"
          color="#3d58a3"
          curve={null}
          strokeWidth="2"
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
        />
        <LineSeries
          color="#ef7d00"
          curve={null}
          strokeWidth="2"
          data={[
            { x: 2020, y: p1TotalEmissions["2020"] },
            { x: 2021, y: p1TotalEmissions["2021"] },
            { x: 2022, y: p1TotalEmissions["2022"] },
            { x: 2023, y: p1TotalEmissions["2023"] },
            { x: 2024, y: p1TotalEmissions["2024"] },
            { x: 2025, y: p1TotalEmissions["2025"] },
            { x: 2026, y: p1TotalEmissions["2026"] },
            { x: 2027, y: p1TotalEmissions["2027"] },
            { x: 2028, y: p1TotalEmissions["2028"] },
            { x: 2029, y: p1TotalEmissions["2029"] },
            { x: 2030, y: p1TotalEmissions["2030"] },
            { x: 2031, y: p1TotalEmissions["2031"] },
            { x: 2032, y: p1TotalEmissions["2032"] },
            { x: 2033, y: p1TotalEmissions["2033"] },
            { x: 2034, y: p1TotalEmissions["2034"] },
            { x: 2035, y: p1TotalEmissions["2035"] },
            { x: 2036, y: p1TotalEmissions["2036"] },
            { x: 2037, y: p1TotalEmissions["2037"] },
            { x: 2038, y: p1TotalEmissions["2038"] },
            { x: 2039, y: p1TotalEmissions["2039"] },
            { x: 2040, y: p1TotalEmissions["2040"] },
            { x: 2041, y: p1TotalEmissions["2041"] },
            { x: 2042, y: p1TotalEmissions["2042"] },
            { x: 2043, y: p1TotalEmissions["2043"] },
            { x: 2044, y: p1TotalEmissions["2044"] },
            { x: 2045, y: p1TotalEmissions["2045"] },
            { x: 2046, y: p1TotalEmissions["2046"] },
            { x: 2047, y: p1TotalEmissions["2047"] },
            { x: 2048, y: p1TotalEmissions["2048"] },
            { x: 2049, y: p1TotalEmissions["2049"] },
            { x: 2050, y: p1TotalEmissions["2050"] },
          ]}
        />
      </XYPlot>
      <div className="settlementDiv">
              <LineLegendConsumption
                colorItems={resultsLegend}
                orientation="horizontal"
              />
            </div>
    </>
  );
};

ConsumptionSummary.propTypes = {
  blTransport: PropTypes.object.isRequired,
  blTotalEmmissions: PropTypes.object.isRequired,
  p1: PropTypes.object.isRequired,
  p1TotalEmissions: PropTypes.object.isRequired,
};
