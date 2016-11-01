import React, { Component } from 'react';
import * as d3 from "d3";

class BottomAxis extends Component {
  componentDidMount() { this.renderAxis() }

  componentDidUpdate() { this.renderAxis() }
  renderAxis() {
    let axis = d3.axisBottom(this.props.scale);

    d3.select(this.refs.wrapper).call(axis);
  }
  render() {
    const transform = `translate(${this.props.x}, ${this.props.y})`;
    return <g ref="wrapper" transform={transform}></g>
  }
}

export default BottomAxis;
