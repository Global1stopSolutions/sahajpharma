"use client";
import React, { useState, useEffect } from "react";
import { ButtonDefault } from "./button/button";
import { JOB_DETAIl_SUMMARY } from "@/constants";
import { Containerwrapper } from "./container/container-wrapper";
import { Link } from "@nextui-org/link";

export const Expertcommunity = () => {
  const istextWhite = true;
  const [numberData, setNumberData] = useState(JOB_DETAIl_SUMMARY);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumberData((prevNumberData) => {
        return prevNumberData.map((item) => {
          if (item.current < item.number) {
            return { ...item, current: item.current + 1 };
          } else {
            return item;
          }
        });
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Containerwrapper className="bg-expert-community-wrapper py-[50px]" isBackground>
        <div className="h-full flex flex-col space-y-unit-lg lg:w-[60%] w-full mt-unit-2xl">
          <h5 className={`heading-2 ${istextWhite ? "text-white" : ""}`}>
            Join our community of talented professionals and start applying for a job today!
          </h5>
          <p className="text-secondary-foreground">
            Discover boundless career possibilities within our dynamic community of accomplished
            professionals. Engage with like-minded individuals, unlock exclusive job opportunities,
            and propel your career forward starting today. Join us in cultivating a network of
            excellence, where talent meets opportunity, and make your mark in the world of work with
            confidence and purpose.
          </p>
          <Link href="/job-seeker">
            <ButtonDefault title="Discover More" variant="btn-primary-inverse" />
          </Link>
        </div>
        <div>
          <div className="bg-white sm:px-unit-lg p-unit-sm py-unit-xl rounded-lg lg:max-w-[70%] w-full mx-auto shadow-small relative top-[55px] lg:top-[50px]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-unit-md sm:divide-x sm:divide-gray-300">
              {numberData.map((data, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <b className="text-primary heading-3">{data.current}+</b>
                  <p className="text-eerieBlack text-small text-center">{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Containerwrapper>
    </>
  );
};
