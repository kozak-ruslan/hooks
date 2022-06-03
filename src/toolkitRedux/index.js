import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { toolkitTest } from './toolkitSlice';
import { toolkitUsers } from './toolkitUsers';

const rootReducer = combineReducers({
  toolkit: toolkitTest,
  toolkitUsers
})

export const store = configureStore({
  reducer: rootReducer,
})
