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
          titleWidth="w-[50%]"
          contentCenter
          headingTitle="What we're offering"
          title="We’re giving all the latest job opening to you"
        />
        <div className="flex mt-unit-2xl h-[500px] w-[70%]">
          <Swiperconatiner
            slidesPerView={3}
            className="w-full h-full"
            navigation={false}
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
