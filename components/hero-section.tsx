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
        <div className="flex items-center pt-[30px]">
          <div className="flex flex-col w-3/6 space-y-unit-lg">
            <HeadingDetail
              titleWidth="w-[80%]"
              headingTitle="lets start your carrers here!"
              title="Looking for a career  change? Browse our job
                listings now!"
              description="Mus vehicula dignissim quis si lorem libero cras pulvinar orci
                dapibus. Sagittis quisque orci pretium donec elit platea porta
                integer maecenas risus lobortis."
            />
            <Avatars />
            <Link href="/job-seeker">
              <ButtonDefault variant="btn-primary" title="Discover More" />
            </Link>
          </div>
          <div className="w-3/6 flex items-center justify-center">
            <Image
              as={NextImage}
              src="/images/hero.png"
              alt="hero"
              height="460"
              width="460"
              loading="eager"
              quality={100}
            />
          </div>
        </div>

        <FeatureCards />
      </Containerwrapper>
    </>
  );
};
