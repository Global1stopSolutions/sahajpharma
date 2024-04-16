"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { HeadingDetail } from "./heading-detail";
import { JobOPeningCard } from "./cards/job-opening-cards";
import { ButtonDefault } from "./button/button";
import { Containerwrapper } from "./container/container-wrapper";
import { Swiperconatiner } from "./swiper-container/swiper-container";

export const JobOpening = () => {
  const items = ["", "", "", "", "", ""];
  return (
    <>
      <Containerwrapper
        isBackground
        className="bg-current-opening-wrapper py-[50px] relative"
      >
        <HeadingDetail
          titleWidth="lg:w-[50%] sm:w-full"
          contentCenter
          headingTitle="What we're offering"
          title="We’re giving all the latest job opening to you"
        />
        <div className="flex h-[650px] sm:w-[75%] w-[80%] mx-auto sm:m-0">
          <Swiperconatiner
            slidesPerView={3}
            className="swipper-job-card-container"
            navigation={true}
            slidesOffsetAfter={3}
            spaceBetween={30}
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
                slidesPerView: 2,
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
            {items.map((index) => (
              <div key={index} className="flex flex-col space-y-unit-2xl">
                <JobOPeningCard jobNumber={2} />
              </div>
            ))}
          </Swiperconatiner>

          <div className="absolute right-0 mx-auto bottom-0 z-0">
            <Image
              as={NextImage}
              src="/images/job-offering-dummy.png"
              alt="job-offering-dummy"
              height="500"
              width="500"
              loading="eager"
              quality={100}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-unit-3xl">
          <ButtonDefault title="View All Opening" variant="btn-primary" />
        </div>
      </Containerwrapper>
    </>
  );
};
