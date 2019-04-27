import React, { Component } from "react";
import propTypes from "prop-types";

import "./Heading.scss";

class Heading extends Component {
  static propTypes = {
    text: propTypes.string
  };

  handleChildUnmount() {
    this.setState({ renderChild: false });
  }

  render() {
    return <h1>{this.props.text}</h1>;
  }
}

export default Heading;
