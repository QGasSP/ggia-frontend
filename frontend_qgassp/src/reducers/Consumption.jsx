

export const hseHoldEmissions = [
  { title: "HE", color: "#3d58a3", strokeWidth: 13 },
  { title: "HO", color: "#ef7d00", strokeWidth: 13 },
  { title: "TF", color: "#95c11f", strokeWidth: 13 },
  { title: "TO", color: "#ce143d", strokeWidth: 13 },
  { title: "AT", color: "#845f9e", strokeWidth: 13 },
  { title: "F", color: "#996e35", strokeWidth: 13 },
  { title: "TG", color: "#e1719a", strokeWidth: 13 },
  { title: "S", color: "#76918e", strokeWidth: 13 },
];

export const capitaEmissions = [
  { title: "RF", color: "#3d58a3", strokeWidth: 13 },
  { title: "BL", color: "#ef7d00", strokeWidth: 13 },
  { title: "PN", color: "#52974c", strokeWidth: 13 },
  { title: "NA", color: "#ce143d", strokeWidth: 13 },
];

export const RfData = [
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

export const BlData = [
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

export const PnData = [
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

export const NaData = [
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

/* const showConsumptionBaseline = () => {

}; */



export const bLHe=[
  { x: 2020, y: 1000 },
  { x: 2021, y: 1000 },
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
]
/* const labelData = RfData.map((d, idx) => ({
  x: d.x,
  y: Math.max(RfData[idx].y, BlData[idx].y),
})); */

// const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;

const RfBaseline = [
  { x: "Housing_energy", y: 2 },
  { x: "Housing_other", y: 4 },
  { x: "Transport_fuels", y: 10 },
  { x: "Transport_other", y: 20 },
  { x: "Air_travel", y: 18 },
  { x: "Food", y: 50 },
  { x: "Tabgible_goods", y: 3 },
  { x: "Services", y: 4 },
  { x: "Total_emissions", y: 80 },
];
/* 
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
 */
