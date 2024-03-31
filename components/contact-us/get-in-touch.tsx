import React from "react";
import { Containerwrapper } from "../container/container-wrapper";
import { HeadingDetail } from "../heading-detail";
import { CONTACT_DETAILS } from "@/constants";
export const Getintouch = () => {
  return (
    <>
      <Containerwrapper>
        <div className="flex">
          <div className="basis-6/12 bg-content1-cultured p-unit-xl">
            <HeadingDetail
              titleWidth="w-[100%]"
              headingTitle="Get in touch"
              title="Don't hesitate to contact
      us for more information."
              description="Donec class lacinia vel hac laoreet amet et dictumst suspendisse. Maximus tortor pede egestas quis facilisis est. Neque dis fringilla augue mollis viverra enim conubia pulvinar."
            />
            <div className="border-t-1 border-gray-300 my-unit-xl" />

            {CONTACT_DETAILS.map((mainItem, index) => (
              <div key={index} className="mb-unit-xl">
                <div className="flex items-start space-x-unit-md">
                  <div className="text-primary text-[28px]">
                    <i className={mainItem.icon} />
                  </div>
                  <div>
                    <label className="text-content1-charlestonGreen font-semibold">
                      {mainItem.label}
                    </label>
                    {mainItem.location?.map((item, index) => (
                      <div key={`${item}-${index}`} className="my-unit-md">
                        <div className="flex flex-col space-y-unit-md">
                          <div className="flex items-center space-x-unit-md">
                            <label className="text-primary font-semibold text-base">
                              {item.officeName}
                            </label>
                            <span className="h-1 w-8 bg-secondary block"></span>
                          </div>
                          <p className="text-content1-oldsilver font-light">{item.address}</p>
                        </div>
                      </div>
                    ))}
                    <div className="text-content1-oldsilver font-light">{mainItem.otherDetail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="basis-6/12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.548650195115!2d73.16142207347977!3d22.295080943088077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc61e71660c75%3A0xf8087fd44f877fb6!2sSahaj%20Pharma%20For%20HR%20Solutions!5e0!3m2!1sen!2snz!4v1710919111489!5m2!1sen!2snz"
              width="600"
              height="900"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </Containerwrapper>
    </>
  );
};
