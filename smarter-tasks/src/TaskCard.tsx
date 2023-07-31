import "./TaskCard.css";

interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

const TaskCard = (props: TaskCardProps) => {
  let taskDate: string;
  taskDate = "";
  if (props.dueDate) {
    taskDate = `Due on: ${props.dueDate}`;
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
