import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedBranchId: null,
  selectedTheaterId: null,
};
const moviesScheduleSlice = createSlice({
  name: "movies schedule",
  initialState,
  reducers: {
    setSelectBranchId: (state, action) => {
      const { maHeThongRap, maCumRap } = action.payload;
      console.log("maHeThongRap:", maHeThongRap);
      console.log("maCumRap:", maCumRap);

      state.selectedBranchId = maHeThongRap;
      state.selectedTheaterId = maCumRap;
    },
    setSelectTheaterID: (state, action) => {
      state.selectedTheaterId = action.payload;
    },
  },
});

export const { setSelectBranchId, setSelectTheaterID } =
  moviesScheduleSlice.actions;
export default moviesScheduleSlice.reducer;
