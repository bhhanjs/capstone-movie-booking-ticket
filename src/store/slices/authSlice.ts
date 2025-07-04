
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../api/authApi';

interface AuthState {
  user: any | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  isLoading: false,
};

export const login = createAsyncThunk('auth/login', authApi.login);
export const register = createAsyncThunk('auth/register', authApi.register);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload?.content;
      localStorage.setItem('user', JSON.stringify(payload.content));
      localStorage.setItem('accessToken', payload.content.accessToken);
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
