import React, { Component } from "react";
import propTypes from "prop-types";

class TodoItems extends Component {
  static PropTypes = {
    items: propTypes.array
  };

  renderItem = item => {
    return <li key={item.key}>{item.text}</li>;
  };

  render() {
    const listItems = this.props.items.map(this.renderItem);
    return <ul>{listItems}</ul>;
  }
}

export default TodoItems;
