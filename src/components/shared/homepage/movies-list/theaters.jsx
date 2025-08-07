import theatersApi from "@/apis/apiCalls/theaters";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { setTheaters } from "@/store/slices/theaters";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Theaters() {
  const dispatch = useDispatch();
  const { theaters } = useSelector((state) => state.theatersSlice);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["theaters"],
    queryFn: theatersApi,
  });

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setTheaters(data));
    }
  }, [data, isLoading, dispatch]);

  if (isError) return <div>Failed to load theaters.</div>;

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold text-yama-dark-gray">Your Cinemas</h2>
      {theaters.length !== 0 && (
        <div className="flex flex-row  gap-4">
          {theaters?.map((theater) => (
            <Card
              key={theater.maHeThongRap}
              className="flex flex-col items-center gap-3 py-3 px-2 w-full hover:shadow-xl"
            >
              <img
                src={theater.logo}
                alt={theater.tenHeThongRap}
                className="w-10 h-10 object-contain"
              />
              <CardContent className="p-0">
                <p className="text-sm text-center md:text-left font-medium">
                  {theater.tenHeThongRap}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
