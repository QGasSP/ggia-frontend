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
import { ConsumptionBaselineResults } from "./ConsumptionBaselineResults";
import { ConsumptionResults } from "./ConsumptionResults";
import { ConsumptionSummary } from "./ConsumptionSummary";

export const GenerateReport = () => {
  const u1PlannerToPrint = useRef(null);
  const u2PlannerToPrint = useRef(null);
  const lucResultsToPrint = useRef(null);
  const consumptionBaselineToPrint = useRef(null);
  const consumptionResultsToPrint = useRef(null);

  const country = localStorage.getItem("country");
  const year = parseInt(localStorage.getItem("year"));
  const baseline = JSON.parse(localStorage.getItem("baseline"));
  const population = parseInt(localStorage.getItem("population"));
  const p1 = JSON.parse(localStorage.getItem("p1"));
  const bL = JSON.parse(localStorage.getItem("bL"));
  const bLTotalEmissions = JSON.parse(localStorage.getItem("bLTotalEmissions"));
  const bLTotalAreaEmissions = JSON.parse(
    localStorage.getItem("bLTotalAreaEmissions")
  );
  const bLTransport = JSON.parse(localStorage.getItem("bLTransport"));
  const p1TotalEmissions = JSON.parse(localStorage.getItem("p1TotalEmissions"));
  const p1TotalAreaEmissions = JSON.parse(
    localStorage.getItem("p1TotalAreaEmissions")
  );
  const settlementDistribution = JSON.parse(
    localStorage.getItem("settlementDistribution")
  );
  const landUseChangeResponse = JSON.parse(
    localStorage.getItem("landUseChangeResponse")
  );
  const emission = JSON.parse(localStorage.getItem("emission"));
  const projections = JSON.parse(localStorage.getItem("projections"));
  const newDevelopment = JSON.parse(localStorage.getItem("newDevelopment"));

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

      {country !== "" &&
        year > 0 &&
        population > 0 &&
        baseline !== null &&
        baseline !== undefined &&
        Object.keys(baseline).length !== 0 && (
          <div>
            <>
              <ReactToPrint content={() => any}>
                <PrintContextConsumer>
                  {({ handlePrint }) => (
                    <button onClick={handlePrint}>Print</button>
                  )}
                </PrintContextConsumer>
              </ReactToPrint>

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

              {/* {newDevelopment !== undefined &&
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
 */}
              {/*  {landUseChangeResponse !== null &&
                Object.keys(landUseChangeResponse).length !== 0 && (
                  <LUCBarChart lucResultsToPrint={lucResultsToPrint} />
                )} */}

              {bL !== null &&
                Object.keys(bL).length !== 0 &&
                bLTotalEmissions !== null &&
                Object.keys(bLTotalEmissions).length !== 0 && (
                  <ConsumptionBaselineResults
                    consumptionBaselineToPrint={consumptionBaselineToPrint}
                  />
                )}
             {bL !== null &&
                p1 !== null &&
                bLTransport !== null &&
                Object.keys(bL).length !== 0 &&
                Object.keys(p1).length !== 0 &&
                Object.keys(bLTransport).length !== 0 &&
                bLTotalEmissions !== null &&
                p1TotalEmissions !== null &&
                Object.keys(p1TotalEmissions).length !== 0 &&
                Object.keys(bLTotalEmissions).length !== 0 && (
                  <ConsumptionSummary
                    consumptionResultsToPrint={consumptionResultsToPrint}
                    p1TotalEmissions={p1TotalEmissions}
                    bLTotalEmmissions={bLTotalEmissions}
                    bLTotalAreaEmissions={bLTotalAreaEmissions}
                    p1TotalAreaEmissions={p1TotalAreaEmissions}
                    blTransport={bLTransport}
                    p1={p1}
                  />
                )} 
            </>
          </div>
        )}
    </article>
  );
};
