import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducer";
import thunk from 'redux-thunk';
import { store } from "../../toolkitRedux";
const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
];
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);
// const store = createStore(rootReducer, initialState, composedEnhancers);

const UseRedux = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>);
};
export default UseRedux;
