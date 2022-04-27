export const country = localStorage.getItem("country");
export const year = parseInt(localStorage.getItem("year"));
export const population = parseInt(localStorage.getItem("population"));

export const baseline = JSON.parse(localStorage.getItem("baseline"));
export const p1 = JSON.parse(localStorage.getItem("p1"));
export const bL = JSON.parse(localStorage.getItem("bL"));
export const bl = JSON.parse(localStorage.getItem("bl"));
export const blTotalEmmissions = JSON.parse(
  localStorage.getItem("blTotalEmmissions")
);
export const bLTotalAreaEmissions = JSON.parse(
  localStorage.getItem("bLTotalAreaEmissions")
);
export const p1TotalEmissions = JSON.parse(localStorage.getItem("p1TotalEmissions"));
export const p1TotalAreaEmissions = JSON.parse(
  localStorage.getItem("p1TotalAreaEmissions")
);
export const blSummedEmissions = JSON.parse(localStorage.getItem("blSummedEmissions"));
export const p1SummedEmissions= JSON.parse(localStorage.getItem("p1SummedEmissions"));


export const settlementDistribution = JSON.parse(
  localStorage.getItem("settlementDistribution")
);
export const landUseChangeResponse = JSON.parse(
  localStorage.getItem("landUseChangeResponse")
);
export const emission = JSON.parse(localStorage.getItem("emission"));
export const projections = JSON.parse(localStorage.getItem("projections"));
export const newDevelopment = JSON.parse(localStorage.getItem("newDevelopment"));

export const buildingsBaselineResponse = JSON.parse(localStorage.getItem("buildingsBaselineResponse"));
export const newConstructionResponse = JSON.parse(localStorage.getItem("newConstructionResponse"));
export const policyQuantificationResponse = JSON.parse(localStorage.getItem("policyQuantificationResponse"));
