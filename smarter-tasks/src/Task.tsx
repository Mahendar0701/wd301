// import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskProps {
  item: TaskItem;
  removeTask: (task: TaskItem) => void;
}

// interface TaskProp {
//   title: string;
//   description: string;
//   dueDate: string;
// }

const Task = (props: TaskProps) => {
  const { item, removeTask } = props;
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div>
          <a href={`/tasks/${item.id || ""}`}>
            <h2 className="text-base font-bold my-1">{item.title}</h2>
          </a>
          <p className="text-sm text-slate-500">{item.dueDate}</p>
          <p className="text-sm text-slate-500">
            Description: {item.description}
          </p>
        </div>

        <button
          className="deleteTaskButton cursor-pointer flex items-center justify-center h-4 w-4 rounded-full my-5 mr-5"
          onClick={() => removeTask(item)}
        >
          X
        </button>
      </div>
    </div>
  );
};

// const Task = (props: TaskProps) => {
//   const { item, removeTask } = props;
//   return (
//     <div className="TaskItem shadow-md border border-slate-100">
//       <h2 className="text-base font-bold my-1">{item.title}</h2>
//       <p className="text-sm text-slate-500">{item.dueDate}</p>
//       <p className="text-sm text-slate-500">Description: {item.description}</p>
//       <button
//         className="deleteTaskButton px-3 py-1 my-3 bg-gray-200 hover:bg-gray-300 rounded"
//         type="button"
//         onClick={() => removeTask(item)}
//       >
//         Delete task
//       </button>
//     </div>
//   );
// };

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
