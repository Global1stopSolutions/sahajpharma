import React from "react";
import { ButtonDefault } from "./button/button";
import { JOB_DETAIl_SUMMARY } from "@/constants";
import { Containerwrapper } from "./container/container-wrapper";

export const Expertcommunity = () => {
  const istextWhite = true;
  return (
    <>
      <Containerwrapper
        className="bg-expert-community-wrapper py-[50px]"
        isBackground
      >
        <div className="h-full flex flex-col space-y-unit-lg lg:w-[60%] w-full mt-unit-2xl">
          <h5 className={`heading-2 ${istextWhite ? "text-white" : ""}`}>
            join our community of talented proffessionals by applying for a job
            today!
          </h5>
          <p className="text-secondary-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            maiores consectetur unde vero, natus provident rerum. Natus suscipit
            voluptates obcaecati libero, laudantium sit quisquam asperiores
            consequatur provident eos aperiam quibusdam.
          </p>
          <ButtonDefault title="Discover More" variant="btn-primary-inverse" />
        </div>
        <div>
          <div className="bg-white sm:px-unit-lg p-unit-sm py-unit-xl rounded-lg lg:max-w-[70%] w-full mx-auto shadow-small relative top-[55px] lg:top-[50px]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-unit-md sm:divide-x sm:divide-gray-300">
              {JOB_DETAIl_SUMMARY.map((data, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <b className="text-primary heading-3">{data.number}</b>
                  <p className="text-eerieBlack text-small text-center">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Containerwrapper>
    </>
  );
};
