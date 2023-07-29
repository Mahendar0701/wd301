/* eslint-disable no-unused-vars */
import "./App.css";

import TaskCard from "./TaskCard";

function App() {
  return (
    <>
      <div className="ml-36 my-5">
        <h1 className="text-2xl font-bold my-2">Smarter Tasks</h1>
        <span className="text-xl font-medium">Project: </span>
        <span className="text-xl">
          Graduation Final Year Project(Revamp College Website)
        </span>
      </div>
      <div className="flex justify-center">
        <div className="flex-1 w-36 px-10 border-2 rounded-xl border-grey-900 p-5 ml-32">
          <h1 className="text-2xl font-bold text-center pb-5">Pending</h1>
          <TaskCard
            title="Build the website with static content"
            dueDate="10th April"
            assigneeName="Rohit S"
          />
          <TaskCard
            title="Add blog"
            dueDate="22nd March"
            assigneeName="Rohit M"
          />
          <button className="bg-gray-200 px-5 rounded-md">+ New Task</button>
        </div>

        <div className="flex-1 w-36 px-10 border-2 rounded-xl border-grey-900 p-5 ml-14 mr-32">
          <h1 className="text-2xl font-bold bold text-center pb-5">Done</h1>
          <TaskCard
            title="Design the mockup"
            completedAtDate="10th April"
            assigneeName="Rohit M"
          />
          <TaskCard
            title="Get the approval from principal"
            completedAtDate="20th April"
            assigneeName="Ajoy S"
          />
        </div>
      </div>
    </>
  );
}

export default App;
