import { createSlice } from "@reduxjs/toolkit";


export const {
  reducer: toolkitUsers,
  actions: {userFetching, userFetchingSuccess, userFetchingError, addUser, editChecked, deleteUser}
} = createSlice({
  name: 'tollkit',
  initialState: {
    title: 'tollkit USERS',
    loading: false,
    users: [],
    isError: false
  },
  reducers: {
    userFetching(state){
      state.loading = true
    },
    userFetchingSuccess(state, action){
      console.log('action', action)
      state.loading = false;
      state.users = action.payload.map((el)=> {return {...el, isChecked:false}} );
    },
    userFetchingError(state, action){
      state.loading = false;
      state.isError = true;
    },
    addUser(state, action){
      state.users.push(action.payload)
    },
    editChecked(state, action){
      console.log('toolkitUsers:', action)
      state.users = state.users.map((el)=> {
        if(el.id === action.payload){
          el.isChecked = !el.isChecked
        }
        return el;
      })
    },
    deleteUser(state, action){
      console.log('deleteUser:', action.payload)
      state.users = state.users.filter((el)=> el.id !== action.payload)
    }
  }
})