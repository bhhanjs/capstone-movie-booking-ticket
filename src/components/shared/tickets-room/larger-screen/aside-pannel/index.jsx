import ImgBgMovie from "@/asset/media.jpeg";
import ImgrMovie from "@/asset/movie.jpeg";
import { HomeIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Accessibility } from "lucide-react";
import {
  MOVIE_LIST,
  THEATER,
  DATE_SCREENING,
  SCREENING,
} from "@/constants/mock-data";

export default function AsidePannel({ onSlideContent }) {
  return (
    <aside className="movie__info w-[320px] relative z-10 min-h-screen">
      <div className="movie__info__main h-full flex flex-col relative">
        <div
          className="movie__info__header__image bg-cover bg-center flex-1 "
          style={{ backgroundImage: `url(${ImgBgMovie})` }}
        >
          <div className="movie__info__header relative space-y-7 py-8 px-6 border-b-1 border-gray-400">
            <div>
              <a
                href="#"
                className=" w-10 h-10 bg-gray-400/30 rounded-full flex justify-center items-center hover:bg-gray-400/50"
              >
                <HomeIcon className="w-6 h-6 text-white" strokeWidth={2.5} />
              </a>
            </div>
            <div className="flex justify-center items-center ">
              <img
                src={ImgrMovie}
                alt="image movie"
                className="w-5/12 h-auto border-2 border-yama-black"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-1">
              <h2 className="text-yama-black font-semibold text-2xl">Elio</h2>
              <p className="text-gray-300">Le Cezanne</p>
              <Button
                className="bg-yama-black rounded-3xl mt-4"
                onClick={() => onSlideContent(MOVIE_LIST)}
              >
                Change movie
              </Button>
            </div>
          </div>
        </div>
        <div className="relative movie__info__content flex-1 pl-6 pr-2 flex flex-col ">
          <div className="flex justify-between items-center text-yama-black py-3 flex-1/4 border-b-1 border-gray-400">
            <div className="space-y-2">
              <p className="text-gray-300">Cinema</p>
              <h2 className="text-yama-black text-xl font-bold">Le Cezane</h2>
            </div>
            <div>
              <ChevronRightIcon
                className="w-9 h-9"
                onClick={() => onSlideContent(THEATER)}
              />
            </div>
          </div>
          <div className="flex justify-between items-center text-yama-black py-3 flex-1/4 border-b-1 border-gray-400">
            <div className="space-y-2">
              <p className="text-gray-300">Date</p>
              <h2 className="text-yama-black text-xl font-bold">
                Friday 27 June 2024
              </h2>
            </div>
            <div>
              <ChevronRightIcon
                className="w-9 h-9"
                onClick={() => onSlideContent(DATE_SCREENING)}
              />
            </div>
          </div>
          <div className="flex justify-between items-center  text-yama-black py-3 flex-2/4">
            <div className="space-y-2">
              <p className="text-gray-300">Screening</p>
              <h2 className="text-yama-black text-xl font-bold">16:00 VF</h2>
              <Accessibility className="w-6 h-6 " />
              <p className="text-gray-300 text-xs">Expect to end at 17h59</p>
            </div>
            <div>
              <ChevronRightIcon
                className="w-9 h-9"
                onClick={() => onSlideContent(SCREENING)}
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
