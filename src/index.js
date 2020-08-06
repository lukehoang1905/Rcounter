import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  count: 0,
  boxes: [],
  allBackground: [],
};

function reducer(state = initialState, action) {
  //switch case
  switch (action.type) {
    case "INCREMENT":
      state.count++;
      state.boxes.push("");
      break;
    case "DECREMENT":
      if (state.count <= 0) {
        state.count = 0;
      } else {
        state.count--;
        state.boxes.pop();
      }
      break;
    case "ALLBACKGROUND":
      state.allBackground = action.payload;
      break;
    case "SINGLECOLOR":
      state.boxes[action.payload.id] = action.payload.color;
      break;
    default:
      console.log("aa");
      break;
  }
  console.log("state?", state);
  return { ...state }; // copy value of state, and make new state
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
