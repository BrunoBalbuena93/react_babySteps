import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// Slice for the counter handling states
const counterSlicer = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toogleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Slice for the authentication stuff
const authSlicer = createSlice({
  name: "authentication",
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// When using the 'createSlice' from reduxjs toolkit, it substitutes this function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + action.amount };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - action.amount };
  }
  return state;
};

// Regular Redux
const regularReduxStore = createStore(counterReducer);
const store = configureStore({
  reducer: { counter: counterSlicer.reducer, auth: authSlicer.reducer },
});

export const counterActions = counterSlicer.actions;
export const authActions = authSlicer.actions;
export default store;
