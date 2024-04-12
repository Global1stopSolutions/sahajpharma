import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface SwiperGridProps {
  children: React.ReactNode[];
  slidesPerView: number;
  className?: string;
  navigation: any;
  spaceBetween?: number;
  slidesOffsetAfter?: number;
  pagination?: any;
  breakpoints?: any;
  autoplay?: any;
}

export const Swiperconatiner = ({
  children,
  slidesPerView,
  className,
  navigation,
  pagination,
  spaceBetween,
  slidesOffsetAfter,
  breakpoints,
  autoplay,
}: SwiperGridProps) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      slidesOffsetAfter={slidesOffsetAfter}
      pagination={pagination}
      className={className}
      navigation={navigation}
      modules={[Navigation, Autoplay, Pagination]}
      breakpoints={breakpoints}
      autoplay={autoplay}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};
