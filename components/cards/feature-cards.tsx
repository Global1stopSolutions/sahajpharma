"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { FEATURES_DETAIL } from "@/constants";

export const FeatureCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-unit-sm relative mb-[220px] top-[110px]">
        {FEATURES_DETAIL.map((featureDetails, index) => (
          <Card
            key={index}
            className="rounded-lg hover:bg-primary hover:text-white group realtive cursor-pointer"
          >
            <CardBody className="items-center space-y-unit-md py-unit-xl">
              <i
                className={`text-primary text-5xl group-hover:text-white ${featureDetails.icon}`}
              />
              <h6 className="text-content1-charlestonGreen font-semibold text-xl group-hover:text-white ">
                {featureDetails.label}
              </h6>
              <p className="text-center font-light text-lg">
                {featureDetails.description}
              </p>
              <span className="group-hover:hidden absolute h-12 w-12 bg-secondary left-0 bottom-0 rounded-tr-full"></span>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};