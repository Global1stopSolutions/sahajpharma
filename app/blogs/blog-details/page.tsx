"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Subpagehero } from "@/components/sub-page-hero/sub-page-hero";
// import { Containerwrapper } from "@/components/container/container-wrapper";
// import { Blog1 } from "@/components/news-article/blog-1/blog1";

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = useParams();

  return (
    <>
      <Subpagehero
        herobg="blog-bg"
        title="News & Article"
        description="Archives"
      />
      {/* <Containerwrapper>
        <Blog1 />
      </Containerwrapper> */}
    </>
  );
}
