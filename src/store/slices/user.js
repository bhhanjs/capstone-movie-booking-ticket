import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(state, action);
      return action.payload;
    },

    cleanUser: (state) => {
      console.log(state);
      return null;
    },
  },
});

export const { setUser, cleanUser } = userSlice.actions;
export default userSlice.reducer;
