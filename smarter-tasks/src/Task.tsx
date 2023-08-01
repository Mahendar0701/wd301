// import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";

// interface TaskProp {
//   title: string;
//   description: string;
//   dueDate: string;
// }

const Task = (props: TaskItem) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
      <button
        className="deleteTaskButton px-3 py-1 my-3 bg-gray-200 hover:bg-gray-300 rounded"
        type="button"
        onClick={props.onDelete}
      >
        Delete task
      </button>
    </div>
  );
};

// class Task extends React.Component<TaskProp> {
//   render() {
//     // return (
//     //   <div className="TaskItem shadow-md border border-slate-100">
//     //     <h2 className="text-base font-bold my-1">{this.props.title}</h2>

//     //     <p className="text-sm text-slate-500">
//     //       Description: {this.props.description}
//     //     </p>
//     //     <p className="text-sm text-slate-500">Due Date: {this.props.dueDate}</p>
//     //   </div>
//     // );
//     return (
//       <div className="TaskItem shadow-md border border-slate-100">
//         <h2 className="text-base font-bold my-1">{this.props.title}</h2>
//         <p className="text-sm text-slate-500">{this.props.dueDate}</p>
//         <p className="text-sm text-slate-500">
//           Description: {this.props.description}
//         </p>
//       </div>
//     );
//   }
// }

export default Task;
