"use client";
import React, { useState, useEffect } from "react";
import { Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import { ButtonDefault } from "./button/button";
import { Containerwrapper } from "./container/container-wrapper";

export interface AboutDetailProps {
  children: React.ReactNode;
  imgageRight?: boolean;
}

export const AboutDetail = ({ children, imgageRight }: AboutDetailProps) => {
  const [yearofExperience, setYearofExperience] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (yearofExperience < 10) {
        setYearofExperience((prevNumber) => prevNumber + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [yearofExperience]);

  return (
    <>
      <Containerwrapper>
        <div className="flex">
          <div className={`basis-3/6 relative ${imgageRight ? "order-2 flex justify-center" : ""}`}>
            <Image
              as={NextImage}
              src="/images/about-us.png"
              alt="about"
              height={360}
              width={495}
              loading="eager"
              quality={100}
            />
            <div className={`year-experience ${imgageRight ? "right-0" : "right-[50px]"}`}>
              <span className="text-primary font-semibold text-4xl">{yearofExperience}+</span>
              <p className="uppercase font-semibold text-base text-content1-quartz">
                Year of Experience
              </p>
            </div>
          </div>
          <div className="basis-3/6">
            {children}
            <div className="mt-unit-lg">
              <Link href="/job-seeker">
                <ButtonDefault title="Discover More" variant="btn-primary" />
              </Link>
            </div>
          </div>
        </div>
      </Containerwrapper>
    </>
  );
};
