import React, { Component } from "react";
import "./Dice.css";

class Dice extends Component {
  render() {
    return (
      <i
        className={`dice fas fa-dice-${this.props.face} ${
          this.props.rolling ? "rolling" : ""
        }`}
      />
    );
  }
}

export default Dice;
