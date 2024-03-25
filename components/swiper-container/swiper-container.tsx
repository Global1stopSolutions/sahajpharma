import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface SwiperGridProps {
  children: React.ReactNode[];
  slidesPerView: number;
  className?: string;
  navigation: any;
}

export const Swiperconatiner = ({
  children,
  slidesPerView,
  className,
  navigation,
}: SwiperGridProps) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={30}
      slidesOffsetAfter={5}
      pagination={{ clickable: true }}
      className={className}
      navigation={navigation}
      modules={[Navigation]}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
          slidesPerGroup: 1,
        },
        1336: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      }}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};
