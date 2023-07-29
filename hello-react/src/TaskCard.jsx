/* eslint-disable react/prop-types */
import "./TaskCard.css";

const TaskCard = (props) => {
  console.log(props);
  let taskDate = null;
  if (props.dueDate) {
    taskDate = <p>Due on: {props.dueDate}</p>;
  }
  if (props.completedAtDate) {
    taskDate = <p>Completed on: {props.completedAtDate}</p>;
  }
  return (
    <div className="TaskItem w-full p-5">
      <h2 className="text-xl font-bold mb-2">{props.title}</h2>
      {taskDate}
      <p>Assignee:{props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
