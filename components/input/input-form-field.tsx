import React from "react";
import { Input, Textarea } from "@nextui-org/react";

export interface InputformfieldProps {
  label: string;
  type: string;
  placeholder?: string;
  radius?: string | any;
  size?: string | any;
  labePlacement?: string | any;
  variant?: string;
  value?: string;
  id?: string;
  name?: string;
  isRequired?: boolean;
  endContent?: any;
  className?: string;
  isLabelHidden?: boolean;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Inputformfield = ({
  label,
  type,
  placeholder,
  size,
  radius,
  labePlacement,
  variant,
  value,
  id,
  name,
  isRequired,
  endContent,
  className,
  isLabelHidden = false,
  onChange,
}: InputformfieldProps) => {
  return (
    <>
      <div>
        {variant === "text-form-field" && (
          <Input
            radius={radius}
            name={name}
            id={id}
            size={size}
            type={type}
            label={label}
            value={value}
            placeholder={placeholder}
            labelPlacement={labePlacement}
            isRequired={isRequired}
            onChange={onChange}
            classNames={{
              base: `${isLabelHidden ? "data-[has-label=true]:mt-0" : ""}`,
              inputWrapper: "bg-content1-cultured data-[hover=true]:bg-default-200",
              label: `${
                isLabelHidden
                  ? "hidden"
                  : "text-base text-content1-charlestonGreen font-medium label-hidden"
              }`,
            }}
            endContent={endContent}
            className={className}
          />
        )}

        {variant === "textarea" && (
          <Textarea
            radius={radius}
            size={size}
            name={name}
            label={label}
            placeholder={placeholder}
            labelPlacement={labePlacement}
            value={value}
            onChange={onChange}
            classNames={{
              inputWrapper: "bg-content1-cultured data-[hover=true]:bg-default-200",
              label: "text-base text-content1-charlestonGreen font-medium",
              input: "min-h-[100px]",
            }}
          />
        )}
      </div>
    </>
  );
};
