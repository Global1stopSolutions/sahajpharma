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
import React from "react";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { Containerwrapper } from "../container/container-wrapper";
import { Topnavbar } from "./top-navbar";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const currentPath = usePathname();
  return (
    <>
      <Topnavbar />
      <Containerwrapper isMarginBottom={false}>
        <NextUINavbar
          className=""
          position="sticky"
          height="125px"
          maxWidth="full"
        >
          <NavbarContent justify="start">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
              <NextLink
                className="flex justify-start items-center gap-1"
                href="/"
              >
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
            </ul>
          </NavbarContent>

          <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
            <NavbarMenuToggle />
          </NavbarContent>

          <NavbarMenu>
            <div className="mx-4 mt-2 flex flex-col gap-2">
              {siteConfig.navMenuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link href="#" size="lg">
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              ))}
            </div>
          </NavbarMenu>
        </NextUINavbar>
      </Containerwrapper>
    </>
  );
};
