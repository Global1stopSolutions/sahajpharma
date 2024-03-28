import { Containerwrapper } from "@/components/container/container-wrapper";
import { Newsarticlelist } from "@/components/news-article/news-article-list";
import { Subpagehero } from "@/components/sub-page-hero/sub-page-hero";

export default function BlogPage() {
  return (
    <>
      <Subpagehero
        herobg="blog-bg"
        title="News & Article"
        description="Archives"
      />
      <Containerwrapper>
        <Newsarticlelist articleNumber={6} />
      </Containerwrapper>
    </>
  );
}
