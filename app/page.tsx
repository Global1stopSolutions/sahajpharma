import { AboutDetail } from "@/components/about";
import { Clients } from "@/components/clients";
import { Companybenfits } from "@/components/company-benifts";
import { Expertcommunity } from "@/components/expert-community";
// import { Faq } from "@/components/faq";
import { HeroSection } from "@/components/hero-section";
// import { JobOpening } from "@/components/job-opening";
// import { Newsarticle } from "@/components/news-article";
// import { Testimonial } from "@/components/testimonial";
import { HeadingDetail } from "@/components/heading-detail";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <JobOpening /> */}
      <AboutDetail>
        <HeadingDetail
          titleWidth="w-[100%]"
          headingTitle="About"
          title="Bridge for industrial and corporate development."
          description="At Sahaj Pharma for HR Solution, we specialize in connecting top-tier talent with leading organizations in the pharmaceutical and chemical industries, both domestically and internationally. Our comprehensive recruitment services are designed to meet the unique needs of job seekers and employers, ensuring successful placements that drive innovation and growth."
        />
      </AboutDetail>
      <Clients />
      <Expertcommunity />
      {/* <Testimonial /> */}
      <Companybenfits />
      {/* <Faq />
      <Newsarticle /> */}
    </>
  );
}
