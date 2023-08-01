import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: "",
    };
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };

    // this.props.addTask(newTask);
    // this.setState({ title: "", description: "", dueDate: "" });

    if (newTask.title.trim() !== "" && newTask.dueDate.trim() !== "") {
      this.props.addTask(newTask);
      this.setState({ title: "", description: "", dueDate: "" });
    }
  };

  inputRef = React.createRef<HTMLInputElement>();

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };

  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDate: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.addTask}>
        <label htmlFor="todoTitle">Task title : </label>
        <input
          id="todoTitle"
          className="border border-slate-400 my-2 ml-7"
          type="text"
          value={this.state.title}
          onChange={this.titleChanged}
          // required
        />
        <br />
        <label htmlFor="todoDescription">Description : </label>
        <input
          id="todoDescription"
          className="border border-slate-400 my-2 ml-2"
          type="text"
          value={this.state.description}
          onChange={this.descriptionChanged}
        />
        <br />
        <label htmlFor="todoDueDate">Due date : </label>
        <input
          id="todoDueDate"
          className="border border-slate-400 my-2 ml-6"
          type="text"
          value={this.state.dueDate}
          onChange={this.dueDateChanged}
          // required
        />
        <br />
        <button
          id="addTaskButton"
          className="px-3 py-1 my-3 bg-gray-200 hover:bg-gray-300 rounded"
          type="submit"
        >
          Add item
        </button>
      </form>
    );
  }
}
export default TaskForm;
