import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theaters: [],
};
const theatersSlice = createSlice({
  name: "theaters",
  initialState,
  reducers: {
    setTheaters: (state, action) => {
      state.theaters = action.payload;
    },
  },
});

export const { setTheaters } = theatersSlice.actions;
export default theatersSlice.reducer;
