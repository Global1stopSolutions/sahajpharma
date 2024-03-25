"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
export const LangDropdown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" className="text-white ">
          <i className="ic-globe" /> English
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="japnese">Japnese</DropdownItem>
        <DropdownItem key="Thai">Thai</DropdownItem>
        <DropdownItem key="Nepali">Nepali</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
