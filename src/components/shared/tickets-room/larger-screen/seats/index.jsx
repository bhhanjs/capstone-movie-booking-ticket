import React from "react";
import SeatsHeader from "./seats-header";
import SeatMap from "./seats-map";
import SeatsReserver from "./seats-reserver";

export default function Seats() {
  return (
    <div className="min-h-screen bg-yama-white space-y-3">
      {/* seat header */}
      <SeatsHeader />
      {/* seat map */}
      <SeatMap />
      {/* seat reserver */}
      <SeatsReserver />
    </div>
  );
}
