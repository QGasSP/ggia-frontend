import React from "react";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  MarkSeries,
} from "react-vis";
import "../css/baselinebarchart.css";

/**
 * Barchart UI component
 * @return {}
 */

// export const BaselineBarchart = () => (
//     <div>
//         <XYPlot>
//             <VerticalBarSeries
//                 data={[
//                 { y: 0.044888566666666664, x: 'Motor coaches, buses and trrolley buses' },
//                 { y: 0.0001947,            x: 'Metro'                                   },
//                 { y: 0.006142934963868816, x: 'Passenger trains'                        },
//                 { y: 0.1345,               x: 'Road freight'                            },
//                 { y: 1.430907142857143,    x: 'Passenger cars'                          },
//                 { y: 0.0027191999999999997,x: 'Tram, light train'                       },
//                 { y: 0.1717,               x: 'Rail (freight)'                          },
//                 { y: 0.000667,             x: 'Inland waterways freight'                },
//                 ]}
//                 style={{}}
//             />
//         </XYPlot>
//     </div>
//   );

const dataList = [
  { y: 0.044888566666666664, x: "Motor coaches, buses and trolley buses" },
  { y: 0.0001947, x: "Metro" },
  { y: 0.006142934963868816, x: "Passenger trains" },
  { y: 0.1345, x: "Road freight" },
  { y: 1.430907142857143, x: "Passenger cars" },
  { y: 0.0027191999999999997, x: "Tram, light train" },
  { y: 0.1717, x: "Rail (freight)" },
  { y: 0.000667, x: "Inland waterways freight" },
];

class BaselineBarchart extends React.Component {
  render() {
    return (
      <XYPlot xType="ordinal" width={1400} height={312} xDistance={200}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <VerticalBarSeries className="BaselineBarchart" data={dataList} />
        <XAxis />
        <YAxis title="tCO2e/resident" />
      </XYPlot>
    );
  }
}

export default BaselineBarchart;
