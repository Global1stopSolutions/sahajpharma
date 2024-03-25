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
          <div className="flex gap-unit-md p-unit-md">
            {COMPANY_DETAIL.map((companyDetail, index) => (
              <Link
                key={index}
                href=""
                className="text-white text-tiny flex space-x-2"
              >
                <i className={companyDetail.icon} />
                <p className=""> {companyDetail.description}</p>
              </Link>
            ))}
          </div>
          <div className="flex items-center">
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
            <LangDropdown />
          </div>
        </div>
      </Containerwrapper>
    </>
  );
};
