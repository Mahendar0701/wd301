/* eslint-disable react/prop-types */
import "./TaskCard.css";

const TaskCard = (props) => {
  console.log(props);
  let taskDate;
  if (props.dueDate) {
    taskDate = `Due date: ${props.dueDate}`;
  }
  if (props.completedAtDate) {
    taskDate = `Completed on: ${props.completedAtDate}`;
  }
  return (
    <div className="TaskItem w-full p-5">
      <h2 className="text-xl font-bold mb-2">{props.title}</h2>
      <p>{taskDate}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
