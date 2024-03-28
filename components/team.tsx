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
            titleWidth="w-[60%]"
            contentCenter
            headingTitle="Our Team"
            title="Awesome people behind us."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
          <Teamscard />
          <Clients />
        </div>
      </Containerwrapper>
    </>
  );
};
