import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    movies: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setMovies, setIsLoading, setError } = movieListSlice.actions;

export default movieListSlice.reducer;
