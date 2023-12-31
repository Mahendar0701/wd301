// import React from "react";

// import ProjectDetails from "./ProjectDetails";
import { TasksProvider } from "../../context/task/context";

import React, { Suspense } from "react";
const ProjectDetails = React.lazy(() => import("./ProjectDetails"));
import ErrorBoundary from "../../components/ErrorBoundary";

import { Outlet } from "react-router-dom";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <>
      <TasksProvider>
        <ErrorBoundary>
          <Suspense
            fallback={<div className="suspense-loading">Loading...</div>}
          >
            <ProjectDetails />
          </Suspense>
        </ErrorBoundary>
        <Outlet />
      </TasksProvider>
    </>
  );
};

export default ProjectDetailsIndex;
