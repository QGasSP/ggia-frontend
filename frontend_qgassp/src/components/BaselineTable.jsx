import React from "react";
import "../css/baselinetable.css";

class BaselineTable extends React.Component {
  constructor(props) {
    super(props); // since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      // state is by default an object
      transportEmission: [
        { transport: "Buses", perResident: 0.044888566666666664 },
        { transport: "Metro", perResident: 0.0001947 },
        { transport: "Passenger trains", perResident: 0.006142934963868816 },
        { transport: "Road freight", perResident: 0.1345 },
        { transport: "Passenger cars", perResident: 1.430907142857143 },
        { transport: "Tram, light train", perResident: 0.0027191999999999997 },
        { transport: "Rail freight", perResident: 0.1717 },
        { transport: "Inland waterways freight", perResident: 0.000667 },
      ],
    };
  }

  renderTableHeader() {
    const header = Object.keys(this.state.transportEmission[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.state.transportEmission.map((transportEmission) => {
      const { id, transport, perResident } = transportEmission; // destructuring
      return (
        <tr key={id}>
          <td>{transport}</td>
          <td>{perResident}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Baseline 2021</h1>
        <table id="transportEmission">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}
export default BaselineTable;
