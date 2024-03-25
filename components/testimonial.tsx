import React from "react";
import { Avatar } from "@nextui-org/react";
import { HeadingDetail } from "./heading-detail";
import { Containerwrapper } from "./container/container-wrapper";

export const Testimonial = () => {
  return (
    <>
      <Containerwrapper isBackground className="bg-testimonial-wrapper">
        <div className="flex space-x-unit-4xl mt-[200px]">
          <div className="w-[40%]">
            <HeadingDetail
              titleWidth="w-full"
              headingTitle="TESTIMONIAL"
              title="What they say 
                about us"
              description="Dui vel aliquam nullam nulla natoque iaculis viverra conubia letius. Primis non rhoncus dolor a urna finibus ultricies libero."
            />
          </div>
          <div className="w-full">
            <div className="bg-primary rounded-2xl p-unit-lg h-max">
              <div className="flex flex-col space-y-unit-md relative">
                <div className="flex items-center space-x-unit-xs">
                  <i className="ic-star text-white" />
                  <i className="ic-star text-white" />
                  <i className="ic-star text-white" />
                  <i className="ic-star text-white" />
                </div>
                <p className="text-white text-medium font-light">
                  Proin tempus pede eros nullam vivamus convallis nunc.
                  Sollicitudin cubilia porta convallis ad donec semper aliquam
                  aptent dignissim nunc.Proin tempus pede eros nullam vivamus
                  convallis nunc. Sollicitudin cubilia porta convallis ad donec
                  semper aliquam aptent dignissim nunc.Proin tempus pede eros
                  nullam vivamus convallis nunc. Sollicitudin cubilia porta
                  convallis ad donec semper aliquam aptent dignissim nunc.
                </p>
                <div className="absolute right-0 top-[-30px]">
                  <i className="ic-qutoes text-8xl text-gray-300 opacity-40" />
                </div>
                <div
                  className="w-0 h-0 left-10 absolute -bottom-[75px]
  border-l-[50px] border-l-transparent
  border-t-[55px] border-t-primary
  border-r-[95px] border-r-transparent"
                ></div>
              </div>
            </div>
            <div className="ml-[160px] mt-10">
              <div className="flex items-center space-x-unit-md">
                <Avatar
                  isBordered
                  size="lg"
                  color="primary"
                  src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                />
                <div>
                  <label className="text-content1-charlestonGreen text-medium font-medium">
                    Siobhán McFeeney
                  </label>
                  <p className="text-content1-oldsilver text-tiny font-light">
                    Client of notech company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Containerwrapper>
    </>
  );
};
