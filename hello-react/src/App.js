/* eslint-disable no-unused-vars */
import React from "react";
import TaskCard from "./TaskCard";
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "mx-10 my-5" },
            React.createElement("h1", { className: "text-2xl font-bold my-2 mx-32" }, "Smarter Tasks"),
            React.createElement("p", { className: "font-bold text-sm mx-32 mb-3" }, "Project: Graduation FInal Year Project (Revamp College Website)"),
            React.createElement("div", { className: "flex justify-center" },
                React.createElement("div", { className: "flex-1 w-36 px-10 border-2 rounded-xl border-grey-900 p-5 ml-32" },
                    React.createElement("h1", { className: "text-2xl font-bold text-center pb-5" }, "pending"),
                    React.createElement(TaskCard, { title: "Build the website with static content", dueDate: "10th April", assigneeName: "Rohit S" }),
                    React.createElement(TaskCard, { title: "Add blog", dueDate: "22nd March", assigneeName: "Rohit M" }),
                    React.createElement("button", { className: "bg-gray-200 px-5 rounded-md" }, "+ New Task")),
                React.createElement("div", { className: "flex-1 w-36 px-10 border-2 rounded-xl border-grey-900 p-5 ml-14 mr-32" },
                    React.createElement("h1", { className: "text-2xl font-bold bold text-center pb-5" }, "done"),
                    React.createElement(TaskCard, { title: "Design the mockup", completedAtDate: "10th April", assigneeName: "Rohit M" }),
                    React.createElement(TaskCard, { title: "Get approval from principal", completedAtDate: "20th April", assigneeName: "Ajay S" }))))));
}
export default App;
