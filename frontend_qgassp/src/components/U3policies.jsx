import { Button } from "./Button";
import {LineLegend} from "./LineLegend"
import "../css/u3policies.css";
import "../css/u1planner.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  VerticalBarSeries,
  RadialChart,
  DiscreteColorLegend,
} from "react-vis";
import Divider from "@mui/material/Divider";
import {useNavigate} from "react-router-dom";
import { Container, Grid, Box } from "@mui/material";

const BarSeries = VerticalBarSeries;

/**
 * U3 input display
 * @return {}
 */

export const U3policies = () =>
  /*   {
  policyQuantification,
  emission,
  baseline,
  projections,
  passengerMobility,
  freightTransport,
  modalPassShares,
  modalSplitPassenger,
  modalFreShares,
  modalSplitFreight,
  fuelSharesBusTypes,
  fuelSharesBus,
  fuelSharesCarTypes,
  fuelSharesCar,
  electricityTransTypes,
  electricityTrans,
} */
  {
    const base = JSON.parse(localStorage.getItem("baseline"))|| {};
    const baseline = base.baseline;
    const year = parseInt(localStorage.getItem("year"));
    const navigate = useNavigate();

    const policyQuantificationGetRequest = JSON.parse(localStorage.getItem("policyQuantificationTransportRequest")) || "";
    const getModalSplitPassenger = policyQuantificationGetRequest.policyQuantification.modalSplitPassenger
    const policyQuantification = JSON.parse(localStorage.getItem("policyQuantificationTransportResponse")) || "";
    const absolutePolicyQuantification = JSON.parse(localStorage.getItem("absolutePolicyQuantification")) || "";
    const emission = JSON.parse(localStorage.getItem("emission"))||{};
    const projections = JSON.parse(localStorage.getItem("projections"))|| {};
    const absoluteEmissionsYear1 = JSON.parse(localStorage.getItem("absoluteEmissionsYear1"));

    
    // total
    const emissionTotal = emission.bus + emission.train + emission.car + emission.metro  + emission.tram
    
    const policyQuantificationTotal = getModalSplitPassenger.shares.bus + getModalSplitPassenger.shares.tram + getModalSplitPassenger.shares.car +
    getModalSplitPassenger.shares.metro + getModalSplitPassenger.shares.train

    const emissionPolicyLegendItems = [
    {
      title: "Bus",
      color: "#F8DE7E",
      strokeWidth: 6,
    },
    {
      title: "Metro",
      color: "#ADD8E6",
      strokeWidth: 6,
    },
    {
      title: "Train",
      color: "#FF6347",
      strokeWidth: 6,
    },

    {
      title: "Car",
      color: "#0000CD",
      strokeWidth: 6,
    },

    {
      title: "Tram",
      color: " #228B22",
      strokeWidth: 6,
    },
  ];

   // policy quantification results
  const busYear1 = [];
  const carYear1 = []
  const tramYear1 = [];
  const metroYear1 = [];
  const trainYear1 = [];
  const railTransportYear1 = [];
  const roadTransportYear1= [];
  const waterwaysTransportYear1 = [];

  // policy quantification results
  const busPolicyQuantification = [];
  const carPolicyQuantification = []
  const tramPolicyQuantification = [];
  const metroPolicyQuantification = [];
  const trainPolicyQuantification = [];
  const railTransportPolicyQuantification = [];
  const roadTransportPolicyQuantification = [];
  const waterwaysTransportPolicyQuantification = [];
  const totalPolicyQuantification = [];

  // absolute policy quantification
  const busAbsolutePolicyQuantification = [];
  const carAbsolutePolicyQuantification = [];
  const tramAbsolutePolicyQuantification = [];
  const metroAbsolutePolicyQuantification = [];
  const trainAbsolutePolicyQuantification = [];
  const railTransportAbsolutePolicyQuantification = [];
  const roadTransportAbsolutePolicyQuantification = [];
  const waterwaysTransportAbsolutePolicyQuantification = [];

  // transport projections
  const busProjection = [];
  const carProjection = [];
  const metroProjection = [];
  const railTransportProjection = [];
  const roadTransportProjection = [];
  const trainProjection = [];
  const tramProjection = [];
  const waterwaysTransportProjection = [];
  const totalProjections = [];
  
  

  if (policyQuantification &&
      Object.keys(policyQuantification).length !== 0 &&
      policyQuantification !== undefined
  ){
    for (let i = year; i < 2051; i++) {
          busPolicyQuantification.push({ x: i, y: policyQuantification.bus[i] })
          carPolicyQuantification.push({ x: i, y: policyQuantification.car[i] })
          metroPolicyQuantification.push({ x: i, y: policyQuantification.metro[i] })
          railTransportPolicyQuantification.push({ x: i, y: policyQuantification.rail_transport[i] })
          roadTransportPolicyQuantification.push({ x: i, y: policyQuantification.road_transport[i] })
          trainPolicyQuantification.push({ x: i, y: policyQuantification.train[i] })
          tramPolicyQuantification.push({ x: i, y: policyQuantification.tram[i] })
          waterwaysTransportPolicyQuantification.push({ x: i, y: policyQuantification.waterways_transport[i] })
          totalPolicyQuantification.push({ x: i, y: policyQuantification.total[i] })          
      };
      }

       if (absolutePolicyQuantification &&
          Object.keys(absolutePolicyQuantification).length !== 0 &&
          policyQuantification !== undefined
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

      if (projections &&
      Object.keys(projections).length !== 0) {
        for (let i = year; i < 2051; i++) {
          busProjection.push({ x: i, y: projections.bus[i]})
          carProjection.push({ x: i, y: projections.car[i] })
          metroProjection.push({ x: i, y: projections.metro[i] })
          railTransportProjection.push({ x: i, y: projections.rail_transport[i] })
          roadTransportProjection.push({ x: i, y: projections.road_transport[i] })
          trainProjection.push({ x: i, y: projections.train[i] })
          tramProjection.push({ x: i, y: projections.tram[i] })
          waterwaysTransportProjection.push({ x: i, y: projections.waterways_transport[i] })
          totalProjections.push({ x: i, y: projections.total[i] })
      }
      }


    return (
      <Container maxWidth="xl">
     
        <br />
        <div className="headerU3policies">
          
            <h2>Policy quantification results</h2>
          
        </div>

        <div>
          <table style={{width:'100%'}}>
              <thead>
                <tr>
                  <th>Modal split passenger transport</th>
                  <th>% Without policy</th>
                  <th>% With policy</th>
                  <th>% Population affected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shares for bus</td>
                  <td>{emission.bus}</td>
                  <td>{getModalSplitPassenger.shares.bus}</td>
                  <td>{getModalSplitPassenger.affectedPopulation}</td>
                </tr>

                <tr>
                  <td>Shares for metro</td>
                  <td>{emission.metro}</td>
                  <td>{getModalSplitPassenger.shares.metro}</td>
                </tr>

                <tr>
                  <td>Shares for tram</td>
                  <td>{emission.tram}</td>
                  <td>{getModalSplitPassenger.shares.tram}</td>
                </tr>

                <tr>
                  <td>Shares for train</td>
                  <td>{emission.train}</td>
                  <td>{getModalSplitPassenger.shares.train}</td>
                </tr>

                <tr>
                  <td>Shares for passenger car</td>
                  <td>{emission.car}</td>
                  <td>{getModalSplitPassenger.shares.car}</td>
                </tr>
              </tbody>
          </table>
        </div>
        <Divider>
        </Divider>
        <br/>
        {/* with and without policy radial charts*/}
        {Object.keys(getModalSplitPassenger) !== 0 && 
        <div>
          <Grid mb={7}
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '80vh' }}>
            <Grid item xs={6}>
              {/* emissions without policy go here */}
              <div>
              <h4>Emissions without policy</h4>
              <RadialChart
              type="piechart"
                colorType="literal"
                radius={140}
                getAngle={(d) => d.angle}
                width={350}
                height={350}
                data={[
                  {
                    angle:
                      Math.round(
                        (emission.bus / emissionTotal + Number.EPSILON) * 36000
                      ) / 100,
                    label: "Bus",
                    color: "#F8DE7E",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.metro / emissionTotal + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Metro",
                    color: "#ADD8E6",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.train / emissionTotal + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Train",
                    color: "#FF6347",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.car / emissionTotal + Number.EPSILON) * 36000
                      ) / 100,
                    label: "Car",
                    color: "#0000CD",
                  },
                  {
                    angle:
                      Math.round(
                        (emission.tram / emissionTotal + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Tram",
                    color: " #228B22",
                  },
                  
                ]}
              />
              </div>
              <div>
                <DiscreteColorLegend
                items={emissionPolicyLegendItems}
                orientation="horizontal"/>
              </div>
            </Grid>
            <Grid item xs={6}>
              {/* emissions with policy go here */}
              <div>
              <h4>% Emissions with policy</h4>
              <RadialChart
              type="piechart"
                colorType="literal"
                radius={140}
                getAngle={(d) => d.angle}
                width={350}
                height={350}
                data={[
                  {
                    angle:
                      Math.round(
                        (getModalSplitPassenger.shares.bus / policyQuantificationTotal + Number.EPSILON) * 36000
                      ) / 100,
                    label: "Bus",
                    color: "#F8DE7E",
                  },
                  {
                    angle:
                      Math.round(
                        (getModalSplitPassenger.shares.metro / policyQuantificationTotal + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Metro",
                    color: "#ADD8E6",
                  },
                  {
                    angle:
                      Math.round(
                        (getModalSplitPassenger.shares.train / policyQuantificationTotal + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Train",
                    color: "#FF6347",
                  },
                  {
                    angle:
                      Math.round(
                        (getModalSplitPassenger.shares.car / policyQuantificationTotal + Number.EPSILON) * 36000
                      ) / 100,
                    label: "Car",
                    color: "#0000CD",
                  },
                  {
                    angle:
                      Math.round(
                        (getModalSplitPassenger.shares.tram / policyQuantificationTotal + Number.EPSILON) *
                          36000
                      ) / 100,
                    label: "Tram",
                    color: " #228B22",
                  },
                  
                ]}
              />
              </div>
              <div>
                <DiscreteColorLegend
                items={emissionPolicyLegendItems}
                orientation="horizontal"/>
              </div>
            </Grid>
          </Grid>
        </div>
        }
       
        <br/>
        {/* policy quantification results */}
        <Divider textAlign="left">
            <h3>RESULT: Annual transport GHG emissions per capita with policy impact (kgCO2e/capita, a)</h3>
        </Divider>
        <br/>
         <Box display="flex"
            minHeight="100vh"
            mt={5}>
          {/* policy quantification results */}
          
              <div>
              <XYPlot
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
                <YAxis title="Emissions/ kG C02 eq" />
                <BarSeries
                  color= "#e69500"
                  opacity={0.55}
                  data={busPolicyQuantification}
                  stack
                />
                <BarSeries
                  color="#A6036D"
                  opacity={0.55}
                  data={carPolicyQuantification}
                  stack
                />
                <BarSeries
                  color="#005aff"
                  opacity={0.55}
                  data={metroPolicyQuantification}
                  stack
                />
                <BarSeries
                  color="#80D941"
                  opacity={0.55}
                  data={railTransportPolicyQuantification}
                  stack
                />
                <BarSeries
                  color="#595959"
                  opacity={0.55}
                  data={roadTransportPolicyQuantification}
                  stack
                />
                <BarSeries color="#D90404" opacity={0.55} data={trainPolicyQuantification} stack />
                <BarSeries color="#C4D4F2" opacity={0.55} data={tramPolicyQuantification} stack />
                <BarSeries
                  color="#F2CE1B"
                  opacity={0.55}
                  data={waterwaysTransportPolicyQuantification}
                  stack
                />
                <LineSeries
                color="black"
                strokeStyle="dashed"
                data={totalProjections}
                />
              </XYPlot>

              <div className="transport-legend-style">
                <LineLegend/>
              </div>
              </div>
        </Box>
        <br/>

        {/* absolute policy quantification results */}
        <Divider textAlign="left">
          <h3>RESULT: Annual transport GHG emissions with policy impact (tCO2e/a)</h3>
        </Divider>
        <Box display="flex"
            minHeight="100vh"
            mt={5}>
              <div>
              <XYPlot
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
                  color="#e69500"
                  opacity={0.55}
                  data={busAbsolutePolicyQuantification}
                  stack
                />
                <BarSeries
                  color="#A6036D"
                  opacity={0.55}
                  data={carAbsolutePolicyQuantification}
                  stack
                />
                <BarSeries
                  color="#005aff"
                  opacity={0.55}
                  data={metroAbsolutePolicyQuantification}
                  stack
                />
                <BarSeries
                  color="#80D941"
                  opacity={0.55}
                  data={railTransportAbsolutePolicyQuantification}
                  stack
                />
                <BarSeries
                  color="#595959"
                  opacity={0.55}
                  data={roadTransportAbsolutePolicyQuantification}
                  stack
                />
                <BarSeries color="#D90404" opacity={0.55} data={trainAbsolutePolicyQuantification} stack />
                <BarSeries color="#C4D4F2" opacity={0.55} data={tramAbsolutePolicyQuantification} stack />
                <BarSeries
                  color="#F2CE1B"
                  opacity={0.55}
                  data={waterwaysTransportAbsolutePolicyQuantification}
                  stack
                />
              </XYPlot>
              <div className="transport-legend-style">
                <LineLegend/>
              </div>
              </div>
          </Box>

              <br />
              <div className="backButtonNew">
              <Button
                size="small"
                value="backProjections"
                onClick={() =>
                  navigate("../u3planner", { replace: true })
                }
                label="&laquo; Previous"
                secondary="true"
              />
            </div>
      
      </Container>
    );
  };
