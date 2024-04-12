import React from "react";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { COMPANY_DETAIL, SOCIAL_LINKS } from "@/constants";
import { LangDropdown } from "../language-dropdown";
import { Containerwrapper } from "../container/container-wrapper";

export const Topnavbar = () => {
  return (
    <>
      <Containerwrapper
        isBackground
        isMarginBottom={false}
        className="bg-secondary"
      >
        <div className="flex justify-between">
          <div className="flex gap-unit-md sm:p-unit-md md:px-0 px-0 py-unit-md">
            {COMPANY_DETAIL.map((companyDetail, index) => (
              <div key={index} className={index === 1 ? "sm:block hidden" : ""}>
                <Link href="" className="text-white text-tiny flex space-x-2">
                  <i className={companyDetail.icon} />
                  <p className=""> {companyDetail.description}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center ">
              <div className="flex p-unit-md gap-unit-md bg-content1-opacity1">
                {SOCIAL_LINKS.map((socialLinks, index) => (
                  <Link
                    key={index}
                    className="text-white text-small flex space-x-unit-md"
                  >
                    <i className={`cursor-pointer ${socialLinks.icon}`} />
                  </Link>
                ))}
              </div>
              <div className="sm:hidden  md:block">
                <LangDropdown />
              </div>
            </div>
          </div>
        </div>
      </Containerwrapper>
    </>
  );
};
