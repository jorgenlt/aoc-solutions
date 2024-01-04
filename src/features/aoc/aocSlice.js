import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentYear: 2023,
};

// Todo: fetch all code from github
// using api, thunks, 
export const fetchCodeSnippetsAsync = createAsyncThunk(
  "data/fetchCodeSnippets",
  async () => {
    try {
      const response = await fetch("");
      return response.json();
    } catch(err) {
      console.error(err);
    }
  }
)

// Slice
const aoc = createSlice({
  name: "aoc",
  initialState,
  reducers: {
    setYear(state, action) {
      state.currentYear = action.payload;
    },
  },
  extraReducers: (builder) => {
    // extra reducers
    // todo: fetch all code from github
  },
});

export const { setYear } = aoc.actions;
export default aoc.reducer;
