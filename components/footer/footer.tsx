"use client";
import React from "react";
import { Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import { ButtonDefault } from "../button/button";
import {
  CATEGORIES,
  COMPANY,
  FOOTER_LINK_DETAILS,
  SOCIAL_LINKS,
} from "@/constants";
import { Inputformfield } from "../input/input-form-field";
import { useState, useEffect } from "react";
import { Containerwrapper } from "../container/container-wrapper";

export const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);
  return (
    <>
      <Containerwrapper
        isBackground
        className="bg-content1-raisinBlack mt-unit-6xl"
      >
        <div className="bg-white p-unit-xl rounded-lg mt-[-20%] shadow-medium">
          <div className="carrer-job">
            <div className="overlay" />
            <div className="flex relative">
              <div className="flex flex-col space-y-unit-md basis-8/12">
                <label className="text-m-large font-bold">
                  Looking for a career change? Browse our job listings now!
                </label>
                <p className="text-content1-oldsilver text-small w-[60%]">
                  Sociosqu eros cras magna phasellus conubia semper netus lectus
                  lacinia mattis sed.
                </p>
                <ButtonDefault variant="btn-primary" title="Apply Now" />
              </div>
              <div className="absolute right-0 top-[-144px]">
                <Image
                  as={NextImage}
                  src="/images/carrer-men.png"
                  alt="carrer-men"
                  height={370}
                  width={370}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-unit-2xl">
          <div className="flex flex-col space-y-unit-md col-span-4">
            <Image
              className="overflow-visible"
              as={NextImage}
              width="92"
              height="92"
              style={{ height: "auto", width: "auto" }}
              src="/images/logo.svg"
              alt="logo"
              loading="eager"
              quality={100}
            />
            <p className="text-white text-tiny">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rem
              necessitatibus voluptatum nulla id eius sit odio repudiandae
              adipisci magnam dolore vero saepe dolor pariatur.
            </p>
            <ul className="flex space-x-unit-md">
              {SOCIAL_LINKS.map((socialLinks, index) => (
                <li className="" key={index}>
                  <Link className="text-white bg-content1-oldsilver hover:bg-primary  hover:opacity-100 hover:duration-700 transition rounded-full cursor-pointer text-large flex space-x-unit-md p-unit-sm ">
                    <i className={`cursor-pointer ${socialLinks.icon}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-unit-md col-start-7 col-span-2 mt-unit-lg">
            <label className="text-xl text-white font-semibold">
              Categories
            </label>
            <ul>
              {CATEGORIES.map((category, index) => (
                <li key={index}>
                  <Link
                    href={category.link}
                    className="text-white text-small hover:text-primary hover:duration-700 cursor-pointer "
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-unit-md col-start-9 col-span-2 mt-unit-lg">
            <label className="text-xl text-white font-semibold">Company</label>
            <ul>
              {COMPANY.map((company, index) => (
                <li key={index}>
                  <Link
                    href={company.link}
                    className="text-white text-small  hover:text-primary hover:duration-700 cursor-pointer "
                  >
                    {company.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col col-span-2 mt-unit-lg">
            <label className="text-xl text-white font-semibold">
              Newsletter
            </label>
            <p className="text-white text-small mt-unit-lg">
              Get exclusive deals by signing up to our Newsletter.
            </p>
            <div className="flex flex-col space-y-unit-sm mt-unit-sm">
              <Inputformfield
                type="email"
                label="Email"
                size="sm"
                radius="sm"
                variant="text-form-field"
              />
              <ButtonDefault variant="btn-primary" title="Sign Up" full />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 my-unit-lg" />
        <div className="flex items-center justify-between ">
          <p className="text-white text-tiny">{`© ${year} Copyrights by Pkdesign. All Rights Reserved`}</p>
          <div className="flex divide-x-[2px] divide-primary">
            {FOOTER_LINK_DETAILS.map((footerLink, index) => (
              <div key={index} className="flex items-center px-unit-xs">
                <Link
                  href={footerLink.link}
                  className="text-white text-tiny hover:text-primary hover:duration-700 cursor-pointer"
                >
                  {footerLink.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Containerwrapper>
    </>
  );
};