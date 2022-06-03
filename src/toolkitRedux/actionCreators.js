import axios from "axios"
import { userFetching, userFetchingError, userFetchingSuccess, addUser,
  editChecked, deleteUser } from "./toolkitUsers";

export const fetchUser = ()=> async (dispatch)=>{
  try {
    dispatch(userFetching());
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('>>>',resp.data);
    dispatch(userFetchingSuccess(resp.data));

  } catch (error) {
    dispatch(userFetchingError())
  }
};

export const addUserCreators = (data)=> (dispatch)=>{
  dispatch(addUser(data));
}
export const editCheckedCreators = (data)=> (dispatch)=>{
  dispatch(editChecked(data));
}
export const deleteUserCreators = (data)=> (dispatch)=>{
  dispatch(deleteUser(data));
}