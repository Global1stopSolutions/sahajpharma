import React from "react";

export interface ContainerwrapperProps {
  children: React.ReactNode;
  className?: string;
  isBackground?: boolean;
  isMarginBottom?: boolean;
  conatinerFull?: boolean;
}

export const Containerwrapper = ({
  children,
  className,
  isBackground = false,
  isMarginBottom = true,
  conatinerFull = false,
}: ContainerwrapperProps) => {
  return (
    <section
      className={`${isMarginBottom ? "mb-unit-3xl" : "mb-0"} ${
        isBackground ? `${className}` : ""
      }`}
    >
      {/* <div className="container" >{children}</div> */}
      <div className={`${conatinerFull ? "w-full" : "container"}`}>
        {children}
      </div>
    </section>
  );
};
