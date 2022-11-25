//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { yellow, gray } from "./assets";
import { Pagination } from "swiper";

const App = () => {
  return (
    <div className="root border-2 h-[100vh] flex items-center border-red-300">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="swiper mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={yellow} alt="girl1" />
          <span className="text-[0.8rem]">Feeling pretty...</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gray} alt="girl1" />
          <span className="text-[0.8rem]">Feeling pretty too...</span>
        </SwiperSlide>
        <SwiperSlide>
          Slide 3<span className="text-[0.8rem]">Use data to see photo...</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;
