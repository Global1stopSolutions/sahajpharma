import React from "react";
type headingDetailProps = {
  headingTitle: string;
  title: string;
  description?: string;
  contentCenter?: boolean;
  titleWidth: string;
};

export const HeadingDetail = ({
  headingTitle,
  title,
  description,
  contentCenter,
  titleWidth,
}: headingDetailProps) => {
  return (
    <>
      <div
        className={`flex flex-col space-y-unit-md ${
          contentCenter ? "justify-center items-center text-center" : ""
        }`}
      >
        <h6 className="uppercase text-primary text-base flex items-center space-x-unit-sm">
          <div>{headingTitle}</div>
          <div className="h-1 w-8 bg-secondary"></div>
        </h6>
        <h1
          className={`text-x-large font-bold text-content1-charlestonGreen  ${titleWidth}`}
        >
          {title}
        </h1>
        <p className="text-content1-oldsilver text-medium font-light">
          {description}
        </p>
      </div>
    </>
  );
};
