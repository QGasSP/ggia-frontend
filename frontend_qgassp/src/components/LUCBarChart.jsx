import React from "react";
import "../css/lucbarchart.css";
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    VerticalBarSeries,
  } from "react-vis";
import PropTypes from "prop-types";
import { LineLegendLandUse } from "./LineLegendLandUse";
import { Button } from "./Button";
import Divider from "@mui/material/Divider";

const BarSeries = VerticalBarSeries;

/**
 * LucStackedBarchart UI component
 * @return {}
 */

export const LUCBarChart = ({landUseChangeResponse }) => {

  return (
    <div>
      <Divider textAlign="left" flexItem>
        <b>Land-use Change Bar Chart</b>
      </Divider>
      <div className="luc_container">
        <div className="landusechange_bar">
          <XYPlot
                    width={1200}
                    height={500}
                    xType="ordinal"
                    xDistance={200}
                    yDomain={[-1500, 1500]}
                    yType="linear"
                    stackBy="y"
                  >
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <VerticalBarSeries className="LucStackedBarchart" />
                    <XAxis
                      style={{
                        line: { stroke: "#ADDDE1" },
                        ticks: { stroke: "#ADDDE1" },
                        text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
                      }}
                    />
                    <YAxis />
                    {/* 1 */}
                    <BarSeries
                      color="#ffdf43"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].croplandToForestland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].croplandToForestland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].croplandToForestland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].croplandToForestland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].croplandToForestland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].croplandToForestland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].croplandToForestland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].croplandToForestland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].croplandToForestland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].croplandToForestland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].croplandToForestland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].croplandToForestland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].croplandToForestland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].croplandToForestland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].croplandToForestland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].croplandToForestland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].croplandToForestland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].croplandToForestland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].croplandToForestland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].croplandToForestland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].croplandToForestland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].croplandToForestland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].croplandToForestland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].croplandToForestland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].croplandToForestland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].croplandToForestland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].croplandToForestland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].croplandToForestland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].croplandToForestland },
                      ]}
                    />
                    {/* 2 */}
                    <BarSeries
                      color="#76918e"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].grasslandToForestland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].grasslandToForestland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].grasslandToForestland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].grasslandToForestland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].grasslandToForestland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].grasslandToForestland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].grasslandToForestland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].grasslandToForestland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].grasslandToForestland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].grasslandToForestland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].grasslandToForestland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].grasslandToForestland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].grasslandToForestland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].grasslandToForestland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].grasslandToForestland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].grasslandToForestland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].grasslandToForestland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].grasslandToForestland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].grasslandToForestland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].grasslandToForestland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].grasslandToForestland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].grasslandToForestland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].grasslandToForestland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].grasslandToForestland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].grasslandToForestland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].grasslandToForestland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].grasslandToForestland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].grasslandToForestland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].grasslandToForestland },
                      ]}
                    />
                    {/* 3 */}
                    <BarSeries
                      color="#ce143d"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].wetlandToForestland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].wetlandToForestland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].wetlandToForestland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].wetlandToForestland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].wetlandToForestland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].wetlandToForestland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].wetlandToForestland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].wetlandToForestland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].wetlandToForestland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].wetlandToForestland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].wetlandToForestland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].wetlandToForestland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].wetlandToForestland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].wetlandToForestland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].wetlandToForestland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].wetlandToForestland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].wetlandToForestland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].wetlandToForestland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].wetlandToForestland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].wetlandToForestland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].wetlandToForestland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].wetlandToForestland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].wetlandToForestland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].wetlandToForestland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].wetlandToForestland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].wetlandToForestland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].wetlandToForestland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].wetlandToForestland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].wetlandToForestland },
                      ]}
                    />
                    {/* 4 */}
                    <BarSeries
                      color="#d6e7d9"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].settlementToForestland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].settlementToForestland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].settlementToForestland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].settlementToForestland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].settlementToForestland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].settlementToForestland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].settlementToForestland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].settlementToForestland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].settlementToForestland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].settlementToForestland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].settlementToForestland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].settlementToForestland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].settlementToForestland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].settlementToForestland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].settlementToForestland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].settlementToForestland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].settlementToForestland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].settlementToForestland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].settlementToForestland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].settlementToForestland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].settlementToForestland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].settlementToForestland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].settlementToForestland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].settlementToForestland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].settlementToForestland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].settlementToForestland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].settlementToForestland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].settlementToForestland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].settlementToForestland },
                      ]}
                    />
                    {/* 5 */}
                    <BarSeries
                      color="#002117"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].otherlandToForestland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].otherlandToForestland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].otherlandToForestland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].otherlandToForestland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].otherlandToForestland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].otherlandToForestland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].otherlandToForestland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].otherlandToForestland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].otherlandToForestland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].otherlandToForestland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].otherlandToForestland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].otherlandToForestland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].otherlandToForestland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].otherlandToForestland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].otherlandToForestland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].otherlandToForestland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].otherlandToForestland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].otherlandToForestland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].otherlandToForestland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].otherlandToForestland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].otherlandToForestland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].otherlandToForestland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].otherlandToForestland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].otherlandToForestland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].otherlandToForestland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].otherlandToForestland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].otherlandToForestland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].otherlandToForestland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].otherlandToForestland },
                      ]}
                    />
                    {/* 6 */}
                    <BarSeries
                      color="#ef7d00"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].forestlandToCropland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].forestlandToCropland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].forestlandToCropland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].forestlandToCropland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].forestlandToCropland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].forestlandToCropland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].forestlandToCropland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].forestlandToCropland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].forestlandToCropland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].forestlandToCropland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].forestlandToCropland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].forestlandToCropland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].forestlandToCropland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].forestlandToCropland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].forestlandToCropland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].forestlandToCropland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].forestlandToCropland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].forestlandToCropland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].forestlandToCropland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].forestlandToCropland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].forestlandToCropland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].forestlandToCropland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].forestlandToCropland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].forestlandToCropland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].forestlandToCropland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].forestlandToCropland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].forestlandToCropland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].forestlandToCropland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].forestlandToCropland },
                      ]}
                    />
                    {/* 7 */}
                    <BarSeries
                      color="#6c3b00"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].grasslandToCropland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].grasslandToCropland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].grasslandToCropland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].grasslandToCropland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].grasslandToCropland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].grasslandToCropland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].grasslandToCropland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].grasslandToCropland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].grasslandToCropland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].grasslandToCropland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].grasslandToCropland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].grasslandToCropland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].grasslandToCropland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].grasslandToCropland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].grasslandToCropland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].grasslandToCropland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].grasslandToCropland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].grasslandToCropland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].grasslandToCropland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].grasslandToCropland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].grasslandToCropland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].grasslandToCropland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].grasslandToCropland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].grasslandToCropland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].grasslandToCropland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].grasslandToCropland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].grasslandToCropland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].grasslandToCropland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].grasslandToCropland },
                      ]}
                    />
                    {/* 8 */}
                    <BarSeries
                      color="#00aed5"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].wetlandToCropland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].wetlandToCropland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].wetlandToCropland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].wetlandToCropland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].wetlandToCropland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].wetlandToCropland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].wetlandToCropland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].wetlandToCropland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].wetlandToCropland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].wetlandToCropland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].wetlandToCropland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].wetlandToCropland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].wetlandToCropland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].wetlandToCropland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].wetlandToCropland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].wetlandToCropland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].wetlandToCropland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].wetlandToCropland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].wetlandToCropland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].wetlandToCropland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].wetlandToCropland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].wetlandToCropland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].wetlandToCropland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].wetlandToCropland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].wetlandToCropland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].wetlandToCropland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].wetlandToCropland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].wetlandToCropland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].wetlandToCropland },
                      ]}
                    />
                    {/* 9 */}
                    <BarSeries
                      color="#8C0303"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].settlementToCropland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].settlementToCropland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].settlementToCropland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].settlementToCropland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].settlementToCropland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].settlementToCropland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].settlementToCropland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].settlementToCropland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].settlementToCropland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].settlementToCropland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].settlementToCropland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].settlementToCropland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].settlementToCropland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].settlementToCropland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].settlementToCropland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].settlementToCropland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].settlementToCropland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].settlementToCropland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].settlementToCropland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].settlementToCropland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].settlementToCropland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].settlementToCropland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].settlementToCropland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].settlementToCropland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].settlementToCropland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].settlementToCropland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].settlementToCropland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].settlementToCropland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].settlementToCropland },
                      ]}
                    />
                    {/* 10 */}
                    <BarSeries
                      color="#A6036D"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].otherlandToCropland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].otherlandToCropland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].otherlandToCropland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].otherlandToCropland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].otherlandToCropland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].otherlandToCropland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].otherlandToCropland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].otherlandToCropland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].otherlandToCropland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].otherlandToCropland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].otherlandToCropland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].otherlandToCropland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].otherlandToCropland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].otherlandToCropland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].otherlandToCropland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].otherlandToCropland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].otherlandToCropland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].otherlandToCropland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].otherlandToCropland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].otherlandToCropland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].otherlandToCropland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].otherlandToCropland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].otherlandToCropland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].otherlandToCropland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].otherlandToCropland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].otherlandToCropland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].otherlandToCropland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].otherlandToCropland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].otherlandToCropland },
                      ]}
                    />
                    {/* 11 */}
                    <BarSeries
                      color="#400D01"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].forestlandToGrassland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].forestlandToGrassland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].forestlandToGrassland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].forestlandToGrassland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].forestlandToGrassland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].forestlandToGrassland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].forestlandToGrassland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].forestlandToGrassland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].forestlandToGrassland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].forestlandToGrassland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].forestlandToGrassland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].forestlandToGrassland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].forestlandToGrassland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].forestlandToGrassland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].forestlandToGrassland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].forestlandToGrassland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].forestlandToGrassland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].forestlandToGrassland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].forestlandToGrassland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].forestlandToGrassland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].forestlandToGrassland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].forestlandToGrassland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].forestlandToGrassland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].forestlandToGrassland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].forestlandToGrassland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].forestlandToGrassland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].forestlandToGrassland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].forestlandToGrassland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].forestlandToGrassland },
                      ]}
                    />
                    {/* 12 */}
                    <BarSeries
                      color="#C4D4F2"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].croplandToGrassland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].croplandToGrassland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].croplandToGrassland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].croplandToGrassland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].croplandToGrassland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].croplandToGrassland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].croplandToGrassland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].croplandToGrassland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].croplandToGrassland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].croplandToGrassland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].croplandToGrassland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].croplandToGrassland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].croplandToGrassland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].croplandToGrassland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].croplandToGrassland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].croplandToGrassland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].croplandToGrassland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].croplandToGrassland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].croplandToGrassland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].croplandToGrassland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].croplandToGrassland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].croplandToGrassland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].croplandToGrassland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].croplandToGrassland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].croplandToGrassland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].croplandToGrassland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].croplandToGrassland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].croplandToGrassland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].croplandToGrassland },
                      ]}
                    />
                    {/* 13 */}
                    <BarSeries
                      color="#D90404"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].wetlandToGrassland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].wetlandToGrassland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].wetlandToGrassland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].wetlandToGrassland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].wetlandToGrassland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].wetlandToGrassland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].wetlandToGrassland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].wetlandToGrassland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].wetlandToGrassland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].wetlandToGrassland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].wetlandToGrassland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].wetlandToGrassland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].wetlandToGrassland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].wetlandToGrassland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].wetlandToGrassland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].wetlandToGrassland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].wetlandToGrassland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].wetlandToGrassland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].wetlandToGrassland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].wetlandToGrassland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].wetlandToGrassland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].wetlandToGrassland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].wetlandToGrassland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].wetlandToGrassland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].wetlandToGrassland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].wetlandToGrassland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].wetlandToGrassland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].wetlandToGrassland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].wetlandToGrassland },
                      ]}
                    />
                    {/* 14 */}
                    <BarSeries
                      color="#80D941"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].settlementToGrassland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].settlementToGrassland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].settlementToGrassland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].settlementToGrassland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].settlementToGrassland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].settlementToGrassland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].settlementToGrassland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].settlementToGrassland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].settlementToGrassland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].settlementToGrassland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].settlementToGrassland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].settlementToGrassland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].settlementToGrassland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].settlementToGrassland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].settlementToGrassland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].settlementToGrassland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].settlementToGrassland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].settlementToGrassland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].settlementToGrassland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].settlementToGrassland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].settlementToGrassland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].settlementToGrassland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].settlementToGrassland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].settlementToGrassland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].settlementToGrassland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].settlementToGrassland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].settlementToGrassland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].settlementToGrassland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].settlementToGrassland },
                      ]}
                    />
                    {/* 15 */}
                    <BarSeries
                      color="#595959"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].otherlandToGrassland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].otherlandToGrassland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].otherlandToGrassland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].otherlandToGrassland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].otherlandToGrassland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].otherlandToGrassland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].otherlandToGrassland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].otherlandToGrassland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].otherlandToGrassland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].otherlandToGrassland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].otherlandToGrassland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].otherlandToGrassland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].otherlandToGrassland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].otherlandToGrassland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].otherlandToGrassland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].otherlandToGrassland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].otherlandToGrassland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].otherlandToGrassland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].otherlandToGrassland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].otherlandToGrassland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].otherlandToGrassland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].otherlandToGrassland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].otherlandToGrassland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].otherlandToGrassland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].otherlandToGrassland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].otherlandToGrassland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].otherlandToGrassland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].otherlandToGrassland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].otherlandToGrassland },
                      ]}
                    />
                    {/* 16 */}
                    <BarSeries
                      color="#F2CE1B"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].forestlandToWetland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].forestlandToWetland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].forestlandToWetland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].forestlandToWetland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].forestlandToWetland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].forestlandToWetland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].forestlandToWetland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].forestlandToWetland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].forestlandToWetland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].forestlandToWetland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].forestlandToWetland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].forestlandToWetland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].forestlandToWetland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].forestlandToWetland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].forestlandToWetland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].forestlandToWetland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].forestlandToWetland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].forestlandToWetland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].forestlandToWetland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].forestlandToWetland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].forestlandToWetland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].forestlandToWetland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].forestlandToWetland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].forestlandToWetland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].forestlandToWetland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].forestlandToWetland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].forestlandToWetland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].forestlandToWetland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].forestlandToWetland },
                      ]}
                    />
                    {/* 17 */}
                    <BarSeries
                      color="#d51317"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].croplandToWetland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].croplandToWetland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].croplandToWetland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].croplandToWetland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].croplandToWetland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].croplandToWetland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].croplandToWetland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].croplandToWetland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].croplandToWetland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].croplandToWetland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].croplandToWetland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].croplandToWetland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].croplandToWetland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].croplandToWetland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].croplandToWetland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].croplandToWetland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].croplandToWetland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].croplandToWetland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].croplandToWetland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].croplandToWetland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].croplandToWetland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].croplandToWetland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].croplandToWetland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].croplandToWetland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].croplandToWetland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].croplandToWetland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].croplandToWetland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].croplandToWetland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].croplandToWetland },
                      ]}
                    />
                    {/* 18 */}
                    <BarSeries
                      color="#8f2e57"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].grasslandToWetland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].grasslandToWetland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].grasslandToWetland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].grasslandToWetland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].grasslandToWetland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].grasslandToWetland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].grasslandToWetland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].grasslandToWetland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].grasslandToWetland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].grasslandToWetland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].grasslandToWetland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].grasslandToWetland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].grasslandToWetland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].grasslandToWetland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].grasslandToWetland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].grasslandToWetland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].grasslandToWetland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].grasslandToWetland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].grasslandToWetland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].grasslandToWetland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].grasslandToWetland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].grasslandToWetland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].grasslandToWetland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].grasslandToWetland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].grasslandToWetland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].grasslandToWetland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].grasslandToWetland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].grasslandToWetland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].grasslandToWetland },
                      ]}
                    />
                    {/* 19 */}
                    <BarSeries
                      color="#da4f89"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].LandToPeatExtraction },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].LandToPeatExtraction },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].LandToPeatExtraction },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].LandToPeatExtraction },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].LandToPeatExtraction },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].LandToPeatExtraction },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].LandToPeatExtraction },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].LandToPeatExtraction },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].LandToPeatExtraction },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].LandToPeatExtraction },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].LandToPeatExtraction },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].LandToPeatExtraction },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].LandToPeatExtraction },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].LandToPeatExtraction },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].LandToPeatExtraction },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].LandToPeatExtraction },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].LandToPeatExtraction },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].LandToPeatExtraction },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].LandToPeatExtraction },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].LandToPeatExtraction },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].LandToPeatExtraction },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].LandToPeatExtraction },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].LandToPeatExtraction },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].LandToPeatExtraction },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].LandToPeatExtraction },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].LandToPeatExtraction },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].LandToPeatExtraction },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].LandToPeatExtraction },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].LandToPeatExtraction },
                      ]}
                    />
                    {/* 20 */}
                    <BarSeries
                      color="#6e438c"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].PeatlandRestoration },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].PeatlandRestoration },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].PeatlandRestoration },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].PeatlandRestoration },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].PeatlandRestoration },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].PeatlandRestoration },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].PeatlandRestoration },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].PeatlandRestoration },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].PeatlandRestoration },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].PeatlandRestoration },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].PeatlandRestoration },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].PeatlandRestoration },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].PeatlandRestoration },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].PeatlandRestoration },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].PeatlandRestoration },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].PeatlandRestoration },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].PeatlandRestoration },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].PeatlandRestoration },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].PeatlandRestoration },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].PeatlandRestoration },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].PeatlandRestoration },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].PeatlandRestoration },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].PeatlandRestoration },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].PeatlandRestoration },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].PeatlandRestoration },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].PeatlandRestoration },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].PeatlandRestoration },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].PeatlandRestoration },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].PeatlandRestoration },
                      ]}
                    />
                    {/* 21 */}
                    <BarSeries
                      color="#164194"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].forestlandToSettlement },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].forestlandToSettlement },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].forestlandToSettlement },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].forestlandToSettlement },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].forestlandToSettlement },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].forestlandToSettlement },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].forestlandToSettlement },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].forestlandToSettlement },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].forestlandToSettlement },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].forestlandToSettlement },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].forestlandToSettlement },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].forestlandToSettlement },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].forestlandToSettlement },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].forestlandToSettlement },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].forestlandToSettlement },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].forestlandToSettlement },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].forestlandToSettlement },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].forestlandToSettlement },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].forestlandToSettlement },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].forestlandToSettlement },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].forestlandToSettlement },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].forestlandToSettlement },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].forestlandToSettlement },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].forestlandToSettlement },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].forestlandToSettlement },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].forestlandToSettlement },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].forestlandToSettlement },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].forestlandToSettlement },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].forestlandToSettlement },
                      ]}
                    />
                    {/* 22 */}
                    <BarSeries
                      color="#2b7abf"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].croplandToSettlement },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].croplandToSettlement },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].croplandToSettlement },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].croplandToSettlement },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].croplandToSettlement },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].croplandToSettlement },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].croplandToSettlement },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].croplandToSettlement },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].croplandToSettlement },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].croplandToSettlement },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].croplandToSettlement },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].croplandToSettlement },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].croplandToSettlement },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].croplandToSettlement },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].croplandToSettlement },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].croplandToSettlement },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].croplandToSettlement },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].croplandToSettlement },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].croplandToSettlement },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].croplandToSettlement },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].croplandToSettlement },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].croplandToSettlement },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].croplandToSettlement },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].croplandToSettlement },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].croplandToSettlement },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].croplandToSettlement },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].croplandToSettlement },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].croplandToSettlement },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].croplandToSettlement },
                      ]}
                    />
                    {/* 23 */}
                    <BarSeries
                      color="#00aed5"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].grasslandToSettlement },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].grasslandToSettlement },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].grasslandToSettlement },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].grasslandToSettlement },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].grasslandToSettlement },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].grasslandToSettlement },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].grasslandToSettlement },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].grasslandToSettlement },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].grasslandToSettlement },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].grasslandToSettlement },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].grasslandToSettlement },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].grasslandToSettlement },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].grasslandToSettlement },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].grasslandToSettlement },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].grasslandToSettlement },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].grasslandToSettlement },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].grasslandToSettlement },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].grasslandToSettlement },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].grasslandToSettlement },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].grasslandToSettlement },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].grasslandToSettlement },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].grasslandToSettlement },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].grasslandToSettlement },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].grasslandToSettlement },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].grasslandToSettlement },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].grasslandToSettlement },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].grasslandToSettlement },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].grasslandToSettlement },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].grasslandToSettlement },
                      ]}
                    />
                    {/* 24 */}
                    <BarSeries
                      color="#6caac7"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].wetlandToSettlement },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].wetlandToSettlement },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].wetlandToSettlement },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].wetlandToSettlement },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].wetlandToSettlement },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].wetlandToSettlement },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].wetlandToSettlement },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].wetlandToSettlement },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].wetlandToSettlement },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].wetlandToSettlement },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].wetlandToSettlement },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].wetlandToSettlement },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].wetlandToSettlement },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].wetlandToSettlement },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].wetlandToSettlement },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].wetlandToSettlement },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].wetlandToSettlement },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].wetlandToSettlement },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].wetlandToSettlement },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].wetlandToSettlement },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].wetlandToSettlement },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].wetlandToSettlement },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].wetlandToSettlement },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].wetlandToSettlement },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].wetlandToSettlement },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].wetlandToSettlement },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].wetlandToSettlement },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].wetlandToSettlement },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].wetlandToSettlement },
                      ]}
                    />
                    {/* 25 */}
                    <BarSeries
                      color="#4a5b58"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].otherlandToSettlement },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].otherlandToSettlement },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].otherlandToSettlement },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].otherlandToSettlement },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].otherlandToSettlement },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].otherlandToSettlement },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].otherlandToSettlement },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].otherlandToSettlement },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].otherlandToSettlement },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].otherlandToSettlement },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].otherlandToSettlement },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].otherlandToSettlement },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].otherlandToSettlement },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].otherlandToSettlement },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].otherlandToSettlement },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].otherlandToSettlement },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].otherlandToSettlement },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].otherlandToSettlement },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].otherlandToSettlement },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].otherlandToSettlement },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].otherlandToSettlement },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].otherlandToSettlement },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].otherlandToSettlement },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].otherlandToSettlement },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].otherlandToSettlement },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].otherlandToSettlement },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].otherlandToSettlement },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].otherlandToSettlement },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].otherlandToSettlement },
                      ]}
                    />
                    {/* 26 */}
                    <BarSeries
                      color="#f7cebd"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].forestlandToOtherland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].forestlandToOtherland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].forestlandToOtherland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].forestlandToOtherland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].forestlandToOtherland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].forestlandToOtherland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].forestlandToOtherland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].forestlandToOtherland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].forestlandToOtherland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].forestlandToOtherland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].forestlandToOtherland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].forestlandToOtherland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].forestlandToOtherland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].forestlandToOtherland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].forestlandToOtherland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].forestlandToOtherland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].forestlandToOtherland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].forestlandToOtherland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].forestlandToOtherland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].forestlandToOtherland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].forestlandToOtherland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].forestlandToOtherland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].forestlandToOtherland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].forestlandToOtherland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].forestlandToOtherland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].forestlandToOtherland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].forestlandToOtherland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].forestlandToOtherland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].forestlandToOtherland },
                      ]}
                    />
                    {/* 27 */}
                    <BarSeries
                      color="#fffdee"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].croplandToOtherland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].croplandToOtherland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].croplandToOtherland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].croplandToOtherland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].croplandToOtherland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].croplandToOtherland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].croplandToOtherland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].croplandToOtherland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].croplandToOtherland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].croplandToOtherland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].croplandToOtherland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].croplandToOtherland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].croplandToOtherland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].croplandToOtherland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].croplandToOtherland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].croplandToOtherland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].croplandToOtherland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].croplandToOtherland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].croplandToOtherland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].croplandToOtherland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].croplandToOtherland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].croplandToOtherland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].croplandToOtherland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].croplandToOtherland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].croplandToOtherland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].croplandToOtherland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].croplandToOtherland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].croplandToOtherland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].croplandToOtherland },
                      ]}
                    />
                    {/* 28 */}
                    <BarSeries
                      color="#371740"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].grasslandToOtherland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].grasslandToOtherland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].grasslandToOtherland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].grasslandToOtherland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].grasslandToOtherland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].grasslandToOtherland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].grasslandToOtherland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].grasslandToOtherland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].grasslandToOtherland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].grasslandToOtherland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].grasslandToOtherland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].grasslandToOtherland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].grasslandToOtherland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].grasslandToOtherland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].grasslandToOtherland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].grasslandToOtherland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].grasslandToOtherland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].grasslandToOtherland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].grasslandToOtherland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].grasslandToOtherland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].grasslandToOtherland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].grasslandToOtherland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].grasslandToOtherland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].grasslandToOtherland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].grasslandToOtherland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].grasslandToOtherland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].grasslandToOtherland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].grasslandToOtherland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].grasslandToOtherland },
                      ]}
                    />
                    {/* 29 */}
                    <BarSeries
                      color="#620d00"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].wetlandToOtherland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].wetlandToOtherland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].wetlandToOtherland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].wetlandToOtherland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].wetlandToOtherland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].wetlandToOtherland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].wetlandToOtherland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].wetlandToOtherland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].wetlandToOtherland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].wetlandToOtherland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].wetlandToOtherland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].wetlandToOtherland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].wetlandToOtherland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].wetlandToOtherland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].wetlandToOtherland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].wetlandToOtherland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].wetlandToOtherland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].wetlandToOtherland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].wetlandToOtherland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].wetlandToOtherland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].wetlandToOtherland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].wetlandToOtherland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].wetlandToOtherland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].wetlandToOtherland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].wetlandToOtherland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].wetlandToOtherland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].wetlandToOtherland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].wetlandToOtherland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].wetlandToOtherland },
                      ]}
                    />
                    {/* 30 */}
                    <BarSeries
                      color="#af1411"
                      data={[
                        // { x: 2022, y0: 0, y: landUseChangeResponse.landUseChange[2022].settlementToOtherland },
                        { x: 2023, y0: 0, y: landUseChangeResponse.landUseChange[2023].settlementToOtherland },
                       { x: 2024, y0: 0, y: landUseChangeResponse.landUseChange[2024].settlementToOtherland },
                        { x: 2025, y0: 0, y: landUseChangeResponse.landUseChange[2025].settlementToOtherland },
                        { x: 2026, y0: 0, y: landUseChangeResponse.landUseChange[2026].settlementToOtherland },
                        { x: 2027, y0: 0, y: landUseChangeResponse.landUseChange[2027].settlementToOtherland },
                        { x: 2028, y0: 0, y: landUseChangeResponse.landUseChange[2028].settlementToOtherland },
                        { x: 2029, y0: 0, y: landUseChangeResponse.landUseChange[2029].settlementToOtherland },
                        { x: 2030, y0: 0, y: landUseChangeResponse.landUseChange[2030].settlementToOtherland },
                        { x: 2031, y0: 0, y: landUseChangeResponse.landUseChange[2031].settlementToOtherland },
                        { x: 2032, y0: 0, y: landUseChangeResponse.landUseChange[2032].settlementToOtherland },
                        { x: 2033, y0: 0, y: landUseChangeResponse.landUseChange[2033].settlementToOtherland },
                        { x: 2034, y0: 0, y: landUseChangeResponse.landUseChange[2034].settlementToOtherland },
                        { x: 2035, y0: 0, y: landUseChangeResponse.landUseChange[2035].settlementToOtherland },
                        { x: 2036, y0: 0, y: landUseChangeResponse.landUseChange[2036].settlementToOtherland },
                        { x: 2037, y0: 0, y: landUseChangeResponse.landUseChange[2037].settlementToOtherland },
                        { x: 2038, y0: 0, y: landUseChangeResponse.landUseChange[2038].settlementToOtherland },
                        { x: 2039, y0: 0, y: landUseChangeResponse.landUseChange[2039].settlementToOtherland },
                        { x: 2040, y0: 0, y: landUseChangeResponse.landUseChange[2040].settlementToOtherland },
                        { x: 2041, y0: 0, y: landUseChangeResponse.landUseChange[2041].settlementToOtherland },
                        { x: 2042, y0: 0, y: landUseChangeResponse.landUseChange[2042].settlementToOtherland },
                        { x: 2043, y0: 0, y: landUseChangeResponse.landUseChange[2043].settlementToOtherland },
                        { x: 2044, y0: 0, y: landUseChangeResponse.landUseChange[2044].settlementToOtherland },
                        { x: 2045, y0: 0, y: landUseChangeResponse.landUseChange[2045].settlementToOtherland },
                        { x: 2046, y0: 0, y: landUseChangeResponse.landUseChange[2046].settlementToOtherland },
                        { x: 2047, y0: 0, y: landUseChangeResponse.landUseChange[2047].settlementToOtherland },
                        { x: 2048, y0: 0, y: landUseChangeResponse.landUseChange[2048].settlementToOtherland },
                        { x: 2049, y0: 0, y: landUseChangeResponse.landUseChange[2049].settlementToOtherland },
                        { x: 2050, y0: 0, y: landUseChangeResponse.landUseChange[2050].settlementToOtherland },
                      ]}
                    />
          </XYPlot>
        </div>
      </div>
      <div className="luc_legendline">
          <LineLegendLandUse />
      </div>
      
    </div>
  );
};

LUCBarChart.propTypes = {
  landUseChangeResponse: PropTypes.object.isRequired
};
