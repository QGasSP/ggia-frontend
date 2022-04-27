import React, { useRef } from "react";
import ReactToPrint, {
  PrintContextConsumer,
  useReactToPrint,
} from "react-to-print";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { any } from "prop-types";
import { U1planner } from "./U1planner";
import { U2planner } from "./U2planner";
import { LUCBarChart } from "./LUCBarChart";
import { BuildingBaselineCharts } from "./BuildingBaselineCharts";
import { BuildingsPoliciesCharts } from "./BuildingsPoliciesCharts";
import { ConsumptionBaselineResults } from "./ConsumptionBaselineResults";
import { ConsumptionSummary } from "./ConsumptionSummary";
import { Button } from "./Button";

// https://github.com/gregnb/react-to-print/issues/184

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
  const baseline = JSON.parse(localStorage.getItem("baseline"));
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

  return (
    <article>
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
          <div>
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
        <Divider textAlign="left" flexItem>
          <b>Baseline</b>
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

        <br />
        <Divider textAlign="left" flexItem>
          <b>Transport Module</b>
        </Divider>

        {country !== "" &&
          year > 0 &&
          population > 0 &&
          baseline !== null &&
          baseline !== undefined &&
          Object.keys(baseline).length !== 0 && (
            <div>
              <>
                {settlementDistribution !== null &&
                  settlementDistribution !== undefined &&
                  projections !== undefined &&
                  projections !== null &&
                  Object.keys(projections).length !== 0 &&
                  Object.keys(settlementDistribution).length !== 0 && (
                    <U1planner
                      u1PlannerToPrint={u1PlannerToPrint}
                      population={population}
                      settlementDistribution={settlementDistribution}
                      country={country}
                      year={year}
                    />
                  )}

              {newDevelopment !== undefined &&
                newDevelopment !== null &&
                projections !== undefined &&
                projections !== null &&
                emission !== undefined &&
                emission !== null &&
               (
                  <U2planner
                    u2PlannerToPrint={u2PlannerToPrint}
                    baseline={baseline}
                    newDevelopment={newDevelopment}
                    settlementDistribution={settlementDistribution}
                    emission={emission}
                    projections={projections}
                  />
                )} 
 
                <Divider textAlign="left" flexItem>
                  <b>Land-Use Change Module</b>
                </Divider>

                 {landUseChangeResponse !== null &&
                Object.keys(landUseChangeResponse).length !== 0 && (
                  <LUCBarChart lucResultsToPrint={lucResultsToPrint} landUseChangeResponse={landUseChangeResponse} year={year}/>
                )}

                <Divider textAlign="left" flexItem>
                  <b>Buildings Module</b>
                </Divider>

                {buildingsBaselineResponse !== null &&
                Object.keys(buildingsBaselineResponse).length !== 0 && (
                  <BuildingBaselineCharts 
                  buildingsBaselineToPrint={buildingsBaselineToPrint} 
                  baseline={buildingsBaselineResponse} 
                  country={country}
                  year={year}/>
                )}

                {newConstructionResponse !== null && 
                policyQuantificationResponse !== null && 
                buildingsBaselineResponse !== null &&
                Object.keys(buildingsBaselineResponse).length !== 0 &&
                Object.keys(policyQuantificationResponse).length !== 0 && 
                Object.keys(newConstructionResponse).length !== 0 &&(
                  <BuildingsPoliciesCharts 
                  buildingsPolicyToPrint={buildingsPolicyToPrint}
                  newConstructionResponse={newConstructionResponse}
                  policyQuantificationResponseDummy={policyQuantificationResponse}
                  baseline={buildingsBaselineResponse} 
                  country={country}
                  year={year}/>
                )}


               {/*  {bL !== null &&
                  Object.keys(bL).length !== 0 &&
                  blTotalEmmissions !== null &&
                  Object.keys(blTotalEmmissions).length !== 0 && (
                    <ConsumptionBaselineResults
                      consumptionBaselineToPrint={consumptionBaselineToPrint}
                    />
                  )} */}

               {/*  {bL !== null &&
                  p1 !== null &&
                  bl !== null &&
                  bLTotalAreaEmissions !== null &&
                  p1TotalEmissions !== null &&
                  bLTotalAreaEmissions !== null &&
                  p1TotalEmissions !== null &&
                  blSummedEmissions!== null &&
                  p1SummedEmissions !== null &&
                  Object.keys(bL).length !== 0 &&
                  Object.keys(p1).length !== 0 &&
                  Object.keys(bl).length !== 0 &&
                  Object.keys(p1SummedEmissions).length !== 0 &&
                  Object.keys(blSummedEmissions).length !== 0 &&
                  Object.keys(p1TotalAreaEmissions).length !== 0 &&
                  Object.keys(bLTotalAreaEmissions).length !== 0 &&
                  Object.keys(p1SummedEmissions).length !== 0 &&
                  Object.keys(blSummedEmissions).length !== 0 &&
                  Object.keys(p1TotalEmissions).length !== 0 &&
                  Object.keys(blTotalEmmissions).length !== 0 && (
                    <ConsumptionSummary
                      consumptionResultsToPrint={consumptionResultsToPrint}
                      p1TotalEmissions={p1TotalEmissions}
                      blTotalEmmissions={blTotalEmmissions}
                      bLTotalAreaEmissions={bLTotalAreaEmissions}
                      p1TotalAreaEmissions={p1TotalAreaEmissions}
                      blSummedEmissions={blSummedEmissions}
                      p1SummedEmissions={p1SummedEmissions}
                      bl={bl}
                      p1={p1}
                    />
                  )} */}
              </>
            </div>
          )}
      </div>
    </article>
  );
};
