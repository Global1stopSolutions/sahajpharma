import React from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { HeadingDetail } from "./heading-detail";
import { COMPANY_BENIFTS } from "@/constants";
import { Containerwrapper } from "./container/container-wrapper";

export const Companybenfits = () => {
  return (
    <>
      <Containerwrapper>
        <div className="sm:flex items-center">
          <div className="flex flex-col space-y-unit-3xl basis-3/6">
            <HeadingDetail
              titleWidth="w-full"
              headingTitle="BENEFIT"
              title="Adding People Strategy in Every Company"
              description="Making talent a priority fuels success. Implementing strategies to identify the right talent, empower by providing suitable pathways, and nurturing skill development."
            />
            <div className="flex flex-col space-y-unit-2xl">
              {COMPANY_BENIFTS.map((benfit, index) => (
                <div className="flex items-center space-x-unit-lg" key={index}>
                  <div className="bg-primary min-h-[60px] min-w-[60px] lg:min-h-[78px] lg:min-w-[78px]  rounded-full flex justify-center items-center">
                    <i className={`text-white text-3xl ${benfit.icon}`} />
                  </div>
                  <div className="flex flex-col lg:w-[40%] w-full">
                    <label className="font-semibold text-medium text-content1-charlestonGreen">
                      {benfit.label}
                    </label>
                    <p className="text-tiny font-light text-content1-oldsilver">
                      {benfit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="basis-3/6 mt-unit-4xl">
            <Image
              as={NextImage}
              src="/images/job-benift.png"
              alt="job-benift"
              height={645}
              width={800}
              loading="eager"
              quality={100}
            />
          </div>
        </div>
      </Containerwrapper>
    </>
  );
};
