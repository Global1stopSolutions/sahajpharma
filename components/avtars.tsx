"use client";
import React from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";

export default function Avatars() {
  return (
    <AvatarGroup
      className="justify-start "
      isBordered
      max={5}
      total={40}
      renderCount={(count) => (
        <p className="text-small text-foreground font-medium ms-2">
          {count} K+ Member Active
        </p>
      )}
    >
      <Avatar
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        color="primary"
      />
      <Avatar
        color="primary"
        src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
      />
      <Avatar
        color="primary"
        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
      />
      <Avatar
        color="primary"
        src="https://i.pravatar.cc/150?u=a04258114e29026302d"
      />
      <Avatar
        color="primary"
        src="https://i.pravatar.cc/150?u=a04258114e29026702d"
      />
      <Avatar
        color="primary"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      />
    </AvatarGroup>
  );
}
