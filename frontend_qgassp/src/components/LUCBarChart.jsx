import React from "react";
import "../css/lucbarchart.css";
import { useNavigate } from "react-router-dom";
import {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
} from "react-vis";
import { Container } from "@mui/material";
import PropTypes from "prop-types";
import { LineLegendLandUse } from "./LineLegendLandUse";
import Divider from "@mui/material/Divider";
import { Button } from "./Button";

const BarSeries = VerticalBarSeries;

/**
 * LucStackedBarchart UI component
 * @return {}
 */

export const LUCBarChart = ({ landUseChangeResponse, year }) => {
  year = year ? year : parseInt(localStorage.getItem("year"));
  landUseChangeResponse = landUseChangeResponse ? landUseChangeResponse : JSON.parse(localStorage.landUseChangeResponse);

  // #region data distribution
  const dataCroplandToForestland = [];
  const dataGrasslandToForestland = [];
  const dataWetlandToForestland = [];
  const dataSettlementToForestland = [];
  const dataOtherlandToForestland = [];
  const dataForestlandToCropland = [];
  const dataGrasslandToCropland = [];
  const dataWetlandToCropland = [];
  const dataSettlementToCropland = [];
  const dataOtherlandToCropland = [];
  const dataCroplandToGrassland = [];
  const dataForestlandToGrassland = [];
  const dataWetlandToGrassland = [];
  const dataSettlementToGrassland = [];
  const dataOtherlandToGrassland = [];
  const dataForestlandToWetland = [];
  const dataCroplandToWetland = [];
  const dataGrasslandToWetland = [];
  const dataLandToPeatExtraction = [];
  const dataPeatlandRestoration = [];
  const dataForestlandToSettlement = [];
  const dataCroplandToSettlement = [];
  const dataGrasslandToSettlement = [];
  const dataWetlandToSettlement = [];
  const dataOtherlandToSettlement = [];
  const dataForestlandToOtherland = [];
  const dataCroplandToOtherland = [];
  const dataGrasslandToOtherland = [];
  const dataWetlandToOtherland = [];
  const dataSettlementToOtherland = [];

  for (let i = year; i < 2051; i++) {
    dataCroplandToForestland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.croplandToForestland,
    });
    dataGrasslandToForestland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.grasslandToForestland,
    });
    dataWetlandToForestland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.wetlandToForestland,
    });
    dataSettlementToForestland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.settlementToForestland,
    });
    dataOtherlandToForestland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.otherlandToForestland,
    });
    dataForestlandToCropland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.forestlandToCropland,
    });
    dataGrasslandToCropland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.grasslandToCropland,
    });
    dataWetlandToCropland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.wetlandToCropland,
    });
    dataSettlementToCropland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.settlementToCropland,
    });
    dataOtherlandToCropland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.otherlandToCropland,
    });
    dataForestlandToGrassland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.forestlandToGrassland,
    });
    dataCroplandToGrassland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.croplandToGrassland,
    });
    dataWetlandToGrassland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.wetlandToGrassland,
    });
    dataSettlementToGrassland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.settlementToGrassland,
    });
    dataOtherlandToGrassland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.otherlandToGrassland,
    });
    dataForestlandToWetland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.forestlandToWetland,
    });
    dataCroplandToWetland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.croplandToWetland,
    });
    dataGrasslandToWetland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.grasslandToWetland,
    });
    dataLandToPeatExtraction.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.landToPeatExtraction,
    });
    dataPeatlandRestoration.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.peatlandRestoration,
    });
    dataForestlandToSettlement.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.forestlandToSettlement,
    });
    dataCroplandToSettlement.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.croplandToSettlement,
    });
    dataGrasslandToSettlement.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.wetlandToSettlement,
    });
    dataWetlandToSettlement.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.wetlandToSettlement,
    });
    dataOtherlandToSettlement.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.otherlandToSettlement,
    });
    dataForestlandToOtherland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.forestlandToOtherland,
    });
    dataCroplandToOtherland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.croplandToOtherland,
    });
    dataGrasslandToOtherland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.grasslandToOtherland,
    });
    dataWetlandToOtherland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.wetlandToOtherland,
    });
    dataSettlementToOtherland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse[i].landUseChange.settlementToOtherland,
    });
  }
  // #endregion
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl">
    <section>
      <div className="luc_alert_container">
        <Divider textAlign="left" flexItem>
          <b>Land-use Change Bar Chart</b>
        </Divider>
      </div>
      <div className="luc_container">
        <div className="landusechange_bar">
          <FlexibleXYPlot width={1200} height={500} xType="ordinal" stackBy="y">
            <HorizontalGridLines />
            <VerticalGridLines />
            <VerticalBarSeries className="LucStackedBarchart" />
            <XAxis
              title="Year"
              style={{
                line: { stroke: "#ADDDE1" },
                ticks: { stroke: "#ADDDE1" },
                text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
              }}
            />
            <YAxis title="Land-use tC02/a" />
            {/* 1 */}
            <BarSeries
              color="#ffdf43"
              opacity={0.8}
              data={dataCroplandToForestland}
            />
            {/* 2 */}
            <BarSeries
              color="#76918e"
              opacity={0.8}
              data={dataGrasslandToForestland}
            />
            {/* 3 */}
            <BarSeries
              color="#ce143d"
              opacity={0.8}
              data={dataWetlandToForestland}
            />
            {/* 4 */}
            <BarSeries
              color="#d6e7d9"
              opacity={0.8}
              data={dataSettlementToForestland}
            />
            {/* 5 */}
            <BarSeries
              color="#002117"
              opacity={0.8}
              data={dataOtherlandToForestland}
            />
            {/* 6 */}
            <BarSeries
              color="#ef7d00"
              opacity={0.8}
              data={dataForestlandToCropland}
            />
            {/* 7 */}
            <BarSeries
              color="#6c3b00"
              opacity={0.8}
              data={dataGrasslandToCropland}
            />
            {/* 8 */}
            <BarSeries
              color="#00aed5"
              opacity={0.8}
              data={dataWetlandToCropland}
            />
            {/* 9 */}
            <BarSeries
              color="#8C0303"
              opacity={0.8}
              data={dataSettlementToCropland}
            />
            {/* 10 */}
            <BarSeries
              color="#A6036D"
              opacity={0.8}
              data={dataOtherlandToCropland}
            />
            {/* 11 */}
            <BarSeries
              color="#400D01"
              opacity={0.8}
              data={dataForestlandToGrassland}
            />
            {/* 12 */}
            <BarSeries
              color="#C4D4F2"
              opacity={0.8}
              data={dataCroplandToGrassland}
            />
            {/* 13 */}
            <BarSeries
              color="#D90404"
              opacity={0.8}
              data={dataWetlandToGrassland}
            />
            {/* 14 */}
            <BarSeries
              color="#80D941"
              opacity={0.8}
              data={dataSettlementToGrassland}
            />
            {/* 15 */}
            <BarSeries
              color="#595959"
              opacity={0.8}
              data={dataOtherlandToGrassland}
            />
            {/* 16 */}
            <BarSeries
              color="#F2CE1B"
              opacity={0.8}
              data={dataForestlandToWetland}
            />
            {/* 17 */}
            <BarSeries
              color="#d51317"
              opacity={0.8}
              data={dataCroplandToWetland}
            />
            {/* 18 */}
            <BarSeries
              color="#8f2e57"
              opacity={0.8}
              data={dataGrasslandToWetland}
            />
            {/* 19 */}
            <BarSeries
              color="#da4f89"
              opacity={0.8}
              data={dataLandToPeatExtraction}
            />
            {/* 20 */}
            <BarSeries
              color="#6e438c"
              opacity={0.8}
              data={dataPeatlandRestoration}
            />
            {/* 21 */}
            <BarSeries
              color="#164194"
              opacity={0.8}
              data={dataForestlandToSettlement}
            />
            {/* 22 */}
            <BarSeries
              color="#2b7abf"
              opacity={0.8}
              data={dataCroplandToSettlement}
            />
            {/* 23 */}
            <BarSeries
              color="#0042d9"
              opacity={0.8}
              data={dataGrasslandToSettlement}
            />
            {/* 24 */}
            <BarSeries
              color="#6caac7"
              opacity={0.8}
              data={dataWetlandToSettlement}
            />
            {/* 25 */}
            <BarSeries
              color="#4a5b58"
              opacity={0.8}
              data={dataOtherlandToSettlement}
            />
            {/* 26 */}
            <BarSeries
              color="#f7cebd"
              opacity={0.8}
              data={dataForestlandToOtherland}
            />
            {/* 27 */}
            <BarSeries
              color="#af1411"
              opacity={0.8}
              data={dataCroplandToOtherland}
            />
            {/* 28 */}
            <BarSeries
              color="#c9b01e"
              opacity={0.8}
              data={dataGrasslandToOtherland}
            />
            {/* 29 */}
            <BarSeries
              color="#371740"
              opacity={0.8}
              data={dataWetlandToOtherland}
            />
            {/* 30 */}
            <BarSeries
              color="#620d00"
              opacity={0.8}
              data={dataSettlementToOtherland}
            />
          </FlexibleXYPlot>
        </div>
      </div>
      <div className="luc_legendline">
        <LineLegendLandUse />
      </div>
      <div className="buildings-buttons">
        <div className="">
              <Button
                size="small"
                value="backProjections"
                onClick={() => navigate("../landUseChangeTableForm", { replace: true })}
                label="&laquo; Previous"
                secondary="true"
              />
        </div>
      </div>
    </section>
    </Container>
  );
};

LUCBarChart.propTypes = {
  landUseChangeResponse: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired,
};
