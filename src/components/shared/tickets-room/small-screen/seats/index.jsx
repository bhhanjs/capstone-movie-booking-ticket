import SeatMap from "./seat-map";
import SeatsHeader from "./seat-header";
import SeatsReserver from "./seat-reserver";

export default function Seats() {
  return (
    <div className="bg-yama-white w-full space-y-3 ">
      {/* seat header */}
      <SeatsHeader />
      {/* seat map */}
      <SeatMap />
      {/* seat reserver */}
      <SeatsReserver />
    </div>
  );
}
