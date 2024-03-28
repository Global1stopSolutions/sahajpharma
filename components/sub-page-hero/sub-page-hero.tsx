import React from "react";

export interface SubPageHeroProps {
  herobg?: string;
  title: string;
  description: string;
}

export const Subpagehero = ({
  herobg,
  title,
  description,
}: SubPageHeroProps) => {
  return (
    <>
      <section className="mb-unit-3xl">
        <div className={`hero-bg ${herobg}`}>
          <div className="overlay"></div>
          <div className="flex flex-col absolute top-[35%] left-[50%] translate-x-[-50%] translate-y[-50%] w-full text-center">
            <div className="font-bold text-x-large text-white">{title}</div>
            <div className="text-white text-2xl font-normal w-[70%] mx-auto">
              {description}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
