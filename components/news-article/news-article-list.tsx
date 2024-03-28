import React from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { Card, CardBody } from "@nextui-org/react";
import { ARTICLE_LIST } from "@/constants";
import { Link } from "@nextui-org/react";

export const Newsarticlelist = ({
  articleNumber,
}: {
  articleNumber: number;
}) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-unit-md mt-unit-3xl">
        {ARTICLE_LIST.slice(0, articleNumber).map((article, index) => (
          <div key={index}>
            <div className="relative">
              <Image
                radius="none"
                as={NextImage}
                src={article.articleImg}
                alt={article.articleImg}
                isZoomed
                height={460}
                width={680}
                loading="eager"
                quality={100}
              />
              <div className="bg-primary flex flex-col rounded-bl-md rounded-br-md justify-center items-center absolute top-0 z-10 right-unit-lg text-white font-base p-unit-sm leading-4">
                <div className="font-bold">{article.date}</div>
                <div className="font-normal">{article.month}</div>
              </div>
            </div>
            <div className="relative top-[-10%] z-10 mx-auto w-[90%]">
              <Card className="border-none shadow-small rounded-md px-unit-lg pt-unit-md pb-unit-sm">
                <CardBody>
                  <div className="flex flex-col space-y-unit-xs">
                    <div className="flex space-x-unit-lg">
                      <div className="flex items-center space-x-unit-xs">
                        <i
                          className={`text-primary text-tiny ${article.adminIcon}`}
                        />
                        <label className="text-content1-oldsilvertext-small text-tiny font-light">
                          {article.admin}
                        </label>
                      </div>
                      <div className="flex items-center space-x-unit-xs">
                        <i
                          className={`text-primary text-tiny ${article.commentsIcon}`}
                        />
                        <label className="text-content1-oldsilvertext-small font-light text-tiny">
                          {article.comments}
                        </label>
                      </div>
                    </div>
                    <Link
                      href="/"
                      className="text-content1-charlestonGreen font-bold text-2xl hover:text-primary"
                    >
                      {article.label}
                    </Link>
                    <div className="border-b border-gray-300" />
                    <div className="flex justify-between items-center">
                      <Link
                        href={`/blogs/${article.params}`}
                        className="text-content1-oldsilver text-small font-medium hover:text-primary flex justify-between w-full items-center"
                      >
                        <span className="">{article.link}</span>
                        <i className={`text-base ${article.linkIcon}`} />
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
