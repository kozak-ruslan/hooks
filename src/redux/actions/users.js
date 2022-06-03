export const LOAD_DATA_START = 'LOAD_DATA_START';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const SET_FILTER = 'SET_FILTER';

export const loadData = () => (dispatch, getState) => {
  dispatch({ type: LOAD_DATA_START });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) =>
      {console.log('users', json);
      return dispatch({
        type: LOAD_DATA_SUCCESS,
        users: json,
      })}
    );
};

export const addUsers = (user) => {
  return { type: ADD_USER, user };
};

export const removeUser = (userId) => {
  return { type: REMOVE_USER, userId };
};

export const setFilter = (fName) => {
  console.log(fName);
  return { type: SET_FILTER, fName };
};
