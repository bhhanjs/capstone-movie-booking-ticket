import { useRef } from "react";
import { Button } from "@/components/ui/button";
import InforTable from "./infoTable";
import Seats from "./seats";

export default function SmallScreenticketRoom() {
  const seatRef = useRef(null);
  const infoRef = useRef(null);

  const scrollToSeats = function () {
    seatRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToInfo = function () {
    infoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="lg:hidden w-full">
      {/* info table */}
      <div
        ref={infoRef}
        className="infos text-white p-3 min-h-screen flex flex-col justify-between items-center"
      >
        <InforTable />
        <Button
          onClick={scrollToSeats}
          className="bg-yama-dark-gray hover:bg-yama-light-gray rounded-4xl mt-4 w-3/5 h-10"
        >
          Select Seats
        </Button>
      </div>
      {/* seats map */}
      <div ref={seatRef} className="seats min-h-screen bg-white p-3 relative">
        <div className="absolute top-4 left-0 right-0 flex flex-col justify-center items-center">
          <Seats />
          <Button
            onClick={scrollToInfo}
            className="bg-yama-dark-gray hover:bg-yama-light-gray rounded-4xl mt-4 w-3/5 h-10"
          >
            ⬆ Back to movie info
          </Button>
        </div>
      </div>
    </div>
  );
}
