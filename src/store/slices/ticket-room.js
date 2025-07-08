import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  danhSachGhe: [],
  thongTinPhim: {},
};

const ticketRoomSlice = createSlice({
  name: "ticketRoom",
  initialState,
  reducers: {
    setTicketRoomMovie: (state, action) => {
      // console.log("state:", state);
      // console.log("danhSachGhe:", action.payload.danhSachGhe);
      // console.log("thongTinPhim:", action.payload.thongTinPhim);
      // return {
      //   danhSachGhe: action.payload.danhSachGhe,
      //   thongTinPhim: action.payload.thongTinPhim,
      // };

      state.danhSachGhe = action.payload.danhSachGhe;
      state.thongTinPhim = action.payload.thongTinPhim;
    },
  },
});

export const { setTicketRoomMovie } = ticketRoomSlice.actions;
export default ticketRoomSlice.reducer;
