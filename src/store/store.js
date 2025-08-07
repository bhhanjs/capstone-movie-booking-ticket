import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/store/slices/user";
import ticketRoomSlice from "@/store/slices/ticket-room";
import bannerSlice from "@/store/slices/banner";
import movieListSlice from "@/store/slices/movieList";
import theatersSlice from "@/store/slices/theaters";
import moviesScheduleSlice from "@/store/slices/moviesSchedule";

const store = configureStore({
  reducer: {
    userSlice,
    ticketRoomSlice,
    movieListSlice,
    bannerSlice,
    theatersSlice,
    moviesScheduleSlice,
  },
  devTools: true,
});

export default store;
