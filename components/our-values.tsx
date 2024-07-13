import React from "react";
import { HeadingDetail } from "./heading-detail";
import { Containerwrapper } from "./container/container-wrapper";
import { OUR_VALUES } from "@/constants";
import { Card, CardBody } from "@nextui-org/react";

export const Ourvalue = () => {
  return (
    <>
      <Containerwrapper>
        <div className="sm:flex space-y-unit-lg sm:space-y-unit-0 sm:space-x-unit-md">
          <div className="basis-6/12">
            <HeadingDetail
              titleWidth="w-[100%]"
              headingTitle="Our founder"
              title=""
              description="R S Pandey has over 22 years of experience working in pharmaceutical and chemical industries, served as Plant HR Head at Cadila Pharmaceuticals Ltd, Lupin Laboratories Ltd, Macleods Pharmaceuticals Ltd, Alken Laboratories Limited, Micro Lab, and more. He founded Sahaj Pharma for HR Solution in 2016 and is commited towards connecting top talent with leading organizations while upholding the highest standards of service and integrity."
            />
          </div>
          <div className="basis-6/12 sm:flex space-y-unit-lg sm:space-y-unit-0  sm:space-x-unit-lg">
            {OUR_VALUES.map((item, index) => (
              <Card key={index} className="rounded-lg realtive">
                <CardBody className="items-center space-y-unit-md py-unit-xl">
                  <i className={`text-primary text-5xl  ${item.icon}`} />
                  <h6 className="text-content1-charlestonGreen font-semibold text-xl">
                    {item.label}
                  </h6>
                  <p className="text-center text-content1-oldsilver font-light text-small">
                    {item.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </Containerwrapper>
    </>
  );
};
