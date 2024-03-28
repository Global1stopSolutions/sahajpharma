"use client";
import React from "react";
import { HeadingDetail } from "./heading-detail";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FAQ_LIST } from "@/constants";
import { Containerwrapper } from "./container/container-wrapper";

export const Faq = () => {
  const itemClasses = {
    base: "py-0 w-full accordian-wrapper",
    title:
      "font-semibold text-medium text-content1-charlestonGreen accordian-title",
    trigger:
      "px-unit-lg py-0 bg-content1-cultured rounded-lg h-14 flex items-center rounded-bl-none rounded-br-none acordian-action",
    indicator: "text-medium idicator-white",
    content: "text-small p-unit-lg bg-content1-cultured",
  };

  return (
    <>
      <Containerwrapper>
        <div className="flex space-x-unit-4xl">
          <div className="basis-2/5">
            <HeadingDetail
              titleWidth="w-full"
              headingTitle="COMMON QUESTIONS"
              title="Frequently Ask 
            Question."
              description="Dui vel aliquam nullam nulla natoque iaculis viverra conubia letius. Primis non rhoncus dolor a urna finibus ultricies libero."
            />
          </div>
          <div className="basis-full">
            <Accordion
              className="flex flex-col space-y-unit-lg"
              defaultExpandedKeys={["1"]}
              itemClasses={itemClasses}
              showDivider={false}
            >
              {FAQ_LIST.map((item, index) => (
                <AccordionItem key={`${item}-${index}`} title={item.title}>
                  {item.description}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Containerwrapper>
    </>
  );
};
