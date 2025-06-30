import ChangeMovieList from "@/components/shared/tickets-room/larger-screen/slide-pannel/change-movie-list";
import Theater from "@/components/shared/tickets-room/larger-screen/slide-pannel/theater";
import Date from "@/components/shared/tickets-room/larger-screen/slide-pannel/date";
import Screening from "@/components/shared/tickets-room/larger-screen/slide-pannel/screening";
import { Button } from "@/components/ui/button";

export default function SlidePannel({ slideContent, onSlideContent }) {
  return (
    <div
      className={`movie__info__pannel h-full absolute left-[320px] top-0 w-[320px] bg-yama-light-gray transition-transform duration-300 shadow-lg ${
        slideContent ? "translate-x-0" : "-translate-x-[320px]"
      }`}
    >
      <div className="flex flex-col h-full py-3">
        {slideContent && slideContent.title === "Movie List" && (
          <ChangeMovieList content={slideContent} />
        )}
        {slideContent && slideContent.title === "Theater" && (
          <Theater content={slideContent} />
        )}
        {slideContent && slideContent.title === "Date" && (
          <Date content={slideContent} />
        )}
        {slideContent && slideContent.title === "Screening" && (
          <Screening content={slideContent} />
        )}

        <div className="mt-auto flex justify-center ">
          <Button
            className="px-12 rounded-2xl"
            onClick={() => {
              onSlideContent(null);
            }}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
