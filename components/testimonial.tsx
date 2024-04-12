"use client";

import React from "react";
import { Avatar } from "@nextui-org/react";
import { HeadingDetail } from "./heading-detail";
import { Containerwrapper } from "./container/container-wrapper";
import { TESTIMONIAL } from "@/constants";
import { Swiperconatiner } from "./swiper-container/swiper-container";

export const Testimonial = () => {
  return (
    <>
      <Containerwrapper isBackground className="bg-testimonial-wrapper">
        <div className="sm:flex lg:space-x-unit-4xl mt-[200px]">
          <div className="sm:w-[40%] sm:mr-unit-md md:mr-unit-0 w-full">
            <HeadingDetail
              titleWidth="w-full"
              headingTitle="TESTIMONIAL"
              title="What they say 
                about us"
              description="Dui vel aliquam nullam nulla natoque iaculis viverra conubia letius. Primis non rhoncus dolor a urna finibus ultricies libero."
            />
          </div>
          <div className="sm:w-[60%] w-full mt-unit-xl sm:mt-0">
            <Swiperconatiner
              slidesPerView={1}
              className="testimonial-container"
              navigation={false}
              slidesOffsetAfter={3}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
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
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
              }}
            >
              {TESTIMONIAL.map((testimonialItem, index) => (
                <div key={index}>
                  <div className="bg-primary rounded-2xl p-unit-lg h-max">
                    <div className="flex flex-col space-y-unit-md relative">
                      <div className="flex items-center space-x-unit-xs">
                        {testimonialItem.rating.map((item, index) => (
                          <div key={index}>
                            <i className={`text-white ${item.icon}`} />
                          </div>
                        ))}
                      </div>
                      <p className="text-white text-medium font-light">
                        {testimonialItem.discription}
                      </p>
                      <div className="absolute right-0 top-[-30px]">
                        <i className="ic-qutoes text-8xl text-gray-300 opacity-40" />
                      </div>
                      <div
                        className="w-0 h-0 left-10 absolute -bottom-[75px]
      border-l-[50px] border-l-transparent
      border-t-[55px] border-t-primary
      border-r-[95px] border-r-transparent"
                      ></div>
                    </div>
                  </div>
                  <div className="ml-[160px] mt-10">
                    <div className="flex items-center space-x-unit-md">
                      <Avatar
                        isBordered
                        size="lg"
                        color="primary"
                        src={testimonialItem.clientAvatar}
                      />
                      <div>
                        <label className="text-content1-charlestonGreen text-medium font-medium">
                          {testimonialItem.clientName}
                        </label>
                        <p className="text-content1-oldsilver text-tiny font-light">
                          {testimonialItem.clientDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Swiperconatiner>
          </div>
        </div>
      </Containerwrapper>
    </>
  );
};
