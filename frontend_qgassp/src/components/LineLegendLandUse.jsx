import React from "react";
import { DiscreteColorLegend } from "react-vis";
import "../css/linelegend.css";

const items = [
  { title: "Cropland To Forestland", color: "#ffdf43", strokeWidth: 10 },
  { title: "Grassland To Forestland", color: "#76918e", strokeWidth: 10 },
  { title: "Wetland To Forestland", color: "#ce143d", strokeWidth: 10 },
  { title: "Settlement To Forestland", color: "#d6e7d9", strokeWidth: 10 },
  { title: "Otherland To Forestland", color: "#002117", strokeWidth: 10 },
  { title: "Forestland To Cropland", color: "#ef7d00", strokeWidth: 10 },
  { title: "Grassland To Cropland", color: "#6c3b00", strokeWidth: 10 },
  { title: "Wetland To Cropland", color: "#00aed5", strokeWidth: 10 },
  { title: "Settlement To Cropland", color: "#8C0303", strokeWidth: 10 },
];

const items2 = [
  { title: "Otherland To Cropland", color: "#A6036D", strokeWidth: 10 },
  { title: "Forestland To Grassland", color: "#400D01", strokeWidth: 10 },
  { title: "Cropland To Grassland", color: "#C4D4F2", strokeWidth: 10 },
  { title: "Wetland To Grassland", color: "#D90404", strokeWidth: 10 },
  { title: "Settlement To Grassland", color: "#80D941", strokeWidth: 10 },
  { title: "Otherland To Grassland", color: "#595959", strokeWidth: 10 },
  { title: "Forestland To Wetland", color: "#F2CE1B", strokeWidth: 10 },
  { title: "Cropland To Wetland", color: "#d51317", strokeWidth: 10 },
  { title: "Grassland To Wetland", color: "#8f2e57", strokeWidth: 10 },
]

const items3 = [
  { title: "Land converted to peat extraction", color: "#da4f89", strokeWidth: 10 },
  { title: "Peatland restoration", color: "#6e438c", strokeWidth: 10 },
  { title: "Forestland To Settlement", color: "#164194", strokeWidth: 10 },
  { title: "Cropland To Settlement", color: "#2b7abf", strokeWidth: 10 },
  { title: "Grassland To Settlement", color: "#0042d9", strokeWidth: 10 },
  { title: "Wetland To Settlement", color: "#6caac7", strokeWidth: 10 },
  { title: "Otherland To Settlement", color: "#4a5b58", strokeWidth: 10 },
  { title: "Forestland To Otherland", color: "#f7cebd", strokeWidth: 10 },
  
]

const items4 = [
  { title: "Cropland To Otherland", color: "#af1411", strokeWidth: 10 },
  { title: "Grassland To Otherland", color: "#c9b01e", strokeWidth: 10 },
  { title: "Wetland To Otherland", color: "#371740", strokeWidth: 10 },
  { title: "Settlement To Otherland", color: "#620d00", strokeWidth: 10 },
]


export const LineLegendLandUse = () => {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
        <DiscreteColorLegend
        orientation="horizontal"
        items={items}
         />
         <br/>
         <DiscreteColorLegend
        orientation="horizontal"
        items={items2}
         />
         <br/>
         <DiscreteColorLegend
        orientation="horizontal"
        items={items3}
         />
         <br/>
         <DiscreteColorLegend
        orientation="horizontal"
        items={items4}
         />
    </div>
  );
};

const lucLegendItemsForReport = [
  { title: "Net transport total", color: "#ffdf43",strokeWidth: 10 },
  { title: "Net land-use change total", color: "#ef7d00", strokeWidth: 10 },
  { title: "Net Buildings total", color: "#76918e", strokeWidth: 10 },
  { title: "Net sink total", color: "#ce143d", strokeWidth: 10 },
  { title: "Net balance total", color: "#d6e7d9", strokeWidth: 10 },
  { title: "Net balance total", color: "#000000" },
];

export const LegendLucGenerateReport = () => {
  return (
    <>
      <DiscreteColorLegend orientation="horizontal" items={lucLegendItemsForReport}/>
    </>
  );
};
