/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
import { useProjectsState } from "../../context/projects/context";
import { Link } from "react-router-dom";

export default function ProjectListItems() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const state: any = useProjectsState();
  const { projects, isLoading, isError, errorMessage } = state;
  console.log(projects);

  console.log(projects); //Console Log Statement for debugging
  debugger;

  if (projects.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  // if (projects.length === 0) {
  //   throw Error("Error!!!");
  // }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {projects.map((project: any) => (
        <Link
          key={project.id}
          to={`${project.id}`}
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {project.name}
          </h5>
        </Link>
      ))}
    </>
  );
}
