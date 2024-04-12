import React from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { ButtonDefault } from "./button/button";
import { Containerwrapper } from "./container/container-wrapper";

export interface AboutDetailProps {
  children: React.ReactNode;
  imgageRight?: boolean;
}

export const AboutDetail = ({ children, imgageRight }: AboutDetailProps) => {
  return (
    <>
      <Containerwrapper>
        <div className="sm:flex gap-unit-2xl">
          <div
            className={`sm:basis-3/6 w-full relative ${
              imgageRight ? "order-2 flex justify-center" : ""
            }`}
          >
            <Image
              as={NextImage}
              src="/images/about-us.png"
              alt="about"
              height={360}
              width={495}
              loading="eager"
              quality={100}
            />
            <div
              className={`year-experience ${
                imgageRight ? "right-0" : "right-0"
              }`}
            >
              <span className="text-primary font-semibold text-4xl">10+</span>
              <p className="uppercase font-semibold text-base text-content1-quartz">
                Year of Experience
              </p>
            </div>
          </div>
          <div className="sm:basis-3/6 w-full mt-unit-xl sm:mt-unit-0">
            {children}
            <div className="mt-unit-lg">
              <ButtonDefault title="Discover More" variant="btn-primary" />
            </div>
          </div>
        </div>
      </Containerwrapper>
    </>
  );
};
