import React from "react";
import { CheckIcon, PersonIcon } from "@radix-ui/react-icons";
// import { useSelector } from "react-redux";

export default function SeatsHeader() {
  // const { danhSachGhe } = useSelector((state) => state.ticketRoomSlice);
  return (
    <div className="w-full">
      {/* seat header */}
      <div className="text-center py-4 space-y-2">
        <h1 className="text-4xl text-yama-black font-bold">
          Select your seats
        </h1>
        {/* <p className="text-gray-400">{danhSachGhe.length} free seats</p> */}
      </div>
      {/* seat lable */}
      <div className="seat__labels flex justify-start gap-5 items-center px-15">
        <div className="seat__label_group">
          <div className="seat selected__label">
            <CheckIcon className="w-5 h-5 text-yama-white" />
          </div>
          <label className="label">My seats</label>
        </div>

        <div className="seat__label_group">
          <div className="seat free__label"></div>
          <label className="label">Free seats</label>
        </div>

        <div className="seat__label_group">
          <div className="seat reserver__label">
            <PersonIcon className="w-3 h-3 text-gray-300" />
          </div>
          <label className="label">Reserver</label>
        </div>
      </div>
    </div>
  );
}
