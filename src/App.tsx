//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { yellow } from "./assets";

const App = () => {
  return (
    <div className="root border-2">
      <Swiper
        className="swiper"
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={yellow} alt="girl1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={yellow} alt="girl1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;
