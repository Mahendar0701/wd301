import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[];
  onDelete: (index: number) => void;
}
// interface TaskItem {
//   title: string;
// }
// interface State {}

const TaskList = (props: Props) => {
  // const TaskList: React.FC<Props> = ({ tasks, onDelete }) => {
  const list = props.tasks.map((task, idx) => (
    <li>
      <Task
        key={idx}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        onDelete={() => props.onDelete(idx)}
      />
    </li>
  ));
  return (
    <>
      <ul>{list}</ul>
    </>
  );
};
// class TaskList extends React.Component<Props, State> {
//   render() {
//     return this.props.tasks.map((task, idx) => (
//       <Task
//         key={idx}
//         title={task.title}
//         description={task.description}
//         dueDate={task.dueDate}
//       />
//     ));
//   }
// }
export default TaskList;
