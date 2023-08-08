import React from "react";

// First, I'll import the useProjectsState custom hook to access projects state.
import { useMembersState } from "../../context/members/context";
import { SubmitHandler } from "react-hook-form";
import { useMembersDispatch } from "../../context/members/context";
import { removeMember } from "../../context/members/actions";

type Inputs = {
  id: number;
};
export default function MemberListItems() {
  // I'll define a new constant called `state`, to call the useProjectsState() hook,
  // and get access to projects state.
  const state: any = useMembersState();

  const dispatchMembers = useMembersDispatch();

  const { Members, isLoading, isError, errorMessage } = state;
  console.log(Members);
  // console.log(user);

  if (Members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { id } = data;

    // await removeUser(dispatchUsers, 1278);

    const response = await removeMember(dispatchMembers, { id });

    // Then depending on response, I'll either close the modal...
    if (response.ok) {
      console.log("Removeed member");
    } else {
      // Or I'll set the error.
      console.log(" not Removeed member");
    }
  };

  return (
    <>
      {Members.map((user: any) => (
        <div
          key={user.id}
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            Name : {user.name}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            EmailId : {user.email}
          </h5>
          <button
            type="submit"
            onClick={() => onSubmit({ id: user.id })}
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
