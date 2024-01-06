import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentYear: 2023,
  codeSnippets: null,
  status: "idle",
  error: null,
  currentFilePath: "",
};

const setCurrentFilePath = createAction("aoc/setCurrentFilePath");

export const fetchCodeSnippetsAsync = createAsyncThunk(
  "data/fetchCodeSnippets",
  async (args, { dispatch }) => {
    const codeSnippets = {};

    const years = [];
    for (let i = 2015; i <= 2023; i++) {
      years.push(i);
    }

    const days = [];
    for (let i = 1; i <= 25; i++) {
      days.push(`day-${i.toString().padStart(2, "0")}`);
    }

    const filePaths = [];

    years.forEach((year) => {
      codeSnippets[year] = {};

      days.forEach((day) => {
        const dayNum = Number(day.match(/\d+/)[0]);

        codeSnippets[year][dayNum] = {
          "partOne.js": "",
          "partTwo.js": "",
        };

        filePaths.push(`${year}/${day}/partOne.js`);
        filePaths.push(`${year}/${day}/partTwo.js`);
      });
    });

    try {
      for (const filePath of filePaths) {
        dispatch(setCurrentFilePath(filePath));
        try {
          const apiEndpoint = `https://raw.githubusercontent.com/jorgenlt/advent-of-code/master/${filePath}`;
          const year = Number(filePath.split("/")[0]);
          const day = filePath.split("/")[1];
          const dayNum = Number(day.match(/\d+/)[0]);
          const fileName = filePath.split("/")[2];

          const response = await axios.get(apiEndpoint);

          const codeSnippet = response.data;

          if (codeSnippet) {
            codeSnippets[year][dayNum][fileName] = codeSnippet;
          }
        } catch (err) {
          console.error(`Error fetching code snippet for ${filePath}:`, err);
        }
      }

      return codeSnippets;
    } catch (err) {
      console.log(err);
    }
  }
);

// Slice
const aoc = createSlice({
  name: "aoc",
  initialState,
  reducers: {
    setYear(state, action) {
      state.currentYear = action.payload;
    },
    setCurrentFilePath(state, action) {
      state.currentFilePath = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCodeSnippetsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCodeSnippetsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.codeSnippets = action.payload;
        state.error = null;
        state.currentFilePath = "";
      })
      .addCase(fetchCodeSnippetsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setYear } = aoc.actions;
export default aoc.reducer;
