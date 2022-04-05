import React from "react";
import "../css/lucbarchart.css";
import {
    XYPlot,
    FlexibleXYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    VerticalBarSeries,
  } from "react-vis";
import PropTypes from "prop-types";
import { LineLegendLandUse } from "./LineLegendLandUse";
import Divider from "@mui/material/Divider";

const BarSeries = VerticalBarSeries;

/**
 * LucStackedBarchart UI component
 * @return {}
 */

export const LUCBarChart = ({landUseChangeResponse, year }) => {
  // #region data distribution
  const dataCroplandToForestland = [];
  for (let i = year; i < 2051; i++){
    dataCroplandToForestland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].croplandToForestland });
  };
  const dataGrasslandToForestland = [];
  for (let i = year; i < 2051; i++){
    dataGrasslandToForestland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].grasslandToForestland });
  };
  const dataWetlandToForestland = [];
  for (let i = year; i < 2051; i++){
    dataWetlandToForestland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].wetlandToForestland });
  };
  const dataSettlementToForestland = [];
  for (let i = year; i < 2051; i++){
    dataSettlementToForestland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].settlementToForestland });
  };
  const dataOtherlandToForestland = [];
  for (let i = year; i < 2051; i++){
    dataOtherlandToForestland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].otherlandToForestland });
  };
  const dataForestlandToCropland = [];
  for (let i = year; i < 2051; i++){
    dataForestlandToCropland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].forestlandToCropland });
  };
  const dataGrasslandToCropland = [];
  for (let i = year; i < 2051; i++){
    dataGrasslandToCropland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].grasslandToCropland });
  };
  const dataWetlandToCropland = [];
  for (let i = year; i < 2051; i++){
    dataWetlandToCropland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].wetlandToCropland });
  };
  const dataSettlementToCropland = [];
  for (let i = year; i < 2051; i++){
    dataSettlementToCropland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].settlementToCropland });
  };
  const dataOtherlandToCropland = [];
  for (let i = year; i < 2051; i++){
    dataOtherlandToCropland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].otherlandToCropland });
  };
  const dataForestlandToGrassland = [];
  for (let i = year; i < 2051; i++){
    dataForestlandToGrassland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].forestlandToGrassland });
  };
  const dataCroplandToGrassland = [];
  for (let i = year; i < 2051; i++){
    dataCroplandToGrassland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].croplandToGrassland });
  };
  const dataWetlandToGrassland = [];
  for (let i = year; i < 2051; i++){
    dataWetlandToGrassland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].wetlandToGrassland });
  };
  const dataSettlementToGrassland = [];
  for (let i = year; i < 2051; i++){
    dataSettlementToGrassland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].settlementToGrassland });
  };
  const dataOtherlandToGrassland = [];
  for (let i = year; i < 2051; i++){
    dataOtherlandToGrassland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].otherlandToGrassland });
  };
  const dataForestlandToWetland = [];
  for (let i = year; i < 2051; i++){
    dataForestlandToWetland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].forestlandToWetland });
  };
  const dataCroplandToWetland = [];
  for (let i = year; i < 2051; i++){
    dataCroplandToWetland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].croplandToWetland });
  };
  const dataGrasslandToWetland = [];
  for (let i = year; i < 2051; i++){
    dataGrasslandToWetland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].grasslandToWetland });
  };
  const dataLandToPeatExtraction = [];
  for (let i = year; i < 2051; i++){
    dataLandToPeatExtraction.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].LandToPeatExtraction });
  };
  const dataPeatlandRestoration = [];
  for (let i = year; i < 2051; i++){
    dataPeatlandRestoration.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].PeatlandRestoration });
  };
  const dataForestlandToSettlement = [];
  for (let i = year; i < 2051; i++){
    dataForestlandToSettlement.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].forestlandToSettlement });
  };
  const dataCroplandToSettlement = [];
  for (let i = year; i < 2051; i++){
    dataCroplandToSettlement.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].croplandToSettlement });
  };
  const dataGrasslandToSettlement = [];
  for (let i = year; i < 2051; i++){
    dataGrasslandToSettlement.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].grasslandToSettlement });
  };
  const dataWetlandToSettlement = [];
  for (let i = year; i < 2051; i++){
    dataWetlandToSettlement.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].wetlandToSettlement });
  };
  const dataOtherlandToSettlement = [];
  for (let i = year; i < 2051; i++){
    dataOtherlandToSettlement.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].otherlandToSettlement });
  };
  const dataForestlandToOtherland = [];
  for (let i = year; i < 2051; i++){
    dataForestlandToOtherland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].forestlandToOtherland });
  };
  const dataCroplandToOtherland = [];
  for (let i = year; i < 2051; i++){
    dataCroplandToOtherland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].croplandToOtherland });
  };
  const dataGrasslandToOtherland = [];
  for (let i = year; i < 2051; i++){
    dataGrasslandToOtherland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].grasslandToOtherland });
  };
  const dataWetlandToOtherland = [];
  for (let i = year; i < 2051; i++){
    dataWetlandToOtherland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].wetlandToOtherland });
  };
  const dataSettlementToOtherland = [];
  for (let i = year; i < 2051; i++){
    dataSettlementToOtherland.push({ x: i, y0: 0, y: landUseChangeResponse.landUseChange[i].settlementToOtherland });
  };
  // #endregion

  localStorage.landUse = JSON.stringify(landUseChangeResponse);

  return (
    <div>
      <Divider textAlign="left" flexItem>
        <b>Land-use Change Bar Chart</b>
      </Divider>
      <div className="luc_container">
        <div className="landusechange_bar">
          <FlexibleXYPlot
                    width={1200}
                    height={500}
                    xType="ordinal"
                    yDomain={[-1500, 1500]}
                    stackBy="y"
                  >
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <VerticalBarSeries className="LucStackedBarchart" />
                    <XAxis title="Year"
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
                      data={dataCroplandToForestland}
                    />
                    {/* 2 */}
                    <BarSeries
                      color="#76918e"
                      data={dataGrasslandToForestland}
                      />
                    {/* 3 */}
                    <BarSeries
                      color="#ce143d"
                      data={dataWetlandToForestland}
                    />
                    {/* 4 */}
                    <BarSeries
                      color="#d6e7d9"
                      data={dataSettlementToForestland}
                      />
                    {/* 5 */}
                    <BarSeries
                      color="#002117"
                      data={dataOtherlandToForestland}
                     
                    />
                    {/* 6 */}
                    <BarSeries
                      color="#ef7d00"
                      data={dataForestlandToCropland}
                     
                    />
                    {/* 7 */}
                    <BarSeries
                      color="#6c3b00"
                      data={dataGrasslandToCropland}
                     
                    />
                    {/* 8 */}
                    <BarSeries
                      color="#00aed5"
                      data={dataWetlandToCropland}
                    
                    />
                    {/* 9 */}
                    <BarSeries
                      color="#8C0303"
                      data={dataSettlementToCropland}
                     
                    />
                    {/* 10 */}
                    <BarSeries
                      color="#A6036D"
                      data={dataOtherlandToCropland}
                     
                    />
                    {/* 11 */}
                    <BarSeries
                      color="#400D01"
                      data={dataForestlandToGrassland}
                     
                    />
                    {/* 12 */}
                    <BarSeries
                      color="#C4D4F2"
                      data={dataCroplandToGrassland}
                    
                    />
                    {/* 13 */}
                    <BarSeries
                      color="#D90404"
                      data={dataWetlandToGrassland}
                     
                    />
                    {/* 14 */}
                    <BarSeries
                      color="#80D941"
                      data={dataSettlementToGrassland}
                    />
                    {/* 15 */}
                    <BarSeries
                      color="#595959"
                      data={dataOtherlandToGrassland}

                    />
                    {/* 16 */}
                    <BarSeries
                      color="#F2CE1B"
                      data={dataForestlandToWetland}
                      />
                    {/* 17 */}
                    <BarSeries
                      color="#d51317"
                      data={dataCroplandToWetland}
                      />
                    {/* 18 */}
                    <BarSeries
                      color="#8f2e57"
                      data={dataGrasslandToWetland}
                      />
                    {/* 19 */}
                    <BarSeries
                      color="#da4f89"
                      data={dataLandToPeatExtraction}
                      />
                    {/* 20 */}
                    <BarSeries
                      color="#6e438c"
                      data={dataPeatlandRestoration}
                      />
                    {/* 21 */}
                    <BarSeries
                      color="#164194"
                      data={dataForestlandToSettlement}
                      />
                    {/* 22 */}
                    <BarSeries
                      color="#2b7abf"
                      data={dataCroplandToSettlement}
                      />
                    {/* 23 */}
                    <BarSeries
                      color="#0042d9"
                      data={dataGrasslandToSettlement}
                      />
                    {/* 24 */}
                    <BarSeries
                      color="#6caac7"
                      data={dataWetlandToSettlement}
                      />
                    {/* 25 */}
                    <BarSeries
                      color="#4a5b58"
                      data={dataOtherlandToSettlement}
                      />
                    {/* 26 */}
                    <BarSeries
                      color="#f7cebd"
                      data={dataForestlandToOtherland}
                      />
                    {/* 27 */}
                    <BarSeries
                      color="#af1411"
                      data={dataCroplandToOtherland}
                      />
                    {/* 28 */}
                    <BarSeries
                      color="#c9b01e"
                      data={dataGrasslandToOtherland}
                      />
                    {/* 29 */}
                    <BarSeries
                      color="#371740"
                      data={dataWetlandToOtherland}
                      />
                    {/* 30 */}
                    <BarSeries
                      color="#620d00"
                      data={dataSettlementToOtherland}
                      />
          </FlexibleXYPlot>
        </div>
      </div>
      <div className="luc_legendline">
          <LineLegendLandUse />
      </div>
      
    </div>
  );
};

LUCBarChart.propTypes = {
  landUseChangeResponse: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired
};
