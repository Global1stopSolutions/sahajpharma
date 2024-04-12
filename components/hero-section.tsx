import React from "react";
import Avatars from "./avtars";
import { ButtonDefault } from "./button/button";
import { Image } from "@nextui-org/react";
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
              title="Looking for a career  change? Browse our job
                listings now!"
              description="Mus vehicula dignissim quis si lorem libero cras pulvinar orci
                dapibus. Sagittis quisque orci pretium donec elit platea porta
                integer maecenas risus lobortis."
            />
            <Avatars />
            <ButtonDefault variant="btn-primary" title="Discover More" />
          </div>
          <div className="w-full sm:w-3/6 flex items-center justify-center mt-unit-3xl sm:mt-unit-0">
            <div className="relative">
              <Image
                className="overflow-visible"
                as={NextImage}
                src="/images/hero.png"
                alt="hero"
                width={0}
                height={0}
                sizes="(min-width: 330px) 100%"
                style={{ width: "auto", height: "auto", objectFit: "cover" }}
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
