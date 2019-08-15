import React, { Component } from "react";
import LineChart from "react-linechart";
import dataPredict from "./dataPredict.json";

class Predict extends Component {
  render() {
    //data gồm id, name , color, points
    const data = [
      {
        color: "steelblue",
        points: dataPredict
      }
    ];

    return (
      <div>
        <div className='Predict'>
          <h1>My Predict LineChart</h1>
          <LineChart
            width={600}
            height={400}
            data={data}
            xLabel='Date'
            yLabel='Price'
            xMin='2016-05-01'
            xMax='2016-12-01'
            yMin='0'
            yMax='100'
            interpolate='Linear'
            isDate={true}
          />
        </div>
      </div>
    );
  }
}

export default Predict;
