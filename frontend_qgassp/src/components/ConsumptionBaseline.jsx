import React from "react";
import "../css/startpage.css";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import "../css/u1planner.css";
import {
  XYPlot,
  VerticalGridLines,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  /* LabelSeries, */
} from "react-vis";
import { Label } from "reactstrap";

export const ConsumptionBaseline = () => {
  const BarSeries = VerticalBarSeries;
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

  /* const labelData = RfData.map((d, idx) => ({
    x: d.x,
    y: Math.max(RfData[idx].y, BlData[idx].y),
  })); */

  // const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
  return (
    <>
      <article>
        <br />
        <div>
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="Area and type population" />
          </Divider>
        </div>
        <section>
          <div className="div_transport">
            <label>
              <b>Area type</b>
            </label>
            <label></label>
          </div>
          <div className="div_transport">
            <label htmlFor="select_planned_area"> Planned area type</label>
            <select
              className="select_planned_area"
              id="select_planned_area"
              // onChange={(e) => setPlannedAreaType(e.target.value)}
              defaultValue=""
            >
              <option value="DefaultOption">Select area type</option>
              <optgroup label="Planned area types">
                <option value="average_mix">Average/mix</option>
                <option value="city">City</option>
                <option value="town">Town</option>
                <option value="rural">Rural</option>
              </optgroup>
            </select>
          </div>

          <div className="div_transport">
            <label htmlFor="house_occupancy" className="settle_label">
              Average house occupancy level
            </label>
            <input
              className="input_transport"
              type="number"
              id="house_occupancy"
              placeholder="no default value yet"
              required
            />
          </div>

          <div className="div_transport">
            <label htmlFor="income_households">
              Average income level of households
            </label>
            <select
              className="select_transport"
              id="income_households"
              name="income_households"
              // defaultValue="400"
            >
              <option value="DefaultOption">Select Income </option>
              <optgroup label="Household income levels">
                <option value="bottom_twenty">Bottom 20%</option>
                <option value="top_twenty">Top 20 %</option>
                <option value="twenty_forty">20-40 %</option>
                <option value="forty-sixty">40-60 %</option>
                <option value="sixty-eighty">60-80 %</option>
                <option value="average_unknown">average/unknown</option>
              </optgroup>
            </select>
          </div>

          <div className="div_transport">
            <label htmlFor="decarbonization_percent" className="settle_label">
              Expected rate of global decarbonisation? (%)
            </label>
            <select
              className="select_transport"
              id="decarbonization_percent"
              name="decarbonization_percent"
            >
              <option value="DefaultOption">Select rate %</option>
              <optgroup label="Global decarbonisation %">
                <option value="normal">Normal</option>
                <option value="fast">fast</option>
                <option value="slow">slow</option>
              </optgroup>
            </select>
          </div>

          <br />
          <Divider textAlign="left" flexItem>
            {" "}
            <b>Annual household emissions country_name_update</b>
          </Divider>

          <div>
            <label className="y-axis-label">Emissions/ kG C02 eq</label>
            <XYPlot width={1000} height={500} stackBy="y" xType="ordinal">
              <HorizontalGridLines />
              <VerticalGridLines />
              <VerticalBarSeries className="StackedBarchart" />
              <XAxis title="Year" />
              <YAxis title="Emissions/ kG C02 eq" />
              <BarSeries
                color="#8C0303"
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
            <label className="X-axis_label">Year</label>
          </div>

          <br />
          <Divider textAlign="left" flexItem>
            {" "}
            <b>Per capita emissions by sector for country-name policies</b>
          </Divider>

          <XYPlot xType="ordinal" width={1000} height={400} xDistance={100}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Emissions sector" 
            /* style={{ fontWeight: 800 }} */
            />
            <YAxis title="Emissions/ kG C02 eq" />
            <BarSeries className="vertical-bar-series-example" data={RfData} />
            <BarSeries data={BlData} />
            <BarSeries className="vertical-bar-series-example" data={PnData} />
            <BarSeries data={NaData} />
            {/*  <LabelSeries data={labelData} getLabel={(d) => d.x} /> */}
          </XYPlot>
         <div>
           <Label ><b>Total emissions for the area in year is ...</b></Label>
         </div>
        </section>
      </article>
    </>
  );
};
