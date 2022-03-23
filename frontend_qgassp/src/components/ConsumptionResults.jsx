import React from "react";
import Divider from "@mui/material/Divider";
import "../css/u1planner.css";
import Chip from "@mui/material/Chip";
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

/**
 * Consumption Results
 * @return {}
 */
const BarSeries = VerticalBarSeries;
export const ConsumptionResults = () => {
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

  return (
    <article>
      <section>
        <Divider textAlign="left" flexItem>
          {" "}
          <Chip label="Results" />
        </Divider>

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
                <LineSeries
            /*   baseline */
            color="#000000"
            curve="curveNatural"
            strokeWidth="4"
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
                <BarSeries
                  /* he */
                  color="#3d58a3"
                  opacity={0.31}
                  data={[
                    { x: 2022, y: 1000 },
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
                <BarSeries
                  /* h0 */
                  color="#ef7d00"
                  opacity={0.31}
                  data={[
                    { x: 2022, y: 1000 },
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
                <BarSeries
                  /*  tf */
                  color="#95c11f"
                  opacity={0.31}
                  data={[
                    { x: 2022, y: 1000 },
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
                <BarSeries
                  /*  t0 */
                  color="#ce143d"
                  opacity={0.31}
                  data={[
                    { x: 2022, y: 1000 },
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
                <BarSeries
                  /*  At */
                  color="#845f9e"
                  opacity={0.31}
                  data={[
                    { x: 2022, y: 1000 },
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
                <BarSeries
                  /* F  */
                  color="#996e35"
                  opacity={0.31}
                  data={[
                    { x: 2022, y: 1000 },
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
                <BarSeries
                  /* tG  */
                  color="#e1719a"
                  opacity={0.31}
                  data={[
                    { x: 2022, y: 1000 },
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
                <BarSeries
                  /* S */
                  color="#76918e"
                  opacity={0.31}
                  data={[
                    { x: 2022, y: 1000 },
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
              <br/>




        <Divider textAlign="left" flexItem>
          {" "}
          <b>Baseline vs Policy</b>
        </Divider>
        <XYPlot xType="ordinal" width={1000} height={400} xDistance={100}>
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis
              
              />
              <YAxis title="Emissions/ kG C02 eq" />
              <LineSeries
                data={RfBaseline}
                color="#000"
              />
              <BarSeries
                className="vertical-bar-series-example"
                opacity={0.55}
                data={RfData}
                color="#3d58a3"
              />
              <BarSeries data={BlData} color="#ef7d00"  opacity={0.55}/>
              <BarSeries
                color="#52974c"
                opacity={0.55}
                className="vertical-bar-series-example"
                data={PnData}
              />
              <BarSeries color="#ce143d" data={NaData}  opacity={0.55} />
             
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
        <br/>
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
