import { useState } from "react";
import SlidePannel from "./slide-pannel";
import AsidePannel from "./aside-pannel";
import Seats from "./seats";


export default function LargeScreenTicketRoom() {
  
  const [slideContent, setSlideContent] = useState(null);

  const handleSlideContent = function (content) {
    setSlideContent(content);
  };

  return (
    <>
      <div className="h-screen hidden lg:flex">
        {/* aside table info*/}
        <AsidePannel onSlideContent={handleSlideContent} />

        {/* slide pannel */}
        <SlidePannel
          onSlideContent={handleSlideContent}
          slideContent={slideContent}
        />

        {/* main seats */}
        <main className="seats__map flex-1">
          <Seats />
        </main>
      </div>
    </>
  );
}
