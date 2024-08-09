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
  isInputSecondary?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMsgRef?: any;
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
  isInputSecondary = false,
  onChange,
  errorMsgRef,
}: InputformfieldProps) => {
  return (
    <>
      <div className="formcontainer">
        {variant === "text-form-field" && (
          <>
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
                inputWrapper: `text-white !cursor-text ${
                  isInputSecondary
                    ? "rounded-none min-h-[75px] bg-secondary data-[hover=true]:bg-secondary group-data-[focus=true]:bg-secondary"
                    : "bg-content1-cultured data-[hover=true]:bg-default-200 text-foreground-500"
                }`,
                label: `${
                  isLabelHidden
                    ? "hidden"
                    : "text-base text-content1-charlestonGreen font-medium label-hidden"
                } `,
                input: `${
                  isInputSecondary
                    ? "text-lg group-data-[has-value=true]:text-white placeholder:text-white"
                    : ""
                }`,
              }}
              endContent={endContent}
              className={className}
            />
            {isRequired && (
              <span ref={errorMsgRef} className="formerror"></span>
            )}
          </>
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
              inputWrapper:
                "bg-content1-cultured data-[hover=true]:bg-default-200",
              label: "text-base text-content1-charlestonGreen font-medium",
              input: "min-h-[100px]",
            }}
          />
        )}
      </div>
    </>
  );
};
