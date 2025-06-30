import { Fragment, useState } from "react";
import ImgScreen from "@/asset/download.svg";
import { CheckIcon } from "@radix-ui/react-icons";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/**
 *
 *
 */

export default function SeatMap() {
  const rowsTop = ["J", "I", "H", "G", "F"];
  const rowsBottom = ["E", "D", "C", "B", "A"];
  const cols = Array.from({ length: 12 }, (_, i) => i + 1);
  const [selectedSeats, setSelectedSeats] = useState([]);

  // function: handle selecte seat
  const handleSelectedSeat = function (row, col) {
    const seatID = `${row}${col}`;
    setSelectedSeats((prev) =>
      prev.includes(seatID)
        ? prev.filter((seat) => seat !== seatID)
        : [...prev, seatID]
    );
  };

  // function: rendering each seat on a row => loop through the row, and using this function to render seats
  // go through each row => then go through each column to render the each seat
  // each seat gonna have: onClick selected function, status emply or selected, id for name and id attribute
  // extra: tooltip for each seat: the numbe, the type, the status
  const renderSeat = function (row) {
    return cols.map((col) => {
      const seatID = `${row}${col}`;
      const isSelected = selectedSeats.includes(seatID); // this will return boolean value
      const isAisle = col === 5;

      return (
        <Fragment key={seatID}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={`seat ${isSelected ? "selected" : ""} `}
                  id={seatID}
                  onClick={() => {
                    handleSelectedSeat(row, col);
                  }}
                >
                  {isSelected && <CheckIcon className="text-white w-5 h-5" />}
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="flex justify-between items-center bg-yama-black w-40 gap-1 px-1"
              >
                <h3 className=" text-[16px] border-r-1 flex-1/4 text-yama-main-green font-bold">
                  {seatID}
                </h3>
                <div className="flex flex-col justify-between items-center flex-3/4 gap-1">
                  <p className="text-center"> Fauteuil standard</p>
                  <p
                    className={`uppercase font-semibold ${
                      isSelected ? "text-yama-red" : "text-yama-main-green"
                    }`}
                  >
                    {isSelected ? "Reserve" : "Free"}
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {isAisle && <div className="w-4"></div>}
        </Fragment>
      );
    });
  };

  return (
    <div className="px-7">
      <div className="seat__map__container border-[1px] border-gray-300 rounded-md pt-15 pb-8">
        <div className="seat__map__content w-7/12 mx-auto space-y-5">
          <div className="seats__map w-full flex flex-col justify-center items-center">
            <div className="seats__section w-full flex flex-col gap-0.5">
              {rowsTop.map((row) => (
                <div key={row} className="row grid grid-cols-12">
                  <div className="row__lable col-span-1 text-center font-bold">
                    {row}
                  </div>
                  <div className="col-span-11 flex justify-around">
                    {renderSeat(row)}
                  </div>
                </div>
              ))}
            </div>
            <div className="h-7 w-full"></div>
            <div className="seats__section w-full flex flex-col gap-0.5">
              {rowsBottom.map((row) => (
                <div key={row} className="row grid grid-cols-12">
                  <div className="row__lable col-span-1 text-center font-bold">
                    {row}
                  </div>
                  <div className="col-span-11 flex justify-around">
                    {renderSeat(row)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="screening w-full flex flex-col justify-center items-center">
            <span className="translate-y-2/3 px-6 py-1 bg-yama-white text-lg text-[#DAA846]">
              Screen
            </span>
            <img src={ImgScreen} alt="screen image" className="w-full h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
