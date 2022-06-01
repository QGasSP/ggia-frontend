import React, { useRef } from "react";
import ReactToPrint, {
  PrintContextConsumer,
  useReactToPrint,
} from "react-to-print";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { U1planner } from "./U1planner";
import { U2planner } from "./U2planner";
import { LUCBarChart } from "./LUCBarChart";
import { BuildingBaselineCharts } from "./BuildingBaselineCharts";
import { BuildingsPoliciesCharts } from "./BuildingsPoliciesCharts";
import { ConsumptionBaselineResults } from "./ConsumptionBaselineResults";
import { ConsumptionSummary } from "./ConsumptionSummary"; 
import { Button } from "./Button";
import '../css/generate.css';
import {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
} from "react-vis";
// https://github.com/gregnb/react-to-print/issues/184
const BarSeries = VerticalBarSeries;
export const GenerateReport = () => {
  const u1PlannerToPrint = useRef(null);
  const u2PlannerToPrint = useRef(null);
  const lucResultsToPrint = useRef(null);
  const consumptionBaselineToPrint = useRef(null);
  const consumptionResultsToPrint = useRef(null);
  const buildingsBaselineToPrint = useRef(null);
  const buildingsPolicyToPrint = useRef(null);

  const country = localStorage.getItem("country");
  const year = parseInt(localStorage.getItem("year"));
  const transportBaseline = JSON.parse(localStorage.getItem("baseline"));
  const population = parseInt(localStorage.getItem("population"));
  const p1 = JSON.parse(localStorage.getItem("p1"));
  const bL = JSON.parse(localStorage.getItem("bL"));
  const bl = JSON.parse(localStorage.getItem("bl"));
  const blTotalEmmissions = JSON.parse(
    localStorage.getItem("blTotalEmmissions")
  );
  const bLTotalAreaEmissions = JSON.parse(
    localStorage.getItem("bLTotalAreaEmissions")
  );
  const p1TotalEmissions = JSON.parse(localStorage.getItem("p1TotalEmissions"));
  const p1TotalAreaEmissions = JSON.parse(
    localStorage.getItem("p1TotalAreaEmissions")
  );
  const blSummedEmissions = JSON.parse(localStorage.getItem("blSummedEmissions"));
  const p1SummedEmissions= JSON.parse(localStorage.getItem("p1SummedEmissions"));

 
  const settlementDistribution = JSON.parse(
    localStorage.getItem("settlementDistribution")
  );
  const landUseChangeResponse = JSON.parse(
    localStorage.getItem("landUseChangeResponse")
  );
  const emission = JSON.parse(localStorage.getItem("emission"));
  const projections = JSON.parse(localStorage.getItem("projections"));
  const newDevelopment = JSON.parse(localStorage.getItem("newDevelopment"));

  const buildingsBaselineResponse = JSON.parse(localStorage.getItem("buildingsBaselineResponse"));
  const newConstructionResponse = JSON.parse(localStorage.getItem("newConstructionResponse"));
  const policyQuantificationResponse = JSON.parse(localStorage.getItem("policyQuantificationResponse"));

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  
  // #region data distribution for luc
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
      y: landUseChangeResponse.landUseChange[i].croplandToForestland,
    });
    dataGrasslandToForestland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].grasslandToForestland,
    });
    dataWetlandToForestland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].wetlandToForestland,
    });
    dataSettlementToForestland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].settlementToForestland,
    });
    dataOtherlandToForestland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].otherlandToForestland,
    });
    dataForestlandToCropland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].forestlandToCropland,
    });
    dataGrasslandToCropland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].grasslandToCropland,
    });
    dataWetlandToCropland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].wetlandToCropland,
    });
    dataSettlementToCropland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].settlementToCropland,
    });
    dataOtherlandToCropland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].otherlandToCropland,
    });
    dataForestlandToGrassland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].forestlandToGrassland,
    });
    dataCroplandToGrassland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].croplandToGrassland,
    });
    dataWetlandToGrassland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].wetlandToGrassland,
    });
    dataSettlementToGrassland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].settlementToGrassland,
    });
    dataOtherlandToGrassland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].otherlandToGrassland,
    });
    dataForestlandToWetland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].forestlandToWetland,
    });
    dataCroplandToWetland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].croplandToWetland,
    });
    dataGrasslandToWetland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].grasslandToWetland,
    });
    dataLandToPeatExtraction.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].landToPeatExtraction,
    });
    dataPeatlandRestoration.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].peatlandRestoration,
    });
    dataForestlandToSettlement.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].forestlandToSettlement,
    });
    dataCroplandToSettlement.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].croplandToSettlement,
    });
    dataGrasslandToSettlement.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].wetlandToSettlement,
    });
    dataWetlandToSettlement.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].wetlandToSettlement,
    });
    dataOtherlandToSettlement.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].otherlandToSettlement,
    });
    dataForestlandToOtherland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].forestlandToOtherland,
    });
    dataCroplandToOtherland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].croplandToOtherland,
    });
    dataGrasslandToOtherland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].grasslandToOtherland,
    });
    dataWetlandToOtherland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].wetlandToOtherland,
    });
    dataSettlementToOtherland.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].settlementToOtherland,
    });
  }
  // #endregion

  // #region data distribution for buildings baseline
  const apartmentsData = [];
  const terracedData = [];
  const semidetachedData = [];
  const detachedData = [];
  const retailData = [];
  const healthData = [];
  const hospitalityData = [];
  const officesData = [];
  const industrialData = [];
  const warehousesData = [];

  for (let i = year; i < 2051; i++) {
    apartmentsData.push({ x: i, y0: 0, y: buildingsBaselineResponse.baseline[i].apartment });
    terracedData.push({ x: i, y0: 0, y: buildingsBaselineResponse.baseline[i].terraced });
    semidetachedData.push({ x: i, y0: 0, y: buildingsBaselineResponse.baseline[i].semiDetached });
    detachedData.push({ x: i, y0: 0, y: buildingsBaselineResponse.baseline[i].detached });
    retailData.push({ x: i, y: buildingsBaselineResponse.baseline[i].retail });
    healthData.push({ x: i, y: buildingsBaselineResponse.baseline[i].health });
    hospitalityData.push({ x: i, y: buildingsBaselineResponse.baseline[i].hospitality });
    officesData.push({ x: i, y: buildingsBaselineResponse.baseline[i].offices });
    industrialData.push({ x: i, y: buildingsBaselineResponse.baseline[i].industrial });
    warehousesData.push({ x: i, y: buildingsBaselineResponse.baseline[i].warehouses });
  }
  // #endregion
  
  // #region data distribution for transport
  


  return (
    <article className="generate-report">
      <div className="headerSettlement">
        <Divider textAlign="left" flexItem>
          {" "}
          <Chip label="Generate summary report" />
        </Divider>
      </div>
      {country !== "" && year > 0 && population > 0 && <></>}
      <br />
      <ReactToPrint
        trigger={() => (
          <div className="luc_alert_container">
            <Button
              size="small"
              value="print"
              label="Print summary report"
              primary
            />
          </div>
        )}
        content={() => componentRef.current}
      />

      <div ref={componentRef}>
        <div className="luc_alert_container">
          <Divider textAlign="left" flexItem>
            <b>Results</b>
          </Divider>
          {country !== "" && year > 0 && population > 0 && (
            <>
              <div>
                <div>
                  <b>Country: </b>
                  {country}
                </div>
                <br />
                <div>
                  <b>Year: </b>
                  {year}
                </div>
                <br />
                <div>
                  <b>Population size: </b>
                  {population}
                </div>
              </div>
            </>
          )}
        </div>

        {country !== "" &&
          year > 0 &&
          population > 0 &&
          buildingsBaselineResponse &&
          Object.keys(buildingsBaselineResponse).length !== 0 && (
            <div>
              <>
            <div className="luc_alert_container">
              <Divider textAlign="left" flexItem>
                <Chip label="ABSOLUTE CO2e EMISSIONS | TERRITORIAL APPROACH" />
              </Divider>
            </div>
            <table className="table-results">
              <thead className="tableHeader">
                <tr>
                  <th className="tableTotalEmissions">Year</th>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <th key={i} className="tableTotalEmissions">
                      <b>{key}</b>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tableTotalEmissions">Transport</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {buildingsBaselineResponse.baseline[key].apartment}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Land-use change</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {buildingsBaselineResponse.baseline[key].apartment}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Buildings</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {buildingsBaselineResponse.baseline[key].apartment}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Net sinks</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {buildingsBaselineResponse.baseline[key].apartment}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Net balance</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {buildingsBaselineResponse.baseline[key].apartment}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            <div className="luc_alert_container">
              <FlexibleXYPlot width={1230} height={700} xType="ordinal" stackBy="y">
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
                cluster='1'
                color="#ffdf43"
                opacity={0.5}
                data={dataCroplandToForestland}
              />
              {/* 1 */}
              <BarSeries
                cluster='2'
                color="#ffdf43"
                opacity={0.5}
                data={apartmentsData}
              />
              {/* 2 */}
              <BarSeries
                cluster='1'
                color="#76918e"
                opacity={0.5}
                data={dataGrasslandToForestland}
              />
              {/* 2 */}
              <BarSeries  
                cluster='2' 
                color="#76918e" 
                opacity={0.6} 
                data={terracedData} 
              />
              {/* 3 */}
              <BarSeries
                cluster='1'
                color="#ce143d"
                opacity={0.5}
                data={dataWetlandToForestland}
              />
              {/* 3 */}
              <BarSeries cluster='2' color="#ce143d" opacity={0.6} data={semidetachedData} />
              {/* 4 */}
              <BarSeries
                cluster='1'
                color="#d6e7d9"
                opacity={0.5}
                data={dataSettlementToForestland}
              />
              {/* 4 */}
              <BarSeries cluster='2' color="#d6e7d9" opacity={0.6} data={detachedData} />
              {/* 5 */}
              <BarSeries
                cluster='1'
                color="#002117"
                opacity={0.5}
                data={dataOtherlandToForestland}
              />
              {/* 5 */}
              <BarSeries cluster='2' color="#002117" opacity={0.6} data={retailData} />
              {/* 6 */}
              <BarSeries
                cluster='1'
                color="#ef7d00"
                opacity={0.5}
                data={dataForestlandToCropland}
              />
              {/* 6 */}
              <BarSeries cluster='2' color="#ef7d00" opacity={0.6} data={healthData} />
              {/* 7 */}
              <BarSeries
                cluster='1'
                color="#6c3b00"
                opacity={0.5}
                data={dataGrasslandToCropland}
              />
              {/* 7 */}
              <BarSeries cluster='2' color="#6c3b00" opacity={0.6} data={hospitalityData} />
              {/* 8 */}
              <BarSeries
                cluster='1'
                color="#00aed5"
                opacity={0.5}
                data={dataWetlandToCropland}
              />
               {/* 8 */}
              <BarSeries  cluster='2' color="#00aed5" opacity={0.6} data={officesData} />
              {/* 9 */}
              <BarSeries
                cluster='1'
                color="#8C0303"
                opacity={0.5}
                data={dataSettlementToCropland}
              />
              {/* 9 */}
              <BarSeries cluster='2' color="#8C0303" opacity={0.6} data={industrialData} />
              {/* 10 */}
              <BarSeries
                cluster='1'
                color="#A6036D"
                opacity={0.5}
                data={dataOtherlandToCropland}
              />
              {/* 10 */}
              <BarSeries cluster='2' color="#A6036D" opacity={0.6} data={warehousesData} />
              {/* 11 */}
              <BarSeries
                cluster='1'
                color="#400D01"
                opacity={0.5}
                data={dataForestlandToGrassland}
              />
              {/* 12 */}
              <BarSeries
                cluster='1'
                color="#C4D4F2"
                opacity={0.5}
                data={dataCroplandToGrassland}
              />
              {/* 13 */}
              <BarSeries
                cluster='1'
                color="#D90404"
                opacity={0.5}
                data={dataWetlandToGrassland}
              />
              {/* 14 */}
              <BarSeries
                cluster='1'
                color="#80D941"
                opacity={0.5}
                data={dataSettlementToGrassland}
              />
              {/* 15 */}
              <BarSeries
                cluster='1'
                color="#595959"
                opacity={0.5}
                data={dataOtherlandToGrassland}
              />
              {/* 16 */}
              <BarSeries
                cluster='1'
                color="#F2CE1B"
                opacity={0.5}
                data={dataForestlandToWetland}
              />
              {/* 17 */}
              <BarSeries
                cluster='1'
                color="#d51317"
                opacity={0.5}
                data={dataCroplandToWetland}
              />
              {/* 18 */}
              <BarSeries
                cluster='1'
                color="#8f2e57"
                opacity={0.5}
                data={dataGrasslandToWetland}
              />
              {/* 19 */}
              <BarSeries
                cluster='1'
                color="#da4f89"
                opacity={0.5}
                data={dataLandToPeatExtraction}
              />
              {/* 20 */}
              <BarSeries
                cluster='1'
                color="#6e438c"
                opacity={0.5}
                data={dataPeatlandRestoration}
              />
              {/* 21 */}
              <BarSeries
                cluster='1'
                color="#164194"
                opacity={0.5}
                data={dataForestlandToSettlement}
              />
              {/* 22 */}
              <BarSeries
                cluster='1'
                color="#2b7abf"
                opacity={0.5}
                data={dataCroplandToSettlement}
              />
              {/* 23 */}
              <BarSeries
                cluster='1'
                color="#0042d9"
                opacity={0.5}
                data={dataGrasslandToSettlement}
              />
              {/* 24 */}
              <BarSeries
                cluster='1'
                color="#6caac7"
                opacity={0.5}
                data={dataWetlandToSettlement}
              />
              {/* 25 */}
              <BarSeries
                cluster='1'
                color="#4a5b58"
                opacity={0.5}
                data={dataOtherlandToSettlement}
              />
              {/* 26 */}
              <BarSeries
                cluster='1'
                color="#f7cebd"
                opacity={0.5}
                data={dataForestlandToOtherland}
              />
              {/* 27 */}
              <BarSeries
                cluster='1'
                color="#af1411"
                opacity={0.5}
                data={dataCroplandToOtherland}
              />
              {/* 28 */}
              <BarSeries
                cluster='1'
                color="#c9b01e"
                opacity={0.5}
                data={dataGrasslandToOtherland}
              />
              {/* 29 */}
              <BarSeries
                cluster='1'
                color="#371740"
                opacity={0.5}
                data={dataWetlandToOtherland}
              />
              {/* 30 */}
              <BarSeries
                cluster='1'
                color="#620d00"
                opacity={0.5}
                data={dataSettlementToOtherland}
              />
              </FlexibleXYPlot>
            </div>

            <div className="luc_alert_container">
              <Divider textAlign="left" flexItem>
                <Chip label="CO2e EMISSIONS PER CAPITA | TERRITORIAL APPROACH" />
              </Divider>
            </div>
            <table className="table-results">
              <thead className="tableHeader">
                <tr>
                  <th className="tableTotalEmissions">Year</th>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <th key={i} className="tableTotalEmissions">
                      <b>{key}</b>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td className="tableTotalEmissions">Population</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {buildingsBaselineResponse.baseline[key].apartment}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Transport</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {buildingsBaselineResponse.baseline[key].apartment}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Land-use change</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {buildingsBaselineResponse.baseline[key].apartment}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Buildings</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {buildingsBaselineResponse.baseline[key].apartment}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Net sinks</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {buildingsBaselineResponse.baseline[key].apartment}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Net balance</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {buildingsBaselineResponse.baseline[key].apartment}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
              </>
            </div>
          )}
      </div>
    </article>
  );
};
