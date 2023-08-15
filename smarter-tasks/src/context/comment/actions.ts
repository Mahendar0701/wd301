// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { API_ENDPOINT } from "../../config/constants";

// export const addComment = async (
//   dispatch: any,
//   project_id: string,
//   task_id: string,
//   comment: string
// ) => {
//   try {
//     const token = localStorage.getItem("authToken") ?? "";
//     const response = await fetch(
//       `${API_ENDPOINT}/projects/${project_id}/tasks/${task_id}/comments`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },

//         body: JSON.stringify({ description: comment }),
//       }
//     );
//     if (!response.ok) {
//       throw new Error("Failed to create comment");
//     }
//     const data = await response.json();
//     if (data.errors && data.errors.length > 0) {
//       return { ok: false, error: data.errors[0].message };
//     }

//     dispatch({ type: "ADD_COMMENT_SUCCESS", payload: data });

//     getComments(dispatch, project_id, task_id);

//     return { ok: true };
//   } catch (error) {
//     return { ok: false, error };
//   }
// };

// export const getComments = async (
//   dispatch: any,
//   project_id: string,
//   task_id: string
// ) => {
//   const token = localStorage.getItem("authToken") ?? "";

//   try {
//     dispatch({ type: "FETCH_COMMENTS_REQUEST" });
//     const response = await fetch(
//       `${API_ENDPOINT}/projects/${project_id}/tasks/${task_id}/comments`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     const data = await response.json();
//     dispatch({ type: "FETCH_COMMENTS_SUCCESS", payload: data });
//   } catch (error) {
//     console.log("Error fetching projects:", error);
//     dispatch({
//       type: "FETCH_COMMENTS_FAILURE",
//       payload: "Unable to load comments",
//     });
//   }
// };

import { API_ENDPOINT } from "../../config/constants";
import { CommentAvailableAction, CommentsDispatch } from "./types";

//add comment
export const addComment = async (
  dispatch: CommentsDispatch,
  project_id: string,
  task_id: string,
  comment: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    const response = await fetch(
      `${API_ENDPOINT}/projects/${project_id}/tasks/${task_id}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ description: comment }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create comment");
    }

    const data = await response.json();
    console.log("fetch add ", data);
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }

    // dispatch({ type: "ADD_COMMENT_SUCCESS", payload: data });

    dispatch({
      type: CommentAvailableAction.CREATE_COMMENT_SUCCESS,
      payload: data,
    });
    fetchComments(dispatch, project_id, task_id);
  } catch (error) {
    console.error("Error while adding:", error);
    dispatch({
      type: CommentAvailableAction.CREATE_COMMENT_FAILURE,
      payload: "Unable to create comment",
    });
  }
};

//fetch comments
export const fetchComments = async (
  dispatch: CommentsDispatch,
  project_id: string,
  task_id: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentAvailableAction.FETCH_COMMENTS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${project_id}/tasks/${task_id}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    const data = await response.json();
    console.log("fetch data ", data);
    dispatch({
      type: CommentAvailableAction.FETCH_COMMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Error while fetching", error);
    dispatch({
      type: CommentAvailableAction.FETCH_COMMENTS_FAILURE,
      payload: "unable to load comments",
    });
  }
};
