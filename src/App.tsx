//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { yellow, gray } from "./assets";
import { Pagination } from "swiper";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const App = () => {
  const [reaction, setReaction] = useState(false);

  return (
    <div className="root h-[100vh] flex items-center">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="swiper mySwiper"
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={yellow} alt="girl1" />
          <div className={`flex flex-col items-center mb-10 `}>
            <FaHeart
              className={`mb-5 ${reaction ? "redheart" : ""}`}
              onClick={() => setReaction(!reaction)}
            />
            <span className="text-[0.8rem]">Feeling pretty...</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gray} alt="girl1" />
          <div className={`flex flex-col items-center mb-10 `}>
            <FaHeart
              className={`mb-5 ${reaction ? "redheart" : ""}`}
              onClick={() => setReaction(!reaction)}
            />
            <span className="text-[0.8rem]">Feeling pretty too...</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          Slide 3<span className="text-[0.8rem]">Use data to see photo...</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;
