import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
  }

  state = {
    selectedColor: ""
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor = {this.passColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  handleSelection = (color) => {
    this.setState({
      selectedColor: color
    },()=>console.log(this.state))
  }

  passColor = () => {
    console.log(this.state.selectedColor);
    return this.state.selectedColor
  }


  render() {
    return (
      <div id="app">
        <ColorSelector handleSelection = {this.handleSelection} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
