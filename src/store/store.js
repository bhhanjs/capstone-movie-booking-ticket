import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/store/slices/user";

const store = configureStore({
  reducer: {
    userSlice,
  },
  devTools: true,
});

export default store;
