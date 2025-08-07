import { useEffect } from "react";
import LargeScreenTicketRoom from "@/components/shared/tickets-room/larger-screen";
import { useQuery } from "@tanstack/react-query";
import ticketRoomAPI from "@/apis/apiCalls/ticket-room";
import { Skeleton } from "@/components/ui/skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setTicketRoomMovie } from "@/store/slices/ticket-room";
import SmallScreenticketRoom from "@/components/shared/tickets-room/small-screen";
import { useParams } from "react-router-dom";

export default function TicketPage() {
  const {maLichChieu} = useParams()
  const dispatch = useDispatch();
  const { thongTinPhim, danhSachGhe } = useSelector(
    (state) => state.ticketRoomSlice
  );

  // console.log("dsg:", danhSachGhe);
  // console.log("ttp:", thongTinPhim);

  const hasReduxData =
    thongTinPhim &&
    Object.keys(thongTinPhim).length > 0 &&
    danhSachGhe.length > 0;

  const { data, isLoading, error } = useQuery({
    queryKey: ["ticketRoom", maLichChieu],
    queryFn: () => ticketRoomAPI(maLichChieu),
    enabled: !!maLichChieu, // only run if maLichChieu is truthy
    staleTime: 1000 * 60 * 3, // 3 minutes cache
    retry: 0,
  });
  // console.log(data, isLoading, error);

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
      <SmallScreenticketRoom />
    </div>
  );
}
