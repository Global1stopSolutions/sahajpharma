import { AboutDetail } from "@/components/about";
import { Containerwrapper } from "@/components/container/container-wrapper";
import { Expertcommunity } from "@/components/expert-community";
import { HeadingDetail } from "@/components/heading-detail";
import { Ourvalue } from "@/components/our-values";
import { Subpagehero } from "@/components/sub-page-hero/sub-page-hero";
import { Teams } from "@/components/team";

export default function aboutUsPage() {
  return (
    <>
      <Subpagehero
        herobg="about-us-bg"
        title="About us"
        description="Apply now and take the first step in your career journey!"
      />

      <AboutDetail imgageRight={true}>
        <HeadingDetail
          titleWidth="w-[100%]"
          headingTitle="Who we are"
          title="Here’s to growth 
              and happiness in every person’s 
              career journey"
          description="Donec class lacinia vel hac laoreet amet et dictumst suspendisse. Maximus tortor pede egestas quis facilisis est. Neque dis fringilla augue mollis viverra enim conubia pulvinar."
        />
      </AboutDetail>
      <Ourvalue />
      <Expertcommunity />
      <Teams />
    </>
  );
}
