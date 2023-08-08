interface Member {
  id: number;
  name: string;
  email: string;
  // organization_id: number;
}
// Now, I'll rename the interface in the `ProjectList` component from `State`
// to `ProjectsState`. And I'll also export the interface.

export interface MembersState {
  Members: Member[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}
// Next, I'll comment the `Action` interface

// interface Action {
//   type: string;
//   payload?: any;
// }

// Then I'll define a new type called `ProjectsActions`
// for all possible combimations of action objects.

export type MembersActions =
  | { type: "FETCH_MEMBERS_REQUEST" }
  | { type: "FETCH_MEMBERS_SUCCESS"; payload: Member[] }
  | { type: "FETCH_MEMBERS_FAILURE"; payload: string }
  | { type: "ADD_MEMBERS_SUCCESS"; payload: Member }
  | { type: "DELETE_MEMBER_SUCCESS"; payload: Member[] };

// Next, I'll update reducer function accordingly with newly defined types

// export const reducer = (state: State, action: Action): State => {

// Define the initial state
export const initialState: MembersState = {
  Members: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

// Then we will pass the `initialState` object to the `state` of reducer function.

export const reducer = (
  state: MembersState = initialState,
  action: MembersActions
): MembersState => {
  switch (action.type) {
    case "FETCH_MEMBERS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_MEMBERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        Members: action.payload,
      };
    case "FETCH_MEMBERS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case "ADD_MEMBERS_SUCCESS":
      // Here I'll insert new new project object, which is coming in this
      // `action.payload`, to the `projects` array present in state.
      return { ...state, Members: [...state.Members, action.payload] };

    case "DELETE_MEMBER_SUCCESS":
      // Here I'll insert new new project object, which is coming in this
      // `action.payload`, to the `projects` array present in state.

      // return { ...state, Members: updatedMembers };
      // return { ...state, Members: [...state.Members, action.payload] };
      return {
        ...state,
        isLoading: false,
        Members: action.payload,
      };
    default:
      return state;
  }
};
