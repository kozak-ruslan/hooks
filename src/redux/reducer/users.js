import { ADD_USER, LOAD_DATA_START, LOAD_DATA_SUCCESS } from "../actions/users";

const initialState = {
  title: "Hello Hooks. Initial State Users",
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_START:
      return state
    case LOAD_DATA_SUCCESS:
      const {users} = action
      return {
        ...state,
        users: [...users],
      };
    case "EDIT_TITLE":
      return {
        ...state,
        title: "НОВИЙ ЗАГОЛОВОК",
      };
    case ADD_USER:
      const {user} = action
      return {
        ...state,
        users: [...state.users, user],
      };

    default:
      return state;
  }
};
