import React, { Component } from "react";
import "./TodoList.scss";

import TodoItems from "../TodoItems";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(event) {
    event.preventDefault();

    if (this.inputElement.value !== "") {
      const newItem = {
        text: this.inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      console.log("added item: ", newItem);
    }
  }

  removeItem = key => {
    console.log("removeItem", key);
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });

    this.setState({ items: filteredItems });
  };

  handleChildUnmount() {
    this.setState({ renderChild: false });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            ref={el => {
              this.inputElement = el;
            }}
          />
          <button type="submit">add</button>
        </form>
        <TodoItems items={this.state.items} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default TodoList;
