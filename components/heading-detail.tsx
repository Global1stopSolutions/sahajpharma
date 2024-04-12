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
        <h6 className="uppercase text-primary sm:text-base text-tiny flex items-center space-x-unit-sm">
          <div className="max-w-max">{headingTitle}</div>
          <div className="h-1 w-8 bg-secondary"></div>
        </h6>
        <h1 className={`heading-2 text-content1-charlestonGreen ${titleWidth}`}>
          {title}
        </h1>
        <p className="text-content1-oldsilver text-small sm:text-base font-light">
          {description}
        </p>
      </div>
    </>
  );
};
