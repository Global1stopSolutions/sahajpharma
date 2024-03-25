import React from "react";
import { HeadingDetail } from "./heading-detail";
import { Containerwrapper } from "./container/container-wrapper";
import { Newsarticlelist } from "./news-article/news-article-list";

export const Newsarticle = () => {
  return (
    <>
      <Containerwrapper>
        <HeadingDetail
          titleWidth="w-[40%]"
          contentCenter
          headingTitle="RECENT NEWS FEED"
          title="Latest news & article from blog"
        />
        <Newsarticlelist articleNumber={3} />
      </Containerwrapper>
    </>
  );
};
