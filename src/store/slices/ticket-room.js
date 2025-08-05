import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  danhSachGhe: [],
  thongTinPhim: {},
  selectedSeats: [],
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

    setSelectedSeats: (state, action) => {
      // prev.includes(seatSelect.maGhe)
      //   ? prev.filter((seat) => seat.maGhe !== seatSelect.maGhe)
      //   : [...prev, seatSelect]

      // const seatExist = state.selectedSeats.some(
      //   (seat) => seat.maGhe === action.payload.maGhe
      // );
      // return {
      //   ...state,
      //   selectedSeats: seatExist
      //     ? state.selectedSeats.filter(
      //         (seat) => seat.maGhe !== action.payload.maGhe
      //       )
      //     : [...state.selectedSeats, action.payload],
      // };

      const seatIndex = state.selectedSeats.findIndex(
        (seat) => seat.maGhe === action.payload.maGhe
      );
      if (seatIndex !== -1) {
        state.selectedSeats.splice(seatIndex, 1);
      }
      if (seatIndex === -1) {
        state.selectedSeats.push(action.payload);
      }
    },
  },
});

export const { setTicketRoomMovie, setSelectedSeats } = ticketRoomSlice.actions;
export default ticketRoomSlice.reducer;
