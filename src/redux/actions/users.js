export const LOAD_DATA_START = 'LOAD_DATA_START';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const ADD_USER = 'ADD_USER';

export const loadData = () => (dispatch, getState) => {
  dispatch({ type: LOAD_DATA_START })
  fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => 
      dispatch({
        type: LOAD_DATA_SUCCESS,
        users: json
      }));
   
};

export const addUsers = (user)=>{
  return {type: ADD_USER, user}
}