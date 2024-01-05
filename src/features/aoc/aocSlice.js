import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentYear: 2023,
  codeSnippets: [],
  loading: false,
  error: null,
};

// Todo: fetch all code from github
// using api, thunks,
export const fetchCodeSnippetsAsync = createAsyncThunk(
  "data/fetchCodeSnippets",
  async () => {
    const codeSnippets = {};

    const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

    const days = [
      "day-01",
      "day-04",
      "day-07",
      "day-10",
      "day-13",
      "day-16",
      "day-19",
      "day-22",
      "day-25",
      "day-02",
      "day-05",
      "day-08",
      "day-11",
      "day-14",
      "day-17",
      "day-20",
      "day-23",
      "day-03",
      "day-06",
      "day-09",
      "day-12",
      "day-15",
      "day-18",
      "day-21",
      "day-24",
    ];

    const filePaths = [];

    years.forEach((year) => {
      codeSnippets[year] = {};

      days.forEach((day) => {
        codeSnippets[year][day] = {
          "partOne.js": "",
          "partTwo.js": "",
        };
        filePaths.push(`${year}/${day}/partOne.js`);
        filePaths.push(`${year}/${day}/partTwo.js`);
      });
    });

    try {
      for (const filePath of filePaths) {
        try {
          const apiEndpoint = `https://raw.githubusercontent.com/jorgenlt/advent-of-code/master/${filePath}`;
          const year = Number(filePath.split("/")[0]);
          const day = filePath.split("/")[1];
          const fileName = filePath.split("/")[2];

          const response = await axios.get(apiEndpoint);

          const codeSnippet = response.data;

          if (codeSnippet) {
            codeSnippets[year][day][fileName] = codeSnippet;
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCodeSnippetsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCodeSnippetsAsync.fulfilled, (state, action) => {
        state.loading = false;
        console.log("action.payload", action.payload);
        state.codeSnippets = action.payload;
        state.error = null;
      })
      .addCase(fetchCodeSnippetsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setYear } = aoc.actions;
export default aoc.reducer;
