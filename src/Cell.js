import React, { Component } from "react";

export default class Cell extends Component {
  state = {
    color: this.props.color
  };

  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    );
  }
}
