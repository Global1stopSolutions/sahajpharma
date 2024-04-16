"use client";
import React, { ChangeEvent } from "react";
import { Select, SelectItem } from "@nextui-org/react";

export interface SelectformfieldProps {
  label: string;
  name?: string;
  placeholder: string;
  labePlacement: string;
  radius: string;
  data: any[];
  value?: string | any;
  isRequired?: boolean;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  errorMsgRef?: any;
}

export const Selectformfield = ({
  label,
  name,
  placeholder,
  labePlacement,
  radius,
  data,
  value,
  isRequired,
  onChange,
  errorMsgRef,
}: SelectformfieldProps) => {
  const itemClasses = {
    base: "data-[hover=true]:text-white data-[selectable=true]:focus:text-white data-[hover=true]:bg-default-100 data-[selectable=true]:focus:bg-primary data-[pressed=true]:opacity-70",
    inputWrapper: "bg-content1-cultured data-[hover=true]:bg-default-200",
    label: "text-base text-content1-charlestonGreen font-medium",
  };

  return (
    <div className="formcontainer">
      <Select
        items={data}
        label={label}
        name={name}
        isRequired={isRequired}
        value={value}
        radius={radius as any}
        placeholder={placeholder}
        labelPlacement={labePlacement as any}
        classNames={itemClasses}
        onChange={onChange}
        listboxProps={{
          itemClasses: {
            base: [
              "data-[hover=true]:text-white",
              "data-[hover=true]:bg-default-100",
              "data-[selectable=true]:focus:bg-primary",
              "data-[pressed=true]:opacity-70",
              "data-[selectable=true]:focus:text-white",
            ],
          },
        }}
      >
        {(data) => <SelectItem key={data.value}>{data.label}</SelectItem>}
      </Select>
      {isRequired && <span ref={errorMsgRef} className="formerror"></span>}
    </div>
  );
};
