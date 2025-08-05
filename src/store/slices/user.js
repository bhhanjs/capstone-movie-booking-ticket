import { createSlice } from "@reduxjs/toolkit";
// import { userInfo } from "os";

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("userLogin")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // set user when user log in
    setUser: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userLogin", JSON.stringify(action.payload));
    },

    // clean user when user log out
    logOutUser: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userLogin");
    },
  },
});

export const { setUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
