"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Link } from "@nextui-org/link";
import React, { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { Topnavbar } from "./top-navbar";
import { usePathname } from "next/navigation";
import { Inputformfield } from "../input/input-form-field";
import { LangDropdown } from "../language-dropdown";

export const Navbar = () => {
  //mobile side bar active //
  const [isActive, setIsActive] = useState(false);

  //search open //
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const search = () => {
    setSearchIsOpen(!searchIsOpen);
  };
  //path active //
  const currentPath = usePathname();

  // const toggleClass = () => {
  //   setIsActive(!isActive);
  // };

  useEffect(() => {
    setIsActive(false); // close menu if path changes!
  }, [usePathname]);

  return (
    <>
      <Topnavbar />

      <NextUINavbar
        shouldHideOnScroll={false}
        isBlurred={true}
        className="navbar-wrapper"
        height="var(--custom-header-height)"
        maxWidth="full"
        classNames={{
          menu: ` absolute`,
        }}
      >
        <NavbarContent justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <div className="sm:h-[92px] sm:w-[92px] h-[70px] w-[70px] relative">
                <Image
                  className="overflow-visible "
                  as={NextImage}
                  width={0}
                  height={0}
                  style={{ width: "auto", height: "auto" }}
                  src="/images/logo.svg"
                  alt="logo"
                  loading="eager"
                  quality={100}
                />
              </div>
            </NextLink>
          </NavbarBrand>
          <ul className="hidden lg:flex gap-4 justify-end space-x-8 grow ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={
                    currentPath === item.href
                      ? "navigation-active-link"
                      : "navigation-link"
                  }
                  href={item.href}
                >
                  {item.label}
                  <span
                    className={
                      currentPath === item.href ? "active-link-border" : ""
                    }
                  />
                </NextLink>
              </NavbarItem>
            ))}
            <div className="">
              <i
                className="ic-search text-2xl cursor-pointer border-l pl-unit-md border-content1-oldsilver text-content1-quartz hover:text-primary duration-700"
                onClick={search}
              />
              <div className="absolute bottom-0 right-[17px]">
                {searchIsOpen && (
                  <Inputformfield
                    label="Name"
                    type="text"
                    labePlacement="outside"
                    placeholder="Search here"
                    radius="sm"
                    variant="text-form-field"
                    isLabelHidden={true}
                  />
                )}
              </div>
            </div>
          </ul>
        </NavbarContent>

        <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
          <NavbarMenuToggle onClick={() => setIsActive(!isActive)} />
          <div className="">
            <i
              className="ic-search text-2xl cursor-pointer border-l pl-unit-md border-content1-oldsilver text-content1-quartz hover:text-primary duration-700"
              onClick={search}
            />
            <div className="absolute bottom-0 right-[17px]">
              {searchIsOpen && (
                <Inputformfield
                  label="Name"
                  type="text"
                  labePlacement="outside"
                  placeholder="Search here"
                  radius="sm"
                  variant="text-form-field"
                  isLabelHidden={true}
                />
              )}
            </div>
          </div>
        </NavbarContent>

        <NavbarMenu className={isActive ? "navbar-menu-trs" : "w-0"}>
          <div
            className="flex flex-col"
            style={{ height: "calc(100vh - 14%)" }}
          >
            <div className="mx-4 mt-2 flex flex-col gap-2 grow">
              {siteConfig.navMenuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <NextLink
                    className={
                      currentPath === item.href
                        ? "navigation-active-link"
                        : "navigation-link"
                    }
                    href={item.href}
                  >
                    {item.label}
                    <span
                      className={
                        currentPath === item.href ? "active-link-border" : ""
                      }
                    />
                  </NextLink>
                </NavbarMenuItem>
              ))}
            </div>
            <div className="pb-unit-md border-t-1 border-gray-400 h-[100px]">
              <div className="sm:block">
                <LangDropdown />
              </div>
            </div>
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </>
  );
};
