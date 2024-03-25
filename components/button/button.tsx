import React from "react";
import { Button } from "@nextui-org/react";
type ButtonProps = {
  variant: string;
  title: string;
  full?: boolean;
  btnSmall?: boolean;
  type?: any;
  onPress?: () => void;
};

export const ButtonDefault = ({
  title,
  variant,
  full,
  btnSmall,
  type,
  onPress,
}: ButtonProps) => {
  return (
    <>
      <Button
        onPress={onPress}
        type={type}
        className={`${
          btnSmall
            ? "w-[106px] h-[36px] text-tiny"
            : " w-[204px] h-[46px] p-0 text-base"
        } ${variant}  ${full && "w-full"}`}
      >
        {title}
      </Button>
    </>
  );
};
