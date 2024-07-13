import React from "react";

import { Containerwrapper } from "./container/container-wrapper";
import { HeadingDetail } from "./heading-detail";
import { Teamscard } from "./cards/teams-card";
import { Clients } from "./clients";

export const Teams = () => {
  return (
    <>
      <Containerwrapper>
        <div className="mt-unit-4xl flex flex-col space-y-unit-3xl">
          <HeadingDetail
            titleWidth="sm:w-[60%] w-full"
            contentCenter
            headingTitle="Our Team"
            title="Awesome people behind us"
            description="Our experienced consultants understand the industry and have profound knowledge about the job market, are dedicated to provide innovative solutions for job seekers and organizations."
          />
          <Teamscard />
          <Clients />
        </div>
      </Containerwrapper>
    </>
  );
};
