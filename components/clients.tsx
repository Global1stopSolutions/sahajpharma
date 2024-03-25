import React from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { HeadingDetail } from "./heading-detail";
import { CLIENT_IMG } from "@/constants";
import { Containerwrapper } from "./container/container-wrapper";

export const Clients = () => {
  return (
    <>
      <Containerwrapper>
        <div className="flex space-x-unit-lg">
          <div className="w-[30%]">
            <HeadingDetail
              titleWidth="w-full"
              headingTitle="FEATURED"
              title="Our Clients"
              description="Dui vel aliquam nullam nulla natoque iaculis viverra conubia letius. Primis non rhoncus dolor a urna finibus ultricies libero."
            />
          </div>
          <div className="grid grid-cols-3 gap-unit-md w-full">
            {CLIENT_IMG.map((client, index) => (
              <div
                key={index}
                className="relative bg-secondary-foreground rounded-md shadow-small w-full flex items-center justify-center p-unit-md h-[111px]"
              >
                <Image
                  as={NextImage}
                  src={client.clientImg}
                  alt="client"
                  height={170}
                  width={120}
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
      </Containerwrapper>
    </>
  );
};
