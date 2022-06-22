import React, { useRef } from "react";
import ReactToPrint, {
  PrintContextConsumer,
  useReactToPrint,
} from "react-to-print";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { Container } from "@mui/material";
import { Button } from "./Button";
import '../css/generate.css';
import {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
  LineSeries,
  DiscreteColorLegend
} from "react-vis";
import { ConsumptionBaselineResults } from "./ConsumptionBaselineResults";
// https://github.com/gregnb/react-to-print/issues/184
const BarSeries = VerticalBarSeries;

export const GenerateReport = () => {
  const country = localStorage.getItem("country");
  const year = parseInt(localStorage.getItem("year"));
  const transportBaseline = JSON.parse(localStorage.getItem("baseline"));
  const population = parseInt(localStorage.getItem("population"));
  const p1 = JSON.parse(localStorage.getItem("p1"));
  const blTotalEmmissions = JSON.parse(
    localStorage.getItem("blTotalEmmissions")
  );
  const p1TotalEmissions = JSON.parse(localStorage.getItem("p1TotalEmissions"));
  const p1TotalAreaEmissions = JSON.parse(
    localStorage.getItem("p1TotalAreaEmissions")
  );
  const p1SummedEmissions= JSON.parse(localStorage.getItem("p1SummedEmissions"));

  const newPopulation = JSON.parse(
    localStorage.getItem("newPopulation")
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
  const absolutePolicyQuantification = JSON.parse(localStorage.getItem("absolutePolicyQuantification"))
  const absoluteEmissions = JSON.parse(localStorage.getItem("absoluteEmissions"))

 
  const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });
  // const zip = (array1, array2) => array1.map((x, i) => [x, array2[i]]); 

  const transportAndPolicyResultsLegend = [
    {
      title: "Bus",
      color: "#3d58a3",
      strokeWidth: 6
    },

    {
      title: "Car",
      color: "#ef7d00",
      strokeWidth: 6
    },

    {
      title: "Metro",
      color: "#95c11f",
      strokeWidth: 6
    },

    {
      title: "Rail Transport",
      color: "#ce143d",
      strokeWidth: 6
    },

    {
      title: "Road Transport",
      color: "#845f9e",
      strokeWidth: 6
    },

    {
      title: "Train",
      color: "#996e35",
      strokeWidth: 6
    },

    {
      title: "Tram",
      color: "#76918e",
      strokeWidth: 6
    },

    {
      title: "Waterways transport",
      color: "#0000CD",
      strokeWidth: 6
    }
    ];
  // #region data distribution

  // total values
  const buildingEmissionsTotal = []
  const buildingBaseline = []
  const absoluteEmissionsTotal = []

  // absolute values
  const netSinkTotal = [];
  const netLandUseChangeTotal = [];
  const netBuildingsTotal = [];
  const netTransportTotal = [];
  const netBalanceTotal = [];

  // per capita values
  const netSinkPerCapita = [];
  const netLandUseChangePerCapita = [];
  const netBuildingsPerCapita= [];
  const netTransportPerCapita = [];
  const netBalancePerCapita = [];
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
  const totalTransportProjection = [];

  // absolute policy quantification
  const busAbsolutePolicyQuantification = [];
  const carAbsolutePolicyQuantification = [];
  const tramAbsolutePolicyQuantification = [];
  const metroAbsolutePolicyQuantification = [];
  const trainAbsolutePolicyQuantification = [];
  const railTransportAbsolutePolicyQuantification = [];
  const roadTransportAbsolutePolicyQuantification = [];
  const waterwaysTransportAbsolutePolicyQuantification = [];


   if (absolutePolicyQuantification &&
      Object.keys(absolutePolicyQuantification).length !== 0
       ){
        for (let i = year; i < 2051; i++) {
          busAbsolutePolicyQuantification.push({ x: i, y: absolutePolicyQuantification.bus[i] })
          carAbsolutePolicyQuantification.push({ x: i, y: absolutePolicyQuantification.car[i] })
          metroAbsolutePolicyQuantification.push({ x: i, y: absolutePolicyQuantification.metro[i] })
          railTransportAbsolutePolicyQuantification.push({ x: i, y: absolutePolicyQuantification.rail_transport[i] })
          roadTransportAbsolutePolicyQuantification.push({ x: i, y: absolutePolicyQuantification.road_transport[i] })
          trainAbsolutePolicyQuantification.push({ x: i, y: absolutePolicyQuantification.train[i] })
          tramAbsolutePolicyQuantification.push({ x: i, y: absolutePolicyQuantification.tram[i] })
          waterwaysTransportAbsolutePolicyQuantification.push({ x: i, y: absolutePolicyQuantification.waterways_transport[i] })
          // totalPolicyQuantification.push({ x: i, y: absolutePolicyQuantification.total[i] })
      };
    }
    if (policyQuantificationResponse &&
    policyQuantificationResponse.length !== 0){
      for (let i = year; i < 2051; i++) {
        buildingEmissionsTotal.push({x: i, y: policyQuantificationResponse.data.graph[i].total})
        buildingBaseline.push({x: i, y: policyQuantificationResponse.data.graph[i].baseline})
        absoluteEmissionsTotal.push({x:i, y: absoluteEmissions.total[i]})
      }
      
    }
    

  if(
    buildingsBaselineResponse &&
    newPopulation &&
    landUseChangeResponse &&
    p1 &&
    projections &&
    Object.keys(newPopulation).length !== 0 &&
    Object.keys(landUseChangeResponse).length !== 0 &&
    Object.keys(p1).length !== 0 &&
    Object.keys(blTotalEmmissions).length !== 0 &&
    Object.keys(p1TotalAreaEmissions).length !== 0 &&
    Object.keys(buildingsBaselineResponse).length !== 0 &&
    Object.keys(projections).length !== 0){
  for (let i = year; i < 2051; i++) {
    netSinkTotal.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].sink,
    });
    netLandUseChangeTotal.push({
      x: i,
      y0: 0,
      y: landUseChangeResponse.landUseChange[i].total,
    });
    netBuildingsTotal.push({
      x: i,
      y0: 0,
      y: buildingsBaselineResponse.baseline[i].apartment,
    });
    netTransportTotal.push({
      x: i,
      y0: 0,
      y: buildingsBaselineResponse.baseline[i].apartment,
    });
    netBalanceTotal.push({
      x: i,
      y0: 0,
      y: buildingsBaselineResponse.baseline[i].apartment,
    });

    netSinkPerCapita.push({
      x: i,
      y0: 0,
      y: (landUseChangeResponse.landUseChange[i].sink/newPopulation[i]),
    });
    netLandUseChangePerCapita.push({
      x: i,
      y0: 0,
      y: (landUseChangeResponse.landUseChange[i].total/newPopulation[i]),
    });
    netBuildingsPerCapita.push({
      x: i,
      y0: 0,
      y: (buildingsBaselineResponse.baseline[i].apartment/newPopulation[i]),
    });
    netTransportPerCapita.push({
      x: i,
      y0: 0,
      y: (buildingsBaselineResponse.baseline[i].apartment/newPopulation[i]),
    });
    netBalancePerCapita.push({
      x: i,
      y0: 0,
      y: (buildingsBaselineResponse.baseline[i].apartment/newPopulation[i]),
    });
  }

  for (let i = 2022; i < 2051; i++) {
    dataBlTotalEmissions.push({ x: i, y: blTotalEmmissions[i] });
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

  for (let i = 2022; i < 2051; i++) { 
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

      <div className="padding" ref={componentRef}>
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
          newPopulation &&
          landUseChangeResponse &&
          p1 &&
          projections &&
          Object.keys(newPopulation).length !== 0 &&
          Object.keys(landUseChangeResponse).length !== 0 &&
          Object.keys(p1).length !== 0 &&
          Object.keys(blTotalEmmissions).length !== 0 &&
          Object.keys(p1TotalAreaEmissions).length !== 0 &&
          Object.keys(buildingsBaselineResponse).length !== 0 &&
          Object.keys(projections).length !== 0 &&
           (
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
                      {Math.round(buildingsBaselineResponse.baseline[key].apartment)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Land-use change</td>
                  {Object.keys(landUseChangeResponse.landUseChange).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {Math.round(landUseChangeResponse.landUseChange[key].total)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Buildings</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {Math.round(buildingsBaselineResponse.baseline[key].apartment)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Net sinks</td>
                  {Object.keys(landUseChangeResponse.landUseChange).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {Math.round(landUseChangeResponse.landUseChange[key].sink)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="tableTotalEmissions">Net balance</td>
                  {Object.keys(buildingsBaselineResponse.baseline).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {Math.round(buildingsBaselineResponse.baseline[key].apartment)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            {/* graph final for generate report from excel */}
            <div style={{margin:"30px"}}>
          {/* policy quantification results */}
             {/* <Divider textAlign="left" flexItem>
                <Chip label="Absolute Territorial Results" />
              </Divider>
              <FlexibleXYPlot
                className="policy-quantification-chart"
                stackBy="y"
                xType="ordinal"
                margin={{ left: 80 }}
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
                  opacity={0.55}
                  data={buildingEmissionsTotal}
                  stack
                />
                <BarSeries
                  color="#ef7d00"
                  opacity={0.55}
                  data={buildingBaseline}
                  stack
                />
                <BarSeries
                  color="#2e8b57"
                  opacity={0.55}
                  data={absoluteEmissionsTotal}
                  stack
                />
              </FlexibleXYPlot> */}
              </div>
            {/* transport projections start here */}
               <div className="luc_alert_container">
              <Divider textAlign="left" flexItem>
                <Chip label="Transport projections" />
              </Divider>
              <FlexibleXYPlot
                margin={{ left: 80 }}
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
                  opacity={0.5}
                  data={busProjection}
                  stack
                />
                <BarSeries
                  color="#ef7d00"
                  opacity={0.55}
                  data={carProjection}
                  stack
                />
                <BarSeries
                  color="#95c11f"
                  opacity={0.55}
                  data={metroProjection}
                  stack
                />
                <BarSeries
                  color="#ce143d"
                  opacity={0.55}
                  data={railTransportProjection}
                  stack
                />
                <BarSeries
                  color="#845f9e"
                  opacity={0.55}
                  data={roadTransportProjection}
                  stack
                />
                <BarSeries color="#996e35" opacity={0.55} data={trainProjection} stack />
                
                <BarSeries color="#76918e" opacity={0.55} data={tramProjection} stack />
                <BarSeries
                  color="#000000"
                  strokeWidth="1"
                  data={waterwaysTransportProjection}
                />
                <LineSeries
                  className="fourth-series"
                  color="#000000"
                  strokeWidth="1"
                  data={totalTransportProjection}
                />
              </FlexibleXYPlot>
              </div>

              <div style={{margin:"30px"}}>
          {/* policy quantification results */}
              <Divider textAlign="left" flexItem>
                <Chip label="Absolute Policy Quantification Results" />
              </Divider>
              <FlexibleXYPlot
                className="policy-quantification-chart"
                stackBy="y"
                xType="ordinal"
                margin={{ left: 80 }}
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
                  opacity={0.55}
                  data={busAbsolutePolicyQuantification}
                  stack
                />
                <BarSeries
                  color="#ef7d00"
                  opacity={0.55}
                  data={carAbsolutePolicyQuantification}
                  stack
                />
                <BarSeries
                  color="#95c11f"
                  opacity={0.55}
                  data={metroAbsolutePolicyQuantification}
                  stack
                />
                <BarSeries
                  color="#ce143d"
                  opacity={0.55}
                  data={railTransportAbsolutePolicyQuantification}
                  stack
                />
                <BarSeries
                  color="#845f9e"
                  opacity={0.55}
                  data={roadTransportAbsolutePolicyQuantification}
                  stack
                />
                <BarSeries color="#996e35" opacity={0.55} data={trainAbsolutePolicyQuantification} stack />
                <BarSeries color="#76918e" opacity={0.55} data={tramAbsolutePolicyQuantification} stack />
                <BarSeries
                  color="#0000CD"
                  opacity={0.55}
                  data={waterwaysTransportAbsolutePolicyQuantification}
                  stack
                />
              </FlexibleXYPlot>

              <div>
                <DiscreteColorLegend
                items={transportAndPolicyResultsLegend}
                orientation="horizontal"/>
              </div>
              
              </div>

            <div className="luc_alert_container">
            <FlexibleXYPlot
                margin={{ left: 80 }}
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
              <YAxis title="Land-use tC02/a" />
              {/* 1 */}
              <BarSeries
                cluster='1'
                color="#ffdf43"
                opacity={0.5}
                data={netTransportTotal}
              />
              {/* 2 */}
              <BarSeries
                cluster='2'
                color="#ef7d00"
                opacity={0.5}
                data={netLandUseChangeTotal}
              />
              {/* 3 */}
              <BarSeries  
                cluster='3' 
                color="#76918e" 
                opacity={0.6} 
                data={netBuildingsTotal} 
              />
              {/* 4 */}
              <BarSeries
                cluster='4'
                color="#ce143d"
                opacity={0.5}
                data={netSinkTotal}
              />
              {/* 5 */}
              <BarSeries
                cluster='5'
                color="#d6e7d9"
                opacity={0.5}
                data={netBalanceTotal}
              />
               <LineSeries
                className="fourth-series"
                color="#000000"
                strokeWidth="1"
                data={netBalanceTotal}
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
                  {Object.keys(landUseChangeResponse.landUseChange).map((key, i) => (
                    <td key={i} className="tableTotalEmissions">
                      {(Math.round(landUseChangeResponse.landUseChange[key].total)/newPopulation[key]).toFixed(2)}
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
                      {(Math.round(landUseChangeResponse.landUseChange[key].sink)/newPopulation[key]).toFixed(2)}
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
            {/* <div className="luc_alert_container">
              <FlexibleXYPlot
                margin={{ left: 80 }}
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
              <YAxis title="Land-use tC02/a" /> */}
              {/* 1 */}
              {/* <BarSeries
                cluster='1'
                color="#ffdf43"
                opacity={0.5}
                data={netTransportPerCapita}
              /> */}
              {/* 2 */}
              {/* <BarSeries
                cluster='2'
                color="#ef7d00"
                opacity={0.5}
                data={netLandUseChangePerCapita}
              /> */}
              {/* 3 */}
              {/* <BarSeries  
                cluster='3' 
                color="#76918e" 
                opacity={0.6} 
                data={netBuildingsPerCapita} 
              /> */}
              {/* 4 */}
              {/* <BarSeries
                cluster='4'
                color="#ce143d"
                opacity={0.5}
                data={netSinkPerCapita}
              /> */}
              {/* 5 */}
              {/* <BarSeries
                cluster='5'
                color="#d6e7d9"
                opacity={0.5}
                data={netBalancePerCapita}
              />
              <LineSeries
                className="fourth-series"
                color="#000000"
                strokeWidth="1"
                data={netBalancePerCapita}
              />
              </FlexibleXYPlot>
            </div> */}
            <div className="luc_alert_container">
              <Divider textAlign="left" flexItem>
                <Chip label="Consumption Baseline VS Annual Household Emissions" />
              </Divider>
            </div>
            <div className="luc_alert_container">
              <FlexibleXYPlot
                margin={{ left: 80 }}
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
                  opacity={0.5}
                  data={policyHousingEnergy}
                  stack
                />
                <BarSeries
                  color="#ef7d00"
                  opacity={0.55}
                  data={policyHousingOther}
                  stack
                />
                <BarSeries
                  color="#95c11f"
                  opacity={0.55}
                  data={policyTransportFuels}
                  stack
                />
                <BarSeries
                  color="#ce143d"
                  opacity={0.55}
                  data={policyTransportOther}
                  stack
                />
                <BarSeries
                  color="#845f9e"
                  opacity={0.55}
                  data={policyAirTravel}
                  stack
                />
                <BarSeries color="#996e35" opacity={0.55} data={policyFood} stack />
                <BarSeries
                  color="#e1719a"
                  opacity={0.55}
                  data={policyTangiblegoods}
                  stack
                />
                <BarSeries color="#76918e" opacity={0.55} data={policyServices} stack />
                <LineSeries
                  className="fourth-series"
                  color="#000000"
                  strokeWidth="1"
                  data={dataBlTotalEmissions}
                />
              </FlexibleXYPlot>
            </div>

              {/* <ConsumptionBaselineResults /> */}
            
              </>        
            </div>
          )}
      </div>
        {
          // ? why is here == not === 
        }
        {/* {!buildingsBaselineResponse || TODO: Doesn't seem to work
          !newPopulation ||
          !landUseChangeResponse ||
          !p1 ||
          Object.keys(newPopulation).length == 0 ||
          Object.keys(landUseChangeResponse).length == 0 ||
          Object.keys(p1).length == 0 ||
          Object.keys(blTotalEmmissions).length == 0 ||
          Object.keys(p1TotalAreaEmissions).length == 0 ||
          Object.keys(buildingsBaselineResponse).length == 0 || (
            <div>
              There is not enough data to create report! Please, consider going through all modules.
            </div>
      )} */}
    </article>
    </Container>
  );
};
