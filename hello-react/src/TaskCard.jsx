/* eslint-disable react/prop-types */
import "./TaskCard.css";

const TaskCard = (props) => {
  console.log(props);
  return (
    <div className="TaskItem w-full p-5">
      <h2 className="text-xl font-bold mb-2">{props.title}</h2>
      {props.status === "done" ? (
        <>
          <p>Completed on: {props.completedAtDate}</p>
        </>
      ) : (
        <p>Due on: {props.dueDate}</p>
      )}
      <p>Assignee:{props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
