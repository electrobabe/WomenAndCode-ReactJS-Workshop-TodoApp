import React, { Component } from "react";
import propTypes from "prop-types";

class TodoItems extends Component {
  static propTypes = {
    items: propTypes.array,
    removeItem: propTypes.func
  };

  renderItem = item => {
    return (
      <li key={item.key}>
        {item.text} <i onClick={() => this.props.removeItem(item.key)}>x</i>
      </li>
    );
  };

  handleChildUnmount() {
    this.setState({ renderChild: false });
  }

  render() {
    const listItems = this.props.items.map(this.renderItem);
    return <ul>{listItems}</ul>;
  }
}

export default TodoItems;