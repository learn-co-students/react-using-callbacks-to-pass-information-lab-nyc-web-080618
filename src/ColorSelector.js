import React, { Component } from 'react';

export default class ColorSelector extends Component {

  // this needs an onClick method that will use the Matrix setColor method
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const callback = (str) => { this.props.setSelectedColor(str)}
      return <div key={idx} className="color-swatch" onClick={callback} style={{backgroundColor: str}}/>
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
