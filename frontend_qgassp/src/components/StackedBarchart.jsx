import React, { useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
} from "react-vis";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { LineLegend } from "./LineLegend";
import { Button } from "./Button";
import { NewResidents } from "./NewResidents";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const BarSeries = VerticalBarSeries;
/**
 * Barchart UI component for projections
 * @return {}
 */
 
export const StackedBarchart = ({
  projections,
  baseline,
  settlementDistribution,
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  const [nextU2view, setU2View] = useState(false);
  const navigate = useNavigate();

  const goToNewResidents = () => {
    setU2View(true);
  };

  if (nextU2view === false) {
    return (
      <article>
        {
          <Header
            user={user}
            onLogin={onLogin}
            onLogout={onLogout}
            onCreateAccount={onCreateAccount}
          />
        }
        <div className="headerSettlement">
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="U1 Projections: 2022-2050" />
          </Divider>
        </div>

        <section>
          <div>{JSON.stringify(projections)}</div>  
          <label>
            <b>CO2e emissions per capita 2022-2050</b>
          </label>
          <div>
            <XYPlot width={900} height={500} stackBy="y" xType="ordinal">
              <HorizontalGridLines />
              <VerticalGridLines />
              <VerticalBarSeries className="StackedBarchart" />
              <XAxis />
              <YAxis />
              <BarSeries
                color="#8C0303"
                data={[
                  { x: 2022, y: projections.bus[2022] },
                  { x: 2023, y: projections.bus[2023] },
                  { x: 2024, y: projections.bus[2024] },
                  { x: 2025, y: projections.bus[2025] },
                  { x: 2026, y: projections.bus[2026] },
                  { x: 2027, y: projections.bus[2027] },
                  { x: 2028, y: projections.bus[2028] },
                  { x: 2029, y: projections.bus[2029] },
                  { x: 2030, y: projections.bus[2030] },
                  { x: 2031, y: projections.bus[2031] },
                  { x: 2032, y: projections.bus[2032] },
                  { x: 2033, y: projections.bus[2033] },
                  { x: 2034, y: projections.bus[2034] },
                  { x: 2035, y: projections.bus[2035] },
                  { x: 2036, y: projections.bus[2036] },
                  { x: 2037, y: projections.bus[2037] },
                  { x: 2038, y: projections.bus[2038] },
                  { x: 2039, y: projections.bus[2039] },
                  { x: 2040, y: projections.bus[2040] },
                  { x: 2041, y: projections.bus[2041] },
                  { x: 2042, y: projections.bus[2042] },
                  { x: 2043, y: projections.bus[2043] },
                  { x: 2044, y: projections.bus[2044] },
                  { x: 2045, y: projections.bus[2045] },
                  { x: 2046, y: projections.bus[2046] },
                  { x: 2047, y: projections.bus[2047] },
                  { x: 2048, y: projections.bus[2048] },
                  { x: 2049, y: projections.bus[2049] },
                  { x: 2050, y: projections.bus[2050] },
                ]}
              />
              <BarSeries
                color="#A6036D"
                data={[
                  { x: 2022, y: projections.car[2022] },
                  { x: 2023, y: projections.car[2023] },
                  { x: 2024, y: projections.car[2024] },
                  { x: 2025, y: projections.car[2025] },
                  { x: 2026, y: projections.car[2026] },
                  { x: 2027, y: projections.car[2027] },
                  { x: 2028, y: projections.car[2028] },
                  { x: 2029, y: projections.car[2029] },
                  { x: 2030, y: projections.car[2030] },
                  { x: 2031, y: projections.car[2031] },
                  { x: 2032, y: projections.car[2032] },
                  { x: 2033, y: projections.car[2033] },
                  { x: 2034, y: projections.car[2034] },
                  { x: 2035, y: projections.car[2035] },
                  { x: 2036, y: projections.car[2036] },
                  { x: 2037, y: projections.car[2037] },
                  { x: 2038, y: projections.car[2038] },
                  { x: 2039, y: projections.car[2039] },
                  { x: 2040, y: projections.car[2040] },
                  { x: 2041, y: projections.car[2041] },
                  { x: 2042, y: projections.car[2042] },
                  { x: 2043, y: projections.car[2043] },
                  { x: 2044, y: projections.car[2044] },
                  { x: 2045, y: projections.car[2045] },
                  { x: 2046, y: projections.car[2046] },
                  { x: 2047, y: projections.car[2047] },
                  { x: 2048, y: projections.car[2048] },
                  { x: 2049, y: projections.car[2049] },
                  { x: 2050, y: projections.car[2050] },
                ]}
              />
              <BarSeries
                color="#400D01"
                data={[
                  { x: 2022, y: projections.metro[2022] },
                  { x: 2023, y: projections.metro[2023] },
                  { x: 2024, y: projections.metro[2024] },
                  { x: 2025, y: projections.metro[2025] },
                  { x: 2026, y: projections.metro[2026] },
                  { x: 2027, y: projections.metro[2027] },
                  { x: 2028, y: projections.metro[2028] },
                  { x: 2029, y: projections.metro[2029] },
                  { x: 2030, y: projections.metro[2030] },
                  { x: 2031, y: projections.metro[2031] },
                  { x: 2032, y: projections.metro[2032] },
                  { x: 2033, y: projections.metro[2033] },
                  { x: 2034, y: projections.metro[2034] },
                  { x: 2035, y: projections.metro[2035] },
                  { x: 2036, y: projections.metro[2036] },
                  { x: 2037, y: projections.metro[2037] },
                  { x: 2038, y: projections.metro[2038] },
                  { x: 2039, y: projections.metro[2039] },
                  { x: 2040, y: projections.metro[2040] },
                  { x: 2041, y: projections.metro[2041] },
                  { x: 2042, y: projections.metro[2042] },
                  { x: 2043, y: projections.metro[2043] },
                  { x: 2044, y: projections.metro[2044] },
                  { x: 2045, y: projections.metro[2045] },
                  { x: 2046, y: projections.metro[2046] },
                  { x: 2047, y: projections.metro[2047] },
                  { x: 2048, y: projections.metro[2048] },
                  { x: 2049, y: projections.metro[2049] },
                  { x: 2050, y: projections.metro[2050] },
                ]}
              />
              <BarSeries
                color=" #C4D4F2"
                data={[
                  { x: 2022, y: projections.tram[2022] },
                  { x: 2023, y: projections.tram[2023] },
                  { x: 2024, y: projections.tram[2024] },
                  { x: 2025, y: projections.tram[2025] },
                  { x: 2026, y: projections.tram[2026] },
                  { x: 2027, y: projections.tram[2027] },
                  { x: 2028, y: projections.tram[2028] },
                  { x: 2029, y: projections.tram[2029] },
                  { x: 2030, y: projections.tram[2030] },
                  { x: 2031, y: projections.tram[2031] },
                  { x: 2032, y: projections.tram[2032] },
                  { x: 2033, y: projections.tram[2033] },
                  { x: 2034, y: projections.tram[2034] },
                  { x: 2035, y: projections.tram[2035] },
                  { x: 2036, y: projections.tram[2036] },
                  { x: 2037, y: projections.tram[2037] },
                  { x: 2038, y: projections.tram[2038] },
                  { x: 2039, y: projections.tram[2039] },
                  { x: 2040, y: projections.tram[2040] },
                  { x: 2041, y: projections.tram[2041] },
                  { x: 2042, y: projections.tram[2042] },
                  { x: 2043, y: projections.tram[2043] },
                  { x: 2044, y: projections.tram[2044] },
                  { x: 2045, y: projections.tram[2045] },
                  { x: 2046, y: projections.tram[2046] },
                  { x: 2047, y: projections.tram[2047] },
                  { x: 2048, y: projections.tram[2048] },
                  { x: 2049, y: projections.tram[2049] },
                  { x: 2050, y: projections.tram[2050] },
                ]}
              />
              <BarSeries
                color="#D90404"
                data={[
                  { x: 2022, y: projections.train[2022] },
                  { x: 2023, y: projections.train[2023] },
                  { x: 2024, y: projections.train[2024] },
                  { x: 2025, y: projections.train[2025] },
                  { x: 2026, y: projections.train[2026] },
                  { x: 2027, y: projections.train[2027] },
                  { x: 2028, y: projections.train[2028] },
                  { x: 2029, y: projections.train[2029] },
                  { x: 2030, y: projections.train[2030] },
                  { x: 2031, y: projections.train[2031] },
                  { x: 2032, y: projections.train[2032] },
                  { x: 2033, y: projections.train[2033] },
                  { x: 2034, y: projections.train[2034] },
                  { x: 2035, y: projections.train[2035] },
                  { x: 2036, y: projections.train[2036] },
                  { x: 2037, y: projections.train[2037] },
                  { x: 2038, y: projections.train[2038] },
                  { x: 2039, y: projections.train[2039] },
                  { x: 2040, y: projections.train[2040] },
                  { x: 2041, y: projections.train[2041] },
                  { x: 2042, y: projections.train[2042] },
                  { x: 2043, y: projections.train[2043] },
                  { x: 2044, y: projections.train[2044] },
                  { x: 2045, y: projections.train[2045] },
                  { x: 2046, y: projections.train[2046] },
                  { x: 2047, y: projections.train[2047] },
                  { x: 2048, y: projections.train[2048] },
                  { x: 2049, y: projections.train[2049] },
                  { x: 2050, y: projections.train[2050] },
                ]}
              />
              <BarSeries
                color="#80D941"
                data={[
                  { x: 2022, y: projections.rail_transport[2022] },
                  { x: 2023, y: projections.rail_transport[2023] },
                  { x: 2024, y: projections.rail_transport[2024] },
                  { x: 2025, y: projections.rail_transport[2025] },
                  { x: 2026, y: projections.rail_transport[2026] },
                  { x: 2027, y: projections.rail_transport[2027] },
                  { x: 2028, y: projections.rail_transport[2028] },
                  { x: 2029, y: projections.rail_transport[2029] },
                  { x: 2030, y: projections.rail_transport[2030] },
                  { x: 2031, y: projections.rail_transport[2031] },
                  { x: 2032, y: projections.rail_transport[2032] },
                  { x: 2033, y: projections.rail_transport[2033] },
                  { x: 2034, y: projections.rail_transport[2034] },
                  { x: 2035, y: projections.rail_transport[2035] },
                  { x: 2036, y: projections.rail_transport[2036] },
                  { x: 2037, y: projections.rail_transport[2037] },
                  { x: 2038, y: projections.rail_transport[2038] },
                  { x: 2039, y: projections.rail_transport[2039] },
                  { x: 2040, y: projections.rail_transport[2040] },
                  { x: 2041, y: projections.rail_transport[2041] },
                  { x: 2042, y: projections.rail_transport[2042] },
                  { x: 2043, y: projections.rail_transport[2043] },
                  { x: 2044, y: projections.rail_transport[2044] },
                  { x: 2045, y: projections.rail_transport[2045] },
                  { x: 2046, y: projections.rail_transport[2046] },
                  { x: 2047, y: projections.rail_transport[2047] },
                  { x: 2048, y: projections.rail_transport[2048] },
                  { x: 2049, y: projections.rail_transport[2049] },
                  { x: 2050, y: projections.rail_transport[2050] },
                ]}
              />
              <BarSeries
                color="#595959"
                data={[
                  { x: 2022, y: projections.road_transport[2022] },
                  { x: 2023, y: projections.road_transport[2023] },
                  { x: 2024, y: projections.road_transport[2024] },
                  { x: 2025, y: projections.road_transport[2025] },
                  { x: 2026, y: projections.road_transport[2026] },
                  { x: 2027, y: projections.road_transport[2027] },
                  { x: 2028, y: projections.road_transport[2028] },
                  { x: 2029, y: projections.road_transport[2029] },
                  { x: 2030, y: projections.road_transport[2030] },
                  { x: 2031, y: projections.road_transport[2031] },
                  { x: 2032, y: projections.road_transport[2032] },
                  { x: 2033, y: projections.road_transport[2033] },
                  { x: 2034, y: projections.road_transport[2034] },
                  { x: 2035, y: projections.road_transport[2035] },
                  { x: 2036, y: projections.road_transport[2036] },
                  { x: 2037, y: projections.road_transport[2037] },
                  { x: 2038, y: projections.road_transport[2038] },
                  { x: 2039, y: projections.road_transport[2039] },
                  { x: 2040, y: projections.road_transport[2040] },
                  { x: 2041, y: projections.road_transport[2041] },
                  { x: 2042, y: projections.road_transport[2042] },
                  { x: 2043, y: projections.road_transport[2043] },
                  { x: 2044, y: projections.road_transport[2044] },
                  { x: 2045, y: projections.road_transport[2045] },
                  { x: 2046, y: projections.road_transport[2046] },
                  { x: 2047, y: projections.road_transport[2047] },
                  { x: 2048, y: projections.road_transport[2048] },
                  { x: 2049, y: projections.road_transport[2049] },
                  { x: 2050, y: projections.road_transport[2050] },
                ]}
              />
              <BarSeries
                color="#F2CE1B"
                data={[
                  { x: 2022, y: projections.waterways_transport[2022] },
                  { x: 2023, y: projections.waterways_transport[2023] },
                  { x: 2024, y: projections.waterways_transport[2024] },
                  { x: 2025, y: projections.waterways_transport[2025] },
                  { x: 2026, y: projections.waterways_transport[2026] },
                  { x: 2027, y: projections.waterways_transport[2027] },
                  { x: 2028, y: projections.waterways_transport[2028] },
                  { x: 2029, y: projections.waterways_transport[2029] },
                  { x: 2030, y: projections.waterways_transport[2030] },
                  { x: 2031, y: projections.waterways_transport[2031] },
                  { x: 2032, y: projections.waterways_transport[2032] },
                  { x: 2033, y: projections.waterways_transport[2033] },
                  { x: 2034, y: projections.waterways_transport[2034] },
                  { x: 2035, y: projections.waterways_transport[2035] },
                  { x: 2036, y: projections.waterways_transport[2036] },
                  { x: 2037, y: projections.waterways_transport[2037] },
                  { x: 2038, y: projections.waterways_transport[2038] },
                  { x: 2039, y: projections.waterways_transport[2039] },
                  { x: 2040, y: projections.waterways_transport[2040] },
                  { x: 2041, y: projections.waterways_transport[2041] },
                  { x: 2042, y: projections.waterways_transport[2042] },
                  { x: 2043, y: projections.waterways_transport[2043] },
                  { x: 2044, y: projections.waterways_transport[2044] },
                  { x: 2045, y: projections.waterways_transport[2045] },
                  { x: 2046, y: projections.waterways_transport[2046] },
                  { x: 2047, y: projections.waterways_transport[2047] },
                  { x: 2048, y: projections.waterways_transport[2048] },
                  { x: 2049, y: projections.waterways_transport[2049] },
                  { x: 2050, y: projections.waterways_transport[2050] },
                ]}
              />
            </XYPlot>
            <LineLegend />
          </div>
        </section>
        <div className="backButton">
          <Button
            size="small"
            value="backProjections"
            onClick={() => navigate("u1planner", { replace: true })}
            label="&laquo; Previous"
            secondary
          />
        </div>
        <div className="nextU2Button">
          <Button
            size="small"
            value="nextU2"
            onClick={goToNewResidents}
            label="Next &raquo;"
            primary
          />
        </div>
      </article>
    );
  } else {
    return (
      <NewResidents
        baseline={baseline}
        settlementDistribution={settlementDistribution}
      />
    );
  }
};

StackedBarchart.propTypes = {
  baseline: PropTypes.object.isRequired,
  projections: PropTypes.object.isRequired,
  settlementDistribution: PropTypes.object.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

StackedBarchart.defaultProps = {
  user: null,
};
