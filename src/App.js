import { Component } from "react";
import "./App.css";
import { AddTask } from "./Components/AddTask";
import { TodoList } from "./Components/TodoList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTask: "",
      tasksList: ["this is task 1", "study", "clean"],
    };
  }
  handleChange = (newValue) => {
    console.log("here in handle change", newValue);
    this.setState({ currentTask: newValue });
  };
  handleAddToList = (newTask) => {
    const newTaskList = [...this.state.tasksList, newTask];
    console.log("newTaskList", newTaskList);
    this.setState({ tasksList: newTaskList });
  };
  handleRemoveFromList = (finishedTask) => {
    const newTaskList = this.state.tasksList.filter(
      (task) => task !== finishedTask
    );
    this.setState({ tasksList: newTaskList });
  };
  render() {
    return (
      <div className="App">
        <AddTask
          value={this.state.currentTask}
          thisIsHowYouChange={this.handleChange}
          thisIsHowYouAddTasks={this.handleAddToList}
        />
        <TodoList
          tasksList={this.state.tasksList}
          thisIsHowYouRemoveTasks={this.handleRemoveFromList}
        />
      </div>
    );
  }
}

export default App;
