export type User = {
  id: number;
  email: string;
  name: string;
};

export type Comment = {
  id: number;
  description: string;
  createdAt: string;
  user: User;
  owner: number;
  task_id: number;
};

export type CommentsPayload = Omit<
  Comment,
  "id" | "createdAt" | "user" | "task_id"
>;

export interface CommentsState {
  comments: Comment[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export enum CommentAvailableAction {
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",
  CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
  CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
  CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",
}
export type CommentsActions =
  | { type: CommentAvailableAction.FETCH_COMMENTS_REQUEST }
  | {
      type: CommentAvailableAction.FETCH_COMMENTS_SUCCESS;
      payload: Comment[];
    }
  | { type: CommentAvailableAction.FETCH_COMMENTS_FAILURE; payload: string }
  | { type: CommentAvailableAction.CREATE_COMMENT_REQUEST }
  | { type: CommentAvailableAction.CREATE_COMMENT_SUCCESS; payload: Comment }
  | { type: CommentAvailableAction.CREATE_COMMENT_FAILURE; payload: string };

export type CommentsDispatch = React.Dispatch<CommentsActions>;
