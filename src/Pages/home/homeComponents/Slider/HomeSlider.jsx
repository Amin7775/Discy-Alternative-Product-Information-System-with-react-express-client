import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from "./../../../../assets/images/slider/Slider 1.jpg";
import slider2 from "./../../../../assets/images/slider/Slider 2.jpg";
import slider3 from "./../../../../assets/images/slider/Slider 3.jpg";

const HomeSlider = () => {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={"fade"}
        lazy={true}
        rewind={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        
        {/* slide 1 */}
        <SwiperSlide>
          <div
            className="parallax-bg relative"
            style={{
              background: `url(${slider2})`,
              height: "70vh",
              display: "block",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute h-full w-full bg-black opacity-10 lg:opacity-0"></div>
            <div className="flex flex-col w-full lg:w-3/5 items-center justify-center h-full ">
              <p className="max-w-[50%] mx-auto  text-white/[.90]  text-lg lg:text-2xl font-semibold drop-shadow-lg mb-3 md:text-xl lg:mb-5 text-center">
                SEEK ANSWERS
              </p>
              <h1 className="text-white text-3xl md:text-4xl lg:text-7xl font-bold drop-shadow-md   stroke-black text-center">
                Query Anything
              </h1>

              <p className="max-w-[80%] lg:max-w-[60%] mx-auto text-white  text-base lg:text-xl drop-shadow-lg mt-5 lg:mt-7 text-center">
                Discover answers to all your questions on a wide range of topics
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          <div
            className="parallax-bg relative"
            style={{
              background: `url(${slider1})`,
              height: "70vh",
              display: "block",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute h-full w-full bg-black opacity-10 lg:opacity-0"></div>
            <div className="flex flex-col w-full lg:w-3/5 items-center justify-center h-full ">
              <p className="max-w-[50%] mx-auto text-white/[.90]   text-lg lg:text-2xl font-semibold drop-shadow-lg mb-3 lg:mb-5 md:text-xl" >
                DISCOVER
              </p>
              <h1 className="text-white text-3xl md:text-4xl lg:text-7xl font-bold drop-shadow-md   stroke-black text-center">
                The Best Alternatives
              </h1>

              <p className="max-w-[80%] lg:max-w-[60%] mx-auto text-white/[.90]   text-base lg:text-xl drop-shadow-lg mt-5 lg:mt-7 text-center">
              Discover similar products with recommended alternatives.
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide>
          <div
            className="parallax-bg relative"
            style={{
              background: `url(${slider3})`,
              height: "70vh",
              display: "block",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute h-full w-full bg-black opacity-10 lg:opacity-0"></div>
            <div className="flex flex-col w-full lg:w-3/5 items-center justify-center h-full ">
              <p className="max-w-[50%] mx-auto  text-white/[.90]   text-lg  md:text-xl lg:text-2xl font-semibold drop-shadow-lg mb-3 lg:mb-5">
                UPGRADE TO THE
              </p>
              <h1 className="text-white text-3xl md:text-4xl lg:text-7xl font-bold drop-shadow-md   stroke-black text-center">
                Best Choices
              </h1>

              <p className="max-w-[80%] lg:max-w-[60%] mx-auto  text-white/[.90]  text-base lg:text-xl drop-shadow-lg mt-5 lg:mt-7 text-center">
                Upgrade to products that offer superior quality and performance.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
