import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Divider from "@mui/material/Divider";
import { Alert, Box, Container, Typography } from "@mui/material";
import { Button } from "./Button";
import '../css/generate.css';
import {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
  LineSeries
} from "react-vis";
import { LegendConsumptionResults } from "./LineLegendConsumption";
import { LegendTerritorialApproach } from "./LineLegend";

// https://github.com/gregnb/react-to-print/issues/184

const BarSeries = VerticalBarSeries;

export const GenerateReport = () => {
  const country = localStorage.getItem("country");
  const year = parseInt(localStorage.getItem("year"));
  const population = parseInt(localStorage.getItem("population"));
  const p1 = JSON.parse(localStorage.getItem("p1"));
  const bLTotalEmissions = JSON.parse(localStorage.getItem("bLTotalEmissions"));
  const p1TotalEmissions = JSON.parse(localStorage.getItem("p1TotalEmissions"));
  const p1TotalAreaEmissions = JSON.parse(localStorage.getItem("p1TotalAreaEmissions"));
  const p1SummedEmissions= JSON.parse(localStorage.getItem("p1SummedEmissions"));
  const newPopulation = JSON.parse(localStorage.getItem("newPopulation"));
  const landUseChangeResponse = JSON.parse(localStorage.getItem("landUseChangeResponse"));
  const landUseChangeResponseOtherData = JSON.parse(localStorage.getItem("landUseChangeResponseOtherData"));
  const projections = JSON.parse(localStorage.getItem("projections"));
  const buildingsBaselineResponse = JSON.parse(localStorage.getItem("buildingsBaselineResponse"));
  const policyQuantificationResponse = JSON.parse(localStorage.getItem("policyQuantificationResponse"));
  const absoluteEmissions = JSON.parse(localStorage.getItem("absoluteEmissions"))

 
  const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });
  // const zip = (array1, array2) => array1.map((x, i) => [x, array2[i]]); 

  // #region data distribution

  // total values
  const buildingEmissionsTotal = [];
  const buildingBaseline = [];
  const absoluteEmissionsTotal = [];
  const netPositivesLuc = [];
  const netNegativesLuc = [];

  // per capita values
  const netSinkPerCapita = [];
  const netLucEmissionsPerCapita = [];
  const netBuildingsPerCapita= [];
  const netTransportPerCapita = [];
  const netBaselinePerCapita = [];

  // consumption
  const policyHousingEnergy = [];
  const policyHousingOther = [];
  const policyTransportFuels = [];
  const policyTransportOther = [];
  const policyAirTravel = [];
  const policyFood = [];
  const policyTangiblegoods = [];
  const policyServices = [];
  const policyTotalEmissions = [];
  const policyTotalAreaEmissions = [];
  const policySummedEmissions = [];
  const dataBlTotalEmissions = [];

  // transport
  const busProjection = [];
  const carProjection = [];
  const metroProjection = [];
  const railTransportProjection = [];
  const roadTransportProjection = [];
  const trainProjection = [];
  const tramProjection = [];
  const waterwaysTransportProjection = [];

    if (policyQuantificationResponse && 
        absoluteEmissions &&
        landUseChangeResponseOtherData.landUseTotalEmissions &&
        landUseChangeResponse &&
        Object.keys(landUseChangeResponseOtherData.landUseTotalEmissions).length !== 0 &&
        Object.keys(policyQuantificationResponse).length !== 0 &&
        Object.keys(absoluteEmissions).length !== 0 &&
        Object.keys(landUseChangeResponse).length !== 0 ){
      for (let i = year; i < 2051; i++) {
        buildingEmissionsTotal.push({x: i, y: policyQuantificationResponse.data.graph[i].total})
        buildingBaseline.push({x: i, y: policyQuantificationResponse.data.graph[i].baseline})
        absoluteEmissionsTotal.push({x:i, y: absoluteEmissions.total[i]})
        netPositivesLuc.push({x: i, y: landUseChangeResponseOtherData.landUseTotalEmissions.positive[i] })
        netNegativesLuc.push({x:i, y: landUseChangeResponseOtherData.landUseTotalEmissions.negative[i] })
      }
    }
    

  if(
    buildingsBaselineResponse &&
    newPopulation &&
    landUseChangeResponse &&
    p1 &&
    landUseChangeResponseOtherData.landUseTotalEmissions &&
    projections &&
    absoluteEmissions &&
    policyQuantificationResponse &&
    Object.keys(newPopulation).length !== 0 &&
    Object.keys(policyQuantificationResponse).length !== 0 &&
    Object.keys(landUseChangeResponse).length !== 0 &&
    Object.keys(landUseChangeResponseOtherData.landUseTotalEmissions) !== 0 &&
    Object.keys(p1).length !== 0 &&
    Object.keys(bLTotalEmissions).length !== 0 &&
    Object.keys(p1TotalAreaEmissions).length !== 0 &&
    Object.keys(buildingsBaselineResponse).length !== 0 &&
    Object.keys(absoluteEmissions).length !== 0 &&
    Object.keys(projections).length !== 0){
  for (let i = year; i < 2051; i++) {

    netSinkPerCapita.push({
      x: i,
      y0: 0,
      y: (landUseChangeResponseOtherData.landUseTotalEmissions.negative[i]/newPopulation[i]),
    });
    netLucEmissionsPerCapita.push({
      x: i,
      y0: 0,
      y: (landUseChangeResponseOtherData.landUseTotalEmissions.positive[i]/newPopulation[i]),
    });
    netBuildingsPerCapita.push({
      x: i,
      y0: 0,
      y: (policyQuantificationResponse.data.graph[i].total/newPopulation[i]),
    });
     netBaselinePerCapita .push({
      x: i,
      y0: 0,
      y: (policyQuantificationResponse.data.graph[i].baseline/newPopulation[i]),
    });
    netTransportPerCapita.push({
      x: i,
      y0: 0,
      y: (absoluteEmissions.total[i]/newPopulation[i]),
    });
  }

  for (let i = year; i < 2051; i++) {
    dataBlTotalEmissions.push({ x: i, y: bLTotalEmissions[i] });
    policyHousingEnergy.push({ x: i, y: p1.housingEnergy[i] });
    policyHousingOther.push({ x: i, y: p1.housingOther[i] });
    policyTransportFuels.push({ x: i, y: p1.transportFuels[i] });
    policyTransportOther.push({ x: i, y: p1.transportOther[i] });
    policyAirTravel.push({ x: i, y: p1.airTravel[i] });
    policyFood.push({ x: i, y: p1.food[i] });
    policyTangiblegoods.push({ x: i, y: p1.tangibleGoods[i] });
    policyServices.push({ x: i, y: p1.services[i] });
    policyTotalEmissions.push({ x: i, y: p1TotalEmissions[i] });
    policyTotalAreaEmissions.push({ x: i, y: p1TotalAreaEmissions[i] });
    policySummedEmissions.push({ x: i, y: p1SummedEmissions[i] });

  }

  for (let i = year; i < 2051; i++) { 
    busProjection.push({ x: i, y: projections.bus[i] });  
    carProjection.push({ x: i, y: projections.car[i] });
    metroProjection.push({ x: i, y: projections.metro[i] });
    railTransportProjection.push({ x: i, y: projections.rail_transport[i] });
    roadTransportProjection.push({ x: i, y: projections.road_transport[i] });
    trainProjection.push({ x: i, y: projections.train[i] });
    tramProjection.push({ x: i, y: projections.tram[i] });
    waterwaysTransportProjection.push({ x: i, y: projections.waterways_transport[i] });
    // totalTransportProjection.push({ x: i, y: projections.total[i] });
  }

  // #endregion
  
  }

  return (
    <Container maxWidth="xl">
    <article className="generate-report">
      <div className="heading">
       <h2>Generate summary report</h2>
      </div>
      {country !== "" && year > 0 && population > 0 && <></>}
      
      <br />
      <ReactToPrint
        trigger={() => (
          <div className="backButtonNew">
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

      <div className="padding" ref={componentRef}>
        <div className="luc_alert_container">

          <Divider sx={{margin: 3 }} textAlign="left">
            <Typography variant="h6">
              <b>Results</b>
            </Typography>
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
          newPopulation &&
          landUseChangeResponse &&
          landUseChangeResponseOtherData.landUseTotalEmissions &&
          p1 &&
          projections &&
          Object.keys(newPopulation).length !== 0 &&
          Object.keys(landUseChangeResponse).length !== 0 &&
          Object.keys(landUseChangeResponseOtherData.landUseTotalEmissions).length !== 0 &&
          Object.keys(p1).length !== 0 &&
          Object.keys(bLTotalEmissions).length !== 0 &&
          Object.keys(p1TotalAreaEmissions).length !== 0 &&
          Object.keys(buildingsBaselineResponse).length !== 0 &&
          Object.keys(projections).length !== 0 ? "" : <Typography m={3} sx={{ textAlign: "center"}}><b>Unable to generate report, <br/> please fill in data in all modules</b></Typography>}

        { country !== "" &&
          year > 0 &&
          population > 0 &&
          buildingsBaselineResponse &&
          newPopulation &&
          landUseChangeResponse &&
          landUseChangeResponseOtherData.landUseTotalEmissions &&
          p1 &&
          projections &&
          Object.keys(newPopulation).length !== 0 &&
          Object.keys(landUseChangeResponse).length !== 0 &&
          Object.keys(landUseChangeResponseOtherData.landUseTotalEmissions).length !== 0 &&
          Object.keys(p1).length !== 0 &&
          Object.keys(bLTotalEmissions).length !== 0 &&
          Object.keys(p1TotalAreaEmissions).length !== 0 &&
          Object.keys(buildingsBaselineResponse).length !== 0 &&
          Object.keys(projections).length !== 0 &&
           (
            <>
            <Box m={6}>
              <Alert severity="info">
                <Typography m={0.5} variant="body1">
                  The territorial quantification results present the greenhouse gas emissions from transport, land-use change
                  and energy use in buildings within the assessment area from the baseline year to 2050.
                </Typography>

                <Typography m={0.5} variant="body1">
                  The future trajectory
                  includes the impact of other existing measures only if they are inserted through the local dataset. The dashed
                  line shows the baseline projection and the bar chart displays the impacts of the plan/policy that is assessed
                  with the GGIA tool.
                </Typography>

                <Typography m={0.5} variant="body1">
                  The results are announced below in two different units. The first graph presents the absolute greenhouse
                  gas emissions within the area. The second graph presents the results as tonnes of CO2/per capita.
                </Typography>

                <Typography m={0.5} variant="body1">
                  Please notice that although it is a common practise to announce the territorial greenhouse gas emissions
                  per capita, they are not caused by the residents only.
                </Typography>
              </Alert>
            </Box>
            <div className="luc_alert_container">
              <Divider textAlign="left" sx={{margin: 3 }}>
                <Typography variant="h6">
                  <b>Absolute CO2e emissions | Territorial approach</b>
                </Typography>
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
                  {Object.keys(absoluteEmissions.total).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {Math.round(absoluteEmissions.total[key])}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Buildings</td>
                  {Object.keys(policyQuantificationResponse.data.graph).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      { Math.round(policyQuantificationResponse.data.graph[key].total)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">LUC removal</td>
                  {Object.keys(landUseChangeResponseOtherData.landUseTotalEmissions.negative).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {Math.round(landUseChangeResponseOtherData.landUseTotalEmissions.negative[key])}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">LUC emissions</td>
                  {Object.keys(landUseChangeResponseOtherData.landUseTotalEmissions.positive).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {Math.round(landUseChangeResponseOtherData.landUseTotalEmissions.positive[key])}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">LUC total</td>
                  {Object.keys(landUseChangeResponseOtherData.landUseTotalEmissions.total).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {Math.round(landUseChangeResponseOtherData.landUseTotalEmissions.total[key])}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            {/* graph final for generate report from excel */}

            <div style={{margin:"30px"}}>
              <div>
                <h5>
                  <Typography m={2}>
                    <b>Graph: Absolute CO2e emissions | Territorial approach</b>
                  </Typography>
                </h5>
              </div>
              <Box m={3}>
              <Alert severity="info">
                <Typography m={0.5} variant="body1">
                  The dashed line shows the baseline projection and the coloured bar chart displays the impacts of the
                  plan/policy that is assessed with the GGIA tool. Higher deviation means higher impact on the greenhouse
                  gas emissions reductions within the area in assessment.
                </Typography>

                <Typography m={0.5} variant="body1">
                  Territorial results reflect the impact of a plan/policy within the geographic boundary of the specific area. The
                  changes in land use and in the volume of building stock are directly defined in spatial planning.
                </Typography>

                <Typography m={0.5} variant="body1">
                  In transport,
                  the impacts of planning is more complex, as the passenger transport by non-residents and the freight
                  transport may be less affected by local policies.
                </Typography>
              </Alert>
            </Box>
              <FlexibleXYPlot
                className="policy-quantification-chart"
                stackBy="y"
                xType="ordinal"
                margin={{ left: 60 }}
                width={1150}
                height={500}
              >
                <VerticalGridLines />
                <HorizontalGridLines />
                <VerticalBarSeries />
                <XAxis title="Year"
                 />
                <YAxis title="tCO2/a" />
                <BarSeries
                  color="#3d58a3"
                  data={buildingEmissionsTotal}
                  opacity={0.8}
                  stack
                />
                <BarSeries
                  color="#2e8b57"
                  data={absoluteEmissionsTotal}
                  opacity={0.8}
                  stack
                />
                <BarSeries
                  color="#F6BE00"
                  data={netPositivesLuc}
                  opacity={0.8}
                />

                <BarSeries
                  color= "#ACD5F3"
                  data={netNegativesLuc}
                  opacity={0.8}
                />

                <LineSeries
                  color="#cc7000"
                  data={buildingBaseline}
                  strokeStyle="dashed"
                  strokeWidth="3"
                />
              </FlexibleXYPlot>
                <div>
                  <LegendTerritorialApproach />
                </div>
            
              </div>
           

            <div className="luc_alert_container">
              <Divider textAlign="left" sx={{margin: 3 }}>
                <Typography variant="h6">
                <b>CO2e Emissions per capita | Territorial Approach</b>
                </Typography>
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
                  {Object.keys(newPopulation).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {newPopulation[key]}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Transport</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {(Math.round(buildingsBaselineResponse.baseline[key].apartment)/newPopulation[key]).toFixed(2)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Land-use change</td>
                  {Object.keys(landUseChangeResponseOtherData.landUseTotalEmissions.total).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {(Math.round(landUseChangeResponseOtherData.landUseTotalEmissions.total[key])/newPopulation[key]).toFixed(2)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Buildings</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {(Math.round(buildingsBaselineResponse.baseline[key].apartment)/newPopulation[key]).toFixed(2)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Net sinks</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {(Math.round(landUseChangeResponseOtherData.landUseTotalEmissions.negative[key])/newPopulation[key]).toFixed(2)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Net balance</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {(Math.round(buildingsBaselineResponse.baseline[key].apartment)/newPopulation[key]).toFixed(2)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            <h5>
              <Typography m={2} ml={5}>
                <b>Graph: CO2e Emissions per capita | Territorial Approach</b>
              </Typography>
            </h5>

            <div style={{margin:"30px"}}>
              <FlexibleXYPlot
                margin={{ left: 60 }}
                width={1150}
                height={500}
                stackBy="y"
                xType="ordinal"
              >
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
              <YAxis title="tC02/ per capita" />
              {/* 1 */}
              <BarSeries
                color="#2e8b57"
                opacity={0.8}
                data={netTransportPerCapita}
              /> 
              {/* 2 */}
              <BarSeries
                color="#F6BE00"
                opacity={0.8}
                data={ netLucEmissionsPerCapita}
              />
              {/* 3 */}
              <BarSeries
                color="#3d58a3" 
                opacity={0.8} 
                data={netBuildingsPerCapita} 
              /> 
              {/* 4 */}
              <BarSeries
                color="#ACD5F3"
                opacity={0.8}
                data={netSinkPerCapita}
              />
              <LineSeries
                className="fourth-series"
                color="#cc7000"
                data={netBaselinePerCapita}
                strokeStyle="dashed"
                strokeWidth="3"
              />
              </FlexibleXYPlot>

                <div>
                  <LegendTerritorialApproach />
                </div>

            </div>

            <div className="luc_alert_container">
              <Divider textAlign="left" sx={{margin: 3 }}>
                <Typography variant="h6">
                  <b>Consumption baseline | Greenhouse gas emissions per capita</b>
                </Typography>
              </Divider>
            <Box m={6}>
              <Alert severity="info">
                <Typography m={0.5} variant="body1">
                  The consumption-based quantification estimates the global greenhouse gas emissions caused by the all
                  consumption of the residents of the assessment area from the baseline year until 2050.
                </Typography>
                <Typography m={0.5} variant="body1">
                  The dashed line
                  shows the baseline projection and the bar chart displays the impacts of the plan/policy that is assessed with
                  the GGIA tool. The results are announced as tonnes of CO2e/capita.
                </Typography>
                <Typography m={0.5} variant="body1">
                  Consumption-based results are about the residents of the area, reflecting the life styles and the consumption
                  of the households, providing a holistic picture on the global greenhouse gas emissions.
                </Typography>
              </Alert>
            </Box>
              <div className="luc_alert_container">
          <table className="table-results">
            <thead className="tableHeader">
              <tr>
                <th className="tableTotalEmissions">Year</th>
                {Object.keys(bLTotalEmissions).map((key, i) => (
                  <th key={i} className="tableTotalEmissions">
                    <b>{key}</b>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tableTotalEmissions">Total emissions</td>
                {Object.keys(bLTotalEmissions).map((key, i) => (
                  <td key={i} className="tableTotalEmissions">
                    {Math.round(bLTotalEmissions[key])}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
            <h5>
              <Typography m={2} ml={5}>
                <b>Graph: Consumption baseline | Greenhouse gas emissions per capita</b>
              </Typography>
            </h5>
            </div>
            <div style={{margin:"30px"}}>
              <FlexibleXYPlot
                margin={{ left: 60 }}
                width={1150}
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
                  data={policyHousingEnergy}
                  stack
                />
                <BarSeries
                  color="#ef7d00"
                  data={policyHousingOther}
                  stack
                />
                <BarSeries
                  color="#95c11f"
                  data={policyTransportFuels}
                  stack
                />
                <BarSeries
                  color="#ce143d"
                  data={policyTransportOther}
                  stack
                />
                <BarSeries
                  color="#845f9e"
                  data={policyAirTravel}
                  stack
                />
                <BarSeries color="#996e35" data={policyFood} stack />
                <BarSeries
                  color="#e1719a"
                  data={policyTangiblegoods}
                  stack
                />
                <BarSeries color="#76918e" data={policyServices} stack />
                <LineSeries
                  className="fourth-series"
                  color="#000000"
                  strokeWidth="1"
                  strokeStyle="dashed"
                  data={dataBlTotalEmissions}
                />
              </FlexibleXYPlot>
              <div>
                <LegendConsumptionResults/>
              </div>  
            </div>      
            </>        
          )}
      </div>
    </article>
    </Container>
  );
};
