// import React from "react";

// import ProjectDetails from "./ProjectDetails";
import { TasksProvider } from "../../context/task/context";

import React, { Suspense } from "react";
const ProjectDetails = React.lazy(() => import("./ProjectDetails"));
import ErrorBoundary from "../../components/ErrorBoundary";

import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProjectDetailsIndex: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <TasksProvider>
        <ErrorBoundary>
          <Suspense
            fallback={<div className="suspense-loading">{t("Loading...")}</div>}
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
