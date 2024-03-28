import React from "react";
import { Card, CardBody, Link } from "@nextui-org/react";
import { JOB_DETAIL } from "@/constants";
import { ButtonDefault } from "../button/button";

export interface JobOPeningCard {
  jobNumber: number;
}
export const JobOPeningCard = ({ jobNumber }: JobOPeningCard) => {
  return (
    <>
      {JOB_DETAIL.slice(0, jobNumber).map((jobDetails, index) => (
        <Card key={index} className="rounded-lg realtive overflow-visible">
          <CardBody className="items-start space-y-unit-md py-unit-xl overflow-visible">
            <h6 className="text-content1-quartz font-light text-sm">
              {jobDetails.headingLabel}
            </h6>
            <h6 className="text-base text-primary-foreground font-semibold">
              {jobDetails.label}
            </h6>
            <div className="contents">
              <p className="font-light text-xs line-clamp-2 w-[85%]">
                {jobDetails.description}
              </p>
              <Link
                href="/current-opening"
                target="_blank"
                className="underline text-xs"
              >
                {jobDetails.link}
              </Link>
            </div>
            <div className="flex items-center space-x-unit-sm text-xs">
              <i className={`text-primary text-xl  ${jobDetails.icon}`} />
              <div className="text-content1-oldsilver">
                {jobDetails.jobType}
              </div>
            </div>
            <span className="group-hover:hidden absolute h-12 w-12 bg-secondary rotate-180 top-[-16px] right-0 rounded-tr-full">
              <i
                className={`rotate-180 h-unit-sm w-unit-sm block text-2xl top-[28px] text-secondary-foreground relative right-[-17px] ${jobDetails.verify}`}
              />
            </span>
            <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Link href="/job-seeker">
                <ButtonDefault
                  title={jobDetails.buttonTitle}
                  variant="btn-primary"
                  btnSmall
                />
              </Link>
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  );
};
