import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeContext } from "./context/theme";

import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";
import { CommentsProvider } from "./context/comment/context";
import "./i18n";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full mx-auto py-2 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <ProjectsProvider>
        <MembersProvider>
          <CommentsProvider>
            <RouterProvider router={router} />
          </CommentsProvider>
        </MembersProvider>
      </ProjectsProvider>
    </div>
  );
  // return (
  //   <div
  //     className={`h-screen w-full mx-auto py-2 ${
  //       theme === "dark" ? "dark" : ""
  //     }`}
  //   >
  //     {theme}
  //     <RouterProvider router={router} />
  //   </div>
  // );
};

export default App;

// import React from "react";
// import {
//   createBrowserRouter,
//   // Navigate,
//   RouterProvider,
// } from "react-router-dom";
// import Notfound from "./pages/Notfound";
// import ProtectedRoute from "./ProtectedRoute";
// import Signup from "./pages/signup";
// import Signin from "./pages/signin";
// import Dashboard from "./pages/dashboard";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Signup />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/signin",
//     element: <Signin />,
//   },
//   {
//     path: "/notfound",
//     element: <Notfound />,
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <ProtectedRoute>
//         <Dashboard />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "*",
//     element: <Notfound />,
//   },
// ]);

// const App = () => {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// };

// export default App;
