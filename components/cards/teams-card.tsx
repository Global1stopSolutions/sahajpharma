import React from "react";
import { Card, CardBody, Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import { OUR_TEAMS } from "@/constants";

export const Teamscard = () => {
  return (
    <>
      <div className="grid sm:grid-cols-3 gap-unit-xl sm:gap-unit-md">
        {OUR_TEAMS.map((imgItem, index) => (
          <div key={index}>
            <div className="flex flex-col hover:opacity-100 group/item">
              <div className="pr-unit-xl">
                <Image
                  radius="none"
                  as={NextImage}
                  src={imgItem.teamImg}
                  alt={imgItem.teamImg}
                  height="400"
                  width="400"
                  loading="eager"
                  quality={100}
                />
              </div>
              <Card className="rounded-none realtive w-full shadow-small min-h-[300px] mt-[-200px] border-t-2 border-r-2 border-gray-300 group-hover/item:border-secondary">
                <CardBody className="flex flex-col h-full justify-end">
                  <div className="absolute bottom-[100px] z-10 right-[10px] bg-primary p-unit-md h-[50px] w-[50px]">
                    <i className={`text-base text-white ${imgItem.shareIcon}`} />
                    <div className="hidden group-hover/item:block">
                      <div className="absolute right-0 z-10 top-[-100px] flex flex-col-reverse justify-end items-end">
                        {imgItem.socialIcon.map((item, index) => (
                          <div key={`${item}-${index}`}>
                            <Link href={item.link} className="hover:opacity-100" target="_blank">
                              <div className=" bg-primary p-unit-md h-[50px] w-[50px] text-base text-white hover:text-content1-charlestonGreen transition duration-700">
                                <i className={item.icon} />
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="px-unit-lg pb-unit-sm">
                    <label className="text-content1-eerieBlack font-bold text-xl hover:text-primary transition duration-700 cursor-pointer">
                      {imgItem.name}
                    </label>
                    <p className="text-small text-content1-oldsilver">{imgItem.postion}</p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
