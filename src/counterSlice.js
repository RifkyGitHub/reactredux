import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,

  reducers: {
    increment(state, action) {
      return state + (action.payload ?? 1);
    },
    decrement(state, action) {
      return state - (action.payload ?? 1);
    },
    multiply(state, action) {
      return state * action.payload;
    },
  },

  selectors: {
    getDoubleCounter(state) {
      return state * 2;
    },
  },
});

export const { increment, decrement, multiply } = counterSlice.actions;
export const { getDoubleCounter } = counterSlice.selectors;

export default counterSlice.reducer;