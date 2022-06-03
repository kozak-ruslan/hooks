import {
  ADD_USER,
  LOAD_DATA_START,
  LOAD_DATA_SUCCESS,
  REMOVE_USER,
  SET_FILTER,
} from '../actions/users';

const initialState = {
  title: 'Hello Hooks. Initial State Users',
  usersAPI: [],
  filters: {
    id: null,
    name: '',
  },
  filteredUsers: [],
};

export const usersReducer = (state = initialState, action) => {
  const {
    filters: { name: filterName },
  } = state;
  switch (action.type) {
    case LOAD_DATA_START:
      return state;
    case LOAD_DATA_SUCCESS:
      const { users } = action;
      let filteredUsers;
      if (filterName) {
        filteredUsers = users.filter(({ name }) => name === filterName);
      } else {
        filteredUsers = [...users];
      }
      console.log(`filteredUsers: ${filteredUsers}`);
      return {
        ...state,
        usersAPI: [...users],
        filteredUsers,
      };
    case 'EDIT_TITLE':
      return {
        ...state,
        title: 'НОВИЙ ЗАГОЛОВОК',
      };
    case ADD_USER:
      const { user } = action;
      const userObjADD = [user, ...state.usersAPI];
      console.log(userObjADD);
      return {
        ...state,
        usersAPI: userObjADD,
        filteredUsers: filterName
          ? userObjADD.filter(({ name }) => name === filterName)
          : [...userObjADD],
      };
    case REMOVE_USER:
      const { userId } = action;
      const userObjREMOVE = state.usersAPI.filter(({ id }) => id !== userId);
      return {
        ...state,
        usersAPI: [...userObjREMOVE],
        filteredUsers: filterName
          ? userObjREMOVE.filter(({ name }) => name === filterName)
          : [...userObjREMOVE],
      };
    case SET_FILTER:
      const { fName } = action;
      const userObjFilter = fName
        ? state.usersAPI.filter(({ name }) => name === fName)
        : state.usersAPI;
      console.log(userObjFilter);
      return {
        ...state,
        filters: {
          name: fName,
        },
        filteredUsers: [...userObjFilter],
      };

    default:
      return state;
  }
};
