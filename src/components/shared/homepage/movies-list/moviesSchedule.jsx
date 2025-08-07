import moviesScheduleApi from "@/apis/apiCalls/moviesSchedule";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectBranchId,
  setSelectTheaterID,
} from "@/store/slices/moviesSchedule";
import { Skeleton } from "@/components/ui/skeleton";
import replaceImg from "@/asset/media.jpeg";
import dateScreening from "../../support-fn/date-screening";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PATH } from "@/routes/paths";

export default function MoviesSchedule() {
  const dispatch = useDispatch();
  const { selectedBranchId, selectedTheaterId } = useSelector(
    (state) => state.moviesScheduleSlice
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies schedule"],
    queryFn: moviesScheduleApi,
  });

  console.log("data movie schedule:", data);

  useEffect(() => {
    if (!isLoading && data) {
      const firstBranch = data?.[0];
      const firstTheater = data?.[0]?.lstCumRap?.[0];

      console.log("first branch:", firstBranch);
      console.log("first theater:", firstTheater);

      if (firstBranch && firstTheater) {
        console.log("firstBranch.maHeThongRap:", firstBranch.maHeThongRap);
        console.log("firstTheater.maCumRap:", firstTheater.maCumRap);
        dispatch(
          setSelectBranchId({
            maHeThongRap: firstBranch.maHeThongRap,
            maCumRap: firstTheater.maCumRap,
          })
        );
        dispatch(setSelectTheaterID(firstTheater.maCumRap));
      }
    }
  }, [data, isLoading, dispatch]);

  if (isError) return <div>Failed to load movies schedule.</div>;
  if (isLoading || !selectedBranchId || !selectedTheaterId)
    return (
      <div className="flex ">
        <Skeleton className="flex-1/3" />
        <Skeleton className="flex-2/3" />
      </div>
    );

  let selectedBranch;
  let selectedTheater;
  if (data && selectedBranchId && selectedTheaterId) {
    selectedBranch = data.find((branch) => {
      return branch.maHeThongRap === selectedBranchId;
    });

    selectedTheater = selectedBranch.lstCumRap.find((theater) => {
      return theater.maCumRap === selectedTheaterId;
    });

    console.log("selectedBranch:", selectedBranch);
    console.log("selectedTheater:", selectedTheater);
  }

  return (
    <div className="space-y-9">
      <div>
        <h2 className="text-xl font-semibold mb-2">Cinema</h2>
        <div className="flex gap-4 mb-6">
          {data.map((branch) => (
            <button
              key={branch.maHeThongRap}
              onClick={() =>
                dispatch(
                  setSelectBranchId({
                    maHeThongRap: branch.maHeThongRap,
                    maCumRap: branch.lstCumRap[0].maCumRap,
                  })
                )
              }
              className={`border px-4 py-2 rounded ${
                selectedBranchId === branch.maHeThongRap
                  ? "bg-yama-blue text-white"
                  : ""
              }`}
            >
              {branch.tenHeThongRap}
            </button>
          ))}
        </div>
      </div>

      <div>
        {selectedBranch && (
          <>
            <h3 className="text-lg font-semibold mb-2">
              Theaters in {selectedBranch.tenHeThongRap}
            </h3>
            <div className="flex flex-wrap gap-4 mb-6">
              {selectedBranch.lstCumRap.map((theater) => (
                <button
                  key={theater.maCumRap}
                  onClick={() => dispatch(setSelectTheaterID(theater.maCumRap))}
                  className={`border px-4 py-2 rounded ${
                    selectedTheaterId === theater.maCumRap
                      ? "bg-yama-main-green text-white"
                      : ""
                  }`}
                >
                  {theater.tenCumRap}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <div>
        {selectedTheater && (
          <>
            <h4 className="text-lg font-semibold mb-2">
              Movie Schedule for {selectedTheater.tenCumRap}
            </h4>
            <div className="space-y-6">
              {selectedTheater.danhSachPhim?.slice(0, 9).map((movie) => (
                <div key={movie.maPhim} className="border p-4 rounded shadow ">
                  <div className="font-bold text-lg mb-1">{movie.tenPhim}</div>
                  <div className="flex gap-3 mt-5">
                    <img
                      src={movie.hinhAnh}
                      alt={movie.tenPhim}
                      className="w-32 h-48 object-cover mb-2"
                    />
                    <div className="flex gap-9 px-10">
                      {movie.lstLichChieuTheoPhim
                        ?.sort(
                          (a, b) =>
                            new Date(a.ngayChieuGioChieu) -
                            new Date(b.ngayChieuGioChieu)
                        ) // sort by date ascending
                        .slice(0, 5)
                        .map((schedule) => {
                          const date = new Date(schedule.ngayChieuGioChieu);
                          const dateStr = date.toLocaleDateString("vi-VN", {
                            dateStyle: "short",
                          });
                          const timeStr = date.toLocaleTimeString("vi-VN", {
                            hour: "2-digit",
                            minute: "2-digit",
                          });
                          return (
                            <Link
                              to={PATH.TICKETS_ROOM.replace(
                                ":maLichChieu",
                                schedule.maLichChieu
                              )}
                              key={schedule.maLichChieu}
                              className=" text-[16px] bg-yama-white border-1 border-yama-main-green text-yama-dark-gray flex items-center justify-center px-2 py-2 rounded h-fit cursor-pointer hover:shadow-xl"
                            >
                              {dateStr}
                              <br />
                              {timeStr}
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// maHeThongRap
// lstCumRap

// maCumRap
// danhSachPhim

// maPhim
// maLichChieu
