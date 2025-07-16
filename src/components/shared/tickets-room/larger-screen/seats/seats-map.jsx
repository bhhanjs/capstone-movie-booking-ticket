import { Fragment } from "react";
import ImgScreen from "@/asset/download.svg";
import { CheckIcon } from "@radix-ui/react-icons";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedSeats } from "@/store/slices/ticket-room";

export default function SeatMap() {
  const dispatch = useDispatch();
  const { danhSachGhe, selectedSeats } = useSelector(
    (state) => state.ticketRoomSlice
  );
  console.log(danhSachGhe);
  const seatPerRow = 12;
  const rowGroupedSeats = [];

  for (let i = 0; i < danhSachGhe.length; i += seatPerRow) {
    rowGroupedSeats.push(danhSachGhe.slice(i, i + seatPerRow));
  }

  // function: handle selecte seat
  const handleSelectedSeat = function (seatSelect) {
    console.log(selectedSeats);
    console.log(seatSelect);
    dispatch(setSelectedSeats(seatSelect));
  };

  // each seat gonna have: onClick selected function, status emply or selected, id for name and id attribute
  // extra: tooltip for each seat: the numbe, the type, the status
  const renderSeat = function (cols, rowLetter) {
    return cols.map((seat, seatIndex) => {
      const {
        maGhe,
        tenGhe,
        maRap,
        loaiGhe,
        stt,
        giaVe,
        daDat,
        taiKhoanNguoiDat,
      } = seat;

      // console.log("maGhe:", maGhe);
      // console.log("tenGhe:", tenGhe);
      // console.log("maRap:", maRap);
      // console.log("loaiGhe:", loaiGhe);
      // console.log(" stt:", stt);
      // console.log("  giaVe:", giaVe);
      // console.log(" daDat:", daDat);
      // console.log(" taiKhoanNguoiDat:", taiKhoanNguoiDat);

      const seatID = maGhe;
      const isSelected = selectedSeats.some((seat) => seat.maGhe === maGhe); // this will return boolean value
      const isBooked = daDat;
      const seatIdRender =
        cols.length === 5
          ? `${rowLetter}${seatIndex + 1}`
          : `${rowLetter}${seatIndex + 6}`;

      console.log(isSelected);

      return (
        <Fragment key={seatID}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={`seat ${isSelected ? "selected" : ""} `}
                  id={seatID}
                  onClick={() => {
                    handleSelectedSeat({ ...seat, seatIdRender });
                  }}
                >
                  {isSelected && <CheckIcon className="text-white w-5 h-5" />}
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="flex justify-between items-center bg-yama-black w-40 gap-1 px-1"
              >
                <h3 className=" text-[10px] border-r-1 flex-1/4 text-yama-main-green font-bold">
                  {seatIdRender}
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
        </Fragment>
      );
    });
  };

  return (
    <div className="px-7">
      <div className="seat__map__container border-[1px] border-gray-300 rounded-md  pb-4">
        <div className="seat__map__content w-7/12 mx-auto space-y-12 ">
          {/* screening */}
          <div className="screening w-full flex flex-col justify-center items-center">
            <span className="translate-y-2/3 px-6 py-1 bg-yama-white text-lg text-[#DAA846] z-10">
              Screen
            </span>
            <img
              src={ImgScreen}
              alt="screen image"
              className="w-full h-3 rotate-180"
            />
          </div>

          {/* seat map */}
          <div className="seats__map w-full flex flex-col justify-center items-center">
            <div className="seats__section w-full flex flex-col gap-0.5">
              {rowGroupedSeats.map((row, rowIdex) => {
                const leftRow = row.slice(0, 5);
                const rightRow = row.slice(5);
                const rowLetter = String.fromCharCode(65 + rowIdex);
                console.log(rowLetter);

                return (
                  <Fragment key={rowLetter}>
                    <div
                      key={rowLetter}
                      className="row grid grid-cols-12 gap-5 "
                    >
                      <div className="row__lable col-span-1 text-center font-bold">
                        {rowLetter}
                      </div>
                      <div className="col-span-11 w-full flex items-center justify-center gap-15 ">
                        <div className="w-5/12">
                          <div className="flex  w-full  items-center  justify-between gap-3">
                            {renderSeat(leftRow, rowLetter)}
                          </div>
                        </div>
                        {/* <div className="w-6"></div> */}
                        <div className=" w-7/12">
                          <div className="flex  w-full  items-center  justify-between gap-3">
                            {renderSeat(rightRow, rowLetter)}
                          </div>
                        </div>
                      </div>
                    </div>
                    {(rowIdex + 1) % 5 === 0 &&
                      rowIdex !== rowGroupedSeats.length - 1 && (
                        <div className="h-5"></div>
                      )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
