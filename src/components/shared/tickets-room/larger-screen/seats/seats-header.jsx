import React from "react";
import { AccessibilityIcon } from "lucide-react";

export default function SeatsHeader() {
  return (
    <div className="w-full">
      <div className="bg-yama-main-bg py-1.5 px-3 flex">
        <p className="flex items-center text-yama-dark-gray text-sm font-semibold">
          Auditorium 10{" "}
          <AccessibilityIcon className="pl-1 text-yama-light-gray w-7 h-7" />{" "}
        </p>
      </div>
      <div className="text-center py-4 space-y-2">
        <h1 className="text-4xl text-yama-black font-bold">
          Select your seats
        </h1>
        <p className="text-gray-400">109 free seats</p>
      </div>
    </div>
  );
}
