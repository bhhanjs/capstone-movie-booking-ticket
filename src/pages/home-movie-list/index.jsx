import Banner from "../../components/shared/homepage/movies-list/banner";
import MovieList from "../../components/shared/homepage/movies-list/movie-list";
import MoviesSchedule from "@/components/shared/homepage/movies-list/moviesSchedule";
import Theaters from "@/components/shared/homepage/movies-list/theaters";

export default function HomeMovieList() {
  return (
    <div className="section__container pb-16 space-y-15">
      <Banner />
      <MovieList />
      <Theaters />
      <div className="space-y-5">
        <h2 className="text-2xl font-bold text-yama-dark-gray">
          Screening Schedule
        </h2>
        <div className="flex flex-col md:flex-row gap-6 ">
          <MoviesSchedule />
        </div>
      </div>
    </div>
  );
}
