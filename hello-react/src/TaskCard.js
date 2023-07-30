/* eslint-disable react/prop-types */
import React from "react";
import "./TaskCard.css";
const TaskCard = (props) => {
    let taskDate;
    if (props.dueDate) {
        taskDate = `Due date: ${props.dueDate}`;
    }
    if (props.completedAtDate) {
        taskDate = `Completed on: ${props.completedAtDate}`;
    }
    return (React.createElement("div", { className: "TaskItem w-full p-5" },
        React.createElement("h2", { className: "text-xl font-bold mb-2" }, props.title),
        React.createElement("p", null, taskDate),
        React.createElement("p", null,
            "Assignee: ",
            props.assigneeName)));
};
export default TaskCard;
