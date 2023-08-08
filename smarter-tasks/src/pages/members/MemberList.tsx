import React, { useEffect } from "react";
import { fetchMembers } from "../../context/members/actions";

// So, let's import the useProjectsDispatch custom hook.
import { useMembersDispatch } from "../../context/members/context";

// I'll import the ProjectListItems component from the same folder.
// This I'll define next.
import MemberListItems from "./MemberListItems";
const MemberList: React.FC = () => {
  // I'll define a new constant called dispatchProjects,
  // to call the useProjectsDispatch() hook.
  const dispatchMembers = useMembersDispatch();

  useEffect(() => {
    // And I'll pass the `dispatchProjects` to `fetchProjects` function.
    fetchMembers(dispatchMembers);
  }, []);
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      {/*To keep this file clean, I'll move all the logic to access the projects 
       from our app-state, to a new component ProjectListItems */}
      <MemberListItems />
    </div>
  );
};
export default MemberList;

// import React, { useEffect, useReducer } from "react";
// import { API_ENDPOINT } from "../../config/constants";
// interface State {
//   projects: Project[];
//   isLoading: boolean;
// }
// interface Action {
//   type: string;
//   payload?: any;
// }
// const reducer = (state: State, action: Action): State => {
//   // >>> Dialogue one: In switch statement, we will check the action type and return corresponsing state, like we were doing in the if-statements.
//   switch (action.type) {
//     case "API_CALL_START":
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case "API_CALL_END":
//       return {
//         ...state,
//         isLoading: false,
//         projects: action.payload,
//       };
//     case "API_CALL_ERROR":
//       return {
//         ...state,
//         isLoading: true,
//       };
//     default:
//       return state;
//   }
// };
// const ProjectList: React.FC = () => {
//   //   const [projects, setProjects] = useState<Project[]>([]);
//   //   const [isLoading, setIsLoading] = useState<boolean>(false);
//   //   useEffect(() => {
//   //     // Fetch the list of projects here
//   //     fetchProjects();
//   //   }, []);
//   const [state, dispatch] = useReducer(reducer, {
//     projects: [],
//     isLoading: false,
//   });

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     const token = localStorage.getItem("authToken") ?? "";

//     try {
//       //   setIsLoading(true);
//       dispatch({ type: "API_CALL_START" });
//       const response = await fetch(`${API_ENDPOINT}/projects`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = await response.json();
//       dispatch({ type: "API_CALL_END", payload: data });
//       //   setProjects(data);
//       //   setIsLoading(false);
//     } catch (error) {
//       console.log("Error fetching projects:", error);
//       dispatch({ type: "API_CALL_ERROR" });
//       //   setIsLoading(false);
//     }
//   };
//   return (
//     <div>
//       {state.isLoading ? (
//         <div>Loading...</div> // You can replace this with a progress bar component
//       ) : (
//         <div className="grid gap-4 grid-cols-4 mt-5">
//           {state.projects.map((project) => (
//             <div
//               key={project.id}
//               className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//             >
//               <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
//                 {project.name}
//               </h5>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
// export default ProjectList;
