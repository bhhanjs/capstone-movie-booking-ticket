import { useRef, useEffect } from "react";
import LargeScreenTicketRoom from "@/components/shared/tickets-room/larger-screen";
import { useQuery } from "@tanstack/react-query";
import ticketRoomAPI from "@/apis/apiCalls/ticket-room";
import { Skeleton } from "@/components/ui/skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setTicketRoomMovie } from "@/store/slices/ticket-room";

export default function TicketPage() {
  const seatRef = useRef(null);
  const infoRef = useRef(null);
  const maLichChieu = 16909;
  const dispatch = useDispatch();
  const { thongTinPhim, danhSachGhe } = useSelector(
    (state) => state.ticketRoomSlice
  );

  console.log("dsg:", danhSachGhe);
  console.log("ttp:", thongTinPhim);

  const hasReduxData =
    thongTinPhim &&
    Object.keys(thongTinPhim).length > 0 &&
    danhSachGhe.length > 0;

  const scrollToSeats = function () {
    seatRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToInfo = function () {
    infoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["ticketRoom", maLichChieu],
    queryFn: () => ticketRoomAPI(maLichChieu),
    enabled: !!maLichChieu, // only run if maLichChieu is truthy
    staleTime: 1000 * 60 * 3, // 3 minutes cache
    retry: 0,
  });
  console.log(data, isLoading, error);

  useEffect(() => {
    if (data) {
      dispatch(setTicketRoomMovie(data));
    }
  }, [dispatch, data]);

  if (isLoading || !hasReduxData) {
    return (
      <div className="flex flex-col">
        <Skeleton className="h-screen w-[320px]" />
        <Skeleton className="h-screen flex-1" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="">
        Error loading ticket room! <br /> please try again !!!
      </div>
    );
  }

  return (
    <div className="min-h-screen mx-auto">
      {/* large screen: 2 columns */}
      <LargeScreenTicketRoom />
      {/* small screen: 1 column */}
      <div className="lg:hidden w-full">
        {/* info table */}
        <div
          ref={infoRef}
          className="infos bg-gray-900 text-white p-6 h-screen flex flex-col justify-between"
        >
          <div>
            <h1 className="text-2xl font-bold mb-4"> Lilo and stitch</h1>
            <p>Cinema: Le Cezanne</p>
            <p>Date: June 26, 2025</p>
            <p>Time: 13:30</p>
          </div>
          <button
            onClick={scrollToSeats}
            className="bg-yellow-400 text-black mt-6 py-3 rounded font-semibold"
          >
            Select Seats
          </button>
        </div>
        {/* seats map */}
        <div
          ref={seatRef}
          className="seats min-h-[90vh] bg-white p-6  relative"
        >
          <h2 className="text-xl font-semibold mb-2">Select your seats</h2>
          <div className="grid grid-cols-8 gap-2">
            {[...Array(80)].map((_, i) => (
              <button
                key={i}
                className="w-6 h-6 rounded bg-yellow-400 hover:bg-yellow-500"
              />
            ))}
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <button
              onClick={scrollToInfo}
              className="bg-gray-900 px-4 py-2 rounded-full shadow"
            >
              ⬆ Back to movie info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
