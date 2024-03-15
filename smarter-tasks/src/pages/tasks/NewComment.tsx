import React from "react";
import { addComment } from "../../context/comment/actions";
import { useCommentsDispatch } from "../../context/comment/context";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { CommentsPayload } from "../../context/comment/types";
import { useTranslation } from "react-i18next";

const NewComment = () => {
  const { t } = useTranslation();
  const { projectID, taskID } = useParams();
  const commentDispatch = useCommentsDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentsPayload>({});
  const onSubmit: SubmitHandler<CommentsPayload> = async (data) => {
    try {
      await addComment(
        commentDispatch,
        projectID ?? "",
        taskID ?? "",
        data.description
      );
    } catch (error) {
      console.log("adding comment failed", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Enter Comment..."
            id="commentBox"
            autoFocus
            {...register("description", { required: true })}
            className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue `}
          />
        </div>
        <button
          type="submit"
          id="addCommentBtn"
          className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4"
        >
          Add {t("Comments")}
        </button>
      </form>
    </div>
  );
};

export default NewComment;
