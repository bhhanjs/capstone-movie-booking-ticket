import { useQuery } from "@tanstack/react-query";
import bannerAPI from "@/apis/apiCalls/banner";
import { useSelector, useDispatch } from "react-redux";
import { setBanners } from "@/store/slices/banner";
import { useEffect, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Banner() {
  const internalRef = useRef(null);
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.bannerSlice);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["banner"],
    queryFn: bannerAPI,
  });

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setBanners(data));
    }
  }, [data, dispatch, isLoading]);

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
    created: (slider) => {
      internalRef.current = setInterval(() => {
        slider.next();
      }, 5000);
    },

    destroyed: () => {
      if (internalRef.current) {
        clearInterval(internalRef.current);
        internalRef.current = null;
      }
    },
  });
  useEffect(() => {
    return () => {
      if (internalRef.current) {
        clearInterval(internalRef.current);
        internalRef.current = null;
      }
    };
  }, []);

  if (isLoading) {
    return (
      <div>
        <Skeleton className="h-64 w-full rounded-lg" />
      </div>
    );
  }

  if (isError || banners.length === 0) {
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load banners.
      </div>
    );
  }

  return (
    <div className="h-[60vh] w-full mb-6">
      {banners.length > 0 && (
        <div
          ref={sliderRef}
          className="keen-slider w-full h-full relative overflow-hidden"
        >
          {banners.map((banner) => (
            <div
              key={banner.maBanner}
              className="keen-slider__slide w-full h-full flex items-center justify-center"
            >
              <img
                src={banner.hinhAnh}
                alt={`Banner ${banner.maBanner}`}
                role="img"
                className="max-w-full max-h-full object-contain shadow-md"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
