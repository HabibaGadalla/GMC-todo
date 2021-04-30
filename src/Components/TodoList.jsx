import React, { Component } from "react";
import { TodoItem } from "./TodoItem";

export class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {console.log("props", this.props)}
        {this.props.tasksList.reverse().map((task, index) => (
          <TodoItem
            task={task}
            key={index}
            removeTask={this.props.thisIsHowYouRemoveTasks}
          />
        ))}
      </>
    );
  }
}
