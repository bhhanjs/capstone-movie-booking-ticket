import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/store/slices/user";
import ticketRoomSlice from "@/store/slices/ticket-room"

const store = configureStore({
  reducer: {
    userSlice,
    ticketRoomSlice
  },
  devTools: true,
});

export default store;
