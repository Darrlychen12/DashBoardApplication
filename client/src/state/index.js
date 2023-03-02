/*
What is a Redux state slice?
A slice is the portion of Redux code that relates to a specific set of data and actions within the store 's state. 
A slice reducer is the reducer responsible for handling actions and updating the data for a given slice. 
This allows for smaller reducer functions that focus on a slice of state.

*/
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;