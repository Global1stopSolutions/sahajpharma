"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { HeadingDetail } from "./heading-detail";
import { CLIENT_IMG } from "@/constants";
import { Containerwrapper } from "./container/container-wrapper";
import { Swiperconatiner } from "./swiper-container/swiper-container";

export const Clients = () => {
  return (
    <>
      <Containerwrapper>
        <div className="sm:flex space-x-unit-lg items-center">
          <div className="sm:w-[40%]  w-full">
            <HeadingDetail
              titleWidth="w-full"
              headingTitle="FEATURED"
              title="Our Clients"
              description="Dui vel aliquam nullam nulla natoque iaculis viverra conubia letius. Primis non rhoncus dolor a urna finibus ultricies libero."
            />
          </div>
          <div className="mt-unit-2xl sm:m-unit-0">
            <Swiperconatiner
              slidesPerView={2}
              navigation={true}
              slidesOffsetAfter={3}
              spaceBetween={30}
              className="client-slider-container"
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
              {CLIENT_IMG.map((client, index) => (
                <div
                  key={index}
                  className="relative bg-secondary-foreground rounded-md shadow-small lg:w-full w-fit flex items-center justify-center p-unit-md h-[111px]"
                >
                  <Image
                    as={NextImage}
                    src={client.clientImg}
                    alt="client"
                    height={170}
                    width={120}
                    className=""
                  />
                </div>
              ))}
            </Swiperconatiner>
          </div>
        </div>
      </Containerwrapper>
    </>
  );
};
