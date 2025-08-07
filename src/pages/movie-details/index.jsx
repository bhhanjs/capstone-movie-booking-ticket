import movieDetailApi from "@/apis/apiCalls/movieDetail";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Star, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function MovieDetails() {
  const { maPhim } = useParams();
  console.log(maPhim);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movieDetail", maPhim],
    queryFn: () => movieDetailApi(maPhim),
  });

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Skeleton className="h-[400px] w-full" />
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return <div>Error loading movie details</div>;
  }

  const movie = data;

  const getStatusBadge = () => {
    if (movie.dangChieu)
      return (
        <Badge variant="default" className="bg-yama-red">
          Đang chiếu
        </Badge>
      );
    if (movie.sapChieu)
      return (
        <Badge variant="outline" className="bg-yama-blue">
          Sắp chiếu
        </Badge>
      );
    return (
      <Badge variant="secondary" className="bg-yama-light-gray">
        Đã chiếu
      </Badge>
    );
  };

  return (
    <section className="section__container py-10">
      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-9">
        <Card className="overflow-hidden shadow-lg py-0">
          <img
            src={movie.hinhAnh}
            alt={movie.tenPhim}
            className="w-full h-full object-cover"
          />
        </Card>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{movie.tenPhim}</h1>

          <div className="flex items-center gap-3 flex-wrap">
            {getStatusBadge()}
            <Badge variant="secondary">Mã nhóm: {movie.maNhom}</Badge>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-4 h-4" />
              <span className="font-semibold">{movie.danhGia}</span>
            </div>
          </div>

          <p className="text-gray-700 text-sm">{movie.moTa}</p>

          <p className="text-sm text-muted-foreground">
            Ngày khởi chiếu:{" "}
            <span className="font-medium">
              {new Date(movie.ngayKhoiChieu).toLocaleDateString("vi-VN")}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link to={movie.trailer} target="_blank" rel="noopener noreferrer">
              <Button
                variant="default"
                className="bg-yama-white border-1 border-yama-main-green text-yama-main-green hover:bg-gray-100 flex items-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                Xem Trailer
              </Button>
            </Link>
            <Link to={movie.trailer} target="_blank" rel="noopener noreferrer">
              <Button
                variant="default"
                className=" bg-yama-main-green hover:bg-yama-main-green/70 text-yama-main-bg flex items-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                Buy Tickets
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
