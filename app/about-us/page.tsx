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
          title="Sahaj Pharma for HR Solutions"
          description="Our deep industry knowledge and extensive network of professionals from both domestic and international markets enable us to provide tailored recruitment solutions. We understand the unique challenges and opportunities within the pharmaceutical and chemical sectors."
        />
      </AboutDetail>
      <Ourvalue />
      <Expertcommunity />
      <Teams />
    </>
  );
}
