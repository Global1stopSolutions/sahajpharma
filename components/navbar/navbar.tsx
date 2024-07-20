"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

// import { Link } from "@nextui-org/link";
import React, { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { Topnavbar } from "./top-navbar";
import { usePathname } from "next/navigation";
import { Inputformfield } from "../input/input-form-field";
// import { LangDropdown } from "../language-dropdown";

export const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
      <Navbar
        isBordered
        className="navbar-wrapper"
        height="var(--custom-header-height)"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        classNames={{
          menu: ``,
        }}
      >
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <div className="sm:h-[60px] sm:w-[60px] h-[60px] w-[60px] relative">
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
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="start">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <div className="sm:h-[60px] sm:w-[60px] h-[60px] w-[60px] relative">
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
        </NavbarContent>

        <NavbarContent justify="end">
          <ul className="hidden sm:flex gap-9 justify-end grow ml-2">
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
            {/* <div className="">
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
            </div> */}
          </ul>
        </NavbarContent>

        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarMenu>
          <div className="flex flex-col h-full pt-8">
            <div className="mt-2 flex flex-col gap-2 grow">
              {siteConfig.navMenuItems.map((item, index) => (
                <NavbarMenuItem
                  key={`${item}-${index}`}
                  className="border-b border-primary"
                >
                  <NextLink
                    className={` 
                      ${
                        currentPath === item.href
                          ? "navigation-active-link"
                          : "navigation-link"
                      }
                    `}
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
            {/* <div className="pb-unit-md border-t-1 border-gray-400">
              <div className="sm:block"><LangDropdown /></div>
            </div> */}
          </div>
        </NavbarMenu>
      </Navbar>
    </>
  );
};
