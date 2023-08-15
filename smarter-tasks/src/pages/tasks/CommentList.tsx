/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useCommentsState } from "../../context/comment/context";

import { useMembersState } from "../../context/members/context";

const CommentList = () => {
  const commentState = useCommentsState();
  const memberState = useMembersState();

  const { comments, isLoading, isError, errorMessage } = commentState;
  console.log(comments);
  const getUserName = (userid: number) => {
    const username = memberState?.Members?.filter(
      (member) => member.id === userid
    )?.[0];
    return username?.name;
  };

  if (comments.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const Date_formater = (isoDate: string) => {
    const dateObj = new Date(isoDate);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <h1 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">
        comments:
      </h1>
      {comments.map((comment) => (
        <div key={comment.createdAt} className="comment flex justify-between">
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">
            {getUserName(comment.owner)}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">
            {Date_formater(comment.createdAt)}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">
            {comment.description}
          </h5>
        </div>
      ))}
    </>
  );
};

export default CommentList;
