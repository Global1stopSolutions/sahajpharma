import React from "react";
import { HeadingDetail } from "./heading-detail";
import { Containerwrapper } from "./container/container-wrapper";
import { OUR_VALUES } from "@/constants";
import { Card, CardBody } from "@nextui-org/react";

export const Ourvalue = () => {
  return (
    <>
      <Containerwrapper>
        <div className="flex space-x-unit-md">
          <div className="basis-6/12">
            <HeadingDetail
              titleWidth="w-[100%]"
              headingTitle="Our values"
              title="Recruitment company
          work with effectiveness."
              description="Donec class lacinia vel hac laoreet amet et dictumst suspendisse. Maximus tortor pede egestas quis facilisis est. Neque dis fringilla augue mollis viverra enim conubia pulvinar."
            />
          </div>
          <div className="basis-6/12 flex space-x-unit-lg">
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
