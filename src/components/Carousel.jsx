import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import styles from './Carousel.module.css'

export default function Carousel({ texts }) {
  return (
    <Swiper
      className={styles.carousel}
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      // onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <h1>
          Enhance fortune 50 company’s insights teams research capabilities
        </h1>
      </SwiperSlide>
      <SwiperSlide>
        <h1>
          Enhance fortune 50 company’s insights teams research capabilities
        </h1>
      </SwiperSlide>
      <SwiperSlide>
        <h1>
          Enhance fortune 50 company’s insights teams research capabilities
        </h1>
      </SwiperSlide>
    </Swiper>
  );
}
