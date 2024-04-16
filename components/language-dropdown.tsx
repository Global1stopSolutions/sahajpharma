"use client";

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import React from "react";

export const LangDropdown = () => {
  const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(new Set(["English"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
          disableRipple
          className="md:text-white min-w-[110px] data-[hover=true]:bg-transparent aria-expanded:opacity-100 aria-expanded:scale-[1]  data-[pressed=true]:scale-[1]"
        >
          <i className="ic-globe" /> {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        // onSelectionChange={setSelectedKeys}
        aria-label="Static Actions"
        itemClasses={{
          base: [
            "transition-opacity",
            "data-[selectable=true]:focus:bg-primary",
            "data-[selectable=true]:focus:text-white",
            "data-[pressed=true]:opacity-70",
          ],
        }}
      >
        <DropdownItem key={"English" as string}>English</DropdownItem>
        <DropdownItem key={"Thai" as string}>Thai</DropdownItem>
        <DropdownItem key={"Nepali" as string}>Nepali</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
