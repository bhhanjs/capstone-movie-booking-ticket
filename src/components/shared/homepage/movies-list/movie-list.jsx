import { useEffect } from "react";
import movieListAPI from "@/apis/apiCalls/movieList";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { setMovies } from "@/store/slices/movieList";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/routes/paths";

export default function MovieList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieListSlice.movies);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["movieList"],
    queryFn: movieListAPI,
  });

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setMovies(data));
    }
  }, [isLoading, data, dispatch]);

  if (isLoading) {
    return (
      <div>
        {movies.map((movie) => (
          <Skeleton key={movie.maPhim} className="" />
        ))}
      </div>
    );
  }

  if (isError) {
    return <div>Error loading movies</div>;
  }

  const handleClick = (maPhim) => {
    navigate(PATH.MOVIE_DETAILS.replace(":maPhim", maPhim));
    // navigate(`${PATH.MOVIE_DETAILS}/${maPhim}`);
  };

  return (
    <div className="movieList space-y-5 p-4">
      <h2 className="text-2xl font-bold text-yama-dark-gray">
        Movies at the cinema
      </h2>
      <div className="movielist__content  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
        {movies.map((movie) => (
          <Card
            className="cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col h-full py-0"
            onClick={() => handleClick(movie.maPhim)}
            key={movie.maPhim}
          >
            <div className="w-full h-60 overflow-hidden rounded-t-xl">
              <img
                src={movie.hinhAnh}
                alt={movie.tenPhim}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className=" space-y-2 flex flex-col justify-between flex-1 p-4">
              <div className="space-y-2 flex flex-col flex-1 justify-between">
                <h2 className="text-lg font-semibold line-clamp-2">
                  {movie.tenPhim}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {new Date(movie.ngayKhoiChieu).toLocaleDateString()}
                </p>
                <div className="flex items-center gap-1 text-yellow-500">
                  <StarIcon className="w-4 h-4" />
                  <span>{movie.danhGia}/10</span>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <Button
                  variant="outline"
                  className="w-full bg-yama-blue hover:bg-yama-blue/80 text-yama-white hover:text-yama-white "
                >
                  Xem chi tiết
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
