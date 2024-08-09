import React from "react";
import Avatars from "./avtars";
import { ButtonDefault } from "./button/button";
import { Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import { HeadingDetail } from "./heading-detail";
import { Containerwrapper } from "./container/container-wrapper";
import { FeatureCards } from "./cards/feature-cards";

export const HeroSection = () => {
  return (
    <>
      <Containerwrapper className="bg-content1-cultured" isBackground>
        <div className="items-center pt-[30px] sm:flex ">
          <div className="flex flex-col w-full sm:w-3/6 space-y-unit-lg">
            <HeadingDetail
              titleWidth="lg:w-[80%] w-full"
              headingTitle="lets start your carrers here!"
              title="Looking for a job switch? Browse our job listings now!"
              description="Unlock your potential by getting the dream job. With endless opportunities listed on our website, find the perfect fit and shape your future."
            />
            <Avatars />
            <Link href="/job-seeker">
              <ButtonDefault variant="btn-primary" title="Discover More" />
            </Link>
          </div>
          <div className="w-full sm:w-3/6 flex items-center justify-center mt-unit-3xl sm:mt-unit-0">
            <div className="relative">
              <Image
                className="overflow-visible banner-image"
                as={NextImage}
                src="/images/hero.png"
                alt="hero"
                width={0}
                height={0}
                sizes="100%"
                loading="eager"
                quality={100}
              />
            </div>
          </div>
        </div>

        <FeatureCards />
      </Containerwrapper>
    </>
  );
};
