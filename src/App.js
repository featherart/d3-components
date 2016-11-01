import React, { Component } from 'react';
import * as d3 from "d3";
import PieChart from './pie-chart';
import BottomAxis from './bottom-axis';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    // TODO - there must be a better way
    let xScale = d3.scaleLinear().domain([0, 1]).range([0, 300]);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React d3 Components</h2>
          <h4><i>For Funs</i></h4>
        </div>

        <div className="pie-chart">
          <h4> Pie Chart </h4>
          <h8> <p>Works well for comparing relative quantities that can be discrete or continuous.</p>
          <p>Interactivity can be added to compare different scenarios to see how changing one variable will change proportional relationships.</p></h8>
          <div className="pie-wrapper">
            <PieChart />
          </div>
        </div>

        <div className="horizontal-axis">
          <h4> Just an Axis </h4>
          <h8> <p>Prolly Evil</p> </h8>
          <div className="pie-wrapper">
            <svg width="100%" height="200">
              <BottomAxis x={10} y={50} scale={xScale}/>
            </svg>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
