
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movieApi } from '../../api/movieApi';

export const fetchMovies = createAsyncThunk('movies/fetchList', movieApi.getMovies);

const movieSlice = createSlice({
  name: 'movies',
  initialState: { movies: [], isLoading: false } as { movies: any[]; isLoading: boolean },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (s) => { s.isLoading = true; })
      .addCase(fetchMovies.fulfilled, (s, { payload }) => { s.isLoading = false; s.movies = payload.content; })
      .addCase(fetchMovies.rejected, (s) => { s.isLoading = false; });
  },
});

export default movieSlice.reducer;
