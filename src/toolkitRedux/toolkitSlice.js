import { createSlice } from "@reduxjs/toolkit";


export const {
  reducer: toolkitTest,
  actions: {setTitle, incrementToolkit}
} = createSlice({
  name: 'tollkit',
  initialState: {
    title: 'tollkit',
    countToolkit: 0,
  },
  reducers: {
    setTitle(state, action){
      state.title = action.payload
    },
    incrementToolkit(state, action){
      state.countToolkit += action.payload
    },
  }
})